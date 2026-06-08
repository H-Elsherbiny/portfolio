import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Resumes",
  description:
    "Download Hossam Elsherbiny's targeted resumes tailored for AI Engineering, Machine Learning, and Data Science roles.",
};

const resumesList = [
  {
    role: "AI & LLM Engineer",
    description: "Tailored for roles focusing on Generative AI, Large Language Models (LLMs), RAG systems, and Agentic workflows.",
    skills: ["LLMs", "RAG Systems", "Agentic AI", "LangGraph", "FastAPI", "Python"],
    pdfUrl: "/resumes/hossam-elsherbiny-ai-engineer.pdf",
    filename: "hossam-elsherbiny-ai-engineer.pdf",
  },
  {
    role: "Machine Learning & CV Engineer",
    description: "Tailored for roles focusing on Computer Vision, Deep Learning, Object Detection, PyTorch, and Edge AI deployment.",
    skills: ["Computer Vision", "Deep Learning", "PyTorch", "OpenCV", "TensorFlow", "Edge Deployment"],
    pdfUrl: "/resumes/hossam-elsherbiny-ml-engineer.pdf",
    filename: "hossam-elsherbiny-ml-engineer.pdf",
  },
  {
    role: "Data Scientist",
    description: "Tailored for roles focusing on statistical modeling, predictive analytics, data analysis, and classic machine learning.",
    skills: ["Statistical Modeling", "Machine Learning", "SQL", "Pandas", "Scikit-Learn", "Data Viz"],
    pdfUrl: "/resumes/hossam-elsherbiny-data-scientist.pdf",
    filename: "hossam-elsherbiny-data-scientist.pdf",
  },
];

export default function ResumesPage() {
  return (
    <div className="section-container section-spacing">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-muted text-accent border border-accent/20 uppercase tracking-wider">
          Resumes
        </span>

        <h1 className="text-text-primary">Targeted Resumes</h1>

        <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
          Please choose and download the resume version that best aligns with the specific role or expertise you are seeking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resumesList.map((resume) => (
          <Card key={resume.role} hover={true} className="flex flex-col h-full justify-between">
            <div className="space-y-4">
              {/* Document icon */}
              <div className="w-12 h-12 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {resume.role}
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {resume.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {resume.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-bg-secondary text-text-secondary border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border space-y-3">
              <Button
                href={resume.pdfUrl}
                variant="primary"
                className="w-full justify-center"
              >
                <svg
                  width="14"
                  height="14"
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
              <p className="text-[10px] text-center text-text-tertiary">
                Filename: <code className="bg-bg-secondary px-1 py-0.5 rounded">{resume.filename}</code>
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="max-w-xl mx-auto mt-16 text-center text-xs text-text-tertiary bg-bg-secondary/50 p-4 rounded-xl border border-border">
        💡 Note: Please place your customized PDF files in your project's{" "}
        <code className="bg-bg-secondary px-1.5 py-0.5 rounded text-accent">public/resumes/</code> folder with the names listed above to make them downloadable.
      </div>
    </div>
  );
}
