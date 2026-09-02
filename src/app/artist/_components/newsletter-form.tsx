"use client";

import { useActionState } from "react";
import { SITE_URL } from "@/lib/site";
import { artistCopy } from "../_content";
import { initialNewsletterState } from "../_newsletter-state";
import { submitNewsletter } from "../_newsletter-submit";

const inputClass =
  "w-full border border-[var(--artist-border)] bg-[var(--artist-cream)] px-3 py-2.5 text-sm text-[var(--artist-fg)] placeholder:text-[var(--artist-muted)]/60";

type NewsletterFormProps = {
  compact?: boolean;
  variant?: "default" | "hero";
};

export function NewsletterForm({
  compact = false,
  variant = "default",
}: NewsletterFormProps) {
  const [state, formAction, pending] = useActionState(
    submitNewsletter,
    initialNewsletterState,
  );
  const copy = artistCopy.newsletter;
  const isHero = variant === "hero";

  if (state.status === "success") {
    return (
      <p
        role="status"
        className={
          isHero
            ? "text-sm leading-relaxed text-[var(--artist-fg)]"
            : "border border-[var(--artist-border)] bg-[var(--artist-soft)] px-5 py-6 text-sm leading-relaxed text-[var(--artist-fg)]"
        }
      >
        {state.message}
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className={
        isHero ? "w-full max-w-md space-y-3 text-left" : compact ? "space-y-3" : "max-w-xl space-y-4"
      }
    >
      {isHero ? (
        <p className="text-center text-sm leading-relaxed text-[var(--artist-muted)]">
          {copy.intro}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block min-w-0 flex-1 text-sm text-[var(--artist-muted)]">
          <span className={isHero ? "sr-only" : undefined}>{copy.email}</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            className={isHero ? inputClass : `${inputClass} mt-1.5`}
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="artist-btn shrink-0 disabled:opacity-60"
        >
          {pending ? copy.sending : copy.submit}
        </button>
      </div>

      <div className="hidden" aria-hidden>
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" ? (
        <p role="alert" className="text-sm text-[var(--artist-accent)]">
          {state.message}
        </p>
      ) : null}

      <p
        className={
          isHero
            ? "text-center text-xs leading-relaxed text-[var(--artist-muted)]"
            : "text-xs leading-relaxed text-[var(--artist-muted)]"
        }
      >
        {isHero ? copy.heroPrivacy : copy.privacy}{" "}
        <a
          href={`${SITE_URL}/privacy`}
          className="underline decoration-[var(--artist-border)] underline-offset-4 hover:text-[var(--artist-accent)] hover:decoration-[var(--artist-accent)]"
        >
          Privacy
        </a>
      </p>
    </form>
  );
}
