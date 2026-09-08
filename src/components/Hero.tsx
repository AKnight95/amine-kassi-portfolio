import {
    ArrowDown,
    ArrowRight,
    Code2,
    Database,
    Layers3,
    ServerCog,
    Smartphone,
  } from "lucide-react";
  
  import Reveal from "@/components/motion/Reveal";
  import { siteConfig } from "@/config/site";
  
  const stack = [
    {
      icon: Layers3,
      label: "Frontend",
      value: "React · Next.js · TypeScript",
    },
    {
      icon: Smartphone,
      label: "Mobile",
      value: "React Native · Expo",
    },
    {
      icon: ServerCog,
      label: "Backend",
      value: "Node.js · NestJS · REST",
    },
    {
      icon: Database,
      label: "Data",
      value: "PostgreSQL · Prisma",
    },
    {
      icon: Code2,
      label: "Cloud & delivery",
      value: "AWS · Vercel · CI/CD",
    },
  ] as const;
  
  export default function Hero() {
    return (
      <section
        id="top"
        className="site-container relative flex min-h-[calc(100vh-74px)] items-center py-20"
      >
        {/* Halo décoratif derrière le hero */}
        <div className="pointer-events-none absolute left-[-14%] top-[20%] -z-10 h-[420px] w-[420px] rounded-full bg-[#00e6e6]/[0.035] blur-[100px]" />
  
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="status-dot" />
  
                <p className="section-kicker">
                  Disponible pour un CDI · Paris / Hybride
                </p>
              </div>
            </Reveal>
  
            <Reveal delay={0.08}>
              <p className="mt-8 font-display text-sm font-medium uppercase tracking-[0.22em] text-white/38">
                Amine Kassi
              </p>
            </Reveal>
  
            <Reveal delay={0.14}>
              <h1 className="neon-title mt-4 max-w-4xl font-display text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
                Full-Stack
                <br />
                <span className="text-accent">
                  Developer
                </span>
              </h1>
            </Reveal>
  
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                Je conçois et mets en production des
                applications{" "}
                <strong className="font-medium text-white/85">
                  web et mobiles
                </strong>
                , du frontend à l&apos;infrastructure.
              </p>
  
              <p className="mt-2 max-w-2xl text-base leading-8 text-white/42">
                TypeScript, React, Next.js, React Native,
                Node.js, NestJS, PostgreSQL et AWS.
              </p>
            </Reveal>
  
            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="neon-button neon-button-primary"
                >
                  Voir mes projets
                  <ArrowRight size={16} />
                </a>
  
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="neon-button"
                >
                  Me contacter
                </a>
              </div>
            </Reveal>
  
            <Reveal delay={0.34}>
              <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.1em] text-white/30">
                <span>Louvres (95)</span>
  
                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
  
                <span>Paris / Île-de-France</span>
  
                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
  
                <span>Web · Mobile · Cloud</span>
              </div>
            </Reveal>
          </div>
  
          <Reveal
            delay={0.22}
            y={18}
            className="relative"
          >
            <aside className="glass-panel p-6 md:p-7">
              <div className="pointer-events-none absolute right-6 top-6 neon-diamond" />
  
              <div className="mb-7">
                <p className="section-kicker">
                  Stack principale
                </p>
  
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  Du produit à la production
                  <span className="text-accent">.</span>
                </h2>
              </div>
  
              <div className="space-y-1">
                {stack.map((item) => {
                  const Icon = item.icon;
  
                  return (
                    <div
                      key={item.label}
                      className="group flex items-center gap-4 border-b border-white/[0.06] py-4 last:border-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00e6e6]/15 bg-[#00e6e6]/[0.035] text-[#00e6e6]/70 transition group-hover:border-[#00e6e6]/35 group-hover:text-[#00e6e6]">
                        <Icon size={18} />
                      </div>
  
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.14em] text-white/28">
                          {item.label}
                        </p>
  
                        <p className="mt-1 text-sm font-medium text-white/70">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
  
              <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-xs leading-6 text-white/35">
                  Applications web & mobile · APIs ·
                  paiements · automatisations · cloud ·
                  déploiement
                </p>
              </div>
            </aside>
  
            {/* Glow violet discret */}
            <div className="pointer-events-none absolute -bottom-12 -right-10 -z-10 h-48 w-48 rounded-full bg-[#9b5cff]/10 blur-[70px]" />
          </Reveal>
        </div>
  
        <a
          href="#projects"
          aria-label="Descendre vers les projets"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/20 transition hover:text-[#00e6e6]/70 lg:flex"
        >
          <span className="font-display text-[0.6rem] uppercase tracking-[0.2em]">
            Explorer
          </span>
  
          <ArrowDown size={16} />
        </a>
      </section>
    );
  }