import type { Metadata } from "next";
import { getProjects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectsList from "@/components/projects/ProjectsList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of AI, Machine Learning, NLP, Computer Vision, and Data Science projects. Each project demonstrates real-world problem-solving with modern technologies.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="section-container section-spacing">
      <SectionHeader
        badge="Portfolio"
        title="All Projects"
        subtitle="Explore my work across AI, LLMs, Computer Vision, NLP, Robotics, and Data Science."
      />
      <ProjectsList projects={projects} />
    </div>
  );
}
