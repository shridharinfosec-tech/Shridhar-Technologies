export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: "Integrity",
    description:
      "We tell clients the truth about scope, timelines, and tradeoffs, even when it's not the answer they were hoping for.",
  },
  {
    title: "Innovation",
    description:
      "We stay current with the tools and approaches worth adopting, and skeptical of the ones that are just trend-chasing.",
  },
  {
    title: "Excellence",
    description:
      "We hold our own work to a standard that would pass our own code review, not just the client's acceptance test.",
  },
  {
    title: "Commitment to Client Success",
    description:
      "A project isn't done when it ships - it's done when it's actually working for the business that asked for it.",
  },
];

export type LeadershipPlaceholder = {
  role: string;
};

// Leadership bios are intentionally left as role placeholders until named,
// publishable profiles are available.
export const leadershipPlaceholders: LeadershipPlaceholder[] = [
  { role: "Founder & CEO" },
  { role: "Head of Engineering" },
  { role: "Head of Delivery" },
];
