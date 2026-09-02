import Image from "next/image";
import { ArtistHero } from "./_components/artist-hero";
import { BookingForm } from "./_components/booking-form";
import { NewsletterForm } from "./_components/newsletter-form";
import { ArtistJsonLd } from "./_components/json-ld";
import { SocialFeeds } from "./_components/social-feeds";
import { StreamingLinks } from "./_components/streaming-links";
import { artistCopy, liveVideos, spotifyEmbedSrc } from "./_content";
import albumArt from "./dont-find-me.jpg";

function embedSrc(video: (typeof liveVideos)[number]) {
  if (video.provider === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${video.id}`;
  }
  return `https://www.dailymotion.com/embed/video/${video.id}`;
}

export default function ArtistPage() {
  return (
    <>
      <ArtistJsonLd />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-12 sm:px-6 sm:py-16">
        <ArtistHero />

        <section id="listen" className="mt-24 scroll-mt-24 sm:mt-32">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--artist-muted)]">
            {artistCopy.listen.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{artistCopy.listen.title}</h2>
          <p className="mt-2 text-sm text-[var(--artist-muted)]">
            {artistCopy.listen.released} · {artistCopy.listen.genre}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--artist-muted)]">
            {artistCopy.listen.description}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:items-start">
            <Image
              src={albumArt}
              alt="Don't Find Me album cover"
              placeholder="blur"
              className="h-40 w-40 object-cover ring-1 ring-[var(--artist-border)] sm:h-44 sm:w-44"
            />
            <div className="artist-spotify">
              <iframe
                src={spotifyEmbedSrc}
                title={artistCopy.listen.playerTitle}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
          <div className="mt-8">
            <StreamingLinks label={artistCopy.listen.streamingLabel} />
          </div>
        </section>

        <section id="list" className="mt-24 scroll-mt-24 sm:mt-32">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--artist-muted)]">
            {artistCopy.newsletter.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{artistCopy.newsletter.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--artist-muted)]">
            {artistCopy.newsletter.intro}
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </section>

        <section id="watch" className="mt-24 scroll-mt-24 sm:mt-32">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--artist-muted)]">
            {artistCopy.live.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{artistCopy.live.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--artist-muted)]">
            {artistCopy.live.intro}
          </p>
          <ul className="mt-10 grid gap-8 lg:grid-cols-2">
            {liveVideos.map((video) => (
              <li key={video.href}>
                <div className="artist-embed">
                  <iframe
                    src={embedSrc(video)}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-[var(--artist-fg)]">
                  {video.title}
                </p>
                <p className="mt-1 text-xs text-[var(--artist-muted)]">
                  {video.venue}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="artist-wordmark mt-16 text-3xl sm:text-4xl">
            {artistCopy.social.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--artist-muted)]">
            {artistCopy.social.intro}
          </p>
          <div className="mt-8">
            <SocialFeeds
              youtubeTitle={artistCopy.social.youtubeTitle}
              tiktokTitle={artistCopy.social.tiktokTitle}
              instagramTitle={artistCopy.social.instagramTitle}
            />
          </div>
        </section>

        <section id="bio" className="mt-24 scroll-mt-24 sm:mt-32">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--artist-muted)]">
            {artistCopy.bio.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{artistCopy.bio.title}</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-[var(--artist-muted)]">
            {artistCopy.bio.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {artistCopy.bio.facts.map((fact) => (
              <div
                key={fact.label}
                className="border-t border-[var(--artist-border)] pt-4"
              >
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--artist-muted)]">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm text-[var(--artist-fg)]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-12 text-sm font-medium uppercase tracking-[0.18em] text-[var(--artist-muted)]">
            {artistCopy.bio.stagesLabel}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--artist-muted)]">
            {artistCopy.bio.stages.map((stage) => (
              <li key={stage}>{stage}</li>
            ))}
          </ul>
        </section>

        <section id="book" className="mt-24 scroll-mt-24 sm:mt-32">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--artist-muted)]">
            {artistCopy.booking.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{artistCopy.booking.title}</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
            <BookingForm />
            <aside className="border border-[var(--artist-border)] bg-[var(--artist-soft)] p-6">
              <p className="text-sm leading-relaxed text-[var(--artist-muted)]">
                {artistCopy.booking.intro}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${artistCopy.booking.email}`}
                    className="text-[var(--artist-fg)] underline decoration-[var(--artist-border)] underline-offset-4 hover:text-[var(--artist-accent)] hover:decoration-[var(--artist-accent)]"
                  >
                    {artistCopy.booking.email}
                  </a>
                </li>
                <li>
                  <a
                    href={artistCopy.booking.phoneHref}
                    className="text-[var(--artist-fg)] underline decoration-[var(--artist-border)] underline-offset-4 hover:text-[var(--artist-accent)] hover:decoration-[var(--artist-accent)]"
                  >
                    {artistCopy.booking.phone}
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
