import Link from "next/link";
import SplitText from "@/components/home/SplitText";

export default function TeamPreviewSection() {
  return (
    <section className="w-full bg-black py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              LEADERSHIP TRIAD
            </span>
            <SplitText
              tag="h2"
              text="Three Minds. Singular Executive Focus."
              className="font-headline-lg text-headline-lg text-white tracking-tight"
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
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-cyan-300 hover:text-white font-bold group transition-colors"
            href="/our-team"
          >
            <span>View Executive Bios &amp; Credentials</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Founder 1 */}
          <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl rounded-3xl p-5 flex flex-col gap-6 group hover:-translate-y-2 hover:border-[#0058bc]/60 transition-all duration-300 shadow-2xl">
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-black/40 relative shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business headshot of Julian Vance, technical cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsvTqFgH-4cZ5hvPgJi743Vr3VpPa-lKtIFhe6NXXGNMCpPkbTl9lLP_lSqsy4YgCMveOE1qUEqT3p-OzN5CZ3oAPrwAyEw1mbHwbp2SihTL_BwGxfE4M3GLfnGLQZrNVGiQtsvFjuBlMF2B2XQfPZuXxMFZg2h4Jiz4lLVlTjcyOVRS8O3wSjN3KVnlu0ZK9sXtOfxgJlI-c6y-7ag-ZVoYVc2adIIHyr0w2lyg-"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="flex flex-col flex-1 justify-between gap-5 px-1">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-cyan-300 font-bold block mb-1">
                  CORE DOMAIN: TECHNOLOGY
                </span>
                <h3 className="font-headline-sm text-headline-sm text-white font-bold group-hover:text-cyan-300 transition-colors">
                  Julian Vance
                </h3>
                <p className="font-label-md text-label-md text-white/70 mb-3 font-semibold">
                  Head of Engineering &amp; Cloud
                </p>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Former principal distributed systems architect with 14+ years scaling cloud platforms across North America and Europe.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/15">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-mono text-white/80 font-medium border border-white/10">
                  Cloud Scalability
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-mono text-white/80 font-medium border border-white/10">
                  Microservices
                </span>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl rounded-3xl p-5 flex flex-col gap-6 group hover:-translate-y-2 hover:border-[#0058bc]/60 transition-all duration-300 shadow-2xl">
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-black/40 relative shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business portrait of Marcus Chen, digital growth cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfuTJIpfe0dYUTgp-GmTZqqfXIV8q7YPG_K7-4jp3DA_NvWQWc968qSoR54flcccIrQNh5etrLNzZXJD0-M50Z_YS71Eq-wTSuh0XQ1qcluYs1jAtyEndkmHDS0TXi5Xg3dYDcjjUhRmV_eKcVLBO-F6npFgStXXwAZHApXm2AtF5FuDM0GukMwIMPxiC98yxRJjyAJ8ihNZYJCM4jkatq7cUjdo7E9b8t9Wr4wKv6"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="flex flex-col flex-1 justify-between gap-5 px-1">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#0058bc] font-bold block mb-1">
                  CORE DOMAIN: GROWTH
                </span>
                <h3 className="font-headline-sm text-headline-sm text-white font-bold group-hover:text-cyan-300 transition-colors">
                  Marcus Chen
                </h3>
                <p className="font-label-md text-label-md text-white/70 mb-3 font-semibold">
                  Head of Digital Performance &amp; Media
                </p>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Ex-growth lead for Tier-1 DTC and SaaS giants, managing over $90M in cumulative performance advertising spend.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/15">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-mono text-white/80 font-medium border border-white/10">
                  Algorithmic SEO
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-mono text-white/80 font-medium border border-white/10">
                  PPC Funnels
                </span>
              </div>
            </div>
          </div>

          {/* Founder 3 */}
          <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl rounded-3xl p-5 flex flex-col gap-6 group hover:-translate-y-2 hover:border-[#0058bc]/60 transition-all duration-300 shadow-2xl">
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-black/40 relative shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business portrait of Elena Rostova, creative director cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfECKynwu29SR-vDaxMQ8Aet-NIF5Ui55AW_8ppQhHocGmaRxFDhZL2db5BufKSd2fZvY3uMwUMypo1kHowU2koRROZyBwNwiSAJd3OCGd1WfKn1Nz9LR2913ya-JJx-skrlKfcoGZr8sWPWIwpy-ZVOmGQDgICl9tqOdUfcja3MhPI4jUSXLiwCPewoOgtVLsCIxEz2pBkI6Wrhulpsr21W9oQ-zs5bsp8tjMbueb"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="flex flex-col flex-1 justify-between gap-5 px-1">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-cyan-300 font-bold block mb-1">
                  CORE DOMAIN: CREATIVE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-white font-bold group-hover:text-cyan-300 transition-colors">
                  Elena Rostova
                </h3>
                <p className="font-label-md text-label-md text-white/70 mb-3 font-semibold">
                  Head of Brand &amp; UX Architecture
                </p>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Multi-award-winning product designer behind design systems powering enterprise SaaS and Fortune 500 mobile apps.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/15">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-mono text-white/80 font-medium border border-white/10">
                  Design Tokens
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-mono text-white/80 font-medium border border-white/10">
                  Interaction Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
