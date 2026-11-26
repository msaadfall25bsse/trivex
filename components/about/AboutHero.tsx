export default function AboutHero() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-10 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Glassmorphic Eyebrow Badge with Skeuomorphic Live Pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-subcard text-primary mb-5 sm:mb-6 shadow-sm glass-rim">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
              <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider font-bold">
                About TRIVEX
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-semibold tracking-tight text-on-surface mb-5 sm:mb-6 leading-tight">
              Three Minds.<br />
              <span className="text-primary">One Vision.</span>
            </h1>

            <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-secondary max-w-2xl leading-relaxed font-medium">
              Born from a conviction that technology, growth, and design should function as a unified engine rather than fragmented silos.
            </p>
          </div>

          {/* Metric Accent Rail (Glassmorphic Bento Card) */}
          <div className="flex flex-row lg:flex-col justify-around lg:justify-start gap-6 lg:gap-4 glass-card-pro p-5 sm:p-6 rounded-2xl sm:rounded-3xl lg:min-w-[260px] glass-rim">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
                100%
              </span>
              <span className="font-label-sm text-[10px] sm:text-label-sm text-secondary uppercase tracking-wider font-bold mt-0.5">
                Discipline Integration
              </span>
            </div>
            <div className="w-px lg:w-full lg:h-px bg-surface-container-highest/80"></div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary font-extrabold tracking-tight">
                Zero
              </span>
              <span className="font-label-sm text-[10px] sm:text-label-sm text-secondary uppercase tracking-wider font-bold mt-0.5">
                Departmental Bloat
              </span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mosaic Anchor (Asymmetric Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="md:col-span-8 glass-card-pro p-3 rounded-3xl glass-rim flex flex-col group">
            <div className="relative w-full h-full flex-1 rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[360px] md:min-h-[420px]">
              <img
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                alt="Modern architectural glass office at dusk with three enterprise technology directors analyzing a synchronized digital architecture blueprint"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jzS1z_4XddokxYxaI4Ia4f0OgyG9GDDAKQFycmbW6WkVL1589yngz2xkGcTmNYpmoc5WWOpmEfxFVT6IF5hMuhvU_ihcOTnoSgUoBHy8JuqyAGBUmOlgL3BKPDfGmt_UkVL0-9Lth_B-kt989XE9gkW6mcXaAk0zp1cOD0HSy0RwtKAbYJ-kY1AL9SKkAu6tgt7umE7ng8x2XaQ8YaQGIKQMC7YCUaBF6DHMJLo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c2e]/85 via-transparent to-transparent flex items-end p-5 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4 text-on-primary">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-fixed text-xl">verified_user</span>
                  </div>
                  <span className="font-label-md text-xs sm:text-label-md uppercase tracking-widest text-white font-bold">
                    Institutional Reliability with Elite Agility
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 glass-card-pro rounded-3xl p-7 sm:p-8 flex flex-col justify-between glass-rim relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 tactile-surface group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 font-bold">
                Engineered Equilibrium
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-6 font-medium">
                We eliminated the latency between high-fidelity interface design, enterprise system stability, and data-backed scale engines.
              </p>
            </div>
            <div className="space-y-3 glass-subcard p-5 rounded-2xl">
              <div className="flex items-center justify-between text-on-surface">
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                  Code Architecture
                </span>
                <span className="font-label-sm text-label-sm font-bold text-primary">
                  Mission-Ready
                </span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full w-full"></div>
              </div>
              <div className="flex items-center justify-between text-on-surface pt-1">
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                  Creative Precision
                </span>
                <span className="font-label-sm text-label-sm font-bold text-primary">
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
