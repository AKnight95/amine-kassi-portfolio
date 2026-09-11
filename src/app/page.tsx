// src/app/page.tsx

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechnologyCloud from "@/components/TechnologyCloud";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <TechnologyCloud />

        <Projects />
      </main>

      <Footer />
    </>
  );
}