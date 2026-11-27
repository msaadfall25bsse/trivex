import Link from "next/link";
import SplitText from "@/components/home/SplitText";

export default function DetailCta() {
  return (
    <section className="w-full bg-transparent pt-12 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="relative bg-white text-slate-900 rounded-3xl p-8 sm:p-10 md:p-16 overflow-hidden shadow-sm border border-slate-200">
          {/* Abstract Tech Watermark Grid */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.04] pointer-events-none flex items-center justify-end pr-8 text-[#0058bc]">
            <span className="material-symbols-outlined text-[240px] leading-none">schema</span>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0058bc]/10 border border-[#0058bc]/20 rounded-full text-[#0058bc] font-label-sm text-label-sm uppercase tracking-widest mb-6 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0058bc] animate-pulse"></span>
              Direct Architecture Advisory
            </div>
            <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-5 font-semibold leading-tight">
              <SplitText text="Have a specific project in mind? Request a tailored proposal." effect="flip" replayOnScroll />
            </h2>
            <p className="font-body-lg text-body-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Connect directly with our lead architects and performance strategists. Receive an engineering roadmap, competitive teardown, and transparent commercial breakdown within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                className="inline-flex items-center justify-center font-label-lg text-label-lg bg-[#0058bc] hover:bg-[#004696] text-white px-8 py-4 rounded-xl shadow-md shadow-[#0058bc]/20 font-bold tracking-wide group transition-all"
                href="/contact-us"
              >
                <span>Request Tailored Proposal</span>
                <span className="material-symbols-outlined text-lg ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="inline-flex items-center justify-center font-label-lg text-label-lg bg-[#f4f7fb] hover:bg-slate-200/70 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl transition-all font-semibold"
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
