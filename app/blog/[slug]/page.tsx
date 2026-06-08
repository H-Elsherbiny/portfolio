import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="section-container section-spacing">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-tertiary mb-8">
        <Link href="/" className="hover:text-text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/blog"
          className="hover:text-text-primary transition-colors"
        >
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-secondary">{post.title}</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <Badge variant="accent" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-text-primary">{post.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-text-tertiary">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="default">
                #{tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="border-t border-border pt-8 prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-4">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
