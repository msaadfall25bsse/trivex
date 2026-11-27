import SplitText from "@/components/home/SplitText";

const nodes = [
  {
    code: "Synthesis 01",
    icon: "sync_alt",
    title: "Software + Marketing",
    description:
      "Engineering powers search speed and custom telemetry, while growth data informs architectural feature prioritization and API latency targets.",
    outcome: "Sub-second Core Web Vitals + 4x Organic Visibility",
  },
  {
    code: "Synthesis 02",
    icon: "all_inclusive",
    title: "Marketing + Design",
    description:
      "Conversion rate data shapes the UI typography, layout friction points, and hero visuals to minimize bounce rates and build immediate brand conviction.",
    outcome: "38% Higher In-Session Funnel Conversions",
  },
  {
    code: "Synthesis 03",
    icon: "token",
    title: "Design + Software",
    description:
      "Tokenized component systems pass directly into production React/Native repos with zero design debt, ensuring pixel-perfect fidelity at scale.",
    outcome: "60% Faster Time-To-Market from Mockup",
  },
];

export default function SynergyMatrix() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold">
            Compound Momentum
          </span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight mt-2 mb-4">
            <SplitText text="The Cross-Discipline Synergy Matrix" effect="flip" replayOnScroll />
          </h2>
          <p className="font-body-md text-body-md text-slate-600 font-medium">
            Agencies traditionally silo engineering, marketing, and design. At TRIVEX, they reinforce one another simultaneously to drive unmatched compounding advantage.
          </p>
        </div>

        {/* Synergy Interactive Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {nodes.map((node) => (
            <div
              key={node.code}
              className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-7 sm:p-8 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-widest bg-[#0058bc]/10 border border-[#0058bc]/20 px-3 py-1 rounded-full">
                    {node.code}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#f4f7fb] border border-slate-200 flex items-center justify-center text-[#0058bc] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{node.icon}</span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold mb-2.5">
                  {node.title}
                </h3>
                <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {node.description}
                </p>
              </div>
              <div className="bg-[#f4f7fb] border border-slate-200 rounded-2xl p-4">
                <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold block mb-1">
                  Compound Outcome
                </span>
                <span className="font-label-lg text-label-lg text-slate-900 font-bold leading-snug block">
                  {node.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
