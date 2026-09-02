import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DEVELOPER_HOST } from "@/lib/developer-host";
import { developerCopy } from "./_content";

export const alt = "Matt Shill — Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const BG = "#09090b";
const FG = "#fafafa";
const MUTED = "#a1a1aa";
const ACCENT = "#e0b15a";
const RING = "rgba(224, 177, 90, 0.35)";

const photoSrc = `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public/developer-headshot.jpg"), "base64")}`;

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

export default async function DeveloperOpenGraphImage() {
  const sansText = [
    developerCopy.name,
    developerCopy.role,
    developerCopy.intro.headline,
    DEVELOPER_HOST,
    "Developer",
  ].join(" ");

  const [geistMedium, geistRegular] = await Promise.all([
    loadGoogleFont("Geist", 500, sansText),
    loadGoogleFont("Geist", 400, sansText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: BG,
          color: FG,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 8,
            height: "100%",
            background: ACCENT,
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "72px 80px 72px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 640,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: ACCENT,
              }}
            >
              Developer
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontSize: 72,
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {developerCopy.name}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 36,
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              {developerCopy.intro.headline}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 36,
                alignItems: "center",
                fontSize: 22,
                fontWeight: 400,
                color: MUTED,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 36,
                  height: 2,
                  marginRight: 16,
                  background: ACCENT,
                }}
              />
              {developerCopy.role}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontSize: 20,
                fontWeight: 400,
                color: MUTED,
              }}
            >
              {DEVELOPER_HOST}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 280,
              height: 350,
              overflow: "hidden",
              borderRadius: 16,
              border: `2px solid ${RING}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoSrc}
              alt=""
              width={280}
              height={350}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistMedium, style: "normal", weight: 500 },
        { name: "Geist", data: geistRegular, style: "normal", weight: 400 },
      ],
    },
  );
}
