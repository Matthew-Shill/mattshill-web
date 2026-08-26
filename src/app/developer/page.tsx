import Image from "next/image";
import { Waveform } from "./_components/waveform";
import { developerCopy } from "./_content";
import headshot from "./headshot.webp";

export default function DeveloperPage() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-[#27272a] bg-[#09090b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a
            href="/developer"
            className="text-sm font-medium tracking-tight hover:text-[var(--developer-accent)]"
          >
            {developerCopy.name}
            <span className="ml-2 font-normal text-[#a1a1aa]">
              {developerCopy.role}
            </span>
          </a>
          <nav aria-label="Portfolio">
            <ul className="flex items-center gap-4 text-sm text-[#a1a1aa] sm:gap-5">
              {developerCopy.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-[var(--developer-accent)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 py-16 sm:px-6 sm:py-24">
        <section id="about" className="scroll-mt-24">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <Image
              src={headshot}
              alt="Portrait of Matt Shill"
              placeholder="blur"
              priority
              className="h-40 w-32 shrink-0 rounded-lg object-cover ring-1 ring-[var(--developer-accent)]/25 sm:h-44 sm:w-36"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
                {developerCopy.location}
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
                {developerCopy.intro.headline}
              </h1>
              <Waveform animated className="mt-5 max-w-xl" />
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d4d4d8]">
                {developerCopy.intro.lede}
              </p>
              <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-[#a1a1aa]">
                {developerCopy.intro.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-20 scroll-mt-24 sm:mt-28">
          <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
            Skills
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {developerCopy.skills.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-medium text-[#fafafa]">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-[#a1a1aa]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-sm font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
            Certifications
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[#a1a1aa]">
            {developerCopy.certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>

          <h3 className="mt-12 text-sm font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
            Languages
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[#a1a1aa]">
            {developerCopy.languages.map((language) => (
              <li key={language.name}>
                <span className="text-[#fafafa]">{language.name}</span>
                <span className="text-[#71717a]"> — {language.level}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-20 sm:mt-28" aria-hidden>
          <Waveform className="developer-waveform--quiet" />
        </div>

        <section id="work" className="mt-8 scroll-mt-24 sm:mt-10">
          <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
            Featured projects
          </h2>
          <ul className="mt-6 space-y-4">
            {developerCopy.projects.map((project) => (
              <li
                key={project.name}
                className="rounded-xl border border-[#27272a] bg-[#18181b] p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#a1a1aa]">{project.role}</p>
                  </div>
                  {project.status ? (
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--developer-accent)]">
                      {project.status}
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
                  {project.summary}
                </p>
                {project.clients && project.clients.length > 0 ? (
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[#a1a1aa]">
                    {project.clients.map((client) => (
                      <li key={client}>{client}</li>
                    ))}
                  </ul>
                ) : null}
                {project.tags.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[#27272a] px-2.5 py-1 text-xs text-[#d4d4d8]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-[#fafafa] underline decoration-[#3f3f46] underline-offset-4 hover:text-[var(--developer-accent)] hover:decoration-[var(--developer-accent)]"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                  {project.repoPrivate ? (
                    <span className="inline-flex cursor-default items-center rounded-full border border-[#27272a] px-2.5 py-1 text-xs text-[#71717a]">
                      Private repo — available on request
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mt-20 scroll-mt-24 sm:mt-28">
          <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
            Contact
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#a1a1aa]">
            {developerCopy.contact.note}
          </p>
          <ul className="mt-6 space-y-3">
            {developerCopy.contact.links.map((link) => (
              <li key={link.label} className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="w-20 text-sm text-[#71717a]">{link.label}</span>
                <a
                  href={link.href}
                  className="text-sm text-[#fafafa] underline decoration-[#3f3f46] underline-offset-4 hover:text-[var(--developer-accent)] hover:decoration-[var(--developer-accent)]"
                >
                  {link.display}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-[#27272a]">
        <div className="mx-auto flex max-w-3xl px-5 py-6 sm:px-6">
          <p className="text-xs text-[#71717a]">
            © {new Date().getFullYear()} {developerCopy.name}
          </p>
        </div>
      </footer>
    </>
  );
}
