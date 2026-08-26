import { ImageResponse } from "next/og";

export const alt = "Matt Shill — Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function DeveloperOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#09090b",
          color: "#fafafa",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          Developer
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 72,
            fontWeight: 500,
            letterSpacing: "-0.04em",
          }}
        >
          Matt Shill
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          Software developer portfolio
        </div>
      </div>
    ),
    { ...size },
  );
}
