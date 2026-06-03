import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Writing"
          title="Thoughts on dashboards, commerce, automation, and shipping polished interfaces."
          description="Latest notes sourced from the blog data file."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogs.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
