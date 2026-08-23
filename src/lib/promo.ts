export const WELCOME10_CODE = "WELCOME10";

export const BANNER_COOKIE = "msm_welcome10_banner";
export const BANNER_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;

export const POPUP_STORAGE_KEY = "msm_welcome10_popup";
export const POPUP_SESSION_KEY = "msm_welcome10_popup_session";
export const POPUP_TTL_MS = 7 * 24 * 60 * 60 * 1000;
export const POPUP_SCROLL_DEPTH = 0.5;
export const POPUP_DELAY_MS = 20_000;

export const POPUP_EXCLUDED_PATHS = [
  "/portal",
  "/schedule",
  "/free-trial",
] as const;

export function withPromoCode(
  url: string,
  code: string = WELCOME10_CODE,
): string {
  const parsed = new URL(url);
  parsed.searchParams.set("prefilled_promo_code", code);
  return parsed.toString();
}

export function isBannerDismissedCookie(value: string | undefined): boolean {
  return Boolean(value);
}

export function writeBannerDismissed(): void {
  document.cookie = `${BANNER_COOKIE}=1; Max-Age=${BANNER_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
}

export function isBannerDismissedClient(): boolean {
  return document.cookie
    .split(";")
    .some((part) => part.trim().startsWith(`${BANNER_COOKIE}=`));
}

export function isPopupPathExcluded(pathname: string): boolean {
  return (POPUP_EXCLUDED_PATHS as readonly string[]).includes(pathname);
}

export function isPopupSuppressed(): boolean {
  if (typeof window === "undefined") return true;
  if (sessionStorage.getItem(POPUP_SESSION_KEY)) return true;
  if (isBannerDismissedClient()) return true;

  const raw = localStorage.getItem(POPUP_STORAGE_KEY);
  if (!raw) return false;

  const seenAt = Date.parse(raw);
  if (Number.isNaN(seenAt)) return false;
  return Date.now() - seenAt < POPUP_TTL_MS;
}

export function markPopupSeen(): void {
  sessionStorage.setItem(POPUP_SESSION_KEY, "1");
  localStorage.setItem(POPUP_STORAGE_KEY, new Date().toISOString());
}
