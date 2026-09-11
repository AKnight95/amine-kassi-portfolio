// src/app/contact/page.tsx

import type { Metadata } from "next";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Mail,
  MapPin,
  Users,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Reveal from "@/components/motion/Reveal";


export const metadata: Metadata = {
  title:
    "Contact — Amine Kassi",

  description:
    "Contacter Amine Kassi, développeur Full-Stack TypeScript, React, Next.js et Node.js basé en Île-de-France.",
};


const email =
  "amine.k4595@gmail.com";

const github =
  "https://github.com/AKnight95";


export default function ContactPage() {
  return (
    <>
      <Header />

      <main
        id="top"
        className="contact-page"
      >
        {/* =====================================================
            DÉCOR
        ====================================================== */}

        <div
          aria-hidden="true"
          className="contact-page-grid"
        />

        <div
          aria-hidden="true"
          className="contact-page-glow"
        />


        <div className="site-container contact-page-layout">
          {/* ===================================================
              PRÉSENTATION
          ==================================================== */}

          <Reveal>
            <section className="contact-page-copy">
              <p className="section-kicker">
                Contact
              </p>

              <h1>
                Construisons quelque chose de
                <span>
                  {" "}
                  solide.
                </span>
              </h1>

              <p className="contact-page-intro">
                Je recherche principalement un poste
                de développeur Full-Stack dans une
                équipe où je peux participer
                réellement au produit, continuer à
                progresser et travailler dans un bon
                environnement technique et humain.
              </p>


              <div className="contact-looking-for">
                <div>
                  <BriefcaseBusiness
                    aria-hidden="true"
                    size={20}
                  />

                  <span>
                    <small>
                      Recherche
                    </small>

                    <strong>
                      CDI Full-Stack
                    </strong>
                  </span>
                </div>


                <div>
                  <MapPin
                    aria-hidden="true"
                    size={20}
                  />

                  <span>
                    <small>
                      Localisation
                    </small>

                    <strong>
                      Paris / Île-de-France
                    </strong>
                  </span>
                </div>


                <div>
                  <Users
                    aria-hidden="true"
                    size={20}
                  />

                  <span>
                    <small>
                      Environnement
                    </small>

                    <strong>
                      Équipe produit / tech
                    </strong>
                  </span>
                </div>
              </div>
            </section>
          </Reveal>


          {/* ===================================================
              CONTACT DIRECT
          ==================================================== */}

          <Reveal
            y={22}
            delay={0.08}
          >
            <section className="contact-card">
              <div className="contact-card-header">
                <span>
                  CONTACT_DIRECT
                </span>

                <div>
                  <i />

                  Disponible
                </div>
              </div>


              {/* E-mail */}
              <a
                href={`mailto:${email}?subject=Contact%20depuis%20votre%20portfolio`}
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <Mail
                    aria-hidden="true"
                    size={20}
                  />
                </div>

                <div>
                  <span>
                    E-mail
                  </span>

                  <strong>
                    {email}
                  </strong>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  size={18}
                />
              </a>


              {/* GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <FaGithub
                    aria-hidden="true"
                    size={20}
                  />
                </div>

                <div>
                  <span>
                    GitHub
                  </span>

                  <strong>
                    AKnight95
                  </strong>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  size={18}
                />
              </a>


              {/* CV */}
              <a
                href="/amine-kassi-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="contact-method-icon">
                  <FileText
                    aria-hidden="true"
                    size={20}
                  />
                </div>

                <div>
                  <span>
                    CV
                  </span>

                  <strong>
                    Consulter le PDF
                  </strong>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  size={18}
                />
              </a>


              <div className="contact-card-footer">
                <span>
                  Louvres (95)
                </span>

                <i />

                <span>
                  Paris / Hybride
                </span>

                <i />

                <span>
                  Permis B
                </span>
              </div>
            </section>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}