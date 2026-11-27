import GlassSlabSection from "@/components/layout/GlassSlabSection";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface DesignScope {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  spanTwo: boolean;
}

const designScopes: DesignScope[] = [
  {
    icon: "auto_stories",
    title: "Brand Identity",
    desc: "Comprehensive corporate guidelines, color hierarchy matrices, accessibility-tested type scales, tone of voice rules, and cross-channel brand books.",
    tags: ["Tokens", "Guidelines", "Brand Book"],
    spanTwo: false,
  },
  {
    icon: "draw",
    title: "Logo Design",
    desc: "Mathematically balanced vector marks, responsive wordmarks, emblems, and app icon treatments engineered for legibility from 16px favicons to building billboards.",
    tags: ["Vector Marks", "Scalable SVG", "Responsive"],
    spanTwo: false,
  },
  {
    icon: "perm_media",
    title: "Social Media Graphics",
    desc: "High-impact LinkedIn carousel decks, Twitter visual teasers, Instagram campaign systems, and modular Figma asset libraries for instant internal generation.",
    tags: ["Carousels", "Figma Kits", "Templates"],
    spanTwo: false,
  },
  {
    icon: "campaign",
    title: "Marketing Creatives",
    desc: "High-converting programmatic display advertising packs, enterprise investor pitch presentations, trade show exhibits, and one-sheet PDF sales sheets.",
    tags: ["Keynotes / Pitch", "Display Banners", "Print Production"],
    spanTwo: false,
  },
  {
    icon: "devices",
    title: "UI/UX Design & Prototyping",
    desc: "Frictionless user experiences validated by user journey mapping, low-fidelity wireframing, and pixel-precise interactive prototypes in Figma. Full design token systems synced directly into React component libraries.",
    tags: ["Interactive Prototypes", "Figma Tokens", "User Testing", "WCAG AAA Compliance"],
    spanTwo: true,
  },
];

const deliverySteps = [
  {
    step: "1",
    title: "Concept Exploration",
    desc: "Visual moodboarding, structural territory definition, typography pairing studies, and high-concept diverge sprints.",
  },
  {
    step: "2",
    title: "Design Iterations",
    desc: "Collaborative Figma walkthroughs, asynchronous Loom feedback loops, stress testing across dark/light contrast.",
  },
  {
    step: "3",
    title: "Master Component Export",
    desc: "Handover of production-ready vector assets, SVG sprite trees, dynamic design tokens, and comprehensive developer documentation.",
  },
];

const synergyCards = [
  {
    tag: "Engineering",
    title: "Microservices at Scale",
    desc: "Architected for 50k+ continuous requests per second with automated Kubernetes scaling.",
    alt: "Enterprise software engineer reviewing high-concurrency code and real-time cloud microservices deployment metrics",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDWwVp9reX_-rFKE6R9d5_ObAj9xfXwLMY7Gu1Bbk_xSrNWMMqw-5vKfcpCmRnYx9EDTn1XDa7VrDFOxzUDZAYSMTQAOpWRXR4lVCnBEjGhBXTBM6Mt-Si8E0-PfFo560o70LPvQuHIQHVXxXeTu80oyo2BarZu0YwouESh1jpomdD6BDSfH03OiP25gArsj2FTff-w2pTj8nxymosf4h3cipbrFnwfMLnFdm6nydZ",
  },
  {
    tag: "Growth Acquisition",
    title: "Algorithmic Attribution",
    desc: "Full-funnel pipeline tracking resulting in 3.4x average ROAS across paid search and social.",
    alt: "Modern data analyst workstation displaying programmatic marketing analytics",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuDj-0WitwCfIYJprOdWehU69xnELbYqfODY3zIIjxL4zsPpoQNqIwuT0QccTjDbFw_9yYCSZdbvX0jLZyLD0PbbkSTpKHmg0dgg6J8bhf8wAt9x1tl1gcaLA9GlhS0srTuBFSCPr5D1btjWzhQLQcmsgeDuOVuGlJTtyuNaXJL1VsUrrOXCSm8pmm8aLHe9IEFNKgIaapsePanQcy3wnb6FbIRinpSZRcfpV9HNNE",
  },
  {
    tag: "Design System",
    title: "Figma-to-Code Pipeline",
    desc: "Systemized modular components reducing frontend development cycle turnaround by 40%.",
    alt: "Digital product design lead fine-tuning an enterprise design system in Figma",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKKHAkBRgyFLMjQW0hhhfE8RVYQEOowHHUDKs_1rCRd9FUAEC0VUvI9mrHO1SuCjjpe1rC-5I68l3f9KCbE8BpQ9iYgp4icNnYXFw3FJE7pKnAh2BD9qTpO5WbbK1rduGpRD2_WdhPTg2xCqVmxJs5NE5hwHpDeMZSOTI9a2bKfzskIsz82XjZh9VfnyCQozYTQWmpmVTZ1Y9JD9fYZqcyAz5_S5Ak_yaeOtkCYkZS",
  },
];

function DesignCard({ item }: { item: DesignScope }) {
  return (
    <div
      className={`bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 rounded-3xl flex flex-col justify-between group h-full ${
        item.spanTwo ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        <div className="w-11 h-11 rounded-2xl bg-[#f4f7fb] border border-slate-200 text-[#0058bc] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-xl">{item.icon}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-2 font-bold">
          {item.title}
        </h3>
        <p
          className={`font-body-sm text-body-sm text-slate-600 mb-6 font-medium leading-relaxed ${
            item.spanTwo ? "max-w-2xl" : ""
          }`}
        >
          {item.desc}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-[#f4f7fb] border border-slate-200 rounded-lg text-slate-700 font-label-sm text-label-sm font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DesignDetail() {
  return (
    <>
      <GlassSlabSection id="graphic-designing">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 text-[#0058bc] font-label-sm text-label-sm font-bold uppercase tracking-widest mb-2">
              <span className="font-mono text-slate-500">03 / IDENTITY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc]"></span>
              <span>Design Systems &amp; Visual Mastery</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900">
              <SplitText text="Comprehensive Graphic Designing" effect="flip" replayOnScroll />
            </h2>
          </div>
          <p className="font-body-md text-body-md text-slate-600 max-w-xl font-medium">
            Visual languages forged for enterprise recognition. Scalable design tokens, high-velocity marketing collateral, and uncompromising interface usability.
          </p>
        </div>

        {/* Mobile: ScrollStack */}
        <div className="md:hidden mb-10">
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
            {designScopes.map((item) => (
              <ScrollStackItem key={item.title} itemClassName="!p-0 !bg-transparent">
                <DesignCard item={item} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Scope Breakdown Grid (Desktop & Tablet) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-12">
          {designScopes.map((item) => (
            <DesignCard key={item.title} item={item} />
          ))}
        </div>

        {/* Creative Delivery Process Rail */}
        <div className="w-full bg-[#f4f7fb] border border-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl">
          <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-widest block mb-1">
            Execution Rhythm
          </span>
          <h3 className="font-headline-md text-headline-md text-slate-900 mb-6 font-bold">
            Creative Delivery Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {deliverySteps.map((s) => (
              <div key={s.step} className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#0058bc]/10 text-[#0058bc] flex items-center justify-center font-bold text-label-md mb-4">
                  {s.step}
                </div>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-1.5 font-bold">
                  {s.title}
                </h4>
                <p className="font-body-sm text-body-sm text-slate-600 font-medium">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GlassSlabSection>

      {/* Interactive Visual Showcase: Image Feature Gallery */}
      <section className="w-full bg-transparent py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-widest block mb-1">
                Portfolio In Action
              </span>
              <h2 className="font-headline-lg text-headline-lg text-slate-900">
                <SplitText text="Integrated Discipline Synergy" effect="flip" replayOnScroll />
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-slate-600 max-w-md font-medium">
              How code, data intelligence, and visual craftsmanship merge into high-performing digital flagships.
            </p>
          </div>

          {/* Mobile: ScrollStack for Synergy Cards */}
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
              {synergyCards.map((card) => (
                <ScrollStackItem key={card.title} itemClassName="!p-0 !bg-transparent">
                  <div className="bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden flex flex-col group h-full">
                    <div className="h-56 w-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={card.alt}
                        loading="lazy"
                        decoding="async"
                        src={card.src}
                      />
                    </div>
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-[#0058bc] font-bold uppercase tracking-wider block mb-1.5">
                          {card.tag}
                        </span>
                        <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-2 font-bold">
                          {card.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-slate-600 font-medium leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {synergyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={card.alt}
                    loading="lazy"
                    decoding="async"
                    src={card.src}
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-[#0058bc] font-bold uppercase tracking-wider block mb-1.5">
                      {card.tag}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-slate-900 mb-2 font-bold">
                      {card.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-slate-600 font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
