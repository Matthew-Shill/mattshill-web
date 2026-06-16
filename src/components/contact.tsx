import Link from "next/link";
import { siteCopy } from "@/content/site-copy";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          {siteCopy.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          {siteCopy.contact.responseTime}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${siteCopy.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {siteCopy.contact.emailLabel}
          </a>

          {siteCopy.contact.phone && (
            <a
              href={`tel:${siteCopy.contact.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              {siteCopy.contact.phoneLabel}
            </a>
          )}

          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {siteCopy.contact.trialLabel}
          </Link>

          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {siteCopy.contact.scheduleLabel}
          </Link>
        </div>

        <p className="mt-6 text-sm text-muted">
          <a
            href={`mailto:${siteCopy.contact.email}`}
            className="hover:text-accent"
          >
            {siteCopy.contact.email}
          </a>
        </p>

        <ul className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted">
          {siteCopy.contact.trustSignals.map((signal) => (
            <li key={signal} className="flex items-center gap-1.5">
              <span className="text-accent">✓</span>
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
