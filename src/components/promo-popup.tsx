"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { siteCopy } from "@/content/site-copy";
import { PRICING } from "@/lib/pricing";
import {
  POPUP_DELAY_MS,
  POPUP_SCROLL_DEPTH,
  WELCOME10_CODE,
  isPopupPathExcluded,
  isPopupSuppressed,
  markPopupSeen,
  withPromoCode,
} from "@/lib/promo";

const checkoutUrl = withPromoCode(PRICING[30].mtm.stripeUrl);

function usesExitIntent(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function PromoPopup() {
  const pathname = usePathname();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (isPopupPathExcluded(pathname) || isPopupSuppressed()) return;

    let shown = false;
    const show = () => {
      if (shown || isPopupSuppressed()) return;
      shown = true;
      markPopupSeen();
      setOpen(true);
    };

    if (usesExitIntent()) {
      const onMouseOut = (event: MouseEvent) => {
        if (event.clientY <= 0) show();
      };
      document.addEventListener("mouseout", onMouseOut);
      return () => document.removeEventListener("mouseout", onMouseOut);
    }

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0 || window.scrollY / maxScroll >= POPUP_SCROLL_DEPTH) {
        show();
      }
    };
    const timeoutId = window.setTimeout(show, POPUP_DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label={siteCopy.promo.popupClose}
        onClick={close}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-6 text-foreground shadow-xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label={siteCopy.promo.popupClose}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-background hover:text-foreground"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>

        <h2 id={titleId} className="pr-10 font-display text-2xl font-semibold text-accent">
          {siteCopy.promo.popupHeadline}
        </h2>
        <p className="mt-2 text-sm text-muted">{siteCopy.promo.popupSupport}</p>

        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3">
          <p className="text-lg font-semibold tracking-wide text-accent">{WELCOME10_CODE}</p>
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
            className="text-xs font-semibold text-coral hover:text-coral-hover"
          >
            {copied ? siteCopy.promo.popupCopied : siteCopy.promo.popupCopyCode}
          </button>
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block rounded-full bg-accent py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          {siteCopy.promo.popupCta}
        </a>
        <Link
          href="/free-trial"
          onClick={close}
          className="mt-3 block text-center text-sm font-semibold text-accent hover:text-accent-hover"
        >
          {siteCopy.promo.popupTrial}
        </Link>
        <Link
          href="/#pricing"
          onClick={close}
          className="mt-3 block text-center text-sm font-semibold text-coral hover:text-coral-hover"
        >
          {siteCopy.promo.popupFinePrint}
        </Link>
      </div>
    </div>
  );
}
