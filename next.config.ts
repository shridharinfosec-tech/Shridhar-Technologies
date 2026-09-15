import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // On Vercel, build Next.js natively (the platform serves the static pages
  // from its CDN). Everywhere else (Netlify, local), emit a static `out/`
  // export. All routes are static/SSG, so both paths ship the same pages.
  output: process.env.VERCEL ? undefined : "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
