import type { Metadata } from "next";
import { MmsWidget } from "@/components/mms-widget";
import { WidgetPageLayout } from "@/components/widget-page-layout";
import { siteCopy } from "@/content/site-copy";
import { MMS_WIDGETS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: { absolute: siteCopy.portalPage.metaTitle },
  description: siteCopy.portalPage.description,
  alternates: { canonical: "/portal" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortalPage() {
  return (
    <WidgetPageLayout
      title={siteCopy.portalPage.title}
      description={siteCopy.portalPage.description}
      seoBody={siteCopy.portalPage.seoBody}
      highlights={siteCopy.portalPage.highlights}
    >
      <MmsWidget
        id="mms-student-portal-widget"
        src={MMS_WIDGETS.studentPortal}
        className="min-h-[500px]"
      />
    </WidgetPageLayout>
  );
}
