"use client";

import { useState, useMemo } from "react";
import type { BlogPost } from "@/types";
import BlogPostCard from "@/components/blog/BlogPostCard";

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}

export default function BlogList({ posts, categories, tags }: BlogListProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = [...posts];

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedTag) {
      result = result.filter((p) => p.tags.includes(selectedTag));
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, search, selectedCategory, selectedTag]);

  return (
    <>
      {/* Search */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedTag(null);
            }}
            className={`px-4 py-2 text-sm rounded-lg border transition-all cursor-pointer ${
              selectedCategory === "All" && !selectedTag
                ? "bg-accent text-white border-accent"
                : "bg-bg-secondary text-text-secondary border-border hover:border-border-hover hover:text-text-primary"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedTag(null);
              }}
              className={`px-4 py-2 text-sm rounded-lg border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-accent text-white border-accent"
                  : "bg-bg-secondary text-text-secondary border-border hover:border-border-hover hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(selectedTag === tag ? null : tag);
                setSelectedCategory("All");
              }}
              className={`px-2.5 py-1 text-xs rounded-md border transition-all cursor-pointer ${
                selectedTag === tag
                  ? "bg-accent text-white border-accent"
                  : "bg-bg-secondary text-text-tertiary border-border hover:text-text-secondary"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-text-tertiary text-lg">No articles found.</p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
              setSelectedTag(null);
            }}
            className="mt-4 text-accent hover:text-accent-hover transition-colors text-sm cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
