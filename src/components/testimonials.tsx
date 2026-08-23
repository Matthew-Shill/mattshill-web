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

const featuredReviews = siteCopy.testimonials.items.filter(
  (item) => "featured" in item && item.featured,
);

export function Testimonials() {
  const { testimonials } = siteCopy;

  return (
    <section id="reviews" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-4 text-center md:mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {testimonials.title}
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {featuredReviews.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-border bg-surface p-4 sm:p-5"
            >
              <Stars />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
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
