// ============================================================
// Portfolio TypeScript Types
// ============================================================

// --- Navigation ---

export interface NavItem {
  label: string;
  href: string;
}

// --- Social Links ---

export interface SocialLink {
  platform: "github" | "linkedin" | "email" | "twitter" | "website";
  url: string;
  label: string;
}

// --- Projects ---

export const projectCategories = [
  "All",
  "AI Agents & LLMs",
  "NLP & Speech AI",
  "Computer Vision",
  "Robotics",
  "Data Science",
] as const;

export type ProjectCategory =
  | "AI Agents & LLMs"
  | "NLP & Speech AI"
  | "Computer Vision"
  | "Robotics"
  | "Data Science";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;

  // Detail page sections
  problemStatement: string;
  solution: string;
  architectureDescription?: string;
  keyFeatures: string[];
  challenges: string[];
  results: string[];
  lessonsLearned: string[];
  galleryImages?: string[];
}

// --- Skills ---

export interface SkillCategory {
  name: string;
  icon: string; // emoji or icon identifier
  skills: string[];
}

// --- Experience ---

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  techStack?: string[];
}

// --- Education ---

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

// --- Blog ---

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML content
  publishedAt: string; // ISO date string
  updatedAt?: string;
  tags: string[];
  category: string;
  readingTime: number; // in minutes
  featured?: boolean;
}

// --- Contact ---

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// --- Site Config ---

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  keywords: string[];
}
