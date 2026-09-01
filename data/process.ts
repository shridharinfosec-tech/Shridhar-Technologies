export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "A short discovery phase to understand your goals, constraints, and what's actually risky about the project.",
  },
  {
    title: "Design",
    description:
      "Technical design and, where needed, UI/UX design — reviewed with you before a line of production code is written.",
  },
  {
    title: "Build",
    description:
      "Sprint-based delivery with regular, demoable milestones so you see real progress, not status reports.",
  },
  {
    title: "Ship",
    description:
      "A supported launch with monitoring in place from day one, not bolted on after something breaks.",
  },
  {
    title: "Support",
    description:
      "Post-launch support and maintenance plans agreed upfront, so the relationship doesn't end at go-live.",
  },
];
