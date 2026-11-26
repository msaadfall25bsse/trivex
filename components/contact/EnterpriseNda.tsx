export default function EnterpriseNda() {
  return (
    <section className="relative w-full bg-transparent max-w-7xl mx-auto px-margin-mobile md:px-margin pt-12 pb-24 z-10">
      <div className="w-full glass-card-pro rounded-3xl overflow-hidden glass-rim grid grid-cols-1 lg:grid-cols-12 items-stretch group">
        <div className="lg:col-span-7 p-7 sm:p-10 md:p-12 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-subcard mb-5 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">
                Enterprise Dispatch
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-bold">
              Need an NDA executed prior to your discovery sync?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-7 font-medium leading-relaxed">
              Send your standardized legal mutual NDA documentation directly to our compliance desk or download our mutual enterprise template.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="tactile-button inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md"
              href="mailto:legal@trivexagency.com?subject=Mutual%20NDA%20Execution%20Request"
            >
              <span className="material-symbols-outlined text-base">file_download</span>
              <span>Request TRIVEX Mutual NDA</span>
            </a>
            <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">
              Typically approved within 2 hours
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADcQDRJGop9j83WHE7yfnnNCeqqUzknDsid8RskVWfbLPfPht1WghxryXnv7LnEYl5YagO4vhBnNHoAwXZ3hEJv7vlWzJNix1W7tPvhyJ9Rn8yDpkK2OXclorwL2B2iL4nNt2RQXlyhSQkTEAyLBCmW6G_Zqyms2pKL1lbSHzq8_pLDV88s1u7UEavPYKWTp_7OypGuLGmKLuYbXZAvLvXzq6GoQhbH2Dcmvhdkh8p')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent flex items-end p-6">
            <span className="font-label-sm text-label-sm uppercase font-bold text-white tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary-fixed">pin_drop</span>
              Financial District • NYC Hub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
