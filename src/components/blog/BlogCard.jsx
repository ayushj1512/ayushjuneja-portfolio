import Link from "next/link";
import Badge from "@/components/common/Badge";
import GlassCard from "@/components/common/GlassCard";
import Reveal from "@/components/common/Reveal";
import { formatDate } from "@/lib/utils";

export default function BlogCard({ post }) {
  return (
    <Reveal>
      <GlassCard className="h-full">
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
      </GlassCard>
    </Reveal>
  );
}
