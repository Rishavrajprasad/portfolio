"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "./workData";
import {
  FileFlowThumbnail,
  LocTrackThumbnail,
  CropGuardThumbnail,
  GlamHubThumbnail,
} from "./ProjectCardThumbnails";
import { FiArrowUpRight } from "react-icons/fi";

interface StickyProjectNoteProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function StickyProjectNote({ project, onSelect }: StickyProjectNoteProps) {
  const renderThumbnail = () => {
    switch (project.visualType) {
      case "fileflow":
        return <FileFlowThumbnail />;
      case "loctrack":
        return <LocTrackThumbnail />;
      case "aivision":
        return <CropGuardThumbnail />;
      case "ecommerce":
        return <GlamHubThumbnail />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -120, right: 120, top: -90, bottom: 90 }}
      dragElastic={0.18}
      whileHover={{
        y: -10,
        scale: 1.025,
        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.28)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98, cursor: "grabbing" }}
      initial={{ rotate: project.rotation }}
      animate={{ rotate: project.rotation }}
      onClick={() => onSelect(project)}
      className={`relative w-[280px] sm:w-[295px] md:w-[310px] shrink-0 p-3.5 sm:p-4 pb-3 rounded-2xl border cursor-grab active:cursor-grabbing select-none transition-transform duration-200 shadow-[0_12px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.55)] ${project.cardBg} ${project.cardBorder}`}
      style={{
        transformOrigin: "center top",
      }}
    >
      {/* 1. Translucent Frosted Scotch Tape Strip */}
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/75 border border-white/60 backdrop-blur-md shadow-sm -rotate-1 pointer-events-none rounded-[2px]"
        style={{
          boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
        }}
      />

      {/* 2. Embedded Polaroid Picture Canvas */}
      <div className="relative rounded-xl overflow-hidden shadow-inner cursor-pointer">
        {renderThumbnail()}
      </div>

      {/* 3. Metadata Platform Tag Line */}
      <div className="mt-3 flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-600 font-sans">
        <span>{project.platformTag}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
      </div>

      {/* 4. Project Title in Editorial Serif */}
      <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-0.5 tracking-tight">
        {project.title}
      </h3>

      {/* 5. Short Summary Sentence */}
      <p className="text-xs sm:text-[13px] text-slate-700 font-sans leading-snug mt-1 min-h-[36px]">
        {project.shortSummary}
      </p>

      {/* 6. Dashed Divider Line */}
      <div className="border-t border-dashed border-black/15 mt-3 pt-2.5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-500">
          click to explore
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="group/btn flex items-center gap-0.5 text-xs font-semibold text-slate-900 hover:opacity-75 transition-opacity"
        >
          <span>open</span>
          <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
}
