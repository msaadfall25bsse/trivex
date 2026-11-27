export default function DetailMasthead() {
  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0058bc]/10 border border-[#0058bc]/20 rounded-full text-[#0058bc] font-label-sm text-label-sm uppercase tracking-widest mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0058bc] animate-pulse"></span>
              Deep-Dive Capabilities
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-semibold text-slate-900 tracking-tight leading-tight">
              Technical Specifications &amp; Service Breakdowns
            </h1>
            <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-slate-600 mt-4 max-w-2xl leading-relaxed font-medium">
              Surgical execution across engineered web software, programmatic performance growth, and modular brand systems. Structured with algorithmic clarity for enterprise CTOs and commercial leaders.
            </p>
          </div>

          {/* Metric Highlight Badge */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl sm:rounded-3xl flex items-center gap-4 self-start md:self-auto shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-[#f4f7fb] border border-slate-200 flex items-center justify-center text-[#0058bc]">
              <span className="material-symbols-outlined text-2xl">layers</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-slate-900 font-bold block leading-tight">
                3 Pillars
              </span>
              <span className="font-label-sm text-label-sm text-slate-600 uppercase tracking-wider font-semibold">
                Uncompromising Cohesion
              </span>
            </div>
          </div>
        </div>

        {/* Quick Jump Segmented Rail */}
        <div className="w-full bg-white border border-slate-200 shadow-sm p-2 rounded-2xl sm:rounded-3xl flex flex-wrap sm:flex-nowrap items-center gap-2">
          <a
            className="flex-1 py-3 px-4 text-center rounded-xl font-label-lg text-label-lg text-slate-800 hover:text-[#0058bc] hover:bg-[#f4f7fb] transition-all flex items-center justify-center gap-2 font-bold"
            href="#software-dev"
          >
            <span className="material-symbols-outlined text-[#0058bc] text-xl">terminal</span>
            <span>Software Development</span>
          </a>
          <a
            className="flex-1 py-3 px-4 text-center rounded-xl font-label-lg text-label-lg text-slate-800 hover:text-[#0058bc] hover:bg-[#f4f7fb] transition-all flex items-center justify-center gap-2 font-bold"
            href="#digital-marketing"
          >
            <span className="material-symbols-outlined text-[#0058bc] text-xl">query_stats</span>
            <span>Digital Marketing</span>
          </a>
          <a
            className="flex-1 py-3 px-4 text-center rounded-xl font-label-lg text-label-lg text-slate-800 hover:text-[#0058bc] hover:bg-[#f4f7fb] transition-all flex items-center justify-center gap-2 font-bold"
            href="#graphic-designing"
          >
            <span className="material-symbols-outlined text-[#0058bc] text-xl">palette</span>
            <span>Graphic Designing</span>
          </a>
        </div>
      </div>
    </section>
  );
}
