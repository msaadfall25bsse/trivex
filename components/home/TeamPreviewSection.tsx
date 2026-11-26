import Link from "next/link";

export default function TeamPreviewSection() {
  return (
    <section className="w-full bg-transparent py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">
              LEADERSHIP TRIAD
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Three Minds. Singular Executive Focus.
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold hover:underline group"
            href="/our-team"
          >
            <span>View Executive Bios &amp; Credentials</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* 3 Leadership Bento Cards with Glassmorphism & Refined Dimensional Depth */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Founder 1: Technology */}
          <div className="glass-card-pro rounded-3xl overflow-hidden glass-rim flex flex-col group">
            <div className="h-72 w-full overflow-hidden bg-surface-container relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business headshot of Julian Vance, technical cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsvTqFgH-4cZ5hvPgJi743Vr3VpPa-lKtIFhe6NXXGNMCpPkbTl9lLP_lSqsy4YgCMveOE1qUEqT3p-OzN5CZ3oAPrwAyEw1mbHwbp2SihTL_BwGxfE4M3GLfnGLQZrNVGiQtsvFjuBlMF2B2XQfPZuXxMFZg2h4Jiz4lLVlTjcyOVRS8O3wSjN3KVnlu0ZK9sXtOfxgJlI-c6y-7ag-ZVoYVc2adIIHyr0w2lyg-"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  CORE DOMAIN: TECHNOLOGY
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-bold">
                  Julian Vance
                </h3>
                <p className="font-label-md text-label-md text-secondary mb-3">
                  Head of Engineering &amp; Cloud
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-5 font-medium">
                  Former principal distributed systems architect with 14+ years scaling cloud platforms across North America and Europe.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/40">
                <span className="px-3 py-1.5 rounded-xl glass-subcard text-xs font-mono text-on-surface-variant font-medium">
                  Cloud Scalability
                </span>
                <span className="px-3 py-1.5 rounded-xl glass-subcard text-xs font-mono text-on-surface-variant font-medium">
                  Microservices
                </span>
              </div>
            </div>
          </div>

          {/* Founder 2: Marketing */}
          <div className="glass-card-pro rounded-3xl overflow-hidden glass-rim flex flex-col group">
            <div className="h-72 w-full overflow-hidden bg-surface-container relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business portrait of Marcus Chen, digital growth cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfuTJIpfe0dYUTgp-GmTZqqfXIV8q7YPG_K7-4jp3DA_NvWQWc968qSoR54flcccIrQNh5etrLNzZXJD0-M50Z_YS71Eq-wTSuh0XQ1qcluYs1jAtyEndkmHDS0TXi5Xg3dYDcjjUhRmV_eKcVLBO-F6npFgStXXwAZHApXm2AtF5FuDM0GukMwIMPxiC98yxRJjyAJ8ihNZYJCM4jkatq7cUjdo7E9b8t9Wr4wKv6"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  CORE DOMAIN: GROWTH
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-bold">
                  Marcus Chen
                </h3>
                <p className="font-label-md text-label-md text-secondary mb-3">
                  Head of Digital Performance &amp; Media
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-5 font-medium">
                  Ex-growth lead for Tier-1 DTC and SaaS giants, managing over $90M in cumulative performance advertising spend.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/40">
                <span className="px-3 py-1.5 rounded-xl glass-subcard text-xs font-mono text-on-surface-variant font-medium">
                  Algorithmic SEO
                </span>
                <span className="px-3 py-1.5 rounded-xl glass-subcard text-xs font-mono text-on-surface-variant font-medium">
                  PPC Funnels
                </span>
              </div>
            </div>
          </div>

          {/* Founder 3: Creative */}
          <div className="glass-card-pro rounded-3xl overflow-hidden glass-rim flex flex-col group">
            <div className="h-72 w-full overflow-hidden bg-surface-container relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business portrait of Elena Rostova, creative director cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfECKynwu29SR-vDaxMQ8Aet-NIF5Ui55AW_8ppQhHocGmaRxFDhZL2db5BufKSd2fZvY3uMwUMypo1kHowU2koRROZyBwNwiSAJd3OCGd1WfKn1Nz9LR2913ya-JJx-skrlKfcoGZr8sWPWIwpy-ZVOmGQDgICl9tqOdUfcja3MhPI4jUSXLiwCPewoOgtVLsCIxEz2pBkI6Wrhulpsr21W9oQ-zs5bsp8tjMbueb"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  CORE DOMAIN: CREATIVE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-bold">
                  Elena Rostova
                </h3>
                <p className="font-label-md text-label-md text-secondary mb-3">
                  Head of Brand &amp; UX Architecture
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-5 font-medium">
                  Multi-award-winning product designer behind design systems powering enterprise SaaS and Fortune 500 mobile apps.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/40">
                <span className="px-3 py-1.5 rounded-xl glass-subcard text-xs font-mono text-on-surface-variant font-medium">
                  Design Tokens
                </span>
                <span className="px-3 py-1.5 rounded-xl glass-subcard text-xs font-mono text-on-surface-variant font-medium">
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
