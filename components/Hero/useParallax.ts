"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxOffset {
  bgX: number;
  bgY: number;
  fgX: number;
  fgY: number;
  cardX: number;
  cardY: number;
}

export function useParallax() {
  const [offsets, setOffsets] = useState<ParallaxOffset>({
    bgX: 0,
    bgY: 0,
    fgX: 0,
    fgY: 0,
    cardX: 0,
    cardY: 0,
  });

  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef<number | null>(null);
  const enabledRef = useRef<boolean>(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check for touch device / no hover capability
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    if (prefersReducedMotion || isTouchDevice) {
      enabledRef.current = false;
      return;
    }

    enabledRef.current = true;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from center: -1 to +1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    const handleMouseLeave = () => {
      // Return smoothly to center
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth animation loop using lerp (Linear Interpolation)
    const animate = () => {
      if (!enabledRef.current) return;

      const current = mouseRef.current;
      // Lerp factor
      const ease = 0.08;
      current.x += (current.targetX - current.x) * ease;
      current.y += (current.targetY - current.y) * ease;

      // Parallax calculations:
      // Background: 2–4px
      // Foreground: 3–6px
      // Cards: 5–10px
      const bgOffset = 3.5;
      const fgOffset = 5.0;
      const cardOffset = 8.5;

      setOffsets({
        bgX: -current.x * bgOffset,
        bgY: -current.y * bgOffset,
        fgX: current.x * fgOffset,
        fgY: current.y * fgOffset,
        cardX: current.x * cardOffset,
        cardY: current.y * cardOffset,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return offsets;
}

