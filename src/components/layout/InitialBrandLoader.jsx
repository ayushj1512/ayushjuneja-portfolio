"use client";

import { useEffect, useState } from "react";
import { Italianno } from "next/font/google";

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400"
});

export default function InitialBrandLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setMounted(true));
    const timer = window.setTimeout(() => setVisible(false), 1750);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[120] transition duration-700 ease-out ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,107,0,0.12),transparent_18%),radial-gradient(circle_at_18%_18%,rgba(255,107,0,0.05),transparent_22%),linear-gradient(180deg,#181b1f_0%,#101214_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-10">
        <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] px-8 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-12 sm:py-16">
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">Loading portfolio</p>

            <div className="mt-6">
              <p
                className={`${italianno.className} loader-signature text-6xl tracking-[0.01em] text-[var(--accent-secondary)] sm:text-[5.5rem]`}
              >
                Ayush Juneja
              </p>
              <div className="loader-signature-underline mx-auto mt-2 h-px w-32 bg-[linear-gradient(90deg,transparent,rgba(255,107,0,0.9),transparent)] sm:w-40" />
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Crafting the experience, arranging the details, and bringing the portfolio into view.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="loader-dot h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)]" />
              <span className="loader-dot h-2.5 w-2.5 rounded-full bg-[var(--accent-secondary)] [animation-delay:140ms]" />
              <span className="loader-dot h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)] [animation-delay:280ms]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
