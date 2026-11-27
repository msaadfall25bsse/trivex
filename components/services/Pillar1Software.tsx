import Link from "next/link";
import GlassSlabSection from "@/components/layout/GlassSlabSection";

const modules = [
  {
    icon: "code_blocks",
    title: "Custom Software Engineering",
    desc: "Distributed systems, microservices, and fault-tolerant core engines.",
  },
  {
    icon: "web",
    title: "Web Application Development",
    desc: "Next.js, React, Node.js stacks optimized for latency and global edge delivery.",
  },
  {
    icon: "smartphone",
    title: "Mobile Apps (iOS & Android)",
    desc: "High-fidelity native Kotlin/Swift and cross-platform Flutter runtimes.",
  },
  {
    icon: "cloud_sync",
    title: "Cloud & API Architecture",
    desc: "AWS/Azure automated deployments, Kubernetes orchestration, GraphQL APIs.",
  },
  {
    icon: "hub",
    title: "Enterprise Integrations",
    desc: "SAP, Salesforce, legacy bridges, and event-driven data streaming pipelines.",
  },
];

export default function Pillar1Software() {
  return (
    <GlassSlabSection id="software-discipline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Narrative */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 bg-[#0058bc]/10 border border-[#0058bc]/20 text-[#0058bc] rounded-full font-label-sm text-label-sm uppercase font-bold mb-4">
            <span className="material-symbols-outlined text-sm">terminal</span>
            Pillar 01 • Engineering
          </div>
          <h2 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight mb-4">
            Software Development
          </h2>
          <p className="font-body-lg text-body-lg text-slate-600 mb-8 leading-relaxed font-medium">
            Robust, scalable, secure web and mobile applications engineered for high performance, continuous operational continuity, and enterprise compliance.
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
            href="/service-details"
          >
            View Software Details
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {/* Right Visual Showcase */}
        <div className="lg:col-span-6">
          <div className="bg-[#f4f7fb] border border-slate-200 rounded-3xl p-5 sm:p-7 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 bg-white border border-slate-200 rounded-2xl p-3.5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant ml-2 font-mono">
                  architecture.sys.v3.ts
                </span>
              </div>
              <span className="px-2.5 py-0.5 bg-primary/15 text-primary font-label-sm text-label-sm rounded-full uppercase font-bold">
                Active Session
              </span>
            </div>

            {/* Terminal / Code Preview Block */}
            <div className="space-y-4 font-mono text-xs">
              <div className="glass-subcard p-4 rounded-2xl">
                <p className="text-primary font-bold">{"// 1. Cluster Provisioning & Auto-scale Definition"}</p>
                <p className="text-on-surface mt-1.5">
                  <span className="text-secondary font-semibold">export const</span> enterpriseCluster ={" "}
                  <span className="text-primary font-semibold">new</span> CloudKubernetesService(&#123;
                </p>
                <p className="text-on-surface pl-4">
                  tier: <span className="text-primary font-semibold">&quot;global-multi-region&quot;</span>,
                </p>
                <p className="text-on-surface pl-4">
                  faultTolerance: <span className="text-primary font-semibold">&quot;zero-loss-p99&quot;</span>,
                </p>
                <p className="text-on-surface pl-4">
                  concurrencyCapacity: <span className="text-primary font-semibold">250_000</span>,
                </p>
                <p className="text-on-surface">&#125;);</p>
              </div>

              {/* Visual Service Image Container */}
              <div className="relative rounded-2xl overflow-hidden h-64 w-full shadow-md border border-white/50">
                <img
                  className="w-full h-full object-cover"
                  alt="Futuristic software engineering headquarters showing modern developers collaborating"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDat3CUxiYE2z0bxoFogJ3Tv4eAL6QxNtFo2F47hlRdvjXTzwhIFbNVBiwzq-uS41Ec3tXMMz9942Gdf2MxeIqjfoOgQGap1XoG4TLiyuFnt_mBmC5nzRvK_3l4lXsmYASrZvXStcAHd086IeTIKT8bD6ED4Ca94qE4403tx0gP1_bw6KTBJbrfkkyIwtIrpwW465hxK1WOYXKMf4PpdKWj8fBnWfz42TMpsaiGJfTD"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                        Enterprise SLA
                      </p>
                      <p className="text-white font-headline-sm text-headline-sm font-bold">
                        99.999% Fault Resilient
                      </p>
                    </div>
                    <span className="px-3.5 py-1.5 bg-primary text-on-primary rounded-full font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-md">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Micro Metric Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1 font-sans">
                <div className="p-3.5 glass-subcard rounded-2xl">
                  <div className="flex items-center gap-1.5 text-on-surface-variant text-xs font-medium">
                    <span className="material-symbols-outlined text-sm text-primary">speed</span>
                    <span>Response Latency</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold block mt-0.5">
                    &lt; 14ms Global
                  </span>
                </div>
                <div className="p-3.5 glass-subcard rounded-2xl">
                  <div className="flex items-center gap-1.5 text-on-surface-variant text-xs font-medium">
                    <span className="material-symbols-outlined text-sm text-primary">security</span>
                    <span>Security Standard</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold block mt-0.5">
                    SOC2 / ISO27001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassSlabSection>
  );
}
