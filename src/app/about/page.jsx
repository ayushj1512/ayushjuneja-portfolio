import Badge from "@/components/common/Badge";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
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
    <PageShell eyebrow="About" title={profile.role} description={profile.intro}>
      <Container className="grid gap-10 py-16 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-6 text-lg leading-8 text-zinc-400">
          <p>{profile.story}</p>
          <p>{profile.approach}</p>
        </div>
        <div className="grid gap-4">
          {profile.highlights.map((item) => (
            <GlassCard key={item.label}>
              <p className="font-heading text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-3">
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Education</h2>
            {profile.education.map((item) => (
              <div key={item.school} className="mt-5">
                <p className="font-medium text-white">{item.degree}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.school}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.period}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Values</h2>
            <div className="mt-5 grid gap-2">
              {profile.values.map((value) => (
                <Badge key={value}>{value}</Badge>
              ))}
            </div>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Strengths</h2>
            <div className="mt-5 grid gap-2">
              {profile.strengths.map((strength) => (
                <Badge key={strength}>{strength}</Badge>
              ))}
            </div>
          </GlassCard>
        </Container>
      </section>
    </PageShell>
  );
}
