import Link from "next/link";
import { siteCopy } from "@/content/site-copy";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-accent text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold">{siteCopy.businessName}</p>
          <p className="mt-1 text-sm text-white/70">{siteCopy.tagline}</p>
          <p className="mt-2 text-xs text-white/50">
            {siteCopy.musikkii.footerNote}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/portal" className="text-white/80 hover:text-white">
            {siteCopy.nav.studentPortal}
          </Link>
          <Link href="/free-trial" className="text-white/80 hover:text-white">
            {siteCopy.nav.freeTrial}
          </Link>
          <Link href="/schedule" className="text-white/80 hover:text-white">
            {siteCopy.contact.scheduleLabel}
          </Link>
          <a
            href={`mailto:${siteCopy.contact.email}`}
            className="text-white/80 hover:text-white"
          >
            {siteCopy.contact.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteCopy.businessName}, LLC. All rights
        reserved.
      </div>
    </footer>
  );
}
