import { siteCopy } from "@/content/site-copy";

export function HowWeTeach() {
  const { how, nml } = siteCopy;

  return (
    <section id="how" className="py-8 md:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {how.title}
          </h2>
          <p className="mt-3 text-muted">{how.intro}</p>

          <ol className="mt-6 space-y-4">
            {how.lessonArc.map((step, index) => (
              <li key={step.phase} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coral text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold">{step.phase}</p>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div
          id="nml"
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
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
      </div>
    </section>
  );
}
