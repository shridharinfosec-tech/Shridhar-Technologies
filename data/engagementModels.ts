export type EngagementModel = {
  name: string;
  bestFor: string;
  pricing: string;
  timeline: string;
  // [OWNER TO CONFIRM] "From" price, for example "From $X". Hidden until set.
  fromPrice?: string;
  includes: string[];
};

// [OWNER TO CONFIRM] Timelines, notice period and "from" prices. The MVP
// timeline reuses the 6 to 10 week range already published in data/faqs.ts.
export const engagementModels: EngagementModel[] = [
  {
    name: "Launch sprint",
    bestFor: "A website or landing page",
    pricing: "Fixed price",
    timeline: "Live in days to a few weeks",
    includes: [
      "Design and build in Next.js",
      "SEO, analytics and performance set up",
      "Launch support and a handover walkthrough",
    ],
  },
  {
    name: "MVP build",
    bestFor: "A first product release",
    pricing: "Fixed price per milestone",
    timeline: "6 to 10 weeks to a usable release",
    includes: [
      "Scoping sprint with a written plan",
      "A working demo every two weeks",
      "Monitoring and a rollback plan at launch",
    ],
  },
  {
    name: "Dedicated team",
    bestFor: "Ongoing product development",
    pricing: "Monthly",
    timeline: "Rolling, with an agreed notice period",
    includes: [
      "Senior engineers embedded with your team",
      "A named lead who knows your codebase",
      "AI-assisted delivery in every sprint",
    ],
  },
];
