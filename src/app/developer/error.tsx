"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
  unstable_retry: () => void;
};

export default function DeveloperErrorPage({
  error,
  unstable_retry,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-24 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
        Error
      </p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#a1a1aa]">
        This page failed to load. Try again, or come back to the portfolio
        later.
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="mt-8 self-start rounded-full border border-[#27272a] bg-[#18181b] px-5 py-2.5 text-sm font-medium text-[#fafafa] transition-colors hover:border-[#3f3f46]"
      >
        Retry
      </button>
    </main>
  );
}
