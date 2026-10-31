"use client";

import Hero from "@/components/Hero/Hero";
import { JourneySection } from "@/components/Journey/JourneySection";
import { ProjectSection } from "@/components/Project/ProjectSection";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { ContactSection } from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#faf8f5] dark:bg-[#07090e] text-slate-900 dark:text-white transition-colors duration-500 overflow-x-clip selection:bg-amber-400 selection:text-black">
      {/* 1. Immersive Hero Section */}
      <Hero />

      {/* 2. Ripped-Paper Transition & Narrative Journey Section */}
      <JourneySection />

      {/* 3. Selected Projects Showcase Section */}
      <ProjectSection />

      {/* 4. Skills Spotlight Stage Section */}
      <SkillsSection />

      {/* 5. Contact & Connect Section */}
      <ContactSection />
    </main>
  );
}
