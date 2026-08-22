import Link from "next/link";
import { MusikkiiAffiliation } from "@/components/musikkii-affiliation";
import { LESSON_PAGES, LESSON_SLUGS } from "@/content/lessons";
import { siteCopy } from "@/content/site-copy";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-accent text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold">{siteCopy.businessName}</p>
            <p className="mt-1 max-w-sm text-sm text-white/70">
              {siteCopy.tagline}
            </p>
            <div className="mt-8">
              <MusikkiiAffiliation variant="footer" showFooterNote />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                Online lessons
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {LESSON_SLUGS.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/lessons/${slug}`}
                      className="text-white/80 hover:text-white"
                    >
                      {LESSON_PAGES[slug].h1}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/lessons" className="text-white/80 hover:text-white">
                    All lessons
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                Studio
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/free-trial"
                    className="text-white/80 hover:text-white"
                  >
                    {siteCopy.nav.freeTrial}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="text-white/80 hover:text-white"
                  >
                    {siteCopy.contact.scheduleLabel}
                  </Link>
                </li>
                <li>
                  <Link href="/portal" className="text-white/80 hover:text-white">
                    {siteCopy.nav.studentPortal}
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${siteCopy.contact.email}`}
                    className="text-white/80 hover:text-white"
                  >
                    {siteCopy.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-xs text-white/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteCopy.businessName}, LLC. All
            rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              {siteCopy.legal.privacy}
            </Link>
            <Link href="/terms" className="hover:text-white">
              {siteCopy.legal.terms}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
