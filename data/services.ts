export type CategorySlug =
  | "digital-engineering"
  | "cloud"
  | "artificial-intelligence"
  | "application-engineering"
  | "product-engineering";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  categories: CategorySlug[];
  summary: string;
  // Unique 140 to 160 character meta description for search results.
  seoDescription: string;
  paragraphs: string[];
  keyPoints: string[];
  // "How AI speeds this up" bullets shown on the service page.
  aiSpeedups: string[];
  // Typical timeline, only where it is already a published figure.
  // [OWNER TO CONFIRM] Add timelines and "from" prices for the other services.
  timeline?: string;
  relatedTech: string[];
};

export const categories: Category[] = [
  {
    slug: "digital-engineering",
    name: "Digital Engineering",
    description:
      "SaaS platforms, modernization and enterprise systems built to carry load and change.",
  },
  {
    slug: "cloud",
    name: "Cloud",
    description:
      "Migration, DevOps and SRE on AWS-first infrastructure you can afford to run.",
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    description:
      "Models and agents built to survive production traffic, not a demo.",
  },
  {
    slug: "application-engineering",
    name: "Application Engineering",
    description:
      "Mobile, quality engineering, integrations and the long support tail.",
  },
  {
    slug: "product-engineering",
    name: "Product Engineering",
    description:
      "MVPs, web and mobile apps, and the design that shapes them.",
  },
];

export const services: Service[] = [
  // ---------- Digital Engineering ----------
  {
    slug: "saas-development-services",
    name: "SaaS Development Services",
    categories: ["digital-engineering", "product-engineering"],
    summary:
      "Multi-tenant SaaS platforms built for scale, from first release through growth.",
    seoDescription:
      "AI-accelerated SaaS development: multi-tenant platforms with billing, auth, admin consoles and per-tenant observability, built by senior engineers.",
    paragraphs: [
      "We build multi-tenant SaaS products that hold up when the second hundred customers arrive. That means tenant isolation decided on purpose, billing that reconciles at the end of the month, an admin console your support team can actually use, and per-tenant observability so you find out about problems before your customers tell you.",
      "Most SaaS engagements run 14 to 18 weeks to first paying customer, with a clickable admin console in week three and a working build every second Friday after that.",
      "You do not have to take all six modules below. Most clients start with the first three and add the rest as customers arrive.",
    ],
    keyPoints: [
      "Tenant model and isolation: row, schema or database per tenant, chosen against your compliance obligations rather than by default",
      "Subscription and billing: Stripe, Razorpay or Chargebee, with proration, dunning, tax and refunds scoped from the start",
      "Admin and support console: your team can impersonate, refund, resend and debug without opening an engineer ticket",
      "Auth, roles and permissions: SSO, SCIM provisioning and role hierarchies that survive an enterprise security review",
      "Per-tenant observability: metrics, traces and logs sliced by tenant, so you know who is having a bad day first",
      "Onboarding and self-serve: signup, trial, activation and upgrade paths instrumented end to end",
    ],
    aiSpeedups: [
      "AI drafts tenant, billing and permission test suites, so edge cases are covered before launch.",
      "Admin console screens and API clients are scaffolded quickly, leaving engineer time for isolation and billing logic.",
      "Every AI-generated change is reviewed by the engineer who owns that module.",
    ],
    timeline: "14 to 18 weeks to first paying customer",
    relatedTech: ["nodejs", "postgresql", "aws", "docker", "react"],
  },
  {
    slug: "app-modernization",
    name: "App Modernization",
    categories: ["digital-engineering"],
    summary: "Take a legacy application from liability to asset without a risky rewrite.",
    seoDescription:
      "App modernization without a risky rewrite: audits, strangler-pattern migrations and upgrades, AI-accelerated so legacy systems get safer to change sooner.",
    paragraphs: [
      "Old applications don't need to be thrown away to be fixed. We audit your existing codebase, infrastructure, and dependencies to find out exactly what's slowing you down: outdated frameworks, unpatched security holes, a database that can't handle current load, or an architecture that makes every new feature take three times longer than it should.",
      "From there we propose an incremental modernization path wherever possible: strangler-pattern rewrites, dependency upgrades, database migrations, and containerization that let you ship improvements without freezing feature work for a year. A full rebuild is sometimes the right call, and when it is, we'll tell you plainly and explain why, backed by the audit findings rather than a general preference for starting fresh.",
      "Either way, you get a system that's easier to hire for, cheaper to run, and safer to change. We've modernized applications running on end-of-life frameworks, monoliths that needed splitting, and systems that had accumulated a decade of undocumented workarounds.",
    ],
    keyPoints: [
      "Full technical audit before any modernization decision",
      "Incremental strangler-pattern migration where possible, avoiding feature freezes",
      "Framework and dependency upgrades, security patching",
      "Containerization and infrastructure modernization",
      "Honest rebuild-vs-refactor recommendation backed by audit data",
    ],
    aiSpeedups: [
      "AI maps undocumented code paths and dependencies during the audit, so the plan is ready sooner.",
      "AI writes characterization tests around legacy behaviour before anything is changed.",
      "Upgrade boilerplate is AI-generated, then reviewed line by line before it reaches your repository.",
    ],
    relatedTech: ["docker", "aws", "nodejs", "php", "mysql"],
  },
  {
    slug: "digital-product-engineering",
    name: "Digital Product Engineering",
    categories: ["digital-engineering"],
    summary: "End-to-end product engineering from concept through a shipped, supported release.",
    seoDescription:
      "End-to-end digital product engineering from concept to supported launch. AI-accelerated delivery with senior engineers accountable for the whole build.",
    paragraphs: [
      "Digital product engineering is our term for the full lifecycle work most software needs: taking a product from a rough concept or a stack of stakeholder requirements through design, architecture, build, and a supported launch.",
      "We embed with your team (or act as your entire engineering function) through discovery, technical design, sprint-based delivery, and QA, so the product that ships matches the product that was actually needed, not just the one that was easiest to build.",
      "This service sits above any single technology choice. We'll recommend the stack, architecture, and team shape based on your product's actual constraints: timeline, budget, expected scale, and your team's ability to maintain it after we're gone. It's the right fit for teams that need an engineering partner accountable for outcomes across the whole build, not just a set of tickets closed in isolation.",
    ],
    keyPoints: [
      "Full lifecycle ownership: discovery through supported launch",
      "Stack and architecture decisions matched to your actual constraints",
      "Sprint-based delivery with regular, demoable milestones",
      "QA built into the process, not bolted on at the end",
      "Works as an embedded team or your full engineering function",
    ],
    aiSpeedups: [
      "AI turns stakeholder notes into draft user stories and estimates, so discovery produces a plan faster.",
      "Routine components, API clients and tests are scaffolded by AI, and engineers spend their time on product logic.",
    ],
    relatedTech: ["react", "nodejs", "typescript", "aws"],
  },
  {
    slug: "digital-enterprise",
    name: "Digital Enterprise",
    categories: ["digital-engineering"],
    summary: "Internal systems and enterprise platforms built for the way large organizations actually operate.",
    seoDescription:
      "Enterprise platforms and internal systems with SSO, audit logging and ERP or CRM integration, built by senior engineers with an AI-accelerated workflow.",
    paragraphs: [
      "Enterprise software has different constraints than consumer products: integration with existing systems (ERP, CRM, identity providers), compliance and audit requirements, multiple stakeholder groups with different needs, and a much higher cost of downtime.",
      "We build internal platforms, admin systems, and enterprise-grade applications that respect those constraints instead of fighting them: proper role hierarchies, audit logging, SSO integration, and interfaces designed for people who'll use the system eight hours a day, not for a five-minute demo.",
      "We work with your existing enterprise architecture rather than insisting on a clean-slate approach, integrating with the systems you've already invested in via APIs, message queues, or scheduled data sync where a live integration isn't practical. Typical projects include internal tooling replacing spreadsheet-based processes, employee- or partner-facing portals, and systems that need to satisfy an internal security or compliance review before launch.",
    ],
    keyPoints: [
      "Integration with existing ERP, CRM, and identity systems",
      "Role hierarchies, audit logging, and SSO built in",
      "Designed for daily power users, not demo day",
      "Works alongside your existing enterprise architecture",
      "Compliance and audit-review-ready by design",
    ],
    aiSpeedups: [
      "AI drafts integration mappings and data transformation code from your existing API documentation.",
      "Role and permission test matrices are generated automatically, then reviewed against your compliance requirements.",
    ],
    relatedTech: ["mssql", "nodejs", "express", "aws"],
  },
  {
    slug: "iot-services",
    name: "IoT Services",
    categories: ["digital-engineering"],
    summary: "Connected device platforms, from ingestion pipelines to the dashboards your team monitors them from.",
    seoDescription:
      "IoT platform development: device data ingestion, time-series storage, dashboards and alerting on AWS, delivered faster with an AI-accelerated workflow.",
    paragraphs: [
      "IoT projects live or die on the unglamorous middle layer: reliably ingesting data from devices in the field, storing it in a way that's queryable at scale, and surfacing it through dashboards and alerts that people actually check.",
      "We build that layer: device connectivity and message ingestion (MQTT or HTTP depending on your device constraints), time-series data storage, and the web dashboards and alerting rules your operations team relies on day to day.",
      "We typically build on AWS IoT-adjacent services (Lambda for event processing, DynamoDB or a time-series store for readings, S3 for cold storage) paired with a React-based dashboard, though the right stack depends on your device fleet size, data volume, and existing infrastructure. We're comfortable working alongside separate hardware and firmware teams. Our scope is the cloud platform, data pipeline, and application layer that turns device data into something your business can act on.",
    ],
    keyPoints: [
      "Device connectivity and message ingestion pipelines",
      "Time-series data storage built for scale",
      "Operational dashboards and alerting, not just raw data",
      "Built on AWS (Lambda, DynamoDB, S3) by default",
      "Integrates with separate hardware and firmware teams",
    ],
    aiSpeedups: [
      "AI generates payload parsers and simulated sensor data for load and edge-case testing.",
      "Dashboard views and alert rule boilerplate are scaffolded quickly, so engineers focus on data reliability.",
    ],
    relatedTech: ["aws", "react", "nodejs"],
  },

  // ---------- Cloud ----------
  {
    slug: "cloud-app-development",
    name: "Cloud App Development",
    categories: ["cloud"],
    summary: "Applications designed for the cloud from the first architecture decision, not retrofitted onto it.",
    seoDescription:
      "Cloud-native application development on AWS with infrastructure as code and CI/CD. AI-accelerated builds, reviewed by senior engineers before every release.",
    paragraphs: [
      "Building \"in the cloud\" and building \"for the cloud\" aren't the same thing. We design applications around cloud-native patterns from the start: stateless services that scale horizontally, managed databases instead of self-hosted ones where it makes sense, infrastructure as code so environments are reproducible, and a deployment pipeline that makes shipping routine instead of risky.",
      "Our default stack leans on AWS (Lambda for event-driven workloads, S3 for storage, CloudFront for delivery) with Docker for consistent local-to-production parity and GitHub Actions for CI/CD, but the specific services are chosen to match your traffic patterns and budget, not applied as a template.",
      "This service covers new cloud-native builds as well as re-architecting an existing application to actually take advantage of the cloud platform it happens to be hosted on, rather than running like a single rented server.",
    ],
    keyPoints: [
      "Cloud-native architecture from the first design decision",
      "Horizontally scalable, stateless service design",
      "Infrastructure as code for reproducible environments",
      "AWS-first stack: Lambda, S3, CloudFront, Docker, GitHub Actions",
      "Works for new builds and cloud re-architecture of existing apps",
    ],
    aiSpeedups: [
      "Infrastructure-as-code templates and pipeline configs are drafted by AI, then hardened by engineers.",
      "AI-generated load and failure tests check scaling behaviour before launch.",
    ],
    relatedTech: ["aws", "docker", "github-actions", "nodejs"],
  },
  {
    slug: "cloud-consulting",
    name: "Cloud Consulting",
    categories: ["cloud"],
    summary: "An outside technical opinion on your cloud architecture, cost, and risk before you commit further.",
    seoDescription:
      "Independent cloud consulting: architecture, cost and risk reviews with prioritized findings. AI-assisted analysis means you get a clear report sooner.",
    paragraphs: [
      "Sometimes what you need isn't a build, it's a second opinion. Our cloud consulting engagements review your existing cloud architecture, spend, and operational practices, and give you a specific, prioritized set of recommendations rather than a generic best-practices checklist.",
      "Common engagements include pre-migration assessments (is your application actually ready to move, and what will break), cost reviews (where a surprising amount of spend usually turns out to be idle resources or an over-provisioned database tier), and architecture reviews ahead of a funding round or enterprise sales process where due diligence will scrutinize your infrastructure.",
      "We deliver findings as a concrete report your team can act on directly, and we're equally comfortable handing it off to your engineers or executing on it ourselves as a follow-on engagement.",
    ],
    keyPoints: [
      "Architecture, cost, and risk review with prioritized findings",
      "Pre-migration readiness assessments",
      "Cost audits that find real, actionable savings",
      "Due-diligence-ready reports for funding or enterprise sales",
      "Findings you can execute yourself or hand back to us",
    ],
    aiSpeedups: [
      "AI sifts billing exports and resource inventories to surface idle and over-provisioned spend quickly.",
      "Report drafts are assembled with AI, and every recommendation is checked and signed off by an engineer.",
    ],
    relatedTech: ["aws", "docker"],
  },
  {
    slug: "cloud-migration-services",
    name: "Cloud Migration Services",
    categories: ["cloud"],
    summary: "Move from on-premise or another provider to AWS with a plan, not a scramble.",
    seoDescription:
      "Cloud migration services to AWS with phased plans, staging, rollback paths and validation. AI-accelerated inventory work gets you to a safe cutover sooner.",
    paragraphs: [
      "Migrating infrastructure is high-stakes precisely because it's usually invisible when it goes right and very visible when it doesn't. We plan migrations in phases: inventory and dependency mapping, a staging environment that mirrors production, a cutover plan with a clear rollback path, and a post-migration validation period before we call it done.",
      "Depending on your starting point, that might mean moving off physical servers, consolidating from multiple cloud providers, or replatforming from a legacy hosting provider onto AWS with modern managed services replacing self-managed infrastructure along the way.",
      "We plan for the boring failure modes (DNS propagation delays, data sync gaps during cutover, forgotten cron jobs and integrations) because those are what actually cause migration incidents, not the big architectural decisions. Downtime windows are agreed upfront and we aim to beat them, not just hit them.",
    ],
    keyPoints: [
      "Phased migration plan: inventory, staging, cutover, validation",
      "Clear rollback path at every phase",
      "Handles physical-to-cloud, multi-cloud consolidation, and replatforming",
      "Modern managed AWS services replacing self-managed infrastructure",
      "Agreed downtime windows, planned to beat rather than just hit",
    ],
    aiSpeedups: [
      "AI helps inventory cron jobs, scripts and integrations across servers, so nothing is forgotten at cutover.",
      "Runbooks and validation checklists are drafted by AI and rehearsed by engineers before migration day.",
    ],
    relatedTech: ["aws", "docker", "mysql", "postgresql"],
  },
  {
    slug: "sre-consulting",
    name: "SRE Consulting",
    categories: ["cloud"],
    summary: "Reliability engineering for teams that are past the point of manually watching dashboards.",
    seoDescription:
      "SRE consulting: SLOs, alerting, incident response and on-call set up hands-on with your team. AI-assisted runbooks and analysis speed up the engagement.",
    paragraphs: [
      "As systems grow, \"someone will notice if it breaks\" stops being a monitoring strategy. We help teams build the reliability practices that scale past that point: defining SLOs that actually reflect what your users care about, building alerting on top of those SLOs instead of alerting on every anomaly, incident response processes with clear ownership, and the automation that reduces how often a human needs to intervene at all.",
      "This is consulting and implementation together. We don't just hand over a document: we help set up the monitoring stack, runbooks, and on-call structure, and work alongside your team until they own it confidently.",
      "Engagements are scoped to where you actually are. A startup standing up its first real on-call rotation has different needs than an enterprise team recovering from a bad incident post-mortem.",
    ],
    keyPoints: [
      "SLOs tied to actual user-facing reliability, not vanity metrics",
      "Alerting built on SLOs instead of noisy anomaly detection",
      "Incident response processes with clear ownership",
      "Hands-on setup of monitoring, runbooks, and on-call structure",
      "Scoped to your team's current maturity, not a generic template",
    ],
    aiSpeedups: [
      "AI summarizes past incidents and alert noise to propose SLOs worth tracking.",
      "Runbook drafts are generated from your existing systems and refined by engineers with your team.",
    ],
    relatedTech: ["aws", "docker", "github-actions"],
  },
  {
    slug: "cloud-managed-services",
    name: "Cloud Managed Services",
    categories: ["cloud"],
    summary: "Ongoing infrastructure management so your team can stay focused on product, not patching.",
    seoDescription:
      "Managed cloud services: patching, backups, cost and uptime monitoring with agreed response times, plus AI-assisted alert triage by named engineers.",
    paragraphs: [
      "Not every team needs (or wants) a full-time infrastructure engineer, but every production system needs someone watching it. Our managed services cover ongoing infrastructure operation: patching and security updates, backup verification, cost monitoring, uptime monitoring with defined response times, and routine capacity planning as your usage grows.",
      "We work as an extension of your team rather than a black box. You get visibility into what's being done and why, regular reporting, and direct access to the engineers managing your infrastructure rather than a ticketing queue.",
      "This service pairs naturally with any application we've built for you, but we also take on management of infrastructure we didn't originally build, starting with an onboarding audit so we understand what we're inheriting before we're responsible for it.",
    ],
    keyPoints: [
      "Patching, security updates, and backup verification on a schedule",
      "Uptime monitoring with defined, agreed response times",
      "Cost monitoring and ongoing capacity planning",
      "Direct access to the engineers managing your systems",
      "Onboarding audit before taking over infrastructure we didn't build",
    ],
    aiSpeedups: [
      "AI triages alerts and drafts incident summaries, so engineers respond to what matters first.",
      "Cost and capacity reports are compiled with AI and reviewed by the engineer who manages your systems.",
    ],
    relatedTech: ["aws", "docker", "github-actions"],
  },
  {
    slug: "devops",
    name: "DevOps",
    categories: ["cloud"],
    summary: "CI/CD pipelines and deployment practices that make shipping software routine.",
    seoDescription:
      "DevOps services: GitHub Actions CI/CD, Docker, infrastructure as code and fast rollbacks. AI-accelerated setup makes shipping routine for your team sooner.",
    paragraphs: [
      "Good DevOps practice is measured by how boring your deployments are. We build CI/CD pipelines (automated testing, build, and deployment via GitHub Actions) that let your team ship multiple times a day with confidence instead of scheduling deployments around who's available to babysit them.",
      "That includes environment parity (so \"works on my machine\" stops being a real risk), containerization with Docker for consistent builds, infrastructure as code so environments can be recreated rather than hand-maintained, and rollback mechanisms that turn a bad deploy into a non-event.",
      "We tailor the pipeline to your team's actual workflow rather than imposing a rigid process. Trunk-based development with feature flags suits some teams, a more traditional branching model suits others, and we'll help you pick based on team size and release cadence rather than by default.",
    ],
    keyPoints: [
      "CI/CD pipelines built on GitHub Actions",
      "Environment parity between local, staging, and production",
      "Containerized builds with Docker for consistency",
      "Infrastructure as code and fast, safe rollbacks",
      "Pipeline shape matched to your team's actual workflow",
    ],
    aiSpeedups: [
      "Pipeline, Dockerfile and infrastructure-as-code drafts are generated by AI and hardened by engineers.",
      "AI reviews pull requests for risky changes before they reach the deploy pipeline.",
    ],
    relatedTech: ["github-actions", "docker", "aws"],
  },

  // ---------- Artificial Intelligence ----------
  {
    slug: "ai-ml-engineering",
    name: "AI/ML Engineering",
    categories: ["artificial-intelligence"],
    summary: "Machine learning systems engineered to run reliably in production, not just in a notebook.",
    seoDescription:
      "AI and ML engineering for production: data pipelines, model serving APIs, drift monitoring and retraining, from a team that uses AI across its own delivery.",
    paragraphs: [
      "There's a wide gap between a machine learning model that works in a notebook and one that runs reliably in production, serving real traffic with real data drift over time. We handle that gap: building data pipelines that feed models consistently, deploying models behind APIs your application can actually call, monitoring for performance and data drift, and setting up retraining workflows so the model doesn't quietly degrade six months after launch.",
      "We work with your data science team if you have one, or handle the full pipeline from problem framing through deployment if you don't.",
      "Typical projects include recommendation systems, predictive models tied to a specific business metric, classification and scoring pipelines, and the supporting infrastructure (feature stores, model registries, batch and real-time inference) that make ML systems maintainable rather than a one-off science project.",
    ],
    keyPoints: [
      "Production deployment, not just model development",
      "Data pipelines built for consistent, reliable model input",
      "Drift monitoring and retraining workflows",
      "API-based model serving your application can call directly",
      "Works alongside your data science team or independently",
    ],
    aiSpeedups: [
      "Data validation and pipeline tests are AI-generated, so bad input is caught before it reaches a model.",
      "Serving APIs and monitoring dashboards are scaffolded quickly, and engineers focus on model quality.",
    ],
    relatedTech: ["python", "aws", "docker"],
  },
  {
    slug: "genai-development-services",
    name: "GenAI Development Services",
    categories: ["artificial-intelligence"],
    summary: "Generative AI features built around a specific business problem, not a demo.",
    seoDescription:
      "GenAI development services: RAG, summarization and content features grounded in your data, with evaluation and guardrails, built by an AI-first team.",
    paragraphs: [
      "Most generative AI failures aren't model failures, they're scope failures: a chatbot bolted onto a product with no clear job to do, or a feature that looks impressive in a demo and falls apart on real user input.",
      "We build generative AI features scoped to a specific outcome: document summarization tied to a workflow, content generation with the right guardrails and review step, and retrieval-augmented systems grounded in your actual data instead of hallucinating. We're deliberately model-agnostic, choosing the underlying LLM provider based on cost, latency, and accuracy needs for your specific use case rather than a default preference.",
      "Every GenAI feature we ship includes evaluation: a way to measure whether outputs are actually good, not just plausible-sounding, plus the prompt engineering, guardrails, and fallback behavior needed for a feature that fails safely when it fails at all.",
    ],
    keyPoints: [
      "Scoped to a specific business outcome, not a generic chatbot",
      "Retrieval-augmented generation grounded in your own data",
      "Model-agnostic: provider chosen on cost, latency, and accuracy fit",
      "Built-in evaluation to measure output quality, not just plausibility",
      "Guardrails and safe-failure behavior included by default",
    ],
    aiSpeedups: [
      "We use AI to generate evaluation datasets and adversarial test prompts for your feature.",
      "Prompt and retrieval experiments run quickly, so the model and approach are chosen on measured results.",
    ],
    relatedTech: ["python", "nodejs", "aws"],
  },
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    categories: ["artificial-intelligence"],
    summary: "An honest assessment of where AI actually fits in your business, and where it doesn't.",
    seoDescription:
      "Vendor-neutral AI consulting: opportunity assessment, data readiness review and build or buy advice, from engineers who ship AI features in production.",
    paragraphs: [
      "Not every problem needs AI, and we'll tell you when a simpler rule-based system or a better-designed workflow solves your problem more reliably and more cheaply.",
      "Our AI consulting engagements start with your actual business processes and pain points, then identify where machine learning or generative AI genuinely improves outcomes, and size the opportunity honestly, including the data readiness, integration work, and ongoing maintenance cost that a vendor pitch usually leaves out.",
      "Deliverables typically include a prioritized opportunity assessment, a data readiness review (most AI projects stall on data quality, not model choice), and a build-vs-buy recommendation for each opportunity identified. We're equally happy to hand the roadmap to your team or execute on it as a follow-on engagement.",
    ],
    keyPoints: [
      "Honest assessment of where AI helps versus where it doesn't",
      "Data readiness review, the most common cause of stalled AI projects",
      "Prioritized opportunity roadmap tied to real business metrics",
      "Build-vs-buy guidance including true ongoing maintenance cost",
      "Vendor-neutral: no bias toward a particular AI platform",
    ],
    aiSpeedups: [
      "Quick AI prototypes test the riskiest opportunity against your real data during the assessment.",
      "AI helps review data samples at scale, so the readiness report is grounded in evidence.",
    ],
    relatedTech: ["python", "aws"],
  },
  {
    slug: "ai-agent-development-services",
    name: "AI Agent Development Services",
    categories: ["artificial-intelligence"],
    summary: "Multi-step AI agents that take actions through your existing tools and APIs, with real guardrails.",
    seoDescription:
      "AI agent development with scoped tool access, human checkpoints and full audit logs, so multi-step agents act safely on your real systems and APIs.",
    paragraphs: [
      "AI agents that can actually take multi-step action (querying systems, calling APIs, completing a workflow rather than just answering a question) are a different engineering problem than a chatbot, with different failure modes.",
      "We build agent systems with the guardrails that matter in production: scoped tool access so an agent can only take actions it's explicitly permitted to, human-in-the-loop checkpoints for anything consequential or hard to reverse, structured logging so you can audit exactly what an agent did and why, and fallback behavior for when a step fails partway through a multi-step task.",
      "Typical use cases include internal automation agents that complete multi-step operational tasks, customer-facing agents that resolve requests by calling real backend systems, and research or data-processing agents that handle work too variable for a fixed script but too repetitive for a person.",
    ],
    keyPoints: [
      "Scoped tool access: agents can only take explicitly permitted actions",
      "Human-in-the-loop checkpoints for consequential actions",
      "Structured logging for full auditability of agent actions",
      "Graceful fallback behavior for partial task failures",
      "Built for internal automation, customer-facing, and data-processing use cases",
    ],
    aiSpeedups: [
      "We simulate agent runs against sandboxed copies of your tools to find failure modes before launch.",
      "AI-generated scenario tests cover partial failures, retries and unexpected inputs.",
    ],
    relatedTech: ["python", "nodejs", "aws"],
  },

  // ---------- Application Engineering ----------
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    categories: ["application-engineering", "product-engineering"],
    summary: "Native-quality iOS and Android apps from a single React Native codebase, where that fits.",
    seoDescription:
      "React Native mobile app development for iOS and Android from one codebase, with offline sync, push and store submission, built with an AI-accelerated workflow.",
    paragraphs: [
      "We build mobile applications primarily with React Native, which lets us ship to iOS and Android from a single codebase without the compromises that used to come with cross-platform tooling. For most business applications, the performance and native-feel difference isn't worth maintaining two separate native codebases. When a project genuinely needs platform-specific capabilities that push past what React Native handles well, we'll say so upfront rather than force-fitting the wrong tool.",
      "Every mobile build includes the parts that are easy to underscope: push notifications, offline behavior and local data sync, app store submission and review (for both stores, which have different rules and different ways to get rejected), and crash monitoring so you find out about problems before your app store reviews do.",
      "We support both new app builds and ongoing feature development on existing mobile codebases.",
    ],
    keyPoints: [
      "Single React Native codebase for iOS and Android",
      "Honest guidance when a project needs native instead",
      "Push notifications and offline-first data sync included",
      "App store submission handled for both platforms",
      "Crash monitoring and ongoing feature development support",
    ],
    aiSpeedups: [
      "Screens, navigation and API client code are scaffolded by AI, and engineers own offline sync and native edge cases.",
      "AI generates device test scenarios, so regressions are caught before app store review.",
    ],
    relatedTech: ["react-native", "typescript", "nodejs"],
  },
  {
    slug: "software-quality-engineering",
    name: "Software Quality Engineering",
    categories: ["application-engineering"],
    summary: "Testing strategy and automation that catches regressions before your users do.",
    seoDescription:
      "Software quality engineering: risk-based test strategy and automated unit, integration and end-to-end tests in CI, with AI-drafted test cases for speed.",
    paragraphs: [
      "Quality engineering done well is invisible: bugs get caught before release instead of becoming support tickets. We build test strategies matched to where a codebase actually breaks: automated unit and integration tests for business-critical logic, end-to-end tests for the user flows that would hurt most if they broke, and manual exploratory testing for the edge cases automation tends to miss.",
      "For teams without an existing test suite, we start by identifying the highest-risk, least-tested parts of the application rather than attempting comprehensive coverage from day one, a strategy that finds real bugs faster than chasing a coverage percentage.",
      "We also set up the CI integration so tests actually run on every change rather than living forgotten in a repository, and we're comfortable working within an existing QA process or helping a team build one from scratch.",
    ],
    keyPoints: [
      "Test strategy prioritized by actual risk, not coverage percentage",
      "Automated unit, integration, and end-to-end testing",
      "CI-integrated so tests run on every change",
      "Manual exploratory testing for the edge cases automation misses",
      "Works within an existing QA process or builds one from scratch",
    ],
    aiSpeedups: [
      "AI writes first-draft test cases from user flows and bug history, and engineers keep the ones that matter.",
      "AI flags likely regressions in pull request review before code is merged.",
    ],
    relatedTech: ["javascript", "typescript", "github-actions"],
  },
  {
    slug: "application-development-maintenance-services",
    name: "Application Development and Maintenance Services",
    categories: ["application-engineering"],
    summary: "Ongoing development and upkeep for applications that need to keep evolving after launch.",
    seoDescription:
      "Application development and maintenance: features, fixes, dependency updates and performance tuning from a dedicated team, sped up by AI-assisted review.",
    paragraphs: [
      "Most applications spend far more of their life in maintenance than in initial development, and that phase deserves the same engineering discipline as the original build. We provide ongoing development and maintenance for existing applications: new features, bug fixes, dependency updates, performance tuning, and the unglamorous but necessary work of keeping a codebase healthy as it ages.",
      "Engagements typically run as a dedicated allocation of engineering time (a set number of hours or a small dedicated team) rather than a per-ticket arrangement, which lets us plan work properly instead of context-switching between unrelated fires.",
      "We can take over maintenance of an application we didn't build, starting with a codebase audit so we understand what we're inheriting and can flag risk areas before they become incidents.",
    ],
    keyPoints: [
      "Ongoing feature development, not just break-fix support",
      "Dependency updates and performance tuning as standard practice",
      "Dedicated engineering allocation, not a reactive ticket queue",
      "Codebase audit before taking over maintenance we didn't build",
      "Risk areas flagged proactively, not discovered as incidents",
    ],
    aiSpeedups: [
      "AI speeds up codebase onboarding by mapping modules, dependencies and risky areas.",
      "Dependency upgrades and routine fixes are drafted with AI and reviewed by the engineer who owns your codebase.",
    ],
    relatedTech: ["nodejs", "php", "mysql", "aws"],
  },
  {
    slug: "application-integration-services",
    name: "Application Integration Services",
    categories: ["application-engineering"],
    summary: "Connect the systems you already run so data moves without manual exports and imports.",
    seoDescription:
      "Application integration services connecting CRM, ERP, payments and internal tools via APIs and webhooks, with AI-assisted mapping and failure alerts.",
    paragraphs: [
      "Most businesses run more separate systems than they'd like (a CRM, an ERP, a support desk, a payment processor, internal spreadsheets standing in for a system that doesn't exist yet), and the gaps between them cost real time and cause real errors.",
      "We build integrations that close those gaps: API-based connections between systems, webhook-driven real-time sync where it's needed, scheduled batch sync where it isn't, and middleware layers when you're connecting more than two systems and need a single source of truth for how data flows between them.",
      "We work with both modern REST/GraphQL APIs and the older, less well-documented APIs that a lot of enterprise software still ships with, and we design integrations to fail loudly and safely (logging and alerting when a sync fails) rather than silently dropping data.",
    ],
    keyPoints: [
      "API, webhook, and scheduled-batch integration patterns",
      "Middleware layers for multi-system data flow",
      "Works with modern APIs and older enterprise system APIs alike",
      "Fails loudly and safely instead of silently dropping data",
      "Reduces manual export/import work and the errors it causes",
    ],
    aiSpeedups: [
      "AI reads API documentation and sample payloads to draft field mappings and transformation code.",
      "Contract tests for every integration are generated automatically and run on each change.",
    ],
    relatedTech: ["nodejs", "express", "aws", "mysql"],
  },
  {
    slug: "business-application-services",
    name: "Business Application Services",
    categories: ["application-engineering"],
    summary: "Line-of-business applications built around how your team actually works.",
    seoDescription:
      "Business application development: internal tools, workflow systems and portals built around how your team works, delivered with an AI-accelerated workflow.",
    paragraphs: [
      "Business applications (internal tools, workflow systems, operational dashboards, portals for partners or customers) succeed or fail based on how well they fit the process they're supporting, not on how impressive the technology is underneath.",
      "We start by mapping the actual workflow (often different from the official one) before writing any code, then build applications that reduce the manual work and spreadsheet-juggling your team has been doing around the gaps in existing systems. This covers everything from a straightforward internal CRUD tool to more complex workflow systems with approval chains, role-based permissions, and reporting.",
      "We optimize for the applications your team will actually keep using six months after launch, which usually means fewer features, built well, over an ambitious feature list that half gets used.",
    ],
    keyPoints: [
      "Built around your actual workflow, not the official one on paper",
      "Reduces manual work and spreadsheet-based workarounds",
      "Approval chains, role-based permissions, and reporting as needed",
      "Scoped for long-term daily use, not a launch-day demo",
      "Fits alongside your existing business systems",
    ],
    aiSpeedups: [
      "AI turns process interviews and spreadsheets into a draft data model and screen list.",
      "Standard CRUD screens and reports are scaffolded quickly, leaving time for the workflow rules that matter.",
    ],
    relatedTech: ["react", "nodejs", "postgresql", "mysql"],
  },
  {
    slug: "digital-app-innovation",
    name: "Digital & App Innovation",
    categories: ["application-engineering"],
    summary: "A structured path from a new digital idea to a validated, shippable product.",
    seoDescription:
      "Digital and app innovation: rapid prototypes, feasibility checks and staged builds that validate ideas with real users, AI-accelerated so you learn sooner.",
    paragraphs: [
      "Innovation work needs a different process than maintaining an existing product: faster iteration, more willingness to throw work away, and a clear point where an idea either gets validated or killed.",
      "We help teams move new digital ideas from concept to validated product: rapid prototyping to test a concept before committing to a full build, technical feasibility assessments for ideas that sound simple but might not be, and staged builds that let you validate assumptions with real users before investing in the full feature set.",
      "This service is aimed at teams exploring a new product line, a new digital channel, or an internal innovation initiative that needs engineering support to move past the whiteboard stage without prematurely locking in a full production build.",
    ],
    keyPoints: [
      "Rapid prototyping to test ideas before a full commitment",
      "Technical feasibility assessment for ambitious concepts",
      "Staged builds that validate assumptions with real users early",
      "Clear decision points: validate and continue, or stop",
      "Fits new product lines, new channels, and internal innovation teams",
    ],
    aiSpeedups: [
      "AI-built clickable prototypes put an idea in front of real users sooner.",
      "Feasibility spikes use AI to test APIs and data sources quickly before a build is committed.",
    ],
    relatedTech: ["react", "nodejs", "typescript"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    categories: ["application-engineering"],
    summary: "Security services delivered together with our sister firm, Shridhar InfoSec Solutions.",
    seoDescription:
      "Cybersecurity for software projects with sister firm Shridhar InfoSec Solutions: secure-by-design builds, penetration testing and independent reviews.",
    paragraphs: [
      "Cybersecurity is a specialist discipline, so rather than treat it as a light add-on to a software build, security services for Shridhar Technologies clients are delivered in partnership with our sister firm, Shridhar InfoSec Solutions, a dedicated cybersecurity company sharing our leadership, contact infrastructure, and standards for how client data is handled.",
      "Where a project we're building needs a security review, penetration testing, or ongoing security monitoring, we bring in Shridhar InfoSec Solutions directly rather than approximating it ourselves. For clients who want security built into an application from day one, this means secure-by-design architecture during development on our side, paired with independent security testing and review from a firm that does nothing else.",
      "It's the same warm handoff you'd expect from a single company, without pretending general software engineers are a substitute for dedicated security specialists.",
    ],
    keyPoints: [
      "Delivered in partnership with sister firm Shridhar InfoSec Solutions",
      "Secure-by-design architecture built in during development",
      "Independent penetration testing and security review",
      "Shared standards for client data handling across both firms",
      "No pretending general engineering replaces specialist security review",
    ],
    aiSpeedups: [
      "AI-assisted static analysis flags risky patterns in pull requests during development.",
      "Security findings are triaged with AI help, and every fix is verified by an engineer.",
    ],
    relatedTech: ["aws", "nodejs"],
  },

  // ---------- Product Engineering ----------
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    categories: ["product-engineering"],
    summary: "Software built around your actual process, not adapted from someone else's template.",
    seoDescription:
      "Custom software development built around your real process, replacing spreadsheets and disconnected tools, with AI-accelerated delivery and senior review.",
    paragraphs: [
      "Off-the-shelf software is built for the average case, and most real businesses aren't the average case, which is usually where the workarounds, exported spreadsheets, and manual double-entry start creeping in.",
      "We build custom software designed around your specific process from the start: the fields you actually need, the approval steps your business really uses, and the reporting your team checks every week, rather than a generic tool with your logo on it. This spans everything from a focused internal tool solving one specific problem well, to a full custom platform replacing several disconnected systems at once.",
      "We scope custom builds tightly around the problem that justifies a custom solution in the first place. If a configured off-the-shelf tool would genuinely serve you better and cheaper, we'll say so rather than sell you a build you don't need.",
    ],
    keyPoints: [
      "Built around your actual process, not a generic template",
      "Honest guidance when off-the-shelf software is the better fit",
      "Scoped tightly around the specific problem that justifies a custom build",
      "Replaces disconnected systems and manual workarounds",
      "Reporting and workflows matched to how your team really works",
    ],
    aiSpeedups: [
      "AI converts existing spreadsheets and process documents into a first-draft data model.",
      "Boilerplate screens, APIs and tests are generated quickly, so budget goes into the logic unique to your business.",
    ],
    relatedTech: ["nodejs", "react", "postgresql", "mysql"],
  },
  {
    slug: "web-app-development",
    name: "Web App Development",
    categories: ["product-engineering"],
    summary: "Fast, accessible web applications built on React and Next.js, from MVP through scale.",
    seoDescription:
      "Web app development on React and Next.js: fast, accessible, SEO-ready products from MVP to scale, built by senior engineers with an AI-accelerated workflow.",
    paragraphs: [
      "We build web applications primarily on React and Next.js, a combination that gives us server-side rendering and static generation where performance and SEO matter, and a rich client-side experience where interactivity matters, without forcing every page into the same rendering strategy.",
      "Every web app we build starts with a data model and API design that can actually support the product roadmap, not just the first release, paired with attention to performance and accessibility from the start rather than as a pre-launch checklist item.",
      "We handle the full stack (frontend, backend APIs typically on Node.js and Express, and database design on PostgreSQL or MySQL depending on the data shape) or integrate with an existing backend your team already maintains. Typical projects range from customer-facing marketing sites with real interactivity to full authenticated web applications with complex business logic.",
    ],
    keyPoints: [
      "Built on React and Next.js with rendering strategy matched per page",
      "Data model and API design that supports the full roadmap, not just v1",
      "Performance and accessibility considered from the start, not bolted on",
      "Full-stack capability or integration with your existing backend",
      "Scales from marketing sites to complex authenticated applications",
    ],
    aiSpeedups: [
      "Components, pages and API clients are scaffolded with AI, and engineers own the data model and core logic.",
      "AI-generated accessibility and end-to-end tests run on every pull request.",
    ],
    relatedTech: ["react", "nextjs", "nodejs", "postgresql"],
  },
  {
    slug: "mvp-development",
    name: "MVP Development",
    categories: ["product-engineering"],
    summary: "A real, usable first version, scoped to test your riskiest assumption, not every feature.",
    seoDescription:
      "MVP development scoped to test your riskiest assumption. AI-accelerated builds get a real, usable first release in front of users in weeks, not quarters.",
    paragraphs: [
      "The point of an MVP is to test your riskiest assumption with real users as fast as responsibly possible, not to ship a smaller version of your entire eventual product.",
      "We work with founders and product teams to identify what actually needs validating, then scope a build tight enough to ship in weeks rather than months while still being a real, usable product, not a prototype that falls over under real usage. That means making deliberate, documented tradeoffs about what's in and out of scope, choosing a stack that won't need to be thrown away at the next stage of growth, and being explicit about technical debt taken on deliberately versus debt that will need addressing before the next funding round or growth phase.",
      "We're equally comfortable handing off a completed MVP to an in-house team or continuing as your engineering partner through the next stage.",
    ],
    keyPoints: [
      "Scoped to test your riskiest assumption, not build everything",
      "Real, usable product, not a throwaway prototype",
      "Deliberate, documented scope tradeoffs from day one",
      "Stack chosen to survive past the MVP stage",
      "Smooth handoff to an in-house team or continued partnership",
    ],
    aiSpeedups: [
      "AI turns founder notes into draft user stories and a scope you can cut down fast.",
      "Auth, admin and CRUD basics are scaffolded quickly, so the build budget goes to the feature being tested.",
    ],
    timeline: "6 to 10 weeks to a usable release",
    relatedTech: ["nextjs", "react", "nodejs", "postgresql"],
  },
  {
    slug: "ui-ux-product-design",
    name: "UI/UX & Product Design",
    categories: ["product-engineering"],
    summary: "Interface and product design grounded in how people will actually use it, backed by engineers who'll build it.",
    seoDescription:
      "UI/UX and product design grounded in engineering reality: research, wireframes and component design systems, with AI-generated options to react to early.",
    paragraphs: [
      "Design work that isn't grounded in engineering reality tends to produce beautiful mockups that get quietly simplified during development.",
      "Our design process (user research where the budget and timeline support it, wireframing, and high-fidelity UI design) is done in close contact with the engineers who'll actually build the product, so what ships matches what was designed instead of drifting during implementation.",
      "We design systems, not just screens: a component library and set of patterns that scale as the product grows, rather than a one-off set of mockups that falls apart as soon as a new page is needed. This service works as a standalone engagement feeding into your own development team, or combined with our engineering services for a single team responsible for both design and build.",
    ],
    keyPoints: [
      "Design grounded in engineering reality, built in close contact with developers",
      "User research scoped to fit your budget and timeline",
      "Component-based design systems, not one-off mockup sets",
      "Works standalone or combined with our engineering services",
      "What ships matches what was designed",
    ],
    aiSpeedups: [
      "AI generates layout options and UI copy drafts to react to, so a direction is agreed sooner.",
      "Designers pick the direction and hold it to your brand before anything is built.",
    ],
    relatedTech: ["react", "tailwind", "mui"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getServicesByCategory(categorySlug: CategorySlug): Service[] {
  return services.filter((service) => service.categories.includes(categorySlug));
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  const siblingSlugs = new Set<string>();
  for (const categorySlug of service.categories) {
    for (const sibling of getServicesByCategory(categorySlug)) {
      if (sibling.slug !== service.slug) siblingSlugs.add(sibling.slug);
    }
  }
  return services.filter((s) => siblingSlugs.has(s.slug)).slice(0, 4);
}

export function serviceHref(service: Service, categorySlug?: CategorySlug) {
  return `/services/${categorySlug ?? service.categories[0]}/${service.slug}`;
}
