"use client";

import Link from "next/link";
import { useState } from "react";
import { siteCopy } from "@/content/site-copy";
import { SignatureStroke } from "@/components/signature-stroke";
import {
  type LessonLength,
  LESSON_LENGTHS,
  PRICING_BENEFITS,
  formatCurrency,
  getOffersForLength,
  getSingleLesson,
} from "@/lib/pricing";
import { withPromoCode } from "@/lib/promo";

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

function LengthToggle({
  length,
  onChange,
}: {
  length: LessonLength;
  onChange: (length: LessonLength) => void;
}) {
  return (
    <div className="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 p-1">
      {LESSON_LENGTHS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={length === option}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
            length === option
              ? "bg-white text-accent"
              : "text-white/70 hover:text-white"
          }`}
        >
          {option} min
        </button>
      ))}
    </div>
  );
}

export function PricingSection() {
  const [length, setLength] = useState<LessonLength>(30);
  const offers = getOffersForLength(length);
  const single = getSingleLesson(length);

  return (
    <section id="pricing" className="bg-accent py-8 text-white md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-5 text-center md:mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            {siteCopy.pricing.title}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {siteCopy.pricing.headline}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            {siteCopy.pricing.subtitle}
          </p>
          <LengthToggle length={length} onChange={setLength} />
        </div>

        <p className="mx-auto mb-5 max-w-2xl text-center text-sm text-white/70">
          {siteCopy.pricing.whySubscription}
        </p>

        <div className="md:hidden">
          <ul className="mx-auto max-w-lg space-y-2 text-sm text-white/80">
            {PRICING_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="text-coral">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-4 divide-y divide-border overflow-hidden rounded-2xl bg-surface text-foreground">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="flex items-center justify-between gap-3 p-4"
              >
                <div className="min-w-0">
                  <p className="font-semibold">
                    {offer.label}
                    {offer.bestValue && (
                      <span className="ml-2 text-xs font-semibold text-coral">
                        {siteCopy.pricing.bestValueBadge}
                      </span>
                    )}
                    {offer.id === "mtm" && (
                      <span className="ml-2 text-xs font-medium text-muted">
                        {siteCopy.pricing.flexibleBadge}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted">
                    {billingFinePrint(offer.id, offer.billingTotal)}
                  </p>
                  {(offer.id === "sixMonth" || offer.id === "annual") && (
                    <p className="mt-1 text-xs font-medium text-coral">
                      {siteCopy.pricing.welcomeBadge}
                    </p>
                  )}
                  {offer.id === "mtm" && (
                    <p className="mt-1 text-xs text-muted">
                      {siteCopy.pricing.welcomeQuiet}
                    </p>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xl font-bold text-accent">
                    {formatCurrency(offer.monthlyEquivalent)}
                    <span className="text-sm font-semibold">/mo</span>
                  </p>
                  {offer.savePercent > 0 && (
                    <p className="text-xs font-semibold text-coral">
                      {siteCopy.pricing.saveBadge} {offer.savePercent}%
                    </p>
                  )}
                  <a
                    href={withPromoCode(offer.stripeUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
                  >
                    {siteCopy.pricing.subscribe}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-white/65">
            {siteCopy.pricing.cancelAnytime}. {siteCopy.pricing.cancelPrepaid}.
          </p>
          <Link
            href="/free-trial"
            className="mt-3 block text-center text-sm font-semibold text-coral hover:text-white"
          >
            {siteCopy.pricing.trialInstead}
          </Link>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {offers.map((offer) => {
            const isBest = Boolean(offer.bestValue);
            const benefits = [
              ...PRICING_BENEFITS,
              offer.id === "mtm"
                ? siteCopy.pricing.cancelAnytime
                : siteCopy.pricing.cancelPrepaid,
            ];

            return (
              <div
                key={offer.id}
                className={`relative flex flex-col rounded-2xl border bg-surface p-6 text-foreground shadow-sm ${
                  isBest ? "border-coral" : "border-transparent"
                }`}
              >
                {offer.id === "mtm" && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-accent">
                    {siteCopy.pricing.flexibleBadge}
                  </span>
                )}
                {isBest && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-semibold text-white">
                    {siteCopy.pricing.bestValueBadge}
                  </span>
                )}

                <h3 className="text-xl font-bold">{offer.label}</h3>
                <p className="mt-1 text-sm text-muted">
                  Weekly {length}-minute lesson
                </p>
                {isBest && (
                  <SignatureStroke className="mt-2 h-3 w-28 text-coral" />
                )}

                {offer.savePercent > 0 && (
                  <p className="mt-3">
                    <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                      {siteCopy.pricing.saveBadge} {offer.savePercent}%
                    </span>
                  </p>
                )}
                {(offer.id === "sixMonth" || offer.id === "annual") && (
                  <p className={offer.savePercent > 0 ? "mt-2" : "mt-3"}>
                    <span className="rounded-full border border-coral/40 px-3 py-1 text-xs font-medium text-coral">
                      {siteCopy.pricing.welcomeBadge}
                    </span>
                  </p>
                )}
                {offer.id === "mtm" && (
                  <p className="mt-3 text-xs text-muted">
                    {siteCopy.pricing.welcomeQuiet}
                  </p>
                )}

                <div className="mt-5">
                  <p className="text-4xl font-bold text-accent">
                    {formatCurrency(offer.monthlyEquivalent)}
                    <span className="text-lg font-semibold">/mo</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {billingFinePrint(offer.id, offer.billingTotal)}
                  </p>
                </div>

                <ul className="mt-5 flex-1 space-y-3">
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
                  href={withPromoCode(offer.stripeUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-full bg-accent py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  {siteCopy.pricing.subscribe}
                </a>
                <Link
                  href="/free-trial"
                  className="mt-3 block text-center text-sm font-semibold text-coral hover:text-coral-hover"
                >
                  {siteCopy.pricing.trialInstead}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-white/60">
          {siteCopy.pricing.singleLessonPrompt} {length} min for{" "}
          {formatCurrency(single.price)}, {siteCopy.pricing.singleLessonFinePrint}.{" "}
          <a
            href={withPromoCode(single.stripeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            {siteCopy.pricing.singleLessonCta}
          </a>
        </p>
        <p className="mt-2 text-center text-xs text-white/55">
          {siteCopy.pricing.welcomeQuiet}
        </p>

      </div>
    </section>
  );
}
