import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: { absolute: privacyPolicy.metaTitle },
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: privacyPolicy.metaTitle,
    description: privacyPolicy.description,
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <LegalPage document={privacyPolicy} />;
}
