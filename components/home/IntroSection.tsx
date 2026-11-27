import SplitText from "@/components/home/SplitText";

export default function IntroSection() {
  return (
    <section className="w-full bg-[#f4f7fb] py-10 md:py-16 relative z-10">
      <div className="w-full md:w-[90%] mx-auto bg-white/75 py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-slate-200/90 shadow-[0_8px_32px_rgba(15,23,42,0.05)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-3">
                WHO WE ARE
              </span>
              <SplitText
                tag="h2"
                text="We eliminated typical agency friction by merging three senior disciplines into one unified engine."
                className="font-headline-lg text-headline-lg text-slate-900 tracking-tight leading-tight"
                effect="flip"
                splitType="words, chars"
                delay={22}
                duration={1.0}
                staggerFrom="start"
                trigger="view"
                replayOnScroll
                mask
                threshold={0.1}
                rootMargin="-60px"
                textAlign="left"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-8">
              <p className="font-body-lg text-body-lg text-slate-600 leading-relaxed font-medium">
                Most technology firms excel in deep engineering but outsource creative strategy. Creative agencies deliver stunning visuals but fail on high-concurrency cloud backends. Marketing consultancies optimize funnels without technical command of product velocity.
              </p>

              {/* Light Glass Triad Callout Panel */}
              <div className="p-8 bg-white rounded-3xl border border-slate-200 border-l-4 border-l-[#0058bc] shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#0058bc]/5 rounded-full blur-2xl pointer-events-none"></div>
                <p className="font-body-md text-body-md text-slate-800 font-semibold leading-relaxed relative z-10">
                  TRIVEX operates on a direct triad: dedicated leadership over Technical Systems, Performance Acquisition, and Visual Brand Systems. One point of contact. Zero fragmented vendors. Guaranteed delivery.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-6 pt-5 border-t border-slate-200 relative z-10 text-slate-700 font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 text-[#0058bc] font-bold border border-blue-100">
                    <span className="material-symbols-outlined text-base">terminal</span> Engineering
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-900 font-bold border border-slate-200">
                    <span className="material-symbols-outlined text-base">trending_up</span> Growth
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 text-[#0058bc] font-bold border border-blue-100">
                    <span className="material-symbols-outlined text-base">palette</span> Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
