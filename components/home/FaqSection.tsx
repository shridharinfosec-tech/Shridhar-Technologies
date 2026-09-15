import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { bookCallHref } from "@/data/siteConfig";

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-night">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions we get asked"
              intro="Straight answers on how we work, what it costs and how we use AI."
            />
            <Button href={bookCallHref} className="mt-8">
              Still have questions? Book a call
            </Button>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
