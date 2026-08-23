import Link from "next/link";
import { siteCopy } from "@/content/site-copy";

export function Contact() {
  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          {siteCopy.contact.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          {siteCopy.contact.responseTime}
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            href="/free-trial"
            className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {siteCopy.contact.trialLabel}
          </Link>
          <a
            href={`mailto:${siteCopy.contact.email}`}
            className="text-sm font-semibold text-coral hover:text-coral-hover"
          >
            {siteCopy.contact.emailLabel} · {siteCopy.contact.email}
          </a>
          {siteCopy.contact.phone && (
            <a
              href={`tel:${siteCopy.contact.phone.replace(/\D/g, "")}`}
              className="text-sm font-semibold text-accent hover:underline"
            >
              {siteCopy.contact.phoneLabel}
            </a>
          )}
        </div>

        <ul className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted">
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
