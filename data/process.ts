export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description: "A short scoping sprint. You get a plan, milestones and a fixed price.",
  },
  {
    title: "Design",
    description: "Architecture, data model and clickable screens agreed before build.",
  },
  {
    title: "Build",
    description: "AI-assisted sprints with a demo you can click every two weeks.",
  },
  {
    title: "Launch",
    description: "Monitoring, alerts and a rollback plan from day one.",
  },
  {
    title: "Support",
    description: "A named engineer who knows your code, on an agreed support plan.",
  },
];
