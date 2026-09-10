// src/components/Projects.tsx

import ProjectShowcase from "@/components/ProjectShowcase";
import Reveal from "@/components/motion/Reveal";

import {
  projects,
} from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24"
    >
      {/* Introduction générale aux réalisations. */}
      <div className="site-container py-28 md:py-36">
        <Reveal>
          <p className="section-kicker">
            Réalisations
          </p>

          <h2 className="mt-3 font-display text-5xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            Mes projets
            <span className="text-accent">
              .
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/45">
            Une sélection de produits web
            et mobiles sur lesquels
            j&apos;ai travaillé, chacun avec
            ses propres contraintes
            techniques, fonctionnelles et
            graphiques.
          </p>
        </Reveal>
      </div>

      <div className="projects-showcase-list">
        {projects.map(
          (project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              index={index}
            />
          ),
        )}
      </div>
    </section>
  );
}