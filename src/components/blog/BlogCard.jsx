import Link from "next/link";
import Badge from "@/components/common/Badge";
import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";
import { formatDate } from "@/lib/utils";

export default function BlogCard({ post }) {
  return (
    <Reveal>
      <GlassCard className="group h-full overflow-hidden p-0">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#171a1e]">
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(160deg,#252a30,#16181c)]" />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,18,20,0.04),rgba(17,18,20,0.68))]" />
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              {post.featured ? <Badge className="bg-[rgba(255,107,0,0.14)] text-[var(--accent-secondary)]">Featured</Badge> : null}
              {post.category ? <Badge>{post.category}</Badge> : null}
            </div>
          </div>
        </Link>
        <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          <span>{formatDate(post.publishedAt)}</span>
          <span>/</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-5 font-heading text-2xl font-semibold text-white">{post.title}</h3>
        <p className="mt-4 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-medium text-white hover:text-[var(--accent-secondary)]">
          Read article
        </Link>
        </div>
      </GlassCard>
    </Reveal>
  );
}
