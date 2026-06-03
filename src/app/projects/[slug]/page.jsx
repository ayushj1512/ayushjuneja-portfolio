import { ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import PageShell from "@/components/layout/PageShell";
import { projects } from "@/data/projects";
import { generatePageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return generatePageMetadata({ title: "Project not found", path: `/projects/${params.slug}` });
  return generatePageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    keywords: project.tags
  });
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <PageShell eyebrow={project.type} title={project.title} description={project.description}>
      <Container className="grid gap-10 py-16 lg:grid-cols-[1fr_0.45fr]">
        <div className="grid gap-6">
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Overview</h2>
            <p className="mt-4 leading-7 text-zinc-400">{project.summary}</p>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Problem</h2>
            <p className="mt-4 leading-7 text-zinc-400">{project.problem}</p>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Solution</h2>
            <p className="mt-4 leading-7 text-zinc-400">{project.solution}</p>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Screenshots</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {project.screenshots?.map((shot) => (
                <div key={shot} className="flex aspect-[4/3] items-end rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-zinc-300">
                  {shot}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <aside className="grid gap-6 self-start">
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Project Details</h2>
            <p className="mt-4 text-sm text-zinc-400">{project.role}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              <Button href={project.liveUrl} variant="primary">
                <ExternalLink size={16} /> Live project
              </Button>
              <Button href={project.githubUrl} variant="secondary">
                <Github size={16} /> Source code
              </Button>
            </div>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Features</h2>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
              {project.features?.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Impact</h2>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
              {project.impact?.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlassCard>
        </aside>
      </Container>
    </PageShell>
  );
}
