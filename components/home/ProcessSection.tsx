import SplitText from "@/components/home/SplitText";
import BorderGlow from "@/components/home/BorderGlow";

export default function ProcessSection() {
  return (
    <section className="w-full bg-black py-10 md:py-16 relative z-10">
      <BorderGlow
        edgeSensitivity={48}
        glowColor="210 90 60"
        backgroundColor="#0a0c10"
        borderRadius={24}
        glowRadius={48}
        glowIntensity={0.45}
        coneSpread={35}
        animated
        colors={["#0058bc", "#38bdf8", "#0070eb"]}
        className="w-full md:w-[90%] mx-auto"
      >
        <div className="backdrop-blur-xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              PRECISION ROADMAP
            </span>
            <SplitText
              tag="h2"
              text="The 4-Step Triad Delivery Framework"
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
              textAlign="center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <BorderGlow
              edgeSensitivity={48}
              glowColor="210 90 60"
              backgroundColor="#0d111a"
              borderRadius={24}
              glowRadius={48}
              glowIntensity={0.45}
              coneSpread={35}
              animated
              colors={["#0058bc", "#38bdf8", "#0070eb"]}
              className="h-full"
            >
              <div className="h-full p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0058bc] to-cyan-300 font-extrabold text-3xl font-headline-md tracking-tighter">
                      01
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 flex items-center justify-center shadow-sm border border-white/10 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-2xl">search_insights</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
                    Discovery &amp; Strategy
                  </h3>
                  <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                    Technical feasibility assessment, KPI benchmarks, target audience taxonomy, and competitive gap auditing.
                  </p>
                </div>
                <div className="mt-6 pt-3 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2 text-white/80">
                  <span className="material-symbols-outlined text-[#0058bc] text-base">timer</span>
                  <span className="font-label-sm text-label-sm uppercase font-semibold">Scope &amp; Architecture Audit</span>
                </div>
              </div>
            </BorderGlow>

            {/* Step 2 */}
            <BorderGlow
              edgeSensitivity={48}
              glowColor="210 90 60"
              backgroundColor="#0d111a"
              borderRadius={24}
              glowRadius={48}
              glowIntensity={0.45}
              coneSpread={35}
              animated
              colors={["#0058bc", "#38bdf8", "#0070eb"]}
              className="h-full"
            >
              <div className="h-full p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0058bc] to-cyan-300 font-extrabold text-3xl font-headline-md tracking-tighter">
                      02
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#0058bc] flex items-center justify-center shadow-sm border border-white/10 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-2xl">architecture</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
                    Architecture &amp; Design
                  </h3>
                  <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                    Wireframe blueprints, microservice infrastructure modeling, brand design tokens, and technical documentation.
                  </p>
                </div>
                <div className="mt-6 pt-3 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2 text-white/80">
                  <span className="material-symbols-outlined text-[#0058bc] text-base">design_services</span>
                  <span className="font-label-sm text-label-sm uppercase font-semibold">Interactive Prototype Gate</span>
                </div>
              </div>
            </BorderGlow>

            {/* Step 3 */}
            <BorderGlow
              edgeSensitivity={48}
              glowColor="210 90 60"
              backgroundColor="#0d111a"
              borderRadius={24}
              glowRadius={48}
              glowIntensity={0.45}
              coneSpread={35}
              animated
              colors={["#0058bc", "#38bdf8", "#0070eb"]}
              className="h-full"
            >
              <div className="h-full p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0058bc] to-cyan-300 font-extrabold text-3xl font-headline-md tracking-tighter">
                      03
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 flex items-center justify-center shadow-sm border border-white/10 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-2xl">code_blocks</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
                    Agile Execution
                  </h3>
                  <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                    Rapid two-week sprint cycles, automated CI/CD unit testing, conversion ad asset rendering, and QA telemetry.
                  </p>
                </div>
                <div className="mt-6 pt-3 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2 text-white/80">
                  <span className="material-symbols-outlined text-[#0058bc] text-base">bolt</span>
                  <span className="font-label-sm text-label-sm uppercase font-semibold">Continuous CI/CD Delivery</span>
                </div>
              </div>
            </BorderGlow>

            {/* Step 4 */}
            <BorderGlow
              edgeSensitivity={48}
              glowColor="210 90 60"
              backgroundColor="#0d111a"
              borderRadius={24}
              glowRadius={48}
              glowIntensity={0.45}
              coneSpread={35}
              animated
              colors={["#0058bc", "#38bdf8", "#0070eb"]}
              className="h-full"
            >
              <div className="h-full p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0058bc] to-cyan-300 font-extrabold text-3xl font-headline-md tracking-tighter">
                      04
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#0058bc] flex items-center justify-center shadow-sm border border-white/10 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-white mb-2 font-bold text-lg">
                    Launch &amp; Optimization
                  </h3>
                  <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                    Zero-downtime production cutover, ongoing algorithmic CRO, continuous code hardening, and global scaling.
                  </p>
                </div>
                <div className="mt-6 pt-3 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2 text-white/80">
                  <span className="material-symbols-outlined text-[#0058bc] text-base">verified</span>
                  <span className="font-label-sm text-label-sm uppercase font-semibold">Zero-Downtime Guarantee</span>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
      </BorderGlow>
    </section>
  );
}
