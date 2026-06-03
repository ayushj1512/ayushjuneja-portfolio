"use client";

import { motion } from "framer-motion";

function splitIntoLines(text) {
  return text
    .split(".")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `${line}.`);
}

export default function ScrollStoryLines({ text }) {
  const lines = splitIntoLines(text);

  return (
    <div className="space-y-3">
      {lines.map((line) => (
        <motion.p
          key={line}
          initial={{ color: "rgb(113 113 122)", opacity: 0.45 }}
          whileInView={{ color: "rgb(255 255 255)", opacity: 1 }}
          viewport={{ once: false, amount: 0.95 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="font-heading text-xl leading-9 sm:text-2xl sm:leading-10"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
