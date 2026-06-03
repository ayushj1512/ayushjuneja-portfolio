import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import PageShell from "@/components/layout/PageShell";
import { contact } from "@/data/contact";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contact",
  description: contact.intro,
  path: "/contact"
});

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title={contact.heading} description={contact.intro}>
      <Container className="grid gap-10 py-16 lg:grid-cols-[0.72fr_1.08fr]">
        <div className="grid gap-4">
          <GlassCard>
            <Mail size={18} className="text-[var(--accent-secondary)]" />
            <p className="mt-4 text-sm text-zinc-500">Email</p>
            <p className="mt-1 font-medium text-white">{contact.email}</p>
          </GlassCard>
          <GlassCard>
            <Phone size={18} className="text-[var(--accent-secondary)]" />
            <p className="mt-4 text-sm text-zinc-500">Phone</p>
            <p className="mt-1 font-medium text-white">{contact.phone}</p>
          </GlassCard>
          <GlassCard>
            <MapPin size={18} className="text-[var(--accent-secondary)]" />
            <p className="mt-4 text-sm text-zinc-500">Location</p>
            <p className="mt-1 font-medium text-white">{contact.location}</p>
          </GlassCard>
        </div>
        <GlassCard className="self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">Direct Contact</p>
          <h2 className="mt-5 font-heading text-3xl font-semibold text-white sm:text-4xl">
            Reach out directly and I'll get back with clarity.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            Since there is no backend form flow here, the cleanest way to connect is through direct email, phone, or social links.
            That also keeps the page more honest and premium.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contact.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-[rgba(255,107,0,0.18)] hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-white">{item.label}</p>
                  <ArrowUpRight size={16} className="text-zinc-500 transition group-hover:text-[var(--accent-secondary)]" />
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.value}</p>
              </a>
            ))}
          </div>
        </GlassCard>
      </Container>
    </PageShell>
  );
}
