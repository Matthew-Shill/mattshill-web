import Image from "next/image";
import { siteCopy } from "@/content/site-copy";

export function About() {
  return (
    <section id="about" className="py-8 md:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border lg:max-w-none">
          <Image
            src="/Headshot.jpg"
            alt="Matt Shill, online music teacher for piano, guitar, voice, and more"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 20rem, 280px"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {siteCopy.about.title}
          </h2>

          <blockquote className="mt-4 border-l-4 border-accent pl-5 text-lg italic text-foreground">
            &ldquo;{siteCopy.about.pullQuote}&rdquo;
          </blockquote>

          <div className="mt-4 space-y-3 text-muted">
            {siteCopy.about.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
