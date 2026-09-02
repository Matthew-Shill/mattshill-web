"use client";

import { useActionState } from "react";
import { initialBookingState } from "../_booking-state";
import { submitBooking } from "../_booking-submit";
import { artistCopy } from "../_content";

const inputClass =
  "mt-1.5 w-full border border-[var(--artist-border)] bg-[var(--artist-cream)] px-3 py-2.5 text-sm text-[var(--artist-fg)] placeholder:text-[var(--artist-muted)]/60";

export function BookingForm() {
  const [state, formAction, pending] = useActionState(
    submitBooking,
    initialBookingState,
  );
  const copy = artistCopy.booking;

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="border border-[var(--artist-border)] bg-[var(--artist-soft)] px-5 py-6 text-sm leading-relaxed text-[var(--artist-fg)]"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-[var(--artist-muted)]">
          {copy.fields.name}
          <input
            required
            name="name"
            autoComplete="name"
            className={inputClass}
          />
        </label>
        <label className="block text-sm text-[var(--artist-muted)]">
          {copy.fields.email}
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={inputClass}
          />
        </label>
        <label className="block text-sm text-[var(--artist-muted)]">
          {copy.fields.phone}
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={inputClass}
          />
        </label>
        <label className="block text-sm text-[var(--artist-muted)]">
          {copy.fields.organization}
          <input name="organization" autoComplete="organization" className={inputClass} />
        </label>
        <label className="block text-sm text-[var(--artist-muted)]">
          {copy.fields.eventType}
          <select name="eventType" className={inputClass} defaultValue="">
            {copy.eventTypes.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm text-[var(--artist-muted)]">
          {copy.fields.date}
          <input type="date" name="date" className={inputClass} />
        </label>
      </div>

      <label className="block text-sm text-[var(--artist-muted)]">
        {copy.fields.location}
        <input name="location" autoComplete="address-level2" className={inputClass} />
      </label>

      <label className="block text-sm text-[var(--artist-muted)]">
        {copy.fields.message}
        <textarea
          required
          name="message"
          rows={5}
          className={inputClass}
        />
        <span className="mt-1 block text-xs text-[var(--artist-muted)]/80">
          {copy.fields.messageHint}
        </span>
      </label>

      <div className="hidden" aria-hidden>
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" ? (
        <p role="alert" className="text-sm text-[var(--artist-accent)]">
          {state.message}{" "}
          <a
            href={`mailto:${copy.email}`}
            className="underline decoration-[var(--artist-border)] underline-offset-4 hover:text-[var(--artist-accent)] hover:decoration-[var(--artist-accent)]"
          >
            {copy.email}
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="artist-btn disabled:opacity-60"
      >
        {pending ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
