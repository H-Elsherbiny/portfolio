"use client";

import { useState } from "react";
import { projectCategories } from "@/types";

interface ProjectFilterProps {
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  activeCategory: string;
}

export default function ProjectFilter({
  onSearchChange,
  onCategoryChange,
  onSortChange,
  activeCategory,
}: ProjectFilterProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <div className="flex flex-col gap-8 mb-12">
      {/* Search & Sort Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
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
            placeholder="Search projects..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
          />
        </div>

        {/* Sort */}
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2.5 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all cursor-pointer"
        >
          <option value="featured">Featured First</option>
          <option value="title-asc">Title A-Z</option>
          <option value="title-desc">Title Z-A</option>
        </select>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2 text-sm font-medium rounded-full border transition-all cursor-pointer ${
              activeCategory === category
                ? "bg-accent text-white border-accent"
                : "bg-bg-secondary text-text-secondary border-border hover:border-border-hover hover:text-text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
