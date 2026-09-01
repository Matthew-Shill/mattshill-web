import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { ARTIST_HOST, isArtistHost } from "@/lib/artist-host";
import { isDeveloperHost } from "@/lib/developer-host";
import { SITE_URL } from "@/lib/site";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ?? headerList.get("host");

  if (isDeveloperHost(host)) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  if (isArtistHost(host)) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: `${SITE_URL}/sitemap.xml`,
      host: `https://${ARTIST_HOST}`,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portal", "/developer"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
