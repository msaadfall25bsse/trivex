export default function WhyChooseSection() {
  return (
    <section className="w-full py-8 md:py-16 relative z-10">
      {/* Dark Translucent Glass Container on Black Glow Background */}
      <div className="w-full md:w-[90%] mx-auto bg-white/[0.05] backdrop-blur-2xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              PRECISION ADVANTAGE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white tracking-tight">
              Engineered to Outperform Conventional Agency Models
            </h2>
          </div>

          {/* Bento Grid: 4 Precision Advantage Cards with Dark Glass & Accents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Advantage 1 */}
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0058bc]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10">
                  <span className="material-symbols-outlined text-2xl">supervisor_account</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
                  Founder-Led Precision
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  No inexperienced middle-managers. Senior triad partners oversee project architecture directly from day one.
                </p>
              </div>
              <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase font-mono text-cyan-300 font-bold">
                  Direct Access
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc] animate-pulse"></span>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0058bc]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#0058bc] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10">
                  <span className="material-symbols-outlined text-2xl">dataset</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
                  Integrated Capabilities
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Marketing campaigns align seamlessly with system architecture; design components map directly to reusable code.
                </p>
              </div>
              <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase font-mono text-[#0058bc] font-bold">
                  Zero Friction
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc] animate-pulse"></span>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0058bc]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10">
                  <span className="material-symbols-outlined text-2xl">analytics</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
                  Performance Obsession
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  We anchor every deliverable to strict business metrics: compute latency, acquisition CAC, and conversion rate.
                </p>
              </div>
              <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase font-mono text-cyan-300 font-bold">
                  Metric Bound
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc] animate-pulse"></span>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0058bc]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#0058bc] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10">
                  <span className="material-symbols-outlined text-2xl">published_with_changes</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
                  Transparent Execution
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Complete visibility into sprint cycles, pull requests, media-buy attribution, and design system governance.
                </p>
              </div>
              <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase font-mono text-[#0058bc] font-bold">
                  Open Telemetry
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc] animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
