import { processSteps } from "@/data/process";
import SectionHeader from "@/components/shared/SectionHeader";
import { cn } from "@/lib/cn";

// Horizontal timeline on desktop, vertical timeline on tablet and phone.
export default function ProcessSteps({
  id = "process",
  className = "bg-night",
  headingLevel = 2,
}: {
  id?: string;
  className?: string;
  headingLevel?: 2 | 3;
}) {
  const StepHeading = headingLevel === 2 ? "h3" : "h4";

  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeader eyebrow="How we work" title="From first call to launch, and after" />

        <ol className="relative mt-12 lg:grid lg:grid-cols-5 lg:gap-6">
          <span
            aria-hidden
            className="absolute top-5 right-[10%] left-[10%] hidden h-px bg-line-bright lg:block"
          />
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex gap-5 pb-8 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center"
            >
              {index < processSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-10 bottom-0 left-5 w-px bg-line-bright lg:hidden"
                />
              )}
              <span className="font-display relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cyber bg-ink text-sm font-extrabold text-cyber">
                {index + 1}
              </span>
              <div className="pt-1.5 lg:mt-5 lg:pt-0">
                <StepHeading className="font-display text-lg font-extrabold text-snow">
                  {step.title}
                </StepHeading>
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-fog lg:mt-2">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
