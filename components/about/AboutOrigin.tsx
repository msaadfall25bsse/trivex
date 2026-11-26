export default function AboutOrigin() {
  return (
    <section className="w-full py-6 md:py-12 relative z-10">
      {/* Fully Transparent Blurred Glass Container (90% width on tablet/desktop, 5% margins, deep backdrop blur) */}
      <div className="w-full md:w-[90%] mx-auto bg-white/[0.05] backdrop-blur-2xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-white/60 shadow-[0_8px_32px_rgba(13,28,46,0.03)] glass-rim">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Spine */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-primary rounded-full"></span>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
                  Genesis &amp; Purpose
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-5 leading-tight">
                Architected to eliminate the agency divide.
              </h2>
              <p className="font-body-md text-body-md text-secondary leading-relaxed mb-7 font-medium">
                Traditional holding agencies isolate engineering, design, and marketing into disparate divisions. The result is chronic misalignment, duplicated budgets, and sluggish time-to-market.
              </p>

              {/* Founding Principle Glass Callout */}
              <div className="glass-surface-card p-7 rounded-3xl border border-white/90 border-l-4 border-l-primary shadow-lg glass-rim relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
                <p className="font-body-md text-body-md text-on-surface font-semibold mb-3 leading-relaxed relative z-10">
                  “Three specialized leads joined forces under an uncompromising thesis: build digital infrastructure without informational friction.”
                </p>
                <span className="font-label-sm text-label-sm uppercase text-primary tracking-wider font-bold relative z-10">
                  TRIVEX Founding Principle
                </span>
              </div>
            </div>

            {/* Right Content & Narrative Blocks */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="glass-surface-card p-6 sm:p-7 rounded-3xl glass-rim group">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 tactile-surface group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">terminal</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
                      Engineering Without Compromise
                    </h4>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed font-medium">
                      Our technical foundation originates in high-concurrency cloud architecture, microservices, and absolute code security. We build platforms configured to withstand global scale on day one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-surface-card p-6 sm:p-7 rounded-3xl glass-rim group">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center shrink-0 neumorphic-inset group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
                      Algorithmic Performance Growth
                    </h4>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed font-medium">
                      Growth is an exact science. By wiring analytics and conversion funnels directly into production architecture, we optimize client unit economics rather than vanity metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-surface-card p-6 sm:p-7 rounded-3xl glass-rim group">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high text-on-surface flex items-center justify-center shrink-0 neumorphic-inset group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">polyline</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
                      Ergonomic Industrial-Grade Design
                    </h4>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed font-medium">
                      Aesthetic polish serves cognitive speed. Every interaction pattern, typography hierarchy, and spatial rhythm is tailored to turn complex workflows into intuitive mechanics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
