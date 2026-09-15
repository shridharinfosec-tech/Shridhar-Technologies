import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, portfolio } from "@/data/portfolio";
import { techStack } from "@/data/techStack";
import Badge from "@/components/shared/Badge";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";

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
  };
}

const sections = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
] as const;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pt-12 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Portfolio", href: "/portfolio" },
            { name: study.title, href: `/portfolio/${study.slug}` },
          ]}
        />

        <div className="rounded-xl border border-line-bright bg-night px-5 py-3 text-sm text-mist">
          This case study is an illustrative placeholder pending publishable
          client details.
        </div>

        <Badge className="mt-8">{study.industry}</Badge>
        <h1 className="font-display mt-4 text-4xl font-bold text-snow sm:text-5xl">
          {study.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.stack.map((techId) => {
            const tech = techStack.find((item) => item.id === techId);
            if (!tech) return null;
            return (
              <span
                key={techId}
                className="rounded-md bg-night px-3 py-1 text-xs font-medium text-mist"
              >
                {tech.name}
              </span>
            );
          })}
        </div>

        <div className="mt-12 space-y-10 pb-16">
          {sections.map(({ key, label }) => (
            <div key={key}>
              <h2 className="font-display text-xl font-semibold text-snow">{label}</h2>
              <p className="mt-3 leading-relaxed text-fog">{study[key]}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
