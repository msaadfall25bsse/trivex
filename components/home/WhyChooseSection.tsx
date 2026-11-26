export default function WhyChooseSection() {
  return (
    <section className="w-full py-6 md:py-12 relative z-10">
      {/* Fully Transparent Blurred Glass Container (90% width on tablet/desktop, 5% margins, deep backdrop blur) */}
      <div className="w-full md:w-[90%] mx-auto bg-white/[0.05] backdrop-blur-2xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-white/60 shadow-[0_8px_32px_rgba(13,28,46,0.03)] glass-rim">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">
              PRECISION ADVANTAGE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Engineered to Outperform Conventional Agency Models
            </h2>
          </div>

          {/* Bento Grid: 4 Precision Advantage Cards with Glassmorphism & Skeuomorphic Inset Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Advantage 1 */}
          <div className="glass-surface-card p-7 rounded-3xl glass-rim flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center mb-5 neumorphic-inset group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">supervisor_account</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold text-lg">
                Founder-Led Precision
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                No inexperienced middle-managers. Senior triad partners oversee project architecture directly from day one.
              </p>
            </div>
            <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl glass-subcard flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase font-mono text-primary font-bold">
                Direct Access
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            </div>
          </div>

          {/* Advantage 2 */}
          <div className="glass-surface-card p-7 rounded-3xl glass-rim flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center mb-5 neumorphic-inset group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">dataset</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold text-lg">
                Integrated Capabilities
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                Marketing campaigns align seamlessly with system architecture; design components map directly to reusable code.
              </p>
            </div>
            <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl glass-subcard flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase font-mono text-primary font-bold">
                Zero Friction
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            </div>
          </div>

          {/* Advantage 3 */}
          <div className="glass-surface-card p-7 rounded-3xl glass-rim flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center mb-5 neumorphic-inset group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">analytics</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold text-lg">
                Performance Obsession
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                We anchor every deliverable to strict business metrics: compute latency, acquisition CAC, and conversion rate.
              </p>
            </div>
            <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl glass-subcard flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase font-mono text-primary font-bold">
                Metric Bound
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            </div>
          </div>

          {/* Advantage 4 */}
          <div className="glass-surface-card p-7 rounded-3xl glass-rim flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center mb-5 neumorphic-inset group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">published_with_changes</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold text-lg">
                Transparent Execution
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                Bi-weekly staging demos, live git repositories, and open telemetry dashboards give complete visibility.
              </p>
            </div>
            <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl glass-subcard flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase font-mono text-primary font-bold">
                100% Visibility
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
