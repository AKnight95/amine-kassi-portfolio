import { FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
  
  import { siteConfig } from "@/config/site";
  
  export default function Header() {
    return (
      <header className="site-header">
        <div className="site-container flex h-[74px] items-center justify-between">
          <a
            href="#top"
            aria-label="Retour en haut de la page"
            className="group flex items-center gap-3"
          >
            <span className="font-display text-lg font-bold tracking-[0.16em] text-white">
              AMINE
              <span className="text-accent">.</span>
            </span>
  
            <span className="neon-diamond opacity-60 transition group-hover:opacity-100" />
          </a>
  
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-8 md:flex"
          >
            <a href="#projects" className="nav-link">
              Projets
            </a>
  
            <a href="#skills" className="nav-link">
              Compétences
            </a>
  
            <a href="#about" className="nav-link">
              Parcours
            </a>
  
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
  
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub d'Amine Kassi"
              className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition hover:border-[#00e6e6]/35 hover:text-white sm:flex"
            >
              <FaGithub size={17} />
            </a>
  
            <a
              href="/cv/amine-kassi-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button"
            >
              <FileText size={15} />
              CV
            </a>
          </div>
        </div>
      </header>
    );
  }