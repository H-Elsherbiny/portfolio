import type { Experience } from "@/types";
import Badge from "@/components/ui/Badge";

interface TimelineProps {
  items: {
    title: string;
    subtitle: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string | string[];
    techStack?: string[];
    achievements?: string[];
  }[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12 md:pl-16">
            {/* Timeline dot */}
            <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-bg-primary" />

            {/* Content */}
            <div className="glass-card p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg text-text-primary font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {item.subtitle}
                    {item.location && (
                      <span className="text-text-tertiary">
                        {" "}
                        · {item.location}
                      </span>
                    )}
                  </p>
                </div>
                <span className="text-xs text-text-tertiary whitespace-nowrap px-2 py-1 rounded-md bg-bg-secondary border border-border">
                  {item.startDate} — {item.endDate}
                </span>
              </div>

              {/* Description */}
              {item.description && (
                <div className="mt-3">
                  {Array.isArray(item.description) ? (
                    <ul className="space-y-1.5">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm text-text-secondary flex gap-2"
                        >
                          <span className="text-accent mt-1 shrink-0">▸</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-text-secondary">
                      {item.description}
                    </p>
                  )}
                </div>
              )}

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {item.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary flex gap-2"
                    >
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack */}
              {item.techStack && item.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.techStack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
