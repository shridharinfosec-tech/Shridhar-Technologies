// Illustrative placeholder testimonials - anonymized by role rather than
// naming specific clients, until real, approved quotes are available.
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Product Founder",
    role: "Seed-stage SaaS startup",
    quote:
      "They scoped our MVP around the one risk that actually mattered and shipped it fast. Clear milestones, honest tradeoffs, and senior engineers who owned the outcome start to finish.",
  },
  {
    name: "Head of Engineering",
    role: "Regional logistics platform",
    quote:
      "We handed over a decade of legacy code and got back a system our own team could maintain. The migration happened one depot at a time, without a single day of downtime.",
  },
  {
    name: "Operations Director",
    role: "Multi-clinic healthcare group",
    quote:
      "What stood out was the communication - visible progress every week and no surprises at invoice time. It felt like working with an in-house team, not an outside vendor.",
  },
  {
    name: "CTO",
    role: "Fintech scale-up",
    quote:
      "Their cloud migration cut our infrastructure bill meaningfully and made deploys boring in the best possible way. Exactly the kind of engineering partner we needed.",
  },
];
