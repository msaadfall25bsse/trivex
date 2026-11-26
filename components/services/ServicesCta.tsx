import Link from "next/link";

export default function ServicesCta() {
  return (
    <section className="w-full pt-12 pb-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="glass-card-dark relative bg-gradient-to-br from-[#0d1c2e]/85 via-[#132238]/85 to-[#091524]/85 backdrop-blur-2xl text-white rounded-3xl p-8 sm:p-10 md:p-16 shadow-2xl border border-white/20 glass-rim overflow-hidden">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest font-bold border border-white/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-fixed animate-ping"></span>
                Start Your Architecture
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white tracking-tight mt-2 mb-4">
                Ready to Accelerate Your Enterprise Ecosystem?
              </h2>
              <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl leading-relaxed mb-6 font-medium">
                Connect with our practice leads for a direct technical review, timeline assessment, and scoping analysis within 24 operational hours.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-surface-variant font-label-md text-label-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed text-lg">schedule</span>
                  <span>24-Hour Scoping Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed text-lg">verified</span>
                  <span>Direct Access to Principal Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed text-lg">lock</span>
                  <span>Mutual NDA by Default</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                className="tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl shadow-lg text-center font-bold tracking-wide group"
                href="/contact-us"
              >
                <span>Submit Project Scope</span>
                <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="inline-flex items-center justify-center font-label-lg text-label-lg bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl transition-all text-center font-semibold shadow-sm"
                href="/about-us"
              >
                Explore Our Vision
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
