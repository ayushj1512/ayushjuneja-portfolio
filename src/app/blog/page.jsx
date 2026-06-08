import BlogCard from "@/components/blog/BlogCard";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import PageShell from "@/components/layout/PageShell";
import { blogs } from "@/data/blogs";
import { generatePageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Articles and notes about frontend engineering, product systems, delivery workflows, and developer growth.",
  path: "/blog"
});

export default function BlogPage() {
  const featuredPost = blogs.find((post) => post.featured) || blogs[0];
  const remainingPosts = blogs.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <PageShell
      eyebrow="Blog"
      title="Writing on software systems, process, and product thinking."
      description="A growing archive of articles, lessons, and engineering notes pulled from centralized blog data."
    >
      <Container className="grid gap-10 py-16">
        {featuredPost ? (
          <GlassCard className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] bg-[#171a1e]">
                {featuredPost.coverImage ? (
                  <img src={featuredPost.coverImage} alt={featuredPost.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(160deg,#252a30,#16181c)]" />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,18,20,0.08),rgba(17,18,20,0.56))]" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-[rgba(255,107,0,0.2)] bg-[rgba(255,107,0,0.12)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
                    Featured Article
                  </span>
                  {featuredPost.category ? (
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300">
                      {featuredPost.category}
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  {formatDate(featuredPost.publishedAt)} / {featuredPost.readTime}
                </p>
                <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">{featuredPost.excerpt}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredPost.tags?.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href={`/blog/${featuredPost.slug}`}>Read featured article</Button>
                </div>
              </div>
            </div>
          </GlassCard>
        ) : null}

        {remainingPosts.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : null}
      </Container>
    </PageShell>
  );
}
