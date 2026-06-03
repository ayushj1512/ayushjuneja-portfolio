import { notFound } from "next/navigation";
import Badge from "@/components/common/Badge";
import Container from "@/components/common/Container";
import PageShell from "@/components/layout/PageShell";
import { blogs } from "@/data/blogs";
import { generatePageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogs.find((item) => item.slug === params.slug);
  if (!post) return generatePageMetadata({ title: "Post not found", path: `/blog/${params.slug}` });
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags
  });
}

export default function BlogDetailPage({ params }) {
  const post = blogs.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <PageShell eyebrow={`${formatDate(post.publishedAt)} / ${post.readTime}`} title={post.title} description={post.excerpt}>
      <Container className="py-16">
        <article className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="space-y-10">
            {post.content?.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-white">{section.heading}</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </Container>
    </PageShell>
  );
}
