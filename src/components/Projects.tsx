import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/motion/Reveal";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="site-container scroll-mt-28 py-28 md:py-36"
    >
      <Reveal>
        <div className="flex max-w-3xl flex-col">
          <p className="section-kicker">
            Sélection
          </p>

          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
            Projets
            <span className="text-accent">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/45">
            Des applications réellement développées,
            déployées et utilisées, du produit web au
            mobile et à l&apos;infrastructure.
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.name}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}