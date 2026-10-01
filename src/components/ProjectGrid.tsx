"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid() {
  const visibleProjects = projectsData.filter((project) => !project.hidden);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
      {/* Title */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-medium tracking-tight text-[#A88B73] dark:text-[#E2D5C7] transition-colors">
          My Work
        </h2>
      </div>

      {/* Centered Layout with 28px gap */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-[28px] max-w-7xl mx-auto">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="w-[calc(50%-8px)] sm:w-[calc((100%-40px)/3-0.5px)] lg:w-auto lg:flex-1 lg:max-w-[220px] min-w-0"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
