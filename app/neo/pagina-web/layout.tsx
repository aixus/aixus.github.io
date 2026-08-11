import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Web NEO — Una web profesional por $500.000",
  description:
    "Página web profesional para independientes y pequeñas empresas. Diseño, desarrollo y publicación por ARS 500.000.",
  keywords: [
    "landing page Argentina",
    "página web para profesionales",
    "página web para pymes",
    "diseño web",
    "AIXUS NEO",
  ],
  openGraph: {
    title: "Página Web NEO — Tu negocio merece una web profesional",
    description: "Una página web clara, atractiva y preparada para generar consultas.",
    type: "website",
    locale: "es_AR",
  },
};

export default function NeoWebLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
