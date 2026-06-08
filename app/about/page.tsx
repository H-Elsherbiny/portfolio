import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/shared/Timeline";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Hossam Elsherbiny — AI Engineer and Data Scientist specializing in LLMs, Generative AI, RAG Systems, Computer Vision, and NLP.",
};

export default function AboutPage() {
  const experienceItems = experiences.map((exp) => ({
    title: exp.title,
    subtitle: exp.company,
    location: exp.location,
    startDate: exp.startDate,
    endDate: exp.endDate,
    description: exp.description,
    techStack: exp.techStack,
  }));

  const educationItems = education.map((edu) => ({
    title: edu.degree,
    subtitle: edu.institution,
    location: edu.location,
    startDate: edu.startDate,
    endDate: edu.endDate,
    description: edu.description,
    achievements: edu.achievements,
  }));

  return (
    <div className="section-container section-spacing">
      <SectionHeader
        badge="About Me"
        title="Hossam Elsherbiny"
        subtitle="AI Engineer & Data Scientist"
      />

      {/* Bio */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="glass-card p-8 md:p-10">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Professional Bio
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I&apos;m an AI Engineer and Data Scientist passionate about building
              intelligent systems that solve real-world problems. My expertise
              spans across Large Language Models, Generative AI, RAG Systems,
              Agentic AI workflows, Computer Vision, and NLP.
            </p>
            <p>
              I specialize in turning complex AI research into production-ready
              applications. From designing multi-agent systems with LangGraph to
              deploying computer vision pipelines with FastAPI, I focus on building
              reliable, scalable AI solutions.
            </p>
            <p>
              My work covers the full spectrum of AI engineering — from data
              collection and model training to API development and cloud deployment.
              I&apos;m driven by the intersection of cutting-edge AI research and
              practical engineering.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/resume" variant="primary">
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Areas of Expertise */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary text-center mb-8">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <Card key={category.name} padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg text-text-primary">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary text-center mb-8">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <Timeline items={experienceItems} />
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-text-primary text-center mb-8">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <Timeline items={educationItems} />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-text-secondary mb-6 text-lg">
          Interested in working together?
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
          <Button href="/projects" variant="secondary" size="lg">
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
