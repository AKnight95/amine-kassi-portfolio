import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";
import Projects from "@/components/Projects";
import TechnologyCloud from "@/components/TechnologyCloud";

export default function HomePage() {
  return (
    <>
      <IntroLoader />

      <div className="portfolio-background" />

      <Header />

      <main>
      <Hero />
      <TechnologyCloud />
      <Projects />
      </main>
    </>
  );
}