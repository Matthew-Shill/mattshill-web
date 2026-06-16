import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteCopy } from "@/content/site-copy";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matt Shill Music | Online Music Lessons",
  description: siteCopy.tagline,
  openGraph: {
    title: "Matt Shill Music | Online Music Lessons",
    description: siteCopy.tagline,
    url: "https://www.mattshill.com",
    siteName: "Matt Shill Music",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
