import GlassSlabSection from "@/components/layout/GlassSlabSection";

const steps = [
  {
    num: "01",
    icon: "fact_check",
    title: "Inquiry Review",
    desc: "Within 24 hours, our three founding partners evaluate technical complexity, architectural scope, and strategic alignment.",
    footerIcon: "timer",
    footer: "Response: < 24 Business Hours",
  },
  {
    num: "02",
    icon: "troubleshoot",
    title: "Technical / Growth Call",
    desc: "A 30-minute structured discovery call with our dedicated practice leaders to inspect infrastructure dependencies and targets.",
    footerIcon: "handshake",
    footer: "Direct Partner Attendance",
  },
  {
    num: "03",
    icon: "route",
    title: "Customized Scope & Roadmap",
    desc: "You receive a fixed-scope technical proposal, milestone architecture, resource allocation schedule, and firm milestones.",
    footerIcon: "verified",
    footer: "Zero-Ambiguity Contract",
  },
];

export default function OnboardingProcess() {
  return (
    <GlassSlabSection>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            Workflow Transparency
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
            What Happens Next
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-medium">
          Our disciplined three-phase protocol ensures technical feasibility and zero wasted momentum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
        {steps.map((s) => (
          <div
            key={s.num}
            className="glass-surface-card p-7 rounded-3xl glass-rim flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-headline-md text-headline-md text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container font-extrabold tracking-tighter">
                  {s.num}
                </span>
                <div className="w-11 h-11 rounded-2xl glass-subcard flex items-center justify-center text-primary neumorphic-inset group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2.5 font-bold">
                {s.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-medium leading-relaxed">
                {s.desc}
              </p>
            </div>
            <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl glass-subcard flex items-center gap-2 text-on-surface">
              <span className="material-symbols-outlined text-primary text-base">{s.footerIcon}</span>
              <span className="font-label-sm text-label-sm font-bold uppercase">{s.footer}</span>
            </div>
          </div>
        ))}
      </div>
    </GlassSlabSection>
  );
}
