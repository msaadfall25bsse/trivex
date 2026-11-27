export default function TeamHero() {
  return (
    <section className="relative w-full bg-transparent py-12 sm:py-16 lg:py-20 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        {/* Top Meta Track */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="inline-flex w-2 h-2 rounded-full bg-[#0058bc] animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold ml-1">
              Executive Directorate
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-600 font-label-md text-label-md font-medium">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#0058bc] text-base">token</span> 3 Principals
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#0058bc] text-base">domain_verification</span> Single Cohesive Mandate
            </span>
          </div>
        </div>

        {/* Hero Header & Asymmetric Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block px-3.5 py-1.5 bg-[#0058bc]/10 border border-[#0058bc]/20 text-[#0058bc] font-label-sm text-label-sm uppercase tracking-widest rounded-full mb-5 font-bold">
              Leadership &amp; Collective Mindset
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
              Three Founders.<br />
              <span className="text-[#0058bc]">One Shared Vision.</span>
            </h1>
            <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-slate-600 max-w-2xl font-medium">
              United across technology, marketing, and creative design to lead every client partnership directly from the top.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-white border border-slate-200 shadow-sm p-6 sm:p-7 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#f4f7fb] border border-slate-200 flex items-center justify-center text-[#0058bc]">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-slate-900 font-bold">
                  Director-Led Engagements
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-slate-600 font-medium leading-relaxed">
                Every system architecture, brand interface, and acquisition campaign is directly architected, authored, and verified by our founding partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
