import { education } from "@/data/education";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/shared/Timeline";

export default function EducationSection() {
  const timelineItems = education.map((edu) => ({
    title: edu.degree,
    subtitle: edu.institution,
    location: edu.location,
    startDate: edu.startDate,
    endDate: edu.endDate,
    description: edu.description,
    achievements: edu.achievements,
  }));

  return (
    <section className="section-spacing bg-bg-secondary/30">
      <div className="section-container">
        <SectionHeader
          badge="Education"
          title="Academic Background"
          subtitle="My educational foundation in computer science and AI."
        />
        <div className="max-w-3xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
}
