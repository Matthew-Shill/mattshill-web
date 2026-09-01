import { streamingLinks } from "../_content";
import { StreamingIcon } from "./brand-icons";

export function StreamingLinks({
  label,
}: {
  label: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--artist-muted)]">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {streamingLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--artist-border)] bg-[var(--artist-cream)] px-3 py-2 text-sm text-[var(--artist-fg)] transition-colors hover:border-[var(--artist-accent)] hover:text-[var(--artist-accent)]"
            >
              <StreamingIcon id={link.id} className="h-4 w-4" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
