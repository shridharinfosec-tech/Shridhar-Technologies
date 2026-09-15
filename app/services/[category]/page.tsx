import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory, getServicesByCategory } from "@/data/services";
import { bookCallHref } from "@/data/siteConfig";
import ServiceCard from "@/components/services/ServiceCard";
import CtaBand from "@/components/layout/CtaBand";
import PageHero from "@/components/shared/PageHero";
import ProofPoints from "@/components/shared/ProofPoints";
import Button from "@/components/shared/Button";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} services`,
    description: `${category.description} AI-accelerated delivery from senior engineers at Shridhar Technologies, with fixed milestones and code you own.`,
    alternates: { canonical: `/services/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const categoryServices = getServicesByCategory(category.slug);
  // Fill the last desktop row with a CTA card instead of leaving an orphan.
  const showCtaCard = categoryServices.length % 3 !== 0;

  return (
    <>
      <PageHero
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: category.name, href: `/services/${category.slug}` },
        ]}
        eyebrow="Services"
        title={`${category.name} services`}
        intro={category.description}
      >
        <Button href={bookCallHref} className="mt-8">
          Book a call
        </Button>
        <ProofPoints className="mt-6" />
      </PageHero>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryServices.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} categorySlug={category.slug} />
            </li>
          ))}
          {showCtaCard && (
            <li className="flex flex-col justify-between rounded-xl bg-deep p-6 sm:p-8">
              <div>
                <h2 className="font-display text-lg font-extrabold text-white">
                  Not sure which service fits?
                </h2>
                <p className="mt-3 leading-relaxed text-on-deep">
                  Tell us what you are building and we will suggest a starting point.
                </p>
              </div>
              <Button href={bookCallHref} className="mt-6 self-start">
                Book a call
              </Button>
            </li>
          )}
        </ul>
      </div>

      <CtaBand />
    </>
  );
}
