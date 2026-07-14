import type { Metadata } from "next";
import { MmsWidget } from "@/components/mms-widget";
import { WidgetPageLayout } from "@/components/widget-page-layout";
import { siteCopy } from "@/content/site-copy";
import { MMS_WIDGETS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: { absolute: siteCopy.freeTrialPage.metaTitle },
  description: siteCopy.freeTrialPage.description,
  alternates: { canonical: "/free-trial" },
  openGraph: {
    title: siteCopy.freeTrialPage.metaTitle,
    description: siteCopy.freeTrialPage.description,
    url: "/free-trial",
    type: "website",
  },
};

export default function FreeTrialPage() {
  return (
    <WidgetPageLayout
      title={siteCopy.freeTrialPage.title}
      description={siteCopy.freeTrialPage.description}
      seoBody={siteCopy.freeTrialPage.seoBody}
      highlights={siteCopy.freeTrialPage.highlights}
    >
      <MmsWidget
        id="mms-free-trial-widget"
        src={MMS_WIDGETS.freeTrial}
        className="min-h-[500px]"
      />
    </WidgetPageLayout>
  );
}
