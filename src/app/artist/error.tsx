"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
  unstable_retry: () => void;
};

export default function ArtistErrorPage({
  error,
  unstable_retry,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 py-24 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--artist-muted)]">
        Error
      </p>
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--artist-muted)]">
        This page failed to load. Try again, or come back to the press kit
        later.
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="mt-8 self-start rounded-full border border-[var(--artist-border)] bg-[var(--artist-soft)] px-5 py-2.5 text-sm font-medium text-[var(--artist-fg)] transition-colors hover:border-[var(--artist-accent)]"
      >
        Retry
      </button>
    </main>
  );
}
