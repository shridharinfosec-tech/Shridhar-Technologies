import Link from "@/components/shared/Link";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { ArrowRightIcon } from "@/components/shared/Icons";
import type { CaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export default function CaseStudyCard({
  study,
  headingLevel = 3,
  className,
  imageClassName = "aspect-[4/3]",
}: {
  study: CaseStudy;
  headingLevel?: 2 | 3;
  className?: string;
  imageClassName?: string;
}) {
  const Heading = `h${headingLevel}` as const;
  const metric = study.metrics[0];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel transition-colors duration-200 ease-out hover:border-cyber",
        className,
      )}
    >
      <div className="overflow-hidden bg-deep">
        <ResponsiveImage
          src={study.image.src}
          alt=""
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",
            imageClassName,
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow self-start">{study.industry}</p>
        <Heading className="font-display mt-3 text-lg leading-snug font-bold text-snow">
          <Link
            href={`/portfolio/${study.slug}`}
            className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-cyber"
          >
            {study.title}
          </Link>
        </Heading>
        {metric && (
          <p className="mt-4">
            <span className="font-display block text-3xl font-extrabold text-cyber">
              {metric.value}
            </span>
            <span className="text-sm text-fog">{metric.label}</span>
          </p>
        )}
        <span
          aria-hidden
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-cyber"
        >
          Read case study
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
