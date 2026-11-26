import GlassSlabSection from "@/components/layout/GlassSlabSection";

const scopeItems = [
  {
    icon: "web",
    title: "Website Development",
    desc: "High-throughput corporate portals and marketing ecosystems constructed with Next.js, React, Tailwind CSS, and headless enterprise CMS integrations (Sanity, Contentful).",
    tags: ["Next.js 14", "Edge Rendering", "Tailwind"],
    spanTwo: false,
  },
  {
    icon: "dashboard_customize",
    title: "Web Application Development",
    desc: "Complex SaaS architectures, event-driven web applications, and real-time analytical dashboards featuring bi-directional WebSocket telemetry and low-latency state synchronization.",
    tags: ["SaaS Multi-tenant", "WebSockets", "Zustand/Redux"],
    spanTwo: false,
  },
  {
    icon: "memory",
    title: "Custom Software",
    desc: "Bespoke distributed backend platforms, decoupled microservices, secure transaction queues, and internal ERP/CRM system integrations built for uninterrupted 99.99% uptime.",
    tags: ["Go / Node.js", "gRPC & Kafka", "Microservices"],
    spanTwo: false,
  },
  {
    icon: "shopping_cart_checkout",
    title: "E-Commerce Development",
    desc: "Headless Shopify Plus infrastructure, custom checkout customization, global payment gateways (Stripe, Adyen), multi-currency inventory synchronization, and bespoke cart engines.",
    tags: ["Shopify Plus", "Headless Composable", "Stripe Connect"],
    spanTwo: false,
  },
  {
    icon: "data_object",
    title: "Frontend & Backend Engineering",
    desc: "Cohesive end-to-end fullstack development. High-fidelity web interfaces tied seamlessly to fault-tolerant REST and GraphQL APIs. Hardened database architectures featuring PostgreSQL, Redis cache layers, and strict row-level security policies.",
    tags: ["GraphQL Federation", "PostgreSQL / Supabase", "Redis Cache", "OAuth 2.0 / SAML SSO"],
    spanTwo: true,
  },
];

const phases = [
  {
    code: "PHASE 01",
    title: "Architecture Sprint",
    desc: "Schema modeling, API contract definition, latency benchmarking, and cloud topology design.",
  },
  {
    code: "PHASE 02",
    title: "CI/CD Automation",
    desc: "Automated GitHub Actions pipelines, containerization (Docker/K8s), and staging sandbox deployment.",
  },
  {
    code: "PHASE 03",
    title: "QA & Penetration Testing",
    desc: "End-to-end Cypress test suites, OWASP Top 10 security audits, stress testing under extreme load.",
  },
  {
    code: "PHASE 04",
    title: "Cloud Rollout",
    desc: "Blue/green zero-downtime deployment, DNS edge propagation, and 24/7 Datadog observability.",
  },
];

const deliverables = [
  "Fully documented source repositories with strict branch permissions",
  "OpenAPI / Swagger interactive API specifications & endpoints",
  "Core Web Vitals scorecard verification (Target >95 Lighthouse score)",
  "Automated regression testing suites & disaster recovery playbook",
  "Full infrastructure-as-code (Terraform) scripts for zero vendor lock-in",
];

export default function SoftwareDetail() {
  return (
    <GlassSlabSection id="software-dev">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-14">
        <div>
          <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold uppercase tracking-widest mb-2">
            <span className="font-mono text-on-surface-variant">01 / ARCHITECTURE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>Software &amp; Digital Engineering</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Mission-Critical Software Development
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl font-medium">
          High-concurrency infrastructure engineered for low-latency scale, strict type safety, zero-downtime deployments, and bulletproof microservice communications.
        </p>
      </div>

      {/* Main Bento Grid for Software Scope */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-12">
        {scopeItems.map((item) => (
          <div
            key={item.title}
            className={`glass-surface-card p-6 sm:p-7 rounded-3xl glass-rim flex flex-col justify-between group ${
              item.spanTwo ? "lg:col-span-2" : ""
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-2xl glass-subcard flex items-center justify-center text-primary mb-5 neumorphic-inset group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
                {item.title}
              </h3>
              <p
                className={`font-body-sm text-body-sm text-on-surface-variant mb-6 font-medium leading-relaxed ${
                  item.spanTwo ? "max-w-2xl" : ""
                }`}
              >
                {item.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 glass-subcard rounded-lg text-on-surface font-label-sm text-label-sm uppercase font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Methodology & Deliverables Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 glass-surface-card p-6 sm:p-8 md:p-10 rounded-3xl glass-rim">
        {/* Left: Engineering Methodology Timeline */}
        <div className="lg:col-span-7">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest block mb-2">
            Execution Workflow
          </span>
          <h4 className="font-headline-md text-headline-md text-on-surface mb-6 font-bold">
            Engineering Methodology
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phases.map((phase) => (
              <div key={phase.code} className="p-5 glass-subcard rounded-2xl">
                <div className="font-mono text-primary font-bold text-label-sm mb-1.5">
                  {phase.code}
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
                  {phase.title}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Deliverables Checklist */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-subcard p-6 sm:p-7 rounded-2xl">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest block mb-2">
              Standard Output
            </span>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-5 font-bold">
              Key Engineering Deliverables
            </h4>
            <ul className="flex flex-col gap-3.5 mb-6">
              {deliverables.map((del) => (
                <li key={del} className="flex items-start gap-2.5 text-body-sm text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">security</span>
              <span className="font-label-sm text-label-sm text-on-surface font-bold uppercase">
                SOC2 &amp; GDPR Compliant Codebases
              </span>
            </div>
            <span className="material-symbols-outlined text-primary text-base">verified_user</span>
          </div>
        </div>
      </div>
    </GlassSlabSection>
  );
}
