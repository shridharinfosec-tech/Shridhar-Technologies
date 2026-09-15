import { processSteps } from "@/data/process";
import Eyebrow from "@/components/shared/Eyebrow";

export default function ProcessSteps() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-extrabold text-snow sm:text-4xl">
            From discovery to long-term support
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-sm border border-line bg-panel p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyber"
            >
              <span className="ghost-number text-5xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-lg font-extrabold text-snow">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
