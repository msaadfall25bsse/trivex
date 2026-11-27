import SplitText from "@/components/home/SplitText";

export default function AboutOrigin() {
  return (
    <section className="w-full py-6 md:py-12 relative z-10">
      <div className="w-full md:w-[90%] mx-auto bg-white py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Spine */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-[#0058bc] rounded-full"></span>
                <span className="font-label-sm text-label-sm text-[#0058bc] uppercase tracking-widest font-bold">
                  Genesis &amp; Purpose
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight mb-5 leading-tight">
                <SplitText text="Architected to eliminate the agency divide." effect="flip" replayOnScroll />
              </h2>
              <p className="font-body-md text-body-md text-slate-600 leading-relaxed mb-7 font-medium">
                Traditional holding agencies isolate engineering, design, and marketing into disparate divisions. The result is chronic misalignment, duplicated budgets, and sluggish time-to-market.
              </p>

              {/* Founding Principle Callout */}
              <div className="bg-[#f4f7fb] p-7 rounded-3xl border border-slate-200 border-l-4 border-l-[#0058bc] shadow-sm relative overflow-hidden">
                <p className="font-body-md text-body-md text-slate-900 font-semibold mb-3 leading-relaxed relative z-10">
                  “Three specialized leads joined forces under an uncompromising thesis: build digital infrastructure without informational friction.”
                </p>
                <span className="font-label-sm text-label-sm uppercase text-[#0058bc] tracking-wider font-bold relative z-10">
                  TRIVEX Founding Principle
                </span>
              </div>
            </div>

            {/* Right Content & Narrative Blocks */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="bg-[#f4f7fb] border border-slate-200 p-6 sm:p-7 rounded-3xl group hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0058bc] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0058bc]/20 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">terminal</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-1.5 font-bold">
                      Engineering Without Compromise
                    </h4>
                    <p className="font-body-md text-body-md text-slate-600 leading-relaxed font-medium">
                      Our technical foundation originates in high-concurrency cloud architecture, microservices, and absolute code security. We build platforms configured to withstand global scale on day one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f4f7fb] border border-slate-200 p-6 sm:p-7 rounded-3xl group hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0058bc] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-1.5 font-bold">
                      Algorithmic Performance Growth
                    </h4>
                    <p className="font-body-md text-body-md text-slate-600 leading-relaxed font-medium">
                      Growth is an exact science. By wiring analytics and conversion funnels directly into production architecture, we optimize client unit economics rather than vanity metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f4f7fb] border border-slate-200 p-6 sm:p-7 rounded-3xl group hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">polyline</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-1.5 font-bold">
                      Ergonomic Industrial-Grade Design
                    </h4>
                    <p className="font-body-md text-body-md text-slate-600 leading-relaxed font-medium">
                      Aesthetic polish serves cognitive speed. Every interaction pattern, typography hierarchy, and spatial rhythm is tailored to turn complex workflows into intuitive mechanics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
