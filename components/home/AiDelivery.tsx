import { aiDelivery } from "@/data/aiDelivery";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckIcon, SparkIcon } from "@/components/shared/Icons";

export default function AiDelivery() {
  return (
    <section id="ai-delivery" className="scroll-mt-24 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeader
          eyebrow={aiDelivery.eyebrow}
          title={aiDelivery.title}
          intro={aiDelivery.intro}
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiDelivery.stages.map((stage, index) => (
            <li
              key={stage.name}
              className="flex flex-col rounded-xl border border-line bg-panel p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-mist">Stage {index + 1}</p>
                {stage.timeSaved && (
                  <span className="rounded-full bg-cyber/10 px-2.5 py-0.5 text-xs font-semibold text-cyber">
                    {stage.timeSaved}
                  </span>
                )}
              </div>
              <h3 className="font-display mt-2 text-xl font-extrabold text-snow">
                {stage.name}
              </h3>

              <div className="mt-5 flex-1 space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="flex items-center gap-1.5 font-bold text-cyber">
                    <SparkIcon className="h-4 w-4" />
                    AI
                  </p>
                  <p className="mt-1 text-fog">{stage.ai}</p>
                </div>
                <div className="border-t border-line pt-4">
                  <p className="flex items-center gap-1.5 font-bold text-snow">
                    <CheckIcon className="h-4 w-4 text-cyber" />
                    {stage.owner}
                  </p>
                  <p className="mt-1 text-fog">{stage.ownerAction}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-3xl border-l-2 border-cyber pl-4 text-base leading-relaxed text-snow">
          {aiDelivery.footer}
        </p>
      </div>
    </section>
  );
}
