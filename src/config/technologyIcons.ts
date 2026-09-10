// src/config/technologyIcons.ts

import type { IconType } from "react-icons";

import { FaAws } from "react-icons/fa";

import {
  FiClock,
  FiCode,
  FiCpu,
  FiCreditCard,
  FiImage,
  FiMessageSquare,
  FiServer,
  FiShield,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

import {
  SiAntdesign,
  SiCss,
  SiDocker,
  SiExpo,
  SiGithub,
  SiGithubactions,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiStripe,
  SiSymfony,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";

/**
 * Mapping centralisé entre les technologies / outils du portfolio
 * et les icônes disponibles dans react-icons.
 *
 * Pour les services sans icône fiable dans la version installée,
 * on utilise volontairement une icône générique de Feather Icons.
 */
export const technologyIcons: Record<string, IconType> = {
  // Langages
  HTML5: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,

  // Frontend
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Ant Design": SiAntdesign,

  // Mobile
  "React Native": SiReact,
  Expo: SiExpo,

  // Backend
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Symfony: SiSymfony,

  // Data
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,

  // Cloud / DevOps
  GitHub: SiGithub,
  "GitHub Actions": SiGithubactions,
  Vercel: SiVercel,
  Docker: SiDocker,
  Nginx: SiNginx,
  PM2: FiServer,

  AWS: FaAws,
  "AWS Lightsail": FaAws,
  "AWS S3": FaAws,
  "AWS SES": FaAws,

  // Paiement / intégrations
  Stripe: SiStripe,
  "Stripe Connect": SiStripe,
  "Stripe Terminal": SiStripe,
  "Tap to Pay": FiCreditCard,
  SMSmode: FiMessageSquare,
  "OAuth / Social Login": FiShield,
  "CRON / tâches planifiées": FiClock,

  // Analytics
  "Google Analytics": SiGoogleanalytics,

  // CMS
  WordPress: SiWordpress,

  // Organisation / outils
  Trello: SiTrello,
  Postman: SiPostman,

  // Assistance IA
  ChatGPT: FiMessageSquare,
  Emergent: FiZap,
  Midjourney: FiImage,

  // Sécurité
  "HTTPS / TLS": FiShield,
  "CORS / API": FiShield,
  "JWT / RBAC": FiShield,

  // Autres
  Mobile: FiSmartphone,
  Automatisation: FiCpu,
};

/**
 * Retourne toujours une icône valide.
 *
 * Cela empêche un nouvel outil ajouté dans portfolio.ts
 * de casser le rendu s'il n'a pas encore de mapping dédié.
 */
export function getTechnologyIcon(name: string): IconType {
  return technologyIcons[name] ?? FiCode;
}