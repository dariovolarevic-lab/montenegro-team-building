import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/activities";

const BASE = "https://www.montenegroteambuilding.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const activityPages = getAllSlugs().map((slug) => ({
    url: `${BASE}/activity/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...activityPages,
  ];
}
