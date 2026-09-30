import React from "react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#ffffff] text-[#1a1a1a]">
      {/* Ensure solid #ffffff background covering any viewport scroll */}
      <div className="fixed inset-0 bg-[#ffffff] -z-10" />
      {children}
    </div>
  );
}
