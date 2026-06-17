import { siteCopy } from "@/content/site-copy";

type MusikkiiAffiliationProps = {
  variant?: "header" | "footer";
  showFooterNote?: boolean;
};

export function MusikkiiAffiliation({
  variant = "header",
  showFooterNote = false,
}: MusikkiiAffiliationProps) {
  const isFooter = variant === "footer";
  const { musikkii } = siteCopy;

  return (
    <span
      className={`inline-flex max-w-sm flex-wrap items-center ${
        isFooter ? "gap-2 text-xs" : "gap-x-1 gap-y-0.5 text-[10px] leading-none sm:text-[11px]"
      }`}
    >
      {isFooter && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={musikkii.logoSrc}
            alt=""
            className="h-3.5 w-auto"
            aria-hidden
          />
        </span>
      )}
      <span
        className={`font-medium ${isFooter ? "text-white/80" : "text-[#0331bd]"}`}
      >
        {musikkii.teacherAffiliation}
      </span>
      {showFooterNote && (
        <>
          <span className="text-white/40">·</span>
          <span className="text-white/50">{musikkii.footerNote}</span>
        </>
      )}
    </span>
  );
}
