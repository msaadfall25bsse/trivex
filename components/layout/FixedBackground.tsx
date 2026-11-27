/**
 * Stationary fixed background layer shared across all pages.
 * Soft alabaster-slate (#f4f7fb) surface with subtle static ambient depth
 * for zero-lag scrolling and eye-friendly contrast.
 */
export default function FixedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden select-none bg-[#f4f7fb]"
      aria-hidden="true"
    >
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0058bc]/[0.04] blur-3xl" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#0284c7]/[0.03] blur-3xl" />
    </div>
  );
}
