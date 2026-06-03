"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation } from "@/data/navigation";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="pt-4">
        <motion.div
          className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-[rgba(17,18,20,0.72)] px-3 shadow-[0_20px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
          whileHover={{ borderColor: "rgba(255,107,0,0.14)" }}
          transition={{ duration: 0.25 }}
        >
          <Link href="/" className="flex items-center gap-3 rounded-full px-3 py-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff6b00,#ff8b38)] text-xs font-semibold text-[#0d0f11] shadow-[0_10px_28px_rgba(255,107,0,0.35)]">
              AJ
            </span>
            <div className="hidden sm:block">
              <p className="font-heading text-sm font-semibold text-white">{navigation.brand}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Full Stack Developer</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.links.map((item) => {
              const active = item.href === pathname;
              return (
                <motion.div key={item.href} whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm text-zinc-400 transition duration-300 hover:bg-white/[0.05] hover:text-white",
                      active && "bg-[rgba(255,107,0,0.12)] text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <Button href={navigation.cta.href} className="h-10 px-4">
              {navigation.cta.label}
            </Button>
          </div>
          <MobileMenu />
        </motion.div>
      </Container>
    </motion.header>
  );
}
