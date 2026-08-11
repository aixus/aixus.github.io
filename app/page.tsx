"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Estrategia de IA",
    text: "Detectamos dónde la inteligencia artificial puede generar valor real, priorizamos oportunidades y diseñamos una hoja de ruta posible.",
    tags: ["Diagnóstico", "Roadmap", "Gobernanza"],
  },
  {
    number: "02",
    title: "Diseño de soluciones",
    text: "Convertimos una necesidad concreta en una solución tecnológica clara, escalable e integrada a la operación de tu organización.",
    tags: ["Prototipos", "Integraciones", "Automatización"],
  },
  {
    number: "03",
    title: "Datos y analítica",
    text: "Ordenamos, conectamos y analizamos información para que tus datos dejen de estar dispersos y empiecen a orientar decisiones.",
    tags: ["Dashboards", "Modelos", "Información"],
  },
  {
    number: "04",
    title: "Implementación aplicada",
    text: "Acompañamos la puesta en marcha, la adopción y la mejora continua para que la tecnología funcione también fuera de la demo.",
    tags: ["Despliegue", "Adopción", "Evolución"],
  },
];

const solutions = [
  {
    eyebrow: "OPERACIONES",
    title: "Automatizar lo repetitivo sin perder control",
    text: "Flujos que leen, clasifican, comparan y organizan información para reducir tareas manuales y liberar tiempo del equipo.",
    metric: "Procesos más simples",
  },
  {
    eyebrow: "CONOCIMIENTO",
    title: "Hacer accesible la información que ya tenés",
    text: "Asistentes y buscadores que trabajan sobre documentación propia, respetando contexto, permisos y trazabilidad.",
    metric: "Respuestas con contexto",
  },
  {
    eyebrow: "DECISIONES",
    title: "Transformar datos dispersos en señales claras",
    text: "Tableros, análisis y modelos que permiten entender qué está pasando, por qué y dónde conviene actuar.",
    metric: "Datos accionables",
  },
];

const steps = [
  ["01", "Entender", "Nos metemos en el problema, el proceso y sus restricciones reales."],
  ["02", "Diseñar", "Definimos una solución útil, medible y proporcional a la necesidad."],
  ["03", "Probar", "Construimos una primera versión y la validamos con usuarios concretos."],
  ["04", "Implementar", "Integramos, acompañamos la adopción y mejoramos con evidencia."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

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

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="AIXUS, volver al inicio" onClick={closeMenu}>
          <Image src="/aixus-logo.png" alt="AIXUS" width={1215} height={562} priority unoptimized />
          <span className="brand-line" aria-hidden="true" />
          <span className="brand-caption">Tecnología aplicada</span>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#soluciones" onClick={closeMenu}>Soluciones</a>
          <a href="#metodo" onClick={closeMenu}>Cómo trabajamos</a>
          <a href="#aixus" onClick={closeMenu}>Sobre AIXUS</a>
          <Link href="/neo" onClick={closeMenu}>AIXUS NEO</Link>
        </nav>

        <a className="header-cta" href="#contacto">Hablemos <span>↗</span></a>
        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow light"><span /> CONSULTORÍA · DISEÑO · IMPLEMENTACIÓN</div>
            <h1>Tecnología que entiende cómo trabaja tu organización.</h1>
            <p className="hero-intro">
              Diseñamos proyectos de inteligencia artificial, automatización y datos
              que resuelven necesidades concretas y se integran a procesos reales.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">Contanos tu desafío <span>↗</span></a>
              <a className="text-link" href="#servicios">Explorar servicios <span>↓</span></a>
            </div>
          </div>

          <div className="hero-system" aria-label="Representación de conexiones entre estrategia, datos y tecnología">
            <div className="system-orbit orbit-one" />
            <div className="system-orbit orbit-two" />
            <div className="system-orbit orbit-three" />
            <div className="system-core">
              <span className="core-pulse" />
              <strong>AI</strong>
              <small>aplicada</small>
            </div>
            <div className="system-node node-one"><span />Estrategia</div>
            <div className="system-node node-two"><span />Datos</div>
            <div className="system-node node-three"><span />Procesos</div>
            <div className="system-node node-four"><span />Personas</div>
            <div className="signal signal-one" />
            <div className="signal signal-two" />
          </div>

          <div className="hero-foot">
            <span>IA CON CRITERIO HUMANO</span>
            <p>Primero el problema. Después, la tecnología.</p>
          </div>
        </section>

        <section className="services section" id="servicios">
          <div className="section-heading">
            <div className="eyebrow"><span /> QUÉ HACEMOS</div>
            <h2>De una oportunidad difusa a un proyecto que funciona.</h2>
            <p>
              Combinamos mirada estratégica y capacidad técnica para acompañar el ciclo completo,
              desde la primera pregunta hasta la implementación.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="statement">
          <div className="statement-inner">
            <div className="statement-mark" aria-hidden="true">
              <span>A</span><i /><span>X</span>
            </div>
            <blockquote>
              “La mejor tecnología no es la más llamativa. Es la que se vuelve parte natural de cómo trabajamos.”
            </blockquote>
            <p>AIXUS / TECNOLOGÍA APLICADA</p>
          </div>
        </section>

        <section className="solutions section" id="soluciones">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow"><span /> DÓNDE APORTAMOS VALOR</div>
              <h2>Soluciones pensadas desde el trabajo real.</h2>
            </div>
            <p>
              No partimos de una herramienta para buscarle un uso. Partimos de una dificultad,
              entendemos el contexto y elegimos la tecnología adecuada.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <article className="solution-card" key={solution.eyebrow}>
                <div className="solution-top">
                  <span>{solution.eyebrow}</span>
                  <small>0{index + 1}</small>
                </div>
                <div className={`solution-visual visual-${index + 1}`} aria-hidden="true">
                  <i /><i /><i /><i /><i />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <div className="solution-metric"><span /> {solution.metric}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="method section" id="metodo">
          <div className="method-intro">
            <div className="eyebrow light"><span /> NUESTRO MÉTODO</div>
            <h2>Avanzar rápido, sin saltear lo importante.</h2>
            <p>
              Trabajamos en etapas cortas, con decisiones visibles y validación temprana.
              Así reducimos incertidumbre antes de invertir de más.
            </p>
          </div>

          <div className="steps">
            {steps.map(([number, title, text]) => (
              <article className="step" key={number}>
                <span>{number}</span>
                <div className="step-line"><i /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="aixus">
          <div className="about-label">
            <div className="eyebrow"><span /> SOBRE AIXUS</div>
            <p>INTELIGENCIA ARTIFICIAL<br />+ CREATIVIDAD HUMANA</p>
          </div>
          <div className="about-content">
            <h2>Una mirada realista sobre la inteligencia artificial.</h2>
            <p className="about-lead">
              AIXUS nace de una convicción: el valor de la IA no está en reemplazar el criterio
              humano, sino en amplificarlo.
            </p>
            <div className="about-columns">
              <p>
                Los modelos son cada vez más potentes, pero su impacto depende de cómo se aplican.
                Una solución útil necesita comprender procesos, personas, restricciones y objetivos;
                no solamente elegir una herramienta.
              </p>
              <p>
                Por eso trabajamos cerca de cada organización, combinando conocimiento técnico,
                diseño de proyectos y una lectura concreta del contexto. Menos promesas abstractas.
                Más tecnología que ayuda a trabajar mejor.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="contact-copy">
            <div className="eyebrow light"><span /> EMPECEMOS</div>
            <h2>¿Tenés un desafío en mente?</h2>
            <p>
              Contanos qué querés mejorar. Podemos ayudarte a convertirlo en un proyecto claro,
              viable y con impacto medible.
            </p>
            <div className="contact-note">
              <span>01</span>
              <p>Nos escribís con una idea o problema. No hace falta que ya tengas definida la solución.</p>
            </div>
            <div className="contact-note">
              <span>02</span>
              <p>Coordinamos una primera conversación para entender el contexto y evaluar próximos pasos.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendMessage}>
            <div className="form-row">
              <label>
                <span>Nombre</span>
                <input type="text" name="from_name" placeholder="¿Cómo te llamás?" required />
              </label>
              <label>
                <span>Correo</span>
                <input type="email" name="from_email" placeholder="tu@organizacion.com" required />
              </label>
            </div>
            <label>
              <span>Organización <small>(opcional)</small></span>
              <input type="text" name="organization" placeholder="Nombre de tu organización" />
            </label>
            <label>
              <span>¿En qué podemos ayudarte?</span>
              <textarea name="message" placeholder="Contanos brevemente el desafío o la idea..." rows={5} required />
            </label>
            <div className="form-submit">
              <p>Respondemos personalmente cada consulta.</p>
              <button type="submit" disabled={formState === "sending"}>
                {formState === "sending" ? "Enviando..." : "Enviar consulta"} <span>↗</span>
              </button>
            </div>
            <div className={`form-status ${formState}`} role="status" aria-live="polite">
              {formState === "sent" && "Gracias. Tu mensaje fue enviado correctamente."}
              {formState === "error" && "No pudimos enviar el mensaje. Por favor, intentá nuevamente."}
            </div>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <Image src="/aixus-logo.png" alt="AIXUS" width={1215} height={562} unoptimized />
          <p>Tecnología aplicada a desafíos reales.</p>
        </div>
        <div className="footer-links">
          <a href="#servicios">Servicios</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#metodo">Método</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AIXUS. Todos los derechos reservados.</p>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </>
  );
}
