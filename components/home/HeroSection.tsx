import Link from "next/link";
import ElectricLogo from "@/components/home/ElectricLogo";
import FadeContent from "@/components/layout/FadeContent";
import TechStackMarquee from "@/components/home/TechStackMarquee";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden py-14 sm:py-20 lg:py-28">
      {/* Interactive ElectricLogo Backdrop (Centered logo with GlowCursor streaming through) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "480px",
            position: "relative",
          }}
        >
          <ElectricLogo
            src="/trivex-logo.png"
            color="#06b6d4"
            glowColor="#0058bc"
            scale={0.6}
            strands={4}
            bend={0.2}
            crackle={0.9}
            arcs={1.35}
            speed={3}
            interactive
            intensity={0.45}
            glow={1.4}
            thickness={1}
            flicker={0.4}
            fill={0.25}
            cursorIntensity={0.8}
            cursorRadius={150}
            theme="dark"
          />
        </div>
      </div>

      <FadeContent
        effect="mist"
        duration={1.8}
        ease="power2.out"
        stagger={0.1}
        threshold={0.1}
        trigger="mount"
        className="relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Value Copy */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-5 sm:mb-6 shadow-sm max-w-full">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
                <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider font-bold text-white truncate">
                  THREE MINDS. ONE VISION. — International Digital &amp; IT Agency
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-semibold tracking-tight text-white mb-5 sm:mb-6 leading-tight">
                Engineering Digital Velocity for Modern Enterprises.
              </h1>

              {/* Concise Subtitle */}
              <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-white/85 max-w-2xl mb-7 sm:mb-8 leading-relaxed font-medium">
                TRIVE<span className="text-[#0058bc]">X</span> unifies software engineering, high-impact performance marketing, and bespoke brand design under one coordinated leadership team. No silos. Just enterprise execution.
              </p>

              {/* Tactile CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  className="cursor-target tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-[#0058bc] hover:bg-[#0058bc]/90 text-white px-7 py-3.5 rounded-xl shadow-lg shadow-[#0058bc]/25 group text-center"
                  data-cursor-label="Explore Services"
                  href="/services"
                >
                  <span>Explore Our Services</span>
                  <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  className="cursor-target inline-flex items-center justify-center font-label-lg text-label-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-6 py-3.5 rounded-xl font-semibold text-center transition-all"
                  data-cursor-label="Meet Founders"
                  href="/our-team"
                >
                  Meet The Founders
                </Link>
              </div>

              {/* Bento Stat Tiles: Dark Translucent Glass with White Typography */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-8 sm:pt-10 mt-8 sm:mt-10 w-full max-w-lg">
                <div className="bg-white/[0.06] backdrop-blur-md border border-white/15 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center sm:text-left">
                  <p className="text-xl sm:text-2xl lg:text-headline-md text-white font-extrabold tracking-tight">99.98%</p>
                  <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-white/75 mt-1">Uptime</p>
                </div>
                <div className="bg-white/[0.06] backdrop-blur-md border border-white/15 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center sm:text-left">
                  <p className="text-xl sm:text-2xl lg:text-headline-md text-cyan-400 font-extrabold tracking-tight">3.4x</p>
                  <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-white/75 mt-1">Client Growth</p>
                </div>
                <div className="bg-white/[0.06] backdrop-blur-md border border-white/15 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center sm:text-left">
                  <p className="text-xl sm:text-2xl lg:text-headline-md text-white font-extrabold tracking-tight">140+</p>
                  <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-white/75 mt-1">Deployments</p>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Translucent Glass Interface Mockup */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-3 sm:p-3.5 shadow-2xl">
                {/* Simulated Glass Interface Window */}
                <div className="bg-black/45 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-white/15">
                  {/* Window Bar with Skeuomorphic Dots */}
                  <div className="bg-white/[0.06] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-white/15">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-error/80 shadow-inner"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 shadow-inner"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 shadow-inner"></div>
                      <span className="ml-1 sm:ml-2 text-[10px] sm:text-label-sm text-white/80 tracking-widest font-mono">
                        TRIVE<span className="text-[#0058bc]">X</span>_RUNTIME_OPS
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-label-sm text-cyan-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> LIVE
                    </span>
                  </div>

                  {/* Visual Representation with Sparkline Telemetry */}
                  <div className="relative h-60 sm:h-72 lg:h-80 w-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Futuristic software engineering control dashboard and digital product analytics interface displayed on a high resolution screen"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxlHTYflCeyU3k2ZG4CMan8VFKCbw_w4Pgx_yDFPAV1q-XAZoYy1jNiPCl6qC1VZCk8ea2xVWDae2gEZhnFqMupjYUOuxod1zt3e5rRagHL-J5K4nOd6NuDa3g1WfuT05mv6O39AOjFsHcwRz03QYaZ9_8TOdb0VEPQpYsftU8uV3rET4Kd0kkZbugqduWnlfOaurGXP2OTIWSbvi3phIoxsgRHjvgaUxb0hZctLKm"
                    />
                    {/* Semi-transparent overlay with SVG sparklines */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent p-4 sm:p-5 flex flex-col justify-end">
                      <div className="flex items-end justify-between text-white">
                        <div>
                          <span className="text-[10px] sm:text-label-sm uppercase tracking-widest text-cyan-300 font-semibold">
                            Network Throughput
                          </span>
                          <p className="text-base sm:text-headline-sm font-bold text-white">
                            4.82 GB/s Synced
                          </p>
                        </div>
                        {/* Inline Vector Graphic Metric */}
                        <svg className="w-20 sm:w-24 h-8 sm:h-10 text-cyan-400" fill="none" viewBox="0 0 100 40">
                          <path d="M0 32 L20 28 L40 18 L60 22 L80 8 L100 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                          <path d="M0 32 L20 28 L40 18 L60 22 L80 8 L100 12 L100 40 L0 40 Z" fill="currentColor" fillOpacity="0.15"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Metric Badge 1 */}
                <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-black/80 backdrop-blur-xl border border-white/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl max-w-[180px] sm:max-w-[210px] hidden sm:block">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-cyan-400">
                      <span className="material-symbols-outlined text-xl sm:text-2xl">speed</span>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-white/75">Latency</p>
                      <p className="text-sm sm:text-headline-sm text-white font-extrabold">12ms Global</p>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Metric Badge 2 */}
                <div className="absolute -top-4 -right-3 sm:-right-4 bg-gradient-to-r from-primary to-primary-container text-white p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xl max-w-[160px] sm:max-w-[190px] hidden sm:block border border-white/25 hover:scale-105 transition-transform tactile-button">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg sm:text-xl">hub</span>
                    <div>
                      <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-cyan-200">Synchronized Triad</p>
                      <p className="text-xs sm:text-label-lg font-bold text-white">100% In-House</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid: 3-Tier Multidisciplinary Technology Engine LogoLoop */}
          <TechStackMarquee />
        </div>
      </FadeContent>
    </section>
  );
}
