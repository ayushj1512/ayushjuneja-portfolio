import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="Kind words from people who needed both speed and a high standard of finish."
          description="Dark glass testimonial cards sourced from a dedicated data file."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} testimonial={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
