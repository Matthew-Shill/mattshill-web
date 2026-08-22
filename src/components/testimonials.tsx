import { siteCopy } from "@/content/site-copy";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-accent"
          aria-hidden
        >
          <path d="M10 1.5 12.7 7l6 .9-4.3 4.2 1 6-5.4-2.8L4.6 18l1-6L1.3 7.9 7.3 7 10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const { testimonials } = siteCopy;

  return (
    <section id="reviews" className="bg-accent-subtle py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {testimonials.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{item.name}</span>
                <span className="text-muted">
                  {" "}
                  · {item.role} · {item.instrument}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
