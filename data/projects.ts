import type { Project } from "@/types";
import {
  getProjects as fetchProjects,
  getProjectBySlug as fetchProjectBySlug,
} from "@/lib/mdx";

export { projectCategories } from "@/types";

export async function getProjects(): Promise<Project[]> {
  return fetchProjects();
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await fetchProjects();
  return allProjects.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<(Project & { content: string }) | undefined> {
  return fetchProjectBySlug(slug);
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const allProjects = await fetchProjects();
  if (category === "All") return allProjects;
  return allProjects.filter((p) => p.category === category);
}

export async function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Promise<Project[]> {
  const allProjects = await fetchProjects();
  const current = allProjects.find((p) => p.slug === currentSlug);
  if (!current) return [];
  return allProjects
    .filter(
      (p) => p.slug !== currentSlug && p.category === current.category
    )
    .slice(0, limit);
}
