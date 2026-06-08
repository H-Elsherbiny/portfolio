import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Hossam Elsherbiny",
  title: "Hossam Elsherbiny — AI Engineer & Data Scientist",
  description:
    "AI Engineer and Data Scientist specializing in LLMs, Generative AI, RAG Systems, Agentic AI, Computer Vision, and NLP. Building intelligent systems that solve real-world problems.",
  // Vercel default domain — update if you add a custom domain later
  url: "https://portfolio-h-elsherbiny.vercel.app",
  ogImage: "/og-image.png",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/H-Elsherbiny",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/h-elsherbiny",
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: "mailto:hossam.elsherbiny95@gmail.com",
      label: "Email",
    },
  ],
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "NLP Engineer",
    "Applied AI Engineer",
    "Hossam Elsherbiny",
    "RAG Systems",
    "Agentic AI",
    "LangGraph",
    "Computer Vision",
    "Deep Learning",
    "FastAPI",
  ],
};
