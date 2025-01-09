"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-slate-100 dark:bg-green-500/20 text-slate-800 dark:text-green-400 hover:bg-slate-200 dark:hover:bg-green-500/30 transition-colors"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
