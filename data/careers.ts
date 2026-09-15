export type CareerPerk = { title: string; description: string };

export type OpenRole = {
  title: string;
  location: string;
  type: string;
  summary: string;
};

export const careerPerks: CareerPerk[] = [
  {
    title: "Work on real products",
    description:
      "You ship to production for founders and growing companies, and you see how your work is used after launch.",
  },
  {
    title: "AI tools on every project",
    description:
      "We use AI across scoping, building and testing, and we expect you to review its output as critically as a colleague's.",
  },
  {
    title: "Senior peers",
    description:
      "You work alongside experienced engineers who review each other's code and write down what they learn.",
  },
];

// [OWNER TO CONFIRM] Add open roles as they are approved. While this list is
// empty the page invites speculative applications by email.
export const openRoles: OpenRole[] = [];
