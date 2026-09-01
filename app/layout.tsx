import type { Metadata, Viewport } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";
import { organizationJsonLd } from "@/lib/jsonld";
import "./globals.css";

// Montserrat carries the big hero headline, which is the LCP element on most
// pages, so it preloads. Nunito Sans (body) is not preloaded - keeping it off
// the critical path avoids bandwidth contention with the LCP heading font.
// next/font's size-adjusted fallback keeps layout shift minimal on swap.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1e46",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${nunitoSans.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-ink text-fog antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <TopBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <ScrollReveal />
        <Footer />
      </body>
    </html>
  );
}
