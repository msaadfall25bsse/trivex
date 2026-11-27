import { Children, type ReactNode } from "react";
import FadeContent from "@/components/layout/FadeContent";

/**
 * Shared per-section reveal wrapper applied across pages.
 * Uses pure GPU opacity/transform fade for zero-lag, hydration-safe rendering.
 */
export default function MistPageSections({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative z-10 flex flex-col w-full">
      {Children.toArray(children).map((section, index) => (
        <FadeContent
          key={index}
          effect="fade"
          duration={0.85}
          ease="power2.out"
          threshold={0.08}
          trigger={index === 0 ? "mount" : "scroll"}
          className="w-full"
        >
          {section}
        </FadeContent>
      ))}
    </div>
  );
}
