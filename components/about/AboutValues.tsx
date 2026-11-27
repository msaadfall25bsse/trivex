import SplitText from "@/components/home/SplitText";

const values = [
  {
    icon: "verified",
    label: "01 / DISCIPLINE",
    title: "Uncompromising Quality",
    description:
      "From cryptographic compliance to sub-millisecond API response, good enough is never accepted.",
  },
  {
    icon: "visibility",
    label: "02 / PROTOCOL",
    title: "Absolute Transparency",
    description:
      "No black-box engineering or hidden margins. Unfiltered access to codebases, logs, and spend analytics.",
  },
  {
    icon: "dataset",
    label: "03 / SYNCHRONY",
    title: "Integrated Thinking",
    description:
      "Code, branding, and conversion are handled as a single interconnected system to avoid costly translation debt.",
  },
  {
    icon: "cached",
    label: "04 / CADENCE",
    title: "Continuous Evolution",
    description:
      "Perpetual benchmarking against next-generation infrastructure, LLM integrations, and modern design systems.",
  },
];

export default function AboutValues() {
  return (
    <section className="w-full py-6 md:py-12 relative z-10">
      <div className="w-full md:w-[90%] mx-auto bg-white py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
            <div>
              <span className="font-label-sm text-label-sm text-[#0058bc] uppercase tracking-widest font-bold mb-2 block">
                Operating Pillars
              </span>
              <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight">
                <SplitText text="Values forged through delivery." effect="flip" replayOnScroll />
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-slate-600 max-w-md font-medium">
              We reject bloated corporate slogans. These four directives govern every architecture review, interface audit, and deployment cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => (
              <div
                key={item.label}
                className="bg-[#f4f7fb] border border-slate-200 p-7 rounded-3xl flex flex-col justify-between group hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0058bc] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0058bc] font-bold tracking-widest uppercase block mb-1.5 font-mono">
                    {item.label}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-2.5 font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
                <div className="w-10 h-1 bg-[#0058bc] rounded-full mt-6 group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
