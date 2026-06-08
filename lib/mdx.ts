import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, BlogPost } from "@/types";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function getProjects(): Promise<Project[]> {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  const files = fs.readdirSync(PROJECTS_DIR);
  
  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(PROJECTS_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      
      return {
        slug,
        title: data.title || "",
        shortDescription: data.shortDescription || "",
        fullDescription: data.fullDescription || "",
        category: data.category || "Data Science",
        techStack: data.techStack || [],
        featured: !!data.featured,
        githubUrl: data.githubUrl || undefined,
        demoUrl: data.demoUrl || undefined,
        imageUrl: data.imageUrl || undefined,
        problemStatement: data.problemStatement || "",
        solution: data.solution || "",
        architectureDescription: data.architectureDescription || undefined,
        keyFeatures: data.keyFeatures || [],
        challenges: data.challenges || [],
        results: data.results || [],
        lessonsLearned: data.lessonsLearned || [],
        galleryImages: data.galleryImages || undefined,
      } as Project;
    });

  return projects;
}

export async function getProjectBySlug(slug: string): Promise<(Project & { content: string }) | undefined> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title || "",
    shortDescription: data.shortDescription || "",
    fullDescription: data.fullDescription || "",
    category: data.category || "Data Science",
    techStack: data.techStack || [],
    featured: !!data.featured,
    githubUrl: data.githubUrl || undefined,
    demoUrl: data.demoUrl || undefined,
    imageUrl: data.imageUrl || undefined,
    problemStatement: data.problemStatement || "",
    solution: data.solution || "",
    architectureDescription: data.architectureDescription || undefined,
    keyFeatures: data.keyFeatures || [],
    challenges: data.challenges || [],
    results: data.results || [],
    lessonsLearned: data.lessonsLearned || [],
    galleryImages: data.galleryImages || undefined,
    content,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR);
  
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      
      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        content,
        publishedAt: data.publishedAt || "",
        updatedAt: data.updatedAt || undefined,
        tags: data.tags || [],
        category: data.category || "",
        readingTime: Number(data.readingTime) || 5,
        featured: !!data.featured,
      } as BlogPost;
    });

  // Sort by publish date descending
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    content,
    publishedAt: data.publishedAt || "",
    updatedAt: data.updatedAt || undefined,
    tags: data.tags || [],
    category: data.category || "",
    readingTime: Number(data.readingTime) || 5,
    featured: !!data.featured,
  };
}
