import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteCopy } from "@/content/site-copy";

export const alt = "Matt Shill Music | Online Music Lessons";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const ACCENT = "#0331bd";
const CORAL = "#ff6b5b";
const CREAM = "#fff8f3";
const BORDER = "#e8dfd6";

const logoSrc = `data:image/png;base64,${await readFile(join(process.cwd(), "public/logo.png"), "base64")}`;
const photoSrc = `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public/weddingpiano.jpg"), "base64")}`;

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

export default async function OpenGraphImage() {
  const displayText = `${siteCopy.hero.headline} ${siteCopy.hero.headlineAccent}`;
  const sansText = [
    siteCopy.hero.subtitle,
    siteCopy.hero.cta,
    ...siteCopy.hero.proof,
  ].join(" ");

  const [fraunces, interMedium, interSemibold] = await Promise.all([
    loadGoogleFont("Fraunces", 600, displayText),
    loadGoogleFont("Inter", 500, sansText),
    loadGoogleFont("Inter", 600, sansText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: CREAM,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 88,
            padding: "0 56px",
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={178} height={44} />
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            background: ACCENT,
            padding: "40px 56px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 580,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Fraunces",
                fontSize: 58,
                fontWeight: 600,
                lineHeight: 1.08,
              }}
            >
              <div style={{ display: "flex" }}>{siteCopy.hero.headline}</div>
              <div style={{ display: "flex", color: CORAL }}>
                {siteCopy.hero.headlineAccent}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 22,
                fontWeight: 500,
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {siteCopy.hero.subtitle}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 28,
                alignItems: "center",
                alignSelf: "flex-start",
                borderRadius: 999,
                background: "white",
                color: ACCENT,
                fontSize: 20,
                fontWeight: 600,
                padding: "14px 32px",
              }}
            >
              {siteCopy.hero.cta}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: 22,
                gap: 8,
              }}
            >
              {siteCopy.hero.proof.slice(0, 3).map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.1)",
                    padding: "6px 12px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 460,
              height: 345,
              overflow: "hidden",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoSrc}
              alt=""
              width={460}
              height={345}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
        { name: "Inter", data: interMedium, style: "normal", weight: 500 },
        { name: "Inter", data: interSemibold, style: "normal", weight: 600 },
      ],
    },
  );
}
