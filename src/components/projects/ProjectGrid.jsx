import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectGrid({ projects = [], cardVariant = "default" }) {
  if (!projects.length) {
    return <p className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-zinc-400">No projects available yet.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} variant={cardVariant} />
      ))}
    </div>
  );
}
