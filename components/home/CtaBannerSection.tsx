import Link from "next/link";
import SplitText from "@/components/home/SplitText";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-[#f4f7fb] pt-10 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 text-slate-900 rounded-3xl p-10 md:p-16 overflow-hidden shadow-xl border border-slate-200">
          {/* Background Ambient Radial Highlights */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#0058bc]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            {/* Light Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0058bc] font-label-sm text-label-sm uppercase font-bold tracking-wider mb-6 border border-blue-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0058bc] animate-ping"></span>
              GLOBAL CONSULTATIONS ACTIVE
            </div>

            <SplitText
              tag="h2"
              text="Ready to Build Your Next Digital Advantage?"
              className="font-headline-xl text-headline-xl text-slate-900 tracking-tight leading-tight mb-6 font-semibold"
              effect="flip"
              splitType="words, chars"
              delay={25}
              duration={1.0}
              staggerFrom="start"
              trigger="view"
              replayOnScroll
              mask
              threshold={0.1}
              rootMargin="-60px"
              textAlign="left"
            />

            <p className="font-body-lg text-body-lg text-slate-600 mb-8 max-w-2xl leading-relaxed font-medium">
              Schedule a direct technical and architectural discovery session with our founding partners. Review feasibility, audit metrics, and map your strategic deployment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-[#0058bc] hover:bg-[#004ba3] text-white px-8 py-3.5 rounded-xl shadow-lg shadow-[#0058bc]/25 group"
                href="/contact-us"
              >
                <span>Consult Our Team</span>
                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="tactile-surface inline-flex items-center justify-center font-label-lg text-label-lg bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98] font-semibold"
                href="/services"
              >
                Review Services Overview
              </Link>
            </div>

            {/* Micro Assurance Line */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-slate-200 text-slate-600 font-label-sm text-label-sm uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bc] text-base">verified_user</span>
                NDA Protected
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bc] text-base">schedule</span>
                48h Executive Response
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bc] text-base">domain</span>
                Zero-Obligation Audit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
