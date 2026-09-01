import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/data/siteConfig";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

// Satori (the renderer behind ImageResponse) has no access to our stylesheet
// or CSS custom properties, so brand colors are hardcoded here as plain hex —
// the one place in the codebase where that's the correct approach, not a
// convenience shortcut. Colors mirror the dark-navy hero.
export default async function Image() {
  const montserrat = await readFile(
    join(process.cwd(), "assets/fonts/Montserrat-ExtraBold.ttf"),
  );

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
          backgroundColor: "#0b1e46",
          backgroundImage:
            "radial-gradient(circle at 80% 25%, rgba(67,186,255,0.22), transparent 45%), radial-gradient(circle at 15% 90%, rgba(70,97,197,0.28), transparent 45%)",
          fontFamily: "Montserrat",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 66, fontWeight: 800, color: "#ffffff" }}>
            Shridhar
          </span>
          <span style={{ fontSize: 66, fontWeight: 800, color: "#43baff" }}>
            Technologies
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 26 }}>
          <span style={{ fontSize: 28, color: "#c7d3e8" }}>{siteConfig.tagline}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Montserrat", data: montserrat, style: "normal", weight: 800 }],
    },
  );
}
