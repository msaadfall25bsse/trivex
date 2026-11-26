import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="w-full bg-transparent pt-12 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="glass-card-dark relative bg-gradient-to-br from-[#0d1c2e]/85 via-[#132238]/85 to-[#091524]/85 backdrop-blur-2xl text-white rounded-3xl p-8 sm:p-10 md:p-16 overflow-hidden shadow-2xl border border-white/20 glass-rim">
          {/* Background Ambient Radial Highlights */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/25 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl flex flex-col items-start">
            {/* Glassmorphic Eyebrow Badge with Skeuomorphic Live Pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-primary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider mb-6 border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-fixed animate-ping"></span>
              Partnerships Open
            </div>

            <h2 className="font-headline-xl text-headline-xl text-white tracking-tight leading-tight mb-6 font-semibold">
              Ready to build with unified discipline?
            </h2>

            <p className="font-body-lg text-body-lg text-outline-variant mb-8 max-w-2xl leading-relaxed font-medium">
              Whether you are re-architecting an enterprise platform, launching a global product, or accelerating customer acquisition, our three minds are ready to execute your vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                className="w-full sm:w-auto tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 rounded-xl shadow-lg group font-bold"
                href="/contact-us"
              >
                <span>Initiate Project Brief</span>
                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-lg text-label-lg bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/25 px-8 py-3.5 rounded-xl transition-all duration-200 font-semibold shadow-sm"
                href="/our-team"
              >
                Meet the Leadership Team
              </Link>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-outline-variant font-mono">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed text-base">verified</span>
                NDA Protected
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed text-base">schedule</span>
                48-Hour Response SLA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
