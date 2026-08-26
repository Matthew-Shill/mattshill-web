import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/content/site-copy";

const PRIMARY_PROOF_COUNT = 2;

export function Hero() {
  const primaryProof = siteCopy.hero.proof.slice(0, PRIMARY_PROOF_COUNT);
  const extraProof = siteCopy.hero.proof.slice(PRIMARY_PROOF_COUNT);

  return (
    <section className="relative overflow-hidden bg-accent text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-16">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {siteCopy.hero.headline}
            <br />
            <span className="text-coral">{siteCopy.hero.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/80">
            {siteCopy.hero.subtitle}
          </p>
          <div className="mt-7">
            <Link
              href="/free-trial"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-accent transition-colors hover:bg-white/90"
            >
              {siteCopy.hero.cta}
            </Link>
            <p className="mt-3 text-sm text-white/70">{siteCopy.hero.ctaNote}</p>
            <a
              href={siteCopy.hero.ctaSecondaryHref}
              className="mt-3 inline-block text-sm font-medium text-coral underline-offset-4 hover:text-white hover:underline"
            >
              {siteCopy.hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {primaryProof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85"
              >
                {item}
              </span>
            ))}
            {extraProof.map((item) => (
              <span
                key={item}
                className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 sm:inline-flex"
              >
                {item}
              </span>
            ))}
            <details className="sm:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 [&::-webkit-details-marker]:hidden">
                {siteCopy.hero.proofMore}
              </summary>
              <div className="mt-2 flex flex-wrap gap-2">
                {extraProof.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </details>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 lg:aspect-[4/3]">
          <Image
            src="/weddingpiano.jpg"
            alt="Matt Shill teaching and performing piano for online music lessons"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
