import Link from "next/link";
import { siteCopy } from "@/content/site-copy";
import { SignatureDivider } from "@/components/signature-stroke";

const INSTRUMENT_HREF: Record<string, string> = {
  Piano: "/lessons/piano",
  Guitar: "/lessons/guitar",
  Voice: "/lessons/voice",
  Vocals: "/lessons/voice",
  Bass: "/lessons/bass",
  Drums: "/lessons/drums",
  Songwriting: "/lessons/songwriting",
  Production: "/lessons/songwriting",
};

function InstrumentChip({ label }: { label: string }) {
  const href = INSTRUMENT_HREF[label];
  const className =
    "rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-white";

  if (!href) {
    return <span className={className}>{label}</span>;
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function WhoItsFor() {
  return (
    <section id="who" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-4 max-w-3xl md:mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {siteCopy.whoItsFor.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {siteCopy.whoItsFor.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
          {siteCopy.whoItsFor.paths.map((path) => (
            <div
              key={path.title}
              className="rounded-2xl border border-border bg-surface p-4 sm:p-5"
            >
              <h3 className="text-base font-bold sm:text-lg">{path.title}</h3>
              <p className="mt-2 text-sm text-muted">{path.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {path.instruments.map((instrument) => (
                  <InstrumentChip key={instrument} label={instrument} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-muted">
          <Link
            href="/lessons"
            className="font-semibold text-accent hover:underline"
          >
            {siteCopy.whoItsFor.browseLessons}
          </Link>
        </p>
      </div>
      <SignatureDivider className="mt-8 md:mt-10" />
    </section>
  );
}
