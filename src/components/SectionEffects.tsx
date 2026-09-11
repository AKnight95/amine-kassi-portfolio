"use client";

import { useEffect, useRef } from "react";

const DEFAULT_ACCENT = "#00e6e6";

/**
 * Les zones observées portent toutes soit --section-accent,
 * soit --project-accent. L'IntersectionObserver ne se déclenche
 * qu'aux changements de section : aucun calcul de style n'est
 * effectué à chaque pixel de scroll ou de déplacement de souris.
 */
const SECTION_SELECTOR = [
  ".hero-shell",
  ".technology-cloud-section",
  ".project-showcase",
  ".project-detail",
  ".skills-page-hero",
  ".skills-capabilities",
  ".skills-groups-section",
  ".skills-architecture-section",
  ".skills-page-cta",
  ".contact-page",
  ".site-footer",
].join(",");

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  '[role="button"]',
  "input",
  "textarea",
  "select",
  "summary",
  "label",
  '[data-cursor="interactive"]',
].join(",");

function readSectionAccent(element: Element): string {
  const styles = window.getComputedStyle(element);

  const candidates = [
    styles.getPropertyValue("--project-accent"),
    styles.getPropertyValue("--section-accent"),
    styles.getPropertyValue("--cursor-accent"),
    styles.getPropertyValue("--accent"),
  ];

  return (
    candidates.find((value) => value.trim().length > 0)?.trim() ||
    DEFAULT_ACCENT
  );
}

export default function SectionEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerFrameRef = useRef<number | null>(null);
  const latestPointerRef = useRef({ x: 0, y: 0 });
  const activeAccentRef = useRef(DEFAULT_ACCENT);

  useEffect(() => {
    const cursor = cursorRef.current;
    const root = document.documentElement;

    if (!cursor) {
      return undefined;
    }

    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) {
      return undefined;
    }

    root.classList.add("custom-cursor-enabled");
    cursor.dataset.enabled = "true";

    /**
     * Une seule mise à jour globale au changement de section.
     * Cela évite de recalculer la cascade CSS pendant le scroll.
     */
    const setActiveAccent = (accent: string) => {
      if (accent === activeAccentRef.current) {
        return;
      }

      activeAccentRef.current = accent;
      root.style.setProperty("--active-accent", accent);
      cursor.style.setProperty("--cursor-color", accent);
    };

    /**
     * On observe une bande située vers le premier tiers de l'écran.
     * La section qui traverse cette bande devient la section active.
     */
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(SECTION_SELECTOR),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          return;
        }

        const activeEntry = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];

        setActiveAccent(readSectionAccent(activeEntry.target));
      },
      {
        root: null,
        rootMargin: "-28% 0px -62% 0px",
        threshold: [0, 0.01],
      },
    );

    sections.forEach((section) => observer.observe(section));

    /**
     * Initialise la couleur sur la section réellement visible,
     * sans attendre le premier scroll.
     */
    const initialSample = document.elementFromPoint(
      Math.round(window.innerWidth * 0.5),
      Math.round(window.innerHeight * 0.34),
    );

    const initialSection = initialSample?.closest(SECTION_SELECTOR);

    if (initialSection) {
      const initialAccent = readSectionAccent(initialSection);
      activeAccentRef.current = initialAccent;
      root.style.setProperty("--active-accent", initialAccent);
      cursor.style.setProperty("--cursor-color", initialAccent);
    } else {
      root.style.setProperty("--active-accent", DEFAULT_ACCENT);
      cursor.style.setProperty("--cursor-color", DEFAULT_ACCENT);
    }

    /**
     * Le mouvement du curseur ne fait qu'un translate3d.
     * Aucun getComputedStyle, querySelector ou setState ici.
     */
    const paintPointer = () => {
      pointerFrameRef.current = null;

      const { x, y } = latestPointerRef.current;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handlePointerMove = (event: PointerEvent) => {
      latestPointerRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      cursor.dataset.visible = "true";

      if (pointerFrameRef.current !== null) {
        return;
      }

      pointerFrameRef.current = window.requestAnimationFrame(paintPointer);
    };

    /**
     * La détection interactive se fait uniquement lorsqu'on entre
     * sur un nouvel élément, pas pendant tous les pointermove.
     */
    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        cursor.dataset.interactive = "false";
        return;
      }

      cursor.dataset.interactive = target.closest(INTERACTIVE_SELECTOR)
        ? "true"
        : "false";
    };

    const handlePointerLeave = () => {
      cursor.dataset.visible = "false";
    };

    const handlePointerEnter = () => {
      cursor.dataset.visible = "true";
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerover", handlePointerOver, {
      passive: true,
    });
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);

    return () => {
      observer.disconnect();

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);

      if (pointerFrameRef.current !== null) {
        window.cancelAnimationFrame(pointerFrameRef.current);
      }

      root.classList.remove("custom-cursor-enabled");
      root.style.removeProperty("--active-accent");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="custom-cursor"
      data-enabled="false"
      data-visible="false"
      data-interactive="false"
    >
      <span className="custom-cursor-halo" />
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-core" />
    </div>
  );
}
