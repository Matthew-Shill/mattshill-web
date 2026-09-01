import type { Metadata } from "next";
import { Caprasimo } from "next/font/google";
import { ArtistFooter } from "./_components/footer";
import { ArtistHeader } from "./_components/header";
import { ARTIST_ORIGIN } from "@/lib/artist-host";
import { artistCopy } from "./_content";
import "./artist.css";

const caprasimo = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-artist-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: artistCopy.seo.title,
  },
  description: artistCopy.seo.description,
  keywords: [
    "Matt Shill",
    "Matt Shill music",
    "Don't Find Me",
    "singer-songwriter",
    "Denver musician",
    "book Matt Shill",
    "EPK",
  ],
  authors: [{ name: "Matt Shill" }],
  creator: "Matt Shill",
  publisher: "Matt Shill",
  category: "music",
  alternates: {
    canonical: ARTIST_ORIGIN,
  },
  openGraph: {
    title: artistCopy.seo.title,
    description: artistCopy.seo.description,
    url: ARTIST_ORIGIN,
    siteName: "Matt Shill",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: artistCopy.seo.title,
    description: artistCopy.seo.description,
  },
};

export default function ArtistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-artist-site
      className={`${caprasimo.variable} flex min-h-full flex-1 flex-col bg-[var(--artist-bg)] text-[var(--artist-fg)]`}
    >
      <ArtistHeader />
      {children}
      <ArtistFooter />
    </div>
  );
}
