"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "@/components/common/Button";
import GlassCard from "@/components/common/GlassCard";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <GlassCard>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          className="h-12 rounded-2xl border border-white/10 bg-black/14 px-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-[rgba(255,107,0,0.4)]"
          placeholder="Name"
        />
        <input
          className="h-12 rounded-2xl border border-white/10 bg-black/14 px-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-[rgba(255,107,0,0.4)]"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="min-h-36 rounded-2xl border border-white/10 bg-black/14 p-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-[rgba(255,107,0,0.4)]"
          placeholder="Tell me about the product or system you want to build."
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit">
            <Send size={16} /> Send message
          </Button>
          {sent ? (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[var(--accent-secondary)]">
              Demo mode only. Hook this form to your backend or form service later.
            </motion.p>
          ) : null}
        </div>
      </form>
    </GlassCard>
  );
}
