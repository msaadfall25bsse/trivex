export default function AboutHero() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-10 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0058bc]/10 border border-[#0058bc]/20 text-[#0058bc] mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0058bc] animate-pulse shrink-0"></span>
              <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider font-bold">
                About TRIVEX
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-semibold tracking-tight text-slate-900 mb-5 sm:mb-6 leading-tight">
              Three Minds.<br />
              <span className="text-[#0058bc]">One Vision.</span>
            </h1>

            <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
              Born from a conviction that technology, growth, and design should function as a unified engine rather than fragmented silos.
            </p>
          </div>

          {/* Metric Accent Rail */}
          <div className="flex flex-row lg:flex-col justify-around lg:justify-start gap-6 lg:gap-4 bg-white border border-slate-200 shadow-sm p-5 sm:p-6 rounded-2xl sm:rounded-3xl lg:min-w-[260px]">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-slate-900 font-extrabold tracking-tight">
                100%
              </span>
              <span className="font-label-sm text-[10px] sm:text-label-sm text-slate-600 uppercase tracking-wider font-bold mt-0.5">
                Discipline Integration
              </span>
            </div>
            <div className="w-px lg:w-full lg:h-px bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-[#0058bc] font-extrabold tracking-tight">
                Zero
              </span>
              <span className="font-label-sm text-[10px] sm:text-label-sm text-slate-600 uppercase tracking-wider font-bold mt-0.5">
                Departmental Bloat
              </span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mosaic Anchor (Asymmetric Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="md:col-span-8 bg-white border border-slate-200 shadow-sm p-3 rounded-3xl flex flex-col group">
            <div className="relative w-full h-full flex-1 rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[360px] md:min-h-[420px]">
              <img
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                alt="Modern architectural glass office at dusk with three enterprise technology directors analyzing a synchronized digital architecture blueprint"
                loading="lazy"
                decoding="async"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jzS1z_4XddokxYxaI4Ia4f0OgyG9GDDAKQFycmbW6WkVL1589yngz2xkGcTmNYpmoc5WWOpmEfxFVT6IF5hMuhvU_ihcOTnoSgUoBHy8JuqyAGBUmOlgL3BKPDfGmt_UkVL0-9Lth_B-kt989XE9gkW6mcXaAk0zp1cOD0HSy0RwtKAbYJ-kY1AL9SKkAu6tgt7umE7ng8x2XaQ8YaQGIKQMC7YCUaBF6DHMJLo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-5 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4 text-white">
                  <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-cyan-300 text-xl">verified_user</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md uppercase tracking-widest text-white font-bold">
                    Institutional Reliability with Elite Agility
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-white border border-slate-200 shadow-sm rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0058bc] text-white flex items-center justify-center mb-6 shadow-md shadow-[#0058bc]/20 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3 font-bold">
                Engineered Equilibrium
              </h3>
              <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed mb-6 font-medium">
                We eliminated the latency between high-fidelity interface design, enterprise system stability, and data-backed scale engines.
              </p>
            </div>
            <div className="space-y-3 bg-[#f4f7fb] border border-slate-200 p-5 rounded-2xl">
              <div className="flex items-center justify-between text-slate-900">
                <span className="font-label-sm text-label-sm uppercase font-bold text-slate-600">
                  Code Architecture
                </span>
                <span className="font-label-sm text-label-sm font-bold text-[#0058bc]">
                  Mission-Ready
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#0058bc] h-full rounded-full w-full"></div>
              </div>
              <div className="flex items-center justify-between text-slate-900 pt-1">
                <span className="font-label-sm text-label-sm uppercase font-bold text-slate-600">
                  Creative Precision
                </span>
                <span className="font-label-sm text-label-sm font-bold text-[#0058bc]">
                  Sub-pixel
                </span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
