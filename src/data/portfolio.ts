// src/data/portfolio.ts

export type PortfolioProject = {
    name: string;
    type: string;
    description: string;
    url: string;
    image: string;
    accent: string;
    featured?: boolean;
    technologies: readonly string[];
    highlights: readonly string[];
  };
  
  export const projects: readonly PortfolioProject[] = [
    {
      name: "Tybeau",
      type: "Marketplace beauté · Web & Mobile",
      description:
        "Écosystème destiné aux clients et professionnels de la beauté, développé autour d'une architecture TypeScript full-stack et déployé en production.",
  
      url: "https://tybeau.fr",
      image: "/projects/tybeau.webp",
      accent: "#00e6e6",
      featured: true,
  
      technologies: [
        "TypeScript",
        "Next.js",
        "React Native",
        "Expo",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "AWS",
        "Stripe",
      ],
  
      highlights: [
        "Web & mobile",
        "Paiements Stripe",
        "Authentification & rôles",
        "Notifications",
        "Cloud & CI/CD",
      ],
    },
  
    {
      name: "Tybeau Pro",
      type: "Application professionnelle",
      description:
        "Application et interface destinées aux établissements, managers et collaborateurs de l'écosystème Tybeau.",
  
      url: "https://pro.tybeau.fr",
      image: "/projects/tybeau-pro.webp",
      accent: "#9b5cff",
  
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "NestJS",
        "Stripe Terminal",
        "AWS",
      ],
  
      highlights: [
        "Gestion d'établissement",
        "Permissions",
        "Tap to Pay",
        "Builds iOS & Android",
      ],
    },
  
    {
      name: "MyRendev",
      type: "Plateforme de gestion",
      description:
        "Plateforme de gestion de rendez-vous et de parcours clients avec back-office, automatisations et communications transactionnelles.",
  
      url: "https://myrendev.fr",
      image: "/projects/myrendev.webp",
      accent: "#34d399",
  
      technologies: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "AWS",
      ],
  
      highlights: [
        "API REST",
        "Gestion des rendez-vous",
        "CRON",
        "E-mails & SMS",
        "CI/CD",
      ],
    },
  
    {
      name: "Spectral",
      type: "Projet personnel · Dark Fantasy",
      description:
        "Univers de fiction interactif avec encyclopédie, personnages, classes et interfaces visuelles riches développé comme projet personnel.",
  
      url: "https://spectralunivers.com",
      image: "/projects/spectral.webp",
      accent: "#e600ff",
  
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
  
      highlights: [
        "UI responsive",
        "Interfaces dynamiques",
        "Design system",
        "Contenu structuré",
      ],
    },
  ] as const;