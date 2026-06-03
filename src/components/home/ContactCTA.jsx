import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import GlassCard from "@/components/common/GlassCard";
import { contact } from "@/data/contact";

export default function ContactCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <GlassCard className="relative overflow-hidden p-8 sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.18),transparent_24%),radial-gradient(circle_at_90%_40%,rgba(255,107,0,0.08),transparent_24%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">Contact</p>
              <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {contact.heading}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">{contact.intro}</p>
            </div>
            <Button href="/contact" className="h-12 px-6">
              Start a conversation <ArrowRight size={16} />
            </Button>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
