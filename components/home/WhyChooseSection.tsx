import SplitText from "@/components/home/SplitText";
import BorderGlow from "@/components/home/BorderGlow";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";

const advantageCards = [
  {
    id: "founder-led",
    icon: "supervisor_account",
    iconColor: "text-cyan-300",
    title: "Founder-Led Expertise",
    description:
      "Work directly with our founding team, ensuring strategic alignment, clear communication, and hands-on oversight from the very beginning.",
    badge: "Direct Collaboration",
    badgeColor: "text-cyan-300",
  },
  {
    id: "integrated",
    icon: "hub",
    iconColor: "text-[#0058bc]",
    title: "Integrated Capabilities",
    description:
      "Technology, creative design, and digital marketing work together to create cohesive solutions that support your business objectives.",
    badge: "Connected Solutions",
    badgeColor: "text-[#0058bc]",
  },
  {
    id: "results-driven",
    icon: "monitoring",
    iconColor: "text-cyan-300",
    title: "Results-Driven Approach",
    description:
      "Every project is guided by clear objectives, measurable outcomes, and a continuous focus on improving performance and delivering value.",
    badge: "Measurable Impact",
    badgeColor: "text-cyan-300",
  },
  {
    id: "transparent",
    icon: "sync_alt",
    iconColor: "text-[#0058bc]",
    title: "Transparent Execution",
    description:
      "Stay informed at every stage through clear communication, structured workflows, regular updates, and transparent project delivery.",
    badge: "Clear Communication",
    badgeColor: "text-[#0058bc]",
  },
];

function AdvantageCard({ card }: { card: (typeof advantageCards)[number] }) {
  return (
    <BorderGlow
      edgeSensitivity={48}
      glowColor="210 90 60"
      backgroundColor="#0d111a"
      borderRadius={24}
      glowRadius={48}
      glowIntensity={0.45}
      coneSpread={35}
      animated
      colors={["#0058bc", "#38bdf8", "#0070eb"]}
      className="h-full"
    >
      <div className="p-7 flex flex-col justify-between h-full group">
        <div>
          <div
            className={`w-12 h-12 rounded-2xl bg-white/10 ${card.iconColor} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10`}
          >
            <span className="material-symbols-outlined text-2xl">{card.icon}</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-white mb-2.5 font-bold text-lg">
            {card.title}
          </h3>
          <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
            {card.description}
          </p>
        </div>
        <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between gap-2">
          <span className={`font-label-sm text-label-sm ${card.badgeColor} font-bold uppercase`}>
            {card.badge}
          </span>
          <span className="material-symbols-outlined text-[#0058bc] text-sm">arrow_forward</span>
        </div>
      </div>
    </BorderGlow>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-black py-10 md:py-16 relative z-10">
      <div className="w-full md:w-[90%] mx-auto bg-white/[0.04] backdrop-blur-xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              PRECISION ADVANTAGE
            </span>
            <SplitText
              tag="h2"
              text="A Smarter Approach to Digital Excellence"
              className="font-headline-lg text-headline-lg text-white tracking-tight"
              effect="flip"
              splitType="words, chars"
              delay={25}
              duration={1.0}
              staggerFrom="start"
              trigger="view"
              replayOnScroll
              mask
              threshold={0.1}
              rootMargin="-60px"
              textAlign="left"
            />
            <p className="font-body-md text-body-md text-white/80 leading-relaxed font-medium mt-4 max-w-xl">
              Bringing technology, creative thinking, and digital strategy together to build meaningful business outcomes.
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
              dimAmount={0.22}
              holdDistance={100}
            >
              {advantageCards.map((card) => (
                <ScrollStackItem
                  key={card.id}
                  itemClassName="!p-0 !bg-transparent"
                >
                  <AdvantageCard card={card} />
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

          {/* Desktop & Tablet: 4-Column Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantageCards.map((card) => (
              <AdvantageCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
