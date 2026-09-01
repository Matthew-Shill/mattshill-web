import {
  albumTracks,
  artistCopy,
  liveVideos,
  socialLinks,
  streamingLinks,
} from "../_content";
import { ARTIST_ORIGIN } from "@/lib/artist-host";
import { SITE_URL } from "@/lib/site";

function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function ArtistJsonLd() {
  const pageUrl = ARTIST_ORIGIN;
  const image = `${SITE_URL}/Headshot.jpg`;

  const person = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: artistCopy.name,
    alternateName: "Matt Shill Music",
    url: pageUrl,
    image,
    email: artistCopy.booking.email,
    description: artistCopy.seo.description,
    genre: "Alternative",
    member: {
      "@type": "Person",
      name: artistCopy.name,
      jobTitle: artistCopy.role,
      homeLocation: {
        "@type": "Place",
        name: artistCopy.location,
      },
    },
    sameAs: [
      ...streamingLinks.map((link) => link.href),
      ...socialLinks.map((link) => link.href),
    ],
    album: {
      "@type": "MusicAlbum",
      name: "Don't Find Me",
      datePublished: "2019-08-02",
      numTracks: albumTracks.length,
      byArtist: {
        "@type": "MusicGroup",
        name: artistCopy.name,
      },
      track: albumTracks.map((track) => ({
        "@type": "MusicRecording",
        name: track.title,
        position: track.number,
      })),
    },
    video: liveVideos.map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      url: video.href,
      embedUrl:
        video.provider === "youtube"
          ? `https://www.youtube.com/embed/${video.id}`
          : `https://www.dailymotion.com/embed/video/${video.id}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(person) }}
    />
  );
}
