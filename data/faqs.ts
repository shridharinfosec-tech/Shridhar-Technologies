export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What services does Shridhar Technologies provide?",
    answer:
      "We build custom software across five areas: digital engineering (SaaS, app modernization, IoT), cloud (migration, DevOps, SRE), AI (ML engineering, GenAI, AI agents), application engineering (mobile, QA, integrations), and product engineering (MVPs, web and mobile apps, UI/UX). Most engagements combine two or three of these rather than a single service in isolation.",
  },
  {
    question: "How does a typical engagement start?",
    answer:
      "We start with a short discovery call to understand your goals, constraints, and timeline, then follow up with a scoping document that lays out approach, milestones, and cost before any code is written. Most clients move from first call to a signed scope within one to two weeks.",
  },
  {
    question:
      "What engagement models do you offer (fixed scope, time and materials, dedicated team)?",
    answer:
      "We offer fixed-scope engagements for well-defined projects with a clear spec, time-and-materials for work that will evolve as you learn, and dedicated teams for clients who need ongoing capacity embedded with their own product team. We'll recommend the model that fits your project during scoping, not before.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "Our core stack spans PHP, Python, JavaScript, and TypeScript on the backend; React, Next.js, Angular, and React Native on the frontend; Node.js, Express, and Flask for services; and MySQL, PostgreSQL, MSSQL, and MongoDB for data. On infrastructure, we work primarily in AWS with Docker and GitHub Actions for CI/CD.",
  },
  {
    question: "How long does it take to build an MVP or a full web app?",
    answer:
      "A focused MVP typically takes 6 to 10 weeks from kickoff to a usable release, depending on scope and integrations. A full production web application usually runs 3 to 6 months. We'll give you a specific estimate once we understand your requirements during scoping.",
  },
  {
    question: "Do you sign NDAs, and who owns the IP and source code?",
    answer:
      "Yes, we sign NDAs before any detailed scoping discussion if you need one in place. You own all IP and source code for work we build for you once final payment is made; we don't retain rights to your product or reuse your proprietary code elsewhere.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. Every engagement can include a post-launch support plan covering bug fixes, monitoring, and minor enhancements, and we offer ongoing maintenance retainers for clients who want a dedicated point of contact after launch. Support terms are agreed during scoping, not bolted on afterward.",
  },
  {
    question: "Can you modernize or take over an existing application?",
    answer:
      "Yes — application modernization and takeover of existing codebases is one of our core services. We start with a technical audit to assess code quality, architecture, and risk areas, then propose either an incremental modernization path or a rebuild, depending on what the audit finds.",
  },
];
