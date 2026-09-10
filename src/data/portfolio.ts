// src/data/portfolio.ts

/**
 * Polices disponibles pour adapter visuellement chaque projet
 * à son identité graphique.
 */
export type ProjectHeadingFont =
  | "oxanium"
  | "poppins"
  | "montserrat";

/**
 * Identité visuelle propre à chaque projet.
 *
 * Ces valeurs permettent au composant ProjectShowcase
 * de changer automatiquement de couleurs selon le produit.
 */
export type ProjectTheme = {
  background: string;
  surface: string;

  accent: string;
  accentSecondary: string;

  text: string;
  muted: string;

  headingFont: ProjectHeadingFont;
};

/**
 * Structure commune utilisée par :
 * - la homepage ;
 * - les carousels ;
 * - les pages détaillées /projects/[slug].
 */
export type PortfolioProject = {
  slug: string;

  name: string;
  eyebrow: string;

  description: string;
  longDescription: string;

  website: string;

  period?: string;
  role: string;

  images: readonly string[];

  technologies: readonly string[];
  features: readonly string[];

  theme: ProjectTheme;
};

/**
 * Projets présentés dans le portfolio.
 *
 * L'ordre correspond volontairement à leur pertinence
 * pour une candidature Full-Stack en 2026.
 */
export const projects: readonly PortfolioProject[] = [
  // ============================================================
  // TYBEAU
  // ============================================================

  {
    slug: "tybeau",

    name: "Tybeau",

    eyebrow: "Marketplace beauté · Web & Mobile",

    description:
      "Plateforme destinée aux clients pour découvrir des professionnels, consulter leurs prestations et réserver des rendez-vous beauté.",

    longDescription:
      "Tybeau est un écosystème web et mobile développé autour d'une architecture TypeScript full-stack. J'interviens sur le frontend, le backend, la modélisation des données, les intégrations tierces, les paiements, les notifications ainsi que le déploiement et l'exploitation de l'application.",

    website: "https://tybeau.fr",

    role: "Développement Full-Stack Web & Mobile",

    images: [
      "/projects/tybeau/home.png",
      "/projects/tybeau/search.png",
      "/projects/tybeau/establishment.png",
      "/projects/tybeau/booking.png",
      "/projects/tybeau/payment.png",
    ],

    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Node.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "AWS",
      "Stripe",
      "Stripe Connect",
      "GitHub Actions",
      "Vercel",
    ],

    features: [
      "Recherche de professionnels et prestations",
      "Réservation et gestion des rendez-vous",
      "Application mobile client avec React Native / Expo",
      "Authentification Google, Facebook et Apple",
      "Gestion des comptes et rôles",
      "Paiements Stripe et Stripe Connect",
      "Paiements complets et acomptes",
      "Notifications push",
      "E-mails transactionnels",
      "Envoi de SMS",
      "Tâches automatisées et CRON",
      "Internationalisation FR / EN / AR",
      "Stockage et services AWS",
      "CI/CD et déploiements automatisés",
    ],

    theme: {
      background:
        "linear-gradient(135deg, #ffffff 0%, #faf9f6 58%, #f4efe3 100%)",

      surface: "rgba(255, 255, 255, 0.76)",

      accent: "#CDAA58",
      accentSecondary: "#D6B25E",

      text: "#151515",
      muted: "#6B6455",

      headingFont: "montserrat",
    },
  },

  // ============================================================
  // TYBEAU PRO
  // ============================================================

  {
    slug: "tybeau-pro",

    name: "Tybeau Pro",

    eyebrow: "Application professionnelle · Web & Mobile",

    description:
      "Interface métier destinée aux établissements, managers et collaborateurs de l'écosystème Tybeau.",

    longDescription:
      "Tybeau Pro regroupe les outils opérationnels destinés aux professionnels : gestion des établissements, collaborateurs, clients, rendez-vous, prestations, permissions, communications et paiements. Le produit comprend une interface web ainsi qu'une application mobile dédiée.",

    website: "https://pro.tybeau.fr",

    role: "Développement Full-Stack Web & Mobile",

    images: [
      "/projects/tybeau-pro/dashboard.png",
      "/projects/tybeau-pro/establishment.png",
      "/projects/tybeau-pro/collaborators.png",
      "/projects/tybeau-pro/sms.png",
      "/projects/tybeau-pro/admin-users.png",
      "/projects/tybeau-pro/validation.png",
    ],

    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Node.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "AWS",
      "Stripe",
      "Stripe Connect",
      "Stripe Terminal",
      "GitHub Actions",
    ],

    features: [
      "Gestion des établissements",
      "Gestion des collaborateurs et clients",
      "Agenda et rendez-vous",
      "Gestion des prestations et produits",
      "Rôles et permissions métier",
      "Espaces Owner, Manager, Admin et Commercial",
      "Paiements complets et acomptes",
      "Stripe Connect",
      "Intégration Stripe Terminal / Tap to Pay",
      "Campagnes et notifications SMS",
      "Notifications push et e-mails",
      "Applications Android et iOS avec Expo",
      "Administration et validation des contenus",
      "Déploiement et exploitation en production",
    ],

    theme: {
      background:
        "linear-gradient(135deg, #080809 0%, #0B0B0C 55%, #11100D 100%)",

      surface: "rgba(16, 15, 12, 0.78)",

      accent: "#CDAA58",
      accentSecondary: "#D6B25E",

      text: "#FFFFFF",
      muted: "#AAA292",

      headingFont: "poppins",
    },
  },

  // ============================================================
  // MYRENDEV
  // ============================================================

  {
    slug: "myrendev",

    name: "MyRendev",

    eyebrow: "Gestion de rendez-vous · Application métier",

    description:
      "Application métier de gestion de rendez-vous, utilisateurs, interventions, communications et automatisations.",

    longDescription:
      "MyRendev est une application complète sur laquelle j'ai travaillé de la modélisation des données jusqu'au déploiement cloud. Elle centralise notamment rendez-vous, clients, collaborateurs, interventions, permissions, communications et fonctionnalités de gestion.",

    website: "https://myrendev.fr",

    role: "Développement Full-Stack & pilotage technique",

    images: [
      "/projects/myrendev/landing.png",
      "/projects/myrendev/dashboard.png",
      "/projects/myrendev/appointment.png",
      "/projects/myrendev/interventions.png",
      "/projects/myrendev/sms.png",
      "/projects/myrendev/billing.png",
    ],

    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "AWS Lightsail",
      "AWS S3",
      "AWS SES",
      "GitHub Actions",
      "Nginx",
      "PM2",
    ],

    features: [
      "Gestion des rendez-vous",
      "Gestion des clients et collaborateurs",
      "Gestion des interventions",
      "Authentification et rôles",
      "Gestion des permissions",
      "Back-office métier",
      "Gestion des absences",
      "Gestion des stocks",
      "Stockage de fichiers avec AWS S3",
      "E-mails transactionnels avec AWS SES",
      "Campagnes SMS",
      "Tâches automatisées et CRON",
      "Tableaux de bord et reporting",
      "CI/CD avec GitHub Actions",
      "Déploiement Linux avec Nginx et PM2",
    ],

    theme: {
      background:
        "linear-gradient(135deg, #07121A 0%, #071822 60%, #041016 100%)",

      surface: "rgba(7, 23, 32, 0.72)",

      accent: "#38BDF8",
      accentSecondary: "#22D3EE",

      text: "#FFFFFF",
      muted: "#94A9B6",

      headingFont: "poppins",
    },
  },

  // ============================================================
  // SPECTRAL
  // ============================================================

  {
    slug: "spectral",

    name: "Spectral",

    eyebrow: "Projet personnel · Univers interactif",

    description:
      "Plateforme consacrée à un univers Dark Fantasy original, avec encyclopédie interactive, personnages, factions et contenu narratif.",

    longDescription:
      "Spectral est mon projet personnel orienté développement frontend et UI/UX. Il me permet d'expérimenter des interfaces riches, une identité graphique complète, des composants dynamiques, des recherches et filtres, ainsi qu'un back-office permettant de structurer le contenu de l'univers.",

    website: "https://spectralunivers.com",

    role: "Conception, développement & direction artistique",

    images: [
      "/projects/spectral/home.png",
      "/projects/spectral/univers.png",
      "/projects/spectral/units.png",
      "/projects/spectral/unit-detail.png",
      "/projects/spectral/dashboard.png",
    ],

    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "Univers et encyclopédie interactive",
      "Fiches personnages et unités",
      "Classes et factions",
      "Recherche et filtres dynamiques",
      "Relations entre contenus",
      "Galeries d'images",
      "Back-office de gestion",
      "Design system personnalisé",
      "Animations et transitions",
      "Responsive design",
    ],

    theme: {
      background:
        "radial-gradient(circle at 15% 20%, rgba(0, 230, 230, 0.13), transparent 30%), radial-gradient(circle at 85% 70%, rgba(192, 0, 255, 0.13), transparent 30%), #020506",

      surface: "rgba(2, 8, 10, 0.72)",

      accent: "#00E6E6",
      accentSecondary: "#C000FF",

      text: "#FFFFFF",
      muted: "#8C9A9E",

      headingFont: "oxanium",
    },
  },

  // ============================================================
  // COGESSUR
  // ============================================================

  {
    slug: "cogessur",

    name: "Cogessur",

    eyebrow: "Site corporate · WordPress",

    description:
      "Site vitrine réalisé au début de mon parcours professionnel pour un cabinet de courtage en assurances.",

    longDescription:
      "Cogessur fait partie de mes premiers projets professionnels. J'ai réalisé et intégré le site WordPress présentant le cabinet, ses différentes offres d'assurance, ses contenus et ses parcours de contact. Ce projet illustre également mes premières expériences avec PHP et WordPress.",

    website: "https://www.cogessur.com",

    period: "Première année d'alternance",

    role: "Développement & intégration WordPress",

    images: [
      "/projects/cogessur/home.png",
      "/projects/cogessur/insurance.png",
      "/projects/cogessur/about.png",
      "/projects/cogessur/news.png",
      "/projects/cogessur/contact.png",
      "/projects/cogessur/claim.png",
    ],

    technologies: [
      "WordPress",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "Site vitrine responsive",
      "Présentation des offres d'assurance",
      "Parcours particuliers et professionnels",
      "Pages éditoriales",
      "Actualités",
      "Formulaires de contact",
      "Formulaire de réclamation",
      "Intégration et personnalisation WordPress",
    ],

    theme: {
      background:
        "linear-gradient(135deg, #F8FAFC 0%, #EEF4F8 100%)",

      surface: "rgba(255, 255, 255, 0.78)",

      accent: "#24749A",
      accentSecondary: "#102D40",

      text: "#10212C",
      muted: "#687985",

      headingFont: "poppins",
    },
  },
] as const;

/**
 * Recherche un projet à partir de son slug.
 *
 * Utilisé principalement par la route dynamique :
 * /projects/[slug]
 */
export function getProjectBySlug(
  slug: string,
): PortfolioProject | undefined {
  return projects.find(
    (project) => project.slug === slug,
  );
}