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
  // Skip tiny stat/badge cards so numeric counters don't stagger inside narrow padding
  if (card.clientWidth < 190 || card.clientHeight < 120) {
    return [];
  }
  return Array.from(
    card.querySelectorAll<HTMLElement>("h2, h3, h4, p")
  ).filter((node) => !node.closest(".animate-marquee"));
}

/**
 * Scroll-site-generator hybrid motion engine (Lenis + GSAP ScrollTrigger).
 * - Scrolling DOWN: cards fade up from below (y: +48 -> 0), text slides in from right (x: +54 -> 0).
 * - Scrolling UP:   cards fade down from above (y: -48 -> 0), text slides in from left  (x: -54 -> 0).
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Smooth anchor navigation with offset for sticky header
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const dest = document.querySelector(href);
        if (dest) {
          e.preventDefault();
          lenis.scrollTo(dest as HTMLElement, { offset: -96 });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    let ctx: gsap.Context | undefined;
    const frameId = requestAnimationFrame(() => {
      const main = document.querySelector("main");
      if (!main || prefersReducedMotion) return;

      ctx = gsap.context(() => {
        const rawCards = Array.from(
          main.querySelectorAll<HTMLElement>(CARD_SELECTOR)
        ).filter(
          (el) =>
            !el.matches("a, button") &&
            !el.closest(".animate-marquee")
        );

        // Keep top-level cards only so nested glass panels don't double-animate
        const cards = rawCards.filter(
          (el) => !rawCards.some((other) => other !== el && other.contains(el))
        );

        const rawTextTargets = Array.from(
          main.querySelectorAll<HTMLElement>(
            "h1, h2, h3, h4, section p, section .inline-flex.rounded-full"
          )
        ).filter(
          (el) =>
            !el.closest(".animate-marquee") &&
            !el.closest("svg") &&
            !el.closest("form") &&
            !cards.some((c) => c === el || c.contains(el))
        );

        // Deduplicate nested text targets (e.g. an inline-flex pill with inner text)
        const textTargets = rawTextTargets.filter(
          (el) =>
            !rawTextTargets.some((other) => other !== el && other.contains(el))
        );

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const playCardEnter = (
          card: HTMLElement,
          innerTexts: HTMLElement[],
          direction: "down" | "up",
          delay = 0
        ) => {
          const fromY = direction === "down" ? 48 : -48;
          const fromX = direction === "down" ? 24 : -24;

          gsap.killTweensOf([card, ...innerTexts]);
          card.style.transition = "none";

          gsap.fromTo(
            card,
            { opacity: 0, y: fromY, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.78,
              delay,
              ease: "power3.out",
              overwrite: "auto",
              onComplete: () => {
                card.style.transition = "";
                gsap.set(card, { clearProps: "transform" });
              },
            }
          );

          if (innerTexts.length > 0) {
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
          gsap.killTweensOf([card, ...innerTexts]);
          card.style.transition = "none";
          gsap.set(card, {
            opacity: 0,
            y: edge === "top" ? -36 : 36,
          });
          if (innerTexts.length > 0) {
            gsap.set(innerTexts, {
              opacity: 0,
              x: edge === "top" ? -20 : 20,
            });
          }
        };

        const playTextEnter = (
          el: HTMLElement,
          direction: "down" | "up",
          delay = 0
        ) => {
          const fromX = direction === "down" ? 54 : -54;
          gsap.killTweensOf(el);
          gsap.fromTo(
            el,
            { opacity: 0, x: fromX },
            {
              opacity: 1,
              x: 0,
              duration: 0.74,
              delay,
              ease: "power3.out",
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
            x: edge === "top" ? -40 : 40,
          });
        };

        // 1. Register Cards
        let initialCardCount = 0;
        cards.forEach((card) => {
          const innerTexts = getCardInnerTexts(card);
          const siblings = Array.from(
            card.parentElement?.children ?? []
          ).filter((c) => cards.includes(c as HTMLElement));
          const colIndex = Math.max(0, siblings.indexOf(card));
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
            onEnter: () => playCardEnter(card, innerTexts, "down", staggerDelay),
            onLeave: () => resetCardOffscreen(card, innerTexts, "top"),
            onEnterBack: () => playCardEnter(card, innerTexts, "up", staggerDelay),
            onLeaveBack: () => resetCardOffscreen(card, innerTexts, "bottom"),
          });
        });

        // 2. Register Standalone Text Blocks
        let initialTextCount = 0;
        textTargets.forEach((el) => {
          const siblings = Array.from(
            el.parentElement?.children ?? []
          ).filter((c) => textTargets.includes(c as HTMLElement));
          const rowIndex = Math.max(0, siblings.indexOf(el));
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
            onEnter: () => playTextEnter(el, "down", textDelay),
            onLeave: () => resetTextOffscreen(el, "top"),
            onEnterBack: () => playTextEnter(el, "up", textDelay),
            onLeaveBack: () => resetTextOffscreen(el, "bottom"),
          });
        });

        ScrollTrigger.refresh();
      }, main);
    });

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("click", handleAnchorClick);
      ctx?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
