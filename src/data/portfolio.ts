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
 * Capture utilisée dans les galeries projet.
 */
export type ProjectImage = {
  src: string;
  label: string;
  alt: string;
};

/**
 * Technologie réellement utilisée sur un projet,
 * accompagnée de son rôle dans l'architecture.
 */
export type ProjectTechnology = {
  name: string;
  usage: string;
};

/**
 * Mission / axe de travail présenté dans une case study.
 */
export type ProjectMission = {
  title: string;
  description: string;
  details: readonly string[];
};

/**
 * Identité visuelle propre à chaque produit.
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
 * Modèle complet d'un projet portfolio.
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

  technologies: readonly ProjectTechnology[];
  features: readonly string[];
  missions: readonly ProjectMission[];

  theme: ProjectTheme;
};


/* ============================================================
   PROJETS
   ============================================================ */

export const projects: readonly PortfolioProject[] = [
  /* ==========================================================
     TYBEAU
     ========================================================== */

  {
    slug: "tybeau",

    name: "Tybeau",

    eyebrow: "Marketplace beauté · Web & Mobile",

    logo: "/projects/tybeau/logo.png",

    description:
      "Plateforme destinée aux clients pour découvrir des professionnels, consulter leurs prestations et réserver des rendez-vous beauté.",

    longDescription:
      "Tybeau est un écosystème web et mobile sur lequel j'interviens de bout en bout : interfaces client, API métier, données, paiements, notifications, applications mobiles et déploiement. Le produit relie les clients aux établissements et professionnels autour de la recherche de prestations et de la réservation.",

    website: "https://tybeau.fr",

    role:
      "Développement Full-Stack Web & Mobile",

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
        alt: "Fiche d'un établissement sur Tybeau",
      },
      {
        src: "/projects/tybeau/booking.png",
        label: "Réservation",
        alt: "Parcours de réservation d'une prestation sur Tybeau",
      },
      {
        src: "/projects/tybeau/payment.png",
        label: "Paiement",
        alt: "Paiement Stripe intégré au parcours Tybeau",
      },
    ],

    technologies: [
      {
        name: "TypeScript",
        usage:
          "Langage principal partagé entre le frontend et le backend afin de conserver un typage cohérent sur l'ensemble du produit.",
      },
      {
        name: "React",
        usage:
          "Construction des interfaces et composants interactifs de la plateforme.",
      },
      {
        name: "Next.js",
        usage:
          "Frontend web client, routing, rendu des pages et déploiement du produit web.",
      },
      {
        name: "React Native",
        usage:
          "Développement de l'application mobile client à partir d'une base TypeScript commune.",
      },
      {
        name: "Expo",
        usage:
          "Toolchain mobile, builds et gestion des versions Android et iOS.",
      },
      {
        name: "Node.js",
        usage:
          "Runtime de l'API et des traitements serveur.",
      },
      {
        name: "NestJS",
        usage:
          "Backend métier : API, authentification, rendez-vous, paiements, notifications et règles applicatives.",
      },
      {
        name: "Prisma",
        usage:
          "Accès typé aux données et gestion du schéma applicatif.",
      },
      {
        name: "PostgreSQL",
        usage:
          "Base relationnelle pour les utilisateurs, établissements, prestations, rendez-vous et données métier.",
      },
      {
        name: "AWS",
        usage:
          "Hébergement et services cloud utilisés par l'écosystème.",
      },
      {
        name: "Stripe",
        usage:
          "Paiements en ligne intégrés au parcours de réservation.",
      },
      {
        name: "Stripe Connect",
        usage:
          "Gestion des flux de paiement liés aux professionnels de la marketplace.",
      },
      {
        name: "GitHub Actions",
        usage:
          "Automatisation de tâches de CI/CD et de déploiement.",
      },
      {
        name: "Vercel",
        usage:
          "Déploiement et livraison continue des applications web Next.js.",
      },
    ],

    features: [
      "Recherche de professionnels et prestations",
      "Réservation et gestion des rendez-vous",
      "Application mobile client",
      "Authentification Google, Facebook et Apple",
      "Gestion des comptes et rôles",
      "Paiements complets ou partiels",
      "Stripe et Stripe Connect",
      "Notifications push",
      "E-mails et SMS",
      "Tâches CRON",
      "Internationalisation FR / EN / AR",
      "Déploiements web et mobile",
    ],

    missions: [
      {
        title: "Développement produit Full-Stack",
        description:
          "Participation au développement de l'écosystème client en couvrant aussi bien les interfaces que l'API et les modèles de données.",
        details: [
          "Développement d'interfaces Next.js et TypeScript.",
          "Création et évolution des endpoints NestJS.",
          "Modélisation des données avec Prisma et PostgreSQL.",
          "Correction et évolution de fonctionnalités déjà utilisées en production.",
        ],
      },
      {
        title: "Recherche & réservation",
        description:
          "Mise en œuvre du parcours permettant à un client de trouver une prestation puis de réserver un créneau disponible.",
        details: [
          "Gestion des établissements, prestations et catégories.",
          "Prise en compte des horaires et indisponibilités.",
          "Création et suivi des rendez-vous.",
          "Gestion du lieu, de l'adresse et de l'horaire du rendez-vous.",
        ],
      },
      {
        title: "Paiements",
        description:
          "Intégration d'une logique de paiement adaptée aux différentes prestations proposées par les professionnels.",
        details: [
          "Intégration de Stripe.",
          "Utilisation de Stripe Connect.",
          "Gestion de prestations sans paiement, avec paiement complet ou acompte.",
          "Gestion des acomptes fixes ou basés sur un pourcentage.",
        ],
      },
      {
        title: "Notifications & automatisations",
        description:
          "Automatisation des communications autour des rendez-vous afin de réduire les actions manuelles.",
        details: [
          "Notifications push liées aux rendez-vous.",
          "Rappels par SMS.",
          "E-mails transactionnels.",
          "Tâches CRON pour déclencher les traitements planifiés.",
          "Workflow post-rendez-vous pour solliciter les avis clients.",
        ],
      },
      {
        title: "Application mobile",
        description:
          "Développement et maintenance de l'application cliente React Native / Expo.",
        details: [
          "Base TypeScript avec React Native.",
          "Builds Expo / EAS.",
          "Gestion des versions Android et iOS.",
          "Intégration des authentifications sociales et des fonctionnalités métier.",
        ],
      },
      {
        title: "Mise en production",
        description:
          "Participation à l'exploitation réelle du produit, au-delà du développement local.",
        details: [
          "Déploiements web automatisés.",
          "Gestion des environnements et variables de configuration.",
          "Services AWS.",
          "Suivi des incidents et corrections en production.",
        ],
      },
    ],

    theme: {
      background:
        "linear-gradient(135deg, #ffffff 0%, #faf9f6 58%, #f3ecdc 100%)",

      surface:
        "rgba(255, 255, 255, 0.76)",

      accent: "#CDAA58",
      accentSecondary: "#D6B25E",

      text: "#151515",
      muted: "#706858",

      headingFont: "montserrat",
    },
  },


  /* ==========================================================
     TYBEAU PRO
     ========================================================== */

  {
    slug: "tybeau-pro",

    name: "Tybeau Pro",

    eyebrow:
      "Application professionnelle · Web & Mobile",

    logo: "/projects/tybeau-pro/logo.png",

    description:
      "Interface métier destinée aux établissements, managers et collaborateurs de l'écosystème Tybeau.",

    longDescription:
      "Tybeau Pro constitue la partie métier de l'écosystème. L'application centralise la gestion des établissements, collaborateurs, clients, prestations, rendez-vous, permissions, communications et paiements, à travers des interfaces web et mobiles adaptées aux différents rôles.",

    website: "https://pro.tybeau.fr",

    role:
      "Développement Full-Stack Web & Mobile",

    images: [
      {
        src: "/projects/tybeau-pro/dashboard.png",
        label: "Dashboard",
        alt: "Dashboard principal de Tybeau Pro",
      },
      {
        src: "/projects/tybeau-pro/establishment.png",
        label: "Établissement",
        alt: "Gestion d'un établissement dans Tybeau Pro",
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
        alt: "Administration des utilisateurs dans Tybeau Pro",
      },
      {
        src: "/projects/tybeau-pro/validation.png",
        label: "Validation",
        alt: "Validation des produits dans Tybeau Pro",
      },
    ],

    technologies: [
      {
        name: "TypeScript",
        usage:
          "Langage commun des applications web, mobile et du backend.",
      },
      {
        name: "React",
        usage:
          "Interfaces web professionnelles et composants du back-office.",
      },
      {
        name: "Next.js",
        usage:
          "Application web destinée aux professionnels et aux espaces d'administration.",
      },
      {
        name: "React Native",
        usage:
          "Application mobile professionnelle.",
      },
      {
        name: "Expo",
        usage:
          "Gestion des builds et livraisons Android / iOS.",
      },
      {
        name: "Node.js",
        usage:
          "Runtime des services backend.",
      },
      {
        name: "NestJS",
        usage:
          "API métier, permissions, agenda, clients, produits, paiements et administration.",
      },
      {
        name: "Prisma",
        usage:
          "Couche d'accès typée à la base PostgreSQL.",
      },
      {
        name: "PostgreSQL",
        usage:
          "Persistance des établissements, utilisateurs, produits, rendez-vous et données métier.",
      },
      {
        name: "AWS",
        usage:
          "Infrastructure et services cloud de l'écosystème.",
      },
      {
        name: "Stripe",
        usage:
          "Traitement des paiements associés aux prestations.",
      },
      {
        name: "Stripe Connect",
        usage:
          "Flux financiers entre la plateforme et les comptes professionnels.",
      },
      {
        name: "Stripe Terminal",
        usage:
          "Travaux d'intégration du paiement physique et de Tap to Pay dans l'application professionnelle.",
      },
      {
        name: "GitHub Actions",
        usage:
          "Automatisation des processus de livraison et de déploiement.",
      },
    ],

    features: [
      "Gestion des établissements",
      "Gestion des collaborateurs et clients",
      "Agenda et rendez-vous",
      "Gestion des prestations et produits",
      "Rôles et permissions",
      "Espaces Owner, Manager, Pro, Admin et Commercial",
      "Paiements et acomptes",
      "Stripe Connect",
      "Stripe Terminal / Tap to Pay",
      "Campagnes SMS",
      "Notifications",
      "Applications Android et iOS",
      "Validation et administration des contenus",
    ],

    missions: [
      {
        title: "Interfaces métier",
        description:
          "Construction et évolution des écrans utilisés quotidiennement par les professionnels.",
        details: [
          "Dashboards d'établissement.",
          "Gestion des clients et collaborateurs.",
          "Gestion des prestations et produits.",
          "Interfaces adaptées aux différents rôles utilisateur.",
        ],
      },
      {
        title: "Rôles & permissions",
        description:
          "Mise en place d'un système d'accès permettant d'adapter les fonctionnalités aux responsabilités de chaque utilisateur.",
        details: [
          "OWNER pour l'administration de l'établissement.",
          "MANAGER et PRO pour les usages opérationnels.",
          "ADMIN pour les fonctions de plateforme.",
          "COMMERCIAL avec permissions spécifiques et accès contextualisés.",
        ],
      },
      {
        title: "Agenda & rendez-vous",
        description:
          "Développement des outils métier utilisés pour organiser et suivre les prestations.",
        details: [
          "Affichage et gestion des rendez-vous.",
          "Association clients, professionnels et prestations.",
          "Gestion des disponibilités et absences.",
          "Notifications et rappels automatisés.",
        ],
      },
      {
        title: "Paiements & Tap to Pay",
        description:
          "Travail sur plusieurs parcours de paiement, depuis la réservation en ligne jusqu'au paiement physique.",
        details: [
          "Stripe et Stripe Connect.",
          "Paiements complets et acomptes.",
          "Intégration Stripe Terminal.",
          "Travaux d'intégration Tap to Pay sur iPhone.",
          "Gestion du connection token côté backend.",
        ],
      },
      {
        title: "Administration",
        description:
          "Développement d'outils internes permettant de piloter les utilisateurs et contenus de la plateforme.",
        details: [
          "Gestion des utilisateurs.",
          "Gestion des établissements.",
          "Gestion des collaborateurs.",
          "Validation des produits.",
          "Gestion des catégories.",
        ],
      },
      {
        title: "Mobile & stores",
        description:
          "Participation au cycle complet de l'application professionnelle mobile.",
        details: [
          "React Native avec Expo.",
          "Builds Android et iOS.",
          "Configuration des identifiants applicatifs.",
          "Préparation et soumission des versions aux stores.",
        ],
      },
    ],

    theme: {
      background:
        "radial-gradient(circle at 82% 20%, rgba(205,170,88,.13), transparent 30%), linear-gradient(135deg, #070708 0%, #0B0B0C 54%, #141108 100%)",

      surface:
        "rgba(16, 15, 12, 0.78)",

      accent: "#CDAA58",
      accentSecondary: "#D6B25E",

      text: "#FFFFFF",
      muted: "#AAA292",

      headingFont: "poppins",
    },
  },


  /* ==========================================================
     MYRENDEV
     ========================================================== */

  {
    slug: "myrendev",

    name: "MyRendev",

    eyebrow:
      "Gestion de rendez-vous · Application métier",

    logo: "/projects/myrendev/logo.png",

    description:
      "Application métier de gestion de rendez-vous, utilisateurs, interventions, communications et automatisations.",

    longDescription:
      "MyRendev est une application métier complète sur laquelle j'ai travaillé de la modélisation des données jusqu'au déploiement cloud. Le produit centralise les rendez-vous, clients, collaborateurs, interventions, communications et fonctionnalités de gestion.",

    website: "https://myrendev.fr",

    role:
      "Développement Full-Stack & pilotage technique",

    images: [
      {
        src: "/projects/myrendev/landing.png",
        label: "Présentation",
        alt: "Landing page de MyRendev",
      },
      {
        src: "/projects/myrendev/dashboard.png",
        label: "Dashboard",
        alt: "Dashboard principal de MyRendev",
      },
      {
        src: "/projects/myrendev/appointment.png",
        label: "Rendez-vous",
        alt: "Création d'un rendez-vous dans MyRendev",
      },
      {
        src: "/projects/myrendev/interventions.png",
        label: "Interventions",
        alt: "Gestion des interventions MyRendev",
      },
      {
        src: "/projects/myrendev/sms.png",
        label: "Campagnes SMS",
        alt: "Campagnes SMS de MyRendev",
      },
      {
        src: "/projects/myrendev/billing.png",
        label: "Facturation",
        alt: "Paramètres de facturation de MyRendev",
      },
    ],

    technologies: [
      {
        name: "TypeScript",
        usage:
          "Typage partagé sur le frontend et le backend.",
      },
      {
        name: "React",
        usage:
          "Création des interfaces métier.",
      },
      {
        name: "Next.js",
        usage:
          "Frontend principal de l'application.",
      },
      {
        name: "Node.js",
        usage:
          "Runtime du backend.",
      },
      {
        name: "NestJS",
        usage:
          "API, logique métier, authentification et traitements serveur.",
      },
      {
        name: "Prisma",
        usage:
          "ORM typé et gestion de l'accès aux données.",
      },
      {
        name: "PostgreSQL",
        usage:
          "Stockage relationnel des données métier.",
      },
      {
        name: "AWS Lightsail",
        usage:
          "Hébergement du backend et de l'environnement serveur.",
      },
      {
        name: "AWS S3",
        usage:
          "Stockage de fichiers et génération d'URLs pré-signées.",
      },
      {
        name: "AWS SES",
        usage:
          "Envoi des e-mails transactionnels.",
      },
      {
        name: "GitHub Actions",
        usage:
          "Automatisation du processus de déploiement.",
      },
      {
        name: "Nginx",
        usage:
          "Reverse proxy et exposition sécurisée de l'application.",
      },
      {
        name: "PM2",
        usage:
          "Gestion du processus Node.js en production.",
      },
    ],

    features: [
      "Rendez-vous",
      "Clients et collaborateurs",
      "Interventions",
      "Authentification et rôles",
      "Permissions",
      "Absences",
      "Stocks",
      "Facturation",
      "Campagnes SMS",
      "E-mails",
      "Fichiers S3",
      "Dashboards",
      "CI/CD",
    ],

    missions: [
      {
        title: "Architecture Full-Stack",
        description:
          "Développement d'une architecture moderne séparant frontend Next.js, API NestJS et données PostgreSQL.",
        details: [
          "Frontend React / Next.js.",
          "API REST NestJS.",
          "Prisma pour l'accès aux données.",
          "PostgreSQL pour la persistance.",
        ],
      },
      {
        title: "Gestion métier",
        description:
          "Développement des différents modules nécessaires à l'activité quotidienne.",
        details: [
          "Clients et collaborateurs.",
          "Rendez-vous.",
          "Interventions.",
          "Absences.",
          "Stocks.",
          "Permissions.",
        ],
      },
      {
        title: "Communications",
        description:
          "Centralisation de plusieurs canaux de communication depuis l'application.",
        details: [
          "Campagnes SMS.",
          "E-mails transactionnels via AWS SES.",
          "Suivi des envois.",
          "Automatisations liées aux événements métier.",
        ],
      },
      {
        title: "Fichiers & cloud",
        description:
          "Intégration du stockage cloud pour ne pas dépendre du serveur applicatif.",
        details: [
          "AWS S3.",
          "URLs pré-signées.",
          "Gestion des uploads.",
          "Séparation stockage / application.",
        ],
      },
      {
        title: "Production & CI/CD",
        description:
          "Déploiement de l'application et automatisation des livraisons.",
        details: [
          "AWS Lightsail.",
          "Linux.",
          "Nginx.",
          "PM2.",
          "GitHub Actions.",
          "HTTPS et configuration des domaines.",
        ],
      },
    ],

    theme: {
      background:
        "radial-gradient(circle at 18% 28%, rgba(56,189,248,.12), transparent 32%), linear-gradient(135deg, #07121A 0%, #071822 60%, #041016 100%)",

      surface:
        "rgba(7, 23, 32, 0.72)",

      accent: "#38BDF8",
      accentSecondary: "#22D3EE",

      text: "#FFFFFF",
      muted: "#94A9B6",

      headingFont: "poppins",
    },
  },


  /* ==========================================================
     SPECTRAL
     ========================================================== */

  {
    slug: "spectral",

    name: "Spectral",

    eyebrow:
      "Projet personnel · Univers interactif",

    logo: "/projects/spectral/logo.png",

    description:
      "Plateforme consacrée à un univers Dark Fantasy original avec encyclopédie interactive, personnages, factions et contenu narratif.",

    longDescription:
      "Spectral est mon projet personnel orienté développement frontend et UI/UX. Il me permet de concevoir une identité graphique complète tout en expérimentant des interfaces riches, des systèmes de recherche et de filtrage ainsi qu'un back-office permettant d'administrer le contenu de l'univers.",

    website:
      "https://spectralunivers.com",

    role:
      "Conception, développement & direction artistique",

    images: [
      {
        src: "/projects/spectral/home.png",
        label: "Accueil",
        alt: "Accueil de Spectral The Age of Iron",
      },
      {
        src: "/projects/spectral/univers.png",
        label: "Univers",
        alt: "Présentation de l'univers Spectral",
      },
      {
        src: "/projects/spectral/units.png",
        label: "Encyclopédie",
        alt: "Encyclopédie de Spectral",
      },
      {
        src: "/projects/spectral/unit-detail.png",
        label: "Fiche détaillée",
        alt: "Fiche d'une unité dans Spectral",
      },
      {
        src: "/projects/spectral/dashboard.png",
        label: "Back-office",
        alt: "Dashboard d'administration de Spectral",
      },
    ],

    technologies: [
      {
        name: "TypeScript",
        usage:
          "Typage des composants, données et comportements de l'interface.",
      },
      {
        name: "React",
        usage:
          "Construction des interfaces interactives et réutilisables.",
      },
      {
        name: "Next.js",
        usage:
          "Architecture du site, routing et organisation des pages.",
      },
      {
        name: "Tailwind CSS",
        usage:
          "Construction du design system, responsive et effets visuels.",
      },
    ],

    features: [
      "Encyclopédie interactive",
      "Personnages et unités",
      "Classes et factions",
      "Recherche",
      "Filtres dynamiques",
      "Galeries",
      "Back-office",
      "Design system personnalisé",
      "Responsive design",
    ],

    missions: [
      {
        title: "Direction artistique & Design System",
        description:
          "Création d'une identité graphique cohérente inspirée d'interfaces fantasy / science-fiction.",
        details: [
          "Glassmorphism.",
          "Effets néon.",
          "Palettes liées aux factions.",
          "Composants réutilisables.",
          "Responsive design.",
        ],
      },
      {
        title: "Encyclopédie interactive",
        description:
          "Conception de l'interface permettant d'explorer un volume important de contenu narratif.",
        details: [
          "Fiches personnages.",
          "Unités.",
          "Classes.",
          "Factions.",
          "Navigation entre contenus liés.",
        ],
      },
      {
        title: "Recherche & filtrage",
        description:
          "Création d'outils permettant d'explorer les contenus selon plusieurs critères.",
        details: [
          "Recherche textuelle.",
          "Filtres par type.",
          "Filtres par classe.",
          "Interfaces adaptées aux grands volumes de cartes.",
        ],
      },
      {
        title: "Back-office",
        description:
          "Création d'interfaces séparées pour administrer les contenus du site.",
        details: [
          "Dashboard.",
          "Gestion des contenus.",
          "Interfaces dédiées à l'administration.",
          "Séparation entre consultation publique et gestion.",
        ],
      },
    ],

    theme: {
      background:
        "radial-gradient(circle at 15% 20%, rgba(0,230,230,.14), transparent 30%), radial-gradient(circle at 85% 70%, rgba(192,0,255,.14), transparent 30%), #020506",

      surface:
        "rgba(2, 8, 10, 0.72)",

      accent: "#00E6E6",
      accentSecondary: "#C000FF",

      text: "#FFFFFF",
      muted: "#8C9A9E",

      headingFont: "oxanium",
    },
  },


  /* ==========================================================
     COGESSUR
     ========================================================== */

  {
    slug: "cogessur",

    name: "Cogessur",

    eyebrow:
      "Site corporate · WordPress",

    logo:
      "/projects/cogessur/logo.webp",

    description:
      "Site vitrine réalisé au début de mon parcours professionnel pour un cabinet de courtage en assurances.",

    longDescription:
      "Cogessur fait partie de mes premières réalisations professionnelles. Le projet consistait à créer et intégrer un site WordPress présentant le cabinet, ses offres d'assurance, ses contenus et ses différents parcours de contact.",

    website:
      "https://www.cogessur.com",

    period:
      "Première année d'alternance",

    role:
      "Développement & intégration WordPress",

    images: [
      {
        src: "/projects/cogessur/home.png",
        label: "Accueil",
        alt: "Accueil du site Cogessur",
      },
      {
        src: "/projects/cogessur/insurance.png",
        label: "Assurances",
        alt: "Offres d'assurance Cogessur",
      },
      {
        src: "/projects/cogessur/about.png",
        label: "Le cabinet",
        alt: "Présentation du cabinet Cogessur",
      },
      {
        src: "/projects/cogessur/news.png",
        label: "Actualités",
        alt: "Actualités Cogessur",
      },
      {
        src: "/projects/cogessur/contact.png",
        label: "Contact",
        alt: "Page contact Cogessur",
      },
      {
        src: "/projects/cogessur/claim.png",
        label: "Réclamation",
        alt: "Formulaire de réclamation Cogessur",
      },
    ],

    technologies: [
      {
        name: "WordPress",
        usage:
          "CMS utilisé pour structurer et administrer les contenus du site.",
      },
      {
        name: "PHP",
        usage:
          "Technologie backend de l'environnement WordPress.",
      },
      {
        name: "HTML",
        usage:
          "Structure des contenus et interfaces.",
      },
      {
        name: "CSS",
        usage:
          "Mise en forme et adaptation responsive.",
      },
      {
        name: "JavaScript",
        usage:
          "Interactions côté navigateur.",
      },
    ],

    features: [
      "Site responsive",
      "Offres d'assurance",
      "Parcours particuliers",
      "Parcours professionnels",
      "Actualités",
      "Formulaires de contact",
      "Réclamations",
      "Gestion WordPress",
    ],

    missions: [
      {
        title: "Intégration WordPress",
        description:
          "Construction du site vitrine à partir de WordPress et adaptation des différentes pages au besoin du cabinet.",
        details: [
          "Structure générale du site.",
          "Pages de contenu.",
          "Navigation.",
          "Intégration graphique.",
        ],
      },
      {
        title: "Présentation des offres",
        description:
          "Organisation des contenus d'assurance afin de proposer des parcours compréhensibles pour les visiteurs.",
        details: [
          "Offres particuliers.",
          "Offres professionnels.",
          "Pages de présentation.",
          "Actualités.",
        ],
      },
      {
        title: "Formulaires",
        description:
          "Intégration des différents points de contact nécessaires au site.",
        details: [
          "Contact.",
          "Demande d'information.",
          "Réclamation.",
        ],
      },
      {
        title: "Responsive",
        description:
          "Adaptation des interfaces aux différentes tailles d'écran.",
        details: [
          "Desktop.",
          "Tablette.",
          "Mobile.",
        ],
      },
    ],

    theme: {
      background:
        "radial-gradient(circle at 85% 24%, rgba(36,116,154,.12), transparent 30%), linear-gradient(135deg, #F8FAFC 0%, #EEF4F8 100%)",

      surface:
        "rgba(255, 255, 255, 0.8)",

      accent: "#24749A",
      accentSecondary: "#102D40",

      text: "#10212C",
      muted: "#687985",

      headingFont: "poppins",
    },
  },
] as const;


/**
 * Recherche utilisée par /projects/[slug].
 */
export function getProjectBySlug(
  slug: string,
): PortfolioProject | undefined {
  return projects.find(
    (project) =>
      project.slug === slug,
  );
}