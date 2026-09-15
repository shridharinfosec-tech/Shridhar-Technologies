export type Differentiator = {
  title: string;
  description: string;
  icon: "senior" | "build" | "pricing" | "support";
};

export const differentiators: Differentiator[] = [
  {
    title: "Senior engineers only",
    description: "The people who scope your project are the people who build it.",
    icon: "senior",
  },
  {
    title: "A working build every two weeks",
    description: "You see and click real progress in staging, not status reports.",
    icon: "build",
  },
  {
    title: "Fixed milestones, clear pricing",
    description:
      "Costs are agreed up front. Scope changes are written down before they are billed.",
    icon: "pricing",
  },
  {
    title: "Support after launch",
    description: "Support terms are agreed before go-live, not during an outage.",
    icon: "support",
  },
];
