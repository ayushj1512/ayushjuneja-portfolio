import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import TechStackGrid from "@/components/tech/TechStackGrid";
import { techStack } from "@/data/techStack";

export default function TechStackPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools chosen for premium interfaces, dependable systems, and scalable delivery."
          description="Grouped by category with descriptions so the stack can stay content-driven."
        />
        <div className="mt-12">
          <TechStackGrid groups={techStack.slice(0, 6)} />
        </div>
      </Container>
    </section>
  );
}
