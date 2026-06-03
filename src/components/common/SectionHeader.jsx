"use client";

import Badge from "@/components/common/Badge";
import Reveal from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeader({ eyebrow, title, description, align = "left", className }) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
