import type { Metadata } from "next";
import { ErrorScreen } from "@/components/error-screen";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteCopy } from "@/content/site-copy";

const copy = siteCopy.errors.notFound;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.description,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <ErrorScreen
        variant="not-found"
        code={copy.code}
        eyebrow={copy.eyebrow}
        title={copy.title}
        body={copy.body}
      />
      <SiteFooter />
    </>
  );
}
