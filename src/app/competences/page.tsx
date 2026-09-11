// src/app/competences/page.tsx

import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowRight,
  Braces,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Header from "@/components/Header";
import Reveal from "@/components/motion/Reveal";
import { getTechnologyIcon } from "@/config/technologyIcons";


export const metadata: Metadata = {
  title: "Compétences — Amine Kassi",
  description:
    "Compétences techniques d'Amine Kassi : TypeScript, React, Next.js, NestJS, React Native, PostgreSQL, AWS, CI/CD et développement Full-Stack.",
};


type SkillGroup = {
  title: string;
  description: string;
  technologies: readonly string[];
};


const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Interfaces web responsives, applications métier et expériences produit modernes.",

    technologies: [
      "HTML5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
    ],
  },

  {
    title: "Backend & Data",
    description:
      "API métier, authentification, gestion de données et intégrations serveur.",

    technologies: [
      "Node.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "PHP",
      "Symfony",
      "WordPress",
    ],
  },

  {
    title: "Mobile",
    description:
      "Applications mobiles TypeScript distribuées sur Android et iOS.",

    technologies: [
      "React Native",
      "Expo",
      "Android",
      "iOS",
    ],
  },

  {
    title: "Cloud & DevOps",
    description:
      "Déploiement des applications et exploitation des environnements de production.",

    technologies: [
      "AWS Lightsail",
      "AWS S3",
      "AWS SES",
      "Vercel",
      "Docker",
      "Nginx",
      "PM2",
      "GitHub",
      "GitHub Actions",
    ],
  },

  {
    title: "Intégrations",
    description:
      "Paiement, communications, authentification externe et automatisations.",

    technologies: [
      "Stripe",
      "Stripe Connect",
      "Stripe Terminal",
      "Tap to Pay",
      "SMSmode",
      "OAuth / Social Login",
      "CRON / tâches planifiées",
      "Google Analytics",
    ],
  },

  {
    title: "Outils & IA",
    description:
      "Outils utilisés pour concevoir, tester, organiser et accélérer certaines tâches.",

    technologies: [
      "Postman",
      "Trello",
      "ChatGPT",
      "Emergent",
      "Midjourney",
    ],
  },
];


const capabilities = [
  {
    icon: Code2,
    title: "Développer un produit",
    text:
      "Passer d'une interface fonctionnelle à une application complète, maintenable et connectée à de vraies règles métier.",
  },

  {
    icon: Braces,
    title: "Construire une API",
    text:
      "Structurer des endpoints REST, l'authentification, les rôles, les permissions et les intégrations externes.",
  },

  {
    icon: Smartphone,
    title: "Livrer sur mobile",
    text:
      "Développer avec React Native / Expo et gérer les builds Android et iOS.",
  },

  {
    icon: Rocket,
    title: "Mettre en production",
    text:
      "Déployer frontend et backend, configurer Nginx, CI/CD, domaines, HTTPS et services cloud.",
  },
] as const;


export default function CompetencesPage() {
  return (
    <>
      <Header />

      <main className="skills-page">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="skills-page-hero">
          <div
            aria-hidden="true"
            className="skills-page-grid"
          />

          <div className="site-container">
            <Reveal>
              <p className="section-kicker">
                Compétences
              </p>

              <h1 className="skills-page-title">
                Une stack orientée
                <span> produit.</span>
              </h1>

              <p className="skills-page-intro">
                Mon profil couvre la chaîne complète :
                frontend, API, données, mobile,
                intégrations, cloud et déploiement.
                L&apos;objectif n&apos;est pas seulement
                d&apos;écrire du code, mais d&apos;amener
                une fonctionnalité jusqu&apos;à la
                production.
              </p>
            </Reveal>
          </div>
        </section>


        {/* =====================================================
            CE QUE JE SAIS FAIRE
        ====================================================== */}

        <section className="skills-capabilities">
          <div className="site-container">
            <div className="skills-capabilities-grid">
              {capabilities.map(
                (
                  capability,
                  index,
                ) => {
                  const Icon =
                    capability.icon;

                  return (
                    <Reveal
                      key={
                        capability.title
                      }
                      delay={
                        index * 0.05
                      }
                    >
                      <article className="skills-capability-card">
                        <div className="skills-capability-icon">
                          <Icon
                            aria-hidden="true"
                            size={22}
                          />
                        </div>

                        <h2>
                          {
                            capability.title
                          }
                        </h2>

                        <p>
                          {
                            capability.text
                          }
                        </p>
                      </article>
                    </Reveal>
                  );
                },
              )}
            </div>
          </div>
        </section>


        {/* =====================================================
            GROUPES DE TECHNOLOGIES
        ====================================================== */}

        <section className="skills-groups-section">
          <div className="site-container">
            {skillGroups.map(
              (
                group,
                groupIndex,
              ) => (
                <Reveal
                  key={group.title}
                  y={20}
                >
                  <section className="skills-group">
                    <div className="skills-group-heading">
                      <span>
                        {String(
                          groupIndex + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <div>
                        <h2>
                          {group.title}
                        </h2>

                        <p>
                          {
                            group.description
                          }
                        </p>
                      </div>
                    </div>


                    <div className="skills-technology-grid">
                      {group.technologies.map(
                        (
                          technology,
                        ) => {
                          const Icon =
                            getTechnologyIcon(
                              technology,
                            );

                          return (
                            <div
                              key={
                                technology
                              }
                              className="skills-technology"
                            >
                              <Icon
                                aria-hidden="true"
                                size={21}
                              />

                              <span>
                                {
                                  technology
                                }
                              </span>
                            </div>
                          );
                        },
                      )}
                    </div>
                  </section>
                </Reveal>
              ),
            )}
          </div>
        </section>


        {/* =====================================================
            ARCHITECTURE
        ====================================================== */}

        <section className="skills-architecture-section">
          <div className="site-container">
            <Reveal>
              <div className="skills-architecture-card">
                <div className="skills-architecture-copy">
                  <span className="section-kicker">
                    Architecture
                  </span>

                  <h2>
                    Frontend et backend
                    <strong>
                      {" "}
                      découplés.
                    </strong>
                  </h2>

                  <p>
                    Sur mes applications modernes,
                    le frontend Next.js ou React
                    Native consomme une API NestJS
                    séparée. La logique métier,
                    les données et les intégrations
                    sensibles restent centralisées
                    côté backend.
                  </p>
                </div>


                <div className="skills-architecture-flow">
                  <div>
                    <Layers3 size={19} />

                    <span>
                      Next.js / React Native
                    </span>
                  </div>

                  <ArrowRight size={15} />

                  <div>
                    <GitBranch size={19} />

                    <span>
                      API REST NestJS
                    </span>
                  </div>

                  <ArrowRight size={15} />

                  <div>
                    <Database size={19} />

                    <span>
                      Prisma / PostgreSQL
                    </span>
                  </div>

                  <ArrowRight size={15} />

                  <div>
                    <CloudCog size={19} />

                    <span>
                      AWS
                    </span>
                  </div>
                </div>


                <div className="skills-principles">
                  <span>
                    <ShieldCheck size={15} />
                    JWT & rôles
                  </span>

                  <span>
                    <ShieldCheck size={15} />
                    HTTPS / CORS
                  </span>

                  <span>
                    <ShieldCheck size={15} />
                    CI/CD
                  </span>

                  <span>
                    <ShieldCheck size={15} />
                    Secrets serveur
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>


        {/* CTA */}
        <section className="skills-page-cta">
          <div className="site-container">
            <Reveal>
              <div className="skills-page-cta-inner">
                <div>
                  <span>
                    Voir ces compétences en pratique
                  </span>

                  <h2>
                    Les projets parlent mieux
                    qu&apos;une liste de technos.
                  </h2>
                </div>

                <Link
                  href="/#projects"
                  className="neon-button neon-button-primary"
                >
                  Voir les projets

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}