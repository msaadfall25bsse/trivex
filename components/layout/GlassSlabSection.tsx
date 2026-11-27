/**
 * Shared 90%-width (on tablet/desktop) clean light surface slab section.
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
      <div className="w-full md:w-[90%] mx-auto bg-white py-12 sm:py-16 md:py-20 px-margin-mobile md:px-12 lg:px-16 md:rounded-3xl border-y md:border border-slate-200 shadow-sm">
        <div className={containerClassName}>{children}</div>
      </div>
    </section>
  );
}
