import Container from "@/components/common/Container";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Container className="flex min-h-screen flex-col items-center justify-center gap-6">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 rounded-full border border-white/10" />
          <div className="h-20 w-20 animate-spin rounded-full border-2 border-transparent border-t-[var(--accent-primary)] border-r-[var(--accent-secondary)]" />
          <div className="absolute h-10 w-10 rounded-full bg-white/[0.04] backdrop-blur-xl" />
        </div>
        <div className="text-center">
          <p className="font-heading text-2xl font-semibold text-white">Loading Experience</p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-zinc-500">Please wait</p>
        </div>
      </Container>
    </main>
  );
}
