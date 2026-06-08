interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignment}`}>
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-muted text-accent border border-accent/20 uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
