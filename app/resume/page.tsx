import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download Hossam Elsherbiny's resume — AI Engineer and Data Scientist with expertise in LLMs, GenAI, RAG, Computer Vision, and NLP.",
};

export default function ResumePage() {
  return (
    <div className="section-container section-spacing">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-muted text-accent border border-accent/20 uppercase tracking-wider">
          Resume
        </span>

        <h1 className="text-text-primary">My Resume</h1>

        <p className="text-text-secondary mt-4 text-lg">
          Download my resume to learn more about my experience, skills, and qualifications.
        </p>

        {/* Resume placeholder */}
        <div className="mt-10 glass-card p-12 md:p-16">
          <div className="flex flex-col items-center gap-6">
            {/* Document icon */}
            <div className="w-20 h-20 rounded-2xl bg-accent-muted border border-accent/20 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>

            <div>
              <h2 className="text-xl text-text-primary">
                Hossam Elsherbiny
              </h2>
              <p className="text-text-secondary mt-1">
                AI Engineer & Data Scientist
              </p>
            </div>

            {/* Download buttons — placeholder links for now */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                href="/resume.pdf"
                variant="primary"
                size="lg"
              >
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </Button>
            </div>

            <p className="text-xs text-text-tertiary mt-2">
              Place your resume PDF file at{" "}
              <code className="px-1.5 py-0.5 rounded bg-bg-secondary text-accent text-xs">
                public/resume.pdf
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
