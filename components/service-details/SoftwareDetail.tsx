import GlassSlabSection from "@/components/layout/GlassSlabSection";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface ScopeItem {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  spanTwo: boolean;
}

const scopeItems: ScopeItem[] = [
  {
    icon: "web",
    title: "Website Development",
    desc: "High-throughput corporate portals and marketing ecosystems constructed with Next.js, React, Tailwind CSS, and headless enterprise CMS integrations (Sanity, Contentful).",
    tags: ["Next.js 15", "Edge Rendering", "Tailwind CSS"],
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

function ScopeCard({ item }: { item: ScopeItem }) {
  return (
    <div
      className={`bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 rounded-3xl flex flex-col justify-between group h-full ${
        item.spanTwo ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        <div className="w-11 h-11 rounded-2xl bg-[#f4f7fb] border border-slate-200 flex items-center justify-center text-[#0058bc] mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-xl">{item.icon}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-2 font-bold">
          {item.title}
        </h3>
        <p
          className={`font-body-sm text-body-sm text-slate-600 mb-6 font-medium leading-relaxed ${
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
            className="px-3 py-1 bg-[#f4f7fb] border border-slate-200 rounded-lg text-slate-700 font-label-sm text-label-sm uppercase font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SoftwareDetail() {
  return (
    <GlassSlabSection id="software-dev">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-14">
        <div>
          <div className="flex items-center gap-2 text-[#0058bc] font-label-sm text-label-sm font-bold uppercase tracking-widest mb-2">
            <span className="font-mono text-slate-500">01 / ARCHITECTURE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc]"></span>
            <span>Software &amp; Digital Engineering</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-slate-900">
            <SplitText text="Mission-Critical Software Development" effect="flip" replayOnScroll />
          </h2>
        </div>
        <p className="font-body-md text-body-md text-slate-600 max-w-xl font-medium">
          High-concurrency infrastructure engineered for low-latency scale, strict type safety, zero-downtime deployments, and bulletproof microservice communications.
        </p>
      </div>

      {/* Mobile: ScrollStack */}
      <div className="md:hidden mb-10">
        <ScrollStack
          useWindowScroll
          smoothScroll={false}
          stackPosition={104}
          itemDistance={72}
          itemStackDistance={22}
          itemScale={0.04}
          baseScale={0.88}
          dimAmount={0.12}
          holdDistance={100}
        >
          {scopeItems.map((item) => (
            <ScrollStackItem key={item.title} itemClassName="!p-0 !bg-transparent">
              <ScopeCard item={item} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Main Bento Grid for Software Scope (Desktop & Tablet) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-12">
        {scopeItems.map((item) => (
          <ScopeCard key={item.title} item={item} />
        ))}
      </div>

      {/* Engineering Methodology & Deliverables Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 bg-[#f4f7fb] border border-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl">
        {/* Left: Engineering Methodology Timeline */}
        <div className="lg:col-span-7">
          <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-widest block mb-2">
            Execution Workflow
          </span>
          <h4 className="font-headline-md text-headline-md text-slate-900 mb-6 font-bold">
            Engineering Methodology
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phases.map((phase) => (
              <div key={phase.code} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="font-mono text-[#0058bc] font-bold text-label-sm mb-1.5">
                  {phase.code}
                </div>
                <div className="font-headline-sm text-headline-sm text-slate-900 mb-1.5 font-bold">
                  {phase.title}
                </div>
                <p className="font-body-sm text-body-sm text-slate-600 font-medium">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Deliverables Checklist */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 shadow-sm p-6 sm:p-7 rounded-2xl">
          <div>
            <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-widest block mb-2">
              Standard Output
            </span>
            <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-5 font-bold">
              Key Engineering Deliverables
            </h4>
            <ul className="flex flex-col gap-3.5 mb-6">
              {deliverables.map((del) => (
                <li key={del} className="flex items-start gap-2.5 text-body-sm text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-[#0058bc] text-lg mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0058bc]/10 border border-[#0058bc]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0058bc]">security</span>
              <span className="font-label-sm text-label-sm text-slate-800 font-bold uppercase">
                SOC2 &amp; GDPR Compliant Codebases
              </span>
            </div>
            <span className="material-symbols-outlined text-[#0058bc] text-base">verified_user</span>
          </div>
        </div>
      </div>
    </GlassSlabSection>
  );
}
