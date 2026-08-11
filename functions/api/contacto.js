const DESTINATION = "contacto@aixus.com.ar";
const SENDER = "Formulario web de AIXUS <web@formularios.aixus.com.ar>";
const RESEND_API_URL = "https://api.resend.com/emails";
const MAX_BODY_BYTES = 20_000;

function json(body, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function line(label, value) {
  return value ? `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replaceAll("\n", "<br>")}</p>` : "";
}

export async function onRequestPost({ request, env }) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "Solicitud demasiado grande" }, 413);
  }

  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ ok: false, error: "Origen no permitido" }, 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Solicitud inválida" }, 400);
  }

  if (clean(body.website, 200)) {
    return json({ ok: true });
  }

  const formType = body.form_type === "neo-web" ? "neo-web" : "general";
  const name = clean(body.from_name, 100);
  const email = clean(body.from_email, 254).toLowerCase();
  const organization = clean(body.organization, 160);
  const message = clean(body.message || body.project_details, 4_000);
  const projectType = clean(body.project_type, 120);
  const currentPresence = clean(body.current_presence, 500);

  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 5) {
    return json({ ok: false, error: "Completá correctamente los campos obligatorios" }, 400);
  }

  if (!env.RESEND_API_KEY) {
    console.error("Falta el secreto RESEND_API_KEY");
    return json({ ok: false, error: "Servicio de correo no configurado" }, 503);
  }

  const isNeo = formType === "neo-web";
  const subject = isNeo ? "Nueva consulta — Página Web NEO" : "Nueva consulta — AIXUS";
  const html = [
    `<h1>${subject}</h1>`,
    line("Nombre", name),
    line("Correo para responder", email),
    line(isNeo ? "Actividad o negocio" : "Organización", organization),
    line("Tipo de proyecto", projectType),
    line("Web o redes actuales", currentPresence),
    line(isNeo ? "Objetivo de la página" : "Consulta", message),
  ].join("");
  const text = [
    subject,
    `Nombre: ${name}`,
    `Correo para responder: ${email}`,
    organization ? `${isNeo ? "Actividad o negocio" : "Organización"}: ${organization}` : "",
    projectType ? `Tipo de proyecto: ${projectType}` : "",
    currentPresence ? `Web o redes actuales: ${currentPresence}` : "",
    `${isNeo ? "Objetivo de la página" : "Consulta"}: ${message}`,
  ].filter(Boolean).join("\n\n");

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SENDER,
        to: [DESTINATION],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const details = (await response.text()).slice(0, 1_000);
      console.error("Resend rechazó la consulta", response.status, details);
      return json({ ok: false, error: "No se pudo enviar la consulta" }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error("No se pudo enviar la consulta", error);
    return json({ ok: false, error: "No se pudo enviar la consulta" }, 502);
  }
}

export function onRequest() {
  return json({ ok: false, error: "Método no permitido" }, 405);
}
