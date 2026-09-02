import { artistCopy, socialLinks } from "../_content";
import { getLessonsHref } from "../_lib/paths";
import { SocialIcon } from "./brand-icons";
import { NewsletterForm } from "./newsletter-form";

export async function ArtistFooter() {
  const lessonsHref = await getLessonsHref();

  return (
    <footer className="mt-auto border-t border-[var(--artist-border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-8 sm:px-6">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-[var(--artist-fg)]">
            {artistCopy.newsletter.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--artist-muted)]">
            {artistCopy.newsletter.intro}
          </p>
          <div className="mt-4">
            <NewsletterForm compact />
          </div>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[var(--artist-muted)]">
          {artistCopy.lessonsCta.line}{" "}
          <a
            href={lessonsHref}
            className="text-[var(--artist-fg)] underline decoration-[var(--artist-border)] underline-offset-4 hover:text-[var(--artist-accent)] hover:decoration-[var(--artist-accent)]"
          >
            {artistCopy.lessonsCta.action}
          </a>
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--artist-muted)]">
            © {new Date().getFullYear()} {artistCopy.name}
          </p>
          <ul className="flex flex-wrap gap-3 text-[var(--artist-muted)]">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center hover:text-[var(--artist-accent)]"
                  aria-label={link.label}
                  title={link.label}
                >
                  <SocialIcon id={link.id} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
