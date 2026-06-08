import Button from "@/components/ui/Button";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Hero() {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="flex flex-col items-center text-center py-20 md:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-muted border border-accent/20 text-accent text-xs font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up opacity-0 stagger-1">
          Hossam{" "}
          <span className="gradient-text">Elsherbiny</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-text-secondary mt-4 font-medium animate-fade-in-up opacity-0 stagger-2">
          AI Engineer & Data Scientist
        </p>

        {/* Description */}
        <p className="max-w-2xl text-text-secondary mt-6 text-lg leading-relaxed animate-fade-in-up opacity-0 stagger-3">
          Building intelligent systems powered by AI, LLMs, Computer Vision,
          and Agentic Workflows. Specializing in turning complex AI research
          into production-ready applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-fade-in-up opacity-0 stagger-4">
          <Button href="/projects" variant="primary" size="lg">
            View Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
          <Button href="/resume" variant="secondary" size="lg">
            Download Resume
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="mt-10 animate-fade-in-up opacity-0 stagger-5">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
