import type { Metadata, Viewport } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCta from "@/components/layout/StickyMobileCta";
import Analytics from "@/components/layout/Analytics";
import { siteConfig } from "@/data/siteConfig";
import { organizationJsonLd, professionalServiceJsonLd } from "@/lib/jsonld";
import "./globals.css";

// Type stack: Montserrat (700 and 800 only) for headings, labels and buttons,
// Nunito Sans for body copy. Montserrat carries the hero headline (the LCP
// element on most pages), so it preloads. next/font self-hosts both, and its
// size-adjusted fallback keeps layout shift minimal on swap.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
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
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), professionalServiceJsonLd()]),
          }}
        />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  );
}
