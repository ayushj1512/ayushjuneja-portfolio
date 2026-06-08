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
  if (!project) {
    return generatePageMetadata({
      title: "Project not found",
      path: `/projects/${params.slug}`,
      noIndex: true
    });
  }
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
  const projectLinks = project.links?.length
    ? project.links
    : [
        project.liveUrl ? { label: "Live Project", href: project.liveUrl } : null,
        project.githubUrl ? { label: "Source Code", href: project.githubUrl } : null
      ].filter(Boolean);
  const workflowSteps = project.workflow || [];

  return (
    <PageShell eyebrow={project.type} title={project.title} description={project.description}>
      <Container className="grid gap-10 py-16 lg:grid-cols-[1fr_0.45fr]">
        <div className="grid gap-6">
          {project.liveUrl ? (
            <GlassCard className="overflow-hidden p-0">
              <div className="border-b border-white/10 px-6 py-5">
                <h2 className="font-heading text-xl font-semibold text-white">Live Preview</h2>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Embedded preview of the live project. If the site blocks iframe embedding, open it directly using the live link.
                </p>
              </div>
              <div className="aspect-[16/10] w-full bg-[#0f1113]">
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} live preview`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </GlassCard>
          ) : null}
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
              {projectLinks.map((link, index) => (
                <Button
                  key={link.href}
                  href={link.href}
                  variant={index === 0 ? "primary" : "secondary"}
                >
                  {link.label === "GitHub" || link.label === "Source Code" ? <Github size={16} /> : <ExternalLink size={16} />}
                  {link.label}
                </Button>
              ))}
            </div>
            {project.liveUrl ? (
              <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Live URL</p>
                <a
                  href={project.liveUrl}
                  className="mt-3 block break-all text-sm text-zinc-300 transition hover:text-[var(--accent-secondary)]"
                >
                  {project.liveUrl}
                </a>
              </div>
            ) : null}
            {project.backendUrl ? (
              <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Backend URL</p>
                <a
                  href={project.backendUrl}
                  className="mt-3 block break-all text-sm text-zinc-300 transition hover:text-[var(--accent-secondary)]"
                >
                  {project.backendUrl}
                </a>
              </div>
            ) : null}
            {project.apiHealthUrl ? (
              <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">API Health Check</p>
                <a
                  href={project.apiHealthUrl}
                  className="mt-3 block break-all text-sm text-zinc-300 transition hover:text-[var(--accent-secondary)]"
                >
                  {project.apiHealthUrl}
                </a>
              </div>
            ) : null}
            {project.docsUrl ? (
              <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">API Docs</p>
                <a
                  href={project.docsUrl}
                  className="mt-3 block break-all text-sm text-zinc-300 transition hover:text-[var(--accent-secondary)]"
                >
                  {project.docsUrl}
                </a>
              </div>
            ) : null}
          </GlassCard>
          {workflowSteps.length ? (
            <GlassCard>
              <h2 className="font-heading text-xl font-semibold text-white">System Flow</h2>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
                {workflowSteps.map((step) => (
                  <li key={step}>- {step}</li>
                ))}
              </ul>
            </GlassCard>
          ) : null}
          {project.demoCredentials?.length ? (
            <GlassCard>
              <h2 className="font-heading text-xl font-semibold text-white">Demo Access</h2>
              <div className="mt-4 grid gap-4">
                {project.demoCredentials.map((account) => (
                  <div key={`${account.role}-${account.email}`} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="font-medium text-white">{account.role}</p>
                    <p className="mt-3 break-all text-sm text-zinc-300">{account.email}</p>
                    <p className="mt-1 text-sm text-zinc-400">{account.password}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          ) : null}
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Outcome</h2>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
              {project.impact?.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Features</h2>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
              {project.features?.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlassCard>
        </aside>
      </Container>
    </PageShell>
  );
}
