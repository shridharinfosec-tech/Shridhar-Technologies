import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Production hosting is Vercel, which builds Next.js natively. Local and CI
  // builds emit a static `out/` export so the pages can be checked as plain
  // files. All routes are static/SSG, so both paths ship the same pages.
  // [OWNER TO CONFIRM] Hosting on Vercel only (netlify.toml was removed).
  output: process.env.VERCEL ? undefined : "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
