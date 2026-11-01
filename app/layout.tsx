import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Rishav Raj Prasad | Portfolio",
  description: "Software Engineer building scalable web applications, AI-powered experiences and thoughtful digital products.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical Hero background images for instant LCP paint */}
        <link
          rel="preload"
          as="image"
          href="/day-desktop.webp"
          type="image/webp"
          // @ts-expect-error React 19 / DOM supports fetchPriority
          fetchpriority="high"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/day-mob.webp"
          type="image/webp"
          // @ts-expect-error React 19 / DOM supports fetchPriority
          fetchpriority="high"
          media="(max-width: 767px)"
        />
      </head>
      <body
        className="font-sans antialiased"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

