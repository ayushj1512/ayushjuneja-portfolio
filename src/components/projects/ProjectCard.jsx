import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/common/Badge";
import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";

export default function ProjectCard({ project }) {
  return (
    <Reveal>
      <GlassCard className="group h-full overflow-hidden p-4">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.15),transparent_22%),linear-gradient(160deg,#24282d,#141619)] p-5">
          <div className="flex aspect-[16/10] items-end rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
            <span className="font-heading text-4xl font-semibold tracking-tight text-white/90">{project.imageLabel}</span>
          </div>
        </div>
        <div className="px-2 pb-2 pt-6">
          <div className="flex items-center justify-between gap-3">
            <Badge>{project.type}</Badge>
            <Link href={`/projects/${project.slug}`} className="text-zinc-500 transition group-hover:text-[var(--accent-secondary)]">
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <h3 className="mt-5 font-heading text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-300">
            <Link href={`/projects/${project.slug}`} className="font-medium text-white hover:text-[var(--accent-secondary)]">
              Case Study
            </Link>
            <Link href={project.liveUrl || "#"} className="font-medium hover:text-white">
              Live
            </Link>
            <Link href={project.githubUrl || "#"} className="inline-flex items-center gap-1 font-medium hover:text-white">
              <Github size={15} /> GitHub
            </Link>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}
