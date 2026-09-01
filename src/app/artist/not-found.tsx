import type { Metadata } from "next";
import { artistCopy } from "./_content";
import { getArtistHomeHref } from "./_lib/paths";

export const metadata: Metadata = {
  title: { absolute: "Page not found — Matt Shill" },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ArtistNotFound() {
  const homeHref = await getArtistHomeHref();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 py-24 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--artist-muted)]">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--artist-muted)]">
        This path is not part of the artist press kit. Check the link, or go
        back to the main page.
      </p>
      <a
        href={homeHref}
        className="mt-8 self-start rounded-full border border-[var(--artist-border)] bg-[var(--artist-soft)] px-5 py-2.5 text-sm font-medium text-[var(--artist-fg)] transition-colors hover:border-[var(--artist-accent)]"
      >
        Back to {artistCopy.name}
      </a>
    </main>
  );
}
