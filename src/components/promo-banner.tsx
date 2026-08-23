"use client";

import Link from "next/link";
import { useState } from "react";
import { siteCopy } from "@/content/site-copy";
import { WELCOME10_CODE, writeBannerDismissed } from "@/lib/promo";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!visible) return null;

  return (
    <div className="bg-coral text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-1.5 sm:px-6">
        <p className="min-w-0 flex-1 truncate text-center text-sm font-medium">
          <Link href="/#pricing" className="hover:underline">
            <span className="sm:hidden">{siteCopy.promo.bannerMobile} </span>
            <span className="hidden sm:inline">
              {siteCopy.promo.bannerDesktop}{" "}
            </span>
          </Link>
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(WELCOME10_CODE);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 2000);
              } catch {
                setCopied(false);
              }
            }}
            aria-label={
              copied ? siteCopy.promo.popupCopied : siteCopy.promo.popupCopyCode
            }
            className="ml-1 inline-block rounded-full bg-accent px-2 py-0.5 align-middle text-xs font-semibold tracking-wide hover:bg-accent-hover"
          >
            {copied ? siteCopy.promo.popupCopied : WELCOME10_CODE}
          </button>
        </p>
        <button
          type="button"
          onClick={() => {
            writeBannerDismissed();
            setVisible(false);
          }}
          aria-label={siteCopy.promo.bannerDismiss}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-black/10 hover:text-white"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
