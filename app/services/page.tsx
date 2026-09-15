import type { Metadata } from "next";
import { categories } from "@/data/services";
import { bookCallHref } from "@/data/siteConfig";
import CategoryCard from "@/components/services/CategoryCard";
import TechPlatformsGrid from "@/components/home/TechPlatformsGrid";
import CtaBand from "@/components/layout/CtaBand";
import PageHero from "@/components/shared/PageHero";
import ProofPoints from "@/components/shared/ProofPoints";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Software development services",
  description:
    "AI-accelerated software development services: web and mobile apps, SaaS platforms, cloud and DevOps, and AI features, built and supported by senior engineers.",
  alternates: { canonical: "/services" },
};

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ name: "Services", href: "/services" }]}
        eyebrow="Services"
        title="Software development services"
        intro="Everything you need to plan, build and run software. Start with one service or combine a few in one engagement."
      >
        <Button href={bookCallHref} className="mt-8">
          Book a call
        </Button>
        <ProofPoints className="mt-6" />
      </PageHero>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
          <li className="flex flex-col justify-between rounded-xl bg-deep p-6 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-extrabold text-white">
                Not sure where to start?
              </h2>
              <p className="mt-3 leading-relaxed text-on-deep">
                Book a free 20 minute scoping call and we will point you to the right
                service.
              </p>
            </div>
            <Button href={bookCallHref} className="mt-6 self-start">
              Book a call
            </Button>
          </li>
        </ul>
      </div>

      <div className="border-t border-line">
        <TechPlatformsGrid />
      </div>

      <CtaBand />
    </>
  );
}
