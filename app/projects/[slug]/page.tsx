import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(slug);

  return (
    <div className="section-container section-spacing">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-tertiary mb-8">
        <Link href="/" className="hover:text-text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/projects"
          className="hover:text-text-primary transition-colors"
        >
          Projects
        </Link>
        <span>/</span>
        <span className="text-text-secondary">{project.title}</span>
      </nav>

      {/* Hero */}
      <div className="mb-12">
        <Badge variant="accent" className="mb-4">
          {project.category}
        </Badge>
        <h1 className="text-text-primary">{project.title}</h1>
        <p className="text-lg text-text-secondary mt-4 max-w-3xl">
          {project.fullDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-8">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="md"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Source
            </Button>
          )}
          {project.demoUrl && (
            <Button href={project.demoUrl} variant="primary" size="md">
              Live Demo
            </Button>
          )}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Problem Statement */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Problem Statement
            </h2>
            <p className="text-text-secondary">{project.problemStatement}</p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Solution
            </h2>
            <p className="text-text-secondary">{project.solution}</p>
          </section>

          {/* Architecture Placeholder */}
          {project.architectureDescription && (
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Architecture
              </h2>
              <p className="text-text-secondary">
                {project.architectureDescription}
              </p>
            </section>
          )}

          {/* Key Features */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-text-secondary"
                >
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Challenges
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-text-secondary"
                >
                  <span className="text-warning mt-0.5 shrink-0">⚡</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Results & Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((result, i) => (
                <Card key={i} padding="sm" hover={false}>
                  <div className="flex gap-3">
                    <span className="text-success mt-0.5 shrink-0">✓</span>
                    <p className="text-sm text-text-secondary">{result}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Lessons Learned */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Lessons Learned
            </h2>
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-text-secondary"
                >
                  <span className="text-accent mt-0.5 shrink-0">💡</span>
                  {lesson}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technologies */}
          <Card hover={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Gallery Placeholder */}
          <Card hover={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Gallery
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-video rounded-lg bg-bg-secondary border border-border flex items-center justify-center">
                <span className="text-xs text-text-tertiary">Screenshot 1</span>
              </div>
              <div className="aspect-video rounded-lg bg-bg-secondary border border-border flex items-center justify-center">
                <span className="text-xs text-text-tertiary">Screenshot 2</span>
              </div>
            </div>
          </Card>

          {/* Links */}
          <Card hover={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Links
            </h3>
            <div className="flex flex-col gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="mt-16 pt-12 border-t border-border">
          <h2 className="text-xl font-semibold text-text-primary mb-6">
            Related Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rp) => (
              <Card key={rp.slug} className="group">
                <Badge variant="accent" className="w-fit mb-3">
                  {rp.category}
                </Badge>
                <h3 className="text-lg text-text-primary group-hover:text-accent transition-colors">
                  <Link href={`/projects/${rp.slug}`}>{rp.title}</Link>
                </h3>
                <p className="text-sm text-text-secondary mt-2">
                  {rp.shortDescription}
                </p>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
