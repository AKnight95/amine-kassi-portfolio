// src/app/projects/[slug]/page.tsx

import type {
    CSSProperties,
  } from "react";
  
  import type {
    Metadata,
  } from "next";
  
  import Image from "next/image";
  import Link from "next/link";
  
  import {
    ArrowLeft,
    ExternalLink,
  } from "lucide-react";
  
  import {
    notFound,
  } from "next/navigation";
  
  import Header
    from "@/components/Header";
  
  import ProjectCarousel
    from "@/components/ProjectCarousel";
  
  import TechnologyGrid
    from "@/components/TechnologyGrid";
  
  import Reveal
    from "@/components/motion/Reveal";
  
  import {
    getProjectBySlug,
    projects,
  } from "@/data/portfolio";
  
  
  type ProjectPageProps = {
    params: Promise<{
      slug: string;
    }>;
  };
  
  
  export function generateStaticParams() {
    return projects.map(
      (project) => ({
        slug: project.slug,
      }),
    );
  }
  
  
  export async function generateMetadata({
    params,
  }: ProjectPageProps): Promise<Metadata> {
    const { slug } =
      await params;
  
    const project =
      getProjectBySlug(slug);
  
    if (!project) {
      return {};
    }
  
    return {
      title:
        `${project.name} — Projet Full-Stack`,
  
      description:
        project.description,
  
      alternates: {
        canonical:
          `/projects/${project.slug}`,
      },
    };
  }
  
  
  export default async function ProjectPage({
    params,
  }: ProjectPageProps) {
    const { slug } =
      await params;
  
    const project =
      getProjectBySlug(slug);
  
  
    if (!project) {
      notFound();
    }
  
  
    const projectStyle = {
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
    } as CSSProperties;
  
  
    return (
      <>
        <Header />
  
        <main
          className="project-detail"
          style={projectStyle}
        >
          {/* =====================================================
              HERO
          ====================================================== */}
  
          <section className="project-detail-hero">
            <div
              aria-hidden="true"
              className="project-detail-grid"
            />
  
            <div className="project-detail-container">
              <Link
                href="/#projects"
                className="project-detail-back"
              >
                <ArrowLeft
                  aria-hidden="true"
                  size={16}
                />
  
                Retour aux projets
              </Link>
  
  
              <div className="project-detail-hero-grid">
                <Reveal>
                  <div>
                    <Image
                      src={project.logo}
                      alt={`Logo ${project.name}`}
                      width={420}
                      height={150}
                      priority
                      className="project-detail-logo"
                    />
  
  
                    <p className="project-detail-eyebrow">
                      {project.eyebrow}
                    </p>
  
  
                    <h1 className="project-detail-title">
                      {project.name}
  
                      <span>.</span>
                    </h1>
  
  
                    <p className="project-detail-intro">
                      {
                        project.longDescription
                      }
                    </p>
  
  
                    <div className="project-detail-role">
                      <span>
                        Mon rôle
                      </span>
  
                      <strong>
                        {project.role}
                      </strong>
                    </div>
  
  
                    <a
                      href={
                        project.website
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-brand-button mt-8"
                    >
                      Voir le site
  
                      <ExternalLink
                        aria-hidden="true"
                        size={15}
                      />
                    </a>
                  </div>
                </Reveal>
  
  
                <Reveal delay={0.1}>
                  <ProjectCarousel
                    images={
                      project.images
                    }
                    projectName={
                      project.name
                    }
                    accent={
                      project.theme
                        .accent
                    }
                  />
                </Reveal>
              </div>
            </div>
          </section>
  
  
          {/* =====================================================
              PÉRIMÈTRE FONCTIONNEL
          ====================================================== */}
  
          <section className="project-detail-section">
            <div className="project-detail-container">
              <Reveal>
                <div className="project-detail-section-heading">
                  <span>
                    Le produit
                  </span>
  
                  <h2>
                    Périmètre fonctionnel
                    <strong>.</strong>
                  </h2>
  
                  <p>
                    Les principales
                    fonctionnalités sur
                    lesquelles le produit
                    s&apos;appuie.
                  </p>
                </div>
              </Reveal>
  
  
              <div className="project-scope-grid">
                {project.features.map(
                  (
                    feature,
                    index,
                  ) => (
                    <Reveal
                      key={feature}
                      delay={
                        Math.min(
                          index * 0.035,
                          0.2,
                        )
                      }
                    >
                      <article className="project-scope-card">
                        <span>
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            "0",
                          )}
                        </span>
  
                        <p>
                          {feature}
                        </p>
                      </article>
                    </Reveal>
                  ),
                )}
              </div>
            </div>
          </section>
  
  
          {/* =====================================================
              MISSIONS / CONTRIBUTION
          ====================================================== */}
  
          <section className="project-detail-section project-detail-section--missions">
            <div className="project-detail-container">
              <Reveal>
                <div className="project-detail-section-heading">
                  <span>
                    Contribution
                  </span>
  
                  <h2>
                    Mes missions
                    <strong>.</strong>
                  </h2>
  
                  <p>
                    Les principaux axes
                    techniques et fonctionnels
                    sur lesquels je suis
                    intervenu.
                  </p>
                </div>
              </Reveal>
  
  
              <div className="project-missions">
                {project.missions.map(
                  (
                    mission,
                    index,
                  ) => (
                    <Reveal
                      key={
                        mission.title
                      }
                      y={20}
                    >
                      <article className="project-mission">
                        <div className="project-mission-number">
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            "0",
                          )}
                        </div>
  
  
                        <div className="project-mission-content">
                          <h3>
                            {
                              mission.title
                            }
                          </h3>
  
                          <p>
                            {
                              mission.description
                            }
                          </p>
  
  
                          <div className="project-mission-details">
                            {mission.details.map(
                              (
                                detail,
                              ) => (
                                <span
                                  key={
                                    detail
                                  }
                                >
                                  {
                                    detail
                                  }
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  ),
                )}
              </div>
            </div>
          </section>
  
  
          {/* =====================================================
              STACK TECHNIQUE
          ====================================================== */}
  
          <section className="project-detail-section">
            <div className="project-detail-container">
              <Reveal>
                <div className="project-detail-section-heading">
                  <span>
                    Architecture
                  </span>
  
                  <h2>
                    Technologies utilisées
                    <strong>.</strong>
                  </h2>
  
                  <p>
                    Pas uniquement une liste de
                    technologies : voici leur
                    rôle concret dans le projet.
                  </p>
                </div>
              </Reveal>
  
  
              <Reveal y={18}>
                <TechnologyGrid
                  technologies={
                    project.technologies
                  }
                  accent={
                    project.theme.accent
                  }
                />
              </Reveal>
            </div>
          </section>
  
  
          {/* =====================================================
              GALERIE
          ====================================================== */}
  
          <section className="project-detail-section project-detail-gallery-section">
            <div className="project-detail-container">
              <Reveal>
                <div className="project-detail-section-heading">
                  <span>
                    Interfaces
                  </span>
  
                  <h2>
                    Aperçus du produit
                    <strong>.</strong>
                  </h2>
                </div>
              </Reveal>
  
  
              <div className="project-detail-gallery">
                {project.images.map(
                  (image) => (
                    <Reveal
                      key={
                        image.src
                      }
                      y={16}
                    >
                      <figure className="project-detail-gallery-item">
                        <div className="project-detail-gallery-image">
                          <Image
                            src={
                              image.src
                            }
                            alt={
                              image.alt
                            }
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                            className="object-contain"
                          />
                        </div>
  
                        <figcaption>
                          {
                            image.label
                          }
                        </figcaption>
                      </figure>
                    </Reveal>
                  ),
                )}
              </div>
            </div>
          </section>
  
  
          {/* =====================================================
              FOOTER CASE STUDY
          ====================================================== */}
  
          <section className="project-detail-footer">
            <div className="project-detail-container">
              <Link
                href="/#projects"
                className="project-detail-back project-detail-back--footer"
              >
                <ArrowLeft
                  aria-hidden="true"
                  size={16}
                />
  
                Voir les autres projets
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }