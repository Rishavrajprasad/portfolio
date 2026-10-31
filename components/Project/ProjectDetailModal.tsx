"use client";

import React, { useEffect } from "react";
import { Project } from "./workData";
import {
  FileFlowMockup,
  LocTrackMockup,
  CropGuardMockup,
  GlamHubMockup,
} from "./ProjectMockups";
import { FiX, FiExternalLink, FiGithub, FiZap } from "react-icons/fi";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.visualType) {
      case "fileflow":
        return <FileFlowMockup />;
      case "loctrack":
        return <LocTrackMockup />;
      case "aivision":
        return <CropGuardMockup />;
      case "ecommerce":
        return <GlamHubMockup />;
      default:
        return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#f8f5ee] dark:bg-[#121622] text-slate-900 dark:text-white border border-black/10 dark:border-white/15 p-6 sm:p-8 shadow-2xl space-y-6"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 mt-0.5">
              {project.headline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Close project modal"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Mockup Simulator */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10">
          {renderVisual()}
        </div>

        {/* Description & Architecture Metrics */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {project.description}
          </p>

          {project.metrics && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono">
              <FiZap className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-slate-500 dark:text-slate-400">{project.metrics.label}:</span>
              <span className="font-semibold">{project.metrics.value}</span>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-200 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3 pt-4 border-t border-black/10 dark:border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide shadow-md transition-all active:scale-95"
            >
              <span>{project.visualType === "aivision" ? "Explore on Kaggle" : "Visit Live Site"}</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 font-semibold text-sm border border-black/10 dark:border-white/15 transition-all active:scale-95"
            >
              <FiGithub className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

