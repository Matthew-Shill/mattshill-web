"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import { ErrorScreen } from "@/components/error-screen";
import { siteCopy } from "@/content/site-copy";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
  unstable_retry: () => void;
};

const copy = siteCopy.errors.unexpected;

export default function GlobalError({
  error,
  unstable_retry,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <title>{`${copy.title} | ${siteCopy.businessName}`}</title>
        <header className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-6">
            <a href="/" className="inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt={siteCopy.businessName}
                className="h-10 w-auto sm:h-12"
              />
            </a>
          </div>
        </header>
        <ErrorScreen
          variant="error"
          code={copy.code}
          eyebrow={siteCopy.businessName}
          title={copy.title}
          body={copy.body}
          digest={error.digest}
          primaryAction={
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
            >
              {copy.retry}
            </button>
          }
        />
      </body>
    </html>
  );
}
