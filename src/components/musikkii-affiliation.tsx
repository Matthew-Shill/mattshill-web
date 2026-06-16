import { siteCopy } from "@/content/site-copy";

type MusikkiiAffiliationProps = {
  variant?: "header" | "footer";
  showFooterNote?: boolean;
};

const teacherAffiliationClass =
  "font-semibold text-accent transition-colors group-hover:text-accent-hover";

const footerAffiliationClass =
  "font-semibold text-white transition-colors group-hover:text-white/80";

export function MusikkiiAffiliation({
  variant = "header",
  showFooterNote = false,
}: MusikkiiAffiliationProps) {
  const isFooter = variant === "footer";

  return (
    <a
      href={siteCopy.musikkii.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex max-w-sm items-center gap-2 ${
        isFooter ? "text-xs" : "text-[10px] leading-none sm:text-[11px]"
      }`}
      aria-label={`Matt Shill — ${siteCopy.musikkii.teacherAffiliation} on ${siteCopy.musikkii.name}`}
    >
      {isFooter ? (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteCopy.musikkii.logoSrc}
            alt=""
            className="h-3.5 w-auto"
            aria-hidden
          />
        </span>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteCopy.musikkii.logoSrc}
            alt=""
            className="h-3 w-auto shrink-0 sm:h-3.5"
            aria-hidden
          />
        </>
      )}
      <span className="inline-flex flex-wrap items-center gap-x-1 gap-y-0.5">
        <span
          className={isFooter ? footerAffiliationClass : teacherAffiliationClass}
        >
          {siteCopy.musikkii.teacherAffiliation}
        </span>
        {showFooterNote && (
          <>
            <span className="text-white/50"> · </span>
            <span className="text-white/50">{siteCopy.musikkii.footerNote}</span>
          </>
        )}
      </span>
    </a>
  );
}
