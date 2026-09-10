// src/components/ProjectCarousel.tsx

"use client";

import type { CSSProperties } from "react";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

import type {
  ProjectImage,
} from "@/data/portfolio";

type ProjectCarouselProps = {
  images: readonly ProjectImage[];
  projectName: string;
  accent: string;
};

const AUTOPLAY_DELAY = 5500;
const SWIPE_THRESHOLD = 70;

export default function ProjectCarousel({
  images,
  projectName,
  accent,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const prefersReducedMotion =
    useReducedMotion();

  const hasImages =
    images.length > 0;

  const hasMultipleImages =
    images.length > 1;

  /**
   * Navigation vers la capture précédente.
   */
  const previous = useCallback(() => {
    if (!hasMultipleImages) {
      return;
    }

    setCurrentIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1,
    );
  }, [
    hasMultipleImages,
    images.length,
  ]);

  /**
   * Navigation vers la capture suivante.
   */
  const next = useCallback(() => {
    if (!hasMultipleImages) {
      return;
    }

    setCurrentIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1,
    );
  }, [
    hasMultipleImages,
    images.length,
  ]);

  /**
   * Défilement automatique.
   *
   * Il s'arrête lorsque l'utilisateur interagit avec
   * le carousel ou préfère limiter les animations.
   */
  useEffect(() => {
    if (
      !hasMultipleImages ||
      isPaused ||
      prefersReducedMotion
    ) {
      return;
    }

    const intervalId =
      window.setInterval(
        next,
        AUTOPLAY_DELAY,
      );

    return () => {
      window.clearInterval(intervalId);
    };
  }, [
    hasMultipleImages,
    isPaused,
    next,
    prefersReducedMotion,
  ]);

  /**
   * Placeholder de sécurité si un projet
   * n'a temporairement aucune capture.
   */
  if (!hasImages) {
    return (
      <div
        className="project-carousel"
        style={
          {
            "--carousel-accent":
              accent,
          } as CSSProperties
        }
      >
        <div className="project-carousel-placeholder">
          <ImageIcon
            aria-hidden="true"
            size={30}
          />

          <span>
            Captures à venir
          </span>
        </div>
      </div>
    );
  }

  const currentImage =
    images[currentIndex];

  return (
    <div
      className="project-carousel group"
      style={
        {
          "--carousel-accent":
            accent,
        } as CSSProperties
      }
      role="region"
      aria-label={`Galerie du projet ${projectName}`}
      tabIndex={0}
      onMouseEnter={() =>
        setIsPaused(true)
      }
      onMouseLeave={() =>
        setIsPaused(false)
      }
      onFocusCapture={() =>
        setIsPaused(true)
      }
      onBlurCapture={() =>
        setIsPaused(false)
      }
      onKeyDown={(event) => {
        if (
          event.key === "ArrowLeft"
        ) {
          previous();
        }

        if (
          event.key === "ArrowRight"
        ) {
          next();
        }
      }}
    >
      {/* Arrière-plan flouté reprenant la capture courante. */}
      <AnimatePresence
        mode="popLayout"
        initial={false}
      >
        <motion.div
          key={`background-${currentImage.src}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
          }}
        >
          <Image
            src={currentImage.src}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="scale-110 object-cover opacity-25 blur-2xl"
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Capture principale, affichée sans rognage. */}
      <div className="absolute inset-4 z-10 overflow-hidden rounded-[1.2rem] md:inset-5">
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.div
            key={currentImage.src}
            className="absolute inset-0"
            initial={
              prefersReducedMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    scale: 1.025,
                    filter:
                      "blur(4px)",
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={
              prefersReducedMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    scale: 0.985,
                  }
            }
            transition={{
              duration: 0.42,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <motion.div
              className="relative h-full w-full cursor-grab active:cursor-grabbing"
              drag={
                hasMultipleImages
                  ? "x"
                  : false
              }
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.12}
              onDragEnd={(
                _,
                info,
              ) => {
                if (
                  info.offset.x >
                  SWIPE_THRESHOLD
                ) {
                  previous();
                  return;
                }

                if (
                  info.offset.x <
                  -SWIPE_THRESHOLD
                ) {
                  next();
                }
              }}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="select-none object-contain"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Ombre assurant la lisibilité des contrôles. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-black/10"
      />

      {/* Navigation précédente / suivante. */}
      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label={`Capture précédente de ${projectName}`}
            className="project-carousel-arrow left-4 md:left-5"
          >
            <ChevronLeft
              aria-hidden="true"
              size={20}
            />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={`Capture suivante de ${projectName}`}
            className="project-carousel-arrow right-4 md:right-5"
          >
            <ChevronRight
              aria-hidden="true"
              size={20}
            />
          </button>
        </>
      )}

      {/* Nom de la vue affichée. */}
      <div
        className="project-carousel-caption"
        aria-live="polite"
      >
        <span>
          {projectName}
        </span>

        <strong>
          {currentImage.label}
        </strong>
      </div>

      {/* Pagination. */}
      {hasMultipleImages && (
        <div
          className="project-carousel-pagination"
          aria-label={`Navigation des captures de ${projectName}`}
        >
          {images.map(
            (
              image,
              index,
            ) => {
              const isActive =
                currentIndex ===
                index;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() =>
                    setCurrentIndex(
                      index,
                    )
                  }
                  aria-label={`Afficher ${image.label}`}
                  aria-current={
                    isActive
                      ? "true"
                      : undefined
                  }
                  className="project-carousel-dot"
                  style={{
                    width: isActive
                      ? 30
                      : 8,

                    backgroundColor:
                      isActive
                        ? accent
                        : "rgba(255,255,255,.35)",

                    boxShadow:
                      isActive
                        ? `0 0 10px ${accent}`
                        : "none",
                  }}
                />
              );
            },
          )}
        </div>
      )}

      {/* Compteur. */}
      <div className="project-carousel-counter">
        {String(
          currentIndex + 1,
        ).padStart(2, "0")}

        <span>/</span>

        {String(
          images.length,
        ).padStart(2, "0")}
      </div>
    </div>
  );
}