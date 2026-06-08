import Button from "@/components/ui/Button";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Hero() {
  return (
    <section className="section-container relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="flex flex-col items-center text-center pt-32 pb-16 md:pt-48 md:pb-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up opacity-0 stagger-1 text-5xl md:text-7xl font-bold tracking-tight py-4 leading-normal">
          Hossam{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Elsherbiny</span>
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
          <Button href="/resumes" variant="secondary" size="lg">
            View Resumes
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
