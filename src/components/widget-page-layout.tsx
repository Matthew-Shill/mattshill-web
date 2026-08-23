import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { LESSON_PAGES, LESSON_SLUGS } from "@/content/lessons";

interface WidgetPageLayoutProps {
  title: string;
  description: string;
  seoBody?: string;
  highlights?: readonly string[];
  children: React.ReactNode;
}

export function WidgetPageLayout({
  title,
  description,
  seoBody,
  highlights,
  children,
}: WidgetPageLayoutProps) {
  return (
    <>
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
          <p className="mt-4 text-lg text-muted">{description}</p>

          {seoBody ? (
            <p className="mt-4 text-base leading-relaxed text-muted">{seoBody}</p>
          ) : null}

          {highlights && highlights.length > 0 && (
            <ul className="mt-6 space-y-2 rounded-xl border border-border bg-accent-subtle p-6">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span className="shrink-0 text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">{children}</div>

          <nav aria-label="Online lesson options" className="mt-12">
            <p className="text-sm font-semibold text-foreground">
              Explore online lessons
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {LESSON_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/lessons/${slug}`}
                    className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:border-accent hover:bg-accent-subtle"
                  >
                    {LESSON_PAGES[slug].name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
