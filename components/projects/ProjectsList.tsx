"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/types";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectCard from "@/components/projects/ProjectCard";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let result = [...projects];

    // Filter by category
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    // Filter by search
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    switch (sort) {
      case "title-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [projects, search, category, sort]);

  return (
    <>
      <ProjectFilter
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSort}
        activeCategory={category}
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-text-tertiary text-lg">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("All");
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
