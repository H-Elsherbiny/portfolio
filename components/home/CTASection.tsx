import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-10 md:p-16 text-center">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
          </div>

          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-muted text-accent border border-accent/20 uppercase tracking-wider">
            Let&apos;s Work Together
          </span>

          <h2 className="text-text-primary max-w-2xl mx-auto">
            Looking for an AI Engineer to build your next intelligent system?
          </h2>

          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-lg">
            I&apos;m open to full-time roles, contract work, and collaborative
            projects in AI, GenAI, LLMs, and Data Science.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Get In Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
            <Button href="/resume" variant="secondary" size="lg">
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
