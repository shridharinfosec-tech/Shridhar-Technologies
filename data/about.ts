export type Value = {
  title: string;
  description: string;
};

export const aboutIntro = {
  title: "A small senior team with an AI-first workflow",
  // [OWNER TO CONFIRM: year, headcount] Founding year and team size.
  paragraphs: [
    "Since 2020 we have helped founders and growing companies launch and run software. Our senior engineers work from Vadodara, Mumbai and Ahmedabad, and we pair senior judgement with AI tooling so you get to launch sooner without cutting corners.",
    "We work with founders shipping a first product and with established companies modernizing systems that outgrew their architecture. Our clients sit in four time zones, so our habits are built around written decisions, visible progress and handovers that do not depend on one person being awake.",
  ],
};

export const sisterBrandNote =
  "We are the software engineering half of the Shridhar group, and the sister brand of Shridhar InfoSec Solutions, a dedicated cybersecurity firm. We share the same leadership, offices and standards for client data handling, applied to a different discipline: building the software our clients run their business on.";

export const values: Value[] = [
  {
    title: "We tell you the hard news early",
    description:
      "We tell clients the truth about scope, timelines, and tradeoffs, even when it's not the answer they were hoping for.",
  },
  {
    title: "We adopt tools that save you time, not trends",
    description:
      "We stay current with the tools and approaches worth adopting, and skeptical of the ones that are just trend-chasing.",
  },
  {
    title: "We review our own work as strictly as yours",
    description:
      "We hold our own work to a standard that would pass our own code review, not just the client's acceptance test.",
  },
  {
    title: "Done means working for your business, not just shipped",
    description:
      "A project isn't done when it ships. It's done when it's actually working for the business that asked for it.",
  },
];

export type Leader = {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
};

// [OWNER TO CONFIRM] Add real names, photos and LinkedIn URLs. The leadership
// block on the About page stays hidden while this list is empty.
export const leadership: Leader[] = [];
