import type { Metadata } from "next";
import Link from "next/link";
import { LessonJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LESSON_PAGES, LESSON_SLUGS, type LessonSlug } from "@/content/lessons";
import { siteCopy } from "@/content/site-copy";
import { SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ instrument: string }>;
};

export function generateStaticParams() {
  return LESSON_SLUGS.map((instrument) => ({ instrument }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { instrument } = await params;
  const lesson = LESSON_PAGES[instrument as LessonSlug];
  if (!lesson) return {};

  const url = `/lessons/${lesson.slug}`;

  return {
    title: { absolute: lesson.title },
    description: lesson.description,
    alternates: { canonical: url },
    openGraph: {
      title: lesson.title,
      description: lesson.description,
      url: `${SITE_URL}${url}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: lesson.title,
      description: lesson.description,
    },
  };
}

export default async function LessonInstrumentPage({ params }: Props) {
  const { instrument } = await params;
  const lesson = LESSON_PAGES[instrument as LessonSlug];
  if (!lesson) notFound();

  const pageUrl = `${SITE_URL}/lessons/${lesson.slug}`;
  const otherLessons = LESSON_SLUGS.filter((slug) => slug !== lesson.slug);

  return (
    <>
      <LessonJsonLd
        name={lesson.h1}
        description={lesson.description}
        url={pageUrl}
        faq={lesson.faq}
      />
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-accent text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
              {siteCopy.businessName}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              {lesson.h1}
            </h1>
            <p className="mt-6 text-lg text-white/85">{lesson.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-accent transition-colors hover:bg-white/90"
              >
                {siteCopy.hero.cta}
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                See pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-3xl gap-12 px-4 sm:px-6">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Who these {lesson.pluralLabel} are for
              </h2>
              <p className="mt-4 text-lg text-muted">{lesson.whoFor}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                How online {lesson.pluralLabel} work
              </h2>
              <p className="mt-4 text-lg text-muted">{lesson.approach}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                What you can expect
              </h2>
              <ul className="mt-6 space-y-3">
                {lesson.outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-muted"
                  >
                    <span className="shrink-0 font-semibold text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                {lesson.name} lesson questions
              </h2>
              <div className="mt-6 space-y-4">
                {lesson.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-border bg-surface px-6 py-5"
                  >
                    <h3 className="text-base font-semibold">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-accent-subtle px-6 py-8 text-center sm:px-10">
              <h2 className="text-2xl font-bold">
                Ready to try a free {lesson.name.toLowerCase()} lesson?
              </h2>
              <p className="mt-3 text-muted">
                No commitment required. We&apos;ll talk goals, assess your level,
                and see if weekly lessons are the right fit.
              </p>
              <Link
                href="/free-trial"
                className="mt-6 inline-flex rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {siteCopy.hero.cta}
              </Link>
            </div>

            <div>
              <h2 className="text-xl font-bold">Explore other lessons</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {otherLessons.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/lessons/${slug}`}
                      className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent-subtle"
                    >
                      {LESSON_PAGES[slug].name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/lessons"
                    className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    All lessons
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
