"use client";

import { motion } from "framer-motion";

export default function Reveal({ children, className, delay = 0, y = 24, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.985, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
