import type { BlogPost } from "@/types";
import {
  getBlogPosts as fetchBlogPosts,
  getBlogPostBySlug as fetchBlogPostBySlug,
} from "@/lib/mdx";

export async function getBlogPosts(): Promise<BlogPost[]> {
  return fetchBlogPosts();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return fetchBlogPostBySlug(slug);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await fetchBlogPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await fetchBlogPosts();
  const categories = new Set<string>();
  posts.forEach((post) => categories.add(post.category));
  return Array.from(categories).sort();
}
