// src/components/ProjectCarousel.tsx

"use client";

import type {
  CSSProperties,
} from "react";

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

type ProjectCarouselProps = {
  images: readonly string[];
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
   * Affiche la capture précédente.
   *
   * Lorsque l'on se trouve sur la première capture,
   * le carousel repart automatiquement sur la dernière.
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
   * Affiche la capture suivante.
   *
   * Lorsque l'on arrive à la dernière capture,
   * le carousel repart au début.
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
   * Autoplay.
   *
   * Il est automatiquement désactivé :
   * - lorsque l'utilisateur survole le carousel ;
   * - lorsque le carousel possède le focus ;
   * - lorsqu'il n'y a qu'une seule capture ;
   * - si l'utilisateur préfère réduire les animations.
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
   * Aucun screenshot :
   * on garde malgré tout une zone propre
   * plutôt que d'afficher une image cassée.
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
            Captures du projet à ajouter
          </span>
        </div>
      </div>
    );
  }

  /*
   * Les images sont des données statiques venant
   * de portfolio.ts. currentIndex reste donc toujours
   * dans les limites du tableau grâce à previous()/next().
   */
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
    >
      {/* ======================================================
          ARRIÈRE-PLAN FLOUTÉ

          La capture courante est réutilisée comme décor.
          Cela évite d'avoir de grandes bandes vides lorsque
          le ratio du screenshot diffère de celui du carousel.
      ======================================================= */}
      <AnimatePresence
        mode="popLayout"
        initial={false}
      >
        <motion.div
          key={`background-${currentImage}`}
          className="absolute inset-0"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <Image
            src={currentImage}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="scale-110 object-cover opacity-25 blur-2xl"
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>

      {/* ======================================================
          CAPTURE PRINCIPALE

          object-contain permet de conserver l'intégralité
          des dashboards sans les rogner.
      ======================================================= */}
      <div className="absolute inset-4 z-10 overflow-hidden rounded-[1.15rem] md:inset-5">
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.div
            key={currentImage}
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
              className="
                relative h-full w-full
                cursor-grab
                active:cursor-grabbing
              "
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
                src={currentImage}
                alt={`${projectName} — capture ${
                  currentIndex + 1
                } sur ${images.length}`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="select-none object-contain"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dégradé assurant la lisibilité des contrôles. */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-20
          bg-gradient-to-t
          from-black/60
          via-transparent
          to-black/10
        "
      />

      {/* ======================================================
          NAVIGATION PRÉCÉDENT / SUIVANT
      ======================================================= */}
      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label={`Afficher la capture précédente de ${projectName}`}
            className="project-carousel-arrow left-4 md:left-5"
          >
            <ChevronLeft
              aria-hidden="true"
              size={19}
            />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={`Afficher la capture suivante de ${projectName}`}
            className="project-carousel-arrow right-4 md:right-5"
          >
            <ChevronRight
              aria-hidden="true"
              size={19}
            />
          </button>
        </>
      )}

      {/* ======================================================
          INDICATEURS DE PAGINATION
      ======================================================= */}
      {hasMultipleImages && (
        <div
          className="
            absolute bottom-5 left-5 z-30
            flex items-center gap-2
          "
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
                  key={image}
                  type="button"
                  onClick={() =>
                    setCurrentIndex(
                      index,
                    )
                  }
                  aria-label={`Afficher la capture ${
                    index + 1
                  } de ${projectName}`}
                  aria-current={
                    isActive
                      ? "true"
                      : undefined
                  }
                  className="
                    h-1.5 rounded-full
                    transition-all
                    duration-300
                  "
                  style={{
                    width: isActive
                      ? 30
                      : 8,

                    backgroundColor:
                      isActive
                        ? accent
                        : "rgba(255, 255, 255, 0.35)",

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

      {/* ======================================================
          COMPTEUR
      ======================================================= */}
      <div
        className="
          absolute bottom-5 right-5 z-30
          rounded-lg
          border border-white/10
          bg-black/45
          px-3 py-2
          font-display
          text-[0.62rem]
          tracking-[0.14em]
          text-white/65
          backdrop-blur-md
        "
      >
        {String(
          currentIndex + 1,
        ).padStart(2, "0")}

        <span className="mx-1.5 text-white/25">
          /
        </span>

        {String(
          images.length,
        ).padStart(2, "0")}
      </div>
    </div>
  );
}