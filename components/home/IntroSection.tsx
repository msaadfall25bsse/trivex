export default function IntroSection() {
  return (
    <section className="w-full py-6 md:py-12 relative z-10">
      {/* Fully Transparent Blurred Glass Container (90% width on tablet/desktop, 5% margins, deep backdrop blur) */}
      <div className="w-full md:w-[90%] mx-auto bg-white/[0.05] backdrop-blur-2xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-white/60 shadow-[0_8px_32px_rgba(13,28,46,0.03)] glass-rim">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-3">
                WHO WE ARE
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">
                We eliminated typical agency friction by merging three senior disciplines into one unified engine.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed font-medium">
                Most technology firms excel in deep engineering but outsource creative strategy. Creative agencies deliver stunning visuals but fail on high-concurrency cloud backends. Marketing consultancies optimize funnels without technical command of product velocity.
              </p>

              {/* Frosted Glass Triad Callout Panel with Layered Depth */}
              <div className="p-8 glass-surface-card rounded-3xl border border-white/90 border-l-4 border-l-primary shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
                <p className="font-body-md text-body-md text-on-surface font-semibold leading-relaxed relative z-10">
                  TRIVEX operates on a direct triad: dedicated leadership over Technical Systems, Performance Acquisition, and Visual Brand Systems. One point of contact. Zero fragmented vendors. Guaranteed delivery.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-6 pt-5 border-t border-white/40 relative z-10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-subcard text-primary font-bold">
                    <span className="material-symbols-outlined text-base">terminal</span> Engineering
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-subcard text-on-surface font-bold">
                    <span className="material-symbols-outlined text-base">trending_up</span> Growth
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-subcard text-primary-container font-bold">
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
