import { siteCopy } from "@/content/site-copy";

export function WhoItsFor() {
  return (
    <section id="who" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {siteCopy.whoItsFor.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {siteCopy.whoItsFor.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {siteCopy.whoItsFor.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {siteCopy.whoItsFor.paths.map((path) => (
            <div
              key={path.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="text-xl font-bold">{path.title}</h3>
              <p className="mt-3 text-muted">{path.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {path.instruments.map((instrument) => (
                  <span
                    key={instrument}
                    className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent"
                  >
                    {instrument}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-5 text-center">
          <p className="text-sm font-semibold text-muted">
            {siteCopy.whoItsFor.alsoTeach.label}
          </p>
          <p className="mt-2 text-sm text-foreground">
            {siteCopy.whoItsFor.alsoTeach.items.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
