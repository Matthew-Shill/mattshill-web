"use client";

import { useState } from "react";
import { siteCopy } from "@/content/site-copy";

const { nml } = siteCopy;

function VideoCameraIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m16 13 5.223 3.482A.5.5 0 0 0 22 16.065V7.935a.5.5 0 0 0-.777-.417L16 11" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function StepContent({ stepIndex }: { stepIndex: number }) {
  const step = nml.steps[stepIndex];

  if (stepIndex === 0 && "conflict" in step) {
    return (
      <>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Step 1 of 3
        </p>
        <h3 className="mt-2 text-xl font-bold">{step.label}</h3>
        <p className="mt-2 text-sm text-white/90">{step.description}</p>
        <div className="mt-5 rounded-xl bg-white p-4">
          <div className="flex items-start gap-3">
            <CalendarIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="font-semibold text-foreground">{step.conflict.day}</p>
              <p className="mt-0.5 text-sm font-medium text-red-600">
                {step.conflict.status}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (stepIndex === 1 && "buttonLabel" in step) {
    return (
      <>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Step 2 of 3
        </p>
        <h3 className="mt-2 text-xl font-bold">{step.label}</h3>
        <p className="mt-2 text-sm text-white/90">{step.description}</p>
        <div className="mt-5 rounded-xl bg-white p-4">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
            tabIndex={-1}
            aria-hidden
          >
            <VideoCameraIcon className="h-4 w-4" />
            {step.buttonLabel}
          </button>
        </div>
      </>
    );
  }

  if (stepIndex === 2 && "delivered" in step) {
    return (
      <>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Step 3 of 3
        </p>
        <h3 className="mt-2 text-xl font-bold">{step.label}</h3>
        <p className="mt-2 text-sm text-white/90">{step.description}</p>
        <div className="mt-5 overflow-hidden rounded-xl bg-white">
          <video
            className="aspect-video w-full bg-black object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src={nml.sampleVideo} type="video/mp4" />
          </video>
          <div className="flex items-start gap-2 px-4 py-3">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <p className="text-sm font-medium text-foreground">{step.delivered}</p>
          </div>
        </div>
      </>
    );
  }

  return null;
}

export function NmlSection() {
  const [stepIndex, setStepIndex] = useState(0);
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === nml.steps.length - 1;

  return (
    <section id="nml" className="bg-accent-subtle py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <VideoCameraIcon className="h-4 w-4" />
              {nml.eyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{nml.title}</h2>
            <p className="mt-6 text-lg text-muted">{nml.description}</p>
            <ul className="mt-8 space-y-3">
              {nml.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold">{nml.flowTitle}</h3>

            <div
              className="mt-4 flex gap-2"
              role="progressbar"
              aria-valuenow={stepIndex + 1}
              aria-valuemin={1}
              aria-valuemax={nml.steps.length}
              aria-label={`Step ${stepIndex + 1} of ${nml.steps.length}`}
            >
              {nml.steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    index <= stepIndex ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-accent p-6 text-white">
              <StepContent stepIndex={stepIndex} />
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setStepIndex((s) => s - 1)}
                disabled={isFirst}
                className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-muted transition-colors hover:bg-background disabled:cursor-not-allowed disabled:opacity-40"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() =>
                  isLast ? setStepIndex(0) : setStepIndex((s) => s + 1)
                }
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors ${
                  isLast
                    ? "bg-accent-light hover:bg-accent-light/90"
                    : "bg-accent hover:bg-accent-hover"
                }`}
              >
                {isLast ? "Start over" : "Next step"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
