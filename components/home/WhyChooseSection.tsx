import SplitText from "@/components/home/SplitText";

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-black py-10 md:py-16 relative z-10">
      <div className="w-full md:w-[90%] mx-auto bg-white/[0.04] backdrop-blur-xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-2">
              PRECISION ADVANTAGE
            </span>
            <SplitText
              tag="h2"
              text="A Smarter Approach to Digital Excellence"
              className="font-headline-lg text-headline-lg text-white tracking-tight"
              effect="flip"
              splitType="words, chars"
              delay={25}
              duration={1.0}
              staggerFrom="start"
              trigger="view"
              mask
              threshold={0.1}
              rootMargin="-60px"
              textAlign="left"
            />
            <p className="font-body-md text-body-md text-white/80 leading-relaxed font-medium mt-4 max-w-xl">
              Bringing technology, creative thinking, and digital strategy together to build meaningful business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 01 */}
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0058bc]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10">
                  <span className="material-symbols-outlined text-2xl">supervisor_account</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2.5 font-bold text-lg">
                  Founder-Led Expertise
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Work directly with our founding team, ensuring strategic alignment, clear communication, and hands-on oversight from the very beginning.
                </p>
              </div>
              <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between gap-2">
                <span className="font-label-sm text-label-sm uppercase font-mono text-cyan-300 font-bold tracking-wide">
                  DIRECT COLLABORATION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc] animate-pulse shrink-0"></span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0058bc]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#0058bc] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10">
                  <span className="material-symbols-outlined text-2xl">dataset</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2.5 font-bold text-lg">
                  Integrated Capabilities
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Technology, creative design, and digital marketing work together to create cohesive solutions that support your business objectives.
                </p>
              </div>
              <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between gap-2">
                <span className="font-label-sm text-label-sm uppercase font-mono text-[#0058bc] font-bold tracking-wide">
                  CONNECTED SOLUTIONS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc] animate-pulse shrink-0"></span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0058bc]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10">
                  <span className="material-symbols-outlined text-2xl">analytics</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2.5 font-bold text-lg">
                  Results-Driven Approach
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Every project is guided by clear objectives, measurable outcomes, and a continuous focus on improving performance and delivering value.
                </p>
              </div>
              <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between gap-2">
                <span className="font-label-sm text-label-sm uppercase font-mono text-cyan-300 font-bold tracking-wide">
                  MEASURABLE IMPACT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc] animate-pulse shrink-0"></span>
              </div>
            </div>

            {/* Card 04 */}
            <div className="bg-white/[0.06] border border-white/15 backdrop-blur-xl p-7 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#0058bc]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#0058bc] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-white/10">
                  <span className="material-symbols-outlined text-2xl">published_with_changes</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2.5 font-bold text-lg">
                  Transparent Execution
                </h3>
                <p className="font-body-sm text-body-sm text-white/80 leading-relaxed font-medium">
                  Stay informed at every stage through clear communication, structured workflows, regular updates, and transparent project delivery.
                </p>
              </div>
              <div className="mt-6 pt-3 px-3.5 py-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between gap-2">
                <span className="font-label-sm text-label-sm uppercase font-mono text-[#0058bc] font-bold tracking-wide">
                  CLEAR COMMUNICATION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc] animate-pulse shrink-0"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
