import AboutPreview from "@/components/home/AboutPreview";
import BlogPreview from "@/components/home/BlogPreview";
import ContactCTA from "@/components/home/ContactCTA";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero797 from "@/components/home/Hero797";
import ServicesPreview from "@/components/home/ServicesPreview";
import TechStackPreview from "@/components/home/TechStackPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import { profile } from "@/data/profile";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: profile.name,
  description: profile.intro,
  path: "/"
});

export default function HomePage() {
  return (
    <main>
      <Hero797 />
      <FeaturedProjects />
      <AboutPreview />
      <ExperiencePreview />
      <TechStackPreview />
      <ServicesPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <ContactCTA />
    </main>
  );
}
