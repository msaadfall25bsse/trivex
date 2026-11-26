export default function ContactHero() {
  return (
    <section className="relative w-full bg-transparent py-12 sm:py-16 lg:py-20 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-subcard mb-5 glass-rim">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              Initiate Contact
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-semibold text-on-surface mb-4 tracking-tight leading-tight">
            Let us build something <span className="text-primary">exceptional</span> together.
          </h1>
          <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl font-medium">
            Tell us about your upcoming project or inquiry. Our founding partners will review and respond within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}
