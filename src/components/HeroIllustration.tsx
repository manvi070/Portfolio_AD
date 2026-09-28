"use client";

import React from "react";

interface IllustrationProps {
  type: "research" | "analyse" | "ideate" | "design";
  className?: string;
}

export default function HeroIllustration({ type, className = "" }: IllustrationProps) {
  switch (type) {
    case "research":
      return <ResearchIllustration className={className} />;
    case "analyse":
      return <AnalyseIllustration className={className} />;
    case "ideate":
      return <IdeateIllustration className={className} />;
    case "design":
      return <DesignIllustration className={className} />;
    default:
      return null;
  }
}

// 1. RESEARCH
function ResearchIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 180 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-foreground transition-colors duration-300 overflow-visible"
      >
        <defs>
          <pattern id="pixel-grid-1" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" opacity="0.12" />
          </pattern>
          <linearGradient id="lens-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <rect x="25" y="15" width="130" height="120" rx="10" fill="url(#pixel-grid-1)" />

        <g transform="translate(32, 22)">
          <rect x="0" y="0" width="60" height="75" rx="6" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
          
          <rect x="8" y="8" width="24" height="4" rx="2" fill="currentColor" opacity="0.4" />
          <line x1="8" y1="16" x2="52" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />

          <g transform="translate(8, 22)">
            <rect x="0" y="0" width="10" height="10" rx="2" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.2" />
            <path d="M 2 5 L 4 8 L 8 2" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="14" y="3" width="28" height="4" rx="1" fill="currentColor" opacity="0.6" />

            <g transform="translate(0, 16)">
              <rect x="0" y="0" width="10" height="10" rx="2" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.2" />
              <path d="M 2 5 L 4 8 L 8 2" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14" y="3" width="22" height="4" rx="1" fill="currentColor" opacity="0.5" />
            </g>

            <g transform="translate(0, 32)">
              <rect x="0" y="0" width="10" height="10" rx="2" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.2" />
              <path d="M 2 5 L 4 8 L 8 2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14" y="3" width="30" height="4" rx="1" fill="currentColor" opacity="0.6" />
            </g>
          </g>
        </g>

        <g transform="translate(52, 48)">
          <rect x="33" y="16" width="8" height="14" rx="3" fill="currentColor" opacity="0.8" />
          <line x1="28" y1="23" x2="46" y2="23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

          <g>
            <rect x="6" y="8" width="24" height="40" rx="5" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="28" r="10" fill="url(#lens-glow)" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="18" cy="28" r="4" fill="#38BDF8" fillOpacity="0.6" />
            <rect x="4" y="44" width="28" height="7" rx="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
          </g>

          <g transform="translate(42, 0)">
            <rect x="6" y="8" width="24" height="40" rx="5" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="28" r="10" fill="url(#lens-glow)" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="18" cy="28" r="4" fill="#F59E0B" fillOpacity="0.6" />
            <rect x="4" y="44" width="28" height="7" rx="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
          </g>

          <rect x="11" y="2" width="14" height="7" rx="2" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="53" y="2" width="14" height="7" rx="2" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.5" />
        </g>

        <g transform="translate(130, 38)" opacity="0.7">
          <circle cx="0" cy="0" r="14" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          <line x1="-18" y1="0" x2="-10" y2="0" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="10" y1="0" x2="18" y2="0" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="0" y1="-18" x2="0" y2="-10" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="0" y1="10" x2="0" y2="18" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="2" fill="#F59E0B" />
        </g>

        <path d="M 28 30 L 30 35 L 35 37 L 30 39 L 28 44 L 26 39 L 21 37 L 26 35 Z" fill="#F59E0B" opacity="0.8" />
        <path d="M 148 108 L 150 112 L 154 114 L 150 116 L 148 120 L 146 116 L 142 114 L 146 112 Z" fill="#38BDF8" opacity="0.8" />
      </svg>
    </div>
  );
}

// 2. ANALYSE
function AnalyseIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 180 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-foreground transition-colors duration-300 overflow-visible"
      >
        <defs>
          <pattern id="pixel-grid-2" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" opacity="0.12" />
          </pattern>
        </defs>

        <rect x="25" y="15" width="130" height="120" rx="10" fill="url(#pixel-grid-2)" />

        <g transform="translate(45, 20)">
          <path
            d="M 28 12 C 20 12 14 18 14 26 C 9 28 7 35 9 42 C 7 48 11 55 18 57 C 22 64 32 66 40 62 C 48 66 58 64 62 57 C 69 55 73 48 71 42 C 73 35 71 28 66 26 C 66 18 60 12 52 12 C 46 7 34 7 28 12 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            fill="currentColor"
            fillOpacity="0.03"
          />

          <line x1="28" y1="24" x2="40" y2="34" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.7" />
          <line x1="40" y1="34" x2="55" y2="24" stroke="#38BDF8" strokeWidth="1.5" opacity="0.7" />
          <line x1="40" y1="34" x2="40" y2="52" stroke="#EC4899" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.8" />
          <line x1="28" y1="45" x2="40" y2="52" stroke="#10B981" strokeWidth="1.5" opacity="0.7" />
          <line x1="55" y1="45" x2="40" y2="52" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />

          <circle cx="28" cy="24" r="3.5" fill="#8B5CF6" />
          <circle cx="55" cy="24" r="3.5" fill="#38BDF8" />
          <circle cx="40" cy="34" r="4.5" fill="#EC4899" />
          <circle cx="28" cy="45" r="3.5" fill="#10B981" />
          <circle cx="55" cy="45" r="3.5" fill="#F59E0B" />
          <circle cx="40" cy="52" r="3.5" fill="#38BDF8" />
        </g>

        <g transform="translate(35, 28)">
          <path d="M 78 78 L 108 108" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
          <path d="M 78 78 L 108 108" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

          <circle cx="50" cy="50" r="35" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />

          <rect x="28" y="58" width="7" height="14" rx="2" fill="#38BDF8" />
          <rect x="38" y="46" width="7" height="26" rx="2" fill="#8B5CF6" />
          <rect x="48" y="36" width="7" height="36" rx="2" fill="#EC4899" />
          <rect x="58" y="42" width="7" height="30" rx="2" fill="#F59E0B" />
          <rect x="68" y="52" width="7" height="20" rx="2" fill="#10B981" />

          <path d="M 31 54 L 41 42 L 51 32 L 61 38 L 71 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="51" cy="32" r="3.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
        </g>

        <g transform="translate(115, 22)">
          <rect x="0" y="0" width="42" height="18" rx="9" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="21" y="12" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">+42%</text>
        </g>
      </svg>
    </div>
  );
}

// 3. IDEATE
function IdeateIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 180 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-foreground transition-colors duration-300 overflow-visible"
      >
        <defs>
          <pattern id="pixel-grid-3" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" opacity="0.12" />
          </pattern>
        </defs>

        <rect x="25" y="15" width="130" height="120" rx="10" fill="url(#pixel-grid-3)" />

        <g transform="translate(20, 24)">
          <g transform="translate(8, 20)">
            <rect x="0" y="0" width="36" height="18" rx="4" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="1.2" />
            <text x="18" y="12" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">FLOW A</text>
          </g>

          <path d="M 44 29 L 65 29 L 65 45" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" />

          <g transform="translate(96, 20)">
            <rect x="0" y="0" width="36" height="18" rx="4" fill="#EC4899" fillOpacity="0.15" stroke="#EC4899" strokeWidth="1.2" />
            <text x="18" y="12" fill="#EC4899" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">STATE B</text>
          </g>

          <path d="M 96 29 L 75 29 L 75 45" stroke="#EC4899" strokeWidth="1.5" strokeDasharray="3 2" />

          <g transform="translate(52, 94)">
            <rect x="0" y="0" width="36" height="16" rx="8" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.2" />
            <text x="18" y="11" fill="#10B981" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">RESULT</text>
          </g>
          <line x1="70" y1="84" x2="70" y2="94" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 2" />
        </g>

        <g transform="translate(60, 20)">
          <line x1="30" y1="2" x2="30" y2="9" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="8" y1="12" x2="14" y2="17" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="52" y1="12" x2="46" y2="17" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="2" y1="32" x2="8" y2="32" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="58" y1="32" x2="52" y2="32" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

          <path
            d="M 14 32 C 14 22 21 16 30 16 C 39 16 46 22 46 32 C 46 39 42 44 40 50 L 20 50 C 18 44 14 39 14 32 Z"
            fill="#F59E0B"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <path d="M 24 50 L 24 38 Q 30 26 36 38 L 36 50" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="30" cy="28" r="4.5" fill="#F59E0B" />

          <rect x="22" y="51" width="16" height="5" rx="1.5" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="1" />
          <rect x="23" y="57" width="14" height="4" rx="1.5" fill="currentColor" opacity="0.6" stroke="currentColor" strokeWidth="1" />
          <path d="M 25 62 L 35 62 L 30 67 Z" fill="currentColor" opacity="0.8" />
        </g>

        <path d="M 22 100 L 24 104 L 28 106 L 24 108 L 22 112 L 20 108 L 16 106 L 20 104 Z" fill="#F59E0B" />
        <path d="M 152 28 L 154 32 L 158 34 L 154 36 L 152 40 L 150 36 L 146 34 L 150 32 Z" fill="#EC4899" />
      </svg>
    </div>
  );
}

// 4. DESIGN
function DesignIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-foreground transition-colors duration-300 overflow-visible"
      >
        <defs>
          <pattern id="pixel-grid-4" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" opacity="0.12" />
          </pattern>
        </defs>

        <g transform="translate(142, 10)">
          <path
            d="M 22 0 L 26 12 L 38 4 L 32 16 L 44 22 L 32 28 L 38 40 L 26 32 L 22 44 L 18 32 L 6 40 L 12 28 L 0 22 L 12 16 L 6 4 L 18 12 Z"
            fill="#06B6D4"
            stroke="#000000"
            strokeWidth="1.2"
          />
        </g>

        <g opacity="0.85" transform="translate(18, 75)">
          <path
            d="M 38 45 C 32 35 24 22 20 10 C 18 5 12 0 6 -8 L 0 -4 C 4 8 12 20 18 32 C 24 44 28 58 32 75 Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>

        <g transform="translate(60, 20)">
          <rect
            x="0"
            y="0"
            width="80"
            height="115"
            rx="8"
            fill="#000000"
            stroke="currentColor"
            strokeWidth="2"
          />

          <rect
            x="3"
            y="3"
            width="74"
            height="109"
            rx="6"
            fill="currentColor"
            fillOpacity="0.05"
            stroke="currentColor"
            strokeWidth="1"
          />

          <rect x="6" y="6" width="68" height="10" rx="2" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="10" cy="11" r="1" fill="#EF4444" />
          <circle cx="14" cy="11" r="1" fill="#F59E0B" />
          <circle cx="18" cy="11" r="1" fill="#10B981" />
          <rect x="22" y="8" width="48" height="6" rx="1.5" fill="currentColor" fillOpacity="0.15" />

          <g transform="translate(6, 18)">
            <rect x="0" y="0" width="68" height="28" rx="3" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="0" y1="0" x2="68" y2="28" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
            <line x1="68" y1="0" x2="0" y2="28" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
          </g>

          <g transform="translate(6, 50)">
            <rect x="0" y="0" width="20" height="18" rx="2" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="0.8" />
            <rect x="24" y="0" width="20" height="18" rx="2" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="0.8" />
            <rect x="48" y="0" width="20" height="18" rx="2" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="0.8" />
          </g>

          <g transform="translate(6, 72)">
            <rect x="0" y="0" width="14" height="16" rx="1.5" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="0.8" />
            <rect x="18" y="0" width="14" height="16" rx="1.5" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="0.8" />
            <rect x="36" y="0" width="14" height="16" rx="1.5" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="0.8" />
            <rect x="54" y="0" width="14" height="16" rx="1.5" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="0.8" />
          </g>

          <g transform="translate(6, 94)">
            <rect x="0" y="0" width="18" height="8" rx="2" fill="#06B6D4" />
            <text x="9" y="6" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" textAnchor="middle">Menu</text>

            <rect x="21" y="0" width="18" height="8" rx="2" fill="#06B6D4" />
            <text x="30" y="6" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" textAnchor="middle">Item</text>

            <rect x="42" y="0" width="22" height="8" rx="2" fill="#06B6D4" />
            <text x="53" y="6" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" textAnchor="middle">Action</text>
          </g>
        </g>

        <g transform="translate(118, 105)">
          <path
            d="M 28 60 C 24 45 18 35 12 25 L 5 8 C 3 4 -1 2 -5 4 C -9 6 -9 12 -6 16 L 2 30 C -2 30 -6 32 -8 36 C -10 40 -8 44 -4 46 C 4 52 12 58 20 65 Z"
            fill="#EAB308"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <circle cx="2" cy="6" r="4" fill="#EAB308" stroke="#FFFFFF" strokeWidth="1" />
        </g>

        <g transform="translate(28, 22)">
          <path
            d="M 0 0 L 12 14 L 7 15 L 10 23 L 7 24 L 4 16 L 0 18 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="1.5"
          />
        </g>

        <g transform="translate(42, 12)">
          <path d="M 0 10 Q 12 0 24 10" stroke="#EC4899" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
          <rect x="-3" y="7" width="6" height="6" fill="#EC4899" stroke="#FFFFFF" strokeWidth="1" />
          <rect x="21" y="7" width="6" height="6" fill="#EC4899" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M 12 2 L 18 10 L 14 12 L 10 12 L 6 10 Z" fill="currentColor" stroke="#000000" strokeWidth="1" />
        </g>

        <g transform="translate(132, 82)">
          <rect x="0" y="0" width="45" height="14" rx="3" fill="#F59E0B" stroke="#000000" strokeWidth="1.2" />
          <text x="20" y="10" fill="#000000" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Search</text>
          <circle cx="38" cy="7" r="3" fill="none" stroke="#000000" strokeWidth="1" />
          <line x1="40" y1="9" x2="42" y2="11" stroke="#000000" strokeWidth="1" />

          <g transform="translate(24, 12)">
            <path
              d="M 0 0 L 0 10 L 3 8 L 6 14 L 8 13 L 5 7 L 9 7 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
