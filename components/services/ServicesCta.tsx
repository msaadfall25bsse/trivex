import Link from "next/link";
import SplitText from "@/components/home/SplitText";

export default function ServicesCta() {
  return (
    <section className="w-full pt-12 pb-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="relative bg-white text-slate-900 rounded-3xl p-8 sm:p-10 md:p-16 shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0058bc]/10 text-[#0058bc] font-label-sm text-label-sm uppercase tracking-widest font-bold border border-[#0058bc]/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#0058bc] animate-pulse"></span>
                Start Your Architecture
              </span>
              <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight mt-2 mb-4">
                <SplitText text="Ready to Accelerate Your Enterprise Ecosystem?" effect="flip" replayOnScroll />
              </h2>
              <p className="font-body-lg text-body-lg text-slate-600 max-w-2xl leading-relaxed mb-6 font-medium">
                Connect with our practice leads for a direct technical review, timeline assessment, and scoping analysis within 24 operational hours.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-slate-600 font-label-md text-label-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0058bc] text-lg">schedule</span>
                  <span>24-Hour Scoping Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0058bc] text-lg">verified</span>
                  <span>Direct Access to Principal Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0058bc] text-lg">lock</span>
                  <span>Mutual NDA by Default</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                className="inline-flex items-center justify-center font-label-lg text-label-lg bg-[#0058bc] hover:bg-[#004696] text-white px-8 py-4 rounded-xl shadow-md shadow-[#0058bc]/20 text-center font-bold tracking-wide group transition-all"
                href="/contact-us"
              >
                <span>Submit Project Scope</span>
                <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="inline-flex items-center justify-center font-label-lg text-label-lg bg-[#f4f7fb] hover:bg-slate-200/70 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl transition-all text-center font-semibold"
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
