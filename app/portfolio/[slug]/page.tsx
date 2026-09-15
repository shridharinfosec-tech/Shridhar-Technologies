import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, portfolio } from "@/data/portfolio";
import { getService, serviceHref } from "@/data/services";
import { techStack } from "@/data/techStack";
import Link from "@/components/shared/Link";
import CtaBand from "@/components/layout/CtaBand";
import PageHero from "@/components/shared/PageHero";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/shared/Icons";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return portfolio.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.problem,
    alternates: { canonical: `/portfolio/${study.slug}` },
  };
}

const sections = [
  { key: "problem", label: "The problem" },
  { key: "solution", label: "What we built" },
  { key: "outcome", label: "The outcome" },
] as const;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = portfolio.findIndex((item) => item.slug === study.slug);
  const previous = portfolio[(index - 1 + portfolio.length) % portfolio.length];
  const next = portfolio[(index + 1) % portfolio.length];
  const studyServices = study.services
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined);
  const stack = study.stack
    .map((techId) => techStack.find((item) => item.id === techId))
    .filter((tech) => tech !== undefined);

  return (
    <>
      <PageHero
        breadcrumb={[
          { name: "Work", href: "/portfolio" },
          { name: study.title, href: `/portfolio/${study.slug}` },
        ]}
        eyebrow={study.industry}
        title={study.title}
      >
        <p className="mt-3 text-sm text-mist">Client name withheld under NDA.</p>
      </PageHero>

      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <ResponsiveImage
          src={study.image.src}
          alt={study.image.alt}
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="aspect-[16/9] w-full rounded-xl object-cover sm:aspect-[21/9]"
        />

        {study.metrics.length > 0 && (
          <dl
            className={cn(
              "mt-8 grid gap-4",
              study.metrics.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2",
            )}
          >
            {study.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-line bg-night p-6">
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="font-display block text-4xl font-extrabold text-cyber">
                    {metric.value}
                  </span>
                  <span className="mt-1 block text-fog">{metric.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="max-w-3xl space-y-10">
            {sections.map(({ key, label }) => (
              <div key={key}>
                <h2 className="font-display text-2xl font-bold text-snow">{label}</h2>
                <p className="mt-3 text-lg leading-relaxed text-fog">{study[key]}</p>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-night p-6">
              <h2 className="font-display text-lg font-bold text-snow">At a glance</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-snow">Industry</dt>
                  <dd className="mt-1 text-fog">{study.industry}</dd>
                </div>
                {study.durationWeeks && (
                  <div>
                    <dt className="font-semibold text-snow">Timeline</dt>
                    <dd className="mt-1 text-fog">{study.durationWeeks} weeks</dd>
                  </div>
                )}
                {study.teamSize && (
                  <div>
                    <dt className="font-semibold text-snow">Team</dt>
                    <dd className="mt-1 text-fog">{study.teamSize} engineers</dd>
                  </div>
                )}
                {studyServices.length > 0 && (
                  <div>
                    <dt className="font-semibold text-snow">Services</dt>
                    <dd className="mt-1">
                      <ul className="space-y-1">
                        {studyServices.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={serviceHref(service)}
                              className="font-semibold text-cyber hover:text-cyber-dark"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="font-semibold text-snow">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <span
                        key={tech.id}
                        className="rounded-md bg-ink px-2.5 py-1 text-sm font-medium text-fog"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        <nav
          aria-label="More case studies"
          className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
        >
          <Link
            href={`/portfolio/${previous.slug}`}
            className="group flex flex-col rounded-xl border border-line p-5 transition-colors hover:border-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-mist">
              <ArrowLeftIcon className="h-4 w-4" />
              Previous case study
            </span>
            <span className="font-display mt-2 font-bold text-snow group-hover:text-cyber">
              {previous.title}
            </span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col rounded-xl border border-line p-5 text-right transition-colors hover:border-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
          >
            <span className="flex items-center justify-end gap-2 text-sm font-semibold text-mist">
              Next case study
              <ArrowRightIcon className="h-4 w-4" />
            </span>
            <span className="font-display mt-2 font-bold text-snow group-hover:text-cyber">
              {next.title}
            </span>
          </Link>
        </nav>
      </div>

      <CtaBand secondaryLabel="Explore services" secondaryHref="/services" />
    </>
  );
}
