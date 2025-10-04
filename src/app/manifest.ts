import { MetadataRoute } from "next";
import { companyInfo } from "@/data/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agencia Alpha - Inteligencia Artificial",
    short_name: "Agencia Alpha",
    description:
      "Automatiza tu negocio con inteligencia artificial. Especialistas en agentes IA y automatizaciones.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FFD700",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
