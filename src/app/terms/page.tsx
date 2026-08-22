import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsOfService } from "@/content/legal";

export const metadata: Metadata = {
  title: { absolute: termsOfService.metaTitle },
  description: termsOfService.description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: termsOfService.metaTitle,
    description: termsOfService.description,
    url: "/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return <LegalPage document={termsOfService} />;
}
