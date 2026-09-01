import { ImageResponse } from "next/og";
import { artistCopy } from "./_content";

export const alt = artistCopy.seo.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function ArtistOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f3ead8",
          color: "#c4341b",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7a5344",
          }}
        >
          {artistCopy.role}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 72,
            fontWeight: 500,
            letterSpacing: "-0.04em",
          }}
        >
          {artistCopy.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#3a2218",
            maxWidth: 800,
          }}
        >
          {artistCopy.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
