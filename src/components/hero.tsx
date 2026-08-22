import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/content/site-copy";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            {siteCopy.businessName}
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {siteCopy.hero.headline}
            <br />
            <span className="text-accent-light">
              {siteCopy.hero.headlineAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            {siteCopy.hero.subtitle}
          </p>
          <div className="mt-8">
            <Link
              href="/free-trial"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-accent transition-colors hover:bg-white/90"
            >
              {siteCopy.hero.cta}
            </Link>
            <p className="mt-3 text-sm text-white/70">{siteCopy.hero.ctaNote}</p>
            <a
              href={siteCopy.hero.ctaSecondaryHref}
              className="mt-3 inline-block text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              {siteCopy.hero.ctaSecondary}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {siteCopy.hero.proof.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/weddingpiano.jpg"
            alt="Matt Shill teaching and performing piano — online music lessons"
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
