// src/components/TechnologyGrid.tsx

import type { CSSProperties } from "react";

import {
  getTechnologyIcon,
} from "@/config/technologyIcons";

import type {
  ProjectTechnology,
} from "@/data/portfolio";


type TechnologyGridProps = {
  technologies: readonly ProjectTechnology[];
  accent: string;
};


export default function TechnologyGrid({
  technologies,
  accent,
}: TechnologyGridProps) {
  return (
    <div className="technology-grid">
      {technologies.map((technology) => {
        const Icon =
          getTechnologyIcon(
            technology.name,
          );

        return (
          <article
            key={technology.name}
            className="technology-card"
            style={
              {
                "--tech-accent": accent,
              } as CSSProperties
            }
          >
            <div
              className="technology-icon"
              aria-hidden="true"
            >
              <Icon size={28} />
            </div>

            <div className="technology-content">
              <span className="technology-category">
                {technology.category}
              </span>

              <h3>
                {technology.name}
              </h3>

              <p>
                {technology.usage}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}