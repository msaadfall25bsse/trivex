import Link from "next/link";
import GlassSlabSection from "@/components/layout/GlassSlabSection";

const modules = [
  {
    icon: "auto_awesome",
    title: "Brand Identity & Logo Systems",
    desc: "Iconography, bespoke brand guidelines, typography hierarchies, and tactile tone.",
  },
  {
    icon: "draw",
    title: "UI/UX Product Design",
    desc: "High-fidelity Figma prototypes, micro-interactions, and design systems for enterprise scale.",
  },
  {
    icon: "layers",
    title: "Marketing & Campaign Assets",
    desc: "Key visual suites, global pitch decks, conference experiences, and print ephemera.",
  },
  {
    icon: "motion_photos_on",
    title: "Motion Design & Design Systems",
    desc: "3D product animations, tokenized component libraries, and unified multi-brand code-sync.",
  },
];

export default function Pillar3Design() {
  return (
    <GlassSlabSection id="design-discipline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Narrative */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 glass-subcard text-primary rounded-full font-label-sm text-label-sm uppercase font-bold mb-4">
            <span className="material-symbols-outlined text-sm">palette</span>
            Pillar 03 • Brand &amp; Interface
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
            Graphic Designing
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed font-medium">
            Memorable visual identities and human-centered user interfaces that elevate brand authority, inspire conviction, and drive effortless digital conversion.
          </p>

          {/* Module List */}
          <div className="flex flex-col gap-3.5 mb-8">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className="flex items-center justify-between p-4 glass-surface-card rounded-2xl glass-rim group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl glass-subcard flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-lg">{mod.icon}</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold block text-base leading-snug">
                      {mod.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      {mod.desc}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-xl group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  arrow_forward_ios
                </span>
              </div>
            ))}
          </div>

          <Link
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold hover:gap-3 transition-all duration-200 self-start"
            href="/service-details"
          >
            View Design Details
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {/* Right Creative UI/UX Showcase */}
        <div className="lg:col-span-6">
          <div className="glass-surface-card rounded-3xl p-5 sm:p-7 glass-rim relative overflow-hidden">
            {/* Canvas Simulation Bar */}
            <div className="flex items-center justify-between mb-4 glass-subcard rounded-2xl p-3.5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">design_services</span>
                <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase tracking-wider">
                  TRIVEX UI Design System v4.8
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-mono font-bold">
                100% Tokenized
              </span>
            </div>

            {/* Bento Design Preview Cards */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative rounded-2xl overflow-hidden h-44 border border-white/50 shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Sophisticated typography specimen booklet and branding kit"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP3FRmy_VBKe8mmx6c28tG78oJ7zsDP0zs84saT9GRuzjBuAZuBpLqP1dNSzzAzgZNbgPwmCN8lRZFogoZVKopSdhNK_yG5POghYH95m0Vr-9QKkUkP0LS-gLLnkQa-kQQu2anyBly2hWv_T70L3knE1cHCT2j6aU24LpO2xtHbLttiOHvrmVGf6G7WCYuuUcu202bzUPW2uNyR5oqK5cuxrc3njDg_GomHFQPYGGZ"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-white/75 backdrop-blur-xl border border-white/90 px-2.5 py-1 rounded-full text-xs font-bold text-on-surface shadow-sm">
                  Brand Guides
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-44 border border-white/50 shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Futuristic software interface component library in high resolution"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUjAqSBjQLqXnpVIXmESXpot2OYvSroYY4a7_2LeUWD3mWF8Fc9i6uh3lLGalxfsL5xr56wCSbhRc_R8NJqPLIAwxV0BNh_oNp2v_NLsvyK6XiVuZU87m3khsjzNxJq0hFtkKITwHTR3wp2lh1bNbpRwTsWaQskFgfk6fnq-_immoqrmmoXh78ZUm-zYIlEPNT3raBnMoEE5lZdF_peZUI5co6jvZDIRQTB02DaXQD"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-white/75 backdrop-blur-xl border border-white/90 px-2.5 py-1 rounded-full text-xs font-bold text-on-surface shadow-sm">
                  UI Kit 4.8
                </div>
              </div>
            </div>

            {/* Interactive Token Display Strip */}
            <div className="p-4 glass-subcard rounded-2xl">
              <div className="flex justify-between items-center mb-3">
                <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant">
                  Token Swatches
                </span>
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  WCAG AAA Certified
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-mono text-xs font-bold shadow-sm">
                  #0058BC
                </div>
                <div className="h-9 rounded-xl bg-on-background flex items-center justify-center text-surface-container-lowest font-mono text-xs font-bold shadow-sm">
                  #0D1C2E
                </div>
                <div className="h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary font-mono text-xs font-bold shadow-sm">
                  #E6EEFF
                </div>
                <div className="h-9 rounded-xl bg-secondary-container flex items-center justify-center text-secondary font-mono text-xs font-bold shadow-sm">
                  #DBE2F8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassSlabSection>
  );
}
