import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default:
      "bg-bg-secondary text-text-secondary border border-border",
    accent:
      "bg-accent-muted text-accent border border-accent/20",
    outline:
      "border border-border text-text-secondary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
