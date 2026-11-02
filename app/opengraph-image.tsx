import { ImageResponse } from "next/og";

export const alt = "Tanush Gupta, UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#f7d0e9", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#111" }}>UI Designer / UX Designer / UI/UX Lead</div>
        <div style={{ display: "flex", fontSize: 150, fontWeight: 900, lineHeight: 0.95, color: "#111", textTransform: "uppercase", marginTop: 24 }}>Tanush Gupta</div>
        <div style={{ display: "flex", marginTop: 40 }}>
          <div style={{ display: "flex", background: "#c8f55a", border: "6px solid #111", borderRadius: 16, padding: "12px 28px", fontSize: 36, fontWeight: 700, boxShadow: "8px 8px 0 #111" }}>From sketch to screen.</div>
        </div>
      </div>
    ),
    size
  );
}
