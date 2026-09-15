import type { Metadata } from "next";
import { Suspense } from "react";
import PortfolioFilter, { PortfolioGrid } from "@/components/portfolio/PortfolioFilter";
import CtaBand from "@/components/layout/CtaBand";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Case studies from Shridhar Technologies: SaaS, cloud migration, AI and modernization projects for logistics, healthcare, fintech, retail and manufacturing.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ name: "Work", href: "/portfolio" }]}
        eyebrow="Case studies"
        title="Our work"
        intro="Products we have designed, built and launched, with the results they delivered."
      />

      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <Suspense fallback={<PortfolioGrid />}>
          <PortfolioFilter />
        </Suspense>
      </div>

      <CtaBand secondaryLabel="Explore services" secondaryHref="/services" />
    </>
  );
}
