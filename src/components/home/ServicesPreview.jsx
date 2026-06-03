import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Capabilities built for modern product teams, operators, and digital brands."
          description="Six reusable service cards powered from a central content file."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <GlassCard className="h-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Service {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{service.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
