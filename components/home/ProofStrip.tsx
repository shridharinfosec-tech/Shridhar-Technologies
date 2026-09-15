import { proofStrip } from "@/data/stats";
import StatValue from "@/components/shared/StatValue";

// Static proof strip under the hero. Replace with a grayscale client logo
// row once logo permissions exist.
export default function ProofStrip() {
  return (
    <section aria-label="Track record" className="border-b border-line bg-night">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-6 py-8 sm:py-10 lg:grid-cols-4 lg:px-8">
        {proofStrip.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-extrabold text-snow sm:text-4xl">
              <StatValue stat={stat} />
            </p>
            <p aria-hidden className="mt-1 text-sm text-fog">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
