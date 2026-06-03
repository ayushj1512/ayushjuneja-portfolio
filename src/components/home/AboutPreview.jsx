import Badge from "@/components/common/Badge";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import ScrollStoryLines from "@/components/home/ScrollStoryLines";
import { profile } from "@/data/profile";

export default function AboutPreview() {
  return (
    <section id="about-preview" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="A builder for products that need both engineering depth and visual taste."
          description="Scroll through the story and each line sharpens into focus as you move."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard className="h-full overflow-hidden">
              <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
                <div className="rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(255,107,0,0.16),transparent_24%),linear-gradient(180deg,#25292e,#15181b)] p-5">
                  <div className="flex h-full min-h-72 items-end rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                    <p className="font-heading text-2xl text-white">{profile.name}</p>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">How I work</p>
                  <div className="mt-4">
                    <ScrollStoryLines text={`${profile.story} ${profile.approach}`} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {profile.values.map((value) => (
                      <Badge key={value}>{value}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {profile.highlights.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06}>
                <GlassCard className="h-full">
                  <p className="font-heading text-4xl font-semibold text-white">{item.value}</p>
                  <p className="mt-3 text-sm text-zinc-400">{item.label}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
