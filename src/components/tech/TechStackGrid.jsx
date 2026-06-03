import { Boxes, Code2, Database, Paintbrush, Server, Workflow } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";

const icons = [Code2, Server, Database, Workflow, Boxes, Paintbrush];

export default function TechStackGrid({ groups = [] }) {
  if (!groups.length) {
    return <p className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-zinc-400">No technologies listed yet.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, index) => {
        const Icon = icons[index % icons.length];
        return (
          <Reveal key={group.group} delay={index * 0.04}>
            <GlassCard className="h-full">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[rgba(255,107,0,0.1)] text-[var(--accent-secondary)]">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-white">{group.group}</h3>
              <div className="mt-5 grid gap-4">
                {group.items?.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-white/8 bg-black/14 p-4">
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        );
      })}
    </div>
  );
}
