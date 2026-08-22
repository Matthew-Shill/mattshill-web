import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { LegalDocument, LegalSection } from "@/content/legal";
import { siteCopy } from "@/content/site-copy";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const linkClassName =
  "font-medium text-accent underline-offset-2 hover:underline";

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  const regex = new RegExp(LINK_PATTERN.source, "g");

  for (const match of text.matchAll(regex)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    const label = match[1];
    const href = match[2];
    const key = `${href}-${index}`;

    if (href.startsWith("/")) {
      nodes.push(
        <Link key={key} href={href} className={linkClassName}>
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a key={key} href={href} className={linkClassName}>
          {label}
        </a>,
      );
    }

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}

function LegalSectionBlock({ section }: { section: LegalSection }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground">{section.heading}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
        {section.bullets && section.bullets.length > 0 ? (
          <ul className="list-disc space-y-2 pl-5">
            {section.bullets.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-accent text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
              {siteCopy.businessName}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              {document.title}
            </h1>
            <p className="mt-6 text-sm text-white/70">
              Last updated {document.lastUpdated}
            </p>
            <p className="mt-4 text-lg text-white/85">{document.intro}</p>
          </div>
        </section>

        <article className="py-16">
          <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
            {document.sections.map((section) => (
              <LegalSectionBlock key={section.heading} section={section} />
            ))}
            <p className="border-t border-border pt-8 text-sm text-muted">
              {document.slug === "privacy" ? (
                <>
                  See also our{" "}
                  <Link href="/terms" className={linkClassName}>
                    {siteCopy.legal.terms}
                  </Link>
                  .
                </>
              ) : (
                <>
                  See also our{" "}
                  <Link href="/privacy" className={linkClassName}>
                    {siteCopy.legal.privacy}
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
