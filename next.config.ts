import type { NextConfig } from "next";
import { ARTIST_HOST, ARTIST_ORIGIN } from "./src/lib/artist-host";
import { DEVELOPER_HOST, DEVELOPER_ORIGIN } from "./src/lib/developer-host";

const developerHost = {
  type: "host" as const,
  value: DEVELOPER_HOST,
};

const artistHost = {
  type: "host" as const,
  value: ARTIST_HOST,
};

const teachingHosts = [
  { type: "host" as const, value: "www.mattshill.com" },
  { type: "host" as const, value: "mattshill.com" },
] as const;

const noindexHeaders = [
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
];

function teachingRedirects(source: string, destination: string) {
  return teachingHosts.map((host) => ({
    source,
    has: [host],
    destination,
    permanent: true,
  }));
}

const shareImageNames = ["opengraph-image", "twitter-image"] as const;

function hostShareImageRewrites(
  host: typeof artistHost | typeof developerHost,
  prefix: "artist" | "developer",
) {
  return shareImageNames.map((name) => ({
    source: `/${name}`,
    has: [host],
    destination: `/${prefix}/${name}`,
  }));
}

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/developer",
        headers: noindexHeaders,
      },
      {
        source: "/developer/:path*",
        headers: noindexHeaders,
      },
      {
        source: "/",
        has: [developerHost],
        headers: noindexHeaders,
      },
      {
        source: "/:path*",
        has: [developerHost],
        headers: noindexHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/developer",
        has: [developerHost],
        destination: "/",
        permanent: false,
      },
      {
        source: "/developer/:path*",
        has: [developerHost],
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/artist",
        has: [artistHost],
        destination: "/",
        permanent: false,
      },
      {
        source: "/artist/:path*",
        has: [artistHost],
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/epk",
        has: [artistHost],
        destination: "/",
        permanent: false,
      },
      ...teachingRedirects("/developer", DEVELOPER_ORIGIN),
      ...teachingRedirects(
        "/developer/:path((?!opengraph-image|twitter-image).*)",
        `${DEVELOPER_ORIGIN}/:path`,
      ),
      ...teachingRedirects("/artist", ARTIST_ORIGIN),
      ...teachingRedirects(
        "/artist/:path((?!opengraph-image|twitter-image).*)",
        `${ARTIST_ORIGIN}/:path`,
      ),
      ...teachingRedirects("/epk", ARTIST_ORIGIN),
      {
        source: "/epk",
        destination: "/artist",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [developerHost],
          destination: "/developer",
        },
        {
          source: "/",
          has: [artistHost],
          destination: "/artist",
        },
        ...hostShareImageRewrites(developerHost, "developer"),
        ...hostShareImageRewrites(artistHost, "artist"),
      ],
      afterFiles: [
        {
          source: "/:path*",
          has: [developerHost],
          destination: "/developer/:path*",
        },
        {
          source: "/:path*",
          has: [artistHost],
          destination: "/artist/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
