import { siteCopy } from "@/content/site-copy";

export function Outcomes() {
  return (
    <section className="bg-accent-subtle py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {siteCopy.outcomes.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {siteCopy.outcomes.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted">
            {siteCopy.outcomes.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {siteCopy.outcomes.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface p-8 text-center"
            >
              <p className="text-4xl font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
