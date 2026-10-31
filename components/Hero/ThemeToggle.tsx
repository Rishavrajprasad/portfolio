"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // When not yet mounted, default to day/light mode smoothly
  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 backdrop-blur-xl border shadow-lg hover:scale-105 active:scale-95 cursor-pointer select-none ${
        isDark
          ? "bg-black/65 hover:bg-black/85 text-white border-white/20 hover:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-white/85 hover:bg-white text-slate-900 border-stone-300/80 hover:border-stone-400 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
      } ${className}`}
      aria-label={`Switch to ${isDark ? "day" : "night"} mode`}
    >
      <span className="relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
        {isDark ? (
          <FiMoon className="w-3.5 h-3.5 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
        ) : (
          <FiSun className="w-3.5 h-3.5 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
        )}
      </span>
      <span className="font-semibold text-xs tracking-tight">{isDark ? "Night" : "Day"}</span>
    </button>
  );
}

