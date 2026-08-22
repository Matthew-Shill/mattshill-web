import type { ReactNode } from "react";
import Link from "next/link";
import { LESSON_PAGES, LESSON_SLUGS } from "@/content/lessons";
import { siteCopy } from "@/content/site-copy";

type ErrorVariant = "not-found" | "error";

type ErrorScreenProps = {
  variant: ErrorVariant;
  code: string;
  eyebrow: string;
  title: string;
  body: string;
  primaryAction?: ReactNode;
  digest?: string;
};

const STAFF_Y = [28, 44, 60, 76, 92] as const;

function WholeRest({ x }: { x: number }) {
  return (
    <rect
      x={x - 11}
      y={44}
      width="22"
      height="12"
      rx="1.5"
      fill="currentColor"
    />
  );
}

function QuarterNote({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <ellipse
        cx={x}
        cy={y}
        rx="8.5"
        ry="6"
        transform={`rotate(-20 ${x} ${y})`}
        fill="currentColor"
      />
      <path
        d={`M ${x + 7.2} ${y - 1.5} v -38`}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </g>
  );
}

function ErrorArt({ variant }: { variant: ErrorVariant }) {
  const isMissing = variant === "not-found";

  return (
    <div className="relative mx-auto w-full max-w-lg" aria-hidden>
      <svg
        viewBox="0 0 420 120"
        className="h-auto w-full text-white"
        fill="none"
      >
        {STAFF_Y.map((y) => (
          <line
            key={y}
            x1="12"
            x2="408"
            y1={y}
            y2={y}
            stroke="currentColor"
            strokeOpacity="0.22"
            strokeWidth="1.25"
          />
        ))}

        {/* Bar lines */}
        <line
          x1="12"
          x2="12"
          y1="28"
          y2="92"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
        <line
          x1="408"
          x2="408"
          y1="28"
          y2="92"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="2.75"
        />

        {/* Decorative clef-like curve */}
        <path
          d="M46 96c0-28 22-34 22-52 0-14-10-20-18-14-6 5-4 16 6 18 14 3 28-12 24-30-3-14-18-22-30-14"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {isMissing ? (
          <>
            <QuarterNote x={150} y={76} />
            <WholeRest x={250} />
            <text
              x="250"
              y="38"
              textAnchor="middle"
              fill="currentColor"
              fillOpacity="0.55"
              fontSize="11"
              fontStyle="italic"
              letterSpacing="0.18em"
            >
              tacet
            </text>
          </>
        ) : (
          <>
            <QuarterNote x={168} y={60} />
            <path
              d="M250 88c8-10 22-10 30 0"
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M265 72v-6"
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="265"
              cy="60"
              r="4"
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="1.75"
            />
          </>
        )}
      </svg>
    </div>
  );
}

export function ErrorScreen({
  variant,
  code,
  eyebrow,
  title,
  body,
  primaryAction,
  digest,
}: ErrorScreenProps) {
  const copy = siteCopy.errors;

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-accent text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent-light/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-black/20 blur-3xl"
      />
      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 select-none font-bold leading-none text-white/[0.06] text-[7.5rem] sm:text-[11rem]"
      >
        {code}
      </p>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
          {eyebrow}
        </p>

        <div className="mt-8">
          <ErrorArt variant={variant} />
        </div>

        <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/80">{body}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          {primaryAction}
          <Link
            href="/"
            className={
              primaryAction
                ? "inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
                : "inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
            }
          >
            {copy.home}
          </Link>
          <Link
            href="/lessons"
            className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            {copy.lessons}
          </Link>
          <Link
            href="/free-trial"
            className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            {copy.freeTrial}
          </Link>
        </div>

        <nav aria-label="Online lesson options" className="mt-14">
          <p className="text-sm font-medium text-white/60">
            {copy.instrumentLabel}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {LESSON_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/lessons/${slug}`}
                  className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  {LESSON_PAGES[slug].name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 space-y-2">
          <a
            href={`mailto:${siteCopy.contact.email}`}
            className="inline-flex w-fit text-sm text-white/55 transition-colors hover:text-white"
          >
            {copy.contact}: {siteCopy.contact.email}
          </a>
          {digest ? (
            <p className="font-mono text-xs text-white/40">
              {copy.unexpected.reference} {digest}
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
