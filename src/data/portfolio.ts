// src/data/portfolio.ts

/**
 * Polices disponibles pour restituer l'identité
 * graphique propre à chaque projet.
 */
export type ProjectHeadingFont =
  | "oxanium"
  | "poppins"
  | "montserrat";

/**
 * Capture d'un projet.
 *
 * Le label est affiché dans le carousel tandis que
 * le texte alternatif améliore l'accessibilité.
 */
export type ProjectImage = {
  src: string;
  label: string;
  alt: string;
};

/**
 * Identité visuelle d'un projet.
 *
 * Les composants de présentation récupèrent ces valeurs
 * sous forme de variables CSS.
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
 * Modèle commun utilisé sur :
 * - la page d'accueil ;
 * - les carousels ;
 * - les futures études de cas /projects/[slug].
 */
export type PortfolioProject = {
  slug: string;

  name: string;
  eyebrow: string;

  logo: string;

  description: string;
  longDescription: string;

  website: string;

  period?: string;
  role: string;

  images: readonly ProjectImage[];

  technologies: readonly string[];
  features: readonly string[];

  theme: ProjectTheme;
};

/**
 * Les projets sont classés selon leur pertinence
 * pour mon profil Full-Stack actuel.
 */
export const projects: readonly PortfolioProject[] = [
  // ============================================================
  // TYBEAU
  // ============================================================

  {
    slug: "tybeau",

    name: "Tybeau",

    eyebrow: "Marketplace beauté · Web & Mobile",

    logo: "/projects/tybeau/logo.png",

    description:
      "Plateforme destinée aux clients pour découvrir des professionnels, consulter leurs prestations et réserver des rendez-vous beauté.",

    longDescription:
      "Tybeau est un écosystème web et mobile développé autour d'une architecture TypeScript full-stack. J'interviens sur le frontend, le backend, la modélisation des données, les intégrations tierces, les paiements, les notifications ainsi que le déploiement et l'exploitation de l'application.",

    website: "https://tybeau.fr",

    role: "Développement Full-Stack Web & Mobile",

    images: [
      {
        src: "/projects/tybeau/home.png",
        label: "Accueil",
        alt: "Page d'accueil de la plateforme Tybeau",
      },
      {
        src: "/projects/tybeau/search.png",
        label: "Recherche",
        alt: "Interface de recherche de professionnels sur Tybeau",
      },
      {
        src: "/projects/tybeau/establishment.png",
        label: "Établissement",
        alt: "Fiche d'un établissement professionnel sur Tybeau",
      },
      {
        src: "/projects/tybeau/booking.png",
        label: "Réservation",
        alt: "Parcours de réservation d'une prestation sur Tybeau",
      },
      {
        src: "/projects/tybeau/payment.png",
        label: "Paiement",
        alt: "Interface de paiement Stripe intégrée à Tybeau",
      },
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
      "Application mobile client avec React Native et Expo",
      "Authentification Google, Facebook et Apple",
      "Gestion des comptes, rôles et permissions",
      "Paiements Stripe et Stripe Connect",
      "Paiements complets et acomptes",
      "Notifications push, e-mails et SMS",
      "Tâches automatisées et CRON",
      "Internationalisation FR / EN / AR",
      "Services et stockage AWS",
      "CI/CD et déploiements automatisés",
    ],

    theme: {
      background:
        "linear-gradient(135deg, #ffffff 0%, #faf9f6 58%, #f3ecdc 100%)",

      surface: "rgba(255, 255, 255, 0.76)",

      accent: "#CDAA58",
      accentSecondary: "#D6B25E",

      text: "#151515",
      muted: "#706858",

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

    logo: "/projects/tybeau-pro/logo.png",

    description:
      "Interface métier destinée aux établissements, managers et collaborateurs de l'écosystème Tybeau.",

    longDescription:
      "Tybeau Pro regroupe les outils opérationnels destinés aux professionnels : gestion des établissements, collaborateurs, clients, rendez-vous, prestations, permissions, communications et paiements. Le produit comprend une interface web ainsi qu'une application mobile dédiée.",

    website: "https://pro.tybeau.fr",

    role: "Développement Full-Stack Web & Mobile",

    images: [
      {
        src: "/projects/tybeau-pro/dashboard.png",
        label: "Dashboard",
        alt: "Tableau de bord principal de Tybeau Pro",
      },
      {
        src: "/projects/tybeau-pro/establishment.png",
        label: "Établissement",
        alt: "Interface de gestion d'un établissement dans Tybeau Pro",
      },
      {
        src: "/projects/tybeau-pro/collaborators.png",
        label: "Collaborateurs",
        alt: "Gestion des collaborateurs dans Tybeau Pro",
      },
      {
        src: "/projects/tybeau-pro/sms.png",
        label: "Campagnes SMS",
        alt: "Gestion des campagnes SMS dans Tybeau Pro",
      },
      {
        src: "/projects/tybeau-pro/admin-users.png",
        label: "Administration",
        alt: "Interface d'administration des utilisateurs de Tybeau Pro",
      },
      {
        src: "/projects/tybeau-pro/validation.png",
        label: "Validation",
        alt: "Interface de validation de produits dans Tybeau Pro",
      },
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
      "Espaces Owner, Manager, Pro, Admin et Commercial",
      "Paiements complets et acomptes",
      "Stripe Connect",
      "Intégration Stripe Terminal / Tap to Pay",
      "Campagnes SMS et notifications",
      "Notifications push et e-mails",
      "Builds et déploiements mobiles Android / iOS",
      "Administration et validation des contenus",
      "Déploiement et exploitation en production",
    ],

    theme: {
      background:
        "radial-gradient(circle at 82% 20%, rgba(205,170,88,.13), transparent 30%), linear-gradient(135deg, #070708 0%, #0B0B0C 54%, #141108 100%)",

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

    logo: "/projects/myrendev/logo.png",

    description:
      "Application métier de gestion de rendez-vous, utilisateurs, interventions, communications et automatisations.",

    longDescription:
      "MyRendev est une application complète sur laquelle j'ai travaillé de la modélisation des données jusqu'au déploiement cloud. Elle centralise notamment rendez-vous, clients, collaborateurs, interventions, permissions, communications et fonctionnalités de gestion.",

    website: "https://myrendev.fr",

    role: "Développement Full-Stack & pilotage technique",

    images: [
      {
        src: "/projects/myrendev/landing.png",
        label: "Présentation",
        alt: "Landing page de MyRendev",
      },
      {
        src: "/projects/myrendev/dashboard.png",
        label: "Dashboard",
        alt: "Tableau de bord principal de MyRendev",
      },
      {
        src: "/projects/myrendev/appointment.png",
        label: "Rendez-vous",
        alt: "Création d'un rendez-vous dans MyRendev",
      },
      {
        src: "/projects/myrendev/interventions.png",
        label: "Interventions",
        alt: "Tableau de bord des interventions MyRendev",
      },
      {
        src: "/projects/myrendev/sms.png",
        label: "Campagnes SMS",
        alt: "Interface des campagnes SMS MyRendev",
      },
      {
        src: "/projects/myrendev/billing.png",
        label: "Facturation",
        alt: "Paramètres de facturation de MyRendev",
      },
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
        "radial-gradient(circle at 18% 28%, rgba(56,189,248,.12), transparent 32%), linear-gradient(135deg, #07121A 0%, #071822 60%, #041016 100%)",

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

    logo: "/projects/spectral/logo.png",

    description:
      "Plateforme consacrée à un univers Dark Fantasy original, avec encyclopédie interactive, personnages, factions et contenu narratif.",

    longDescription:
      "Spectral est mon projet personnel orienté développement frontend et UI/UX. Il me permet d'expérimenter des interfaces riches, une identité graphique complète, des composants dynamiques, des recherches et filtres ainsi qu'un back-office permettant de structurer le contenu de l'univers.",

    website: "https://spectralunivers.com",

    role: "Conception, développement & direction artistique",

    images: [
      {
        src: "/projects/spectral/home.png",
        label: "Accueil",
        alt: "Page d'accueil de Spectral The Age of Iron",
      },
      {
        src: "/projects/spectral/univers.png",
        label: "Univers",
        alt: "Présentation des factions et classes de l'univers Spectral",
      },
      {
        src: "/projects/spectral/units.png",
        label: "Encyclopédie",
        alt: "Encyclopédie et moteur de recherche de Spectral",
      },
      {
        src: "/projects/spectral/unit-detail.png",
        label: "Fiche détaillée",
        alt: "Fiche détaillée d'une unité dans Spectral",
      },
      {
        src: "/projects/spectral/dashboard.png",
        label: "Back-office",
        alt: "Interface d'administration du projet Spectral",
      },
    ],

    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
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
      "Responsive design",
    ],

    theme: {
      background:
        "radial-gradient(circle at 15% 20%, rgba(0,230,230,.14), transparent 30%), radial-gradient(circle at 85% 70%, rgba(192,0,255,.14), transparent 30%), #020506",

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

    logo: "/projects/cogessur/logo.webp",

    description:
      "Site vitrine réalisé au début de mon parcours professionnel pour un cabinet de courtage en assurances.",

    longDescription:
      "Cogessur fait partie de mes premiers projets professionnels. J'ai réalisé et intégré le site WordPress présentant le cabinet, ses différentes offres d'assurance, ses contenus et ses parcours de contact. Ce projet illustre également mes premières expériences avec PHP et WordPress.",

    website: "https://www.cogessur.com",

    period: "Première année d'alternance",

    role: "Développement & intégration WordPress",

    images: [
      {
        src: "/projects/cogessur/home.png",
        label: "Accueil",
        alt: "Page d'accueil du site Cogessur",
      },
      {
        src: "/projects/cogessur/insurance.png",
        label: "Assurances",
        alt: "Présentation des assurances pour particuliers sur Cogessur",
      },
      {
        src: "/projects/cogessur/about.png",
        label: "Le cabinet",
        alt: "Page de présentation du cabinet Cogessur",
      },
      {
        src: "/projects/cogessur/news.png",
        label: "Actualités",
        alt: "Section actualités du site Cogessur",
      },
      {
        src: "/projects/cogessur/contact.png",
        label: "Contact",
        alt: "Page de contact du site Cogessur",
      },
      {
        src: "/projects/cogessur/claim.png",
        label: "Réclamation",
        alt: "Formulaire de réclamation du site Cogessur",
      },
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
        "radial-gradient(circle at 85% 24%, rgba(36,116,154,.12), transparent 30%), linear-gradient(135deg, #F8FAFC 0%, #EEF4F8 100%)",

      surface: "rgba(255, 255, 255, 0.8)",

      accent: "#24749A",
      accentSecondary: "#102D40",

      text: "#10212C",
      muted: "#687985",

      headingFont: "poppins",
    },
  },
] as const;

/**
 * Retourne un projet correspondant au slug demandé.
 */
export function getProjectBySlug(
  slug: string,
): PortfolioProject | undefined {
  return projects.find(
    (project) => project.slug === slug,
  );
}