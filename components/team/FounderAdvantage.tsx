const advantages = [
  {
    icon: "hub",
    label: "01 / Frictionless Flow",
    title: "Zero Delegation Gap",
    desc: "Strategic decisions bypass intermediary account management layers. Decisions on systems, campaigns, and design protocols are made in real time by the founders responsible for delivering them.",
    footer: "Direct Partner Communications",
  },
  {
    icon: "interests",
    label: "02 / Tri-Core Synchronization",
    title: "Holistic Technical & Creative Alignment",
    desc: "Code never contradicts design; branding never impairs performance; marketing campaigns never run ahead of platform capabilities. All three disciplines are integrated from day zero.",
    footer: "Synchronized Architecture",
  },
  {
    icon: "handshake",
    label: "03 / Ultimate Guarantee",
    title: "Direct Partner Accountability",
    desc: "Our reputation is on the line with every deployment. Our founders sign off on every release, personally oversee security audits, and stand behind every guaranteed benchmark.",
    footer: "Uncompromising Ownership",
  },
];

export default function FounderAdvantage() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">
            Institutional Rigor, Boutique Speed
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
            The Founder Leadership Advantage
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant font-medium">
            Large enterprise agencies dilute accountability across layers of junior project coordinators. At TRIVEX, your roadmap is architected and owned directly by the executive team.
          </p>
        </div>

        {/* 3 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="glass-card-pro p-7 sm:p-8 rounded-3xl glass-rim flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl glass-subcard text-primary flex items-center justify-center mb-6 neumorphic-inset group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">{adv.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-1.5 font-mono">
                  {adv.label}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 font-bold">
                  {adv.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6 font-medium">
                  {adv.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/40 text-on-surface font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>{adv.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
