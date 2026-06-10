import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import PageShell from "@/components/layout/PageShell";
import { contact } from "@/data/contact";
import { generatePageMetadata } from "@/lib/metadata";

const contactCards = [
  {
    label: "Email",
    value: contact.email,
    icon: Mail,
  },
  {
    label: "Phone",
    value: contact.phone,
    icon: Phone,
  },
  {
    label: "Location",
    value: contact.location,
    icon: MapPin,
  },
];

export const metadata = generatePageMetadata({
  title: "Contact",
  description: contact.intro,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title={contact.heading}
      description={contact.intro}
    >
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div className="grid gap-6">
          <GlassCard>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              Direct Contact
            </p>

            <h2 className="mt-5 max-w-2xl font-heading text-3xl font-semibold text-white sm:text-4xl">
              Reach out directly and I’ll get back with clarity.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Since there is no backend form flow here, the cleanest way to
              connect is through direct email, phone, or social links.
            </p>
          </GlassCard>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard key={item.label}>
                  <Icon
                    size={18}
                    className="text-[var(--accent-secondary)]"
                  />

                  <p className="mt-4 text-sm text-zinc-500">{item.label}</p>

                  <p className="mt-1 break-words font-medium text-white">
                    {item.value}
                  </p>
                </GlassCard>
              );
            })}
          </div>

          <GlassCard>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              Social Links
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contact.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-[rgba(255,107,0,0.18)] hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-white">{item.label}</p>

                    <ArrowUpRight
                      size={16}
                      className="text-zinc-500 transition group-hover:text-[var(--accent-secondary)]"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </GlassCard>
        </div>

        <GlassCard className="overflow-hidden p-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[inherit] bg-[#111214]">
            <Image
              src="/e4e3f5c6-4929-41bd-8931-75c332506aa6.png"
              alt="Ayush Juneja"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
                Available For
              </p>

              <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                Freelance · Full-Time
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Building products, solving problems, and collaborating with
                ambitious teams.
              </p>
            </div>
          </div>
        </GlassCard>
      </Container>
    </PageShell>
  );
}