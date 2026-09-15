export type Outcome = {
  title: string;
  description: string;
  href: string;
  icon: "web" | "saas" | "mobile" | "ai" | "cloud" | "modernize";
};

// Homepage "What we build" cards. Each links to the closest category or
// service page until the service structure is renamed around these outcomes.
export const outcomes: Outcome[] = [
  {
    title: "Websites and landing pages",
    description: "Fast, SEO-ready marketing sites in Next.js, live in days.",
    href: "/services/product-engineering/web-app-development",
    icon: "web",
  },
  {
    title: "SaaS and web apps",
    description: "Multi-tenant products with billing, auth and admin built in.",
    href: "/services/digital-engineering/saas-development-services",
    icon: "saas",
  },
  {
    title: "Mobile apps",
    description: "iOS and Android apps in React Native from one codebase.",
    href: "/services/application-engineering/mobile-app-development",
    icon: "mobile",
  },
  {
    title: "AI features and agents",
    description: "Chat, search, document processing and agents that work in production.",
    href: "/services/artificial-intelligence",
    icon: "ai",
  },
  {
    title: "Cloud and DevOps",
    description: "AWS setup, migration, CI/CD and monitoring that keeps costs in check.",
    href: "/services/cloud",
    icon: "cloud",
  },
  {
    title: "Modernization and support",
    description: "Take over, clean up and keep legacy apps running.",
    href: "/services/digital-engineering/app-modernization",
    icon: "modernize",
  },
];
