"use client";

import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div className="text-center">
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="font-display text-5xl font-extrabold text-electric sm:text-6xl"
      >
        {current}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em] text-on-deep">
        {label}
      </p>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-deep">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-20 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
