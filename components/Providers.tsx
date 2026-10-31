"use client";

import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "./SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
