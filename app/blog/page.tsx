import type { Metadata } from "next";
import { blogPosts, getAllCategories, getAllTags } from "@/data/blog-posts";
import SectionHeader from "@/components/ui/SectionHeader";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on AI Engineering, LLMs, Agentic AI, NLP, Computer Vision, and Data Science by Hossam Elsherbiny.",
};

export default function BlogPage() {
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="section-container section-spacing">
      <SectionHeader
        badge="Blog"
        title="Technical Articles"
        subtitle="Insights and tutorials on AI engineering, LLMs, and data science."
      />
      <BlogList posts={blogPosts} categories={categories} tags={tags} />
    </div>
  );
}
