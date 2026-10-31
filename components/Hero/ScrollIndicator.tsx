"use client";

import React from "react";

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  const handleScrollDown = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: string | Element, options?: object) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo("#journey", { duration: 1.2 });
    } else {
      const target = document.getElementById("journey");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      className={`flex items-center justify-center pointer-events-auto ${className}`}
    >
      <button
        type="button"
        onClick={handleScrollDown}
        className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-md border border-white/20 hover:border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
        aria-label="Scroll to explore"
      >
        {/* Animated Mouse Icon */}
        <div className="relative w-3.5 h-5 rounded-full border border-white/70 flex items-start justify-center p-0.5">
          <span className="w-1 h-1.5 rounded-full bg-white animate-scroll-wheel" />
        </div>

        {/* Text */}
        <span className="text-xs font-medium tracking-wide">
          Scroll to explore
        </span>

        {/* Down Arrow */}
        <span className="text-xs text-white/70 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5">
          ↓
        </span>
      </button>
    </div>
  );
}

