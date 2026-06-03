"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/data/navigation";
import Button from "@/components/common/Button";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Toggle menu"
        className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-[5.4rem] rounded-[2rem] border border-white/10 bg-[rgba(17,18,20,0.95)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="grid gap-2">
              {navigation.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white",
                    pathname === item.href && "bg-[rgba(255,107,0,0.12)] text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button href={navigation.cta.href} className="mt-2 w-full" onClick={() => setOpen(false)}>
                {navigation.cta.label}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
