/**
 * Shared 90%-width (on tablet/desktop) transparent blurred glassmorphism slab section.
 * Remains full-width on mobile to preserve horizontal breathing room.
 */
export default function GlassSlabSection({
  id,
  children,
  containerClassName = "max-w-7xl mx-auto",
}: {
  id?: string;
  children: React.ReactNode;
  containerClassName?: string;
}) {
  return (
    <section id={id} className="w-full py-6 md:py-12 relative z-10 scroll-mt-24">
      <div className="w-full md:w-[90%] mx-auto bg-white/[0.06] backdrop-blur-2xl py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-white/60 shadow-[0_8px_32px_rgba(13,28,46,0.04)] glass-rim">
        <div className={containerClassName}>{children}</div>
      </div>
    </section>
  );
}
