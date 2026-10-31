"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export function HeroTopBar() {
  return (
    <div className="fixed top-4 sm:top-6 right-4 sm:right-6 md:right-8 z-50 pointer-events-auto">
      <ThemeToggle />
    </div>
  );
}
