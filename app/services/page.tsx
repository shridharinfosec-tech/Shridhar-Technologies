import type { Metadata } from "next";
import { categories } from "@/data/services";
import CategoryCard from "@/components/services/CategoryCard";
import TechPlatformsGrid from "@/components/home/TechPlatformsGrid";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital engineering, cloud, AI, application engineering, and product engineering services from Shridhar Technologies.",
};

export default function ServicesHubPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <Breadcrumb items={[{ name: "Services", href: "/services" }]} />
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-snow sm:text-5xl">
            Services
          </h1>
          <p className="mt-4 text-lg text-fog">
            Five practice areas covering the full lifecycle of building and
            running software — pick one, or combine a few for a single
            engagement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <TechPlatformsGrid />
      </div>

      <CtaBand />
    </>
  );
}
