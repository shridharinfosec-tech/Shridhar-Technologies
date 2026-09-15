import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import AiDelivery from "@/components/home/AiDelivery";
import ServicesOverview from "@/components/home/ServicesOverview";
import PortfolioHighlights from "@/components/home/PortfolioHighlights";
import ProcessSteps from "@/components/home/ProcessSteps";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import TechPlatformsGrid from "@/components/home/TechPlatformsGrid";
import FaqSection from "@/components/home/FaqSection";
import CtaBand from "@/components/layout/CtaBand";
import SectionReveal from "@/components/shared/SectionReveal";
import { showTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <SectionReveal>
        <AiDelivery />
      </SectionReveal>
      <SectionReveal>
        <ServicesOverview />
      </SectionReveal>
      <SectionReveal>
        <PortfolioHighlights />
      </SectionReveal>
      <SectionReveal>
        <ProcessSteps />
      </SectionReveal>
      <SectionReveal>
        <WhyUs />
      </SectionReveal>
      {showTestimonials && (
        <SectionReveal>
          <Testimonials />
        </SectionReveal>
      )}
      <SectionReveal>
        <TechPlatformsGrid variant="wall" />
      </SectionReveal>
      <FaqSection />
      <CtaBand />
    </>
  );
}
