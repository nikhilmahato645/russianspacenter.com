"use client";

import { useEffect } from "react";

/**
 * Scroll reveal engine.
 * Any element with `data-reveal` fades + slides in once it enters the viewport.
 * Optional `data-reveal-delay="120"` (ms) staggers siblings.
 * Fully disabled when the user prefers reduced motion.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // `data-revealed` (not a class) survives React re-renders — React owns className
    // and would strip a class we added imperatively.
    if (reduced || !("IntersectionObserver" in window)) {
      root.classList.remove("reveal-ready");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay || 0);
          el.style.transitionDelay = `${delay}ms`;
          el.setAttribute("data-revealed", "");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])").forEach((el) => {
        observer.observe(el);
      });
    };

    scan();
    const raf = requestAnimationFrame(scan);

    // Catch content mounted after hydration (tabs, "show more", accordions).
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
