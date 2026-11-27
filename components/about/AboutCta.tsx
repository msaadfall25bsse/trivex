import Link from "next/link";
import SplitText from "@/components/home/SplitText";

export default function AboutCta() {
  return (
    <section className="w-full bg-transparent pt-12 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="relative bg-white text-slate-900 rounded-3xl p-8 sm:p-10 md:p-16 overflow-hidden shadow-sm border border-slate-200">
          <div className="relative z-10 max-w-3xl flex flex-col items-start">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0058bc]/10 text-[#0058bc] font-label-sm text-label-sm uppercase font-bold tracking-wider mb-6 border border-[#0058bc]/20">
              <span className="w-2 h-2 rounded-full bg-[#0058bc] animate-pulse"></span>
              Partnerships Open
            </div>

            <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight leading-tight mb-6 font-semibold">
              <SplitText text="Ready to build with unified discipline?" effect="flip" replayOnScroll />
            </h2>

            <p className="font-body-lg text-body-lg text-slate-600 mb-8 max-w-2xl leading-relaxed font-medium">
              Whether you are re-architecting an enterprise platform, launching a global product, or accelerating customer acquisition, our three minds are ready to execute your vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-lg text-label-lg bg-[#0058bc] hover:bg-[#004696] text-white px-8 py-3.5 rounded-xl shadow-md shadow-[#0058bc]/20 group font-bold transition-all"
                href="/contact-us"
              >
                <span>Initiate Project Brief</span>
                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-lg text-label-lg bg-[#f4f7fb] hover:bg-slate-200/70 text-slate-900 border border-slate-200 px-8 py-3.5 rounded-xl transition-all duration-200 font-semibold"
                href="/our-team"
              >
                Meet the Leadership Team
              </Link>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bc] text-base">verified</span>
                NDA Protected
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bc] text-base">schedule</span>
                48-Hour Response SLA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
