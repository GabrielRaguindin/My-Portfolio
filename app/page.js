import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducSection from "@/components/EducSection";
import ProjectSection from "@/components/Projects/ProjectSection";

export default function Home() {
  return (
    <main className="mx-auto px-4 max-w-5xl select-none font-poppins">
      <HeroSection />
      <AboutSection />
      <EducSection />
      <ProjectSection />
    </main>
  );
}
