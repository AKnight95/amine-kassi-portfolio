// src/data/portfolio.ts

/* ============================================================
   TYPES
   ============================================================ */

   export type ProjectHeadingFont =
   | "oxanium"
   | "poppins"
   | "montserrat";
 
 export type ProjectTechnologyCategory =
   | "Langages"
   | "Frontend"
   | "Mobile"
   | "Backend"
   | "Data"
   | "Cloud & DevOps"
   | "Paiement & intégrations"
   | "CMS"
   | "Analytics & SEO"
   | "Organisation"
   | "IA & création";
 
 export type ProjectImage = {
   src: string;
   label: string;
   alt: string;
 };
 
 export type ProjectTechnology = {
   name: string;
   category: ProjectTechnologyCategory;
   usage: string;
 };
 
 export type ProjectMission = {
   title: string;
   description: string;
   details: readonly string[];
 };
 
 export type ProjectArchitecture = {
   title: string;
   description: string;
   layers: readonly string[];
 };
 
 export type ProjectTheme = {
   background: string;
   surface: string;
 
   accent: string;
   accentSecondary: string;
 
   text: string;
   muted: string;
 
   headingFont: ProjectHeadingFont;
 };
 
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
 
   architecture: ProjectArchitecture;
 
   security: readonly string[];
   seo: readonly string[];
 
   theme: ProjectTheme;
 };
 
 
 /* ============================================================
    TYBEAU
    ============================================================ */
 
 const tybeau: PortfolioProject = {
   slug: "tybeau",
 
   name: "Tybeau",
 
   eyebrow: "Marketplace beauté · Web & Mobile",
 
   logo: "/projects/tybeau/logo.png",
 
   description:
     "Plateforme destinée aux clients pour découvrir des professionnels, consulter leurs prestations et réserver des rendez-vous beauté.",
 
   longDescription:
     "Tybeau est un écosystème web et mobile sur lequel j'interviens de bout en bout : interfaces client, API métier, données, paiements, notifications, automatisations, application mobile et mise en production. Le frontend web et les applications mobiles consomment une API backend distincte regroupant la logique métier.",
 
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
       alt: "Recherche de professionnels sur Tybeau",
     },
     {
       src: "/projects/tybeau/establishment.png",
       label: "Établissement",
       alt: "Fiche d'un établissement sur Tybeau",
     },
     {
       src: "/projects/tybeau/booking.png",
       label: "Réservation",
       alt: "Parcours de réservation sur Tybeau",
     },
     {
       src: "/projects/tybeau/payment.png",
       label: "Paiement",
       alt: "Paiement intégré au parcours Tybeau",
     },
   ],
 
   technologies: [
     {
       name: "HTML5",
       category: "Langages",
       usage:
         "Structure sémantique des interfaces web publiques.",
     },
     {
       name: "CSS",
       category: "Langages",
       usage:
         "Styles spécifiques, responsive et finitions graphiques.",
     },
     {
       name: "JavaScript",
       category: "Langages",
       usage:
         "Fondation de l'écosystème frontend et Node.js.",
     },
     {
       name: "TypeScript",
       category: "Langages",
       usage:
         "Langage principal partagé entre les interfaces et le backend.",
     },
 
     {
       name: "React",
       category: "Frontend",
       usage:
         "Construction des composants et interfaces interactives.",
     },
     {
       name: "Next.js",
       category: "Frontend",
       usage:
         "Application web client, routing et rendu des pages publiques.",
     },
     {
       name: "Tailwind CSS",
       category: "Frontend",
       usage:
         "Construction rapide d'interfaces responsives et cohérentes.",
     },
     {
       name: "Ant Design",
       category: "Frontend",
       usage:
         "Composants avancés pour certaines interfaces fonctionnelles.",
     },
 
     {
       name: "React Native",
       category: "Mobile",
       usage:
         "Développement de l'application cliente mobile.",
     },
     {
       name: "Expo",
       category: "Mobile",
       usage:
         "Builds et gestion des versions Android et iOS.",
     },
 
     {
       name: "Node.js",
       category: "Backend",
       usage:
         "Runtime de l'API et des traitements serveur.",
     },
     {
       name: "NestJS",
       category: "Backend",
       usage:
         "API REST et logique métier : utilisateurs, établissements, prestations, rendez-vous, paiements et notifications.",
     },
 
     {
       name: "Prisma",
       category: "Data",
       usage:
         "ORM typé entre l'application NestJS et PostgreSQL.",
     },
     {
       name: "PostgreSQL",
       category: "Data",
       usage:
         "Stockage relationnel des données métier de la plateforme.",
     },
 
     {
       name: "GitHub",
       category: "Cloud & DevOps",
       usage:
         "Gestion du code source, historique et collaboration.",
     },
     {
       name: "GitHub Actions",
       category: "Cloud & DevOps",
       usage:
         "Automatisation de workflows de CI/CD et de déploiement.",
     },
     {
       name: "Vercel",
       category: "Cloud & DevOps",
       usage:
         "Déploiement continu du frontend Next.js.",
     },
     {
       name: "AWS Lightsail",
       category: "Cloud & DevOps",
       usage:
         "Hébergement de l'API backend et de l'infrastructure de données.",
     },
     {
       name: "AWS S3",
       category: "Cloud & DevOps",
       usage:
         "Stockage des fichiers et ressources applicatives.",
     },
     {
       name: "AWS SES",
       category: "Cloud & DevOps",
       usage:
         "Envoi des e-mails applicatifs et transactionnels.",
     },
     {
       name: "Nginx",
       category: "Cloud & DevOps",
       usage:
         "Reverse proxy et exposition HTTPS du backend.",
     },
     {
       name: "PM2",
       category: "Cloud & DevOps",
       usage:
         "Gestion des processus Node.js sur le serveur.",
     },
 
     {
       name: "Stripe",
       category: "Paiement & intégrations",
       usage:
         "Paiements intégrés au parcours de réservation.",
     },
     {
       name: "Stripe Connect",
       category: "Paiement & intégrations",
       usage:
         "Gestion des flux financiers associés aux professionnels.",
     },
     {
       name: "SMSmode",
       category: "Paiement & intégrations",
       usage:
         "Envoi de SMS et rappels liés aux rendez-vous.",
     },
     {
       name: "OAuth / Social Login",
       category: "Paiement & intégrations",
       usage:
         "Connexion via Google, Facebook et Apple.",
     },
     {
       name: "CRON / tâches planifiées",
       category: "Paiement & intégrations",
       usage:
         "Automatisation des rappels et traitements déclenchés à des horaires définis.",
     },
 
     {
       name: "Trello",
       category: "Organisation",
       usage:
         "Organisation des tâches et suivi des développements.",
     },
     {
       name: "Postman",
       category: "Organisation",
       usage:
         "Test et validation des endpoints de l'API.",
     },
 
     {
       name: "ChatGPT",
       category: "IA & création",
       usage:
         "Assistance ponctuelle pour recherche technique, revue et accélération de certaines tâches de développement.",
     },
   ],
 
   features: [
     "Recherche de professionnels et prestations",
     "Réservation et gestion des rendez-vous",
     "Application mobile client",
     "Authentification Google, Facebook et Apple",
     "Gestion des utilisateurs et rôles",
     "Paiements Stripe et Stripe Connect",
     "Paiements complets et acomptes",
     "Notifications push",
     "SMS et e-mails",
     "Automatisations CRON",
     "Internationalisation FR / EN / AR",
     "Déploiements web et mobile",
   ],
 
   missions: [
     {
       title: "Développement Full-Stack",
       description:
         "Évolution d'un produit réel sur l'ensemble de sa chaîne technique, du frontend jusqu'au backend et aux données.",
       details: [
         "Interfaces Next.js et React",
         "API REST NestJS",
         "Modèles Prisma",
         "PostgreSQL",
         "Intégrations externes",
       ],
     },
     {
       title: "Parcours de réservation",
       description:
         "Développement du parcours reliant recherche, prestation, disponibilité et rendez-vous.",
       details: [
         "Établissements et prestations",
         "Horaires et indisponibilités",
         "Création des rendez-vous",
         "Lieu et adresse",
         "Suivi du statut",
       ],
     },
     {
       title: "Paiements",
       description:
         "Implémentation de plusieurs modes de paiement selon la configuration des prestations.",
       details: [
         "Stripe",
         "Stripe Connect",
         "Paiement complet",
         "Acompte fixe",
         "Acompte en pourcentage",
       ],
     },
     {
       title: "Notifications & automatisations",
       description:
         "Automatisation des communications autour des rendez-vous.",
       details: [
         "SMS",
         "Push",
         "E-mails",
         "CRON",
         "Rappels",
         "Demande d'avis après rendez-vous",
       ],
     },
     {
       title: "Mobile",
       description:
         "Développement et maintenance de l'application cliente React Native.",
       details: [
         "React Native",
         "Expo",
         "Android",
         "iOS",
         "Authentifications sociales",
       ],
     },
     {
       title: "Production",
       description:
         "Participation au déploiement, à l'hébergement et à l'exploitation du produit.",
       details: [
         "Vercel",
         "AWS Lightsail",
         "S3",
         "SES",
         "Nginx",
         "PM2",
         "GitHub Actions",
       ],
     },
   ],
 
   architecture: {
     title:
       "Architecture frontend / backend découplée",
 
     description:
       "Le frontend Next.js et l'application mobile consomment une API REST NestJS distincte. Cette séparation permet de centraliser la logique métier côté backend et de la réutiliser depuis plusieurs clients.",
 
     layers: [
       "Next.js / React — frontend web",
       "React Native / Expo — application mobile",
       "API REST NestJS / Node.js",
       "Prisma — couche d'accès aux données",
       "PostgreSQL — base relationnelle",
       "AWS S3 / SES et services externes",
     ],
   },
 
   security: [
     "Contrôle d'accès par rôles et permissions.",
     "Séparation des clients web/mobile et de l'API métier.",
     "Authentification Google, Facebook et Apple.",
     "Secrets backend et clés de services conservés côté serveur.",
     "Paiements sensibles délégués à Stripe.",
     "Communications publiques protégées par HTTPS.",
   ],
 
   seo: [
     "Pages publiques servies via Next.js.",
     "Structure HTML sémantique et responsive.",
     "Gestion des métadonnées des pages publiques.",
     "Optimisation des médias et du chargement côté frontend.",
     "Internationalisation des interfaces publiques.",
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
 };
 
 
 /* ============================================================
    TYBEAU PRO
    ============================================================ */
 
 const tybeauPro: PortfolioProject = {
   slug: "tybeau-pro",
 
   name: "Tybeau Pro",
 
   eyebrow:
     "Application professionnelle · Web & Mobile",
 
   logo:
     "/projects/tybeau-pro/logo.png",
 
   description:
     "Interface métier destinée aux établissements, managers et collaborateurs de l'écosystème Tybeau.",
 
   longDescription:
     "Tybeau Pro constitue la partie métier de l'écosystème Tybeau. Le produit centralise établissements, collaborateurs, clients, prestations, agenda, permissions, administration, communications et paiements. Il comprend une application web ainsi qu'une application mobile professionnelle.",
 
   website:
     "https://pro.tybeau.fr",
 
   role:
     "Développement Full-Stack Web & Mobile",
 
   images: [
     {
       src:
         "/projects/tybeau-pro/dashboard.png",
       label: "Dashboard",
       alt:
         "Dashboard principal de Tybeau Pro",
     },
     {
       src:
         "/projects/tybeau-pro/establishment.png",
       label: "Établissement",
       alt:
         "Gestion d'un établissement dans Tybeau Pro",
     },
     {
       src:
         "/projects/tybeau-pro/collaborators.png",
       label: "Collaborateurs",
       alt:
         "Gestion des collaborateurs dans Tybeau Pro",
     },
     {
       src:
         "/projects/tybeau-pro/sms.png",
       label: "Campagnes SMS",
       alt:
         "Gestion des campagnes SMS dans Tybeau Pro",
     },
     {
       src:
         "/projects/tybeau-pro/admin-users.png",
       label: "Administration",
       alt:
         "Administration des utilisateurs de Tybeau Pro",
     },
     {
       src:
         "/projects/tybeau-pro/validation.png",
       label: "Validation",
       alt:
         "Validation des produits dans Tybeau Pro",
     },
   ],
 
   technologies: [
     {
       name: "HTML5",
       category: "Langages",
       usage:
         "Structure des interfaces web.",
     },
     {
       name: "CSS",
       category: "Langages",
       usage:
         "Styles métier, responsive et identité graphique.",
     },
     {
       name: "JavaScript",
       category: "Langages",
       usage:
         "Fondation de l'écosystème frontend et Node.js.",
     },
     {
       name: "TypeScript",
       category: "Langages",
       usage:
         "Langage principal côté web, mobile et backend.",
     },
 
     {
       name: "React",
       category: "Frontend",
       usage:
         "Construction des interfaces professionnelles.",
     },
     {
       name: "Next.js",
       category: "Frontend",
       usage:
         "Application web Pro et zones d'administration.",
     },
     {
       name: "Tailwind CSS",
       category: "Frontend",
       usage:
         "Mise en forme responsive et composants visuels.",
     },
     {
       name: "Ant Design",
       category: "Frontend",
       usage:
         "Tables, formulaires et composants métier complexes.",
     },
 
     {
       name: "React Native",
       category: "Mobile",
       usage:
         "Application mobile destinée aux professionnels.",
     },
     {
       name: "Expo",
       category: "Mobile",
       usage:
         "Toolchain mobile, builds et livraison Android / iOS.",
     },
 
     {
       name: "Node.js",
       category: "Backend",
       usage:
         "Runtime de l'API.",
     },
     {
       name: "NestJS",
       category: "Backend",
       usage:
         "API métier, permissions, agenda, utilisateurs, produits, paiements et administration.",
     },
 
     {
       name: "Prisma",
       category: "Data",
       usage:
         "Accès typé aux données métier.",
     },
     {
       name: "PostgreSQL",
       category: "Data",
       usage:
         "Base relationnelle de l'écosystème.",
     },
 
     {
       name: "GitHub",
       category: "Cloud & DevOps",
       usage:
         "Gestion du code source.",
     },
     {
       name: "GitHub Actions",
       category: "Cloud & DevOps",
       usage:
         "CI/CD et automatisation de déploiements.",
     },
     {
       name: "Vercel",
       category: "Cloud & DevOps",
       usage:
         "Déploiement du frontend Next.js.",
     },
     {
       name: "AWS Lightsail",
       category: "Cloud & DevOps",
       usage:
         "Hébergement backend et infrastructure de données.",
     },
     {
       name: "AWS S3",
       category: "Cloud & DevOps",
       usage:
         "Stockage des fichiers.",
     },
     {
       name: "AWS SES",
       category: "Cloud & DevOps",
       usage:
         "E-mails applicatifs et transactionnels.",
     },
     {
       name: "Nginx",
       category: "Cloud & DevOps",
       usage:
         "Reverse proxy du backend.",
     },
     {
       name: "PM2",
       category: "Cloud & DevOps",
       usage:
         "Gestion des processus Node.js.",
     },
 
     {
       name: "Stripe",
       category:
         "Paiement & intégrations",
       usage:
         "Paiements des prestations.",
     },
     {
       name: "Stripe Connect",
       category:
         "Paiement & intégrations",
       usage:
         "Gestion des comptes et flux professionnels.",
     },
     {
       name: "Stripe Terminal",
       category:
         "Paiement & intégrations",
       usage:
         "Intégration du paiement physique dans le produit Pro.",
     },
     {
       name: "Tap to Pay",
       category:
         "Paiement & intégrations",
       usage:
         "Travaux d'intégration du paiement sans terminal matériel sur iPhone.",
     },
     {
       name: "SMSmode",
       category:
         "Paiement & intégrations",
       usage:
         "Campagnes et communications SMS.",
     },
     {
       name:
         "CRON / tâches planifiées",
       category:
         "Paiement & intégrations",
       usage:
         "Rappels et traitements automatisés.",
     },
 
     {
       name: "Trello",
       category: "Organisation",
       usage:
         "Suivi du développement et organisation des fonctionnalités.",
     },
     {
       name: "Postman",
       category: "Organisation",
       usage:
         "Tests de l'API et des intégrations backend.",
     },
 
     {
       name: "ChatGPT",
       category: "IA & création",
       usage:
         "Assistance ponctuelle de développement et recherche technique.",
     },
     {
       name: "Emergent",
       category: "IA & création",
       usage:
         "Assistance générative utilisée ponctuellement sur certains développements, notamment autour du mobile.",
     },
   ],
 
   features: [
     "Gestion des établissements",
     "Gestion des collaborateurs et clients",
     "Agenda et rendez-vous",
     "Prestations et produits",
     "Permissions par rôles",
     "Espaces Owner, Manager, Pro, Admin et Commercial",
     "Paiements et acomptes",
     "Stripe Connect",
     "Stripe Terminal / Tap to Pay",
     "Campagnes SMS",
     "Notifications",
     "Application Android / iOS",
     "Administration et validation",
   ],
 
   missions: [
     {
       title: "Interfaces métier",
       description:
         "Développement des écrans opérationnels utilisés par les établissements et collaborateurs.",
       details: [
         "Dashboards",
         "Clients",
         "Collaborateurs",
         "Prestations",
         "Produits",
         "Établissements",
       ],
     },
     {
       title: "Rôles & permissions",
       description:
         "Mise en place de règles d'accès adaptées aux différents profils métier.",
       details: [
         "OWNER",
         "MANAGER",
         "PRO",
         "ADMIN",
         "COMMERCIAL",
         "Permissions granulaires",
       ],
     },
     {
       title: "Agenda & rendez-vous",
       description:
         "Gestion des opérations quotidiennes autour de la réservation.",
       details: [
         "Agenda",
         "Disponibilités",
         "Absences",
         "Clients",
         "Prestations",
         "Notifications",
       ],
     },
     {
       title: "Paiement physique et en ligne",
       description:
         "Intégration de plusieurs parcours de paiement à destination des professionnels.",
       details: [
         "Stripe",
         "Stripe Connect",
         "Paiement complet",
         "Acompte",
         "Stripe Terminal",
         "Tap to Pay",
       ],
     },
     {
       title: "Administration",
       description:
         "Développement de fonctions internes de gestion et de validation de la plateforme.",
       details: [
         "Utilisateurs",
         "Établissements",
         "Collaborateurs",
         "Produits",
         "Catégories",
         "Validation",
       ],
     },
     {
       title: "Mobile & stores",
       description:
         "Participation au cycle de développement et de publication de l'application Pro.",
       details: [
         "React Native",
         "Expo",
         "Android",
         "iOS",
         "Builds",
         "Préparation stores",
       ],
     },
   ],
 
   architecture: {
     title:
       "Architecture web / mobile / API découplée",
 
     description:
       "Le frontend Next.js et l'application React Native utilisent une API NestJS commune. La logique métier, les permissions et les intégrations sensibles restent concentrées côté backend.",
 
     layers: [
       "Next.js / React — interface web professionnelle",
       "React Native / Expo — application mobile Pro",
       "API REST NestJS",
       "Prisma",
       "PostgreSQL",
       "AWS S3 / SES",
       "Stripe / Stripe Connect / Terminal",
     ],
   },
 
   security: [
     "Contrôle d'accès par rôles et permissions granulaires.",
     "Route guards adaptés aux profils métier.",
     "Séparation claire entre fonctions Owner, Admin et Commercial.",
     "Secrets Stripe et traitements de paiement conservés côté backend.",
     "API séparée des clients web et mobile.",
     "Communications HTTPS.",
   ],
 
   seo: [
     "Application principalement métier et authentifiée : l'indexation n'est pas l'objectif central.",
     "Priorité à la performance des interfaces, au responsive et à la bonne séparation des espaces privés.",
     "Pages publiques et ressources de présentation compatibles avec l'écosystème Next.js.",
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
 };
 
 
 /* ============================================================
    MYRENDEV
    ============================================================ */
 
 const myrendev: PortfolioProject = {
   slug: "myrendev",
 
   name: "MyRendev",
 
   eyebrow:
     "Gestion de rendez-vous · Application métier",
 
   logo:
     "/projects/myrendev/logo.png",
 
   description:
     "Application métier de gestion de rendez-vous, utilisateurs, interventions, communications et automatisations.",
 
   longDescription:
     "MyRendev est une application complète développée autour d'un frontend Next.js et d'une API NestJS séparée. J'y ai travaillé sur les fonctionnalités métier, les utilisateurs et permissions, les communications, le stockage cloud, la sécurité applicative et la mise en production.",
 
   website:
     "https://myrendev.fr",
 
   role:
     "Développement Full-Stack & pilotage technique",
 
   images: [
     {
       src:
         "/projects/myrendev/landing.png",
       label: "Présentation",
       alt: "Landing page de MyRendev",
     },
     {
       src:
         "/projects/myrendev/dashboard.png",
       label: "Dashboard",
       alt: "Dashboard MyRendev",
     },
     {
       src:
         "/projects/myrendev/appointment.png",
       label: "Rendez-vous",
       alt:
         "Création d'un rendez-vous MyRendev",
     },
     {
       src:
         "/projects/myrendev/interventions.png",
       label: "Interventions",
       alt:
         "Gestion des interventions MyRendev",
     },
     {
       src:
         "/projects/myrendev/sms.png",
       label: "Campagnes SMS",
       alt:
         "Campagnes SMS MyRendev",
     },
     {
       src:
         "/projects/myrendev/billing.png",
       label: "Facturation",
       alt:
         "Options de facturation MyRendev",
     },
   ],
 
   technologies: [
     {
       name: "HTML5",
       category: "Langages",
       usage:
         "Structure des interfaces web.",
     },
     {
       name: "CSS",
       category: "Langages",
       usage:
         "Styles et adaptations responsives.",
     },
     {
       name: "JavaScript",
       category: "Langages",
       usage:
         "Écosystème web et runtime frontend.",
     },
     {
       name: "TypeScript",
       category: "Langages",
       usage:
         "Langage principal frontend et backend.",
     },
 
     {
       name: "React",
       category: "Frontend",
       usage:
         "Interfaces métier.",
     },
     {
       name: "Next.js",
       category: "Frontend",
       usage:
         "Application frontend principale.",
     },
     {
       name: "Tailwind CSS",
       category: "Frontend",
       usage:
         "Construction et responsive des interfaces.",
     },
     {
       name: "Ant Design",
       category: "Frontend",
       usage:
         "Composants métier complexes : formulaires, tableaux et contrôles.",
     },
 
     {
       name: "Node.js",
       category: "Backend",
       usage:
         "Runtime du backend.",
     },
     {
       name: "NestJS",
       category: "Backend",
       usage:
         "API REST, authentification et logique métier.",
     },
 
     {
       name: "Prisma",
       category: "Data",
       usage:
         "Accès typé à la base de données.",
     },
     {
       name: "PostgreSQL",
       category: "Data",
       usage:
         "Persistance des données métier.",
     },
 
     {
       name: "GitHub",
       category: "Cloud & DevOps",
       usage:
         "Gestion du code source.",
     },
     {
       name: "GitHub Actions",
       category: "Cloud & DevOps",
       usage:
         "CI/CD et déploiements automatisés.",
     },
     {
       name: "Vercel",
       category: "Cloud & DevOps",
       usage:
         "Hébergement du frontend Next.js.",
     },
     {
       name: "AWS Lightsail",
       category: "Cloud & DevOps",
       usage:
         "Hébergement du backend et des données.",
     },
     {
       name: "AWS S3",
       category: "Cloud & DevOps",
       usage:
         "Stockage des fichiers et génération d'URLs pré-signées.",
     },
     {
       name: "AWS SES",
       category: "Cloud & DevOps",
       usage:
         "Envoi des e-mails transactionnels.",
     },
     {
       name: "Nginx",
       category: "Cloud & DevOps",
       usage:
         "Reverse proxy et terminaison HTTPS.",
     },
     {
       name: "PM2",
       category: "Cloud & DevOps",
       usage:
         "Gestion du processus backend Node.js.",
     },
 
     {
       name: "SMSmode",
       category:
         "Paiement & intégrations",
       usage:
         "Campagnes et communications SMS.",
     },
     {
       name:
         "CRON / tâches planifiées",
       category:
         "Paiement & intégrations",
       usage:
         "Automatisation de traitements métier.",
     },
 
     {
       name: "Trello",
       category: "Organisation",
       usage:
         "Organisation du développement et suivi des tâches.",
     },
     {
       name: "Postman",
       category: "Organisation",
       usage:
         "Tests de l'API REST.",
     },
 
     {
       name: "ChatGPT",
       category: "IA & création",
       usage:
         "Assistance ponctuelle au développement et à la recherche technique.",
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
     "Stockage S3",
     "Dashboards",
     "Automatisations",
   ],
 
   missions: [
     {
       title: "Architecture Full-Stack",
       description:
         "Développement d'une architecture frontend/API séparée.",
       details: [
         "Next.js",
         "NestJS",
         "Prisma",
         "PostgreSQL",
       ],
     },
     {
       title: "Modules métier",
       description:
         "Développement des fonctionnalités utilisées pour gérer l'activité quotidienne.",
       details: [
         "Clients",
         "Collaborateurs",
         "Rendez-vous",
         "Interventions",
         "Absences",
         "Stocks",
         "Permissions",
       ],
     },
     {
       title: "Communications",
       description:
         "Centralisation des communications transactionnelles et campagnes.",
       details: [
         "SMSmode",
         "AWS SES",
         "Campagnes SMS",
         "E-mails",
         "Automatisations",
       ],
     },
     {
       title: "Fichiers & cloud",
       description:
         "Externalisation du stockage de fichiers vers AWS.",
       details: [
         "AWS S3",
         "Uploads",
         "URLs pré-signées",
         "Séparation stockage / serveur",
       ],
     },
     {
       title: "Déploiement & sécurité",
       description:
         "Mise en production et durcissement de l'application.",
       details: [
         "Lightsail",
         "Nginx",
         "PM2",
         "HTTPS",
         "HSTS",
         "CORS",
         "GitHub Actions",
       ],
     },
   ],
 
   architecture: {
     title:
       "Architecture frontend / API découplée",
 
     description:
       "Le frontend Next.js est déployé séparément du backend NestJS. Le backend centralise l'authentification, les règles métier, les intégrations AWS et l'accès à PostgreSQL.",
 
     layers: [
       "Next.js / React — frontend",
       "API REST NestJS / Node.js",
       "Prisma",
       "PostgreSQL",
       "AWS S3 / SES",
       "Nginx / PM2",
     ],
   },
 
   security: [
     "Authentification JWT avec expiration.",
     "Protection des routes et contrôle d'accès par rôles.",
     "CORS limité aux origines autorisées.",
     "HTTPS / TLS via Nginx.",
     "Durcissement HSTS.",
     "URLs pré-signées pour les fichiers stockés dans S3.",
     "Secrets et variables sensibles conservés côté serveur.",
   ],
 
   seo: [
     "Frontend Next.js.",
     "Structure HTML sémantique.",
     "Pages responsives.",
     "Gestion des métadonnées publiques.",
     "Séparation entre espaces publics et interfaces métier.",
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
 };
 
 
 /* ============================================================
    SPECTRAL
    ============================================================ */
 
 const spectral: PortfolioProject = {
   slug: "spectral",
 
   name: "Spectral",
 
   eyebrow:
     "Projet personnel · Univers interactif",
 
   logo:
     "/projects/spectral/logo.png",
 
   description:
     "Plateforme consacrée à un univers Dark Fantasy original, avec encyclopédie interactive, personnages, factions et contenu narratif.",
 
   longDescription:
     "Spectral est mon projet personnel orienté produit, frontend et UI/UX. Il me sert à expérimenter des interfaces riches, un design system complet, de nombreux contenus liés, des systèmes de recherche et filtrage ainsi qu'un back-office séparé, le tout avec une architecture frontend / API découplée.",
 
   website:
     "https://spectralunivers.com",
 
   role:
     "Conception, développement & direction artistique",
 
   images: [
     {
       src:
         "/projects/spectral/home.png",
       label: "Accueil",
       alt:
         "Page d'accueil de Spectral",
     },
     {
       src:
         "/projects/spectral/univers.png",
       label: "Univers",
       alt:
         "Exploration de l'univers Spectral",
     },
     {
       src:
         "/projects/spectral/units.png",
       label: "Encyclopédie",
       alt:
         "Encyclopédie Spectral",
     },
     {
       src:
         "/projects/spectral/unit-detail.png",
       label: "Fiche détaillée",
       alt:
         "Fiche d'une unité Spectral",
     },
     {
       src:
         "/projects/spectral/dashboard.png",
       label: "Back-office",
       alt:
         "Dashboard d'administration Spectral",
     },
   ],
 
   technologies: [
     {
       name: "HTML5",
       category: "Langages",
       usage:
         "Structure sémantique des interfaces publiques.",
     },
     {
       name: "CSS",
       category: "Langages",
       usage:
         "Effets visuels spécifiques, néons, transparence et responsive.",
     },
     {
       name: "JavaScript",
       category: "Langages",
       usage:
         "Écosystème web.",
     },
     {
       name: "TypeScript",
       category: "Langages",
       usage:
         "Typage du frontend et des structures applicatives.",
     },
 
     {
       name: "React",
       category: "Frontend",
       usage:
         "Composants interactifs et architecture UI.",
     },
     {
       name: "Next.js",
       category: "Frontend",
       usage:
         "Frontend public, routing et rendu des pages.",
     },
     {
       name: "Tailwind CSS",
       category: "Frontend",
       usage:
         "Design system, responsive et construction des interfaces.",
     },
     {
       name: "Ant Design",
       category: "Frontend",
       usage:
         "Composants avancés utilisés notamment dans les interfaces de gestion.",
     },
 
     {
       name: "Node.js",
       category: "Backend",
       usage:
         "Runtime backend.",
     },
     {
       name: "NestJS",
       category: "Backend",
       usage:
         "API du projet et logique du back-office.",
     },
 
     {
       name: "Prisma",
       category: "Data",
       usage:
         "Accès typé aux données.",
     },
     {
       name: "PostgreSQL",
       category: "Data",
       usage:
         "Persistance des personnages, unités, classes, relations et contenus.",
     },
 
     {
       name: "GitHub",
       category: "Cloud & DevOps",
       usage:
         "Gestion du dépôt et de l'historique du projet.",
     },
     {
       name: "GitHub Actions",
       category: "Cloud & DevOps",
       usage:
         "Automatisation de tâches et déploiements.",
     },
     {
       name: "Vercel",
       category: "Cloud & DevOps",
       usage:
         "Hébergement du frontend Next.js.",
     },
     {
       name: "AWS Lightsail",
       category: "Cloud & DevOps",
       usage:
         "Hébergement du backend et de la base.",
     },
     {
       name: "AWS S3",
       category: "Cloud & DevOps",
       usage:
         "Stockage des médias et fichiers.",
     },
     {
       name: "AWS SES",
       category: "Cloud & DevOps",
       usage:
         "Envoi d'e-mails applicatifs.",
     },
     {
       name: "Docker",
       category: "Cloud & DevOps",
       usage:
         "Conteneurisation de composants de l'environnement backend.",
     },
     {
       name: "Nginx",
       category: "Cloud & DevOps",
       usage:
         "Reverse proxy et exposition du backend.",
     },
 
     {
       name:
         "Google Analytics",
       category: "Analytics & SEO",
       usage:
         "Analyse du trafic et des usages du site public.",
     },
 
     {
       name: "Trello",
       category: "Organisation",
       usage:
         "Organisation et suivi du projet personnel.",
     },
 
     {
       name: "ChatGPT",
       category: "IA & création",
       usage:
         "Assistance ponctuelle pour développement, recherche et structuration.",
     },
     {
       name: "Midjourney",
       category: "IA & création",
       usage:
         "Création de certains visuels servant à illustrer l'univers.",
     },
   ],
 
   features: [
     "Encyclopédie interactive",
     "Fiches personnages et unités",
     "Classes et factions",
     "Recherche textuelle",
     "Filtres dynamiques",
     "Relations entre contenus",
     "Galeries",
     "Back-office",
     "Design system personnalisé",
     "Responsive design",
   ],
 
   missions: [
     {
       title:
         "Direction artistique & UI",
       description:
         "Création de l'identité visuelle complète du projet.",
       details: [
         "Design system",
         "Glassmorphism",
         "Néons",
         "Palettes par faction",
         "Responsive",
       ],
     },
     {
       title:
         "Encyclopédie interactive",
       description:
         "Conception d'une interface permettant d'explorer de nombreux contenus liés.",
       details: [
         "Personnages",
         "Unités",
         "Classes",
         "Factions",
         "Relations",
       ],
     },
     {
       title:
         "Recherche & filtres",
       description:
         "Création d'outils pour parcourir efficacement le contenu.",
       details: [
         "Recherche",
         "Filtres",
         "Catégories",
         "Navigation",
         "Cartes dynamiques",
       ],
     },
     {
       title: "Back-office",
       description:
         "Séparation entre la consultation publique et l'administration des contenus.",
       details: [
         "Dashboard",
         "Gestion des entrées",
         "Administration",
         "API dédiée",
       ],
     },
     {
       title: "Déploiement",
       description:
         "Mise en production d'une architecture web découplée.",
       details: [
         "Vercel",
         "Lightsail",
         "Docker",
         "Nginx",
         "GitHub Actions",
       ],
     },
   ],
 
   architecture: {
     title:
       "Architecture frontend / API découplée",
 
     description:
       "Le site public Next.js est séparé du backend et du stockage des données. Cette organisation permet de faire évoluer indépendamment l'expérience publique et les fonctions de gestion.",
 
     layers: [
       "Next.js / React — expérience publique",
       "Interface de gestion",
       "API NestJS",
       "Prisma",
       "PostgreSQL",
       "AWS S3 / SES",
       "Docker / Nginx",
     ],
   },
 
   security: [
     "HTTPS sur les services publics.",
     "Séparation frontend / API.",
     "Séparation entre espace public et fonctions d'administration.",
     "Secrets backend conservés côté serveur.",
     "Base PostgreSQL non exposée directement au frontend.",
   ],
 
   seo: [
     "Frontend Next.js destiné à des pages publiques indexables.",
     "Structure sémantique des contenus.",
     "Responsive design.",
     "Gestion des métadonnées de pages.",
     "Optimisation des médias.",
     "Google Analytics pour l'analyse du trafic.",
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
 };
 
 
 /* ============================================================
    COGESSUR
    ============================================================ */
 
 const cogessur: PortfolioProject = {
   slug: "cogessur",
 
   name: "Cogessur",
 
   eyebrow:
     "Site corporate · WordPress",
 
   logo:
     "/projects/cogessur/logo.webp",
 
   description:
     "Site vitrine réalisé au début de mon parcours professionnel pour un cabinet de courtage en assurances.",
 
   longDescription:
     "Cogessur fait partie de mes premières réalisations professionnelles. Le projet consistait à construire un site WordPress présentant le cabinet, ses différentes offres d'assurance, ses actualités et ses parcours de contact.",
 
   website:
     "https://www.cogessur.com",
 
   period:
     "Première année d'alternance",
 
   role:
     "Développement & intégration WordPress",
 
   images: [
     {
       src:
         "/projects/cogessur/home.png",
       label: "Accueil",
       alt:
         "Page d'accueil Cogessur",
     },
     {
       src:
         "/projects/cogessur/insurance.png",
       label: "Assurances",
       alt:
         "Présentation des offres Cogessur",
     },
     {
       src:
         "/projects/cogessur/about.png",
       label: "Le cabinet",
       alt:
         "Présentation du cabinet Cogessur",
     },
     {
       src:
         "/projects/cogessur/news.png",
       label: "Actualités",
       alt:
         "Actualités Cogessur",
     },
     {
       src:
         "/projects/cogessur/contact.png",
       label: "Contact",
       alt:
         "Page contact Cogessur",
     },
     {
       src:
         "/projects/cogessur/claim.png",
       label: "Réclamation",
       alt:
         "Formulaire de réclamation Cogessur",
     },
   ],
 
   technologies: [
     {
       name: "WordPress",
       category: "CMS",
       usage:
         "CMS principal utilisé pour structurer et administrer le site.",
     },
     {
       name: "PHP",
       category: "Langages",
       usage:
         "Technologie backend de l'environnement WordPress.",
     },
     {
       name: "HTML5",
       category: "Langages",
       usage:
         "Structure des pages.",
     },
     {
       name: "CSS",
       category: "Langages",
       usage:
         "Mise en forme et responsive.",
     },
     {
       name: "JavaScript",
       category: "Langages",
       usage:
         "Interactions côté navigateur.",
     },
     {
       name:
         "Google Analytics",
       category:
         "Analytics & SEO",
       usage:
         "Mesure du trafic et analyse de la fréquentation du site.",
     },
     {
       name: "Trello",
       category: "Organisation",
       usage:
         "Organisation et suivi des tâches du projet.",
     },
     {
       name: "ChatGPT",
       category: "IA & création",
       usage:
         "Outil d'assistance utilisé ponctuellement dans mon travail.",
     },
   ],
 
   features: [
     "Site vitrine responsive",
     "Présentation des assurances",
     "Parcours particuliers",
     "Parcours professionnels",
     "Pages éditoriales",
     "Actualités",
     "Formulaires",
     "Réclamations",
   ],
 
   missions: [
     {
       title: "Intégration WordPress",
       description:
         "Construction et organisation des différentes pages du site.",
       details: [
         "Structure",
         "Navigation",
         "Pages",
         "Intégration graphique",
       ],
     },
     {
       title:
         "Présentation des offres",
       description:
         "Organisation des contenus afin de rendre les offres du cabinet accessibles aux visiteurs.",
       details: [
         "Particuliers",
         "Professionnels",
         "Contenus",
         "Actualités",
       ],
     },
     {
       title: "Formulaires",
       description:
         "Intégration des différents parcours de contact.",
       details: [
         "Contact",
         "Demande d'information",
         "Réclamation",
       ],
     },
     {
       title: "Responsive",
       description:
         "Adaptation des interfaces aux différents écrans.",
       details: [
         "Desktop",
         "Tablette",
         "Mobile",
       ],
     },
   ],
 
   architecture: {
     title:
       "Architecture WordPress",
 
     description:
       "Contrairement aux autres projets du portfolio, Cogessur repose sur une architecture CMS WordPress traditionnelle dans laquelle présentation, administration du contenu et backend sont intégrés au même environnement.",
 
     layers: [
       "WordPress",
       "PHP",
       "Templates HTML",
       "CSS / JavaScript",
       "Contenus administrables",
     ],
   },
 
   security: [
     "Site servi via HTTPS.",
     "Administration séparée de la consultation publique grâce au fonctionnement WordPress.",
   ],
 
   seo: [
     "Organisation éditoriale des pages et contenus.",
     "Structure HTML adaptée au site vitrine.",
     "Responsive design.",
     "Google Analytics pour le suivi du trafic.",
     "Pages dédiées aux différentes offres d'assurance.",
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
 };
 
 
 /* ============================================================
    EXPORT
    ============================================================ */
 
 export const projects:
   readonly PortfolioProject[] = [
     tybeau,
     tybeauPro,
     myrendev,
     spectral,
     cogessur,
   ];
 
 
 export function getProjectBySlug(
   slug: string,
 ): PortfolioProject | undefined {
   return projects.find(
     (project) =>
       project.slug === slug,
   );
 }