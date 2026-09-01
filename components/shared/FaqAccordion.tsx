import { faqs } from "@/data/faqs";
import { faqJsonLd } from "@/lib/jsonld";
import Accordion from "./Accordion";

export default function FaqAccordion() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <Accordion
        items={faqs.map((faq, index) => ({
          id: `faq-${index}`,
          trigger: faq.question,
          content: faq.answer,
        }))}
      />
    </>
  );
}
