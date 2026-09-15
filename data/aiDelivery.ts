export type AiDeliveryStage = {
  name: string;
  ai: string;
  owner: string;
  ownerAction: string;
  // [OWNER TO CONFIRM] Measured time saved at this stage (for example
  // "about 40% faster"). The chip is hidden until a real figure is added.
  timeSaved?: string;
};

export const aiDelivery = {
  eyebrow: "How we ship faster",
  title: "AI does the groundwork. Engineers make the calls.",
  intro:
    "We build AI into every stage of delivery, so routine work takes hours instead of days. People still decide the architecture, security and product, so speed never costs quality.",
  footer:
    "Every line that reaches your repository is read and owned by a named engineer. Ask us where AI was used on your project and we will show you.",
  stages: [
    {
      name: "Scope",
      ai: "Turns call notes and existing docs into a first draft of user stories and estimates.",
      owner: "Engineers",
      ownerAction: "Challenge the risky assumptions and sign off the plan.",
    },
    {
      name: "Design",
      ai: "Generates layout options and UI copy drafts to react to.",
      owner: "Designers",
      ownerAction: "Pick a direction and hold it to your brand.",
    },
    {
      name: "Build",
      ai: "Scaffolds components, API clients, migrations and tests.",
      owner: "Engineers",
      ownerAction: "Write the core logic and review every pull request.",
    },
    {
      name: "Test and launch",
      ai: "Writes test cases and flags regressions in review.",
      owner: "Engineers",
      ownerAction: "Run the release, monitoring and rollback plan.",
    },
  ] satisfies AiDeliveryStage[] as AiDeliveryStage[],
};
