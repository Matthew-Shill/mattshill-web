import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";
import { siteCopy } from "@/content/site-copy";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Matt Shill",
    description: siteCopy.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9fc",
    theme_color: "#0331bd",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
