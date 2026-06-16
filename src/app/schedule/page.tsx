import { WidgetPageLayout } from "@/components/widget-page-layout";
import { siteCopy } from "@/content/site-copy";
import { SCHEDULE_URL } from "@/lib/pricing";

export const metadata = {
  title: "Schedule | Matt Shill Music",
  description: siteCopy.schedulePage.description,
};

export default function SchedulePage() {
  return (
    <WidgetPageLayout
      title={siteCopy.schedulePage.title}
      description={siteCopy.schedulePage.description}
      highlights={siteCopy.schedulePage.highlights}
    >
      <iframe
        src={SCHEDULE_URL}
        title="Choose your weekly lesson time"
        className="h-[800px] w-full rounded-xl border border-border"
      />
    </WidgetPageLayout>
  );
}
