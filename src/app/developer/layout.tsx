import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { DEVELOPER_ORIGIN } from "@/lib/developer-host";
import "./developer.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-developer",
});

export const metadata: Metadata = {
  title: {
    absolute: "Matt Shill — Developer",
  },
  description:
    "Software developer and founder. I build focused products, from an AI-driven music education platform to production systems for businesses I run.",
  keywords: ["Matt Shill", "software developer", "portfolio"],
  authors: [{ name: "Matt Shill" }],
  creator: "Matt Shill",
  publisher: "Matt Shill",
  category: "technology",
  alternates: {
    canonical: DEVELOPER_ORIGIN,
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
  openGraph: {
    title: "Matt Shill — Developer",
    description: "Personal software developer portfolio.",
    url: DEVELOPER_ORIGIN,
    siteName: "Matt Shill",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Shill — Developer",
    description: "Personal software developer portfolio.",
  },
};

export default function DeveloperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-developer-portfolio
      className={`${geist.variable} flex min-h-full flex-1 flex-col bg-[#09090b] font-[family-name:var(--font-developer)] text-[#fafafa]`}
    >
      {children}
    </div>
  );
}
