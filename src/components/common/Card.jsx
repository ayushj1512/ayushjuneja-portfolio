import { cn } from "@/lib/utils";

export default function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,107,0,0.16)] hover:bg-white/[0.05]",
        className
      )}
    >
      {children}
    </div>
  );
}
