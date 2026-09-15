import type { ReactNode } from "react";
import { differentiators, type Differentiator } from "@/data/differentiators";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";

const icons: Record<Differentiator["icon"], ReactNode> = {
  senior: <path d="M4 20v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />,
  build: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m9 10-2 2 2 2M15 10l2 2-2 2" />
    </>
  ),
  pricing: <path d="M4 6h16M4 12h10M4 18h7M20 15l-4 6 6-3-6-3z" />,
  support: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />,
};

export default function WhyUs() {
  return (
    <section className="bg-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeader onDeep eyebrow="Why us" title="Why teams choose us" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-electric"
              >
                {icons[item.icon]}
              </svg>
              <h3 className="font-display mt-5 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-deep">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/how-we-work" variant="onDeep">
            See how we work
          </Button>
        </div>
      </div>
    </section>
  );
}
