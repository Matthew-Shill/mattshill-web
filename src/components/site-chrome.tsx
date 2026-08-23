import { cookies } from "next/headers";
import { PromoBanner } from "@/components/promo-banner";
import { PromoPopup } from "@/components/promo-popup";
import { SiteHeader } from "@/components/site-header";
import { BANNER_COOKIE, isBannerDismissedCookie } from "@/lib/promo";

export async function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const showBanner = !isBannerDismissedCookie(
    cookieStore.get(BANNER_COOKIE)?.value,
  );

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="sticky top-0 z-50">
        {showBanner ? <PromoBanner /> : null}
        <SiteHeader />
      </div>
      {children}
      <PromoPopup />
    </div>
  );
}
