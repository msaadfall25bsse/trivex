import Link from "next/link";
import SplitText from "@/components/home/SplitText";

export default function TeamPreviewSection() {
  return (
    <section className="w-full bg-white py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              LEADERSHIP TRIAD
            </span>
            <SplitText
              tag="h2"
              text="Three Minds. Singular Executive Focus."
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
          <div className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col gap-6 group hover:-translate-y-2 hover:border-[#0058bc]/40 hover:shadow-xl transition-all duration-300 shadow-lg">
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-slate-100 relative shadow-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business headshot of Julian Vance, technical cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsvTqFgH-4cZ5hvPgJi743Vr3VpPa-lKtIFhe6NXXGNMCpPkbTl9lLP_lSqsy4YgCMveOE1qUEqT3p-OzN5CZ3oAPrwAyEw1mbHwbp2SihTL_BwGxfE4M3GLfnGLQZrNVGiQtsvFjuBlMF2B2XQfPZuXxMFZg2h4Jiz4lLVlTjcyOVRS8O3wSjN3KVnlu0ZK9sXtOfxgJlI-c6y-7ag-ZVoYVc2adIIHyr0w2lyg-"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div className="flex flex-col flex-1 justify-between gap-5 px-1">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#0058bc] font-bold block mb-1">
                  CORE DOMAIN: TECHNOLOGY
                </span>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold group-hover:text-[#0058bc] transition-colors">
                  Julian Vance
                </h3>
                <p className="font-label-md text-label-md text-slate-500 mb-3 font-semibold">
                  Head of Engineering &amp; Cloud
                </p>
                <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed font-medium">
                  Former principal distributed systems architect with 14+ years scaling cloud platforms across North America and Europe.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-mono text-slate-700 font-medium border border-slate-200">
                  Cloud Scalability
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-mono text-slate-700 font-medium border border-slate-200">
                  Microservices
                </span>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col gap-6 group hover:-translate-y-2 hover:border-[#0058bc]/40 hover:shadow-xl transition-all duration-300 shadow-lg">
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-slate-100 relative shadow-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business portrait of Marcus Chen, digital growth cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfuTJIpfe0dYUTgp-GmTZqqfXIV8q7YPG_K7-4jp3DA_NvWQWc968qSoR54flcccIrQNh5etrLNzZXJD0-M50Z_YS71Eq-wTSuh0XQ1qcluYs1jAtyEndkmHDS0TXi5Xg3dYDcjjUhRmV_eKcVLBO-F6npFgStXXwAZHApXm2AtF5FuDM0GukMwIMPxiC98yxRJjyAJ8ihNZYJCM4jkatq7cUjdo7E9b8t9Wr4wKv6"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div className="flex flex-col flex-1 justify-between gap-5 px-1">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-sky-600 font-bold block mb-1">
                  CORE DOMAIN: GROWTH
                </span>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold group-hover:text-[#0058bc] transition-colors">
                  Marcus Chen
                </h3>
                <p className="font-label-md text-label-md text-slate-500 mb-3 font-semibold">
                  Head of Digital Performance &amp; Media
                </p>
                <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed font-medium">
                  Ex-growth lead for Tier-1 DTC and SaaS giants, managing over $90M in cumulative performance advertising spend.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-mono text-slate-700 font-medium border border-slate-200">
                  Algorithmic SEO
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-mono text-slate-700 font-medium border border-slate-200">
                  PPC Funnels
                </span>
              </div>
            </div>
          </div>

          {/* Founder 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 flex flex-col gap-6 group hover:-translate-y-2 hover:border-[#0058bc]/40 hover:shadow-xl transition-all duration-300 shadow-lg">
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-slate-100 relative shadow-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Executive business portrait of Elena Rostova, creative director cofounder"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfECKynwu29SR-vDaxMQ8Aet-NIF5Ui55AW_8ppQhHocGmaRxFDhZL2db5BufKSd2fZvY3uMwUMypo1kHowU2koRROZyBwNwiSAJd3OCGd1WfKn1Nz9LR2913ya-JJx-skrlKfcoGZr8sWPWIwpy-ZVOmGQDgICl9tqOdUfcja3MhPI4jUSXLiwCPewoOgtVLsCIxEz2pBkI6Wrhulpsr21W9oQ-zs5bsp8tjMbueb"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div className="flex flex-col flex-1 justify-between gap-5 px-1">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#0058bc] font-bold block mb-1">
                  CORE DOMAIN: CREATIVE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold group-hover:text-[#0058bc] transition-colors">
                  Elena Rostova
                </h3>
                <p className="font-label-md text-label-md text-slate-500 mb-3 font-semibold">
                  Head of Brand &amp; UX Architecture
                </p>
                <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed font-medium">
                  Multi-award-winning product designer behind design systems powering enterprise SaaS and Fortune 500 mobile apps.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-mono text-slate-700 font-medium border border-slate-200">
                  Design Tokens
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-mono text-slate-700 font-medium border border-slate-200">
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
