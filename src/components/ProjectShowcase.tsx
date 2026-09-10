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
  
  import ProjectCarousel from "@/components/ProjectCarousel";
  import Reveal from "@/components/motion/Reveal";
  
  import type {
    PortfolioProject,
  } from "@/data/portfolio";
  
  type ProjectShowcaseProps = {
    project: PortfolioProject;
    index: number;
  };
  
  const headingFontClasses = {
    oxanium: "font-display",
    poppins: "font-brand-poppins",
    montserrat:
      "font-brand-montserrat",
  } as const;
  
  export default function ProjectShowcase({
    project,
    index,
  }: ProjectShowcaseProps) {
    const reverse =
      index % 2 !== 0;
  
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
        {/* Décor de fond. */}
        <div
          aria-hidden="true"
          className="project-showcase-grid"
        />
  
        <div
          aria-hidden="true"
          className="project-showcase-glow"
        />
  
        <span
          aria-hidden="true"
          className="project-showcase-number"
        >
          {sectionNumber}
        </span>
  
        <div
          className={[
            "showcase-container",
            "grid items-center gap-14",
            "lg:grid-cols-[0.7fr_1.3fr]",
            "xl:gap-20",
            reverse
              ? "lg:[&>*:first-child]:order-2"
              : "",
          ].join(" ")}
        >
          {/* =====================================================
              PRÉSENTATION DU PROJET
          ====================================================== */}
          <Reveal
            y={24}
            className="relative z-10"
          >
            <div className="project-logo-container">
              <Image
                src={project.logo}
                alt={`Logo ${project.name}`}
                width={280}
                height={100}
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
  
            {/* Mon rôle sur le produit. */}
            <div className="project-role">
              <span>
                Mon rôle
              </span>
  
              <strong>
                {project.role}
              </strong>
            </div>
  
            {/* Trois fonctionnalités donnent une idée
                du périmètre sans transformer l'accueil
                en page détaillée. */}
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
  
            {/* Technologies principales uniquement. */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 7)
                .map((technology) => (
                  <span
                    key={technology}
                    className="project-brand-tag"
                  >
                    {technology}
                  </span>
                ))}
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
              CAROUSEL PRODUIT
          ====================================================== */}
          <Reveal
            y={24}
            delay={0.08}
            className="relative z-10"
          >
            <ProjectCarousel
              images={project.images}
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