import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

export default function PageShell({ eyebrow, title, description, children }) {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,107,0,0.08),transparent_22%),linear-gradient(180deg,#202327,#111214)]" />
        <Container className="relative">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </Container>
      </section>
      {children}
    </main>
  );
}
