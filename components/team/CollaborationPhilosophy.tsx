import GlassSlabSection from "@/components/layout/GlassSlabSection";

const points = [
  {
    title: "Continuous Cross-Domain Peer Review",
    desc: "Design reviews code efficiency; engineers evaluate UX accessibility; marketing measures data telemetry on every interface.",
  },
  {
    title: "Daily Founder Executive Huddles",
    desc: "Active roadmaps across engineering, growth, and creative tracks are synchronized daily at 09:00 UTC for unified cadence.",
  },
  {
    title: "Unified Design-to-Production Pipeline",
    desc: "Zero assets or codebases leave TRIVEX without the joint cryptographic verification and sign-off of all three discipline leads.",
  },
];

export default function CollaborationPhilosophy() {
  return (
    <GlassSlabSection>
      <div className="glass-surface-card rounded-3xl p-6 sm:p-8 md:p-12 glass-rim">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mb-2">
              Operational Framework
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
              Team Collaboration Philosophy
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 font-medium">
              Under the direct, hands-on supervision of our three founders, our specialized engineering squads, performance marketing strategists, and UI/UX designers operate not as isolated silos, but as a unified cross-disciplinary unit.
            </p>
            <div className="space-y-4">
              {points.map((pt) => (
                <div key={pt.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5 shrink-0">
                    <span className="material-symbols-outlined text-sm font-bold">done</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface text-base font-bold">
                      {pt.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Visualization Diagram (Inline SVG + Metric Mosaic) */}
          <div className="lg:col-span-7">
            <div className="glass-subcard rounded-2xl sm:rounded-3xl p-6 md:p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="font-label-md text-label-md uppercase tracking-wider font-bold text-on-surface">
                    The Tri-Vector Matrix
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                  ISO/IEC 25010 Verified Model
                </span>
              </div>

              {/* Node Graph SVG */}
              <div className="w-full flex items-center justify-center py-4">
                <svg className="w-full h-auto max-w-lg text-primary" fill="none" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
                  {/* Connection Lines */}
                  <path d="M250 50 L110 220" stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.35" strokeWidth="2"></path>
                  <path d="M250 50 L390 220" stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.35" strokeWidth="2"></path>
                  <path d="M110 220 L390 220" stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.35" strokeWidth="2"></path>
                  {/* Central Convergence Core */}
                  <circle cx="250" cy="165" fill="#0058bc" fillOpacity="0.08" r="42"></circle>
                  <circle cx="250" cy="165" fill="#0058bc" fillOpacity="0.16" r="28"></circle>
                  <circle cx="250" cy="165" fill="#0058bc" r="8"></circle>
                  <text fill="#0d1c2e" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" textAnchor="middle" x="250" y="145">TRIVEX CORE</text>
                  <text fill="#414754" fontFamily="Plus Jakarta Sans" fontSize="9" textAnchor="middle" x="250" y="195">Unified Output</text>
                  {/* Node 1: Tech */}
                  <g className="cursor-pointer group">
                    <circle cx="250" cy="50" fill="rgba(255,255,255,0.75)" r="32" stroke="currentColor" strokeWidth="2"></circle>
                    <text fill="#0058bc" fontFamily="Plus Jakarta Sans" fontSize="12" fontWeight="700" textAnchor="middle" x="250" y="47">ENGINEERING</text>
                    <text fill="#414754" fontFamily="Plus Jakarta Sans" fontSize="8" textAnchor="middle" x="250" y="60">Head of Tech</text>
                  </g>
                  {/* Node 2: Marketing */}
                  <g className="cursor-pointer group">
                    <circle cx="110" cy="220" fill="rgba(255,255,255,0.75)" r="32" stroke="currentColor" strokeWidth="2"></circle>
                    <text fill="#0058bc" fontFamily="Plus Jakarta Sans" fontSize="12" fontWeight="700" textAnchor="middle" x="110" y="217">MARKETING</text>
                    <text fill="#414754" fontFamily="Plus Jakarta Sans" fontSize="8" textAnchor="middle" x="110" y="230">Head of Growth</text>
                  </g>
                  {/* Node 3: Creative */}
                  <g className="cursor-pointer group">
                    <circle cx="390" cy="220" fill="rgba(255,255,255,0.75)" r="32" stroke="currentColor" strokeWidth="2"></circle>
                    <text fill="#0058bc" fontFamily="Plus Jakarta Sans" fontSize="12" fontWeight="700" textAnchor="middle" x="390" y="217">DESIGN</text>
                    <text fill="#414754" fontFamily="Plus Jakarta Sans" fontSize="8" textAnchor="middle" x="390" y="230">Head of Creative</text>
                  </g>
                </svg>
              </div>

              {/* Metric Strip Below Graphic */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/40 mt-4 text-center">
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary block font-extrabold">100%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Partner Vetted
                  </span>
                </div>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block font-extrabold">3-Tier</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Audit Gate
                  </span>
                </div>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block font-extrabold">0%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Subcontracting
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
