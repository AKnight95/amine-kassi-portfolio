// src/components/Header.tsx

import Link from "next/link";
import { FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { siteConfig } from "@/config/site";

/**
 * Navigation principale du portfolio.
 *
 * On utilise systématiquement "/#section" plutôt que "#section"
 * afin que les liens fonctionnent également depuis les pages projet.
 */
const navigationItems = [
  {
    label: "Projets",
    href: "/#projects",
  },
  {
    label: "Compétences",
    href: "/#skills",
  },
  {
    label: "Parcours",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
] as const;

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container flex h-[74px] items-center justify-between">
        {/* ---------------------------------------------------------
            IDENTITÉ / RETOUR EN HAUT DE LA HOMEPAGE
        ---------------------------------------------------------- */}
        <Link
          href="/#top"
          aria-label="Retour en haut de la page d'accueil"
          className="group flex items-center gap-3"
        >
          <span className="font-display text-lg font-bold tracking-[0.16em] text-white">
            AMINE
            <span className="text-accent">.</span>
          </span>

          <span
            aria-hidden="true"
            className="neon-diamond opacity-60 transition-opacity duration-200 group-hover:opacity-100"
          />
        </Link>

        {/* ---------------------------------------------------------
            NAVIGATION PRINCIPALE

            Masquée sur mobile pour l'instant afin de garder
            un header propre. On ajoutera ensuite un vrai menu mobile.
        ---------------------------------------------------------- */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ---------------------------------------------------------
            ACTIONS RAPIDES
        ---------------------------------------------------------- */}
        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir le profil GitHub d'Amine Kassi"
            title="GitHub"
            className="
              hidden h-10 w-10 items-center justify-center
              rounded-xl border border-white/[0.08]
              bg-white/[0.025] text-white/45
              transition-all duration-200
              hover:border-[#00e6e6]/35
              hover:bg-[#00e6e6]/[0.035]
              hover:text-white
              hover:shadow-[0_0_18px_rgba(0,230,230,0.12)]
              sm:flex
            "
          >
            <FaGithub
              aria-hidden="true"
              size={17}
            />
          </a>

          {/* CV PDF */}
          <a
            href="/cv/amine-kassi-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir le CV d'Amine Kassi au format PDF"
            className="neon-button"
          >
            <FileText
              aria-hidden="true"
              size={15}
            />

            <span>CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}