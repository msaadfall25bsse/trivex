import Link from "next/link";
import GlassSlabSection from "@/components/layout/GlassSlabSection";

const modules = [
  {
    icon: "movie_edit",
    title: "Commercial & Corporate Video Editing",
    desc: "High-impact brand stories, promotional films, and executive communications.",
  },
  {
    icon: "smart_display",
    title: "YouTube, Reels & Short-Form Content",
    desc: "Platform-optimized cuts, dynamic pacing, captions, and retention-driven hooks.",
  },
  {
    icon: "animation",
    title: "Motion Graphics & Visual Effects",
    desc: "Custom After Effects animations, smooth transitions, and 3D Blender motion.",
  },
  {
    icon: "gradient",
    title: "Color Grading & Post-Production",
    desc: "Cinematic DaVinci Resolve color grading, audio mastering, and 4K delivery.",
  },
];

export default function Pillar3Design() {
  return (
    <GlassSlabSection id="video-editing-discipline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Narrative */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 bg-[#0058bc]/10 border border-[#0058bc]/20 text-[#0058bc] rounded-full font-label-sm text-label-sm uppercase font-bold mb-4">
            <span className="material-symbols-outlined text-sm">movie_edit</span>
            Pillar 03 • Post-Production
          </div>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight mb-4">
            Video Editing
          </h2>
          <p className="font-body-lg text-body-lg text-slate-600 mb-8 leading-relaxed font-medium">
            We transform raw footage into compelling visual stories through professional video editing, creative storytelling, motion graphics, and cinematic post-production.
          </p>

          {/* Module List */}
          <div className="flex flex-col gap-3.5 mb-8">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className="flex items-center justify-between p-4 bg-[#f4f7fb] border border-slate-200 rounded-2xl group hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0058bc] shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-lg">{mod.icon}</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-slate-900 font-bold block text-base leading-snug">
                      {mod.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-slate-600 font-medium">
                      {mod.desc}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#0058bc] text-xl group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  arrow_forward_ios
                </span>
              </div>
            ))}
          </div>

          <Link
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-[#0058bc] font-bold hover:gap-3 transition-all duration-200 self-start"
            href="/service-details#video-editing"
          >
            View Video Editing Details
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {/* Right Video Production Showcase */}
        <div className="lg:col-span-6">
          <div className="bg-[#f4f7fb] border border-slate-200 rounded-3xl p-5 sm:p-7 relative overflow-hidden">
            {/* Timeline Simulation Bar */}
            <div className="flex items-center justify-between mb-4 bg-white border border-slate-200 rounded-2xl p-3.5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0058bc] text-xl">movie_edit</span>
                <span className="font-label-sm text-label-sm font-bold text-slate-900 uppercase tracking-wider">
                  TRIVEX Post-Production Suite
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-[#0058bc] font-mono font-bold">
                4K / 60fps Master
              </span>
            </div>

            {/* Bento Video Preview Cards */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative rounded-2xl overflow-hidden h-44 border border-slate-200 shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Adobe Premiere Pro multi-track video editing timeline workspace"
                  loading="lazy"
                  decoding="async"
                  src="/images/video-timeline-pro.jpg"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-md border border-slate-200 px-2.5 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                  Timeline &amp; Cuts
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-44 border border-slate-200 shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Dual-monitor video post-production and color grading studio"
                  loading="lazy"
                  decoding="async"
                  src="/images/video-production-studio.jpg"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-md border border-slate-200 px-2.5 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                  Reels &amp; Color
                </div>
              </div>
            </div>

            {/* Production Toolchain Strip */}
            <div className="p-4 bg-white border border-slate-200 rounded-2xl">
              <div className="flex justify-between items-center mb-3">
                <span className="font-label-sm text-label-sm uppercase font-bold text-slate-600">
                  Production Pipeline
                </span>
                <span className="font-label-sm text-label-sm text-[#0058bc] font-bold">
                  Broadcast &amp; Social Ready
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="h-9 rounded-xl bg-[#0058bc] flex items-center justify-center text-white font-mono text-xs font-bold shadow-sm">
                  Premiere Pro
                </div>
                <div className="h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-mono text-xs font-bold shadow-sm">
                  After Effects
                </div>
                <div className="h-9 rounded-xl bg-[#f4f7fb] border border-slate-200 flex items-center justify-center text-[#0058bc] font-mono text-xs font-bold">
                  DaVinci
                </div>
                <div className="h-9 rounded-xl bg-[#f4f7fb] border border-slate-200 flex items-center justify-center text-slate-800 font-mono text-xs font-bold">
                  CapCut Pro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassSlabSection>
  );
}
