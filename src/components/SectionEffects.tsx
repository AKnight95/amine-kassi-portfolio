"use client";

import { useEffect, useRef } from "react";

const DEFAULT_ACCENT = "#00e6e6";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  '[role="button"]',
  "input",
  "textarea",
  "select",
  "summary",
  '[data-cursor="interactive"]',
].join(",");

const NATIVE_CURSOR_SELECTOR = [
  "input",
  "textarea",
  "select",
  '[contenteditable="true"]',
].join(",");

/**
 * Lit la couleur portée par la section située sous la souris / au centre de
 * l'écran. Les projets restent prioritaires grâce à --project-accent.
 */
function getElementAccent(element: Element | null): string {
  if (!element) {
    return DEFAULT_ACCENT;
  }

  const styles = window.getComputedStyle(element);

  const candidates = [
    styles.getPropertyValue("--cursor-accent"),
    styles.getPropertyValue("--project-accent"),
    styles.getPropertyValue("--section-accent"),
    styles.getPropertyValue("--accent"),
  ];

  const accent = candidates.find((value) => value.trim().length > 0);

  return accent?.trim() || DEFAULT_ACCENT;
}

/**
 * Effets globaux liés à la position de la souris et à la section active :
 * - curseur personnalisé ;
 * - halo coloré selon la section ;
 * - couleur active du header et de la scrollbar au scroll.
 *
 * Le composant ne provoque pas de re-render à chaque mouvement de souris :
 * les transformations sont appliquées directement sur le DOM via des refs.
 */
export default function SectionEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const sectionFrameRef = useRef<number | null>(null);
  const lastAccentRef = useRef(DEFAULT_ACCENT);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return undefined;
    }

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!finePointer.matches || reducedMotion.matches) {
      cursor.dataset.enabled = "false";
      return undefined;
    }

    cursor.dataset.enabled = "true";

    const applyAccent = (accent: string) => {
      if (accent === lastAccentRef.current) {
        return;
      }

      lastAccentRef.current = accent;
      cursor.style.setProperty("--cursor-color", accent);
    };

    const syncActiveSection = () => {
      sectionFrameRef.current = null;

      const sampleX = Math.round(window.innerWidth * 0.5);
      const sampleY = Math.round(
        Math.min(
          window.innerHeight - 40,
          Math.max(150, window.innerHeight * 0.36),
        ),
      );

      const sampledElement = document.elementFromPoint(sampleX, sampleY);
      const accent = getElementAccent(sampledElement);

      document.documentElement.style.setProperty(
        "--active-accent",
        accent,
      );
    };

    const requestSectionSync = () => {
      if (sectionFrameRef.current !== null) {
        return;
      }

      sectionFrameRef.current = window.requestAnimationFrame(
        syncActiveSection,
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      const { clientX, clientY } = event;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;

        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        cursor.dataset.visible = "true";

        const target = event.target;

        if (!(target instanceof Element)) {
          cursor.dataset.interactive = "false";
          cursor.dataset.native = "false";
          return;
        }

        applyAccent(getElementAccent(target));

        cursor.dataset.interactive = target.closest(
          INTERACTIVE_SELECTOR,
        )
          ? "true"
          : "false";

        cursor.dataset.native = target.closest(
          NATIVE_CURSOR_SELECTOR,
        )
          ? "true"
          : "false";
      });
    };

    const handlePointerLeave = () => {
      cursor.dataset.visible = "false";
    };

    const handlePointerEnter = () => {
      cursor.dataset.visible = "true";
    };

    syncActiveSection();

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerenter", handlePointerEnter);
    window.addEventListener("scroll", requestSectionSync, {
      passive: true,
    });
    window.addEventListener("resize", requestSectionSync);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerenter", handlePointerEnter);
      window.removeEventListener("scroll", requestSectionSync);
      window.removeEventListener("resize", requestSectionSync);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (sectionFrameRef.current !== null) {
        window.cancelAnimationFrame(sectionFrameRef.current);
      }
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
      data-native="false"
    >
      <span className="custom-cursor-halo" />
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-core" />
    </div>
  );
}
