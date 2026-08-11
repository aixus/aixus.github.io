import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIXUS — Consultoría en Inteligencia Artificial",
  description:
    "Diseñamos proyectos de inteligencia artificial, automatización y datos que se integran a procesos reales.",
  keywords: [
    "inteligencia artificial",
    "consultoría en IA",
    "automatización",
    "análisis de datos",
    "diseño de proyectos",
  ],
  openGraph: {
    title: "AIXUS — Tecnología que entiende tu organización",
    description:
      "Consultoría, diseño e implementación de proyectos de IA, automatización y datos.",
    type: "website",
    locale: "es_AR",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
