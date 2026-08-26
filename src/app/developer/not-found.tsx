import type { Metadata } from "next";
import { developerCopy } from "./_content";
import { getDeveloperHomeHref } from "./_lib/paths";

export const metadata: Metadata = {
  title: { absolute: "Page not found — Matt Shill" },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DeveloperNotFound() {
  const homeHref = await getDeveloperHomeHref();

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-[#27272a] bg-[#09090b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a href={homeHref} className="text-sm font-medium tracking-tight">
            {developerCopy.name}
            <span className="ml-2 font-normal text-[#a1a1aa]">
              {developerCopy.role}
            </span>
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-24 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
          404
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#a1a1aa]">
          This path is not part of the developer portfolio. Check the link, or
          go back to the main page.
        </p>
        <a
          href={homeHref}
          className="mt-8 self-start rounded-full border border-[#27272a] bg-[#18181b] px-5 py-2.5 text-sm font-medium text-[#fafafa] transition-colors hover:border-[#3f3f46]"
        >
          Back to portfolio
        </a>
      </main>

      <footer className="border-t border-[#27272a]">
        <div className="mx-auto flex max-w-3xl px-5 py-6 sm:px-6">
          <p className="text-xs text-[#71717a]">
            © {new Date().getFullYear()} {developerCopy.name}
          </p>
        </div>
      </footer>
    </>
  );
}
