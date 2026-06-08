import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/common/Badge";
import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";

export default function ProjectCard({ project, variant = "default" }) {
  const isMinimal = variant === "featuredMinimal";

  return (
    <Reveal>
      <GlassCard className={isMinimal ? "group h-full overflow-hidden p-3" : "group h-full overflow-hidden p-4"}>
        <div
          className={
            isMinimal
              ? "rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,#23272c,#171a1e)] p-3"
              : "rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.15),transparent_22%),linear-gradient(160deg,#24282d,#141619)] p-5"
          }
        >
          <div
            className={
              isMinimal
                ? "relative aspect-[16/10] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))]"
                : "relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
            }
          >
            {project.liveUrl ? (
              <iframe
                src={project.liveUrl}
                title={`${project.title} live preview`}
                className="h-full w-full bg-[#111214]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : null}
            <div
              className={
                isMinimal
                  ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,18,20,0.02),rgba(17,18,20,0.14)_58%,rgba(17,18,20,0.62)_100%)]"
                  : "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,18,20,0.04),rgba(17,18,20,0.22)_55%,rgba(17,18,20,0.72)_100%)]"
              }
            />
            <div className={isMinimal ? "pointer-events-none absolute inset-x-0 bottom-0 p-4" : "pointer-events-none absolute inset-x-0 bottom-0 p-5"}>
              <span className={isMinimal ? "font-heading text-3xl font-semibold tracking-tight text-white/92" : "font-heading text-4xl font-semibold tracking-tight text-white/90"}>
                {project.imageLabel}
              </span>
              {!isMinimal && project.liveUrl ? (
                <p className="mt-2 max-w-sm text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                  Live embedded preview. Some external apps may block iframe rendering.
                </p>
              ) : null}
              {isMinimal ? <div className="mt-3 h-px w-16 bg-[linear-gradient(90deg,rgba(255,107,0,0.85),rgba(255,107,0,0))]" /> : null}
            </div>
          </div>
        </div>
        <div className={isMinimal ? "px-2 pb-2 pt-5" : "px-2 pb-2 pt-6"}>
          <div className="flex items-center justify-between gap-3">
            <Badge>{project.type}</Badge>
            <Link href={`/projects/${project.slug}`} className="text-zinc-500 transition group-hover:text-[var(--accent-secondary)]">
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <h3 className={isMinimal ? "mt-4 font-heading text-[1.7rem] font-semibold leading-tight text-white" : "mt-5 font-heading text-2xl font-semibold text-white"}>
            {project.title}
          </h3>
          <p className={isMinimal ? "mt-3 text-sm leading-7 text-zinc-400" : "mt-4 text-sm leading-7 text-zinc-400"}>{project.description}</p>
          <div className={isMinimal ? "mt-4 flex flex-wrap gap-2" : "mt-5 flex flex-wrap gap-2"}>
            {project.tags?.slice(0, isMinimal ? 3 : project.tags.length).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className={isMinimal ? "mt-5 flex flex-wrap gap-4 text-sm text-zinc-300" : "mt-6 flex flex-wrap gap-4 text-sm text-zinc-300"}>
            <Link href={`/projects/${project.slug}`} className="font-medium text-white transition hover:text-[var(--accent-secondary)]">
              Case Study
            </Link>
            <Link href={project.liveUrl || "#"} className="font-medium transition hover:text-white">
              Live
            </Link>
            {!isMinimal ? (
              <Link href={project.githubUrl || "#"} className="inline-flex items-center gap-1 font-medium transition hover:text-white">
                <Github size={15} /> GitHub
              </Link>
            ) : null}
            {isMinimal && project.githubUrl ? (
              <Link href={project.githubUrl} className="inline-flex items-center gap-1 font-medium transition hover:text-white">
              <Github size={15} /> GitHub
              </Link>
            ) : null}
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}
