import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ARTIST_HOST } from "@/lib/artist-host";
import { artistCopy } from "./_content";

export const alt = artistCopy.seo.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const CREAM = "#f3ead8";
const RED = "#c4341b";
const MUTED = "#7a5344";

const photoSrc = `data:image/png;base64,${await readFile(join(process.cwd(), "public/artist-hero.png"), "base64")}`;

const grainSrc = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`,
)}`;

async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  }).then((res) => res.text());

  const match = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (!match) {
    throw new Error(`Could not load Google font ${family} ${weight}`);
  }

  const fontResponse = await fetch(match[1]);
  if (!fontResponse.ok) {
    throw new Error(`Could not fetch font file for ${family} ${weight}`);
  }

  return fontResponse.arrayBuffer();
}

export default async function ArtistOpenGraphImage() {
  const bodyText = [
    artistCopy.hero.eyebrow,
    artistCopy.tagline,
    artistCopy.hero.subline,
    ARTIST_HOST,
  ].join(" ");

  const [caprasimo, fraunces] = await Promise.all([
    loadGoogleFont("Caprasimo", 400, artistCopy.name),
    loadGoogleFont("Fraunces", 500, bodyText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${grainSrc})`,
            opacity: 0.16,
          }}
        />

        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 20,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          {artistCopy.hero.eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontFamily: "Caprasimo",
            fontSize: 92,
            lineHeight: 0.9,
            color: RED,
          }}
        >
          {artistCopy.name}
        </div>

        <div
          style={{
            display: "flex",
            width: 230,
            height: 340,
            marginTop: 8,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={230}
            height={340}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: -18,
            maxWidth: 760,
            fontFamily: "Fraunces",
            fontSize: 28,
            lineHeight: 1.3,
            color: RED,
            textAlign: "center",
          }}
        >
          {artistCopy.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            fontFamily: "Fraunces",
            fontSize: 20,
            color: MUTED,
          }}
        >
          {artistCopy.hero.subline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Caprasimo", data: caprasimo, style: "normal", weight: 400 },
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
      ],
    },
  );
}
