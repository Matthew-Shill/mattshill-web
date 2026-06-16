import { MmsWidget } from "@/components/mms-widget";
import { WidgetPageLayout } from "@/components/widget-page-layout";
import { siteCopy } from "@/content/site-copy";
import { MMS_WIDGETS } from "@/lib/pricing";

export const metadata = {
  title: "Student Portal | Matt Shill Music",
  description: siteCopy.portalPage.description,
};

export default function PortalPage() {
  return (
    <WidgetPageLayout
      title={siteCopy.portalPage.title}
      description={siteCopy.portalPage.description}
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
