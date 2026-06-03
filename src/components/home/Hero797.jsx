import { ArrowRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import { profile } from "@/data/profile";

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Sparkles
};

export default function Hero797() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,107,0,0.12),transparent_26%),radial-gradient(circle_at_84%_18%,rgba(255,107,0,0.07),transparent_22%),linear-gradient(180deg,#23272c_0%,#17191d_36%,#111214_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:92px_92px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-3xl">
            <Badge>{profile.availability}</Badge>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">{profile.specialty}</p>

            <h1 className="mt-5 font-heading text-5xl font-semibold leading-[0.92] tracking-tight text-white sm:text-6xl xl:text-[5.5rem]">
              Building digital systems that look sharp and work hard.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              {profile.name} is a {profile.role.toLowerCase()} focused on commerce, admin products, mobile apps, and
              workflow automation for fast-moving teams.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects" className="h-12 px-6">
                View Work <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="secondary" className="h-12 px-6">
                Book a Conversation
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.heroChips.map((chip) => (
                <Badge key={chip}>{chip}</Badge>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                <MapPin size={14} className="text-[var(--accent-secondary)]" />
                {profile.location}
              </span>
              {profile.socialLinks.map((item) => {
                const Icon = icons[item.label] || Sparkles;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:border-[rgba(255,107,0,0.22)] hover:text-white"
                  >
                    <Icon size={14} className="text-[var(--accent-secondary)]" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <GlassCard className="overflow-hidden p-4 sm:p-5">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">Current Focus</p>
                    <p className="mt-3 font-heading text-2xl font-semibold text-white">Commerce systems, internal tools, and scalable product delivery.</p>
                  </div>
                  <span className="hidden rounded-full bg-[rgba(255,107,0,0.12)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-secondary)] sm:inline-flex">
                    Available
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/18 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Work Style</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{profile.shortBio}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/18 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Core Capability</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">
                      Full-stack product builds spanning frontend UX, backend logic, analytics, admin workflows, and automation systems.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {profile.highlights.map((item) => (
                <GlassCard key={item.label} className="py-5">
                  <p className="font-heading text-4xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
