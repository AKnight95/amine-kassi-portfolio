import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { PortfolioProject } from "@/data/portfolio";

type ProjectCardProps = {
  project: PortfolioProject;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card group ${
        project.featured
          ? "md:col-span-2"
          : ""
      }`}
      style={
        {
          "--project-accent": project.accent,
        } as React.CSSProperties
      }
    >
      <div
        className={
          project.featured
            ? "grid lg:grid-cols-[1.25fr_.75fr]"
            : ""
        }
      >
        {/* Aperçu */}
        <div
          className={`project-preview ${
            project.featured
              ? "min-h-[300px] lg:min-h-[480px]"
              : "h-[250px]"
          }`}
        >
          <Image
            src={project.image}
            alt={`Aperçu du projet ${project.name}`}
            fill
            sizes={
              project.featured
                ? "(max-width: 1024px) 100vw, 65vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />

          <div className="project-preview-overlay" />

          <div className="absolute left-5 top-5 z-10">
            <span className="project-type">
              {project.type}
            </span>
          </div>

          <div className="absolute bottom-5 right-5 z-10">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ouvrir ${project.name}`}
              className="project-external-link"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Informations */}
        <div className="relative flex flex-col p-6 md:p-8">
          <div>
            <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/30">
              Projet
            </p>

            <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-white md:text-4xl">
              {project.name}
              <span
                style={{
                  color: project.accent,
                  textShadow: `0 0 18px ${project.accent}88`,
                }}
              >
                .
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/52">
              {project.description}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="tech-tag"
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          <div className="mt-auto pt-8">
            <div className="border-t border-white/[0.07] pt-5">
              <p className="mb-3 text-[0.63rem] font-semibold uppercase tracking-[0.17em] text-white/25">
                Points clés
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {project.highlights.map(
                  (highlight) => (
                    <span
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-white/42"
                    >
                      <span
                        className="h-1 w-1 rotate-45"
                        style={{
                          backgroundColor:
                            project.accent,
                          boxShadow: `0 0 7px ${project.accent}`,
                        }}
                      />

                      {highlight}
                    </span>
                  ),
                )}
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white/60 transition hover:text-white"
            >
              Voir le projet
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}