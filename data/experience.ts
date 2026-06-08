import type { Experience } from "@/types";

export const experiences: Experience[] = [
  // Placeholder — replace with your actual experience
  {
    title: "AI Engineer",
    company: "Your Company",
    location: "Cairo, Egypt",
    startDate: "2024-01",
    endDate: "Present",
    description: [
      "Designed and deployed LLM-powered applications using RAG and agentic workflows.",
      "Built production NLP pipelines for text classification and information extraction.",
      "Collaborated with cross-functional teams to deliver AI-driven products.",
    ],
    techStack: ["Python", "LangChain", "FastAPI", "OpenAI", "PostgreSQL"],
  },
  {
    title: "Data Scientist",
    company: "Previous Company",
    location: "Cairo, Egypt",
    startDate: "2022-06",
    endDate: "2023-12",
    description: [
      "Developed machine learning models for predictive analytics.",
      "Performed data analysis and visualization for business insights.",
      "Implemented end-to-end ML pipelines from data collection to deployment.",
    ],
    techStack: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Docker"],
  },
];
