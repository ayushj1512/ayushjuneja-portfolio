import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import ExperienceTimeline from "@/components/resume/ExperienceTimeline";
import { experience } from "@/data/experience";

export default function ExperiencePreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="A track record across product builds, dashboards, and systems with real operating pressure."
          description="A timeline preview powered from the dedicated experience data file."
        />
        <div className="mt-12">
          <ExperienceTimeline items={experience} />
        </div>
      </Container>
    </section>
  );
}
