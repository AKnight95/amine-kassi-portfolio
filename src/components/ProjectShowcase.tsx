// src/components/ProjectShowcase.tsx

import type {
    CSSProperties,
  } from "react";
  
  import Image from "next/image";
  import Link from "next/link";
  
  import {
    ArrowRight,
    Check,
    ExternalLink,
  } from "lucide-react";
  
  import ProjectCarousel
    from "@/components/ProjectCarousel";
  
  import Reveal
    from "@/components/motion/Reveal";
  
  import type {
    PortfolioProject,
  } from "@/data/portfolio";
  
  
  type ProjectShowcaseProps = {
    project: PortfolioProject;
    index: number;
  };
  
  
  const headingFontClasses = {
    oxanium: "font-display",
  
    poppins:
      "font-brand-poppins",
  
    montserrat:
      "font-brand-montserrat",
  } as const;
  
  
  export default function ProjectShowcase({
    project,
    index,
  }: ProjectShowcaseProps) {
    const reverse =
      index % 2 !== 0;
  
    const isSpectral =
      project.slug === "spectral";
  
    const sectionNumber =
      String(index + 1).padStart(
        2,
        "0",
      );
  
  
    return (
      <section
        className={[
          "project-showcase",
  
          reverse
            ? "project-showcase--reverse"
            : "project-showcase--forward",
  
          isSpectral
            ? "project-showcase--wide"
            : "",
        ].join(" ")}
        style={
          {
            "--project-bg":
              project.theme.background,
  
            "--project-surface":
              project.theme.surface,
  
            "--project-accent":
              project.theme.accent,
  
            "--project-accent-secondary":
              project.theme
                .accentSecondary,
  
            "--project-text":
              project.theme.text,
  
            "--project-muted":
              project.theme.muted,
          } as CSSProperties
        }
      >
        {/* Texture de fond */}
        <div
          aria-hidden="true"
          className="project-showcase-grid"
        />
  
        {/* Halo principal */}
        <div
          aria-hidden="true"
          className="project-showcase-glow"
        />
  
        {/* Traits lumineux suivant
            la direction des séparateurs. */}
        <div
          aria-hidden="true"
          className="
            project-diagonal-line
            project-diagonal-line--top
          "
        />
  
        <div
          aria-hidden="true"
          className="
            project-diagonal-line
            project-diagonal-line--bottom
          "
        />
  
        {/* Numéro décoratif */}
        <span
          aria-hidden="true"
          className="project-showcase-number"
        >
          {sectionNumber}
        </span>
  
  
        <div
          className={[
            "showcase-container",
            "project-showcase-layout",
  
            reverse
              ? "project-showcase-layout--reverse"
              : "",
          ].join(" ")}
        >
          {/* =====================================================
              INFORMATIONS
          ====================================================== */}
  
          <Reveal
            y={24}
            className="project-showcase-content"
          >
            {/* Logo libre : aucun fond,
                aucune bordure. */}
            <div className="project-logo-container">
              <Image
                src={project.logo}
                alt={`Logo ${project.name}`}
                width={420}
                height={150}
                className="project-logo"
              />
            </div>
  
  
            <p className="project-showcase-eyebrow">
              {project.eyebrow}
            </p>
  
  
            <h2
              className={[
                "project-showcase-title",
  
                headingFontClasses[
                  project.theme
                    .headingFont
                ],
              ].join(" ")}
            >
              {project.name}
  
              <span>.</span>
            </h2>
  
  
            <p className="project-showcase-description">
              {project.description}
            </p>
  
  
            <div className="project-role">
              <span>
                Mon rôle
              </span>
  
              <strong>
                {project.role}
              </strong>
            </div>
  
  
            <div className="project-feature-preview">
              {project.features
                .slice(0, 3)
                .map((feature) => (
                  <div
                    key={feature}
                    className="project-feature-preview-item"
                  >
                    <span className="project-feature-check">
                      <Check
                        aria-hidden="true"
                        size={12}
                      />
                    </span>
  
                    <span>
                      {feature}
                    </span>
                  </div>
                ))}
            </div>
  
  
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 7)
                .map(
                  (technology) => (
                    <span
                      key={
                        technology.name
                      }
                      className="project-brand-tag"
                    >
                      {
                        technology.name
                      }
                    </span>
                  ),
                )}
            </div>
  
  
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href={`/projects/${project.slug}`}
                className="project-brand-button"
              >
                Voir le projet en détail
  
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                />
              </Link>
  
  
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="project-brand-link"
              >
                Site en ligne
  
                <ExternalLink
                  aria-hidden="true"
                  size={14}
                />
              </a>
            </div>
          </Reveal>
  
  
          {/* =====================================================
              SHOWCASE VISUEL
          ====================================================== */}
  
          <Reveal
            y={24}
            delay={0.08}
            className="project-showcase-media"
          >
            <ProjectCarousel
              images={
                project.images
              }
              projectName={
                project.name
              }
              accent={
                project.theme.accent
              }
            />
          </Reveal>
        </div>
      </section>
    );
  }