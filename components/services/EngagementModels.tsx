import Link from "next/link";
import GlassSlabSection from "@/components/layout/GlassSlabSection";

const models = [
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

export default function EngagementModels() {
  return (
    <GlassSlabSection>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            Partnership Frameworks
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-2">
            Structured for Velocity &amp; Predictability
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-medium">
          Flexible contractual arrangements tailored to enterprise transformation requirements, early stage hypergrowth, or long-term brand dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {models.map((model) => (
          <div
            key={model.title}
            className={`glass-surface-card p-7 sm:p-8 rounded-3xl glass-rim flex flex-col justify-between relative group ${
              model.featured ? "ring-1 ring-primary/40 shadow-2xl" : ""
            }`}
          >
            {model.badge && (
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-primary to-primary-container text-on-primary px-3.5 py-1 rounded-full font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-md">
                {model.badge}
              </div>
            )}
            <div>
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${
                  model.featured
                    ? "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/20 tactile-surface"
                    : "glass-subcard text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{model.icon}</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-wider block mb-1">
                {model.eyebrow}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-bold">
                {model.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed font-medium">
                {model.description}
              </p>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface mb-8">
                {model.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 font-medium">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className={`w-full py-3.5 rounded-xl font-label-lg text-label-lg text-center transition-all font-bold ${
                model.featured
                  ? "tactile-button bg-primary hover:bg-primary-container text-on-primary shadow-md"
                  : "glass-subcard hover:bg-white/40 text-primary"
              }`}
              href="/contact-us"
            >
              {model.cta}
            </Link>
          </div>
        ))}
      </div>
    </GlassSlabSection>
  );
}
