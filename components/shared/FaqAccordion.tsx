import { faqs } from "@/data/faqs";
import { faqJsonLd } from "@/lib/jsonld";
import Accordion from "./Accordion";

export default function FaqAccordion() {
  const mid = Math.ceil(faqs.length / 2);
  const columns = [
    { prefix: "faq-l", items: faqs.slice(0, mid) },
    { prefix: "faq-r", items: faqs.slice(mid) },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <div className="grid gap-x-12 md:grid-cols-2">
        {columns.map((column) => (
          <Accordion
            key={column.prefix}
            defaultOpenId={`${column.prefix}-0`}
            items={column.items.map((faq, index) => ({
              id: `${column.prefix}-${index}`,
              trigger: faq.question,
              content: faq.answer,
            }))}
          />
        ))}
      </div>
    </>
  );
}
