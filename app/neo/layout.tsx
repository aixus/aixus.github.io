import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIXUS NEO — Inteligencia artificial y automatización más cerca",
  description:
    "AIXUS NEO acerca inteligencia artificial, automatización y soluciones digitales a profesionales, estudios, emprendimientos y pequeñas empresas.",
  keywords: [
    "inteligencia artificial para profesionales",
    "automatización para pequeñas empresas",
    "consultoría IA Argentina",
    "AIXUS NEO",
  ],
  openGraph: {
    title: "AIXUS NEO — Tecnología útil para el trabajo real",
    description: "Inteligencia artificial, automatización y presencia digital en una escala posible.",
    type: "website",
    locale: "es_AR",
  },
};

export default function NeoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
