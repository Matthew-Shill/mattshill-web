import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LESSON_PAGES, LESSON_SLUGS } from "@/content/lessons";
import { siteCopy } from "@/content/site-copy";

export const metadata: Metadata = {
  title: { absolute: siteCopy.seo.lessonsIndexTitle },
  description: siteCopy.seo.lessonsIndexDescription,
  alternates: { canonical: "/lessons" },
  openGraph: {
    title: siteCopy.seo.lessonsIndexTitle,
    description: siteCopy.seo.lessonsIndexDescription,
    url: "/lessons",
    type: "website",
  },
};

export default function LessonsIndexPage() {
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
              {siteCopy.lessonsIndex.title}
            </h1>
            <p className="mt-6 text-lg text-white/85">
              {siteCopy.lessonsIndex.intro}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-4xl gap-5 px-4 sm:px-6 sm:grid-cols-2">
            {LESSON_SLUGS.map((slug) => {
              const lesson = LESSON_PAGES[slug];
              return (
                <Link
                  key={slug}
                  href={`/lessons/${slug}`}
                  className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent hover:bg-accent-subtle/40"
                >
                  <h2 className="text-xl font-bold text-foreground">
                    {lesson.h1}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {lesson.intro.slice(0, 140)}…
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-accent">
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-3xl px-4 text-center sm:px-6">
            <Link
              href="/free-trial"
              className="inline-flex rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              {siteCopy.hero.cta}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
