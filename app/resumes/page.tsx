import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Resumes",
  description:
    "Download Hossam Elsherbiny's targeted resumes tailored for AI Engineering, Machine Learning, and Data Science roles.",
};

const PREDEFINED_ROLES: Record<string, { description: string; skills: string[] }> = {
  "AI & LLM Engineer": {
    description: "Tailored for roles focusing on Generative AI, Large Language Models (LLMs), RAG systems, and Agentic workflows.",
    skills: ["LLMs", "RAG Systems", "Agentic AI", "LangGraph", "FastAPI", "Python"],
  },
  "Machine Learning & CV Engineer": {
    description: "Tailored for roles focusing on Computer Vision, Deep Learning, Object Detection, PyTorch, and Edge AI deployment.",
    skills: ["Computer Vision", "Deep Learning", "PyTorch", "OpenCV", "TensorFlow", "Edge Deployment"],
  },
  "Data Scientist": {
    description: "Tailored for roles focusing on statistical modeling, predictive analytics, data analysis, and classic machine learning.",
    skills: ["Statistical Modeling", "Machine Learning", "SQL", "Pandas", "Scikit-Learn", "Data Viz"],
  },
};

function parseResumeFile(filename: string) {
  // Try to parse "Hossam_Elsherbiny_{Job_Title}_Resume.pdf"
  let role = "";
  const match = filename.match(/^Hossam_Elsherbiny_(.+)_Resume\.pdf$/i);
  if (match) {
    role = match[1].replace(/_/g, " ");
  } else {
    // Fallback: e.g. "software-engineer.pdf"
    role = filename.replace(/\.pdf$/i, "").replace(/[_-]/g, " ");
  }
  
  // Normalization maps
  role = role.replace(/\bAI LLM\b/i, "AI & LLM");
  role = role.replace(/\bML CV\b/i, "Machine Learning & CV");
  role = role.replace(/\bML\b/i, "Machine Learning");
  role = role.replace(/\bCV\b/i, "Computer Vision");
  
  // Title Case
  role = role
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
    
  return role;
}

function getRoleDetails(role: string) {
  const matchedKey = Object.keys(PREDEFINED_ROLES).find(
    (key) =>
      key.toLowerCase() === role.toLowerCase() ||
      role.toLowerCase().includes(key.toLowerCase()) ||
      key.toLowerCase().includes(role.toLowerCase())
  );
  
  if (matchedKey) {
    return PREDEFINED_ROLES[matchedKey];
  }
  
  return {
    description: `Tailored resume focusing on ${role} experience, core technical capabilities, and projects.`,
    skills: role
      .split("&")
      .flatMap((s) => s.split(" "))
      .map((s) => s.trim())
      .filter((s) => s.length > 2)
      .slice(0, 6),
  };
}

export default function ResumesPage() {
  const resumesDir = path.join(process.cwd(), "public", "resumes");
  let resumesList: Array<{
    role: string;
    description: string;
    skills: string[];
    pdfUrl: string;
    filename: string;
  }> = [];

  try {
    if (fs.existsSync(resumesDir)) {
      const files = fs.readdirSync(resumesDir).filter((file) => file.toLowerCase().endsWith(".pdf"));
      
      resumesList = files.map((file) => {
        const role = parseResumeFile(file);
        const details = getRoleDetails(role);
        return {
          role,
          description: details.description,
          skills: details.skills,
          pdfUrl: `/resumes/${file}`,
          filename: file,
        };
      });
    } else {
      fs.mkdirSync(resumesDir, { recursive: true });
    }
  } catch (error) {
    console.error("Error reading resumes directory:", error);
  }

  if (resumesList.length === 0) {
    return (
      <div className="section-container section-spacing">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-muted text-accent border border-accent/20 uppercase tracking-wider">
            Resumes
          </span>
          <h1 className="text-text-primary">Resumes</h1>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            Please check back soon or contact me directly to request a copy of my resume.
          </p>
        </div>
        <div className="max-w-md mx-auto glass-card p-8 text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center mx-auto">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Request Resume</h3>
            <p className="text-sm text-text-secondary mt-2">
              No customized resumes are currently published. Feel free to reach out directly.
            </p>
          </div>
          <Button href="mailto:hossam.elsherbiny95@gmail.com" variant="primary" className="w-full justify-center">
            Email Me
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-container section-spacing">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-muted text-accent border border-accent/20 uppercase tracking-wider">
          Resumes
        </span>

        <h1 className="text-text-primary">Resumes</h1>

        <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
          Please choose and download the resume version that best aligns with the specific role or expertise you are seeking.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {resumesList.map((resume) => (
          <Card key={resume.role} hover={true} className="flex flex-col justify-between w-full md:w-[360px] flex-shrink-0">
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
                Filename: <code className="bg-bg-secondary px-1.5 py-0.5 rounded break-all inline-block">{resume.filename}</code>
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
