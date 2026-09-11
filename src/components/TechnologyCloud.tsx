// src/components/TechnologyCloud.tsx

import {
    getTechnologyIcon,
  } from "@/config/technologyIcons";
  
  import Reveal from "@/components/motion/Reveal";
  
  
  type CloudTechnology = {
    name: string;
    importance: "large" | "medium" | "small";
  };
  
  
  const technologies: readonly CloudTechnology[] = [
    { name: "TypeScript", importance: "large" },
    { name: "React", importance: "large" },
    { name: "Next.js", importance: "large" },
    { name: "NestJS", importance: "large" },
  
    { name: "Node.js", importance: "medium" },
    { name: "React Native", importance: "medium" },
    { name: "Expo", importance: "medium" },
    { name: "PostgreSQL", importance: "medium" },
    { name: "Prisma", importance: "medium" },
  
    { name: "AWS", importance: "large" },
    { name: "AWS Lightsail", importance: "medium" },
    { name: "AWS S3", importance: "small" },
    { name: "AWS SES", importance: "small" },
  
    { name: "GitHub", importance: "medium" },
    { name: "GitHub Actions", importance: "medium" },
    { name: "Vercel", importance: "medium" },
  
    { name: "Docker", importance: "medium" },
    { name: "Nginx", importance: "small" },
    { name: "PM2", importance: "small" },
  
    { name: "Tailwind CSS", importance: "medium" },
    { name: "Ant Design", importance: "medium" },
  
    { name: "HTML5", importance: "small" },
    { name: "CSS", importance: "small" },
    { name: "JavaScript", importance: "medium" },
  
    { name: "Stripe", importance: "medium" },
    { name: "Stripe Connect", importance: "small" },
  
    { name: "Symfony", importance: "small" },
    { name: "PHP", importance: "small" },
  
    { name: "Postman", importance: "small" },
    { name: "Figma", importance: "small" },
  
    { name: "Google Analytics", importance: "small" },
  
    { name: "ChatGPT", importance: "medium" },
  ];
  
  
  export default function TechnologyCloud() {
    return (
      <section
        id="technology-cloud"
        className="technology-cloud-section"
      >
        <div
          aria-hidden="true"
          className="technology-cloud-glow technology-cloud-glow--left"
        />
  
        <div
          aria-hidden="true"
          className="technology-cloud-glow technology-cloud-glow--right"
        />
  
        <div className="site-container">
          <Reveal>
            <div className="technology-cloud-heading">
              <div>
                <p className="section-kicker">
                  Stack & outils
                </p>
  
                <h2
                  id="technology-cloud-title"
                  className="technology-cloud-title"
                >
                  Du produit à la
                  <span> production.</span>
                </h2>
              </div>
  
              <p>
                Frontend, backend, mobile,
                données, cloud, CI/CD et
                intégrations : les technologies
                que j&apos;utilise réellement
                dans mes projets.
              </p>
            </div>
          </Reveal>
  
          <Reveal
            y={20}
            delay={0.08}
          >
            <div className="technology-cloud">
              {technologies.map(
                (technology, index) => {
                  const Icon =
                    getTechnologyIcon(
                      technology.name,
                    );
  
                  return (
                    <div
                      key={technology.name}
                      className={[
                        "technology-cloud-item",
                        `technology-cloud-item--${technology.importance}`,
                      ].join(" ")}
                      style={{
                        animationDelay:
                          `${(index % 8) * -0.55}s`,
                      }}
                    >
                      <Icon
                        aria-hidden="true"
                        size={22}
                      />
  
                      <span>
                        {technology.name}
                      </span>
                    </div>
                  );
                },
              )}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }