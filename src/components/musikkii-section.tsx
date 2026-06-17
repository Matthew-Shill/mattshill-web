"use client";

import Image from "next/image";
import { useState } from "react";
import { siteCopy } from "@/content/site-copy";

const { musikkii } = siteCopy;
type ViewKey = keyof typeof musikkii.views;

export function MusikkiiSection() {
  const [activeView, setActiveView] = useState<ViewKey>("student");
  const view = musikkii.views[activeView];

  return (
    <section id="musikkii" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {musikkii.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              {musikkii.title}
            </h2>
            <p className="mt-6 text-lg text-muted">{musikkii.subtitle}</p>

            <span className="mt-6 inline-flex items-center rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5 text-sm font-semibold text-accent">
              {musikkii.comingSoon}
            </span>

            <ul className="mt-10 space-y-6">
              {musikkii.features.map((feature) => (
                <li key={feature.title}>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="mx-auto flex w-fit rounded-full border border-border bg-background p-1 shadow-sm"
              role="tablist"
              aria-label="Musikkii app preview views"
            >
              {(Object.keys(musikkii.views) as ViewKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeView === key}
                  onClick={() => setActiveView(key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    activeView === key
                      ? "bg-surface text-foreground shadow-sm"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {musikkii.views[key].label}
                </button>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
              <Image
                src={view.image}
                alt={view.alt}
                width={1200}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
