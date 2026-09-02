// Case studies with real outcomes, anonymized by sector. Client names are
// withheld until approvals clear; isPlaceholder marks each entry so the name
// can be added later. TODO(owner): add client names + logos as approvals land.
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
      "We built a multi-tenant dispatch platform - one deployment serving forty depots with proper data isolation - covering a live dispatch board, a driver app, per-depot permissions, and a support console that ended the constant status phone calls.",
    outcome:
      "Dispatch time dropped by about a third (33%), forty depots now run on one system, and the support console ended the phone calls that used to answer 'where is my consignment'.",
    isPlaceholder: true,
  },
  {
    slug: "multi-clinic-patient-intake-modernization",
    title: "Patient intake modernization for a multi-clinic healthcare group",
    industry: "Healthcare",
    stack: ["nextjs", "nodejs", "postgresql", "aws"],
    problem:
      "Paper intake across the group meant duplicate records and reception queues, with nothing reconciling between the front desk and the consulting room.",
    solution:
      "We digitised intake with offline-first tablets, then reconciled a decade of historical records into one patient view, rolling clinics over one at a time without a disruptive all-at-once cutover.",
    outcome:
      "Nine clinics live in 16 weeks, with records that finally reconcile between reception and consulting room and no more duplicate patient files.",
    isPlaceholder: true,
  },
  {
    slug: "payments-processor-cloud-migration",
    title: "Cloud migration and cost reduction for a payments processor",
    industry: "Fintech",
    stack: ["aws", "docker", "postgresql"],
    problem:
      "Ageing colocated servers, rising monthly bills, and a maintenance window every month that everyone dreaded.",
    solution:
      "We moved them to AWS behind a canary, one service at a time, with a rollback ready at every step and a documented disaster-recovery runbook by the end.",
    outcome:
      "Monthly infrastructure spend cut by 38 percent, with the whole migration completed without a single hour of downtime. A migration nobody noticed.",
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
