import type {
    Metadata,
  } from "next";
  
  import Link from "next/link";
  
  import {
    ArrowLeft,
    ExternalLink,
  } from "lucide-react";
  
  import {
    notFound,
  } from "next/navigation";
  
  import Header from "@/components/Header";
  
  import ProjectCarousel from "@/components/ProjectCarousel";
  
  import {
    getProjectBySlug,
    projects,
  } from "@/data/portfolio";
  
  type Props = {
    params: Promise<{
      slug: string;
    }>;
  };
  
  export function generateStaticParams() {
    return projects.map((project) => ({
      slug: project.slug,
    }));
  }
  
  export async function generateMetadata({
    params,
  }: Props): Promise<Metadata> {
    const { slug } = await params;
  
    const project =
      getProjectBySlug(slug);
  
    if (!project) {
      return {};
    }
  
    return {
      title: project.name,
  
      description:
        project.description,
    };
  }
  
  export default async function ProjectPage({
    params,
  }: Props) {
    const { slug } = await params;
  
    const project =
      getProjectBySlug(slug);
  
    if (!project) {
      notFound();
    }
  
    return (
      <>
        <Header />
  
        <main
          style={{
            background:
              project.theme.background,
  
            color:
              project.theme.text,
          }}
          className="min-h-screen"
        >
          <div className="site-container py-16 md:py-24">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm opacity-50 transition hover:opacity-100"
            >
              <ArrowLeft size={16} />
  
              Retour aux projets
            </Link>
  
            <div className="mt-14 grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[.18em]"
                  style={{
                    color:
                      project.theme.accent,
                  }}
                >
                  {project.eyebrow}
                </p>
  
                <h1 className="mt-4 font-display text-5xl font-semibold md:text-7xl">
                  {project.name}
                  <span
                    style={{
                      color:
                        project.theme.accent,
                    }}
                  >
                    .
                  </span>
                </h1>
  
                <p
                  className="mt-7 max-w-xl text-base leading-8"
                  style={{
                    color:
                      project.theme.muted,
                  }}
                >
                  {project.longDescription}
                </p>
  
                <div className="mt-9">
                  <p className="text-xs uppercase tracking-[.14em] opacity-40">
                    Mon rôle
                  </p>
  
                  <p className="mt-2 font-medium">
                    {project.role}
                  </p>
                </div>
  
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-brand-button mt-9"
                  style={
                    {
                      "--project-accent":
                        project.theme.accent,
  
                      "--project-surface":
                        project.theme.surface,
  
                      "--project-text":
                        project.theme.text,
                    } as React.CSSProperties
                  }
                >
                  Voir le site
                  <ExternalLink size={15} />
                </a>
              </div>
  
              <ProjectCarousel
                images={project.images}
                projectName={project.name}
                accent={project.theme.accent}
              />
            </div>
  
            <div className="mt-24 grid gap-14 lg:grid-cols-2">
              <section>
                <p
                  className="text-xs font-semibold uppercase tracking-[.18em]"
                  style={{
                    color:
                      project.theme.accent,
                  }}
                >
                  Fonctionnalités
                </p>
  
                <div className="mt-7 space-y-3">
                  {project.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-4 border-b border-current/10 py-3"
                      >
                        <span
                          className="h-1.5 w-1.5 rotate-45"
                          style={{
                            background:
                              project.theme
                                .accent,
  
                            boxShadow: `0 0 8px ${project.theme.accent}`,
                          }}
                        />
  
                        <span>
                          {feature}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </section>
  
              <section>
                <p
                  className="text-xs font-semibold uppercase tracking-[.18em]"
                  style={{
                    color:
                      project.theme.accent,
                  }}
                >
                  Technologies
                </p>
  
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-current/10 px-4 py-2 text-sm"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </section>
            </div>
          </div>
        </main>
      </>
    );
  }