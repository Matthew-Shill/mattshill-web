"use client";

import Link from "next/link";
import { useState } from "react";
import { siteCopy } from "@/content/site-copy";
import {
  type BillingPeriod,
  PRICING_BENEFITS,
  PRICING_TIERS,
  formatCurrency,
  getBillingPrice,
  getEffectiveMonthly,
  getPerLessonPrice,
  getStripeUrl,
} from "@/lib/pricing";

export function PricingSection() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
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
            <button
              type="button"
              onClick={() => setPeriod("monthly")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                period === "monthly"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setPeriod("yearly")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                period === "yearly"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Yearly{" "}
              <span className="ml-1 text-accent">
                ({siteCopy.pricing.yearlyBadge})
              </span>
            </button>
          </div>
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted">
          {siteCopy.pricing.whySubscription}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const billingPrice = getBillingPrice(tier, period);
            const perLesson = getPerLessonPrice(billingPrice, period);
            const stripeUrl = getStripeUrl(tier, period);

            return (
              <div
                key={tier.length}
                className={`relative flex flex-col rounded-2xl border bg-surface p-8 shadow-sm ${
                  tier.popular
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-border"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                    {siteCopy.pricing.popularBadge}
                  </span>
                )}

                <h3 className="text-xl font-bold">{tier.label}</h3>
                <p className="mt-1 text-sm text-muted">Weekly lesson</p>

                <div className="mt-6">
                  <p className="text-sm font-medium text-muted">
                    {siteCopy.pricing.asLowAs}
                  </p>
                  <p className="mt-1 text-4xl font-bold text-accent">
                    {formatCurrency(perLesson)}
                  </p>
                  <p className="text-sm text-muted">
                    {siteCopy.pricing.perLessonLabel}
                  </p>
                </div>

                <div className="mt-4 border-t border-border pt-4">
                  {period === "monthly" ? (
                    <p className="text-lg font-semibold">
                      {formatCurrency(tier.monthlyPrice)}
                      <span className="text-sm font-normal text-muted">/mo</span>
                    </p>
                  ) : (
                    <>
                      <p className="text-lg font-semibold">
                        {formatCurrency(tier.yearlyPrice)}
                        <span className="text-sm font-normal text-muted">/yr</span>
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {formatCurrency(getEffectiveMonthly(tier.yearlyPrice))}/mo
                        billed annually
                      </p>
                    </>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {PRICING_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-sm text-muted">
                      <span className="shrink-0 text-accent">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href={stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-full bg-accent py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  {siteCopy.pricing.subscribe}
                </a>
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
