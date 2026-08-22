"use client";

import { useEffect } from "react";
import { ErrorScreen } from "@/components/error-screen";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteCopy } from "@/content/site-copy";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
  unstable_retry: () => void;
};

const copy = siteCopy.errors.unexpected;

export default function ErrorPage({
  error,
  unstable_retry,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <SiteHeader />
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
      <SiteFooter />
    </>
  );
}
