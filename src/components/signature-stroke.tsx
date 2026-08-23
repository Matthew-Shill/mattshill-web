export function SignatureStroke({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 168 18"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M3 14c8-7 14-9 18-3 22-2.6 44 1.8 68-1.4 20-2.6 38 2 58-1.2 7-.9 14 .4 21 1.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SignatureDivider({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className ?? ""}`} aria-hidden>
      <SignatureStroke className="h-4 w-36 text-accent/20" />
    </div>
  );
}
