"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./neo.css";

const audiences = [
  "Profesionales independientes",
  "Estudios contables y legales",
  "Emprendimientos",
  "Pequeñas empresas",
  "Consultores y creativos",
];

const solutions = [
  {
    number: "01",
    eyebrow: "IA COTIDIANA",
    title: "Usar mejor las herramientas que ya existen",
    text: "Te ayudamos a incorporar inteligencia artificial en tareas concretas: organizar información, preparar contenidos, analizar opciones y trabajar con más claridad.",
  },
  {
    number: "02",
    eyebrow: "AUTOMATIZACIÓN",
    title: "Ahorrar tiempo en tareas repetitivas",
    text: "Revisamos tu forma de trabajar y detectamos pasos que pueden simplificarse, conectarse o automatizarse sin sumar una estructura innecesaria.",
  },
  {
    number: "03",
    eyebrow: "PRESENCIA DIGITAL",
    title: "Una página web profesional para tu actividad",
    text: "Diseño, desarrollo y publicación de una página clara, atractiva y preparada para transformar visitas en consultas.",
    product: true,
  },
];

const approach = [
  ["01", "Entender", "Primero conocemos tu actividad, tus tiempos y el problema que querés resolver."],
  ["02", "Elegir", "Separamos lo útil de lo accesorio y proponemos una solución proporcional a tu realidad."],
  ["03", "Implementar", "Te acompañamos para que la tecnología quede funcionando y realmente puedas usarla."],
];

export default function NeoHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="neo-page neo-hub">
      <div className="neo-topline">
        <span>IA Y AUTOMATIZACIÓN PARA EL TRABAJO REAL</span>
        <span>UNA PROPUESTA DE AIXUS</span>
      </div>

      <header className="neo-header">
        <a className="neo-brand" href="#neo-hub-inicio" aria-label="AIXUS NEO, volver al inicio" onClick={closeMenu}>
          <span className="neo-logo-crop">
            <Image src="/aixus-neo-logo.png" alt="AIXUS NEO" width={3543} height={3543} priority unoptimized />
          </span>
        </a>

        <nav className={menuOpen ? "neo-nav open" : "neo-nav"} aria-label="Navegación AIXUS NEO">
          <a href="#que-es" onClick={closeMenu}>Qué es NEO</a>
          <a href="#para-quien" onClick={closeMenu}>Para quién</a>
          <a href="#soluciones" onClick={closeMenu}>Qué hacemos</a>
          <Link href="/" onClick={closeMenu}>AIXUS <span>↗</span></Link>
        </nav>

        <Link className="neo-header-cta" href="/neo/pagina-web">
          Página Web NEO <span>↗</span>
        </Link>
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
        <section className="neo-hub-hero" id="neo-hub-inicio">
          <div className="neo-hub-hero-copy">
            <div className="neo-eyebrow"><span /> INTELIGENCIA ARTIFICIAL, MÁS CERCA</div>
            <h1>La tecnología puede simplificar <em>tu trabajo cotidiano.</em></h1>
            <p>
              AIXUS NEO acerca inteligencia artificial, automatización y soluciones digitales
              a profesionales, estudios, emprendimientos y pequeñas empresas.
            </p>
            <div className="neo-hero-actions">
              <a className="neo-button primary" href="#que-es">Conocé AIXUS NEO <span>↓</span></a>
              <Link className="neo-link" href="/neo/pagina-web">Ver Página Web NEO <span>↗</span></Link>
            </div>
          </div>

          <div className="neo-hub-system" aria-label="Inteligencia artificial, automatización y presencia digital conectadas con tu actividad">
            <div className="hub-orbit orbit-a" />
            <div className="hub-orbit orbit-b" />
            <div className="hub-core"><strong>NEO</strong><small>tecnología útil</small></div>
            <div className="hub-node hub-node-a"><i />IA aplicada</div>
            <div className="hub-node hub-node-b"><i />Automatización</div>
            <div className="hub-node hub-node-c"><i />Presencia digital</div>
            <div className="hub-node hub-node-d"><i />Trabajo real</div>
          </div>
        </section>

        <section className="neo-hub-intro neo-section" id="que-es">
          <div className="neo-hub-intro-title">
            <div className="neo-eyebrow dark"><span /> QUÉ ES AIXUS NEO</div>
            <h2>Tecnología útil, en una escala posible.</h2>
          </div>
          <div className="neo-hub-intro-copy">
            <p>
              NEO es la propuesta de AIXUS pensada para quienes quieren aprovechar la tecnología
              sin convertir cada mejora en un proyecto enorme, costoso o difícil de sostener.
            </p>
            <p>
              No se trata de correr detrás de cada novedad. Se trata de entender qué herramienta
              puede ayudarte, cómo incorporarla y dónde realmente vale la pena usarla.
            </p>
            <a href="https://www.instagram.com/aixus.neo/" target="_blank" rel="noreferrer">
              Seguir a @aixus.neo en Instagram <span>↗</span>
            </a>
          </div>
        </section>

        <section className="neo-hub-audience" id="para-quien">
          <p>NEO ESTÁ PENSADO PARA</p>
          <div>
            {audiences.map((audience, index) => (
              <span key={audience}><b>{String(index + 1).padStart(2, "0")}</b>{audience}</span>
            ))}
          </div>
        </section>

        <section className="neo-hub-solutions neo-section" id="soluciones">
          <div className="neo-section-head">
            <div>
              <div className="neo-eyebrow dark"><span /> CÓMO PODEMOS AYUDARTE</div>
              <h2>Soluciones concretas para avanzar sin complicarte.</h2>
            </div>
            <p>
              Partimos de una necesidad real y elegimos la herramienta adecuada. La tecnología
              es el medio; el objetivo es que trabajes mejor.
            </p>
          </div>

          <div className="neo-hub-solution-grid">
            {solutions.map((solution) => (
              <article className={solution.product ? "is-product" : ""} key={solution.number}>
                <div className="hub-card-top"><span>{solution.number}</span><small>{solution.eyebrow}</small></div>
                <div className="hub-card-symbol" aria-hidden="true"><i /><i /><i /></div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                {solution.product && (
                  <div className="hub-product-footer">
                    <strong>$500.000 <small>ARS</small></strong>
                    <Link href="/neo/pagina-web">Ver propuesta completa <span>↗</span></Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="neo-hub-approach">
          <div className="neo-hub-approach-head">
            <div className="neo-eyebrow"><span /> LA FORMA NEO</div>
            <h2>Primero tu trabajo.<br />Después, la tecnología.</h2>
            <p>Una solución es buena cuando se entiende, se puede usar y tiene sentido sostenerla.</p>
          </div>
          <div className="neo-hub-approach-grid">
            {approach.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="neo-hub-feature">
          <div>
            <div className="neo-eyebrow dark"><span /> PRIMER PRODUCTO NEO</div>
            <h2>Tu actividad merece una página web que la represente.</h2>
          </div>
          <div>
            <p>
              Una propuesta cerrada para profesionales y pequeñas empresas: diseño, desarrollo
              y publicación de una página web clara, atractiva y lista para generar consultas.
            </p>
            <div className="neo-hub-feature-price"><span>PAGO ÚNICO</span><strong>$500.000 ARS</strong></div>
            <Link className="neo-hub-feature-link" href="/neo/pagina-web">Conocer Página Web NEO <span>↗</span></Link>
          </div>
        </section>

        <section className="neo-hub-contact">
          <span>¿TENÉS UNA IDEA O UN PROBLEMA CONCRETO?</span>
          <h2>Conversemos sobre cómo la tecnología puede ayudarte.</h2>
          <div>
            <Link href="/#contacto">Contactar a AIXUS <span>↗</span></Link>
            <a href="https://www.instagram.com/aixus.neo/" target="_blank" rel="noreferrer">Instagram @aixus.neo <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="neo-footer">
        <div className="neo-footer-brand">
          <div><span>AIXUS</span><i /><strong>NEO</strong></div>
          <p>Inteligencia artificial y automatización para el trabajo real.</p>
        </div>
        <div className="neo-footer-links">
          <a href="#que-es">Qué es NEO</a>
          <a href="#para-quien">Para quién</a>
          <a href="#soluciones">Qué hacemos</a>
          <Link href="/neo/pagina-web">Página Web NEO</Link>
          <Link href="/">AIXUS</Link>
        </div>
        <div className="neo-footer-bottom">
          <span>© {new Date().getFullYear()} AIXUS NEO</span>
          <a href="#neo-hub-inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </div>
  );
}
