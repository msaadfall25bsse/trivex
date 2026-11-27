"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface PillarConfig {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  linkText: string;
  image: string;
  imageAlt: string;
  iconName: string;
  accentGradient: string;
  techTags: string[];
}

const pillars: PillarConfig[] = [
  {
    id: "PILLAR 01",
    number: "01",
    title: "Software Development",
    description:
      "Resilient enterprise software, high-throughput backend services, and clean frontends built for frictionless scale.",
    bullets: [
      "Custom Web & Mobile Applications",
      "Enterprise Distributed Microservices",
      "Scalable Cloud & DevOps Pipelines",
      "API Architecture & Database Design",
    ],
    linkText: "Explore Engineering Stack",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxlHTYflCeyU3k2ZG4CMan8VFKCbw_w4Pgx_yDFPAV1q-XAZoYy1jNiPCl6qC1VZCk8ea2xVWDae2gEZhnFqMupjYUOuxod1zt3e5rRagHL-J5K4nOd6NuDa3g1WfuT05mv6O39AOjFsHcwRz03QYaZ9_8TOdb0VEPQpYsftU8uV3rET4Kd0kkZbugqduWnlfOaurGXP2OTIWSbvi3phIoxsgRHjvgaUxb0hZctLKm",
    imageAlt: "Enterprise software architecture and engineering systems",
    iconName: "terminal",
    accentGradient: "from-[#0058bc] to-sky-500",
    techTags: ["Next.js 15", "TypeScript", "Microservices", "Cloud DevOps", "PostgreSQL"],
  },
  {
    id: "PILLAR 02",
    number: "02",
    title: "Digital Marketing",
    description:
      "Algorithmic performance acquisition, conversion funnel architecture, and global organic dominance.",
    bullets: [
      "Data-Driven Technical SEO Architecture",
      "High-Yield Targeted PPC & Media Buying",
      "Conversion Rate Optimization (CRO)",
      "Global & Local GEO Expansion Systems",
    ],
    linkText: "Review Marketing Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXrvqMasqmCRvDJhDVYbdxBXQutdqdT6jYpNwRHksgJYf1xx2feDG5_8EGSu1xJgJTK7TXrR2hDQJ-BAm2qZW8qPL18uLoBzC3GLuxYeDCxSn6garOsAoCeNRsVviAYDBDH2rRpFpxh_ZZXBc918jkuVQLLYxkfDyvcVgKF5GqPwqbd-uW5NoLGseG58FTwSRUFWG8MB4LhX_0EqsQqbjKlxD_Wve8fLdHlfq3LUjc",
    imageAlt: "Digital marketing performance analytics and global growth console",
    iconName: "trending_up",
    accentGradient: "from-sky-500 to-[#0058bc]",
    techTags: ["Technical SEO", "Google & Meta PPC", "CRO Funnels", "14+ GEO Markets", "ROAS Telemetry"],
  },
  {
    id: "PILLAR 03",
    number: "03",
    title: "Graphic Designing",
    description:
      "Cohesive brand identity systems, ergonomic product UI/UX architectures, and precision visual assets.",
    bullets: [
      "Enterprise Design Systems & Token Libraries",
      "High-Fidelity UI/UX Prototyping",
      "Brand Identity Guidelines & Asset Creation",
      "Interactive Motion & Vector Illustrations",
    ],
    linkText: "Discover Design Systems",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDUcJpp8frTWqHTEMs64hniQoZCQkajjhUZ05xeG6n2aEynaFl_Z02h26j2UBdyDhsgCVrXUB-T23YzH9ZU-eFYkzQ94A4wSDkYOyr9QunRcSspLCb8yj14c3rR-XhfKG3whljYUWwO4QPuDTjuDkfWCxmw7mteFTdBORUA6Ew7R6g5qWzqo5o1aNH9n9HOhlt2Qt05T6CIeV-OcP50MFfwreJ-hw5raQL09YD5oYc",
    imageAlt: "Enterprise UI/UX design system and brand identity components",
    iconName: "palette",
    accentGradient: "from-[#0058bc] to-blue-400",
    techTags: ["Design Tokens", "Figma Systems", "UI/UX Prototypes", "Brand Books", "3D Motion"],
  },
];

export default function CorePillarsSection() {
  const [flippedMap, setFlippedMap] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section data-no-scroll-anim className="w-full bg-white py-16 md:py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              INTEGRATED EXCELLENCE
            </span>
            <SplitText
              tag="h2"
              text="The Three Core Pillars of TRIVEX"
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
          <p className="font-body-md text-body-md text-slate-600 max-w-md font-medium">
            Scroll to stack each pillar, and click any card to flip 180° for complete technical specifications.
          </p>
        </div>

        {/* ScrollStack Container for the 3 Core Pillar Cards */}
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
          {pillars.map((pillar) => {
            const isFlipped = Boolean(flippedMap[pillar.id]);
            return (
              <ScrollStackItem
                key={pillar.id}
                itemClassName="!p-0 !bg-transparent"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`${pillar.title} — click to flip card`}
                  onClick={() => toggleFlip(pillar.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFlip(pillar.id);
                    }
                  }}
                  className="w-full h-[430px] sm:h-[400px] md:h-[410px] cursor-pointer select-none outline-none"
                  style={{ perspective: "1400px" }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* ================= FRONT FACE ================= */}
                    <div
                      className="absolute inset-0 rounded-[28px] overflow-hidden border border-slate-200 bg-white shadow-xl flex flex-col justify-between p-6 sm:p-8 md:p-10"
                      style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                    >
                      {/* Related Background Image */}
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-75"
                        draggable={false}
                      />
                      {/* Light Gradient Overlay for Crisp Dark Text on Left while Showing Image Clearly */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent"
                      />

                      {/* Top Row */}
                      <div className="relative z-10 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2.5">
                          <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0058bc] font-bold text-xs uppercase tracking-widest">
                            {pillar.id}
                          </span>
                          <span className="text-slate-400 font-mono text-xs hidden sm:inline">
                            {pillar.number} / 03
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                          <span className="material-symbols-outlined text-sm text-[#0058bc]">
                            flip
                          </span>
                          <span>Click to Flip 180°</span>
                        </span>
                      </div>

                      {/* Middle Content */}
                      <div className="relative z-10 max-w-2xl my-auto py-3">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#0058bc] mb-4">
                          <span className="material-symbols-outlined text-2xl">
                            {pillar.iconName}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                          {pillar.title}
                        </h3>

                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-xl">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Bottom Row */}
                      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                        <div className="flex flex-wrap gap-2">
                          {pillar.techTags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0058bc]">
                          <span>View Specifications</span>
                          <span className="material-symbols-outlined text-base">sync</span>
                        </span>
                      </div>
                    </div>

                    {/* ================= BACK FACE (180° ROTATED) ================= */}
                    <div
                      className="absolute inset-0 rounded-[28px] overflow-hidden border-2 border-[#0058bc]/30 bg-slate-50 shadow-xl flex flex-col justify-between p-6 sm:p-8 md:p-10"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {/* Subtle Backside Image Texture */}
                      <img
                        src={pillar.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover opacity-10"
                        draggable={false}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/95 to-blue-50/90"
                      />

                      {/* Back Top Header */}
                      <div className="relative z-10 flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
                        <div className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-[#0058bc] text-xl">
                            {pillar.iconName}
                          </span>
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0058bc]">
                            {pillar.id} • {pillar.title}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-sm">
                          <span className="material-symbols-outlined text-sm">undo</span>
                          <span>Flip Back</span>
                        </span>
                      </div>

                      {/* Back Detailed Specifications */}
                      <div className="relative z-10 my-auto py-3 flex flex-col gap-3.5">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {pillar.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {pillar.bullets.map((bullet) => (
                            <div
                              key={bullet}
                              className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm"
                            >
                              <span className="material-symbols-outlined text-[#0058bc] text-base sm:text-lg shrink-0 mt-0.5">
                                check_circle
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                {bullet}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Back Bottom Bar & Direct CTA */}
                      <div className="relative z-10 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                        <div className="hidden sm:flex flex-wrap gap-1.5">
                          {pillar.techTags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-blue-50 text-[#0058bc] border border-blue-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/service-details"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0058bc] hover:bg-[#004ba3] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#0058bc]/25 transition-all ml-auto"
                        >
                          <span>{pillar.linkText}</span>
                          <span className="material-symbols-outlined text-base">east</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
}
