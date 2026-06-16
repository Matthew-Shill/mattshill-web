import Image from "next/image";
import { siteCopy } from "@/content/site-copy";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/Headshot.jpg"
              alt="Matt Shill, music teacher and performer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              {siteCopy.about.title}
            </h2>

            <blockquote className="mt-6 border-l-4 border-accent pl-5 text-lg italic text-foreground">
              &ldquo;{siteCopy.about.pullQuote}&rdquo;
            </blockquote>

            <div className="mt-6 space-y-4 text-muted">
              {siteCopy.about.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
