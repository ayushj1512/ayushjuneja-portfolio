import { seo } from "@/data/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"]
    },
    sitemap: `${seo.baseUrl}/sitemap.xml`,
    host: seo.baseUrl
  };
}
