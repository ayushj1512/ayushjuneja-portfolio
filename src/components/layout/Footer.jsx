import Link from "next/link";
import Container from "@/components/common/Container";
import { navigation } from "@/data/navigation";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--bg-primary)]">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-heading text-2xl font-semibold text-white">{profile.name}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{profile.shortBio}</p>
        </div>
        <div className="grid gap-3 sm:justify-end">
          {contact.socialLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-zinc-400 transition hover:text-[var(--accent-secondary)]">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs uppercase tracking-[0.18em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{navigation.brand}</p>
        <p>Premium portfolio system powered by centralized data.</p>
      </Container>
    </footer>
  );
}
