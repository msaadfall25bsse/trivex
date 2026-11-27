const kpis = [
  { value: "99.98%", label: "Uptime Reliability", accent: false },
  { value: "4.2x", label: "Average Client ROI", accent: true },
  { value: "38+", label: "Global Awards Won", accent: false },
  { value: "100%", label: "In-House Architects", accent: false },
];

export default function ServicesHero() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="flex flex-col max-w-4xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#0058bc]/10 border border-[#0058bc]/20 mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0058bc] animate-pulse"></span>
            <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-widest text-[#0058bc] font-bold">
              Core Capabilities
            </span>
            <span className="text-slate-400 font-label-sm">/</span>
            <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider text-slate-600 font-semibold">
              Practice Overview
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-semibold text-slate-900 tracking-tight mb-5 sm:mb-6 leading-tight">
            Comprehensive Solutions Across{" "}
            <span className="text-[#0058bc] underline decoration-[#0058bc]/25 underline-offset-8">
              Three Core
            </span>{" "}
            Disciplines.
          </h1>
          <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
            From enterprise software architecture to measurable customer acquisition and distinct brand identity systems. Engineered in lockstep for global market leaders.
          </p>

          {/* Bento KPI Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12 bg-white border border-slate-200 shadow-sm rounded-2xl sm:rounded-3xl p-5 sm:p-7">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="flex flex-col bg-[#f4f7fb] border border-slate-200 rounded-2xl p-4">
                <span
                  className={`font-headline-md text-headline-md font-extrabold tracking-tight ${
                    kpi.accent ? "text-[#0058bc]" : "text-slate-900"
                  }`}
                >
                  {kpi.value}
                </span>
                <span className="font-label-sm sm:font-label-md text-[11px] sm:text-label-md text-slate-600 uppercase tracking-wider mt-1 font-semibold">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
