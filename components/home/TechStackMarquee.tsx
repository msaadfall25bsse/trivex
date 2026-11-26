"use client";

import { useState } from "react";

type Discipline = "all" | "software" | "marketing" | "video";

interface TechItem {
  name: string;
  category: "Software Development" | "Digital Marketing" | "Video Editing";
  discipline: "software" | "marketing" | "video";
  tag: string;
  icon: React.ReactNode;
}

const techItems: TechItem[] = [
  // --- SOFTWARE DEVELOPMENT ---
  {
    name: "WordPress",
    category: "Software Development",
    discipline: "software",
    tag: "CMS & Headless",
    icon: (
      <svg className="w-5 h-5 text-[#21759b]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.18-1.85l4.3-11.82 2.87 8.35.54-1.81-1.92-5.26 2.76-.08c.18.3.36.63.53 1l3.32 9.68A8.18 8.18 0 0 1 12 20.2zM3.8 12a8.14 8.14 0 0 1 1.28-4.39l4.5 12.33A8.2 8.2 0 0 1 3.8 12zm14.86 4.67l-2.73-8.25c.57-.03 1.1-.09 1.1-.09a.46.46 0 0 0 0-.91s-.9.08-1.88.08-1.88-.08-1.88-.08a.46.46 0 1 0 0 .91s.5.06 1.02.09l1.62 4.49-3.77 11.23a8.2 8.2 0 0 1 6.52-7.47z"/>
      </svg>
    ),
  },
  {
    name: "Next.js 15",
    category: "Software Development",
    discipline: "software",
    tag: "React Framework",
    icon: (
      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.8 14.4l-5.6-7.2v7.2H9.6V8.4h1.6l5.6 7.2V8.4h1.6v8h-1.6z"/>
      </svg>
    ),
  },
  {
    name: "React Native",
    category: "Software Development",
    discipline: "software",
    tag: "Web & Mobile",
    icon: (
      <svg className="w-5 h-5 text-[#61dafb]" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Python Core",
    category: "Software Development",
    discipline: "software",
    tag: "Backend & AI",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#3776ab" d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v2.8h5.9v.8H6.5S4 6.6 4 10.7c0 4.1 2.2 4 2.2 4h1.3v-1.9s-.1-2.2 2.2-2.2h5.8c2.2 0 2.2-2.1 2.2-2.1V4.2s.3-2.2-5.8-2.2z"/>
        <path fill="#ffd343" d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-2.8H9.1v-.8h8.4s2.5.3 2.5-3.8c0-4.1-2.2-4-2.2-4h-1.3v1.9s.1 2.2-2.2 2.2H8.5c-2.2 0-2.2 2.1-2.2 2.1v4.3s-.3 2.2 5.8 2.2z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Software Development",
    discipline: "software",
    tag: "Typed Scale",
    icon: (
      <div className="w-5 h-5 bg-[#3178c6] text-white rounded font-bold text-[10px] flex items-center justify-center">
        TS
      </div>
    ),
  },
  {
    name: "Node.js",
    category: "Software Development",
    discipline: "software",
    tag: "API Services",
    icon: (
      <svg className="w-5 h-5 text-[#5fa04e]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z"/>
      </svg>
    ),
  },
  {
    name: "AWS Enterprise",
    category: "Software Development",
    discipline: "software",
    tag: "Cloud Infra",
    icon: (
      <svg className="w-5 h-5 text-[#ff9900]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3C6.5 3 2 6.6 2 11c0 2.7 1.7 5.1 4.3 6.6l.8-1.5C4.8 14.9 3.5 13 3.5 11c0-3.6 3.8-6.5 8.5-6.5s8.5 2.9 8.5 6.5c0 2-1.3 3.9-3.6 5.1l.8 1.5c2.6-1.5 4.3-3.9 4.3-6.6 0-4.4-4.5-8-10-8z"/>
        <path d="M7 19c3 1.5 7 1.5 10 0l.5 1.5c-3.5 1.8-8 1.8-11.5 0L7 19z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "Software Development",
    discipline: "software",
    tag: "Microservices",
    icon: (
      <svg className="w-5 h-5 text-[#2496ed]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zM7 8h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm6 3h2v2h-2V8zM2 12c.5-1.5 2-2 3-2 1.5 0 2 1 3 1s1.5-1 3-1 2 1 3 1 1.5-1 3-1c2.5 0 3.5 1.5 4 3 1.5.5 3 2 3 4 0 3-2.5 5-5.5 5H4c-2 0-3.5-1.5-3.5-3.5 0-1.5 1-3 1.5-3.5z"/>
      </svg>
    ),
  },

  // --- DIGITAL MARKETING ---
  {
    name: "Google Ads",
    category: "Digital Marketing",
    discipline: "marketing",
    tag: "PPC & Search",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#fbbc04" d="M4.2 14.5l5.8-10c.8-1.4 2.6-1.9 4-1.1l2.5 1.4-8.3 14.4c-.8.5-2.6.2-4-1.7z"/>
        <path fill="#4285f4" d="M19.8 17.5l-5.8-10c-.8-1.4-2.6-1.9-4-1.1l-2.5 1.4 8.3 14.4c.8.5 2.6.2 4-1.7z"/>
        <circle cx="5.5" cy="18.5" r="2.5" fill="#34a853"/>
      </svg>
    ),
  },
  {
    name: "Meta Ads Manager",
    category: "Digital Marketing",
    discipline: "marketing",
    tag: "Social Scale",
    icon: (
      <svg className="w-5 h-5 text-[#0081fb]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/>
      </svg>
    ),
  },
  {
    name: "Google Analytics 4",
    category: "Digital Marketing",
    discipline: "marketing",
    tag: "Funnel Telemetry",
    icon: (
      <svg className="w-5 h-5 text-[#e37400]" fill="currentColor" viewBox="0 0 24 24">
        <rect x="15" y="4" width="4" height="16" rx="2"/>
        <rect x="10" y="9" width="4" height="11" rx="2"/>
        <circle cx="5" cy="18" r="2"/>
      </svg>
    ),
  },
  {
    name: "SEMrush",
    category: "Digital Marketing",
    discipline: "marketing",
    tag: "SEO Architecture",
    icon: (
      <svg className="w-5 h-5 text-[#ff642d]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5l-4-2.5 4-2.5v5zm0-6.5l-4-2.5 4-2.5v5z"/>
      </svg>
    ),
  },
  {
    name: "HubSpot CRM",
    category: "Digital Marketing",
    discipline: "marketing",
    tag: "Inbound Pipeline",
    icon: (
      <svg className="w-5 h-5 text-[#ff7a59]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.5 9V6.8a2.3 2.3 0 1 0-1.8 0V9a5.3 5.3 0 0 0-3.2 2.4l-4.7-3.6a2 2 0 1 0-1.3 1.5l4.6 3.5a5.3 5.3 0 1 0 6.4-3.8zm-1-3a.8.8 0 1 1 .8.8.8.8 0 0 1-.8-.8zM5.5 8a.8.8 0 1 1 .8.8.8.8 0 0 1-.8-.8zm10 9a3.8 3.8 0 1 1 3.8-3.8 3.8 3.8 0 0 1-3.8 3.8z"/>
      </svg>
    ),
  },
  {
    name: "TikTok Ads",
    category: "Digital Marketing",
    discipline: "marketing",
    tag: "Viral Acquisition",
    icon: (
      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.5 7.5a4.8 4.8 0 0 1-3.5-1.5v7.8a6.2 6.2 0 1 1-6.2-6.2c.4 0 .7 0 1.1.1V10a3.7 3.7 0 1 0 2.6 3.6V2h2.5a4.8 4.8 0 0 0 3.5 3.5v2z"/>
      </svg>
    ),
  },

  // --- VIDEO EDITING & CREATIVE ---
  {
    name: "Adobe Premiere Pro",
    category: "Video Editing",
    discipline: "video",
    tag: "4K Video Suite",
    icon: (
      <div className="w-5 h-5 bg-[#00005b] text-[#9999ff] rounded font-bold text-[10px] flex items-center justify-center border border-[#9999ff]/40">
        Pr
      </div>
    ),
  },
  {
    name: "Adobe After Effects",
    category: "Video Editing",
    discipline: "video",
    tag: "Motion & VFX",
    icon: (
      <div className="w-5 h-5 bg-[#00005b] text-[#d291ff] rounded font-bold text-[10px] flex items-center justify-center border border-[#d291ff]/40">
        Ae
      </div>
    ),
  },
  {
    name: "DaVinci Resolve",
    category: "Video Editing",
    discipline: "video",
    tag: "Color & Studio Edit",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#e32c2b" d="M12 4l3.5 6h-7z"/>
        <path fill="#2b75e3" d="M4 17l3.5-6 3.5 6z"/>
        <path fill="#f3a41d" d="M16.5 17l-3.5-6 3.5-6 3.5 6z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "Video Editing",
    discipline: "video",
    tag: "UI/UX & Tokens",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#f24e1e" d="M9 2h6v5H9z"/>
        <path fill="#a259ff" d="M9 7h6v5H9z"/>
        <path fill="#0acf83" d="M9 12a2.5 2.5 0 0 0 0 5h6v-5H9z"/>
        <circle cx="15" cy="9.5" r="2.5" fill="#1abcfe"/>
        <circle cx="9" cy="19.5" r="2.5" fill="#f24e1e"/>
      </svg>
    ),
  },
  {
    name: "Adobe Illustrator",
    category: "Video Editing",
    discipline: "video",
    tag: "Vector Brand Systems",
    icon: (
      <div className="w-5 h-5 bg-[#330000] text-[#ff9a00] rounded font-bold text-[10px] flex items-center justify-center border border-[#ff9a00]/40">
        Ai
      </div>
    ),
  },
  {
    name: "Adobe Photoshop",
    category: "Video Editing",
    discipline: "video",
    tag: "Creative Compositing",
    icon: (
      <div className="w-5 h-5 bg-[#001e36] text-[#31a8ff] rounded font-bold text-[10px] flex items-center justify-center border border-[#31a8ff]/40">
        Ps
      </div>
    ),
  },
  {
    name: "Blender 3D",
    category: "Video Editing",
    discipline: "video",
    tag: "3D Motion Render",
    icon: (
      <svg className="w-5 h-5 text-[#ea7600]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a3 3 0 0 0-3 3c0 .5.1 1 .4 1.4L4.8 9A7 7 0 1 0 12 19a7 7 0 0 0 6.6-4.7l2.8-1.2A3 3 0 1 0 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z"/>
      </svg>
    ),
  },
  {
    name: "CapCut Pro",
    category: "Video Editing",
    discipline: "video",
    tag: "Social Velocity Cut",
    icon: (
      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6l8 6-8 6V6zm16 0l-8 6 8 6V6z"/>
      </svg>
    ),
  },
];

export default function TechStackMarquee() {
  const [activeTab, setActiveTab] = useState<Discipline>("all");

  const filteredItems =
    activeTab === "all"
      ? techItems
      : techItems.filter((item) => item.discipline === activeTab);

  // Duplicate items for continuous seamless loop
  const displayItems = [...filteredItems, ...filteredItems];

  return (
    <div className="w-full mt-12 sm:mt-16 glass-panel-pro rounded-2xl sm:rounded-3xl p-5 sm:p-7 glass-rim relative overflow-hidden">
      {/* Header & 3-Part Category Switcher */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-surface-container/60">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-1">
            Enterprise Production Stack
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-base sm:text-lg">
            3-Tier Multidisciplinary Technology Engine
          </h3>
        </div>

        {/* 3-Part Discipline Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl glass-subcard">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "all"
                ? "bg-primary text-on-primary shadow-sm"
                : "text-secondary hover:text-on-surface"
            }`}
          >
            All Stack ({techItems.length})
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "software"
                ? "bg-primary text-on-primary shadow-sm"
                : "text-secondary hover:text-on-surface"
            }`}
          >
            <span className="material-symbols-outlined text-sm">terminal</span>
            Software Development
          </button>
          <button
            onClick={() => setActiveTab("marketing")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "marketing"
                ? "bg-primary text-on-primary shadow-sm"
                : "text-secondary hover:text-on-surface"
            }`}
          >
            <span className="material-symbols-outlined text-sm">trending_up</span>
            Digital Marketing
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "video"
                ? "bg-primary text-on-primary shadow-sm"
                : "text-secondary hover:text-on-surface"
            }`}
          >
            <span className="material-symbols-outlined text-sm">movie_filter</span>
            Video Editing
          </button>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Marquee Container with Alpha Edge Mask (No white bars) */}
      <div
        className="relative w-full overflow-hidden py-2"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Moving Smart Ticker (Continuous right-to-left marquee) */}
        <div className="animate-marquee gap-4 py-1">
          {displayItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="glass-surface-card px-4 py-3 rounded-2xl flex items-center gap-3.5 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-200 shrink-0 select-none group glass-rim"
            >
              {/* Brand Icon Hub */}
              <div className="w-9 h-9 rounded-xl glass-subcard flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>

              {/* Title & Category Badge */}
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-secondary font-mono tracking-tight">
                  {tech.tag}
                </span>
              </div>

              {/* Discipline Indicator Pill */}
              <span
                className={`ml-1 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                  tech.discipline === "software"
                    ? "bg-primary/10 text-primary"
                    : tech.discipline === "marketing"
                    ? "bg-emerald-500/10 text-emerald-700"
                    : "bg-purple-500/10 text-purple-700"
                }`}
              >
                {tech.discipline === "software"
                  ? "Software"
                  : tech.discipline === "marketing"
                  ? "Marketing"
                  : "Video Edit"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
