"use client";

import Link from "next/link";
import { useState } from "react";
import { siteCopy } from "@/content/site-copy";
import {
  type LessonLength,
  LESSON_LENGTHS,
  PRICING_BENEFITS,
  formatCurrency,
  getOffersForLength,
} from "@/lib/pricing";

function billingFinePrint(
  commitmentId: "mtm" | "sixMonth" | "annual",
  billingTotal: number,
): string {
  if (commitmentId === "mtm") return siteCopy.pricing.billedMonthly;
  if (commitmentId === "sixMonth") {
    return `${siteCopy.pricing.billedPrefix} ${formatCurrency(billingTotal)} ${siteCopy.pricing.billedEverySixMonths}`;
  }
  return `${siteCopy.pricing.billedPrefix} ${formatCurrency(billingTotal)} ${siteCopy.pricing.billedAnnually}`;
}

export function PricingSection() {
  const [length, setLength] = useState<LessonLength>(45);
  const offers = getOffersForLength(length);

  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {siteCopy.pricing.title}
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {siteCopy.pricing.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            {siteCopy.pricing.subtitle}
          </p>

          <div className="mt-8 inline-flex rounded-full border border-border bg-surface p-1">
            {LESSON_LENGTHS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLength(option)}
                aria-pressed={length === option}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  length === option
                    ? "bg-accent text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {option} min
              </button>
            ))}
          </div>
        </div>

        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted">
          {siteCopy.pricing.whySubscription}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => {
            const isFlexible = offer.id === "mtm";
            const benefits = [
              ...PRICING_BENEFITS,
              offer.id === "mtm"
                ? siteCopy.pricing.cancelAnytime
                : siteCopy.pricing.cancelPrepaid,
            ];

            return (
              <div
                key={offer.id}
                className={`relative flex flex-col rounded-2xl border bg-surface p-8 shadow-sm ${
                  isFlexible
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-border"
                }`}
              >
                {isFlexible && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                    {siteCopy.pricing.flexibleBadge}
                  </span>
                )}
                {offer.bestValue && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold ${
                      isFlexible
                        ? "bg-accent text-white"
                        : "bg-accent-subtle text-accent"
                    }`}
                  >
                    {siteCopy.pricing.bestValueBadge}
                  </span>
                )}

                <h3 className="text-xl font-bold">{offer.label}</h3>
                <p className="mt-1 text-sm text-muted">
                  Weekly {length}-minute lesson
                </p>

                {offer.savePercent > 0 && (
                  <p className="mt-3">
                    <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold text-accent">
                      {siteCopy.pricing.saveBadge} {offer.savePercent}%
                    </span>
                  </p>
                )}

                <div className="mt-6">
                  <p className="text-4xl font-bold text-accent">
                    {formatCurrency(offer.monthlyEquivalent)}
                    <span className="text-lg font-semibold">/mo</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {billingFinePrint(offer.id, offer.billingTotal)}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="shrink-0 text-accent">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href={offer.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-full bg-accent py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  {siteCopy.pricing.subscribe}
                </a>
                <Link
                  href="/free-trial"
                  className="mt-3 block text-center text-sm font-semibold text-accent hover:underline"
                >
                  {siteCopy.pricing.trialInstead}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          {siteCopy.pricing.afterSubscribe}{" "}
          <Link href="/schedule" className="font-semibold text-accent hover:underline">
            {siteCopy.pricing.scheduleLink}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
