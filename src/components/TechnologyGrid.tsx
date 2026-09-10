// src/components/TechnologyGrid.tsx

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

import { FiCode } from "react-icons/fi";
import { FaAws } from "react-icons/fa";

import {
  SiCss,
  SiExpo,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";

import type {
  ProjectTechnology,
} from "@/data/portfolio";


/* ============================================================
   PROPS
   ============================================================ */

type TechnologyGridProps = {
  technologies: readonly ProjectTechnology[];
  accent: string;
};


/* ============================================================
   MAPPING TECHNOLOGIES → ICÔNES

   Certaines technologies partagent volontairement une même
   icône : Stripe Connect / Terminal, services AWS, etc.

   Si une technologie n'est pas présente dans cette map,
   FiCode est utilisé automatiquement comme fallback.
   ============================================================ */

const technologyIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,

  React: SiReact,
  "React Native": SiReact,

  "Next.js": SiNextdotjs,

  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,

  Expo: SiExpo,

  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,

  AWS: FaAws,
  "AWS Lightsail": FaAws,
  "AWS S3": FaAws,
  "AWS SES": FaAws,

  Stripe: SiStripe,
  "Stripe Connect": SiStripe,
  "Stripe Terminal": SiStripe,

  "GitHub Actions": SiGithubactions,

  Vercel: SiVercel,

  Nginx: SiNginx,

  "Tailwind CSS": SiTailwindcss,

  WordPress: SiWordpress,
  PHP: SiPhp,

  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
};


/* ============================================================
   COMPONENT
   ============================================================ */

export default function TechnologyGrid({
  technologies,
  accent,
}: TechnologyGridProps) {
  return (
    <div className="technology-grid">
      {technologies.map((technology) => {
        const Icon =
          technologyIcons[technology.name] ??
          FiCode;

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
            {/* Icône */}
            <div
              className="technology-icon"
              aria-hidden="true"
            >
              <Icon size={28} />
            </div>

            {/* Description */}
            <div className="technology-content">
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