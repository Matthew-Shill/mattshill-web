"use client";

import { useState } from "react";
import { siteCopy } from "@/content/site-copy";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

type FaqItem = (typeof siteCopy.faq.items)[number];

function isInline(item: FaqItem): item is FaqItem & { inline: number } {
  return "inline" in item && typeof item.inline === "number";
}

function FaqItemRow({
  item,
  index,
  openIndex,
  onToggle,
  idPrefix,
}: {
  item: FaqItem;
  index: number;
  openIndex: number | null;
  onToggle: (index: number) => void;
  idPrefix: string;
}) {
  const isOpen = openIndex === index;
  const panelId = `${idPrefix}-panel-${index}`;
  const buttonId = `${idPrefix}-button-${index}`;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-accent-subtle/50"
      >
        <span className="text-base font-semibold">{item.question}</span>
        <ChevronIcon open={isOpen} />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-muted">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const inlineItems = siteCopy.faq.items.filter(isInline).sort((a, b) => a.inline - b.inline);
  const extraItems = siteCopy.faq.items.filter((item) => !isInline(item));

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section id="faq" className="py-8 md:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-4 text-center md:mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {siteCopy.faq.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {siteCopy.faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {inlineItems.map((item, index) => (
            <FaqItemRow
              key={item.question}
              item={item}
              index={index}
              openIndex={openIndex}
              onToggle={toggle}
              idPrefix="faq"
            />
          ))}
        </div>

        <details className="group mt-4">
          <summary className="cursor-pointer list-none text-center text-sm font-semibold text-accent hover:underline [&::-webkit-details-marker]:hidden">
            {siteCopy.faq.seeAll}
          </summary>
          <div className="mt-3 space-y-3">
            {extraItems.map((item, index) => (
              <FaqItemRow
                key={item.question}
                item={item}
                index={inlineItems.length + index}
                openIndex={openIndex}
                onToggle={toggle}
                idPrefix="faq-more"
              />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
