import { Children, type ReactNode } from "react";
import FadeContent from "@/components/layout/FadeContent";

/**
 * Shared per-section mist animation wrapper applied across every page.
 * Renders the top hero section immediately on mount and scroll-triggers subsequent sections cleanly.
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
          effect="mist"
          duration={1.8}
          ease="power2.out"
          stagger={0.1}
          threshold={0.1}
          trigger={index === 0 ? "mount" : "scroll"}
          className="w-full"
        >
          {section}
        </FadeContent>
      ))}
    </div>
  );
}
