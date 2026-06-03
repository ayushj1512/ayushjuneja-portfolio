import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";

export default function ExperienceTimeline({ items = [] }) {
  if (!items.length) {
    return <p className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-zinc-400">No experience listed yet.</p>;
  }

  return (
    <div className="relative grid gap-6 before:absolute before:left-5 before:top-0 before:hidden before:h-full before:w-px before:bg-white/10 md:before:block">
      {items.map((item, index) => (
        <Reveal key={`${item.company}-${item.role}`} delay={index * 0.06}>
          <div className="relative pl-0 md:pl-14">
            <div className="absolute left-[0.1rem] top-10 hidden size-3 rounded-full bg-[linear-gradient(135deg,#ff6b00,#ff8b38)] shadow-[0_0_20px_rgba(255,107,0,0.4)] md:block" />
            <GlassCard>
              <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">{item.period}</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-zinc-400">{item.description}</p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-300">
                {item.achievements?.map((achievement) => (
                  <li key={achievement}>- {achievement}</li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
