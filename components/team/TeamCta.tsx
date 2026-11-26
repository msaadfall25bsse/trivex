import Link from 'next/link';

export default function TeamCta() {
  return (
    <section className="w-full bg-transparent pt-12 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="glass-card-dark relative bg-gradient-to-br from-[#0d1c2e]/85 via-[#132238]/85 to-[#091524]/85 backdrop-blur-2xl rounded-3xl overflow-hidden p-8 sm:p-10 md:p-16 text-white shadow-2xl border border-white/20 glass-rim">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-fixed animate-ping"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed font-bold">
                Direct Access
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-white tracking-tight mb-4">
              Schedule an introductory call with the founders.
            </h2>
            <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl mb-8 font-medium">
              Discuss your system architecture, global market expansion, or creative relaunch directly with TRIVEX’s three founding principals.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact-us"
                className="tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl shadow-lg tracking-wide font-bold group"
              >
                <span>Schedule Founder Consultation</span>
                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <div className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 text-outline-variant font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-primary-fixed text-base">schedule</span>
                <span>Typically replied within 4 business hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
