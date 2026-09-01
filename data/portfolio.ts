// Placeholder case studies. Industry names are generic/anonymized - replace
// with real, named client work once available. isPlaceholder marks every
// entry so it's easy to find and swap out later.
export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;
  isPlaceholder: true;
};

export const portfolio: CaseStudy[] = [
  {
    slug: "regional-logistics-dispatch-platform",
    title: "Multi-tenant dispatch platform for a regional logistics network",
    industry: "Logistics",
    stack: ["react", "nodejs", "postgresql", "aws"],
    problem:
      "A regional logistics network was coordinating dispatch, driver assignment, and delivery tracking across a patchwork of spreadsheets and phone calls, which made it impossible to onboard new depots without adding headcount.",
    solution:
      "We built a multi-tenant dispatch platform - one deployment serving every depot with proper data isolation - covering live driver assignment, route tracking, and a customer-facing delivery status page, deployed on AWS with a PostgreSQL backend.",
    outcome:
      "New depots can now be onboarded in days instead of weeks, and dispatch staff report spending significantly less time on manual coordination.",
    isPlaceholder: true,
  },
  {
    slug: "multi-clinic-patient-intake-modernization",
    title: "Patient intake modernization for a multi-clinic healthcare group",
    industry: "Healthcare",
    stack: ["nextjs", "nodejs", "mssql", "aws"],
    problem:
      "A multi-clinic healthcare group was running patient intake on a decade-old desktop application that couldn't be accessed remotely and was becoming a hiring liability for front-desk staff.",
    solution:
      "We modernized the intake system into a web-based application on Next.js, migrating the existing MSSQL data model incrementally so clinics could switch over one at a time without a disruptive all-at-once cutover.",
    outcome:
      "All clinics migrated over an eight-week rollout with zero patient data loss, and front-desk onboarding time dropped substantially with the new interface.",
    isPlaceholder: true,
  },
  {
    slug: "payments-processor-cloud-migration",
    title: "Cloud migration and cost reduction for a payments processor",
    industry: "Fintech",
    stack: ["aws", "docker", "postgresql"],
    problem:
      "A payments processor was running on aging, self-managed servers with rising hosting costs and no clear disaster recovery plan, which had become a recurring concern in enterprise sales conversations.",
    solution:
      "We planned and executed a phased migration to AWS - containerizing services with Docker, moving to managed PostgreSQL, and building a documented disaster recovery runbook - with a staged cutover to avoid processing downtime.",
    outcome:
      "Infrastructure costs dropped meaningfully post-migration, and the documented DR plan has since been used successfully in enterprise security reviews.",
    isPlaceholder: true,
  },
  {
    slug: "d2c-retail-headless-commerce-rebuild",
    title: "Headless commerce rebuild for a D2C retail brand",
    industry: "Retail",
    stack: ["shopify", "nextjs", "react"],
    problem:
      "A direct-to-consumer retail brand had outgrown its templated storefront, with page speed issues hurting conversion during high-traffic sale periods.",
    solution:
      "We rebuilt the storefront as a headless Next.js frontend on top of Shopify, keeping checkout and inventory on Shopify's infrastructure while giving the brand full control over performance and design on the frontend.",
    outcome:
      "Page load times improved significantly and the site held up cleanly through the brand's next major sale event without the slowdowns of prior years.",
    isPlaceholder: true,
  },
  {
    slug: "industrial-iot-equipment-monitoring",
    title: "IoT monitoring platform for an industrial equipment manufacturer",
    industry: "Manufacturing",
    stack: ["aws", "react", "nodejs"],
    problem:
      "An industrial equipment manufacturer's customers had no visibility into machine health between scheduled service visits, leading to avoidable downtime and reactive-only maintenance calls.",
    solution:
      "We built a monitoring platform ingesting sensor data from deployed machines via AWS IoT and Lambda, with a customer-facing dashboard surfacing machine health and automated alerts for anomalies ahead of failure.",
    outcome:
      "Customers using the dashboard reported catching a meaningful share of issues before they caused unplanned downtime, turning a reactive service model into a proactive one.",
    isPlaceholder: true,
  },
  {
    slug: "professional-services-ai-document-review",
    title: "AI-assisted document review for a professional services firm",
    industry: "Professional Services",
    stack: ["python", "aws", "nodejs"],
    problem:
      "A professional services firm's analysts were spending a large share of billable hours manually extracting key terms from long contracts and reports, work that was repetitive but too detail-sensitive to skip.",
    solution:
      "We built a retrieval-augmented review tool that surfaces relevant clauses and flags anomalies against the firm's own review checklist, with every suggestion traceable back to the source document and a mandatory human review step before anything is finalized.",
    outcome:
      "Analysts now use the tool as a first pass on every document, cutting initial review time substantially while keeping final sign-off entirely in human hands.",
    isPlaceholder: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return portfolio.find((study) => study.slug === slug);
}
