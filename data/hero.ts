export const hero = {
  eyebrow: "AI-accelerated software studio",
  titleLines: ["Ship your product in weeks,", "not quarters."],
  subtitle:
    "Senior engineers who use AI across the whole build, from scoping to testing. You get production-ready websites, SaaS platforms and AI features faster, and every line is still reviewed by a person.",
  primaryCta: "Book a free scoping call",
  secondaryCta: { label: "See recent work", href: "/portfolio" },
};

// Short proof points shown under the hero CTAs and in inner page heroes.
// [OWNER TO CONFIRM] The audit suggested "MVPs live in 4 to 8 weeks". This uses
// the 6 to 10 week MVP range already published in data/faqs.ts until the
// owner confirms a number.
export const proofPoints = [
  "MVPs live in 6 to 10 weeks",
  "Fixed-price milestones",
  "You own 100% of the code",
];

export type TimelineStep = {
  when: string;
  stage: string;
  detail: string;
  aiAssisted: boolean;
};

// Illustrative MVP delivery timeline for the hero visual.
export const deliveryTimeline: TimelineStep[] = [
  { when: "Week 1", stage: "Scope", detail: "Plan, milestones and fixed price", aiAssisted: true },
  { when: "Week 2", stage: "Design", detail: "Clickable screens and data model", aiAssisted: true },
  { when: "Weeks 3 to 6", stage: "Build", detail: "A working demo every two weeks", aiAssisted: true },
  { when: "Week 7", stage: "Launch", detail: "Monitoring and rollback plan live", aiAssisted: false },
];
