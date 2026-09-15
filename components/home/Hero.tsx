import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import { CheckIcon, SparkIcon } from "@/components/shared/Icons";
import { deliveryTimeline, hero, proofPoints } from "@/data/hero";
import { bookCallHref } from "@/data/siteConfig";

function DeliveryTimelineCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-deep-2/80 p-6 shadow-2xl lg:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-display text-sm font-bold text-white">
          Example MVP timeline
        </p>
        <span className="rounded-full bg-electric/15 px-3 py-1 text-xs font-semibold text-electric">
          7 weeks
        </span>
      </div>

      <ol className="mt-6 space-y-5">
        {deliveryTimeline.map((step, index) => (
          <li key={step.stage} className="relative flex gap-4">
            {index < deliveryTimeline.length - 1 && (
              <span
                aria-hidden
                className="absolute top-8 bottom-[-1.25rem] left-[15px] w-px bg-white/15"
              />
            )}
            <span className="font-display relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-electric/50 bg-deep text-xs font-bold text-electric">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-display text-base font-bold text-white">
                  {step.stage}
                </p>
                <p className="text-xs text-on-deep">{step.when}</p>
                {step.aiAssisted ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-electric/10 px-2 py-0.5 text-xs font-semibold text-electric">
                    <SparkIcon className="h-3 w-3" />
                    AI-assisted
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs font-semibold text-white">
                    Engineer-led
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-on-deep">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_30%,rgba(67,186,255,0.18),transparent_55%)]"
      />

      <div className="hero-fade mx-auto grid max-w-7xl gap-12 px-6 pt-10 pb-14 sm:pt-16 sm:pb-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <Eyebrow onDeep>{hero.eyebrow}</Eyebrow>
          <h1 className="font-display mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">{hero.titleLines[0]}</span>
            <span className="block text-electric">{hero.titleLines[1]}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-on-deep sm:mt-6 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Button href={bookCallHref}>{hero.primaryCta}</Button>
            <Button href={hero.secondaryCta.href} variant="onDeep">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <ul className="mt-7 grid gap-2 text-sm text-on-deep sm:flex sm:flex-wrap sm:gap-x-6">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 shrink-0 text-electric" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block lg:col-span-5">
          <DeliveryTimelineCard />
        </div>
      </div>
    </section>
  );
}
