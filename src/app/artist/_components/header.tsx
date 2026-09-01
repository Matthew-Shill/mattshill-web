import { artistCopy } from "../_content";
import { getArtistHomeHref } from "../_lib/paths";

export async function ArtistHeader() {
  const homeHref = await getArtistHomeHref();

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--artist-border)] bg-[var(--artist-bg)]/92">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <a
          href={homeHref}
          className="artist-wordmark min-w-0 text-lg leading-none"
        >
          {artistCopy.name}
        </a>

        <nav aria-label="Artist" className="hidden sm:block">
          <ul className="flex items-center gap-5 text-sm text-[var(--artist-muted)]">
            {artistCopy.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-[var(--artist-accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#book" className="artist-btn px-3.5 py-1.5 text-sm">
            {artistCopy.hero.ctaBook}
          </a>
          <details className="relative sm:hidden">
            <summary
              className="inline-flex cursor-pointer list-none items-center justify-center border border-[var(--artist-border)] p-2 text-[var(--artist-fg)] [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.25A.75.75 0 013.75 4.5h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.75a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10zm.75 4a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-44 border border-[var(--artist-border)] bg-[var(--artist-cream)] p-2 shadow-lg">
              {artistCopy.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-[var(--artist-muted)] hover:bg-[var(--artist-bg)] hover:text-[var(--artist-fg)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
