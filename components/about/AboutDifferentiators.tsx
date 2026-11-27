import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface Differentiator {
  tag: string;
  icon: string;
  title: string;
  description: string;
  impact: string;
}

const differentiators: Differentiator[] = [
  {
    tag: "Direct Access",
    icon: "person_check",
    title: "No Middle-Management Disconnect",
    description:
      "Clients collaborate directly with specialized discipline principals. Requirements are never diluted through layers of non-technical account managers.",
    impact: "Immediate architectural decisions and 3x faster delivery cycles.",
  },
  {
    tag: "Cohesive Unit",
    icon: "sync_alt",
    title: "Synchronized Execution",
    description:
      "Engineers sit alongside product designers and performance marketers. Features are built with data telemetry and UX ergonomics fully wired from inception.",
    impact: "Zero post-launch refactoring due to uncommunicated marketing requirements.",
  },
  {
    tag: "Global Footprint",
    icon: "public",
    title: "Global Standards, Agile Agility",
    description:
      "We apply ISO 27001-grade security frameworks and Tier-1 deployment practices with the rapid turnaround of a dedicated boutique sprint squad.",
    impact: "Institutional enterprise security without bureaucratic stagnation.",
  },
];

function DifferentiatorCard({ item }: { item: Differentiator }) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-3xl p-7 sm:p-8 flex flex-col justify-between group h-full">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-label-sm text-label-sm uppercase font-bold text-[#0058bc] bg-[#0058bc]/10 border border-[#0058bc]/20 px-3 py-1 rounded-full">
            {item.tag}
          </span>
          <div className="w-10 h-10 rounded-xl bg-[#f4f7fb] border border-slate-200 text-[#0058bc] flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
          </div>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3 font-bold">
          {item.title}
        </h3>
        <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed mb-6 font-medium">
          {item.description}
        </p>
      </div>
      <div className="bg-[#f4f7fb] border border-slate-200 p-4 rounded-2xl">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#0058bc] font-bold block mb-1">
          Impact
        </span>
        <span className="font-body-sm text-body-sm text-slate-900 font-semibold leading-snug block">
          {item.impact}
        </span>
      </div>
    </div>
  );
}

export default function AboutDifferentiators() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-label-sm text-label-sm text-[#0058bc] uppercase tracking-widest font-bold mb-2 block">
            Architectural Differentiation
          </span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight mb-3">
            <SplitText text="The structural advantage of TRIVEX." effect="flip" replayOnScroll />
          </h2>
          <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-slate-600 font-medium">
            How our lean, lead-driven model compares against bloated legacy agencies.
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
            {differentiators.map((item) => (
              <ScrollStackItem key={item.title} itemClassName="!p-0 !bg-transparent">
                <DifferentiatorCard item={item} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item) => (
            <DifferentiatorCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
