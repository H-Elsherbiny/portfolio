import Link from "next/link";
import type { BlogPost } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col group h-full">
      {/* Category & Reading Time */}
      <div className="flex items-center justify-between mb-4">
        <Badge variant="accent">{post.category}</Badge>
        <span className="text-xs text-text-tertiary">
          {post.readingTime} min read
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg text-text-primary group-hover:text-accent transition-colors">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-text-secondary mt-3 flex-1">{post.excerpt}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {post.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="default">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <span className="text-xs text-text-tertiary">
          {formatDate(post.publishedAt)}
        </span>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1.5"
        >
          Read More
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Card>
  );
}
