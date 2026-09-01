import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies from Shridhar Technologies across logistics, healthcare, fintech, retail, manufacturing, and professional services.",
};

export default function PortfolioPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <Breadcrumb items={[{ name: "Portfolio", href: "/portfolio" }]} />
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-snow sm:text-5xl">
            Portfolio
          </h1>
          <p className="mt-4 text-lg text-fog">
            The case studies below are illustrative placeholders showing the
            kind of work we take on, pending publishable details from named
            client engagements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((study) => (
            <PortfolioCard key={study.slug} study={study} />
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
