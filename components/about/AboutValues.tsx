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
      {/* Fully Transparent Blurred Glass Container (90% width on tablet/desktop, 5% margins, deep backdrop blur) */}
      <div className="w-full md:w-[90%] mx-auto bg-white/[0.05] backdrop-blur-2xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-white/60 shadow-[0_8px_32px_rgba(13,28,46,0.03)] glass-rim">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold mb-2 block">
                Operating Pillars
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Values forged through delivery.
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-secondary max-w-md font-medium">
              We reject bloated corporate slogans. These four directives govern every architecture review, interface audit, and deployment cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => (
              <div
                key={item.label}
                className="glass-surface-card p-7 rounded-3xl glass-rim flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center mb-5 neumorphic-inset group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold tracking-widest uppercase block mb-1.5 font-mono">
                    {item.label}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2.5 font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
                <div className="w-10 h-1 bg-gradient-to-r from-primary to-primary-container rounded-full mt-6 group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
