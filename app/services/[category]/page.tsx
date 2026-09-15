import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory, getServicesByCategory } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";

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
    title: category.name,
    description: category.description,
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

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: category.name, href: `/services/${category.slug}` },
          ]}
        />
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-snow sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 text-lg text-fog">{category.description}</p>
        </div>

        <div className="mt-12 grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
          {categoryServices.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              categorySlug={category.slug}
              index={index}
            />
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
