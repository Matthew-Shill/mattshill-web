import type { NextConfig } from "next";
import { DEVELOPER_HOST } from "./src/lib/developer-host";

const developerHost = {
  type: "host" as const,
  value: DEVELOPER_HOST,
};

const noindexHeaders = [
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
];

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
      ],
      afterFiles: [
        {
          source: "/:path*",
          has: [developerHost],
          destination: "/developer/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
