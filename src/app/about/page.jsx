import Badge from "@/components/common/Badge";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";
import PageShell from "@/components/layout/PageShell";
import { profile } from "@/data/profile";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About",
  description: profile.shortBio,
  path: "/about",
  keywords: profile.strengths
});

export default function AboutPage() {
  return (
    <PageShell eyebrow="About" title={profile.role} description={profile.shortBio}>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <GlassCard className="overflow-hidden p-0">
              <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.16),transparent_26%),linear-gradient(180deg,#25292e,#181b1f)] px-6 py-8 sm:px-8 sm:py-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">Profile</p>
                <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {profile.aboutLead}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                  {profile.intro}
                </p>
              </div>
              <div className="grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">Background</p>
                  <p className="mt-4 text-base leading-7 text-zinc-400">{profile.story}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">Approach</p>
                  <p className="mt-4 text-base leading-7 text-zinc-400">{profile.approach}</p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {profile.highlights.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06}>
                <GlassCard className="h-full">
                  <p className="font-heading text-4xl font-semibold text-white">{item.value}</p>
                  <p className="mt-3 text-sm text-zinc-400">{item.label}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GlassCard className="h-full">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">Education</p>
              <div className="mt-6 space-y-6">
                {profile.education.map((item) => (
                  <div key={`${item.school}-${item.period}`} className="relative pl-5">
                    <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_24px_rgba(255,107,0,0.45)]" />
                    <p className="font-medium text-white">{item.degree}</p>
                    <p className="mt-1 text-sm text-zinc-400">{item.school}</p>
                    <p className="mt-1 text-sm text-zinc-500">{item.period}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-8">
            <Reveal delay={0.04}>
              <GlassCard>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">How I like to work</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-3">
                  {profile.workApproach?.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                      <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-2">
              <Reveal delay={0.08}>
                <GlassCard className="h-full">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">Values</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {profile.values.map((value) => (
                      <Badge key={value}>{value}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
              <Reveal delay={0.12}>
                <GlassCard className="h-full">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">Strengths</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {profile.strengths.map((strength) => (
                      <Badge key={strength}>{strength}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
