import Link from "next/link";

export default function CorePillarsSection() {
  return (
    <section className="w-full bg-transparent py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">
              INTEGRATED EXCELLENCE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              The Three Core Pillars of TRIVEX
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md font-medium">
            Every pillar is steered directly by a founding director with deep specialized mastery, working in direct sync.
          </p>
        </div>

        {/* Bento Grid: 3 Pillars with Premium Glassmorphism & Tactile Skeuomorphic Accents */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Software Development */}
          <div className="glass-card-pro p-8 rounded-3xl glass-rim flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 tactile-surface group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                PILLAR 01
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-4 font-bold">
                Software Development
              </h3>
              <p className="font-body-sm text-body-sm text-secondary mb-6 leading-relaxed">
                Resilient enterprise software, high-throughput backend services, and clean frontends built for frictionless scale.
              </p>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Custom Web &amp; Mobile Applications
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Enterprise Distributed Microservices
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Scalable Cloud &amp; DevOps Pipelines
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  API Architecture &amp; Database Design
                </li>
              </ul>
            </div>
            <Link
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold group-hover:translate-x-1.5 transition-transform"
              href="/service-details"
            >
              <span>Explore Engineering Stack</span>
              <span className="material-symbols-outlined text-base">east</span>
            </Link>
          </div>

          {/* Pillar 2: Digital Marketing */}
          <div className="glass-card-pro p-8 rounded-3xl glass-rim flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-on-surface/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-on-surface via-secondary to-[#1e2a3a] text-surface-container-lowest flex items-center justify-center mb-6 shadow-lg tactile-surface group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                PILLAR 02
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-4 font-bold">
                Digital Marketing
              </h3>
              <p className="font-body-sm text-body-sm text-secondary mb-6 leading-relaxed">
                Algorithmic performance acquisition, conversion funnel architecture, and global organic dominance.
              </p>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Data-Driven Technical SEO Architecture
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  High-Yield Targeted PPC &amp; Media Buying
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Conversion Rate Optimization (CRO)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Global &amp; Local GEO Expansion Systems
                </li>
              </ul>
            </div>
            <Link
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold group-hover:translate-x-1.5 transition-transform"
              href="/service-details"
            >
              <span>Review Marketing Operations</span>
              <span className="material-symbols-outlined text-base">east</span>
            </Link>
          </div>

          {/* Pillar 3: Graphic Designing */}
          <div className="glass-card-pro p-8 rounded-3xl glass-rim flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary-container/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-container to-[#3b82f6] text-on-primary flex items-center justify-center mb-6 shadow-lg shadow-primary-container/20 tactile-surface group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">palette</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                PILLAR 03
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-4 font-bold">
                Graphic Designing
              </h3>
              <p className="font-body-sm text-body-sm text-secondary mb-6 leading-relaxed">
                Cohesive brand identity systems, ergonomic product UI/UX architectures, and precision visual assets.
              </p>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Enterprise Design Systems &amp; Token Libraries
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  High-Fidelity UI/UX Prototyping
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Brand Identity Guidelines &amp; Asset Creation
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Interactive Motion &amp; Vector Illustrations
                </li>
              </ul>
            </div>
            <Link
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold group-hover:translate-x-1.5 transition-transform"
              href="/service-details"
            >
              <span>Discover Design Systems</span>
              <span className="material-symbols-outlined text-base">east</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
