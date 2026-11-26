"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Folder, { type FolderEntry } from "@/components/home/Folder";

interface PillarConfig {
  id: string;
  number: number;
  title: string;
  description: string;
  bullets: string[];
  linkText: string;
  folderLabel: string;
  folderColor: string;
  glowClass: string;
  iconBgClass: string;
  iconName: string;
  techTags: string[];
}

const pillars: PillarConfig[] = [
  {
    id: "PILLAR 01",
    number: 1,
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
    folderLabel: "Software",
    folderColor: "#0058bc",
    glowClass: "bg-primary/10",
    iconBgClass: "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-primary/20",
    iconName: "terminal",
    techTags: [
      "Next.js 15",
      "TypeScript",
      "Microservices",
      "Cloud DevOps",
      "Distributed APIs",
      "Database Design",
    ],
  },
  {
    id: "PILLAR 02",
    number: 2,
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
    folderLabel: "Growth",
    folderColor: "#1e3a5f",
    glowClass: "bg-on-surface/10",
    iconBgClass: "bg-gradient-to-br from-on-surface via-secondary to-[#1e2a3a] text-surface-container-lowest",
    iconName: "trending_up",
    techTags: [
      "Technical SEO",
      "Google & Meta PPC",
      "Conversion Funnels",
      "Split-Testing CRO",
      "14+ GEO Expansion",
      "ROAS Telemetry",
    ],
  },
  {
    id: "PILLAR 03",
    number: 3,
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
    folderLabel: "Design",
    folderColor: "#3b82f6",
    glowClass: "bg-primary-container/10",
    iconBgClass: "bg-gradient-to-br from-primary-container to-[#3b82f6] text-on-primary shadow-primary-container/20",
    iconName: "palette",
    techTags: [
      "Design Tokens",
      "Figma Libraries",
      "UI/UX Prototypes",
      "Brand Book Guidelines",
      "3D Vector Assets",
      "Motion Ergonomics",
    ],
  },
];

const folderEntries: FolderEntry[] = [
  {
    title: "01 Software Development",
    description: "Web, Mobile, Microservices & Cloud Infrastructure",
  },
  {
    title: "02 Digital Marketing",
    description: "SEO, PPC & Algorithmic Conversion Funnels",
  },
  {
    title: "03 Graphic Designing",
    description: "Design Systems, High-Fidelity UI/UX & Motion",
  },
];

export default function CorePillarsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedPillar, setFocusedPillar] = useState<PillarConfig | null>(null);

  // Close front-focus modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFocusedPillar(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handlePreviousPillar = () => {
    if (!focusedPillar) return;
    const currentIndex = pillars.findIndex((p) => p.id === focusedPillar.id);
    const prevIndex = (currentIndex - 1 + pillars.length) % pillars.length;
    setFocusedPillar(pillars[prevIndex]);
  };

  const handleNextPillar = () => {
    if (!focusedPillar) return;
    const currentIndex = pillars.findIndex((p) => p.id === focusedPillar.id);
    const nextIndex = (currentIndex + 1) % pillars.length;
    setFocusedPillar(pillars[nextIndex]);
  };

  return (
    <section className="w-full bg-transparent py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              INTEGRATED EXCELLENCE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white tracking-tight">
              The Three Core Pillars of TRIVE<span className="text-[#0058bc]">X</span>
            </h2>
          </div>
          <p className="font-body-md text-body-md text-white/80 max-w-md font-medium">
            Every pillar is steered directly by a founding director with deep specialized mastery, working in direct sync.
          </p>
        </div>

        {/* Central Master Folder Showcase */}
        <div className="w-full bg-white/[0.05] border border-white/15 backdrop-blur-xl p-8 md:p-12 rounded-3xl relative mb-8 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 shadow-2xl">
          {/* Subtle Ambient Glow Behind Folder */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0058bc]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Hint Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0058bc]/20 text-cyan-300 border border-[#0058bc]/30 text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">
                {isOpen ? "folder_open" : "folder"}
              </span>
              {isOpen ? "Pillars Folder Open" : "Interactive Pillars Folder"}
            </span>
            <span className="text-white/80 text-xs font-medium">
              {isOpen
                ? "Click any card below to focus in front, or click folder to pack back"
                : "Click folder to reveal the 3 core pillars"}
            </span>
          </div>

          {/* The Single Master 3D Glass Folder */}
          <div className="relative z-10 my-4 flex items-center justify-center cursor-pointer group">
            <Folder
              label="TRIVEX Pillars"
              items={folderEntries}
              variant="glass"
              mode="flap"
              layout="spread"
              color="#0058bc"
              theme="dark"
              size={1.22}
              frost={0.3}
              tabPosition="right"
              open={isOpen}
              onOpenChange={(nextOpen) => {
                setIsOpen(nextOpen);
                if (!nextOpen) setFocusedPillar(null);
              }}
              onItemClick={(_item, index) => {
                setIsOpen(true);
                setFocusedPillar(pillars[index]);
              }}
            />
          </div>

          {/* Control CTA & Status Bar */}
          <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const next = !isOpen;
                setIsOpen(next);
                if (!next) setFocusedPillar(null);
              }}
              data-cursor-label={isOpen ? "Close Folder" : "Open Folder"}
              className="cursor-target inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0058bc] text-white font-bold text-label-md shadow-lg shadow-[#0058bc]/30 hover:bg-[#0058bc]/90 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">
                {isOpen ? "folder" : "folder_open"}
              </span>
              <span>{isOpen ? "Pack Pillars Back into Folder" : "Click to Open Pillars Folder"}</span>
            </button>

            {/* Quick Preview Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {pillars.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setIsOpen(true);
                    setFocusedPillar(p);
                  }}
                  data-cursor-label={p.title}
                  className={`cursor-target px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isOpen && focusedPillar?.id === p.id
                      ? "bg-[#0058bc] text-white shadow-sm"
                      : "bg-white/10 hover:bg-[#0058bc]/25 text-white/90 hover:text-white border border-white/10"
                  }`}
                >
                  0{idx + 1} {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Emerged 3 Core Cards (Animated Out of the Folder) */}
        <div
          className={`transition-all duration-700 ease-out ${
            isOpen
              ? "opacity-100 max-h-[2400px] pointer-events-auto"
              : "opacity-0 max-h-0 pointer-events-none overflow-hidden scale-95"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                onClick={() => setFocusedPillar(pillar)}
                data-cursor-label={`Focus ${pillar.folderLabel}`}
                className={`cursor-target bg-white/[0.06] border border-white/15 backdrop-blur-xl p-8 rounded-3xl flex flex-col justify-between group relative cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-[#0058bc]/60 transition-all duration-500 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${(idx + 1) * 120}ms`,
                }}
              >
                {/* Ambient glow per pillar card */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div
                    className={`absolute top-0 right-0 w-36 h-36 ${pillar.glowClass} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}
                  />
                </div>

                <div className="relative z-10">
                  {/* Top Bar with Pillar ID and Click-to-Focus Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#0058bc] font-bold">
                      {pillar.id}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/70 group-hover:text-cyan-300 transition-colors bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      <span className="material-symbols-outlined text-xs">open_in_full</span>
                      <span>Click to Focus</span>
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-white mb-3 font-bold group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-white/80 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bullet points with checkmarks */}
                  <ul className="space-y-3 font-body-sm text-body-sm text-white/90 mb-6">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[#0058bc] text-base shrink-0">
                          check_circle
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {pillar.techTags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/10 text-white/80 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-label-md text-label-md text-[#0058bc] font-bold group-hover:translate-x-1 transition-transform">
                    <span>{pillar.linkText}</span>
                    <span className="material-symbols-outlined text-base">east</span>
                  </span>
                  <span className="text-xs text-white/70 group-hover:text-white transition-colors">
                    View in Front →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FRONT FOCUS MODAL ("Card Samnay Aa Jaye") */}
        {focusedPillar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setFocusedPillar(null)}
          >
            <div
              className="max-w-3xl w-full bg-[#0b1320]/95 backdrop-blur-2xl p-8 md:p-10 rounded-3xl shadow-2xl relative border-2 border-[#0058bc]/50 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh] overflow-y-auto text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header: ID, Status, Close */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#0058bc]/25 text-cyan-300 font-bold text-xs uppercase tracking-wider border border-[#0058bc]/40">
                    {focusedPillar.id} • FOCUSED VIEW
                  </span>
                  <span className="text-xs text-white/70 hidden sm:inline">
                    Pillar {focusedPillar.number} of 3
                  </span>
                </div>
                <button
                  onClick={() => setFocusedPillar(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:text-cyan-300 transition-all cursor-pointer"
                  aria-label="Close Focus View"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${focusedPillar.iconBgClass}`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {focusedPillar.iconName}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-white font-extrabold tracking-tight">
                    {focusedPillar.title}
                  </h3>
                  <p className="font-body-md text-body-md text-white/80 leading-relaxed mt-2">
                    {focusedPillar.description}
                  </p>
                </div>
              </div>

              {/* Core Capabilities Grid */}
              <div className="my-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#0058bc] font-bold mb-3">
                  Core Specializations & Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {focusedPillar.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="p-3.5 rounded-2xl bg-white/[0.06] flex items-start gap-3 border border-white/10 hover:border-[#0058bc]/40 transition-all"
                    >
                      <span className="material-symbols-outlined text-[#0058bc] text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm font-semibold text-white">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology & Tooling Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 font-bold mb-3">
                  Key Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {focusedPillar.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-xl bg-white/10 text-white/90 text-xs font-medium border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation & Actions */}
              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/service-details"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0058bc] text-white font-bold text-label-md hover:bg-[#0058bc]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#0058bc]/30"
                >
                  <span>{focusedPillar.linkText}</span>
                  <span className="material-symbols-outlined text-base">east</span>
                </Link>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={handlePreviousPillar}
                    className="px-4 py-2 rounded-full bg-white/10 text-xs font-semibold text-white hover:text-cyan-300 hover:border-[#0058bc]/40 transition-all flex items-center gap-1 cursor-pointer border border-white/10"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    <span>Previous</span>
                  </button>
                  <button
                    onClick={handleNextPillar}
                    className="px-4 py-2 rounded-full bg-white/10 text-xs font-semibold text-white hover:text-cyan-300 hover:border-[#0058bc]/40 transition-all flex items-center gap-1 cursor-pointer border border-white/10"
                  >
                    <span>Next</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <button
                    onClick={() => setFocusedPillar(null)}
                    className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white/80 hover:text-white transition-all cursor-pointer border border-white/10"
                  >
                    Back to All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
