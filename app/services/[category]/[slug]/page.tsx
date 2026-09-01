import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCategory,
  getRelatedServices,
  getService,
  services,
} from "@/data/services";
import { techStack } from "@/data/techStack";
import TechLogo from "@/components/shared/TechLogo";
import RelatedServices from "@/components/services/RelatedServices";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";

export function generateStaticParams() {
  return services.flatMap((service) =>
    service.categories.map((category) => ({ category, slug: service.slug })),
  );
}

type RouteParams = { category: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { category: categorySlug, slug } = await params;
  const service = getService(slug);
  const category = getCategory(categorySlug);

  if (!service || !category || !service.categories.includes(category.slug)) {
    notFound();
  }

  const relatedTech = service.relatedTech
    .map((id) => techStack.find((tech) => tech.id === id))
    .filter((tech): tech is (typeof techStack)[number] => Boolean(tech));

  return (
    <>
      <div className="mx-auto max-w-4xl px-6 pt-12 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: category.name, href: `/services/${category.slug}` },
            { name: service.name, href: `/services/${category.slug}/${service.slug}` },
          ]}
        />

        <h1 className="font-display text-4xl font-bold text-snow sm:text-5xl">
          {service.name}
        </h1>
        <p className="mt-4 text-xl text-fog">{service.summary}</p>

        <div className="mt-10 leading-relaxed text-fog">
          <p>{service.longDescription}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {service.keyPoints.map((point) => (
            <li key={point} className="flex gap-3 rounded-xl border border-line p-4">
              <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber" />
              <span className="text-sm text-fog">{point}</span>
            </li>
          ))}
        </ul>

        {relatedTech.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl font-semibold text-snow">
              Related technologies
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {relatedTech.map((tech) => (
                <TechLogo key={tech.id} name={tech.name} logo={tech.logo} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 border-t border-line pt-12 pb-16">
          <RelatedServices services={getRelatedServices(service)} />
        </div>
      </div>

      <CtaBand
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        description="Tell us about your project and we'll get back to you with next steps within one business day."
      />
    </>
  );
}
