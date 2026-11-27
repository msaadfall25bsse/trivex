import Link from "next/link";
import SplitText from "@/components/home/SplitText";

export default function TeamCta() {
  return (
    <section className="w-full bg-transparent pt-12 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="relative bg-white rounded-3xl overflow-hidden p-8 sm:p-10 md:p-16 text-slate-900 shadow-sm border border-slate-200">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0058bc]/10 border border-[#0058bc]/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0058bc] animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold">
                Direct Access
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-slate-900 tracking-tight mb-4">
              <SplitText text="Schedule an introductory call with the founders." effect="flip" replayOnScroll />
            </h2>
            <p className="font-body-lg text-body-lg text-slate-600 max-w-2xl mb-8 font-medium">
              Discuss your system architecture, global market expansion, or creative relaunch directly with TRIVEX’s three founding principals.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center font-label-lg text-label-lg bg-[#0058bc] hover:bg-[#004696] text-white px-8 py-4 rounded-xl shadow-md shadow-[#0058bc]/20 tracking-wide font-bold group transition-all"
              >
                <span>Schedule Founder Consultation</span>
                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <div className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 text-slate-600 font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[#0058bc] text-base">schedule</span>
                <span>Typically replied within 4 business hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
