import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/siteConfig";

export const ogSize = { width: 1200, height: 630 };

// Shared Open Graph card, rendered at build time for each static page.
export function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b1e46 0%, #12285a 100%)",
          padding: "72px",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            borderRadius: 9999,
            padding: "8px 20px",
            background: "rgba(67, 186, 255, 0.16)",
            color: "#43baff",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 52 : 64,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#c7d3e8",
          }}
        >
          <span>{siteConfig.name}</span>
          <span>AI-accelerated software studio</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
