import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface ScopePillar {
  icon: string;
  title: string;
  desc: string;
  footer: string;
}

const scopePillars: ScopePillar[] = [
  {
    icon: "travel_explore",
    title: "Search Engine Optimization",
    desc: "Strategic on-page keyword clustering, architectural site depth hierarchies, and high-authority contextual link acquisition campaigns.",
    footer: "On-Page & Link Equity",
  },
  {
    icon: "pin_drop",
    title: "Local SEO",
    desc: "Multi-market Google Business Profile optimization, local citation syndication, and geo-targeted landing pages to dominate local 3-pack results.",
    footer: "Map Pack Dominance",
  },
  {
    icon: "code_blocks",
    title: "Technical SEO",
    desc: "Crawl budget auditing, Core Web Vitals remediation, JSON-LD rich schema markup, and headless SSR indexation acceleration.",
    footer: "Vitals & Structured Data",
  },
  {
    icon: "neurology",
    title: "GEO (AI Search)",
    desc: "Generative Engine Optimization tailored for Perplexity, ChatGPT Search, and Google AI Overviews using semantic entity-anchored indexing.",
    footer: "LLM Citation Presence",
  },
  {
    icon: "ads_click",
    title: "PPC & Paid Acquisition",
    desc: "High-intent Google Search campaigns, programmatic Display networks, and algorithmic Meta/TikTok Paid Social targeting high-LTV cohorts.",
    footer: "Target ROAS Driven",
  },
  {
    icon: "share_reviews",
    title: "Social Media Marketing",
    desc: "Executive LinkedIn ghostwriting, community leadership, and viral short-form brand syndication designed to command digital presence.",
    footer: "B2B & Brand Authority",
  },
  {
    icon: "article",
    title: "Content Marketing",
    desc: "Data-backed enterprise whitepapers, technical tutorials, and interactive calculators engineered for authoritative backlink generation.",
    footer: "Inbound Lead Generation",
  },
  {
    icon: "insights",
    title: "Full-Funnel Strategy",
    desc: "Market cannibalization audits, competitor teardowns, server-side attribution modeling, and customer acquisition cost (CAC) compression.",
    footer: "Multi-Touch Attribution",
  },
];

const stages = [
  {
    code: "STAGE 01",
    title: "Audit & Telemetry",
    desc: "Baseline data verification, pixel sanitization, server-side conversion API configuration, and legacy penalty scrubbing.",
  },
  {
    code: "STAGE 02",
    title: "Audience Intelligence",
    desc: "Semantic intent matrix development, competitor paid spend mapping, and high-converting keyword intent clustering.",
  },
  {
    code: "STAGE 03",
    title: "Campaign Architecture",
    desc: "Rapid launch of localized landing pages, multi-variant ad copy testing, and negative keyword filtering.",
  },
  {
    code: "STAGE 04",
    title: "Attribution Tuning",
    desc: "Weekly ROAS & CPL calibration, algorithmic bid adjustments, and transparent BigQuery dashboard updates.",
  },
];

function MarketingCard({ pillar }: { pillar: ScopePillar }) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 rounded-3xl flex flex-col justify-between group h-full">
      <div>
        <div className="w-10 h-10 rounded-xl bg-[#f4f7fb] border border-slate-200 text-[#0058bc] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-lg">{pillar.icon}</span>
        </div>
        <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-2 font-bold">
          {pillar.title}
        </h4>
        <p className="font-body-sm text-body-sm text-slate-600 mb-4 font-medium leading-relaxed">
          {pillar.desc}
        </p>
      </div>
      <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-wider pt-3 border-t border-slate-200 block">
        {pillar.footer}
      </span>
    </div>
  );
}

export default function MarketingDetail() {
  return (
    <section
      className="w-full bg-transparent py-16 md:py-24 scroll-mt-24 relative z-10"
      id="digital-marketing"
    >
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 text-[#0058bc] font-label-sm text-label-sm font-bold uppercase tracking-widest mb-2">
              <span className="font-mono text-slate-500">02 / ACQUISITION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc]"></span>
              <span>Programmatic &amp; Organic Performance</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900">
              <SplitText text="Performance-Driven Digital Marketing" effect="flip" replayOnScroll />
            </h2>
          </div>
          <p className="font-body-md text-body-md text-slate-600 max-w-xl font-medium">
            Engineered user acquisition modeling inspired by institutional quantitative finance. High-intent traffic capture, algorithm reverse-engineering, and multi-touch attribution.
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
            {scopePillars.map((pillar) => (
              <ScrollStackItem key={pillar.title} itemClassName="!p-0 !bg-transparent">
                <MarketingCard pillar={pillar} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Scope Breakdown Grid (8 Pillars Desktop & Tablet) */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {scopePillars.map((pillar) => (
            <MarketingCard key={pillar.title} pillar={pillar} />
          ))}
        </div>

        {/* Performance Framework */}
        <div className="w-full bg-[#f4f7fb] border border-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-widest block mb-1">
                Engineered Growth Funnel
              </span>
              <h3 className="font-headline-md text-headline-md text-slate-900 font-bold">
                The 4-Stage Performance Framework
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-full font-label-sm text-label-sm uppercase font-semibold">
                Daily Analytics
              </span>
              <span className="px-3.5 py-1.5 bg-[#0058bc]/10 border border-[#0058bc]/20 text-[#0058bc] font-bold rounded-full font-label-sm text-label-sm uppercase">
                Weekly Sprints
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stages.map((stage) => (
              <div key={stage.code} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="text-[#0058bc] font-mono text-label-sm font-bold mb-2">
                  {stage.code}
                </div>
                <div className="font-headline-sm text-headline-sm text-slate-900 mb-2 font-bold">
                  {stage.title}
                </div>
                <p className="font-body-sm text-body-sm text-slate-600 font-medium">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
