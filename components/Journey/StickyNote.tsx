"use client";

import React from "react";
import { motion } from "framer-motion";

interface StickyNoteProps {
  color: "yellow" | "peach" | "blue";
  initialRotation?: number;
  className?: string;
  tapeColor?: string;
  showDragBadge?: boolean;
  children: React.ReactNode;
}

export function StickyNote({
  color,
  initialRotation = 0,
  className = "",
  showDragBadge = false,
  children,
}: StickyNoteProps) {
  // Pastel sticky note color palettes
  const colorStyles = {
    yellow: "bg-[#fef9c3] text-[#1c1917] shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
    peach: "bg-[#fecdd3] text-[#1c1917] shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
    blue: "bg-[#dbeafe] text-[#1c1917] shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      dragElastic={0.15}
      whileHover={{
        scale: 1.04,
        rotate: 0,
        boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
      }}
      whileTap={{ scale: 0.98, cursor: "grabbing" }}
      initial={{ rotate: initialRotation }}
      className={`relative p-5 sm:p-6 rounded-sm select-none cursor-grab active:cursor-grabbing transition-colors duration-200 ${colorStyles[color]} ${className}`}
      style={{
        transformOrigin: "center center",
      }}
    >
      {/* Scotch Tape Strip at the top */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/45 backdrop-blur-md shadow-sm border border-white/30 rotate-[-1deg] pointer-events-none"
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      />

      {/* Optional "Drag" circular badge */}
      {showDragBadge && (
        <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold flex items-center justify-center shadow-md animate-bounce pointer-events-none">
          Drag
        </div>
      )}

      {/* Note Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

