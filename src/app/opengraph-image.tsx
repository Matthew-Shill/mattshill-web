import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "Matt Shill Music — Online Music Lessons";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #022a9e 0%, #0331bd 45%, #1a4fd4 100%)",
          color: "white",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Online Music Lessons
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.35,
              opacity: 0.9,
              maxWidth: 900,
            }}
          >
            Piano · Guitar · Voice · Bass · Drums · Songwriting
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            opacity: 0.8,
          }}
        >
          Free trial · Never Miss A Lesson™ · Conservatory-trained teaching
        </div>
      </div>
    ),
    { ...size },
  );
}
