import { MetadataRoute } from "next";
import { companyInfo } from "@/data/content";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${companyInfo.domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
