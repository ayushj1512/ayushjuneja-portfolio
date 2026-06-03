"use client";

import { useEffect, useRef, useState } from "react";

export default function SmoothCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const syncEnabled = () => setEnabled(mediaQuery.matches);
    syncEnabled();

    mediaQuery.addEventListener("change", syncEnabled);
    return () => mediaQuery.removeEventListener("change", syncEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.2;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
    };

    const handlePointerOver = (event) => {
      const interactive = event.target.closest("a, button, input, textarea, [data-cursor='interactive']");
      if (ringRef.current) {
        ringRef.current.dataset.active = interactive ? "true" : "false";
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handlePointerOver);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handlePointerOver);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_20px_rgba(255,107,0,0.4)] md:block"
      />
      <div
        ref={ringRef}
        data-active="false"
        className="pointer-events-none fixed left-0 top-0 z-[79] hidden h-8 w-8 rounded-full border border-white/14 bg-transparent transition-[width,height,border-color,opacity] duration-150 data-[active=true]:h-11 data-[active=true]:w-11 data-[active=true]:border-[rgba(255,107,0,0.42)] md:block"
      />
    </>
  );
}
