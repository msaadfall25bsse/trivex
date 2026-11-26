export default function AboutMissionVision() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold mb-2 block">
            Guiding Compass
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Purpose-built for institutional longevity.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission Card */}
          <div className="glass-card-pro rounded-3xl p-8 sm:p-10 flex flex-col justify-between glass-rim relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-label-sm text-label-sm uppercase font-bold tracking-widest text-primary glass-subcard px-3.5 py-1.5 rounded-full">
                  Our Mission
                </span>
                <div className="w-11 h-11 rounded-2xl bg-surface-container text-primary flex items-center justify-center neumorphic-inset">
                  <span className="material-symbols-outlined text-2xl">flag</span>
                </div>
              </div>
              <p className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug mb-6">
                To empower ambitious enterprises with mission-critical software, data-backed digital marketing, and world-class design.
              </p>
            </div>
            <div className="pt-5 border-t border-surface-container/60 flex items-center gap-2.5 text-secondary">
              <span className="material-symbols-outlined text-primary text-base">check_circle</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Zero Compromise on Technical Integrity
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="glass-card-dark relative bg-gradient-to-br from-[#0d1c2e]/85 via-[#132238]/85 to-[#091524]/85 backdrop-blur-2xl text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl border border-white/20 glass-rim overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="font-label-sm text-label-sm uppercase font-bold tracking-widest text-primary-fixed bg-white/10 backdrop-blur-xl border border-white/20 px-3.5 py-1.5 rounded-full">
                  Our Vision
                </span>
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 text-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </div>
              </div>
              <p className="font-headline-sm text-headline-sm text-white font-semibold leading-snug mb-6">
                To set the benchmark for modern integrated digital agencies through founder-level rigor and relentless execution.
              </p>
            </div>
            <div className="pt-5 border-t border-white/15 flex items-center gap-2.5 text-surface-variant relative z-10">
              <span className="material-symbols-outlined text-primary-fixed-dim text-base">verified</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-primary-fixed">
                Global Delivery Standards
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
