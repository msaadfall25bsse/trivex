import GlassSlabSection from "@/components/layout/GlassSlabSection";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface VideoScope {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  spanTwo: boolean;
}

const videoScopes: VideoScope[] = [
  {
    icon: "movie_edit",
    title: "Commercial & Promotional Video Editing",
    desc: "High-impact brand films, product launch promos, and corporate storytelling engineered to capture attention in the first three seconds.",
    tags: ["Premiere Pro", "Storytelling", "4K Master"],
    spanTwo: false,
  },
  {
    icon: "smart_display",
    title: "YouTube, Reels & Short-Form Content",
    desc: "Platform-optimized horizontal and vertical edits featuring retention-driven pacing, kinetic captions, and crisp sound design.",
    tags: ["CapCut Pro", "YouTube Retention", "Reels / Shorts"],
    spanTwo: false,
  },
  {
    icon: "animation",
    title: "Motion Graphics & Visual Effects",
    desc: "Custom After Effects title sequences, lower thirds, UI callouts, seamless transitions, and 3D Blender motion compositions.",
    tags: ["After Effects", "Blender 3D", "VFX & Transitions"],
    spanTwo: false,
  },
  {
    icon: "gradient",
    title: "Video Color Grading & Audio Mastering",
    desc: "Cinematic DaVinci Resolve color grading, LUT calibration, skin-tone balancing, and broadcast-standard audio mixing.",
    tags: ["DaVinci Resolve", "Color Grading", "Audio Mix"],
    spanTwo: false,
  },
  {
    icon: "video_settings",
    title: "End-to-End Video Post-Production",
    desc: "We transform raw footage into compelling visual stories through professional video editing, creative storytelling, motion graphics, and cinematic post-production—delivering consistent visual quality across every platform.",
    tags: ["Multi-Cam Sync", "Proxy Workflows", "Broadcast Delivery", "Platform Optimization"],
    spanTwo: true,
  },
];

const deliverySteps = [
  {
    step: "1",
    title: "Ingest & Rough Cut",
    desc: "Footage organization, proxy generation, narrative assembly, and pacing structure aligned with your campaign goals.",
  },
  {
    step: "2",
    title: "Motion, VFX & Color Grading",
    desc: "After Effects motion graphics, seamless transitions, DaVinci Resolve color grading, and sound design refinement.",
  },
  {
    step: "3",
    title: "Final Master & Multi-Format Export",
    desc: "Frame-accurate review cycles and delivery in 4K landscape, 9:16 vertical Reels, and web-optimized formats.",
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
    tag: "Video Editing",
    title: "Cinematic Post-Production",
    desc: "4K multi-track editing, After Effects motion graphics, and DaVinci color grading for high-retention campaigns.",
    alt: "Professional video editing timeline and post-production studio workstation",
    src: "/images/video-timeline-pro.jpg",
  },
];

function VideoCard({ item }: { item: VideoScope }) {
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
      <GlassSlabSection id="video-editing">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 text-[#0058bc] font-label-sm text-label-sm font-bold uppercase tracking-widest mb-2">
              <span className="font-mono text-slate-500">03 / POST-PRODUCTION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc]"></span>
              <span>Storytelling, Motion &amp; Color Mastery</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900">
              <SplitText text="Professional Video Editing" effect="flip" replayOnScroll />
            </h2>
          </div>
          <p className="font-body-md text-body-md text-slate-600 max-w-xl font-medium">
            We transform raw footage into compelling visual stories through professional video editing, creative storytelling, motion graphics, and cinematic post-production.
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
            {videoScopes.map((item) => (
              <ScrollStackItem key={item.title} itemClassName="!p-0 !bg-transparent">
                <VideoCard item={item} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Scope Breakdown Grid (Desktop & Tablet) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-12">
          {videoScopes.map((item) => (
            <VideoCard key={item.title} item={item} />
          ))}
        </div>

        {/* Video Delivery Process Rail */}
        <div className="w-full bg-[#f4f7fb] border border-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl">
          <span className="font-label-sm text-label-sm text-[#0058bc] uppercase font-bold tracking-widest block mb-1">
            Execution Rhythm
          </span>
          <h3 className="font-headline-md text-headline-md text-slate-900 mb-6 font-bold">
            Post-Production Delivery Process
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
              How code, data intelligence, and cinematic video production merge into high-performing digital flagships.
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
