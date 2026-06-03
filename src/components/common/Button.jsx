import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border border-[rgba(255,107,0,0.26)] bg-[linear-gradient(135deg,#ff6b00_0%,#ff7a14_55%,#ff8b38_100%)] text-[#0c0d0f] shadow-[0_18px_52px_rgba(255,107,0,0.24)] hover:scale-[1.02] hover:shadow-[0_22px_64px_rgba(255,107,0,0.28)]",
  secondary:
    "border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl hover:border-[rgba(255,107,0,0.22)] hover:bg-white/[0.07] hover:scale-[1.01]",
  ghost: "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
};

export default function Button({ href, className, variant = "primary", children, ...props }) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-300",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
