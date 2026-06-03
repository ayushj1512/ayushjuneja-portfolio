import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import { profile } from "@/data/profile";

export default function StatsStrip() {
  return (
    <section className="py-8">
      <Container>
        <div className="grid gap-4 md:grid-cols-4">
          {profile.highlights.map((item) => (
            <GlassCard key={item.label} className="py-5">
              <p className="font-heading text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
