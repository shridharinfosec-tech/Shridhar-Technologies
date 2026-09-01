import Hero from "@/components/home/Hero";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import AboutSection from "@/components/home/AboutSection";
import StatsStrip from "@/components/home/StatsStrip";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyUs from "@/components/home/WhyUs";
import TechPlatformsGrid from "@/components/home/TechPlatformsGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import PortfolioHighlights from "@/components/home/PortfolioHighlights";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CtaBand from "@/components/layout/CtaBand";
import SectionReveal from "@/components/shared/SectionReveal";
import Eyebrow from "@/components/shared/Eyebrow";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <SectionReveal as="section">
        <StatsStrip />
      </SectionReveal>
      <SectionReveal as="section">
        <AboutSection />
      </SectionReveal>
      <SectionReveal as="section">
        <ServicesOverview />
      </SectionReveal>
      <SectionReveal as="section">
        <WhyUs />
      </SectionReveal>
      <SectionReveal as="section">
        <TechPlatformsGrid compact />
      </SectionReveal>
      <SectionReveal as="section">
        <ProcessSteps />
      </SectionReveal>
      <SectionReveal as="section">
        <PortfolioHighlights />
      </SectionReveal>
      <SectionReveal as="section">
        <section id="faq" className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-extrabold text-snow sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </section>
      </SectionReveal>
      <CtaBand />
    </>
  );
}
