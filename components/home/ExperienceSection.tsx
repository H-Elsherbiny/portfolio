import { experiences } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/shared/Timeline";

export default function ExperienceSection() {
  const timelineItems = experiences.map((exp) => ({
    title: exp.title,
    subtitle: exp.company,
    location: exp.location,
    startDate: exp.startDate,
    endDate: exp.endDate,
    description: exp.description,
    techStack: exp.techStack,
  }));

  return (
    <section className="section-spacing">
      <div className="section-container">
        <SectionHeader
          badge="Career"
          title="Work Experience"
          subtitle="My professional journey in AI and data science."
        />
        <div className="max-w-3xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
}
