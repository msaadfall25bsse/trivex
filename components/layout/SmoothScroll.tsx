"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const CARD_SELECTOR =
  ".glass-card-pro, .glass-panel-pro, .glass-surface-card, .glass-card-dark";

function getCardInnerTexts(card: HTMLElement): HTMLElement[] {
  if (card.clientWidth < 190 || card.clientHeight < 120) {
    return [];
  }
  return Array.from(
    card.querySelectorAll<HTMLElement>("h2, h3, h4, p")
  ).filter((node) => !node.closest(".animate-marquee"));
}

/**
 * Scroll-site-generator hybrid motion engine (Lenis + GSAP ScrollTrigger).
 * - Desktop: Lenis wheel smoothing + bidirectional card/text scroll choreography.
 * - Mobile / Touch: Native browser momentum scroll (zero JS scroll hijacking) +
 *   lightweight GPU-composited card/heading transitions for lag-free 60/120fps scrolling.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouchOrMobile =
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches;

    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    if (!isTouchOrMobile) {
      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);
      raf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    } else {
      // On touch devices, ignore resize refreshes triggered by mobile URL bar collapse
      ScrollTrigger.config({ ignoreMobileResize: true });
    }

    // Smooth anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const dest = document.querySelector(href);
        if (dest) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(dest as HTMLElement, { offset: -96 });
          } else {
            dest.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    let ctx: gsap.Context | undefined;
    let cancelled = false;
    // Wait two frames after React hydration completes before mutating DOM styles with GSAP
    const timerId = window.setTimeout(() => {
      if (cancelled) return;
      const main = document.querySelector("main");
      if (!main || prefersReducedMotion) return;

      ctx = gsap.context(() => {
        const rawCards = Array.from(
          main.querySelectorAll<HTMLElement>(CARD_SELECTOR)
        ).filter(
          (el) =>
            !el.matches("a, button") &&
            !el.closest(".animate-marquee") &&
            !el.closest("[data-no-scroll-anim]") &&
            !el.closest("[data-stack-slot]")
        );

        // Keep top-level cards only so nested glass panels don't double-animate
        const cards = rawCards.filter(
          (el) => !rawCards.some((other) => other !== el && other.contains(el))
        );

        const textSelector = isTouchOrMobile
          ? "section h1, section h2"
          : "h1, h2, h3, h4, section p, section .inline-flex.rounded-full";

        const rawTextTargets = Array.from(
          main.querySelectorAll<HTMLElement>(textSelector)
        ).filter(
          (el) =>
            !el.matches(".split-parent") &&
            !el.closest(".split-parent") &&
            !el.closest(".animate-marquee") &&
            !el.closest("svg") &&
            !el.closest("form") &&
            !el.closest("[data-no-scroll-anim]") &&
            !el.closest("[data-stack-slot]") &&
            !cards.some((c) => c === el || c.contains(el))
        );

        const textTargets = rawTextTargets.filter(
          (el) =>
            !rawTextTargets.some((other) => other !== el && other.contains(el))
        );

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const cardDuration = isTouchOrMobile ? 0.48 : 0.78;
        const textDuration = isTouchOrMobile ? 0.45 : 0.74;

        const playCardEnter = (
          card: HTMLElement,
          innerTexts: HTMLElement[],
          direction: "down" | "up",
          delay = 0
        ) => {
          const fromY = direction === "down" ? (isTouchOrMobile ? 28 : 48) : (isTouchOrMobile ? -28 : -48);
          const fromX = direction === "down" ? 24 : -24;

          gsap.killTweensOf(isTouchOrMobile ? card : [card, ...innerTexts]);
          if (!isTouchOrMobile) card.style.transition = "none";

          gsap.fromTo(
            card,
            { opacity: 0, y: fromY, ...(isTouchOrMobile ? {} : { scale: 0.98 }) },
            {
              opacity: 1,
              y: 0,
              ...(isTouchOrMobile ? {} : { scale: 1 }),
              duration: cardDuration,
              delay: isTouchOrMobile ? 0 : delay,
              ease: "power2.out",
              force3D: true,
              overwrite: "auto",
              onComplete: () => {
                if (!isTouchOrMobile) card.style.transition = "";
                gsap.set(card, { clearProps: "transform" });
              },
            }
          );

          if (!isTouchOrMobile && innerTexts.length > 0) {
            gsap.fromTo(
              innerTexts,
              { opacity: 0, x: fromX },
              {
                opacity: 1,
                x: 0,
                duration: 0.68,
                delay: delay + 0.08,
                stagger: 0.04,
                ease: "power3.out",
                force3D: true,
                overwrite: "auto",
                clearProps: "transform",
              }
            );
          }
        };

        const resetCardOffscreen = (
          card: HTMLElement,
          innerTexts: HTMLElement[],
          edge: "top" | "bottom"
        ) => {
          gsap.killTweensOf(isTouchOrMobile ? card : [card, ...innerTexts]);
          if (!isTouchOrMobile) card.style.transition = "none";
          gsap.set(card, {
            opacity: 0,
            y: edge === "top" ? -28 : 28,
            force3D: true,
          });
          if (!isTouchOrMobile && innerTexts.length > 0) {
            gsap.set(innerTexts, {
              opacity: 0,
              x: edge === "top" ? -20 : 20,
              force3D: true,
            });
          }
        };

        const playTextEnter = (
          el: HTMLElement,
          direction: "down" | "up",
          delay = 0
        ) => {
          const fromX = direction === "down" ? (isTouchOrMobile ? 28 : 54) : (isTouchOrMobile ? -28 : -54);
          gsap.killTweensOf(el);
          gsap.fromTo(
            el,
            { opacity: 0, x: fromX },
            {
              opacity: 1,
              x: 0,
              duration: textDuration,
              delay: isTouchOrMobile ? 0 : delay,
              ease: "power2.out",
              force3D: true,
              overwrite: "auto",
              clearProps: "transform",
            }
          );
        };

        const resetTextOffscreen = (
          el: HTMLElement,
          edge: "top" | "bottom"
        ) => {
          gsap.killTweensOf(el);
          gsap.set(el, {
            opacity: 0,
            x: edge === "top" ? -24 : 24,
            force3D: true,
          });
        };

        // 1. Register Cards
        let initialCardCount = 0;
        cards.forEach((card) => {
          const innerTexts = isTouchOrMobile ? [] : getCardInnerTexts(card);
          const siblings = isTouchOrMobile
            ? []
            : Array.from(card.parentElement?.children ?? []).filter((c) =>
                cards.includes(c as HTMLElement)
              );
          const colIndex = isTouchOrMobile ? 0 : Math.max(0, siblings.indexOf(card));
          const staggerDelay = vw >= 640 ? Math.min(colIndex * 0.09, 0.3) : 0;

          const rect = card.getBoundingClientRect();
          if (rect.bottom <= vh * 0.04) {
            resetCardOffscreen(card, innerTexts, "top");
          } else if (rect.top < vh * 0.94) {
            playCardEnter(
              card,
              innerTexts,
              "down",
              Math.min(initialCardCount * 0.06, 0.25)
            );
            initialCardCount++;
          } else {
            resetCardOffscreen(card, innerTexts, "bottom");
          }

          ScrollTrigger.create({
            trigger: card,
            start: "top 92%",
            end: "bottom 4%",
            fastScrollEnd: true,
            preventOverlaps: true,
            onEnter: () => playCardEnter(card, innerTexts, "down", staggerDelay),
            onLeave: () => resetCardOffscreen(card, innerTexts, "top"),
            onEnterBack: () => playCardEnter(card, innerTexts, "up", staggerDelay),
            onLeaveBack: () => resetCardOffscreen(card, innerTexts, "bottom"),
          });
        });

        // 2. Register Standalone Text Blocks
        let initialTextCount = 0;
        textTargets.forEach((el) => {
          const siblings = isTouchOrMobile
            ? []
            : Array.from(el.parentElement?.children ?? []).filter((c) =>
                textTargets.includes(c as HTMLElement)
              );
          const rowIndex = isTouchOrMobile ? 0 : Math.max(0, siblings.indexOf(el));
          const textDelay = Math.min(rowIndex * 0.06, 0.24);

          const rect = el.getBoundingClientRect();
          if (rect.bottom <= vh * 0.04) {
            resetTextOffscreen(el, "top");
          } else if (rect.top < vh * 0.94) {
            playTextEnter(el, "down", Math.min(initialTextCount * 0.05, 0.25));
            initialTextCount++;
          } else {
            resetTextOffscreen(el, "bottom");
          }

          ScrollTrigger.create({
            trigger: el,
            start: "top 92%",
            end: "bottom 4%",
            fastScrollEnd: true,
            preventOverlaps: true,
            onEnter: () => playTextEnter(el, "down", textDelay),
            onLeave: () => resetTextOffscreen(el, "top"),
            onEnterBack: () => playTextEnter(el, "up", textDelay),
            onLeaveBack: () => resetTextOffscreen(el, "bottom"),
          });
        });

        ScrollTrigger.refresh();
      }, main);
    }, 120);

    return () => {
      cancelled = true;
      window.clearTimeout(timerId);
      document.removeEventListener("click", handleAnchorClick);
      ctx?.revert();
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
