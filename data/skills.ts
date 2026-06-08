import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    name: "AI & LLMs",
    icon: "🧠",
    skills: [
      "OpenAI",
      "LangChain",
      "LangGraph",
      "RAG",
      "Agentic AI",
      "Prompt Engineering",
    ],
  },
  {
    name: "Machine Learning",
    icon: "📊",
    skills: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch"],
  },
  {
    name: "NLP & Speech",
    icon: "💬",
    skills: ["Transformers", "Whisper", "Hugging Face"],
  },
  {
    name: "Computer Vision",
    icon: "👁️",
    skills: ["OpenCV", "CNNs", "YOLO"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Docker", "Git", "Linux"],
  },
];
