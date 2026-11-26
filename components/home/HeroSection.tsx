import Link from "next/link";
import TechStackMarquee from "@/components/home/TechStackMarquee";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Glassmorphic Eyebrow Badge with Skeuomorphic Live Pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-subcard text-primary mb-5 sm:mb-6 shadow-sm glass-rim max-w-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
              <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider font-bold truncate">
                THREE MINDS. ONE VISION. — International Digital &amp; IT Agency
              </span>
            </div>

            {/* Main Headline (Responsive typography from 30px on small screens to 56px on desktop) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-semibold tracking-tight text-on-surface mb-5 sm:mb-6 leading-tight">
              Engineering Digital Velocity for Modern Enterprises.
            </h1>

            {/* Concise Subtitle */}
            <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl mb-7 sm:mb-8 leading-relaxed font-medium">
              TRIVEX unifies software engineering, high-impact performance marketing, and bespoke brand design under one coordinated leadership team. No silos. Just enterprise execution.
            </p>

            {/* Tactile CTAs with Skeuomorphic Depth & Microinteractions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                className="tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-7 py-3.5 rounded-xl shadow-md group text-center"
                href="/services"
              >
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                className="glass-card-pro inline-flex items-center justify-center font-label-lg text-label-lg text-on-surface hover:text-primary px-6 py-3.5 rounded-xl glass-rim font-semibold text-center"
                href="/our-team"
              >
                Meet The Founders
              </Link>
            </div>

            {/* Bento Stat Tiles: Responsive Grid on Mobile */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-8 sm:pt-10 mt-8 sm:mt-10 w-full max-w-lg">
              <div className="glass-card-pro p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-rim text-center sm:text-left">
                <p className="text-xl sm:text-2xl lg:text-headline-md text-on-surface font-extrabold tracking-tight">99.98%</p>
                <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-secondary mt-1">Uptime</p>
              </div>
              <div className="glass-card-pro p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-rim text-center sm:text-left">
                <p className="text-xl sm:text-2xl lg:text-headline-md text-primary font-extrabold tracking-tight">3.4x</p>
                <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-secondary mt-1">Client Growth</p>
              </div>
              <div className="glass-card-pro p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-rim text-center sm:text-left">
                <p className="text-xl sm:text-2xl lg:text-headline-md text-on-surface font-extrabold tracking-tight">140+</p>
                <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-secondary mt-1">Deployments</p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Glass Interface Mockup Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full rounded-2xl sm:rounded-3xl glass-panel-pro p-3 sm:p-3.5 shadow-2xl glass-rim">
              {/* Simulated Glass Interface Window */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-white/60">
                {/* Window Bar with Skeuomorphic Dots */}
                <div className="bg-white/30 backdrop-blur-md px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-white/40">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-error/80 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 shadow-inner"></div>
                    <span className="ml-1 sm:ml-2 text-[10px] sm:text-label-sm text-secondary tracking-widest font-mono">
                      TRIVEX_RUNTIME_OPS
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-label-sm text-primary font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> LIVE
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
                  <div className="absolute inset-0 bg-gradient-to-t from-on-background/95 via-on-background/40 to-transparent p-4 sm:p-5 flex flex-col justify-end">
                    <div className="flex items-end justify-between text-on-primary">
                      <div>
                        <span className="text-[10px] sm:text-label-sm uppercase tracking-widest text-primary-fixed font-semibold">
                          Network Throughput
                        </span>
                        <p className="text-base sm:text-headline-sm font-bold text-on-primary">
                          4.82 GB/s Synced
                        </p>
                      </div>
                      {/* Inline Vector Graphic Metric */}
                      <svg className="w-20 sm:w-24 h-8 sm:h-10 text-primary-container" fill="none" viewBox="0 0 100 40">
                        <path d="M0 32 L20 28 L40 18 L60 22 L80 8 L100 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                        <path d="M0 32 L20 28 L40 18 L60 22 L80 8 L100 12 L100 40 L0 40 Z" fill="currentColor" fillOpacity="0.15"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Micro Metric Badge 1 (Glassmorphic) */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 glass-card-pro p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl max-w-[180px] sm:max-w-[210px] hidden sm:block glass-rim">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-surface-container flex items-center justify-center text-primary neumorphic-inset">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">speed</span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-secondary">Latency</p>
                    <p className="text-sm sm:text-headline-sm text-on-surface font-extrabold">12ms Global</p>
                  </div>
                </div>
              </div>

              {/* Floating Micro Metric Badge 2 (Spatial Tactile Gradient Badge) */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-gradient-to-r from-primary to-primary-container text-on-primary p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xl max-w-[160px] sm:max-w-[190px] hidden sm:block border border-primary-fixed/20 hover:scale-105 transition-transform tactile-button">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg sm:text-xl">hub</span>
                  <div>
                    <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-primary-fixed">Synchronized Triad</p>
                    <p className="text-xs sm:text-label-lg font-bold">100% In-House</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid: 3-Tier Multidisciplinary Technology Engine Marquee */}
        <TechStackMarquee />
      </div>
    </section>
  );
}
