import type { Metadata } from "next";
import { engagementModels } from "@/data/engagementModels";
import { bookCallHref } from "@/data/siteConfig";
import AiDelivery from "@/components/home/AiDelivery";
import ProcessSteps from "@/components/home/ProcessSteps";
import CtaBand from "@/components/layout/CtaBand";
import Button from "@/components/shared/Button";
import PageHero from "@/components/shared/PageHero";
import ProofPoints from "@/components/shared/ProofPoints";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "How Shridhar Technologies ships software faster: AI-assisted delivery reviewed by senior engineers, a five-step process and three engagement models to choose from.",
  alternates: { canonical: "/how-we-work" },
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        tone="deep"
        breadcrumb={[{ name: "How we work", href: "/how-we-work" }]}
        eyebrow="How we work"
        title="How we ship software in weeks, not quarters"
        intro="AI-assisted delivery, senior engineers who own every decision, and an engagement model that fits your project."
      >
        <Button href={bookCallHref} className="mt-8">
          Book a free scoping call
        </Button>
        <ProofPoints onDeep className="mt-6" />
      </PageHero>

      <AiDelivery />

      <ProcessSteps className="bg-night" />

      <section id="engagement-models" className="scroll-mt-24 bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Engagement models"
            title="Three ways to work with us"
            intro="Every engagement starts with a short scoping call and a written, fixed quote before any build work starts."
          />

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <li
                key={model.name}
                className="flex flex-col rounded-xl border border-line bg-panel p-6 sm:p-8"
              >
                <p className="text-sm font-semibold text-mist">{model.bestFor}</p>
                <h3 className="font-display mt-2 text-2xl font-extrabold text-snow">
                  {model.name}
                </h3>
                {model.fromPrice && (
                  <p className="font-display mt-3 text-xl font-bold text-cyber">{model.fromPrice}</p>
                )}
                <dl className="mt-5 space-y-3 border-y border-line py-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-fog">Pricing</dt>
                    <dd className="text-right font-semibold text-snow">{model.pricing}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-fog">Timeline</dt>
                    <dd className="text-right font-semibold text-snow">{model.timeline}</dd>
                  </div>
                </dl>
                <ul className="mt-5 flex-1 space-y-3">
                  {model.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-fog">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-cyber" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href={bookCallHref} variant="ghost" className="mt-8">
                  Talk about a {model.name.toLowerCase()}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
