"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowDown, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import Contact from "@/components/Contact";

/**
 * -----------------------------------------------------------------------
 * INLAY PROJECT TEMPLATE (Mirrored from Cosmo)
 * -----------------------------------------------------------------------
 * You can replace text descriptions, titles, and image paths below.
 * Replace placeholder image paths with your actual project assets in:
 * /public/images/projects/INLAY/...
 */

// 1. Switchable exploration tabs data
const explorationTabs = [
  {
    id: "explorations",
    label: "Explorations",
    src: "/images/projects/INLAY/sketch.png",
    alt: "Inlay Concept Explorations",
  },
  {
    id: "renders",
    label: "3d renders",
    src: "/images/projects/INLAY/renders.png",
    alt: "Inlay 3D Renders",
  },
] as const;

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

// 2. Final Prototypes products data (2 mirrors)
const finalCollectionProducts: ProductItem[] = [
  {
    id: "mirror-1",
    number: "1.",
    name: "Mirror 1",
    description:
      "Brass inlay pattern on stainless steel body, granite (stone base)",
    images: [
      {
        id: "mr1",
        src: "/images/projects/INLAY/mr1.png",
        alt: "Mirror 1 - Full Silhouette",
        title: "Full Silhouette",
      },
      {
        id: "d2",
        src: "/images/projects/INLAY/d2.png",
        alt: "Mirror 1 - Brass Inlay Detail",
        title: "Brass Inlay Detail",
      },
    ],
  },
  {
    id: "mirror-2",
    number: "2.",
    name: "Mirror 2",
    description:
      "Brass inlay pattern on stainless steel body, granite (stone base)",
    images: [
      {
        id: "mr2",
        src: "/images/projects/INLAY/mr2.png",
        alt: "Mirror 2 - Full Silhouette",
        title: "Full Silhouette",
      },
      {
        id: "d1",
        src: "/images/projects/INLAY/d1.png",
        alt: "Mirror 2 - Brass Inlay Detail",
        title: "Brass Inlay Detail",
      },
    ],
  },
];

export default function InlayProjectPage() {
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
          <span className="text-stone-900 font-semibold">Inlay</span>
        </motion.div>

        {/* HERO & BRIEF SECTION: Cover Image on Left, Title/Mirrors/Brief on Right */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full pt-2 sm:pt-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Cover Image (cover.png) */}
            <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border border-black/8 bg-stone-50">
              <img
                src="/images/projects/INLAY/cover.png"
                alt="Inlay Project Cover"
                className="w-full h-auto block rounded-2xl sm:rounded-3xl"
                loading="eager"
              />
            </div>

            {/* Right Column: Title, Subtitle (Mirrors), CTA & Brief */}
            <div className="flex flex-col gap-6 sm:gap-8 justify-center">
              
              {/* Title & Subtitle */}
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-stone-950">
                  Inlay
                </h1>
                <span className="text-lg sm:text-xl md:text-2xl font-mono text-stone-700 font-medium tracking-tight">
                  Mirrors
                </span>
              </div>

              {/* See Final Prototypes CTA Button */}
              <div>
                <a
                  href="#final-prototypes"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("final-prototypes")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2.5 self-start px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#fcedc7]/90 via-[#f8e0a8]/85 to-[#eed290]/90 hover:from-[#fef1d2] hover:via-[#fae7b9] hover:to-[#f2dca3] text-[#52390f] hover:text-[#382607] border border-[#d4af37]/50 hover:border-[#c59b38]/80 backdrop-blur-md shadow-[0_4px_18px_rgba(197,155,56,0.28)] hover:shadow-[0_6px_24px_rgba(197,155,56,0.42)] text-xs sm:text-sm font-mono font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="tracking-tight">See Final Prototypes</span>
                  <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8f641b] group-hover:text-[#422c07] transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>

              {/* Brief Heading & Content */}
              <div className="flex flex-col gap-3 sm:gap-4 pt-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-stone-950 tracking-tight">
                  Brief
                </h2>

                <p className="text-sm sm:text-base md:text-[17px] text-stone-600 leading-relaxed font-sans font-normal">
                  Design a contemporary collection inspired by a traditional Indian metal craft . The collection should merge craft heritage with modern forms, focusing on clean lines, minimalism, and functionality. Create pieces across home d&eacute;cor or table top accessories. The final design must reinterpret traditional techniques in an innovative way that appeals to a modern, design-conscious audience.
                </p>
              </div>

            </div>

          </div>
        </motion.section>

        {/* CONCEPT DEVELOPED SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full pt-6 sm:pt-10 md:pt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Concept Content */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-stone-950 tracking-tight">
                Concept Developed
              </h2>

              <p className="text-sm sm:text-base md:text-[17px] text-stone-600 leading-relaxed font-sans font-normal">
                Inlay is a contemporary tabletop accessory collection for an entryway table inspired by the metal inlay technique. The collection merge traditional craft with modern, minimalist forms giving it a unique , modern touch.
              </p>
            </div>

            {/* Next to it: Brainstorming Image */}
            <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-black/8 shadow-md bg-stone-50">
              <img
                src="/images/projects/INLAY/brainstorming.jpg"
                alt="Inlay Concept Development & Brainstorming"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                loading="lazy"
              />
            </div>
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
                        layoutId="inlayActiveTab"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ecd39b]/70 via-[#fae8be]/85 to-[#dec078]/70 border border-[#c59b38]/45 backdrop-blur-md shadow-[0_2px_14px_rgba(197,155,56,0.22)]"
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
          <div className="w-full h-[32vh] sm:h-[62vh] md:h-[68vh] lg:h-[74vh] max-h-[760px] min-h-[220px] sm:min-h-[360px] overflow-hidden rounded-2xl sm:rounded-3xl border border-black/8 shadow-md bg-[#ffffff] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center p-2 sm:p-4"
              >
                <img
                  src={currentTab.src}
                  alt={currentTab.alt}
                  className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

      </div>

      {/* FINAL PROTOTYPES SECTION - Pure Black Background #000000 */}
      <motion.section
        id="final-prototypes"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="dark w-full bg-[#000000] text-white pt-10 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 mt-8 sm:mt-16 md:mt-24 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-20 flex flex-col gap-8 sm:gap-12"
      >
        {/* Section Divider & Header */}
        <div className="border-b border-white/20 pb-4 sm:pb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white tracking-tight">
            Final Prototypes
          </h2>
        </div>

        {/* Products in Final Prototypes */}
        <div className="flex flex-col">
          {finalCollectionProducts.map((product, index) => {
            // Alternating layout:
            // 1st product (index 0): Image on Left, Text on Right
            // 2nd product (index 1): Text on Left, Image on Right (vice versa)
            const isImageLeft = index % 2 === 0;

            return (
              <React.Fragment key={product.id}>
                {index > 0 && (
                  <div className="w-full border-t border-white/15 my-12 sm:my-16 md:my-20" />
                )}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
                  {/* Product Info & Description */}
                  <div
                    className={`lg:col-span-5 flex flex-col gap-3 sm:gap-4 pt-1 ${
                      isImageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-[#E0B88A] tracking-tight">
                      {product.number} {product.name}
                    </h3>

                    <p className="text-sm sm:text-base md:text-[17px] text-stone-300 leading-relaxed font-sans font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Dynamic Collage Layout */}
                  <div
                    className={`lg:col-span-7 w-full ${
                      isImageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  >
                  {product.images.length === 2 ? (
                    /* 2-Image Diptych Collage */
                    <div className="w-full grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                      {product.images.map((img, imgIdx) => (
                        <div
                          key={img.id}
                          onClick={() => setActiveGallery({ images: product.images, index: imgIdx })}
                          className="group relative aspect-[3/4] w-full rounded-[8px] border border-white/10 overflow-hidden cursor-pointer bg-neutral-950/60 shadow-lg transition-all duration-300 hover:border-white/35 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
                          title="Click to open full preview"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                            <span className="p-1.5 rounded-[4px] bg-black/70 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* 4-Image Collage */
                    <div className="w-full grid grid-cols-12 gap-3 sm:gap-4 h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px]">
                      {/* Image 1: Main Full-Height Silhouette (Col span 5) */}
                      <div
                        onClick={() => setActiveGallery({ images: product.images, index: 0 })}
                        className="col-span-5 relative h-full min-h-0 rounded-[8px] border border-white/10 overflow-hidden cursor-pointer group p-0 transition-all duration-300 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.07)]"
                        title="Click to open full preview"
                      >
                        <img
                          src={product.images[0].src}
                          alt={product.images[0].alt}
                          className="w-full h-full object-cover object-center select-none transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-end justify-end p-2 pointer-events-none">
                          <span className="p-1.5 rounded-[6px] bg-black/70 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* Right Stack: Image 2 (top) + Images 3 & 4 (bottom) (Col span 7) */}
                      <div className="col-span-7 grid grid-rows-2 gap-3 sm:gap-4 h-full min-h-0">
                        {/* Image 2: Perspective View (Landscape) */}
                        <div
                          onClick={() => setActiveGallery({ images: product.images, index: 1 })}
                          className="relative h-full min-h-0 rounded-[8px] border border-white/10 overflow-hidden cursor-pointer group p-0 transition-all duration-300 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.07)]"
                          title="Click to open full preview"
                        >
                          <img
                            src={product.images[1].src}
                            alt={product.images[1].alt}
                            className="w-full h-full object-cover object-center select-none transition-transform duration-300 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-end justify-end p-2 pointer-events-none">
                            <span className="p-1.5 rounded-[6px] bg-black/70 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>

                        {/* Bottom Row: Detail Images 3 & 4 side-by-side */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full min-h-0">
                          {/* Image 3: Detail View */}
                          <div
                            onClick={() => setActiveGallery({ images: product.images, index: 2 })}
                            className="relative h-full min-h-0 rounded-[8px] border border-white/10 overflow-hidden cursor-pointer group p-0 transition-all duration-300 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.07)]"
                            title="Click to open full preview"
                          >
                            <img
                              src={product.images[2].src}
                              alt={product.images[2].alt}
                              className="w-full h-full object-cover object-center select-none transition-transform duration-300 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-end justify-end p-1.5 pointer-events-none">
                              <span className="p-1 rounded-[4px] bg-black/70 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                                <Maximize2 className="w-3 h-3" />
                              </span>
                            </div>
                          </div>

                          {/* Image 4: Joint Detail */}
                          <div
                            onClick={() => setActiveGallery({ images: product.images, index: 3 })}
                            className="relative h-full min-h-0 rounded-[8px] border border-white/10 overflow-hidden cursor-pointer group p-0 transition-all duration-300 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.07)]"
                            title="Click to open full preview"
                          >
                            <img
                              src={product.images[3].src}
                              alt={product.images[3].alt}
                              className="w-full h-full object-cover object-center select-none transition-transform duration-300 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-end justify-end p-1.5 pointer-events-none">
                              <span className="p-1 rounded-[4px] bg-black/70 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                                <Maximize2 className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Under Mirror 2: Full Width Process Image */}
              {product.id === "mirror-2" && (
                <div className="w-full mt-16 sm:mt-20 md:mt-24 lg:mt-28">
                  <div className="w-full rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden bg-neutral-950/60 shadow-lg">
                    <img
                      src="/images/projects/INLAY/process.png"
                      alt="Mirror Making & Prototyping Process"
                      className="w-full h-auto object-cover select-none block"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
        </div>

        {/* Bottom Navigation: Back to Work Button */}
        <div className="flex items-center justify-start w-full pt-6 sm:pt-10">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md shadow-md text-xs sm:text-sm font-mono font-medium transition-all duration-300 hover:-translate-x-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-stone-300 group-hover:text-white transition-transform group-hover:-translate-x-1" />
            <span>Back to Work</span>
          </Link>
        </div>

        {/* Default Footer / Contact Section Frame */}
        <div className="w-full pt-6 sm:pt-10">
          <div className="rounded-[32px] sm:rounded-[44px] bg-neutral-900/60 backdrop-blur-3xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.08)] transition-all duration-500">
            <Contact darkBg={true} />
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
