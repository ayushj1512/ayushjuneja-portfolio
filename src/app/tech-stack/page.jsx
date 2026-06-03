import Container from "@/components/common/Container";
import PageShell from "@/components/layout/PageShell";
import TechStackGrid from "@/components/tech/TechStackGrid";
import { techStack } from "@/data/techStack";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Tech Stack",
  description: "Grouped technologies used across frontend, backend, database, DevOps, tools, and automation.",
  path: "/tech-stack",
  keywords: techStack.flatMap((group) => group.items)
});

export default function TechStackPage() {
  return (
    <PageShell eyebrow="Tech Stack" title="Tools selected for fast, reliable product delivery." description="Every group and item is editable from the central tech stack data file.">
      <Container className="py-16">
        <TechStackGrid groups={techStack} />
      </Container>
    </PageShell>
  );
}
