"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isNight = theme === "night";

  if (!mounted) {
    return (
      <div className="w-[72px] h-[34px] sm:w-[80px] sm:h-[38px] rounded-full bg-white/40 border border-white/40" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isNight ? "Day" : "Night"} mode`}
      className="relative flex items-center w-[74px] h-[36px] sm:w-[82px] sm:h-[38px] p-1 rounded-full cursor-pointer select-none transition-transform active:scale-95 focus:outline-none overflow-hidden shrink-0 border border-white/50 dark:border-white/20 shadow-md"
      style={{
        boxShadow: "inset 0 3px 6px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {/* 1. Track Background - Day (Sky Blue + Clouds) */}
      <motion.div
        initial={false}
        animate={{ opacity: isNight ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-r from-[#2995f9] via-[#4ba6ff] to-[#7ac2ff] overflow-hidden"
      >
        {/* Soft Radial Ray */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(255,255,255,0.45)_0%,transparent_65%)]" />

        {/* Fluffy Overlapping Clouds (Right side of track) */}
        <svg
          className="absolute right-[-4px] bottom-[-4px] w-[54px] h-[30px] pointer-events-none drop-shadow-sm"
          viewBox="0 0 100 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back cloud layer */}
          <path
            d="M20 45 C 30 25, 55 25, 65 40 C 75 25, 95 30, 100 45 Z"
            fill="rgba(255,255,255,0.6)"
          />
          {/* Front puffy cloud */}
          <path
            d="M10 50 C 20 32, 42 30, 52 42 C 60 26, 85 28, 95 44 C 102 38, 110 45, 110 50 Z"
            fill="#FFFFFF"
          />
        </svg>
      </motion.div>

      {/* 2. Track Background - Night (Dark Navy + Stars + Arc Shading) */}
      <motion.div
        initial={false}
        animate={{ opacity: isNight ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-r from-[#0d1424] via-[#161f36] to-[#1e2942] overflow-hidden"
      >
        {/* Concentric Layer Shading arcs */}
        <div className="absolute -left-6 -top-2 w-20 h-20 rounded-full bg-white/[0.04] pointer-events-none" />
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/[0.03] pointer-events-none" />

        {/* Diamond Sparkle Star 1 */}
        <svg
          className="absolute left-[12px] top-[7px] w-[8px] h-[8px] text-white opacity-95 animate-pulse"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Diamond Sparkle Star 2 */}
        <svg
          className="absolute left-[26px] top-[18px] w-[7px] h-[7px] text-white opacity-85"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Small Dot Stars */}
        <div className="absolute left-[8px] bottom-[8px] w-[2.5px] h-[2.5px] rounded-full bg-white opacity-80" />
        <div className="absolute left-[20px] top-[9px] w-[2px] h-[2px] rounded-full bg-white opacity-90" />
        <div className="absolute left-[36px] bottom-[7px] w-[2.5px] h-[2.5px] rounded-full bg-white/75" />
      </motion.div>

      {/* 3. Sliding Knob (Sun / Moon) */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className={`relative z-10 w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] rounded-full flex items-center justify-center pointer-events-none transition-all duration-300 ${
          isNight ? "translate-x-[38px] sm:translate-x-[42px]" : "translate-x-0"
        }`}
      >
        {/* SUN (Day Knob) */}
        <motion.div
          animate={{
            scale: isNight ? 0.4 : 1,
            opacity: isNight ? 0 : 1,
            rotate: isNight ? -90 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f59e0b] via-[#fbbf24] to-[#fef08a] shadow-[0_2px_6px_rgba(245,158,11,0.5),inset_0_-2px_3px_rgba(180,83,9,0.35)] border border-[#fef08a]"
        />

        {/* MOON (Night Knob with 3 Craters) */}
        <motion.div
          animate={{
            scale: isNight ? 1 : 0.4,
            opacity: isNight ? 1 : 0,
            rotate: isNight ? 0 : 90,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] shadow-[0_2px_6px_rgba(0,0,0,0.4),inset_0_-2px_3px_rgba(51,65,85,0.4)] border border-[#f1f5f9] overflow-hidden"
        >
          {/* Crater 1 (Top Left) */}
          <div className="absolute top-[5px] left-[5px] w-[8px] h-[8px] rounded-full bg-[#94a3b8]/45 shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]" />
          {/* Crater 2 (Bottom Left) */}
          <div className="absolute bottom-[4px] left-[8px] w-[10px] h-[10px] rounded-full bg-[#94a3b8]/45 shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]" />
          {/* Crater 3 (Right) */}
          <div className="absolute top-[10px] right-[4px] w-[7px] h-[7px] rounded-full bg-[#94a3b8]/45 shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]" />
        </motion.div>
      </motion.div>
    </button>
  );
}
