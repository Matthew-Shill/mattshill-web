import { MmsWidget } from "@/components/mms-widget";
import { WidgetPageLayout } from "@/components/widget-page-layout";
import { siteCopy } from "@/content/site-copy";
import { MMS_WIDGETS } from "@/lib/pricing";

export const metadata = {
  title: "Free Trial | Matt Shill Music",
  description: siteCopy.freeTrialPage.description,
};

export default function FreeTrialPage() {
  return (
    <WidgetPageLayout
      title={siteCopy.freeTrialPage.title}
      description={siteCopy.freeTrialPage.description}
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
