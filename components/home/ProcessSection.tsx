import SplitText from "@/components/home/SplitText";
import BorderGlow from "@/components/home/BorderGlow";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";

const processSteps = [
  {
    step: "01",
    icon: "search_insights",
    iconColor: "text-cyan-300",
    title: "Discovery & Strategy",
    description:
      "Technical feasibility assessment, KPI benchmarks, target audience taxonomy, and competitive gap auditing.",
    footerIcon: "timer",
    footerLabel: "Scope & Architecture Audit",
  },
  {
    step: "02",
    icon: "architecture",
    iconColor: "text-[#0058bc]",
    title: "Architecture & Design",
    description:
      "Wireframe blueprints, microservice infrastructure modeling, brand design tokens, and technical documentation.",
    footerIcon: "design_services",
    footerLabel: "Interactive Prototype Gate",
  },
  {
    step: "03",
    icon: "code_blocks",
    iconColor: "text-cyan-300",
    title: "Agile Execution",
    description:
      "Rapid two-week sprint cycles, automated CI/CD unit testing, conversion ad asset rendering, and QA telemetry.",
    footerIcon: "bolt",
    footerLabel: "Continuous CI/CD Delivery",
  },
  {
    step: "04",
    icon: "rocket_launch",
    iconColor: "text-[#0058bc]",
    title: "Launch & Optimization",
    description:
      "Zero-downtime production cutover, ongoing algorithmic CRO, continuous code hardening, and global scaling.",
    footerIcon: "verified",
    footerLabel: "Zero-Downtime Guarantee",
  },
];

function ProcessCard({ item }: { item: (typeof processSteps)[number] }) {
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
      <div className="h-full p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0058bc] to-cyan-300 font-extrabold text-3xl font-headline-md tracking-tighter">
              {item.step}
            </span>
            <div
              className={`w-12 h-12 rounded-2xl bg-white/10 ${item.iconColor} flex items-center justify-center shadow-sm border border-white/10 group-hover:scale-105 transition-transform`}
            >
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
            {item.title}
          </h3>
          <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
        <div className="mt-6 pt-3 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2 text-white/80">
          <span className="material-symbols-outlined text-[#0058bc] text-base">
            {item.footerIcon}
          </span>
          <span className="font-label-sm text-label-sm uppercase font-semibold">
            {item.footerLabel}
          </span>
        </div>
      </div>
    </BorderGlow>
  );
}

export default function ProcessSection() {
  return (
    <section className="w-full bg-black py-10 md:py-16 relative z-10">
      <BorderGlow
        edgeSensitivity={48}
        glowColor="210 90 60"
        backgroundColor="#0a0c10"
        borderRadius={24}
        glowRadius={48}
        glowIntensity={0.45}
        coneSpread={35}
        animated
        colors={["#0058bc", "#38bdf8", "#0070eb"]}
        className="w-full md:w-[90%] mx-auto"
      >
        <div className="py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
                PRECISION ROADMAP
              </span>
              <SplitText
                tag="h2"
                text="The 4-Step Triad Delivery Framework"
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
                textAlign="center"
              />
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
                {processSteps.map((item) => (
                  <ScrollStackItem
                    key={item.step}
                    itemClassName="!p-0 !bg-transparent"
                  >
                    <ProcessCard item={item} />
                  </ScrollStackItem>
                ))}
              </ScrollStack>
            </div>

            {/* Desktop & Tablet: 4-Column Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {processSteps.map((item) => (
                <ProcessCard key={item.step} item={item} />
              ))}
            </div>
          </div>
        </div>
      </BorderGlow>
    </section>
  );
}
