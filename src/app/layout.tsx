import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteChrome } from "@/components/site-chrome";
import { siteCopy } from "@/content/site-copy";
import { SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteCopy.seo.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: siteCopy.seo.description,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: "Matt Shill", url: SITE_URL }],
  creator: "Matt Shill",
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteCopy.seo.title,
    description: siteCopy.seo.description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteCopy.seo.title,
    description: siteCopy.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
