import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { companyInfo } from "@/data/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Agencia Alpha - Inteligencia Artificial para tu Negocio",
    template: "%s | Agencia Alpha",
  },
  description:
    "Automatiza tu negocio con inteligencia artificial. Especialistas en agentes IA, lead generation y automatizaciones N8N. Villahermosa, Tabasco, México.",
  keywords: [
    "inteligencia artificial",
    "automatización",
    "agentes IA",
    "lead generation",
    "N8N",
    "Villahermosa",
    "Tabasco",
    "México",
  ],
  authors: [{ name: "Agencia Alpha" }],
  creator: "Agencia Alpha",
  publisher: "Agencia Alpha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`https://${companyInfo.domain}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agencia Alpha - Inteligencia Artificial para tu Negocio",
    description:
      "Automatiza tu negocio con inteligencia artificial. Especialistas en agentes IA, lead generation y automatizaciones N8N.",
    url: `https://${companyInfo.domain}`,
    siteName: "Agencia Alpha",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agencia Alpha - Inteligencia Artificial",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia Alpha - Inteligencia Artificial para tu Negocio",
    description:
      "Automatiza tu negocio con inteligencia artificial. Especialistas en agentes IA, lead generation y automatizaciones N8N.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
