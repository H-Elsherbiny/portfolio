import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  const paddings = {
    none: "",
    sm: "p-5",
    md: "p-8",
    lg: "p-10",
  };

  return (
    <div
      className={cn(
        "glass-card",
        hover && "hover:border-border-hover hover:bg-bg-card-hover",
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
