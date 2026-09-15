import { stats } from "@/data/stats";
import StatValue from "@/components/shared/StatValue";

export default function StatsStrip() {
  return (
    <section className="bg-deep">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-extrabold text-electric sm:text-6xl">
              <StatValue stat={stat} />
            </p>
            <p
              aria-hidden
              className="mt-3 text-sm font-semibold tracking-[0.06em] text-on-deep uppercase"
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
