export type LessonLength = 30 | 45 | 60;
export type CommitmentId = "mtm" | "sixMonth" | "annual";

export interface PricingTier {
  length: LessonLength;
  label: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export interface CommitmentPlan {
  id: CommitmentId;
  label: string;
  months: 1 | 6 | 12;
  bestValue?: boolean;
}

export interface PricingOffer {
  monthlyEquivalent: number;
  stripeUrl: string;
}

export const LESSON_LENGTHS: LessonLength[] = [30, 45, 60];

export const COMMITMENT_PLANS: CommitmentPlan[] = [
  { id: "mtm", label: "Month-to-Month", months: 1 },
  { id: "sixMonth", label: "6-Month", months: 6 },
  { id: "annual", label: "Annual", months: 12, bestValue: true },
];

export const PRICING: Record<
  LessonLength,
  Record<CommitmentId, PricingOffer>
> = {
  30: {
    mtm: {
      monthlyEquivalent: 229,
      stripeUrl: "https://buy.stripe.com/5kQ28qdOc12Lg4G9tv5kk0q",
    },
    sixMonth: {
      monthlyEquivalent: 199,
      stripeUrl: "https://buy.stripe.com/7sY28qfWk5j1g4G7ln5kk0r",
    },
    annual: {
      monthlyEquivalent: 179,
      stripeUrl: "https://buy.stripe.com/5kQaEW39y5j1f0C8pr5kk0s",
    },
  },
  45: {
    mtm: {
      monthlyEquivalent: 339,
      stripeUrl: "https://buy.stripe.com/8x27sK8tS9zh2dQbBD5kk0t",
    },
    sixMonth: {
      monthlyEquivalent: 299,
      stripeUrl: "https://buy.stripe.com/bJe5kCfWkh1J4lYaxz5kk0u",
    },
    annual: {
      monthlyEquivalent: 269,
      stripeUrl: "https://buy.stripe.com/28E6oGfWkcLtf0CeNP5kk0v",
    },
  },
  60: {
    mtm: {
      monthlyEquivalent: 449,
      stripeUrl: "https://buy.stripe.com/8x24gy5hG8vd6u66hj5kk0w",
    },
    sixMonth: {
      monthlyEquivalent: 399,
      stripeUrl: "https://buy.stripe.com/dRm3cu25ucLt4lYeNP5kk0x",
    },
    annual: {
      monthlyEquivalent: 359,
      stripeUrl: "https://buy.stripe.com/eVq8wOcK812L4lY3575kk0y",
    },
  },
};

export interface SingleLessonOffer {
  price: number;
  stripeUrl: string;
}

export const SINGLE_LESSON: Record<LessonLength, SingleLessonOffer> = {
  30: {
    price: 110,
    stripeUrl: "https://buy.stripe.com/3cIeVc39ydPx9Gi49b5kk0z",
  },
  45: {
    price: 160,
    stripeUrl: "https://buy.stripe.com/aFa3cu7pO7r9aKmcFH5kk0A",
  },
  60: {
    price: 200,
    stripeUrl: "https://buy.stripe.com/dRm8wO11q26Pf0CfRT5kk0B",
  },
};

export function getSingleLesson(length: LessonLength): SingleLessonOffer {
  return SINGLE_LESSON[length];
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getBillingTotal(
  monthlyEquivalent: number,
  months: number,
): number {
  return monthlyEquivalent * months;
}

export function getSavePercent(
  mtmMonthly: number,
  monthlyEquivalent: number,
): number {
  if (monthlyEquivalent >= mtmMonthly) return 0;
  return Math.round(((mtmMonthly - monthlyEquivalent) / mtmMonthly) * 100);
}

export function getOffersForLength(length: LessonLength) {
  const lengthPricing = PRICING[length];
  const mtmMonthly = lengthPricing.mtm.monthlyEquivalent;

  return COMMITMENT_PLANS.map((plan) => {
    const offer = lengthPricing[plan.id];
    return {
      ...plan,
      ...offer,
      billingTotal: getBillingTotal(offer.monthlyEquivalent, plan.months),
      savePercent: getSavePercent(mtmMonthly, offer.monthlyEquivalent),
    };
  });
}

/** Kept for HomeJsonLd offer catalog. monthlyPrice is the MTM rate. */
export const PRICING_TIERS: PricingTier[] = LESSON_LENGTHS.map((length) => ({
  length,
  label: `${length} Min`,
  monthlyPrice: PRICING[length].mtm.monthlyEquivalent,
  yearlyPrice: getBillingTotal(PRICING[length].annual.monthlyEquivalent, 12),
}));

export const BILLING_PORTAL_URL =
  "https://billing.stripe.com/p/login/dRm00i6lKfXFg4G5df5kk00";

export const MMS_WIDGETS = {
  studentPortal:
    "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9tN1lKUyIsIldlYnNpdGVJRCI6Indic181UnFKViIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzIwYkdKUyJ9",
  freeTrial:
    "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9tN1lKUyIsIldlYnNpdGVJRCI6Indic181UnFKViIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1dsZ2ZKcCJ9",
};

/** Direct iframe URL used by the official MMS loader script. */
export function getMmsWidgetIframeSrc(
  scriptSrc: string,
  sandboxed = false,
): string {
  const scriptUrl = new URL(scriptSrc);
  const iframeUrl = new URL("https://app.mymusicstaff.com/Website/v3/widget.html");
  const settings = scriptUrl.searchParams.get("settings");
  if (settings) {
    iframeUrl.searchParams.set("settings", settings);
  }
  iframeUrl.searchParams.set("sandboxed", String(sandboxed));
  return iframeUrl.toString();
}

export const SCHEDULE_URL = "https://musikkii-availability.vercel.app/";

export const PRICING_BENEFITS = [
  "One-on-one lessons every week",
  "Student portal for schedule, assignments, and notes",
  'My "Never Miss a Lesson" guarantee',
];
