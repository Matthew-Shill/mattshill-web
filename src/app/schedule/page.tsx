import type { Metadata } from "next";
import { WidgetPageLayout } from "@/components/widget-page-layout";
import { siteCopy } from "@/content/site-copy";
import { SCHEDULE_URL } from "@/lib/pricing";

export const metadata: Metadata = {
  title: { absolute: siteCopy.schedulePage.metaTitle },
  description: siteCopy.schedulePage.description,
  alternates: { canonical: "/schedule" },
  openGraph: {
    title: siteCopy.schedulePage.metaTitle,
    description: siteCopy.schedulePage.description,
    url: "/schedule",
    type: "website",
  },
};

export default function SchedulePage() {
  return (
    <WidgetPageLayout
      title={siteCopy.schedulePage.title}
      description={siteCopy.schedulePage.description}
      seoBody={siteCopy.schedulePage.seoBody}
      highlights={siteCopy.schedulePage.highlights}
    >
      <iframe
        src={SCHEDULE_URL}
        title="Choose your weekly online music lesson time"
        className="h-[800px] w-full rounded-xl border border-border"
      />
    </WidgetPageLayout>
  );
}
