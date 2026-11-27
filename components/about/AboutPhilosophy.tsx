import SplitText from "@/components/home/SplitText";

const pillars = [
  {
    number: "01",
    icon: "sentiment_satisfied",
    title: "User-Centricity",
    description:
      "We design software for humans under pressure. Interfaces must reduce mental friction, streamline decision pathways, and elevate product delight across every edge case.",
    footer: "Cognitive Ergonomics",
  },
  {
    number: "02",
    icon: "stacks",
    title: "Scalable Foundations",
    description:
      "Prototypes built on brittle foundations fail under load. We craft decoupled, modular code architectures and design systems capable of expanding without structural debt.",
    footer: "Deterministic Architecture",
  },
  {
    number: "03",
    icon: "query_stats",
    title: "Measurable ROI",
    description:
      "Beauty without financial viability is vanity. Every sprint is benchmarked against conversion rates, CAC efficiency, infrastructure spend, and customer retention.",
    footer: "Strict Unit Economics",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="w-full py-6 md:py-12 relative z-10">
      <div className="w-full md:w-[90%] mx-auto bg-white py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
            <div>
              <span className="font-label-sm text-label-sm text-[#0058bc] uppercase tracking-widest font-bold mb-2 block">
                Methodology
              </span>
              <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight">
                <SplitText text="Our tripartite working philosophy." effect="flip" replayOnScroll />
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-slate-600 max-w-sm font-medium">
              Every client engagement is anchored by three non-negotiable vectors to guarantee sustained market impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#f4f7fb] border border-slate-200 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow"
              >
                <span className="font-headline-xl text-headline-xl text-[#0058bc]/15 font-extrabold absolute top-4 right-6 select-none">
                  {pillar.number}
                </span>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0058bc] mb-6 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-slate-900 mb-3 font-bold">
                    {pillar.title}
                  </h3>
                  <p className="font-body-md text-body-md text-slate-600 leading-relaxed mb-6 font-medium">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-2 pt-3 px-3.5 py-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-[#0058bc] font-label-md text-label-md font-bold">
                  <span>{pillar.footer}</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Photo Insight Row */}
          <div className="mt-8 bg-[#f4f7fb] border border-slate-200 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 group">
            <div className="relative min-h-[260px] overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Close up architectural detail of senior software and UI designers in a bright glass meeting room"
                loading="lazy"
                decoding="async"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqYiOoW8cPxEyCpeb5EIGWtAUvznSE4SYAofr-TWVa2vps61ordMFSVoP6bcsKVaamPTCoxzzxWqZzNlN7cayd1sRRb6ObVHo53H4xQG5HXeJpEFcJ3z4nZlL24GRCXK2de2RAIlifx-r7W_lWFDu7LYu6PvcFLAhCP7SPLHhM5bW4W0C3uyRLYY8MuvJzsYraYFgUA7DzFuXfpHrd5FKv3Ra7jvrKvpY6PoCI0ogq"
              />
            </div>
            <div className="bg-transparent p-8 sm:p-10 md:p-12 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm uppercase font-bold text-[#0058bc] tracking-widest mb-2 block">
                Founder-Led Engagements
              </span>
              <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-3 font-bold">
                Relentless Attention to Execution
              </h4>
              <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed font-medium">
                By limiting concurrent enterprise partnerships, our discipline founders stay actively involved in codebase commits, design critiques, and high-stakes deployment releases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
