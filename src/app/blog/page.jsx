import BlogCard from "@/components/blog/BlogCard";
import Container from "@/components/common/Container";
import PageShell from "@/components/layout/PageShell";
import { blogs } from "@/data/blogs";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Articles and notes about frontend engineering, UI craft, and product systems.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <PageShell eyebrow="Blog" title="Writing on product interfaces and frontend craft." description="Dummy posts are stored in a central blog data file.">
      <Container className="grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {blogs.length ? blogs.map((post) => <BlogCard key={post.slug} post={post} />) : <p className="text-zinc-600">No posts available yet.</p>}
      </Container>
    </PageShell>
  );
}
