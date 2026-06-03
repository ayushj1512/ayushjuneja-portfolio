import { Download } from "lucide-react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import PageShell from "@/components/layout/PageShell";
import ExperienceTimeline from "@/components/resume/ExperienceTimeline";
import { experience } from "@/data/experience";
import { resume } from "@/data/resume";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Resume",
  description: resume.summary,
  path: "/resume",
  keywords: resume.skills
});

export default function ResumePage() {
  return (
    <PageShell eyebrow="Resume" title="Experience, skills, and achievements." description={resume.summary}>
      <Container className="grid gap-10 py-16 lg:grid-cols-[1fr_0.42fr]">
        <div>
          <Button href={resume.downloadUrl} className="mb-8" download>
            <Download size={16} /> {resume.downloadLabel}
          </Button>
          <ExperienceTimeline items={experience} />
        </div>
        <aside className="grid gap-6 self-start">
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Skills Summary</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Education</h2>
            {resume.education.map((item) => (
              <div key={item.school} className="mt-4 text-sm text-zinc-400">
                <p className="font-medium text-white">{item.degree}</p>
                <p>{item.school}</p>
                <p>{item.period}</p>
              </div>
            ))}
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Achievements</h2>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
              {resume.achievements.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold text-white">Certifications</h2>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
              {resume.certifications.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlassCard>
        </aside>
      </Container>
    </PageShell>
  );
}
