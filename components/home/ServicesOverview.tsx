import type { ReactNode } from "react";
import Link from "@/components/shared/Link";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRightIcon } from "@/components/shared/Icons";
import { outcomes, type Outcome } from "@/data/outcomes";

const icons: Record<Outcome["icon"], ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  saas: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  ai: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />,
  cloud: <path d="M7 18a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.5 1.6A3.8 3.8 0 0 1 17.5 18z" />,
  modernize: (
    <>
      <path d="M20 12a8 8 0 0 1-14.2 5M4 12a8 8 0 0 1 14.2-5" />
      <path d="M18.5 3v4h-4M5.5 21v-4h4" />
    </>
  ),
};

export default function ServicesOverview() {
  return (
    <section className="bg-night">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Services"
          title="What we build"
          intro="Pick a starting point. Most projects mix two or three."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <li key={outcome.title}>
              <Link
                href={outcome.href}
                className="group flex h-full flex-col rounded-xl border border-line bg-panel p-6 transition-colors duration-200 ease-out hover:border-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber sm:p-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="h-8 w-8 text-cyber"
                >
                  {icons[outcome.icon]}
                </svg>
                <h3 className="font-display mt-5 text-xl font-extrabold text-snow">
                  {outcome.title}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-fog">{outcome.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyber">
                  Explore
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
