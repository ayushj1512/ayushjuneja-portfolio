import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";

export default function TestimonialCard({ testimonial }) {
  return (
    <Reveal>
      <GlassCard className="h-full">
        <p className="text-base leading-8 text-zinc-300">"{testimonial.quote}"</p>
        <div className="mt-8">
          <p className="font-heading text-lg font-semibold text-white">{testimonial.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{testimonial.role}</p>
        </div>
      </GlassCard>
    </Reveal>
  );
}
