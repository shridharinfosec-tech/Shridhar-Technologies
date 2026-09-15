import Link from "@/components/shared/Link";
import type { CaseStudy } from "@/data/portfolio";
import { techStack } from "@/data/techStack";
import Badge from "@/components/shared/Badge";

const covers = [
  "/images/laptop.jpg",
  "/images/devices.jpg",
  "/images/office.jpg",
  "/images/servers.jpg",
  "/images/meeting.jpg",
  "/images/code.jpg",
];

function coverFor(slug: string) {
  const hash = Array.from(slug).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return covers[hash % covers.length];
}

export default function PortfolioCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line transition-colors duration-200 ease-out hover:border-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
    >
      <div aria-hidden className="relative h-40 overflow-hidden bg-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverFor(study.slug)}
          alt=""
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/30 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge>{study.industry}</Badge>
        <h3 className="font-display mt-4 text-lg font-semibold text-snow">
          {study.title}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.stack.slice(0, 4).map((techId) => {
            const tech = techStack.find((item) => item.id === techId);
            if (!tech) return null;
            return (
              <span
                key={techId}
                className="rounded-md bg-night px-2 py-1 text-xs font-medium text-mist"
              >
                {tech.name}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
