import Button from "@/components/common/Button";
import Container from "@/components/common/Container";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-zinc-500">404</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white">Page not found</h1>
          <p className="mt-4 text-zinc-400">The page you are looking for does not exist or has moved.</p>
          <Button href="/" className="mt-8">
            Back home
          </Button>
        </div>
      </Container>
    </main>
  );
}
