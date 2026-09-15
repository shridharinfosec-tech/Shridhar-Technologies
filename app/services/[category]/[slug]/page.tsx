import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCategory,
  getRelatedServices,
  getService,
  serviceHref,
  services,
  type Service,
} from "@/data/services";
import { portfolio } from "@/data/portfolio";
import { techStack } from "@/data/techStack";
import { bookCallHref, siteConfig } from "@/data/siteConfig";
import { serviceJsonLd } from "@/lib/jsonld";
import RelatedServices from "@/components/services/RelatedServices";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import CtaBand from "@/components/layout/CtaBand";
import PageHero from "@/components/shared/PageHero";
import Button from "@/components/shared/Button";
import { CheckIcon, PhoneIcon, SparkIcon } from "@/components/shared/Icons";

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
    description: service.seoDescription,
    // Services listed under two categories share one canonical URL.
    alternates: { canonical: serviceHref(service) },
  };
}

function relatedCaseStudies(service: Service) {
  const direct = portfolio.filter((study) => study.services.includes(service.slug));
  const sameCategory = portfolio.filter(
    (study) =>
      !direct.includes(study) &&
      study.services.some((slug) =>
        getService(slug)?.categories.some((category) => service.categories.includes(category)),
      ),
  );
  return [...direct, ...sameCategory].slice(0, 2);
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
  const studies = relatedCaseStudies(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(service, serviceHref(service))),
        }}
      />

      <PageHero
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: category.name, href: `/services/${category.slug}` },
          { name: service.name, href: `/services/${category.slug}/${service.slug}` },
        ]}
        eyebrow={category.name}
        title={service.name}
        intro={service.summary}
      >
        <Button href={bookCallHref} className="mt-8 text-center">
          Get an estimate for {service.name}
        </Button>
      </PageHero>

      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="min-w-0">
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-fog">
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <h2 className="font-display mt-12 text-2xl font-bold text-snow">What you get</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.keyPoints.map((point) => (
                <li key={point} className="flex gap-3 rounded-xl border border-line p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyber" />
                  <span className="text-fog">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-xl border border-cyber/20 bg-cyber/5 p-6 sm:p-8">
              <h2 className="font-display flex items-center gap-2 text-xl font-bold text-snow">
                <SparkIcon className="h-5 w-5 text-cyber" />
                How AI speeds this up
              </h2>
              <ul className="mt-4 space-y-3">
                {service.aiSpeedups.map((item) => (
                  <li key={item} className="flex gap-3 text-fog">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-cyber" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {relatedTech.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold text-snow">
                  Related technologies
                </h2>
                <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {relatedTech.map((tech) => (
                    <li
                      key={tech.id}
                      className="flex items-center gap-3 rounded-xl border border-line p-4"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.logo}
                        alt=""
                        width={32}
                        height={32}
                        loading="lazy"
                        className="h-8 w-8 object-contain"
                      />
                      <span className="text-sm font-semibold text-snow">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {studies.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold text-snow">
                  Related case studies
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {studies.map((study) => (
                    <CaseStudyCard key={study.slug} study={study} imageClassName="aspect-[16/10]" />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 border-t border-line pt-12">
              <RelatedServices services={getRelatedServices(service)} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-night p-6">
              <h2 className="font-display text-lg font-bold text-snow">Plan your project</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-snow">Typical timeline</dt>
                  <dd className="mt-1 text-fog">
                    {service.timeline ?? "Agreed in a short scoping call"}
                  </dd>
                </div>
                <div>
                  {/* [OWNER TO CONFIRM] Add a "from" price per service. */}
                  <dt className="font-semibold text-snow">Pricing</dt>
                  <dd className="mt-1 text-fog">
                    Fixed-price milestones, quoted before any build work starts
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-snow">Ownership</dt>
                  <dd className="mt-1 text-fog">You own 100% of the code and IP</dd>
                </div>
              </dl>
              <Button href={bookCallHref} className="mt-6 w-full">
                Get an estimate
              </Button>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-cyber hover:text-cyber-dark"
              >
                <PhoneIcon className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </aside>
        </div>
      </div>

      <CtaBand
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        description="Tell us about your project and we will reply within one business day with questions, a rough timeline and next steps."
      />
    </>
  );
}
