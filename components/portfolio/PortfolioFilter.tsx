"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import { industries, portfolio } from "@/data/portfolio";
import { categories, getService } from "@/data/services";
import { cn } from "@/lib/cn";

function categoriesOf(serviceSlugs: string[]) {
  return new Set(serviceSlugs.flatMap((slug) => getService(slug)?.categories ?? []));
}

const serviceFilters = categories.filter((category) =>
  portfolio.some((study) => categoriesOf(study.services).has(category.slug)),
);

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber",
        active
          ? "border-cyber bg-cyber text-white"
          : "border-line-bright text-fog hover:border-cyber hover:text-cyber",
      )}
    >
      {children}
    </button>
  );
}

export function PortfolioGrid({ studies = portfolio }: { studies?: typeof portfolio }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {studies.map((study) => (
        <CaseStudyCard
          key={study.slug}
          study={study}
          headingLevel={2}
          imageClassName="aspect-[16/10]"
        />
      ))}
    </div>
  );
}

export default function PortfolioFilter() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("industry");
  const [industry, setIndustry] = useState<string | null>(
    requested && industries.includes(requested) ? requested : null,
  );
  const [service, setService] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      portfolio.filter(
        (study) =>
          (!industry || study.industry === industry) &&
          (!service || categoriesOf(study.services).has(service as never)),
      ),
    [industry, service],
  );

  const selectIndustry = (value: string | null) => {
    setIndustry(value);
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("industry", value);
    else url.searchParams.delete("industry");
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <div className="space-y-4">
        <div role="group" aria-label="Filter by industry" className="flex flex-wrap gap-2">
          <Chip active={!industry} onClick={() => selectIndustry(null)}>
            All industries
          </Chip>
          {industries.map((item) => (
            <Chip
              key={item}
              active={industry === item}
              onClick={() => selectIndustry(industry === item ? null : item)}
            >
              {item}
            </Chip>
          ))}
        </div>
        <div role="group" aria-label="Filter by service" className="flex flex-wrap gap-2">
          <Chip active={!service} onClick={() => setService(null)}>
            All services
          </Chip>
          {serviceFilters.map((item) => (
            <Chip
              key={item.slug}
              active={service === item.slug}
              onClick={() => setService(service === item.slug ? null : item.slug)}
            >
              {item.name}
            </Chip>
          ))}
        </div>
      </div>

      <p role="status" className="mt-8 text-sm text-mist">
        Showing {filtered.length} of {portfolio.length} case studies
      </p>

      <div className="mt-4">
        {filtered.length > 0 ? (
          <PortfolioGrid studies={filtered} />
        ) : (
          <p className="rounded-xl border border-line bg-night p-8 text-fog">
            No case studies match both filters yet. Try another combination.
          </p>
        )}
      </div>
    </>
  );
}
