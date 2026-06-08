import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#131518_0%,#171a1e_22%,#1b1f24_52%,#15181c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,107,0,0.06),transparent_20%),radial-gradient(circle_at_82%_30%,rgba(255,107,0,0.04),transparent_18%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Selected Work"
            title="A tighter selection of product builds with a cleaner, more considered point of view."
            description="A few featured projects from the portfolio, kept minimal and easier to scan."
            className="max-w-2xl"
          />
          <Button href="/projects" variant="secondary" className="w-full sm:w-auto">
            Explore All Projects
          </Button>
        </div>
        <div className="mt-12">
          <ProjectGrid projects={featured} cardVariant="featuredMinimal" />
        </div>
      </Container>
    </section>
  );
}
