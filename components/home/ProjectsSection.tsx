import Link from "next/link";
import SplitText from "@/components/home/SplitText";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";

const projects = [
  {
    id: "aurapay",
    badge: "Fintech SaaS",
    badgeColor: "text-[#0058bc]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQM9t5BuA7gSVIfTZaHnRw65gwowH5PrUzqyRn1WYjEyfXjfglETyyonj-hjLrl32E1wtI75a8m7ZGkUqMcf7NzSekkJ5-YX4BbWiCjBidC4hHZSt0A2yrHkS5BxIUE-C6d1S77Ppq8GlR54GzYo_4_ogErgOcMa3oSA3kwE1XUVbmLNeNP6cbzehGwyw4HZlDTcpdt95TJIirJj0sZ3EU3VrMZ5SPvMTC7dwx37fc",
    alt: "Modern financial technology dashboard web application interface",
    title: "AuraPay Global Cloud Platform",
    description:
      "Re-architected real-time cross-border settlements engine with sub-second reconciliations and SOC2 compliant telemetry.",
    metric1Label: "Transaction Vol",
    metric1Value: "$140M+/mo",
    metric2Label: "Latency Cut",
    metric2Value: "-74%",
  },
  {
    id: "nordic-retail",
    badge: "Global Growth",
    badgeColor: "text-slate-900",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXrvqMasqmCRvDJhDVYbdxBXQutdqdT6jYpNwRHksgJYf1xx2feDG5_8EGSu1xJgJTK7TXrR2hDQJ-BAm2qZW8qPL18uLoBzC3GLuxYeDCxSn6garOsAoCeNRsVviAYDBDH2rRpFpxh_ZZXBc918jkuVQLLYxkfDyvcVgKF5GqPwqbd-uW5NoLGseG58FTwSRUFWG8MB4LhX_0EqsQqbjKlxD_Wve8fLdHlfq3LUjc",
    alt: "International e-commerce consumer goods brand marketing analytics console",
    title: "Nordic Retail Omni-Channel Scaling",
    description:
      "Executed multi-region programmatic media and automated feed optimization spanning 14 European markets.",
    metric1Label: "Blended ROAS",
    metric1Value: "5.8x",
    metric2Label: "New ARR",
    metric2Value: "+$12.4M",
  },
  {
    id: "sovereign-aerospace",
    badge: "Enterprise Architecture",
    badgeColor: "text-[#0058bc]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDUcJpp8frTWqHTEMs64hniQoZCQkajjhUZ05xeG6n2aEynaFl_Z02h26j2UBdyDhsgCVrXUB-T23YzH9ZU-eFYkzQ94A4wSDkYOyr9QunRcSspLCb8yj14c3rR-XhfKG3whljYUWwO4QPuDTjuDkfWCxmw7mteFTdBORUA6Ew7R6g5qWzqo5o1aNH9n9HOhlt2Qt05T6CIeV-OcP50MFfwreJ-hw5raQL09YD5oYc",
    alt: "Corporate brand identity book and design system components",
    title: "Sovereign Aerospace UI/UX Design System",
    description:
      "Crafted multi-platform design tokens and accessibility validated cockpit interface components for defense avionics.",
    metric1Label: "System Components",
    metric1Value: "480+",
    metric2Label: "Adoption Velocity",
    metric2Value: "3.2x",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col gap-6 group hover:-translate-y-2 hover:border-[#0058bc]/40 hover:shadow-xl transition-all duration-300 shadow-lg h-full">
      <div className="relative h-60 w-full rounded-2xl overflow-hidden shadow-sm">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={project.alt}
          src={project.image}
          loading="lazy"
          decoding="async"
        />
        <div
          className={`absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full ${project.badgeColor} font-label-sm text-label-sm uppercase font-bold shadow-sm border border-slate-200`}
        >
          {project.badge}
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between gap-5 px-1">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-2 font-bold group-hover:text-[#0058bc] transition-colors">
            {project.title}
          </h3>
          <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed font-medium">
            {project.description}
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm text-slate-500 block">
              {project.metric1Label}
            </span>
            <span className="font-headline-sm text-headline-sm text-slate-900 font-extrabold">
              {project.metric1Value}
            </span>
          </div>
          <div className="text-right">
            <span className="font-label-sm text-label-sm text-slate-500 block">
              {project.metric2Label}
            </span>
            <span className="font-headline-sm text-headline-sm text-[#0058bc] font-extrabold">
              {project.metric2Value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="w-full bg-[#f4f7fb] py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              CASE EVIDENCE
            </span>
            <SplitText
              tag="h2"
              text="Recent Enterprise Deliveries"
              className="font-headline-lg text-headline-lg text-slate-900 tracking-tight"
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
          </div>
          <Link
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-[#0058bc] hover:text-slate-900 font-bold group transition-colors"
            href="/services"
          >
            <span>View All Documented Cases</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
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
            {projects.map((project) => (
              <ScrollStackItem
                key={project.id}
                itemClassName="!p-0 !bg-transparent"
              >
                <ProjectCard project={project} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Desktop & Tablet: 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
