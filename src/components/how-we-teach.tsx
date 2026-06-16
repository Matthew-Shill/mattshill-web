import { siteCopy } from "@/content/site-copy";

export function HowWeTeach() {
  return (
    <section id="how" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {siteCopy.how.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {siteCopy.how.title}
          </h2>
          <p className="mt-6 text-lg text-muted">{siteCopy.how.intro}</p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {siteCopy.how.lessonArc.map((step, index) => (
            <div
              key={step.phase}
              className="relative rounded-xl border border-border bg-background p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold">{step.phase}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {siteCopy.how.bullets.map((bullet) => (
            <li
              key={bullet.bold}
              className="flex gap-3 rounded-xl border border-border bg-background p-5"
            >
              <span className="mt-1 shrink-0 text-accent">✓</span>
              <span>
                <strong>{bullet.bold}</strong> {bullet.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
