import Link from "next/link";

const modules = [
  {
    icon: "search_insights",
    title: "Organic Search (SEO & GEO)",
    desc: "Generative Engine Optimization & algorithmic high-intent search rank capture.",
  },
  {
    icon: "ads_click",
    title: "Pay-Per-Click (Google & Meta)",
    desc: "Precision target bidding, custom lookalikes, and programmatic ad buying.",
  },
  {
    icon: "travel_explore",
    title: "Technical & Local SEO",
    desc: "Core Web Vitals acceleration, site indexation speed, and geo-targeted dominancy.",
  },
  {
    icon: "share",
    title: "Social Media Strategy",
    desc: "Omnichannel brand distribution, founder brand resonance, and community activation.",
  },
  {
    icon: "monitoring",
    title: "Growth Analytics",
    desc: "End-to-end attribution models, custom telemetry dashboards, and cohort LTV insights.",
  },
];

export default function Pillar2Marketing() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent relative z-10 scroll-mt-24" id="marketing-discipline">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Visual Analytics */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-5 sm:p-7 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-wider">
                    Real-Time Demand Funnel
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold">
                    Multi-Channel Attribution
                  </h3>
                </div>
                <span className="px-3 py-1 bg-[#0058bc]/10 border border-[#0058bc]/20 text-[#0058bc] font-label-sm text-label-sm rounded-full font-bold">
                  Live Data
                </span>
              </div>

              {/* Inlined Interactive Visual SVG Chart */}
              <div className="bg-[#f4f7fb] border border-slate-200 p-5 rounded-2xl mb-5">
                <div className="flex justify-between items-baseline mb-4">
                  <div>
                    <span className="font-headline-md text-headline-md text-slate-900 font-extrabold tracking-tight">
                      +342%
                    </span>
                    <span className="font-label-sm text-label-sm text-[#0058bc] font-bold block">
                      Organic Acquisition Surge
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-slate-600 font-semibold">
                    Past 90 Days
                  </span>
                </div>
                <svg className="w-full h-24 overflow-visible text-[#0058bc]" viewBox="0 0 400 120">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,105 Q40,90 80,95 T160,70 T240,60 T320,25 T400,10 L400,120 L0,120 Z"
                    fill="url(#chartGradient)"
                  ></path>
                  <path
                    d="M0,105 Q40,90 80,95 T160,70 T240,60 T320,25 T400,10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></path>
                  <circle cx="400" cy="10" fill="currentColor" r="4"></circle>
                </svg>
              </div>

              {/* Visual Context Image */}
              <div className="relative rounded-2xl overflow-hidden h-56 w-full mb-5 border border-white/50 shadow-md">
                <img
                  className="w-full h-full object-cover"
                  alt="High-end marketing strategy war room with floor-to-ceiling analytical dashboards"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-1zLG0XMDDyRu0k2HBhQ6s-1kIgTuOUGUQauBGU4m0TUDD9evr70vRwV0CrwAWLwmFokXo7_SNQL-PHDgx46ByLCg4UJJFXH12J7LZXu5t3SwersXD8l_ITabjMoIbTgFOUgxEGdENgPV6kb-1Hg2_s9itoeqQDwhlRB5BgZo-HWuRiB7fR8_dEKTc6_IK6I47ubB4fVtWwcv7gjrD86wYlnVBzXSOgkRKpq79FGK"
                />
                <div className="absolute inset-0 bg-primary/15 mix-blend-multiply"></div>
                <div className="absolute top-3 left-3 bg-white/75 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/90 shadow-sm">
                  <span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wider">
                    GEO Search Indexing
                  </span>
                </div>
              </div>

              {/* Campaign Stats Split */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 glass-subcard rounded-2xl text-center">
                  <span className="font-headline-sm text-headline-sm text-primary font-extrabold block">2.4M+</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Impression Volume
                  </span>
                </div>
                <div className="p-3.5 glass-subcard rounded-2xl text-center">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold block">38.6%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Conv. Efficiency
                  </span>
                </div>
                <div className="p-3.5 glass-subcard rounded-2xl text-center">
                  <span className="font-headline-sm text-headline-sm text-primary font-extrabold block">-42%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Target CAC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 glass-subcard text-primary rounded-full font-label-sm text-label-sm uppercase font-bold mb-4">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              Pillar 02 • Growth
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
              Digital Marketing
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed font-medium">
              Data-driven marketing strategies tailored to generate qualified demand, organic visibility, and scalable ROI across multi-touch global customer journeys.
            </p>

            {/* Module List */}
            <div className="flex flex-col gap-3.5 mb-8">
              {modules.map((mod) => (
                <div
                  key={mod.title}
                  className="flex items-center justify-between p-4 glass-card-pro rounded-2xl glass-rim group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl glass-subcard flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-lg">{mod.icon}</span>
                    </div>
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block text-base leading-snug">
                        {mod.title}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                        {mod.desc}
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary text-xl group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                    arrow_forward_ios
                  </span>
                </div>
              ))}
            </div>

            <Link
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold hover:gap-3 transition-all duration-200 self-start"
              href="/service-details"
            >
              View Marketing Details
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
