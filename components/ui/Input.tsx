import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  id,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-text-primary"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full px-4 py-2.5 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm placeholder:text-text-tertiary",
          "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent",
          "transition-all duration-200",
          error && "border-error focus:ring-error/50 focus:border-error",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-error mt-0.5">{error}</p>
      )}
    </div>
  );
}

// Textarea variant
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-text-primary"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "w-full px-4 py-2.5 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm placeholder:text-text-tertiary",
          "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent",
          "transition-all duration-200 resize-y min-h-[120px]",
          error && "border-error focus:ring-error/50 focus:border-error",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-error mt-0.5">{error}</p>
      )}
    </div>
  );
}
