// src/components/Footer.tsx

import Link from "next/link";

import {
  ArrowUp,
  ExternalLink,
  FileText,
  Mail,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";


export default function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* =====================================================
          DÉCOR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="site-footer-grid"
      />

      <div
        aria-hidden="true"
        className="site-footer-glow"
      />


      <div className="site-container site-footer-inner">
        {/* =====================================================
            IDENTITÉ
        ====================================================== */}

        <div className="site-footer-brand">
          <Link
            href="/"
            className="site-footer-logo"
          >
            AMINE
            <span>
              .
            </span>

            <i
              aria-hidden="true"
              className="neon-diamond"
            />
          </Link>

          <p>
            Développeur Full-Stack orienté
            produit, web, mobile et cloud.
            De l&apos;interface jusqu&apos;à la
            mise en production.
          </p>

          <div className="site-footer-status">
            <span className="status-dot" />

            <span>
              Disponible pour un CDI
            </span>
          </div>
        </div>


        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <div className="site-footer-column">
          <span className="site-footer-title">
            Navigation
          </span>

          <Link href="/#projects">
            Projets
          </Link>

          <Link href="/competences">
            Compétences
          </Link>

          <Link href="/#parcours">
            Parcours
          </Link>

          <Link href="/contact">
            Contact
          </Link>
        </div>


        {/* =====================================================
            LIENS
        ====================================================== */}

        <div className="site-footer-column">
          <span className="site-footer-title">
            Liens
          </span>

          <a
            href="mailto:amine.k4595@gmail.com"
          >
            <Mail
              aria-hidden="true"
              size={14}
            />

            E-mail
          </a>

          <a
            href="https://github.com/AKnight95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              aria-hidden="true"
              size={14}
            />

            GitHub

            <ExternalLink
              aria-hidden="true"
              size={11}
            />
          </a>

          <a
            href="/amine-kassi-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText
              aria-hidden="true"
              size={14}
            />

            CV
          </a>
        </div>


        {/* =====================================================
            RETOUR HAUT DE PAGE
        ====================================================== */}

        <a
          href="#top"
          className="site-footer-top"
          aria-label="Retour en haut de la page"
        >
          <ArrowUp
            aria-hidden="true"
            size={18}
          />

          <span>
            TOP
          </span>
        </a>
      </div>


      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="site-container site-footer-bottom">
        <span>
          © {currentYear} Amine Kassi
        </span>

        <span>
          Next.js · TypeScript · Tailwind CSS
        </span>

        <span>
          Louvres · Paris / Île-de-France
        </span>
      </div>
    </footer>
  );
}