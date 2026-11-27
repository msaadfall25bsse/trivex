import Link from "next/link";
import GridMotion, { type GridMotionItem } from "@/components/home/GridMotion";
import SplitText from "@/components/home/SplitText";
import TechStackMarquee from "@/components/home/TechStackMarquee";

/**
 * Hero GridMotion items (8 visual image slots alongside TRIVEX showcase visuals).
 */
const HERO_GRID_ITEMS: GridMotionItem[] = [
  "https://images.unsplash.com/photo-1705032033999-efa3082e1a4e?w=640&q=75&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAxlHTYflCeyU3k2ZG4CMan8VFKCbw_w4Pgx_yDFPAV1q-XAZoYy1jNiPCl6qC1VZCk8ea2xVWDae2gEZhnFqMupjYUOuxod1zt3e5rRagHL-J5K4nOd6NuDa3g1WfuT05mv6O39AOjFsHcwRz03QYaZ9_8TOdb0VEPQpYsftU8uV3rET4Kd0kkZbugqduWnlfOaurGXP2OTIWSbvi3phIoxsgRHjvgaUxb0hZctLKm",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDQM9t5BuA7gSVIfTZaHnRw65gwowH5PrUzqyRn1WYjEyfXjfglETyyonj-hjLrl32E1wtI75a8m7ZGkUqMcf7NzSekkJ5-YX4BbWiCjBidC4hHZSt0A2yrHkS5BxIUE-C6d1S77Ppq8GlR54GzYo_4_ogErgOcMa3oSA3kwE1XUVbmLNeNP6cbzehGwyw4HZlDTcpdt95TJIirJj0sZ3EU3VrMZ5SPvMTC7dwx37fc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXrvqMasqmCRvDJhDVYbdxBXQutdqdT6jYpNwRHksgJYf1xx2feDG5_8EGSu1xJgJTK7TXrR2hDQJ-BAm2qZW8qPL18uLoBzC3GLuxYeDCxSn6garOsAoCeNRsVviAYDBDH2rRpFpxh_ZZXBc918jkuVQLLYxkfDyvcVgKF5GqPwqbd-uW5NoLGseG58FTwSRUFWG8MB4LhX_0EqsQqbjKlxD_Wve8fLdHlfq3LUjc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDUcJpp8frTWqHTEMs64hniQoZCQkajjhUZ05xeG6n2aEynaFl_Z02h26j2UBdyDhsgCVrXUB-T23YzH9ZU-eFYkzQ94A4wSDkYOyr9QunRcSspLCb8yj14c3rR-XhfKG3whljYUWwO4QPuDTjuDkfWCxmw7mteFTdBORUA6Ew7R6g5qWzqo5o1aNH9n9HOhlt2Qt05T6CIeV-OcP50MFfwreJ-hw5raQL09YD5oYc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jzS1z_4XddokxYxaI4Ia4f0OgyG9GDDAKQFycmbW6WkVL1589yngz2xkGcTmNYpmoc5WWOpmEfxFVT6IF5hMuhvU_ihcOTnoSgUoBHy8JuqyAGBUmOlgL3BKPDfGmt_U-kVL0-9Lth_B-kt989XE9gkW6mcXaAk0zp1cOD0HSy0RwtKAbYJ-kY1AL9SKkAu6tgt7umE7ng8x2XaQ8YaQGIKQMC7YCUaBF6DHMJLo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqYiOoW8cPxEyCpeb5EIGWtAUvznSE4SYAofr-TWVa2vps61ordMFSVoP6bcsKVaamPTCoxzzxWqZzNlN7cayd1sRRb6ObVHo53H4xQG5HXeJpEFcJ3z4nZlL24GRCXK2de2RAIlifx-r7W_lWFDu7LYu6PvcFLAhCP7SPLHhM5bW4W0C3uyRLYY8MuvJzsYraYFgUA7DzFuXfpHrd5FKv3Ra7jvrKvpY6PoCI0ogq",
];

export default function HeroSection() {
  return (
    <section
      data-no-scroll-anim
      className="relative w-full bg-white overflow-hidden -mt-20 pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-20 lg:pb-24 border-b border-slate-200/80"
    >
      {/* Interactive GridMotion Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="w-full h-full min-h-[600px] relative">
          <GridMotion
            items={HERO_GRID_ITEMS}
            rows={5}
            aspectRatio={1.33}
            gap={15}
            radius={21}
            angle={21}
            tilt={47}
            speed={56}
            direction="alternate"
            parallax={0.5}
            spotlight={0.5}
            dim={0.18}
            fade={0.45}
            grayscale={false}
            theme="light"
          />
        </div>
      </div>

      {/* Desktop Left-Side Opacity Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/95 via-48% to-white/25"
      />
      {/* Mobile Legibility Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none md:hidden absolute inset-0 z-[1] bg-white/88"
      />

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="max-w-2xl flex flex-col items-start text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/[0.04] backdrop-blur-md border border-slate-200 text-slate-800 mb-6 shadow-sm max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#0058bc] ring-2 ring-[#0058bc]/25 animate-pulse shrink-0"></span>
            <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-widest font-bold text-slate-800 truncate">
              THREE MINDS. ONE VISION. — International Digital &amp; IT Agency
            </span>
          </div>

          {/* Main Executive Headline */}
          <SplitText
            tag="h1"
            text="Engineering Digital Velocity for Modern Enterprises."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.12]"
            effect="flip"
            splitType="words, chars"
            delay={28}
            duration={1.1}
            staggerFrom="start"
            trigger="load"
            replayOnScroll
            hoverEffect="none"
            mask
            textAlign="left"
          />

          {/* Concise Professional Subtitle */}
          <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-medium">
            TRIVEX unifies enterprise software engineering, algorithmic performance marketing, and bespoke brand systems under one coordinated leadership triad. Zero silos. Pure execution velocity.
          </p>

          {/* Tactile CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              className="tactile-button inline-flex items-center justify-center font-label-lg text-label-lg bg-[#0058bc] hover:bg-[#004ba3] text-white px-7 py-3.5 rounded-xl shadow-lg shadow-[#0058bc]/25 group text-center transition-all"
              href="/services"
            >
              <span>Explore Our Services</span>
              <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <Link
              className="inline-flex items-center justify-center font-label-lg text-label-lg bg-white/95 hover:bg-slate-50 border border-slate-300 text-slate-900 px-7 py-3.5 rounded-xl font-semibold text-center shadow-sm transition-all"
              href="/our-team"
            >
              Meet The Founders
            </Link>
          </div>

          {/* Bento Stat Tiles */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-9 mt-9 border-t border-slate-200 w-full max-w-lg">
            <div className="bg-white/90 border border-slate-200 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-center sm:text-left shadow-sm">
              <p className="text-xl sm:text-2xl lg:text-headline-md text-slate-900 font-extrabold tracking-tight">99.98%</p>
              <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-slate-500 mt-1">Uptime</p>
            </div>
            <div className="bg-white/90 border border-slate-200 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-center sm:text-left shadow-sm">
              <p className="text-xl sm:text-2xl lg:text-headline-md text-[#0058bc] font-extrabold tracking-tight">3.4x</p>
              <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-slate-500 mt-1">Client Growth</p>
            </div>
            <div className="bg-white/90 border border-slate-200 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-center sm:text-left shadow-sm">
              <p className="text-xl sm:text-2xl lg:text-headline-md text-slate-900 font-extrabold tracking-tight">140+</p>
              <p className="text-[10px] sm:text-label-sm uppercase tracking-wider text-slate-500 mt-1">Deployments</p>
            </div>
          </div>
        </div>

        {/* Interactive Technology Loop Bar */}
        <TechStackMarquee />
      </div>
    </section>
  );
}
