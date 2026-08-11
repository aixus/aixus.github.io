"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import "../neo.css";

const benefits = [
  {
    number: "01",
    title: "Explica lo que hacés",
    text: "Una propuesta clara para que quien llega entienda rápido qué ofrecés, para quién y por qué elegirte.",
  },
  {
    number: "02",
    title: "Transmite confianza",
    text: "Diseño cuidado, información ordenada y una presencia propia que esté a la altura de tu trabajo.",
  },
  {
    number: "03",
    title: "Genera consultas",
    text: "Recorridos simples y llamados a la acción para convertir una visita en un mensaje, una reserva o una venta.",
  },
];

const included = [
  "Diseño personalizado de tu página web",
  "Hasta 6 secciones de contenido",
  "Versión adaptada a celular y escritorio",
  "Formulario de contacto o botón de WhatsApp",
  "Configuración SEO inicial",
  "Publicación y conexión con tu dominio",
  "Dos rondas de ajustes",
  "Entrega estimada en 10 días hábiles*",
];

const process = [
  ["01", "Nos contás", "Completás el formulario con información sobre tu actividad y tus objetivos."],
  ["02", "Ordenamos", "Definimos la estructura, los mensajes principales y el recorrido de la página."],
  ["03", "Diseñamos", "Creamos una versión visual completa y la ajustamos junto con vos."],
  ["04", "Publicamos", "Dejamos la página web funcionando en tu dominio y lista para compartir."],
];

export default function NeoWebPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function sendOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const values = new FormData(form);
    const message = form.elements.namedItem("message") as HTMLTextAreaElement;
    message.value = [
      "Nueva consulta desde AIXUS NEO — Página Web ARS 500.000",
      `Actividad/organización: ${values.get("organization") || "No indicada"}`,
      `Tipo de proyecto: ${values.get("project_type") || "No indicado"}`,
      `Web o redes actuales: ${values.get("current_presence") || "No indicadas"}`,
      `Detalle: ${values.get("project_details") || "Sin detalle"}`,
    ].join("\n\n");

    setFormState("sending");
    try {
      const { sendForm } = await import("@emailjs/browser");
      await sendForm("service_0kc69b9", "template_u76q6ff", form, {
        publicKey: "-gMkX3hKNo5ynn4BH",
      });
      form.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  }

  return (
    <div className="neo-page">
      <div className="neo-topline">
        <span>PÁGINAS WEB PARA NEGOCIOS REALES</span>
        <span>DISEÑO · DESARROLLO · PUBLICACIÓN</span>
      </div>

      <header className="neo-header">
        <Link className="neo-brand" href="/neo" aria-label="Volver a AIXUS NEO">
          <span className="neo-logo-crop">
            <Image src="/aixus-neo-logo.png" alt="AIXUS NEO" width={3543} height={3543} priority unoptimized />
          </span>
        </Link>

        <nav className={menuOpen ? "neo-nav open" : "neo-nav"} aria-label="Navegación AIXUS NEO">
          <Link href="/neo" onClick={() => setMenuOpen(false)}>Sobre NEO</Link>
          <a href="#para-quien" onClick={() => setMenuOpen(false)}>Para quién</a>
          <a href="#propuesta" onClick={() => setMenuOpen(false)}>La propuesta</a>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
        </nav>

        <a className="neo-header-cta" href="#encargar">Quiero mi página web <span>↗</span></a>
        <button
          className={menuOpen ? "neo-menu open" : "neo-menu"}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i /><i />
        </button>
      </header>

      <main>
        <section className="neo-hero" id="neo-inicio">
          <div className="neo-hero-copy">
            <div className="neo-eyebrow"><span /> PRESENCIA DIGITAL, SIN COMPLICARLA</div>
            <h1>Tu negocio ya es profesional. <em>Tu web también debería serlo.</em></h1>
            <p>
              Creamos páginas web de presentación —también llamadas landing pages— claras,
              atractivas y preparadas para convertir visitas en consultas. Pensadas para
              profesionales independientes y pequeñas empresas.
            </p>
            <div className="neo-hero-actions">
              <a className="neo-button primary" href="#encargar">Encargar mi página web <span>↗</span></a>
              <a className="neo-link" href="#propuesta">Ver qué incluye <span>↓</span></a>
            </div>
            <div className="neo-hero-price">
              <span>INVERSIÓN</span>
              <strong>$500.000</strong>
              <small>ARS · PAGO ÚNICO</small>
            </div>
          </div>

          <div className="neo-browser" aria-label="Ejemplo estilizado de una página web profesional">
            <div className="browser-chrome">
              <div><i /><i /><i /></div>
              <span>tunegocio.com.ar</span>
              <b>↗</b>
            </div>
            <div className="browser-page">
              <div className="demo-nav">
                <span>ESTUDIO.</span>
                <div><i /><i /><i /></div>
              </div>
              <div className="demo-hero">
                <small>SOLUCIONES PROFESIONALES</small>
                <h2>Tu experiencia.<br />Bien presentada.</h2>
                <p>Un mensaje simple, una identidad sólida y una forma clara de contactarte.</p>
                <button type="button">Conversemos <span>↗</span></button>
              </div>
              <div className="demo-stats">
                <div><b>01</b><span>Claridad</span></div>
                <div><b>02</b><span>Confianza</span></div>
                <div><b>03</b><span>Consultas</span></div>
              </div>
              <div className="demo-orbit"><i /><i /><i /></div>
            </div>
            <div className="browser-tag tag-one">MOBILE READY <i /></div>
            <div className="browser-tag tag-two">SEO INICIAL <i /></div>
          </div>
        </section>

        <section className="neo-audience" id="para-quien">
          <p>Una web profesional para</p>
          <div>
            <span>Consultores</span><i />
            <span>Estudios</span><i />
            <span>Profesionales</span><i />
            <span>Emprendimientos</span><i />
            <span>Pequeñas empresas</span>
          </div>
        </section>

        <section className="neo-benefits neo-section">
          <div className="neo-section-head">
            <div>
              <div className="neo-eyebrow dark"><span /> MÁS QUE “ESTAR EN INTERNET”</div>
              <h2>Una página web que trabaja por vos.</h2>
            </div>
            <p>
              Tu página tiene pocos segundos para demostrar que entendés el problema de tu cliente.
              La diseñamos para que cada sección cumpla una función.
            </p>
          </div>
          <div className="neo-benefit-grid">
            {benefits.map((benefit) => (
              <article key={benefit.number}>
                <span>{benefit.number}</span>
                <div className={`benefit-symbol symbol-${benefit.number}`} aria-hidden="true"><i /><i /><i /></div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="neo-offer" id="propuesta">
          <div className="neo-offer-copy">
            <div className="neo-eyebrow"><span /> PROPUESTA NEO</div>
            <h2>Todo lo necesario para salir con una web que te represente.</h2>
            <p>
              Una propuesta cerrada y simple: definimos, diseñamos, construimos y publicamos tu página web.
              Sin abonos mensuales de desarrollo ni costos escondidos.
            </p>
            <div className="neo-guarantee">
              <strong>100%</strong>
              <span>DISEÑO RESPONSIVE<br />Y PERSONALIZADO</span>
            </div>
          </div>

          <div className="neo-package">
            <div className="package-top">
              <span>PÁGINA WEB NEO</span>
              <small>PAQUETE 01</small>
            </div>
            <div className="package-price">
              <small>ARS</small>
              <strong>$500.000</strong>
              <span>PAGO ÚNICO</span>
            </div>
            <ul>
              {included.map((item) => <li key={item}><span>✓</span>{item}</li>)}
            </ul>
            <a href="#encargar">Quiero empezar <span>↗</span></a>
            <div className="package-extras-note">
              <strong>Alojamiento y dominio</strong>
              <p>
                No forman parte del precio. Al entregar la página te damos una recomendación concreta
                para comenzar con alojamiento sin costo y registrar un dominio conveniente para tu proyecto.
              </p>
            </div>
            <p className="package-deadline">*El plazo comienza una vez recibido todo el contenido.</p>
          </div>
        </section>

        <section className="neo-process neo-section" id="proceso">
          <div className="neo-section-head">
            <div>
              <div className="neo-eyebrow dark"><span /> DE IDEA A WEB PUBLICADA</div>
              <h2>Un proceso claro, de principio a fin.</h2>
            </div>
            <p>Vos conocés tu negocio. Nosotros te ayudamos a ordenarlo y presentarlo de la mejor manera.</p>
          </div>
          <div className="neo-process-grid">
            {process.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <i />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="neo-manifesto">
          <div className="manifesto-brand">
            <span>AIXUS</span><i /> <strong>NEO</strong>
          </div>
          <blockquote>
            La tecnología también puede ser <em>simple, cercana y accesible.</em>
          </blockquote>
          <p>
            AIXUS NEO acerca diseño y tecnología profesional a quienes están haciendo crecer su actividad,
            sin estructuras innecesarias ni proyectos interminables.
          </p>
        </section>

        <section className="neo-order neo-section" id="encargar">
          <div className="neo-order-copy">
            <div className="neo-eyebrow"><span /> EMPECEMOS</div>
            <h2>Contanos sobre tu proyecto.</h2>
            <p>
              No necesitás tener todo resuelto. Con algunos datos básicos podemos evaluar la idea
              y coordinar una primera conversación.
            </p>
            <div className="neo-order-summary">
              <span>PÁGINA WEB NEO</span>
              <strong>$500.000 ARS</strong>
              <small>PAGO ÚNICO · ALOJAMIENTO Y DOMINIO POR SEPARADO</small>
            </div>
          </div>

          <form className="neo-form" onSubmit={sendOrder}>
            <div className="neo-form-row">
              <label>
                <span>Nombre</span>
                <input name="from_name" type="text" placeholder="¿Cómo te llamás?" required />
              </label>
              <label>
                <span>Correo</span>
                <input name="from_email" type="email" placeholder="tu@email.com" required />
              </label>
            </div>
            <label>
              <span>Actividad o negocio</span>
              <input name="organization" type="text" placeholder="¿A qué te dedicás?" required />
            </label>
            <div className="neo-form-row">
              <label>
                <span>Tipo de proyecto</span>
                <select name="project_type" defaultValue="" required>
                  <option value="" disabled>Seleccioná una opción</option>
                  <option>Profesional independiente</option>
                  <option>Estudio o consultora</option>
                  <option>Emprendimiento</option>
                  <option>Pequeña empresa</option>
                  <option>Otro</option>
                </select>
              </label>
              <label>
                <span>Web o redes actuales <small>(opcional)</small></span>
                <input name="current_presence" type="text" placeholder="Pegá el enlace" />
              </label>
            </div>
            <label>
              <span>¿Qué te gustaría lograr?</span>
              <textarea name="project_details" rows={4} placeholder="Contanos brevemente qué necesitás..." required />
            </label>
            <textarea className="neo-hidden-message" name="message" aria-hidden="true" tabIndex={-1} />
            <div className="neo-form-submit">
              <p>Te contactamos para conversar sobre el proyecto antes de avanzar.</p>
              <button type="submit" disabled={formState === "sending"}>
                {formState === "sending" ? "Enviando..." : "Enviar consulta"}<span>↗</span>
              </button>
            </div>
            <div className={`neo-form-status ${formState}`} role="status" aria-live="polite">
              {formState === "sent" && "Listo. Recibimos tu consulta y vamos a contactarte."}
              {formState === "error" && "No pudimos enviar la consulta. Intentá nuevamente en unos minutos."}
            </div>
          </form>
        </section>
      </main>

      <footer className="neo-footer">
        <div className="neo-footer-brand">
          <div><span>AIXUS</span><i /><strong>NEO</strong></div>
          <p>Presencia digital para negocios que están creciendo.</p>
        </div>
        <div className="neo-footer-links">
          <Link href="/neo">Sobre AIXUS NEO</Link>
          <a href="#para-quien">Para quién</a>
          <a href="#propuesta">Propuesta</a>
          <a href="#proceso">Proceso</a>
          <Link href="/">AIXUS</Link>
        </div>
        <div className="neo-footer-bottom">
          <span>© {new Date().getFullYear()} AIXUS NEO</span>
          <a href="#neo-inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </div>
  );
}
