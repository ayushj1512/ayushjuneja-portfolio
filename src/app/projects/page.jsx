import Badge from "@/components/common/Badge";
import GlassCard from "@/components/common/GlassCard";
import Container from "@/components/common/Container";
import PageShell from "@/components/layout/PageShell";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Projects",
  description: "Selected frontend projects, product interfaces, and web experiences.",
  path: "/projects"
});

export default function ProjectsPage() {
  const tags = [...new Set(projects.flatMap((project) => project.tags || []))];
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <PageShell
      eyebrow="Projects"
      title="A sharper library of full-stack systems, AI products, and business-facing platforms."
      description="A focused collection of commerce systems, AI tools, support platforms, and product infrastructure built for real operational use."
    >
      <Container className="py-16">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <GlassCard>
            <p className="font-heading text-4xl font-semibold text-white">{projects.length}</p>
            <p className="mt-2 text-sm text-zinc-400">Projects in the portfolio</p>
          </GlassCard>
          <GlassCard>
            <p className="font-heading text-4xl font-semibold text-white">{featuredProjects.length}</p>
            <p className="mt-2 text-sm text-zinc-400">Featured case studies</p>
          </GlassCard>
          <GlassCard>
            <p className="font-heading text-4xl font-semibold text-white">{tags.length}</p>
            <p className="mt-2 text-sm text-zinc-400">Core technologies represented</p>
          </GlassCard>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <ProjectGrid projects={projects} />
      </Container>
    </PageShell>
  );
}
