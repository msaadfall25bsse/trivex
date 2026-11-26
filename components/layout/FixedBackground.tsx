/**
 * Stationary fixed background layer shared across all pages.
 * Keeps the image rich and legible while gently softening the right edge so the
 * darker hardware bezel blends smoothly behind foreground content.
 */
export default function FixedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Mobile Background Image (Vertical Portrait: < md) */}
      <div
        className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/homepage-bg-mobile.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Desktop / Tablet Background Image (Horizontal Landscape: >= md) */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/homepage-bg.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Right-Side Gentle Veil: softens only the far right side while keeping left & center 100% clear */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-[#f4f7ff]/65 via-[#f4f7ff]/25 via-40% to-transparent" />
      <div className="block md:hidden absolute inset-0 bg-gradient-to-l from-[#f4f7ff]/45 via-transparent via-35% to-transparent" />
    </div>
  );
}
