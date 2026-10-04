"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowDown, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import Contact from "@/components/Contact";

/**
 * -----------------------------------------------------------------------
 * BLOOM PROJECT TEMPLATE (Mirrored from Inlay layout)
 * -----------------------------------------------------------------------
 * You can replace text descriptions, titles, and image paths below.
 * Add/replace project assets in: /public/images/projects/Bloom/...
 */

// 1. Switchable exploration tabs data
export interface ExplorationImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export interface ExplorationTabItem {
  id: "explorations" | "renders" | "pattern";
  label: string;
  images: readonly ExplorationImage[];
}

const explorationTabs: readonly ExplorationTabItem[] = [
  {
    id: "explorations",
    label: "Explorations",
    images: [
      {
        id: "sketch",
        src: "/images/projects/Bloom/sketch.png",
        alt: "Bloom Concept Explorations",
        title: "Concept Explorations & Form Studies",
      },
    ],
  },
  {
    id: "renders",
    label: "3d model",
    images: [
      {
        id: "render-16",
        src: "/images/projects/Bloom/16.png",
        alt: "Bloom 3D CAD Renders & Table Top Shape Development",
        title: "Table Top Shape Development & 3D Model",
      },
    ],
  },
  {
    id: "pattern",
    label: "final pattern",
    images: [
      {
        id: "pattern-17",
        src: "/images/projects/Bloom/17.png",
        alt: "Bloom Botanical Pattern Motifs Variation 1",
        title: "Botanical Motifs - Outline & Colored Details",
      },
      {
        id: "pattern-18",
        src: "/images/projects/Bloom/18.png",
        alt: "Bloom Botanical Pattern Motifs Variation 2",
        title: "Botanical Motifs - Extended Composition",
      },
    ],
  },
];

type TabId = (typeof explorationTabs)[number]["id"];

export interface ProductItem {
  id: string;
  number: string;
  name: string;
  description: React.ReactNode;
  images: readonly {
    id: string;
    src: string;
    alt: string;
    title: string;
  }[];
}

// 2. Final Product images & description data
const finalProductImages = [
  {
    id: "bloom-final-1",
    src: "/images/projects/Bloom/1.jpg",
    alt: "Bloom Final Product - Handcrafted Stool Perspective View",
    title: "Bloom Stool - Perspective View",
  },
  {
    id: "bloom-final-2",
    src: "/images/projects/Bloom/2.jpg",
    alt: "Bloom Final Product - Elevated Pedestal Detail",
    title: "Bloom Stool - Elevated Pedestal Detail",
  },
  {
    id: "bloom-final-4",
    src: "/images/projects/Bloom/4.jpg",
    alt: "Bloom Final Product - Hand-Painted Rangoli Motifs Detail",
    title: "Bloom Stool - Hand-Painted Rangoli Motifs",
  },
  {
    id: "bloom-final-5",
    src: "/images/projects/Bloom/5.jpg",
    alt: "Bloom Final Product - Full Silhouette View",
    title: "Bloom Stool - Silhouette View",
  },
] as const;

const finalProductDescription =
  "The fluid silhouette evokes a blossomed petal form, complemented by hand-painted motifs inspired by traditional rangoli art. An elevated pillar functions as a dedicated pedestal for a diya or incense, grounding the piece in purification, warmth, and quiet celebration.";

export default function BloomProjectPage() {
  const [activeTab, setActiveTab] = useState<TabId>("explorations");
  const currentTab = explorationTabs.find((tab) => tab.id === activeTab) || explorationTabs[0];

  const [activeGallery, setActiveGallery] = useState<{
    images: readonly { id: string; src: string; alt: string; title: string }[];
    index: number;
  } | null>(null);

  const nextPreviewImage = useCallback(() => {
    setActiveGallery((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index + 1) % prev.images.length,
      };
    });
  }, []);

  const prevPreviewImage = useCallback(() => {
    setActiveGallery((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index - 1 + prev.images.length) % prev.images.length,
      };
    });
  }, []);

  const closePreview = useCallback(() => {
    setActiveGallery(null);
  }, []);

  useEffect(() => {
    if (activeGallery === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowRight") nextPreviewImage();
      if (e.key === "ArrowLeft") prevPreviewImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery, closePreview, nextPreviewImage, prevPreviewImage]);

  return (
    <main className="relative flex flex-col min-h-screen pb-0 bg-[#ffffff] text-[#1a1a1a] transition-colors duration-500">
      
      {/* Background layer ensuring solid #ffffff coverage */}
      <div className="fixed inset-0 bg-[#ffffff] -z-10" />

      {/* Top Spacer for Fixed Navbar */}
      <div className="h-24 sm:h-28 md:h-32" />

      {/* Main Content Container: Left-Right margin max 100px, content fills max width */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-[100px] flex flex-col gap-8 sm:gap-10">
        
        {/* Top Breadcrumbs (Aligned to Left) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 w-full text-xs sm:text-sm font-mono text-stone-400"
        >
          <Link
            href="/#work"
            className="text-stone-500 hover:text-stone-900 transition-colors cursor-pointer hover:underline"
          >
            Work
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">Bloom</span>
        </motion.div>

        {/* HERO & BRIEF SECTION: Full Image 5.png on Left (scaled to fit viewport), Title/Furniture/CTA/Brief on Right */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full pt-2 sm:pt-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Full Image (5.png) scaled down to fit viewport */}
            <div className="w-full flex items-center justify-center">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border border-black/8 bg-stone-50 max-h-[66vh] sm:max-h-[70vh] lg:max-h-[75vh] flex items-center justify-center">
                <img
                  src="/images/projects/Bloom/5.png"
                  alt="Bloom Project Cover"
                  className="w-auto h-auto max-h-[66vh] sm:max-h-[70vh] lg:max-h-[75vh] max-w-full object-contain block rounded-2xl sm:rounded-3xl select-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Column: Title, Subtitle, CTA & Brief */}
            <div className="flex flex-col gap-6 sm:gap-8 justify-center">
              
              {/* Title & Subtitle */}
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-stone-950">
                  Bloom
                </h1>
                <span className="text-lg sm:text-xl md:text-2xl font-mono text-stone-700 font-medium tracking-tight">
                  Furniture
                </span>
              </div>

              {/* See Final Product CTA Button */}
              <div>
                <a
                  href="#final-product"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("final-product")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2.5 self-start px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#ffe4ec]/95 via-[#fcd0df]/90 to-[#f9b8cf]/95 hover:from-[#fff0f5] hover:via-[#fde2ec] hover:to-[#fbc8db] text-[#831843] hover:text-[#500724] border border-[#f472b6]/40 hover:border-[#db2777]/60 backdrop-blur-md shadow-[0_4px_18px_rgba(219,39,119,0.22)] hover:shadow-[0_6px_24px_rgba(219,39,119,0.35)] text-xs sm:text-sm font-mono font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="tracking-tight">See Final Product</span>
                  <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#be185d] group-hover:text-[#831843] transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>

              {/* Concept Heading & Content */}
              <div className="flex flex-col gap-3 sm:gap-4 pt-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-stone-950 tracking-tight">
                  Concept
                </h2>

                <p className="text-sm sm:text-base md:text-[17px] text-stone-600 leading-relaxed font-sans font-normal">
                  Bloom translates the festive spirit of Indian homes into contemporary furniture. Inspired by the indian festivals and traditional botanical enameling, reimagines sacred celebration for modern living. Its organic tri-lobed silhouette echoes a flower in bloom.
                </p>
              </div>

            </div>

          </div>
        </motion.section>

        {/* MOODBOARD SECTION: board.png in full width under hero section (No preview/hover) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full pt-4 sm:pt-6"
        >
          <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-black/8 shadow-md bg-stone-50">
            <img
              src="/images/projects/Bloom/board.png"
              alt="Bloom Concept & Moodboard"
              className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl select-none block"
              loading="lazy"
            />
          </div>
        </motion.section>

        {/* SWITCHABLE EXPLORATION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full pt-6 sm:pt-12 md:pt-16 flex flex-col gap-4 sm:gap-8 items-center"
        >
          {/* Centered Glassy Switchable Toggle */}
          <div className="flex justify-center items-center w-full">
            <div className="inline-flex items-center p-1.5 rounded-full bg-stone-200/40 backdrop-blur-xl border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] gap-1 sm:gap-2">
              {explorationTabs.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium transition-colors duration-200 select-none ${
                      isSelected
                        ? "text-stone-950 font-semibold"
                        : "text-stone-600 hover:text-stone-950"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="bloomActiveTab"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffe4ec]/80 via-[#fcd0df]/90 to-[#f9b8cf]/80 border border-[#f472b6]/45 backdrop-blur-md shadow-[0_2px_14px_rgba(219,39,119,0.18)]"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Standard Screen-Adapted Frame */}
          <div className="w-full h-[36vh] sm:h-[62vh] md:h-[68vh] lg:h-[74vh] max-h-[760px] min-h-[260px] sm:min-h-[380px] overflow-hidden rounded-2xl sm:rounded-3xl border border-black/8 shadow-md bg-[#ffffff] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6"
              >
                {currentTab.images.length === 1 ? (
                  <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                    <img
                      src={currentTab.images[0].src}
                      alt={currentTab.images[0].alt}
                      className="w-full h-full object-contain rounded-xl sm:rounded-2xl select-none"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-center justify-center">
                    {currentTab.images.map((img) => (
                      <div
                        key={img.id}
                        className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-stone-50/50 p-2 sm:p-3 shadow-sm"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="max-h-full max-w-full object-contain rounded-lg select-none"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* PROCESS SECTION: Full width process.png above final product */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full pt-4 sm:pt-8 md:pt-10"
        >
          <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-black/8 shadow-md bg-stone-50">
            <img
              src="/images/projects/Bloom/process.png"
              alt="Bloom Making & Prototyping Process"
              className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl select-none block"
              loading="lazy"
            />
          </div>
        </motion.section>

      </div>

      {/* FINAL PRODUCT SECTION - Clean White Background */}
      <motion.section
        id="final-product"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full bg-[#ffffff] text-[#1a1a1a] pt-10 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 mt-8 sm:mt-16 md:mt-24 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-20 flex flex-col gap-8 sm:gap-12"
      >
        {/* Section Divider & Header */}
        <div className="border-b border-black/10 pb-4 sm:pb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-stone-950 tracking-tight">
            Final Product
          </h2>
        </div>

        {/* Final Product Description (no title) */}
        <p className="text-sm sm:text-base md:text-[17px] text-stone-600 leading-relaxed font-sans font-normal max-w-4xl">
          {finalProductDescription}
        </p>

        {/* 4 Images Stacked Horizontally Under Description */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full">
          {finalProductImages.map((img, imgIdx) => (
            <div
              key={img.id}
              onClick={() => setActiveGallery({ images: finalProductImages, index: imgIdx })}
              className="group relative aspect-[3/4] w-full rounded-[8px] sm:rounded-[10px] border border-black/10 overflow-hidden cursor-pointer bg-stone-50 shadow-sm transition-all duration-300 hover:border-black/30 hover:shadow-md"
              title="Click to open full preview"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-end justify-end p-2 sm:p-2.5 pointer-events-none">
                <span className="p-1.5 rounded-[4px] bg-black/75 text-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation: Back to Work Button */}
        <div className="flex items-center justify-start w-full pt-6 sm:pt-10">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200/80 backdrop-blur-md shadow-sm text-xs sm:text-sm font-mono font-medium transition-all duration-300 hover:-translate-x-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-stone-600 group-hover:text-stone-900 transition-transform group-hover:-translate-x-1" />
            <span>Back to Work</span>
          </Link>
        </div>

        {/* Default Footer / Contact Section Frame */}
        <div className="w-full pt-6 sm:pt-10">
          <div className="rounded-[32px] sm:rounded-[44px] bg-stone-100/80 backdrop-blur-2xl border border-stone-200/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] transition-all duration-500">
            <Contact darkBg={false} />
          </div>
        </div>
      </motion.section>

      {/* Full Preview Lightbox Modal */}
      <AnimatePresence>
        {activeGallery !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closePreview}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          >
            {/* Close / Cross Button */}
            <button
              onClick={closePreview}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15 shadow-lg"
              aria-label="Close preview"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Back / Prev Button */}
            {activeGallery.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevPreviewImage();
                }}
                className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer shadow-2xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Central Main Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGallery.index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative max-h-[85vh] sm:max-h-[88vh] max-w-[85vw] sm:max-w-[88vw] flex items-center justify-center pointer-events-auto"
                >
                  <img
                    src={activeGallery.images[activeGallery.index].src}
                    alt={activeGallery.images[activeGallery.index].alt}
                    className="max-h-[85vh] sm:max-h-[88vh] max-w-full object-contain rounded-[8px] drop-shadow-2xl select-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            {activeGallery.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPreviewImage();
                }}
                className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer shadow-2xl"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
