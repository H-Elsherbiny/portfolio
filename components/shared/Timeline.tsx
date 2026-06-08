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
      <div className="absolute left-4 md:left-[180px] top-0 bottom-0 w-px bg-border" />

      <div className="flex flex-col gap-8 md:gap-12">
        {items.map((item, index) => (
          <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Mobile dot */}
            <div className="md:hidden absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 border-accent bg-bg-primary" />

            {/* Desktop Date Column */}
            <div className="hidden md:block w-[180px] shrink-0 pt-7 pr-8 text-right relative">
              <span className="text-sm font-medium text-text-tertiary">
                {item.startDate} — {item.endDate}
              </span>
              {/* Desktop dot */}
              <div className="absolute right-[-6px] top-8 w-3 h-3 rounded-full border-2 border-accent bg-bg-primary z-10 transition-colors group-hover:bg-accent" />
            </div>

            {/* Content */}
            <div className="flex-1 pl-12 md:pl-0 group">
              <div className="glass-card p-6 md:p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1">
                <div className="flex flex-col gap-2 mb-4">
                  {/* Mobile Date */}
                  <div className="md:hidden">
                    <span className="text-xs text-text-tertiary whitespace-nowrap px-2 py-1 rounded-md bg-bg-secondary border border-border inline-block mb-1">
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl text-text-primary font-semibold group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-base mt-1">
                      {item.subtitle}
                      {item.location && (
                        <span className="text-text-tertiary">
                          {" "}
                          · {item.location}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <div className="mt-4">
                    {Array.isArray(item.description) ? (
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-text-secondary flex gap-3 text-base leading-relaxed"
                          >
                            <span className="text-accent mt-1 shrink-0">▸</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-text-secondary text-base leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}

                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-text-secondary flex gap-3 text-base leading-relaxed"
                      >
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                {item.techStack && item.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/50">
                    {item.techStack.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
