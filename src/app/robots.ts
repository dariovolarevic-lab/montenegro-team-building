import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/coming-soon"],
      },
    ],
    sitemap: "https://www.montenegroteambuilding.com/sitemap.xml",
  };
}
