export type BillingPeriod = "monthly" | "yearly";

export interface PricingTier {
  length: 30 | 45 | 60;
  label: string;
  monthlyPrice: number;
  yearlyPrice: number;
  stripeMonthlyUrl: string;
  stripeYearlyUrl: string;
  popular?: boolean;
}

const WEEKS_PER_MONTH = 4.33;
const LESSONS_PER_YEAR = 52;

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function getPerLessonPrice(
  totalPrice: number,
  period: BillingPeriod,
): number {
  if (period === "monthly") {
    return totalPrice / WEEKS_PER_MONTH;
  }
  return totalPrice / LESSONS_PER_YEAR;
}

export function getEffectiveMonthly(yearlyPrice: number): number {
  return yearlyPrice / 12;
}

export function getBillingPrice(tier: PricingTier, period: BillingPeriod): number {
  return period === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
}

export function getStripeUrl(tier: PricingTier, period: BillingPeriod): string {
  return period === "monthly" ? tier.stripeMonthlyUrl : tier.stripeYearlyUrl;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    length: 30,
    label: "30 Min",
    monthlyPrice: 199.99,
    yearlyPrice: 2159.89,
    stripeMonthlyUrl: "https://buy.stripe.com/aFa6oA8103V7eKHdeGdZ600",
    stripeYearlyUrl: "https://buy.stripe.com/14A9AM8102R36eb6QidZ601",
  },
  {
    length: 45,
    label: "45 Min",
    monthlyPrice: 299.99,
    yearlyPrice: 3239.89,
    stripeMonthlyUrl: "https://buy.stripe.com/4gMeV6epo4ZbcCzcaCdZ604",
    stripeYearlyUrl: "https://buy.stripe.com/6oU8wIdlkdvHgSP4IadZ605",
    popular: true,
  },
  {
    length: 60,
    label: "60 Min",
    monthlyPrice: 399.99,
    yearlyPrice: 4319.89,
    stripeMonthlyUrl: "https://buy.stripe.com/6oUdR2dlkajvcCza2udZ608",
    stripeYearlyUrl: "https://buy.stripe.com/14A7sE1CCcrD1XVfmOdZ609",
  },
];

export const BILLING_PORTAL_URL =
  "https://billing.stripe.com/p/login/dRm00i6lKfXFg4G5df5kk00";

export const MMS_WIDGETS = {
  studentPortal:
    "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9tN1lKUyIsIldlYnNpdGVJRCI6Indic181UnFKViIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzIwYkdKUyJ9",
  freeTrial:
    "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9tN1lKUyIsIldlYnNpdGVJRCI6Indic181UnFKViIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1dsZ2ZKcCJ9",
};

export const SCHEDULE_URL = "https://musikkii-availability.vercel.app/";

export const PRICING_BENEFITS = [
  "One-on-one lessons every week",
  "Musikkii student portal for schedule, assignments, and notes",
  'My "Never Miss a Lesson" guarantee',
  "Cancel anytime before your next billing cycle",
];
