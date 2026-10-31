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

  // When not yet mounted, default to night/dark mode smoothly
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 backdrop-blur-md border shadow-sm cursor-pointer select-none ${
        isDark
          ? "bg-black/50 hover:bg-black/70 text-slate-200 border-white/20 hover:border-white/35 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
          : "bg-white/60 hover:bg-white/80 text-slate-900 border-white/50 hover:border-white/70 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
      } ${className}`}
      aria-label={`Switch to ${isDark ? "day" : "night"} mode`}
    >
      <span className="relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
        {isDark ? (
          <FiMoon className="w-3.5 h-3.5 text-blue-300" />
        ) : (
          <FiSun className="w-3.5 h-3.5 text-amber-500" />
        )}
      </span>
      <span className="font-semibold text-xs">{isDark ? "Night" : "Day"}</span>
    </button>
  );
}

