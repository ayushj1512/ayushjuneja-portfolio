"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({ className, children, disableHover = false, ...props }) {
  return (
    <motion.div
      className={cn(
        "rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl",
        className
      )}
      whileHover={
        disableHover
          ? undefined
          : {
              y: -6,
              scale: 1.01,
              boxShadow: "0 28px 90px rgba(0,0,0,0.42)",
              borderColor: "rgba(255,107,0,0.18)"
            }
      }
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
