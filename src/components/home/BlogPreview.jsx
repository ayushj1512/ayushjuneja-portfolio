import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogPreview() {
  const featuredPosts = blogs.filter((post) => post.featured).slice(0, 3);
  const previewPosts = featuredPosts.length ? featuredPosts : blogs.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Writing"
          title="Writing on software systems, engineering process, and how better teams build better products."
          description="Featured articles now pull from the real blog data files, including cover images and article metadata."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {previewPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
