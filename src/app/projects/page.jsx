import Badge from "@/components/common/Badge";
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

  return (
    <PageShell eyebrow="Projects" title="A library of polished product work." description="Browse dummy project data that can be replaced from one central file.">
      <Container className="py-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
        <ProjectGrid projects={projects} />
      </Container>
    </PageShell>
  );
}
