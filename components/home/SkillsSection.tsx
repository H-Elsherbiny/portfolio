import { skills } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function SkillsSection() {
  return (
    <section className="section-spacing bg-bg-secondary/30">
      <div className="section-container">
        <SectionHeader
          badge="Expertise"
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build intelligent systems and solve complex problems."
        />

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
    </section>
  );
}
