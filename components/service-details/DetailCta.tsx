import Link from "next/link";

export default function DetailCta() {
  return (
    <section className="w-full bg-transparent pt-12 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="glass-card-dark relative bg-gradient-to-br from-[#0d1c2e]/85 via-[#132238]/85 to-[#091524]/85 backdrop-blur-2xl text-white rounded-3xl p-8 sm:p-10 md:p-16 overflow-hidden shadow-2xl border border-white/20 glass-rim">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/25 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>

          {/* Abstract Tech Watermark Grid */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-end pr-8">
            <span className="material-symbols-outlined text-[240px] leading-none">schema</span>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest mb-6 font-bold">
              <span className="w-2 h-2 rounded-full bg-primary-fixed animate-ping"></span>
              Direct Architecture Advisory
            </div>
            <h2 className="font-headline-xl text-headline-xl text-white tracking-tight mb-5 font-semibold leading-tight">
              Have a specific project in mind? Request a tailored proposal.
            </h2>
            <p className="font-body-lg text-body-lg text-outline-variant mb-8 leading-relaxed font-medium">
              Connect directly with our lead architects and performance strategists. Receive an engineering roadmap, competitive teardown, and transparent commercial breakdown within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                className="tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl shadow-lg font-bold tracking-wide group"
                href="/contact-us"
              >
                <span>Request Tailored Proposal</span>
                <span className="material-symbols-outlined text-lg ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="inline-flex items-center justify-center font-label-lg text-label-lg bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl transition-all font-semibold"
                href="/our-team"
              >
                Meet the Technical Partners
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
