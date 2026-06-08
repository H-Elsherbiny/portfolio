import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
    secondary:
      "bg-bg-secondary text-text-primary border border-border hover:border-border-hover hover:bg-bg-tertiary",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-bg-secondary",
    outline:
      "border border-border text-text-primary hover:border-accent hover:text-accent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
