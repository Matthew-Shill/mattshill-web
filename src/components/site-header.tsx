import Link from "next/link";
import { siteCopy } from "@/content/site-copy";
import { BILLING_PORTAL_URL } from "@/lib/pricing";

const portalLinks = [
  {
    label: siteCopy.nav.studentPortal,
    href: "/portal",
    external: false,
  },
  {
    label: siteCopy.nav.billingPortal,
    href: BILLING_PORTAL_URL,
    external: true,
  },
];

const navLinkClass =
  "whitespace-nowrap text-sm font-medium text-muted transition-colors hover:text-foreground";

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <details className="group relative">
      <summary
        className={`${navLinkClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
      >
        <span className="inline-flex items-center gap-1">
          {label}
          <svg
            className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
      <div className="absolute left-0 top-full z-50 mt-2 min-w-44 rounded-lg border border-border bg-surface p-2 shadow-lg">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block whitespace-nowrap rounded-md px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </div>
    </details>
  );
}

function PortalDropdown() {
  return (
    <details className="group relative">
      <summary
        className={`${navLinkClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
      >
        <span className="inline-flex items-center gap-1">
          {siteCopy.nav.portalsLabel}
          <svg
            className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
      <div className="absolute right-0 top-full z-50 mt-2 min-w-44 rounded-lg border border-border bg-surface p-2 shadow-lg">
        {portalLinks.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block whitespace-nowrap rounded-md px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="block whitespace-nowrap rounded-md px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
            >
              {link.label}
            </Link>
          ),
        )}
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt={siteCopy.businessName}
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex">
          {siteCopy.nav.primarySections.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
          <NavDropdown
            label={siteCopy.nav.moreLabel}
            items={siteCopy.nav.moreSections}
          />
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <PortalDropdown />
          <Link
            href="/free-trial"
            className="whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {siteCopy.nav.freeTrial}
          </Link>
        </div>

        <details className="relative xl:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-border px-3 py-2 text-sm font-medium whitespace-nowrap">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-surface p-3 shadow-lg">
            {siteCopy.nav.sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <hr className="my-2 border-border" />
            {portalLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/free-trial"
              className="mt-2 block rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-white hover:bg-accent-hover"
            >
              {siteCopy.nav.freeTrial}
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
