import Link from "next/link";

import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import ProjectCarousel from "@/components/ProjectCarousel";

import type {
  PortfolioProject,
} from "@/data/portfolio";

type Props = {
  project: PortfolioProject;
  index: number;
};

const fontClasses = {
  oxanium: "font-display",
  poppins: "font-brand-poppins",
  montserrat: "font-brand-montserrat",
};

export default function ProjectShowcase({
  project,
  index,
}: Props) {
  const reverse = index % 2 !== 0;

  return (
    <section
      className="project-showcase"
      style={
        {
          "--project-bg":
            project.theme.background,

          "--project-surface":
            project.theme.surface,

          "--project-accent":
            project.theme.accent,

          "--project-accent-secondary":
            project.theme.accentSecondary,

          "--project-text":
            project.theme.text,

          "--project-muted":
            project.theme.muted,
        } as React.CSSProperties
      }
    >
      <div
        className={`site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reverse
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }`}
      >
        <div>
          <p className="project-showcase-eyebrow">
            {project.eyebrow}
          </p>

          <h3
            className={`project-showcase-title ${
              fontClasses[
                project.theme.headingFont
              ]
            }`}
          >
            {project.name}
            <span>.</span>
          </h3>

          <p className="project-showcase-description">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, 6)
              .map((technology) => (
                <span
                  key={technology}
                  className="project-brand-tag"
                >
                  {technology}
                </span>
              ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="project-brand-button"
            >
              Découvrir le projet
              <ArrowRight size={16} />
            </Link>

            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="project-brand-link"
            >
              Site en ligne
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <ProjectCarousel
          images={project.images}
          projectName={project.name}
          accent={project.theme.accent}
        />
      </div>
    </section>
  );
}