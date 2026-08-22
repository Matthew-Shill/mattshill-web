import { TrialCta } from "@/components/trial-cta";
import { siteCopy } from "@/content/site-copy";

const { nml } = siteCopy;

export function NmlSection() {
  return (
    <section id="nml" className="bg-accent-subtle py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {nml.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{nml.title}</h2>
          <p className="mt-4 text-lg text-muted">{nml.description}</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
            {nml.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-1.5">
                <span className="text-accent">✓</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {nml.steps.map((step, index) => (
            <li
              key={step.label}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold">{step.label}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface">
          <video
            className="aspect-video w-full bg-black object-cover"
            controls
            preload="metadata"
            playsInline
            title={nml.sampleVideoLabel}
            aria-label={nml.sampleVideoLabel}
          >
            <source src={nml.sampleVideo} type="video/mp4" />
          </video>
          <p className="px-4 py-3 text-sm font-medium text-muted">
            {nml.sampleVideoLabel}
          </p>
        </div>

        <TrialCta />
      </div>
    </section>
  );
}
