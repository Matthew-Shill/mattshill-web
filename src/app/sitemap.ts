import type { MetadataRoute } from "next";
import { LESSON_SLUGS } from "@/content/lessons";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const lessonRoutes = LESSON_SLUGS.map((slug) => ({
    url: `${SITE_URL}/lessons/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE_URL}/weddingpiano.jpg`, `${SITE_URL}/Headshot.jpg`],
    },
    {
      url: `${SITE_URL}/lessons`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...lessonRoutes,
    {
      url: `${SITE_URL}/free-trial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/schedule`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
