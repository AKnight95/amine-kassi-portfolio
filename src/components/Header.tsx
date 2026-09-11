// src/components/Header.tsx

"use client";

import { useState } from "react";

import Link from "next/link";

import {
  FileText,
  Menu,
  X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";


const navigation = [
  {
    label: "Projets",
    href: "/#projects",
  },
  {
    label: "Compétences",
    href: "/competences",
  },
  {
    label: "Parcours",
    href: "/#parcours",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        {/* =====================================================
            IDENTITÉ
        ====================================================== */}

        <Link
          href="/"
          className="site-brand"
          aria-label="Retour à l'accueil"
          onClick={closeMobileMenu}
        >
          <span>
            AMINE
            <strong>.</strong>
          </span>

          <i
            aria-hidden="true"
            className="neon-diamond"
          />
        </Link>


        {/* =====================================================
            NAVIGATION DESKTOP
        ====================================================== */}

        <nav
          className="site-navigation"
          aria-label="Navigation principale"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>


        {/* =====================================================
            ACTIONS
        ====================================================== */}

        <div className="site-header-actions">
          <a
            href="https://github.com/AKnight95"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-button"
            aria-label="Ouvrir le profil GitHub d'Amine Kassi"
          >
            <FaGithub
              aria-hidden="true"
              size={17}
            />
          </a>

          <a
            href="/amine-kassi-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header-cv-button"
            aria-label="Ouvrir le CV d'Amine Kassi au format PDF"
          >
            <FileText
              aria-hidden="true"
              size={15}
            />

            <span>
              CV
            </span>
          </a>


          {/* Bouton menu mobile */}
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={
              mobileMenuOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(
                (current) => !current,
              )
            }
          >
            {mobileMenuOpen ? (
              <X
                aria-hidden="true"
                size={19}
              />
            ) : (
              <Menu
                aria-hidden="true"
                size={19}
              />
            )}
          </button>
        </div>
      </div>


      {/* =====================================================
          MENU MOBILE
      ====================================================== */}

      <div
        className={[
          "mobile-navigation",
          mobileMenuOpen
            ? "mobile-navigation--open"
            : "",
        ].join(" ")}
      >
        <nav
          className="site-container mobile-navigation-inner"
          aria-label="Navigation mobile"
        >
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              <span>
                {String(index + 1).padStart(
                  2,
                  "0",
                )}
              </span>

              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}