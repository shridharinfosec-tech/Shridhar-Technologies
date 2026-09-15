export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "Two weeks to find what is actually risky. We read your existing schema, map every integration, and give you a scoping document with approach, milestones and cost before anyone writes code.",
  },
  {
    title: "Design",
    description:
      "The build agreed on paper while change is still cheap: architecture, data model and the decisions that get expensive if you discover them in month four.",
  },
  {
    title: "Build",
    description:
      "Fortnightly demos of software you can actually click, not a status report about working software. If a fortnight passes with nothing to show, we raise it.",
  },
  {
    title: "Ship",
    description:
      "Monitoring, alerts and a rollback path from day one, not bolted on after something breaks. Traffic moves over behind a canary, one step at a time.",
  },
  {
    title: "Support",
    description:
      "A named engineer who knows your codebase, on a support plan agreed before launch rather than negotiated during an outage.",
  },
];
