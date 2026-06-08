import { notFound } from "next/navigation";
import Badge from "@/components/common/Badge";
import Container from "@/components/common/Container";
import PageShell from "@/components/layout/PageShell";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { generatePageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) {
    return generatePageMetadata({
      title: "Post not found",
      path: `/blog/${params.slug}`,
      noIndex: true
    });
  }
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    type: "article",
    image: post.coverImage
  });
}

export default function BlogDetailPage({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <PageShell eyebrow={`${formatDate(post.publishedAt)} / ${post.readTime}`} title={post.title} description={post.excerpt}>
      <Container className="py-16">
        <article className="mx-auto max-w-3xl">
          {post.coverImage ? (
            <div className="mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#171a1e]">
              <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
            </div>
          ) : null}
          <div className="mb-10 flex flex-wrap gap-2">
            {post.category ? <Badge>{post.category}</Badge> : null}
            {post.tags?.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="space-y-7">
            {post.contentBlocks?.map((block, index) => {
              if (block.type === "heading") {
                const HeadingTag = block.level === 3 ? "h3" : "h2";

                return (
                  <HeadingTag
                    key={`${block.type}-${index}-${block.text}`}
                    className={block.level === 3 ? "font-heading text-xl font-semibold tracking-tight text-white" : "font-heading text-2xl font-semibold tracking-tight text-white"}
                  >
                    {block.text}
                  </HeadingTag>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={`${block.type}-${index}`} className="grid gap-3 pl-5 text-lg leading-8 text-zinc-400 marker:text-[var(--accent-secondary)] list-disc">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "code") {
                return (
                  <pre
                    key={`${block.type}-${index}`}
                    className="overflow-x-auto rounded-[1.5rem] border border-white/10 bg-[#15171a] p-5 text-sm leading-7 text-zinc-200"
                  >
                    <code>{block.code}</code>
                  </pre>
                );
              }

              return (
                <p key={`${block.type}-${index}`} className="text-lg leading-8 text-zinc-400">
                  {block.text}
                </p>
              );
            })}
          </div>
        </article>
      </Container>
    </PageShell>
  );
}
