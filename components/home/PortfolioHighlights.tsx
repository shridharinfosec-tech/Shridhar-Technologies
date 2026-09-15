import Link from "@/components/shared/Link";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import { featuredCaseStudies, industries } from "@/data/portfolio";

export default function PortfolioHighlights() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Selected work"
          title="Products we have shipped"
          intro="A few projects, what was broken before, and what changed after launch."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((study, index) => {
            // On tablets the third card spans both columns so the grid has no orphan.
            const isWideOnTablet =
              index === featuredCaseStudies.length - 1 && featuredCaseStudies.length % 2 === 1;
            return (
              <CaseStudyCard
                key={study.slug}
                study={study}
                className={isWideOnTablet ? "sm:col-span-2 lg:col-span-1" : undefined}
                imageClassName={
                  isWideOnTablet ? "aspect-[4/3] sm:aspect-[16/7] lg:aspect-[4/3]" : undefined
                }
              />
            );
          })}
        </div>

        <div className="mt-10">
          <Button href="/portfolio" variant="ghost">
            View all work
          </Button>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <h3 className="font-display text-base font-bold text-snow">
            Industries we work with
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <li key={industry}>
                <Link
                  href={`/portfolio?industry=${encodeURIComponent(industry)}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line-bright px-4 text-sm font-semibold text-fog transition-colors hover:border-cyber hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
                >
                  {industry}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
