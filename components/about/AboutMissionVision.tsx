import SplitText from "@/components/home/SplitText";

export default function AboutMissionVision() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-label-sm text-label-sm text-[#0058bc] uppercase tracking-widest font-bold mb-2 block">
            Guiding Compass
          </span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight">
            <SplitText text="Purpose-built for institutional longevity." effect="flip" replayOnScroll />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission Card */}
          <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-label-sm text-label-sm uppercase font-bold tracking-widest text-[#0058bc] bg-[#0058bc]/10 border border-[#0058bc]/20 px-3.5 py-1.5 rounded-full">
                  Our Mission
                </span>
                <div className="w-11 h-11 rounded-2xl bg-[#f4f7fb] border border-slate-200 text-[#0058bc] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">flag</span>
                </div>
              </div>
              <p className="font-headline-sm text-headline-sm text-slate-900 font-semibold leading-snug mb-6">
                To empower ambitious enterprises with mission-critical software, data-backed digital marketing, and world-class design.
              </p>
            </div>
            <div className="pt-5 border-t border-slate-200 flex items-center gap-2.5 text-slate-600">
              <span className="material-symbols-outlined text-[#0058bc] text-base">check_circle</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Zero Compromise on Technical Integrity
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-[#0058bc]/25 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="font-label-sm text-label-sm uppercase font-bold tracking-widest text-white bg-[#0058bc] px-3.5 py-1.5 rounded-full">
                  Our Vision
                </span>
                <div className="w-11 h-11 rounded-2xl bg-[#0058bc]/10 border border-[#0058bc]/20 text-[#0058bc] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </div>
              </div>
              <p className="font-headline-sm text-headline-sm text-slate-900 font-semibold leading-snug mb-6">
                To set the benchmark for modern integrated digital agencies through founder-level rigor and relentless execution.
              </p>
            </div>
            <div className="pt-5 border-t border-slate-200 flex items-center gap-2.5 text-slate-600 relative z-10">
              <span className="material-symbols-outlined text-[#0058bc] text-base">verified</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-[#0058bc]">
                Global Delivery Standards
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
