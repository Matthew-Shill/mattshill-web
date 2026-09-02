import type { MetadataRoute } from "next";
import { LESSON_SLUGS } from "@/content/lessons";
import { ARTIST_ORIGIN } from "@/lib/artist-host";
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
      url: ARTIST_ORIGIN,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${SITE_URL}/artist-hero.png`],
    },
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
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
