import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CTASection />
    </>
  );
}
