"use client";

import React, { useState, useEffect } from "react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project.image]);

  return (
    <div className="group flex flex-col gap-2.5 sm:gap-3 w-full select-none">
      
      {/* 1. Top Frame: Image Card (Scales to full column width) */}
      <div className="relative w-full aspect-[600/1352] rounded-2xl lg:rounded-[22px] overflow-hidden bg-stone-100 dark:bg-stone-800/80 border border-black/8 dark:border-white/10 shadow-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-xl flex items-center justify-center">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
            draggable={false}
          />
        ) : (
          <div className={`w-full h-full ${project.bgGradient} flex flex-col items-center justify-center p-3 text-center`}>
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500">Image Placeholder</span>
            <span className="text-[10px] opacity-70 mt-1">{project.image.split("/").pop()}</span>
          </div>
        )}

        {/* Subtle inner border */}
        <div className="absolute inset-0 rounded-2xl lg:rounded-[22px] border border-black/5 dark:border-white/10 pointer-events-none" />
      </div>

      {/* 2. Bottom Frame: Text Card (Frosty Glass) */}
      <div className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#EEF4FF]/45 dark:bg-[#0c1427]/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/70 dark:border-white/15 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.8)] dark:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.1)] flex flex-col items-start transition-all duration-300 group-hover:bg-[#EEF4FF]/70 dark:group-hover:bg-[#0c1427]/80 group-hover:border-white/90">
        <span className={`font-mono text-xs sm:text-sm font-semibold tracking-tight ${project.numberColor}`}>
          {project.number}
        </span>
        <h3 className="font-mono text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-snug truncate w-full mt-0.5">
          {project.title}
        </h3>
      </div>

    </div>
  );
}
