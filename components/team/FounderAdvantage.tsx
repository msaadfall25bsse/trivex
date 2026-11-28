import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface Advantage {
  icon: string;
  label: string;
  title: string;
  desc: string;
  footer: string;
}

const advantages: Advantage[] = [
  {
    icon: "hub",
    label: "01 / Frictionless Flow",
    title: "Zero Delegation Gap",
    desc: "Strategic decisions bypass intermediary account management layers. Decisions on systems, campaigns, and video production protocols are made in real time by the founders responsible for delivering them.",
    footer: "Direct Partner Communications",
  },
  {
    icon: "interests",
    label: "02 / Tri-Core Synchronization",
    title: "Holistic Technical & Creative Alignment",
    desc: "Code never contradicts storytelling; video pacing drives campaign retention; marketing never runs ahead of platform capabilities. All three disciplines are integrated from day zero.",
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

function AdvantageItem({ adv }: { adv: Advantage }) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-7 sm:p-8 rounded-3xl flex flex-col justify-between group h-full">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-[#f4f7fb] border border-slate-200 text-[#0058bc] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-2xl">{adv.icon}</span>
        </div>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-1.5 font-mono">
          {adv.label}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3 font-bold">
          {adv.title}
        </h3>
        <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed mb-6 font-medium">
          {adv.desc}
        </p>
      </div>
      <div className="flex items-center gap-2 pt-4 border-t border-slate-200 text-slate-800 font-label-md text-label-md font-bold">
        <span className="material-symbols-outlined text-[#0058bc] text-base">check_circle</span>
        <span>{adv.footer}</span>
      </div>
    </div>
  );
}

export default function FounderAdvantage() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
            Institutional Rigor, Boutique Speed
          </span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight mb-4">
            <SplitText text="The Founder Leadership Advantage" effect="flip" replayOnScroll />
          </h2>
          <p className="font-body-md text-body-md text-slate-600 font-medium">
            Large enterprise agencies dilute accountability across layers of junior project coordinators. At TRIVEX, your roadmap is architected and owned directly by the executive team.
          </p>
        </div>

        {/* Mobile: ScrollStack */}
        <div className="md:hidden">
          <ScrollStack
            useWindowScroll
            smoothScroll={false}
            stackPosition={104}
            itemDistance={72}
            itemStackDistance={22}
            itemScale={0.04}
            baseScale={0.88}
            dimAmount={0.12}
            holdDistance={100}
          >
            {advantages.map((adv) => (
              <ScrollStackItem key={adv.title} itemClassName="!p-0 !bg-transparent">
                <AdvantageItem adv={adv} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv) => (
            <AdvantageItem key={adv.title} adv={adv} />
          ))}
        </div>
      </div>
    </section>
  );
}
