import About from "common/components/About";
import Contact from "common/components/Contact";
import Experience from "common/components/Experience";
import HeroSection from "common/components/HeroSection";
import Projects from "common/components/Projects";
import SectionDivider from "common/components/SectionDivider";
import Skills from "common/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HeroSection />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
