import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-transparent pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="glass-card-dark relative bg-gradient-to-br from-[#0d1c2e]/85 via-[#132238]/85 to-[#091524]/85 backdrop-blur-2xl text-white rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl border border-white/20 glass-rim">
          {/* Background Ambient Radial Highlights */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/25 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            {/* Glassmorphic Eyebrow Badge with Skeuomorphic Live Pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-primary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider mb-6 border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-fixed animate-ping"></span>
              GLOBAL CONSULTATIONS ACTIVE
            </div>

            <h2 className="font-headline-xl text-headline-xl text-white tracking-tight leading-tight mb-6 font-semibold">
              Ready to Build Your Next Digital Advantage?
            </h2>

            <p className="font-body-lg text-body-lg text-outline-variant mb-8 max-w-2xl leading-relaxed font-medium">
              Schedule a direct technical and architectural discovery session with our founding partners. Review feasibility, audit metrics, and map your strategic deployment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 rounded-xl shadow-lg group"
                href="/contact-us"
              >
                <span>Consult Our Team</span>
                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="tactile-surface inline-flex items-center justify-center font-label-lg text-label-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-3.5 rounded-xl backdrop-blur-md transition-all duration-200 active:scale-[0.98] font-semibold"
                href="/services"
              >
                Review Services Overview
              </Link>
            </div>

            {/* Micro Assurance Line with Skeuomorphic Inset Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-white/15 text-outline-variant font-label-sm text-label-sm uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed text-base">verified_user</span>
                NDA Protected
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed text-base">schedule</span>
                48h Executive Response
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed text-base">domain</span>
                Zero-Obligation Audit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
