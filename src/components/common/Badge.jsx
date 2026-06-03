import { cn } from "@/lib/utils";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </span>
  );
}
