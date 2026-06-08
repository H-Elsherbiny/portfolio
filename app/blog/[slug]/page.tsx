import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
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
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-like rendering (paragraphs, headings, lists, code)
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent = "";
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="space-y-2 my-4 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-text-secondary flex gap-2">
                <span className="text-accent mt-0.5 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${i}`} className="my-4">
              <code>{codeContent.trim()}</code>
            </pre>
          );
          codeContent = "";
          inCodeBlock = false;
        } else {
          flushList();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent += line + "\n";
        continue;
      }

      if (line.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={`h3-${i}`} className="text-lg font-semibold text-text-primary mt-8 mb-3">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={`h2-${i}`} className="text-xl font-semibold text-text-primary mt-10 mb-4">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("- **")) {
        const match = line.match(/^- \*\*(.+?)\*\*:\s*(.+)$/);
        if (match) {
          currentList.push(`**${match[1]}**: ${match[2]}`);
        } else {
          currentList.push(line.slice(2));
        }
      } else if (line.startsWith("- ")) {
        currentList.push(line.slice(2));
      } else if (line.match(/^\d+\.\s/)) {
        currentList.push(line.replace(/^\d+\.\s/, ""));
      } else if (line.trim() === "") {
        flushList();
      } else {
        flushList();
        // Handle inline bold and code
        const formatted = line
          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary font-semibold">$1</strong>')
          .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-bg-secondary text-accent text-sm">$1</code>');
        elements.push(
          <p
            key={`p-${i}`}
            className="text-text-secondary my-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      }
    }
    flushList();
    return elements;
  };

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
        <div className="border-t border-border pt-8">
          {renderContent(post.content)}
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
