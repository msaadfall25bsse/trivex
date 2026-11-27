import Link from "next/link";
import GlassSlabSection from "@/components/layout/GlassSlabSection";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface Model {
  icon: string;
  badge: string | null;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

const models: Model[] = [
  {
    icon: "group_work",
    badge: null,
    eyebrow: "Squad Integration",
    title: "Dedicated Squads",
    description:
      "Full-stack autonomous teams (Architect, Tech Lead, Senior UI/UX, Growth Strategist) embedded directly into your operational rhythm.",
    features: [
      "Sprint-by-sprint continuous delivery",
      "Immediate bandwidth scaling",
      "Daily standalone syncs & direct Slack",
    ],
    cta: "Deploy Squad",
    featured: false,
  },
  {
    icon: "rocket_launch",
    badge: "Most Chosen",
    eyebrow: "Fixed Scope & Target",
    title: "End-to-End Delivery",
    description:
      "Full lifecycle design, engineering, and rollout with strict milestone governance, predictable pricing, and ironclad execution SLAs.",
    features: [
      "Turnkey roadmap from Discovery to Launch",
      "Defined scope, timeline, and cost ceiling",
      "Comprehensive IP & repo ownership",
    ],
    cta: "Initiate Project",
    featured: true,
  },
  {
    icon: "verified_user",
    badge: null,
    eyebrow: "Always-On Advisory",
    title: "Strategic Retainers",
    description:
      "Ongoing advisory, architecture oversight, campaign optimization, and incremental design evolution with priority SLA access.",
    features: [
      "Fractional CTO & CMO counsel",
      "Guaranteed monthly resource allocation",
      "Emergency reactive technical support",
    ],
    cta: "Retain Counsel",
    featured: false,
  },
];

function EngagementCard({ model }: { model: Model }) {
  return (
    <div
      className={`bg-[#f4f7fb] border p-7 sm:p-8 rounded-3xl flex flex-col justify-between relative group hover:shadow-md transition-shadow h-full ${
        model.featured ? "border-[#0058bc]/40 ring-1 ring-[#0058bc]/20 shadow-md" : "border-slate-200"
      }`}
    >
      {model.badge && (
        <div className="absolute -top-3 right-6 bg-[#0058bc] text-white px-3.5 py-1 rounded-full font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-md">
          {model.badge}
        </div>
      )}
      <div>
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${
            model.featured
              ? "bg-[#0058bc] text-white shadow-md shadow-[#0058bc]/20"
              : "bg-white border border-slate-200 text-[#0058bc]"
          }`}
        >
          <span className="material-symbols-outlined text-2xl">{model.icon}</span>
        </div>
        <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-widest block mb-2 font-mono">
          {model.eyebrow}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold mb-3">
          {model.title}
        </h3>
        <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed mb-6 font-medium">
          {model.description}
        </p>

        <div className="space-y-3 mb-8 pt-4 border-t border-slate-200">
          {model.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2.5 text-slate-700">
              <span className="material-symbols-outlined text-[#0058bc] text-base shrink-0">check_circle</span>
              <span className="font-body-sm text-body-sm font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/contact-us"
        className={`w-full py-3.5 px-6 rounded-xl font-label-md text-label-md uppercase tracking-wider font-bold text-center transition-all ${
          model.featured
            ? "bg-[#0058bc] hover:bg-[#004696] text-white shadow-md shadow-[#0058bc]/20"
            : "bg-white hover:bg-slate-100 text-slate-900 border border-slate-200"
        }`}
      >
        {model.cta}
      </Link>
    </div>
  );
}

export default function EngagementModels() {
  return (
    <GlassSlabSection>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold">
            Partnership Frameworks
          </span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight mt-2">
            <SplitText text="Structured for Velocity & Predictability" effect="flip" replayOnScroll />
          </h2>
        </div>
        <p className="font-body-md text-body-md text-slate-600 max-w-md font-medium">
          Flexible contractual arrangements tailored to enterprise transformation requirements, early stage hypergrowth, or long-term brand dominance.
        </p>
      </div>

      {/* Mobile: ScrollStack */}
      <div className="md:hidden">
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
          {models.map((model) => (
            <ScrollStackItem key={model.title} itemClassName="!p-0 !bg-transparent">
              <EngagementCard model={model} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
        {models.map((model) => (
          <EngagementCard key={model.title} model={model} />
        ))}
      </div>
    </GlassSlabSection>
  );
}
