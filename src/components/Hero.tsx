// src/components/Hero.tsx

import Link from "next/link";

import {
  ArrowDown,
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Layers3,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Reveal from "@/components/motion/Reveal";


const heroStack = [
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "React Native",
  "PostgreSQL",
  "AWS",
] as const;


const domains = [
  {
    index: "01",
    label: "WEB",
    value: "React · Next.js",
  },
  {
    index: "02",
    label: "MOBILE",
    value: "React Native · Expo",
  },
  {
    index: "03",
    label: "CLOUD",
    value: "AWS · Vercel · CI/CD",
  },
] as const;


export default function Hero() {
  return (
    <section
      id="top"
      className="hero-shell"
    >
      {/* =====================================================
          DÉCOR DE FOND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="hero-grid-background"
      />

      <div
        aria-hidden="true"
        className="hero-glow hero-glow--cyan"
      />

      <div
        aria-hidden="true"
        className="hero-glow hero-glow--violet"
      />

      <div
        aria-hidden="true"
        className="hero-scanline"
      />

      <div
        aria-hidden="true"
        className="hero-scanline hero-scanline--secondary"
      />


      {/* Grand texte décoratif arrière-plan */}
      <div
        aria-hidden="true"
        className="hero-watermark"
      >
        <span>
          BUILD
        </span>

        <span>
          SHIP
        </span>

        <span>
          ITERATE
        </span>
      </div>


      <div className="site-container hero-layout">
        {/* =====================================================
            PRÉSENTATION
        ====================================================== */}

        <div className="hero-copy">
          <Reveal>
            <div className="hero-availability">
              <span className="status-dot" />

              <span>
                Disponible pour un CDI · Paris / Hybride
              </span>
            </div>
          </Reveal>


          <Reveal
            y={18}
            delay={0.05}
          >
            <p className="hero-name">
              AMINE KASSI
            </p>

            <h1 className="hero-title">
              <span>
                Full-Stack
              </span>

              <strong>
                Developer
              </strong>
            </h1>
          </Reveal>


          <Reveal
            y={18}
            delay={0.1}
          >
            <p className="hero-description">
              Je conçois et mets en production des
              applications <b>web et mobiles</b>, du
              frontend à l&apos;API, jusqu&apos;au cloud
              et au déploiement.
            </p>

            <p className="hero-stack-summary">
              TypeScript, React, Next.js, React Native,
              Node.js, NestJS, PostgreSQL et AWS.
            </p>
          </Reveal>


          {/* ===================================================
              CTA
          ==================================================== */}

          <Reveal
            y={18}
            delay={0.15}
          >
            <div className="hero-actions">
              <Link
                href="/#projects"
                className="neon-button neon-button-primary"
              >
                Voir mes projets

                <ArrowRight
                  aria-hidden="true"
                  size={16}
                />
              </Link>

              <Link
                href="/contact"
                className="neon-button"
              >
                Me contacter
              </Link>
            </div>
          </Reveal>


          {/* ===================================================
              DOMAINES PRINCIPAUX
          ==================================================== */}

          <Reveal
            y={15}
            delay={0.19}
          >
            <div className="hero-domain-grid">
              {domains.map((domain) => (
                <div
                  key={domain.label}
                  className="hero-domain"
                >
                  <span className="hero-domain-index">
                    {domain.index}
                  </span>

                  <div>
                    <strong>
                      {domain.label}
                    </strong>

                    <small>
                      {domain.value}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>


          {/* ===================================================
              TECHNOLOGIES PRINCIPALES
          ==================================================== */}

          <Reveal
            y={15}
            delay={0.22}
          >
            <div className="hero-stack-cloud">
              {heroStack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </Reveal>


          {/* ===================================================
              INFORMATIONS
          ==================================================== */}

          <Reveal
            y={12}
            delay={0.25}
          >
            <div className="hero-meta">
              <span>
                Louvres (95)
              </span>

              <i />

              <span>
                Paris / Île-de-France
              </span>

              <i />

              <span>
                Web · Mobile · Cloud
              </span>
            </div>
          </Reveal>
        </div>


        {/* =====================================================
            ARCHITECTURE VISUELLE
        ====================================================== */}

        <Reveal
          y={22}
          delay={0.1}
          className="hero-visual"
        >
          <div className="hero-architecture-card">
            {/* Rayon supérieur animé */}
            <div
              aria-hidden="true"
              className="hero-card-beam"
            />


            {/* Header carte */}
            <div className="hero-architecture-header">
              <div>
                <span>
                  ARCHITECTURE
                </span>

                <h2>
                  Du produit à la production.
                </h2>
              </div>

              <div className="hero-live-indicator">
                <span />

                LIVE
              </div>
            </div>


            {/* =================================================
                SCHÉMA
            ================================================== */}

            <div className="hero-architecture-map">
              <div className="hero-architecture-line hero-architecture-line--1" />

              <div className="hero-architecture-line hero-architecture-line--2" />

              <div className="hero-architecture-line hero-architecture-line--3" />


              {/* Points lumineux en circulation */}
              <span
                aria-hidden="true"
                className="hero-data-pulse hero-data-pulse--1"
              />

              <span
                aria-hidden="true"
                className="hero-data-pulse hero-data-pulse--2"
              />

              <span
                aria-hidden="true"
                className="hero-data-pulse hero-data-pulse--3"
              />


              {/* Frontend */}
              <div className="hero-tech-node hero-tech-node--frontend">
                <div className="hero-tech-icon">
                  <Code2
                    aria-hidden="true"
                    size={19}
                  />
                </div>

                <div>
                  <span>
                    FRONTEND
                  </span>

                  <strong>
                    Next.js · React
                  </strong>

                  <small>
                    Vercel
                  </small>
                </div>
              </div>


              {/* Mobile */}
              <div className="hero-tech-node hero-tech-node--mobile">
                <div className="hero-tech-icon">
                  <Smartphone
                    aria-hidden="true"
                    size={19}
                  />
                </div>

                <div>
                  <span>
                    MOBILE
                  </span>

                  <strong>
                    React Native
                  </strong>

                  <small>
                    Expo · iOS · Android
                  </small>
                </div>
              </div>


              {/* API */}
              <div className="hero-tech-node hero-tech-node--backend">
                <div className="hero-tech-icon">
                  <Server
                    aria-hidden="true"
                    size={19}
                  />
                </div>

                <div>
                  <span>
                    API
                  </span>

                  <strong>
                    NestJS · Node.js
                  </strong>

                  <small>
                    REST · Auth · Business logic
                  </small>
                </div>
              </div>


              {/* Données */}
              <div className="hero-tech-node hero-tech-node--database">
                <div className="hero-tech-icon">
                  <Database
                    aria-hidden="true"
                    size={19}
                  />
                </div>

                <div>
                  <span>
                    DATA
                  </span>

                  <strong>
                    PostgreSQL
                  </strong>

                  <small>
                    Prisma
                  </small>
                </div>
              </div>


              {/* Cloud */}
              <div className="hero-tech-node hero-tech-node--cloud">
                <div className="hero-tech-icon">
                  <Cloud
                    aria-hidden="true"
                    size={19}
                  />
                </div>

                <div>
                  <span>
                    CLOUD
                  </span>

                  <strong>
                    AWS
                  </strong>

                  <small>
                    Lightsail · S3 · SES
                  </small>
                </div>
              </div>
            </div>


            {/* =================================================
                MOTS-CLÉS TECHNIQUES
            ================================================== */}

            <div className="hero-architecture-tags">
              <span>
                TYPE-SAFE
              </span>

              <span>
                API-FIRST
              </span>

              <span>
                CI/CD
              </span>

              <span>
                CLOUD
              </span>
            </div>


            {/* =================================================
                FOOTER CARTE
            ================================================== */}

            <div className="hero-architecture-footer">
              <div>
                <FaGithub
                  aria-hidden="true"
                  size={16}
                />

                <span>
                  GitHub Actions
                </span>
              </div>

              <div>
                <Layers3
                  aria-hidden="true"
                  size={16}
                />

                <span>
                  Architecture découplée
                </span>
              </div>
            </div>
          </div>


          {/* Carte nombre de projets */}
          <div className="hero-floating-card">
            <span>
              05
            </span>

            <div>
              <strong>
                Projets
              </strong>

              <small>
                présentés
              </small>
            </div>
          </div>


          {/* Carte secondaire */}
          <div className="hero-floating-card hero-floating-card--delivery">
            <Sparkles
              aria-hidden="true"
              size={17}
            />

            <div>
              <strong>
                Production
              </strong>

              <small>
                Web · Mobile · Cloud
              </small>
            </div>
          </div>
        </Reveal>
      </div>


      {/* =====================================================
          CONTINUER
      ====================================================== */}

      <a
        href="#technology-cloud"
        className="hero-scroll"
        aria-label="Continuer vers les compétences"
      >
        <span>
          Explorer
        </span>

        <ArrowDown
          aria-hidden="true"
          size={17}
        />
      </a>
    </section>
  );
}