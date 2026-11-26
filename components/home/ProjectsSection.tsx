import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="w-full bg-transparent py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">
              CASE EVIDENCE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Recent Enterprise Deliveries
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold hover:underline group"
            href="/services"
          >
            <span>View All Documented Cases</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Bento Grid: 3 Case Studies with Glassmorphism & Tactile Drawer Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="glass-card-pro rounded-3xl overflow-hidden glass-rim flex flex-col group">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Modern financial technology dashboard web application interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQM9t5BuA7gSVIfTZaHnRw65gwowH5PrUzqyRn1WYjEyfXjfglETyyonj-hjLrl32E1wtI75a8m7ZGkUqMcf7NzSekkJ5-YX4BbWiCjBidC4hHZSt0A2yrHkS5BxIUE-C6d1S77Ppq8GlR54GzYo_4_ogErgOcMa3oSA3kwE1XUVbmLNeNP6cbzehGwyw4HZlDTcpdt95TJIirJj0sZ3EU3VrMZ5SPvMTC7dwx37fc"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xl px-3.5 py-1.5 rounded-full text-primary font-label-sm text-label-sm uppercase font-bold shadow-md border border-white/90 glass-rim">
                Fintech SaaS
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
                  AuraPay Global Cloud Platform
                </h3>
                <p className="font-body-sm text-body-sm text-secondary mb-5 leading-relaxed font-medium">
                  Re-architected real-time cross-border settlements engine with sub-second reconciliations and SOC2 compliant telemetry.
                </p>
              </div>
              <div className="glass-subcard rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary block">Transaction Vol</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">$140M+/mo</span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-label-sm text-secondary block">Latency Cut</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-extrabold">-74%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-card-pro rounded-3xl overflow-hidden glass-rim flex flex-col group">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="International e-commerce consumer goods brand marketing analytics console"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXrvqMasqmCRvDJhDVYbdxBXQutdqdT6jYpNwRHksgJYf1xx2feDG5_8EGSu1xJgJTK7TXrR2hDQJ-BAm2qZW8qPL18uLoBzC3GLuxYeDCxSn6garOsAoCeNRsVviAYDBDH2rRpFpxh_ZZXBc918jkuVQLLYxkfDyvcVgKF5GqPwqbd-uW5NoLGseG58FTwSRUFWG8MB4LhX_0EqsQqbjKlxD_Wve8fLdHlfq3LUjc"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xl px-3.5 py-1.5 rounded-full text-on-surface font-label-sm text-label-sm uppercase font-bold shadow-md border border-white/90 glass-rim">
                Global Growth
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
                  Nordic Retail Omni-Channel Scaling
                </h3>
                <p className="font-body-sm text-body-sm text-secondary mb-5 leading-relaxed font-medium">
                  Executed multi-region programmatic media and automated feed optimization spanning 14 European markets.
                </p>
              </div>
              <div className="glass-subcard rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary block">Blended ROAS</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">5.8x</span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-label-sm text-secondary block">New ARR</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-extrabold">+$12.4M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="glass-card-pro rounded-3xl overflow-hidden glass-rim flex flex-col group">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Corporate brand identity book and design system components"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDUcJpp8frTWqHTEMs64hniQoZCQkajjhUZ05xeG6n2aEynaFl_Z02h26j2UBdyDhsgCVrXUB-T23YzH9ZU-eFYkzQ94A4wSDkYOyr9QunRcSspLCb8yj14c3rR-XhfKG3whljYUWwO4QPuDTjuDkfWCxmw7mteFTdBORUA6Ew7R6g5qWzqo5o1aNH9n9HOhlt2Qt05T6CIeV-OcP50MFfwreJ-hw5raQL09YD5oYc"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xl px-3.5 py-1.5 rounded-full text-primary font-label-sm text-label-sm uppercase font-bold shadow-md border border-white/90 glass-rim">
                Enterprise Architecture
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
                  Sovereign Aerospace UI/UX Design System
                </h3>
                <p className="font-body-sm text-body-sm text-secondary mb-5 leading-relaxed font-medium">
                  Crafted multi-platform design tokens and accessibility validated cockpit interface components for defense avionics.
                </p>
              </div>
              <div className="glass-subcard rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary block">System Components</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">480+</span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-label-sm text-secondary block">Adoption Velocity</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-extrabold">3.2x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
