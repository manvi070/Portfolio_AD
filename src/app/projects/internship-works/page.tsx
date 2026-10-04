"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import Contact from "@/components/Contact";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface ProjectSection {
  id: string;
  number: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

const internshipProjects: ProjectSection[] = [
  {
    id: "table-designs",
    number: "1.",
    title: "Table designs",
    description:
      "A collection of contemporary coffee, dining, and entryway console tables developed for client pitches. The designs explore the structural and visual possibilities of bent sheet metal—contrasting cylindrical folded black coated steel with warm antique brass surfaces and stained walnut timber. Each piece balances monolithic presence with refined edge detailing and concealed functional storage.",
    images: [
      {
        id: "tables-overview",
        src: "/images/projects/Internship projects/tables.png",
        alt: "Table designs collection overview",
      },
      {
        id: "t1",
        src: "/images/projects/Internship projects/t1.png",
        alt: "Table design 1 - bent steel console with antique brass drawer and walnut top",
      },
      {
        id: "t2",
        src: "/images/projects/Internship projects/t2.png",
        alt: "Table design 2 - cylindrical bent steel base console with brass top",
      },
      {
        id: "t3",
        src: "/images/projects/Internship projects/t3.png",
        alt: "Table design 3 - low coffee table with cylindrical folded base and round top",
      },
      {
        id: "t4",
        src: "/images/projects/Internship projects/t4.png",
        alt: "Table design 4 - geometric origami folded steel base with walnut top",
      },
    ],
  },
  {
    id: "lighting",
    number: "2.",
    title: "Lighting",
    description:
      "Conceptual lighting explorations spanning floor lamps, wall sconces, and flush-mount ceiling luminaires. Drawing inspiration from sacred geometry, harmonic proportions, and circular symmetries, the pieces feature spun brass and coated metal shades that sculpt light into dramatic cast shadows and warm atmospheric halos. When switched off, each fixture doubles as a sculptural wall installation.",
    images: [
      {
        id: "fl1",
        src: "/images/projects/Internship projects/fl1.png",
        alt: "Floor and table lamps lineup featuring tapered brass and black stems",
      },
      {
        id: "ws01",
        src: "/images/projects/Internship projects/ws01.png",
        alt: "Wall sconce with triangular motif and central illuminated globe",
      },
      {
        id: "ws02",
        src: "/images/projects/Internship projects/ws02.png",
        alt: "Quatrefoil flush mount luminaire with floral brass petals",
      },
      {
        id: "ws03",
        src: "/images/projects/Internship projects/ws03.png",
        alt: "Dual dome interlocking pendant light with brass accent",
      },
      {
        id: "ws04",
        src: "/images/projects/Internship projects/ws04.png",
        alt: "Orbital wall sconce with three glowing spherical diffusers",
      },
    ],
  },
  {
    id: "wall-art",
    number: "3.",
    title: "Wall art",
    description:
      "A modular wall art installation system crafted from patinated brass sheets mounted on natural marble and architectural surfaces. Arranged in a 3x3 grid matrix, each tile features precise progressive origami-inspired corner and edge folds. The sculptural facets capture ambient daylight from changing angles, producing an ever-shifting gradient of metallic warmth and dramatic shadows.",
    images: [
      {
        id: "wa1",
        src: "/images/projects/Internship projects/wa1.png",
        alt: "Modular brass wall art with origami folds mounted on black marble backdrop",
      },
      {
        id: "wa2",
        src: "/images/projects/Internship projects/wa2.png",
        alt: "Modular brass wall art tiles with progressive folds on studio backdrop",
      },
    ],
  },
  {
    id: "accessories",
    number: "4.",
    title: "Accessories (candlestand & tray)",
    description:
      "A curated collection of tabletop accents designed for contemporary dining and living spaces. The series includes elongated folded sheet metal trays elevated on polished brass spherical feet, circular pedestal platters, and monolithic candlestick holders anchored on beveled natural marble bases. Each piece explores clean lines, tactile materials, and geometric poise.",
    images: [
      {
        id: "ighf01",
        src: "/images/projects/Internship projects/ighf01.png",
        alt: "Elongated metal serving tray resting on polished brass spherical feet",
      },
      {
        id: "ighf02",
        src: "/images/projects/Internship projects/ighf02.png",
        alt: "Circular pedestal tray with turned marble base and metal platter",
      },
      {
        id: "ighf03",
        src: "/images/projects/Internship projects/ighf03.png",
        alt: "Tall tapered candlestick holder with circular beveled marble base",
      },
      {
        id: "ighf04",
        src: "/images/projects/Internship projects/ighf04.png",
        alt: "Medium tapered candlestick holder with conical flare and marble foundation",
      },
    ],
  },
];

export default function InternshipWorksPage() {
  const [activeGallery, setActiveGallery] = useState<{
    images: readonly GalleryImage[];
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

  const pointerStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const swipedRef = useRef(false);
  const lastSwipeTimeRef = useRef(0);

  const triggerSwipe = useCallback((direction: "next" | "prev") => {
    const now = Date.now();
    if (now - lastSwipeTimeRef.current < 300) return;
    lastSwipeTimeRef.current = now;
    if (direction === "next") {
      nextPreviewImage();
    } else {
      prevPreviewImage();
    }
  }, [nextPreviewImage, prevPreviewImage]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!e.isPrimary) return;
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
    };
    swipedRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointerStartRef.current || !e.isPrimary) return;
    const deltaX = e.clientX - pointerStartRef.current.x;
    const deltaY = e.clientY - pointerStartRef.current.y;
    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      swipedRef.current = true;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerStartRef.current || !e.isPrimary) return;
    const deltaX = e.clientX - pointerStartRef.current.x;
    const deltaY = e.clientY - pointerStartRef.current.y;
    const deltaTime = Date.now() - pointerStartRef.current.time;
    pointerStartRef.current = null;

    if (activeGallery && activeGallery.images.length > 1) {
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
      const isSwipeDistance = Math.abs(deltaX) > 40 || (Math.abs(deltaX) > 25 && deltaTime < 300);
      if (isHorizontal && isSwipeDistance) {
        swipedRef.current = true;
        triggerSwipe(deltaX < 0 ? "next" : "prev");
        setTimeout(() => {
          swipedRef.current = false;
        }, 150);
        return;
      }
    }

    setTimeout(() => {
      swipedRef.current = false;
    }, 150);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    pointerStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    };
    swipedRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!pointerStartRef.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - pointerStartRef.current.x;
    const deltaY = e.touches[0].clientY - pointerStartRef.current.y;
    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      swipedRef.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!pointerStartRef.current) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - pointerStartRef.current.x;
    const deltaY = touch.clientY - pointerStartRef.current.y;
    const deltaTime = Date.now() - pointerStartRef.current.time;
    pointerStartRef.current = null;

    if (activeGallery && activeGallery.images.length > 1) {
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
      const isSwipeDistance = Math.abs(deltaX) > 40 || (Math.abs(deltaX) > 25 && deltaTime < 300);
      if (isHorizontal && isSwipeDistance) {
        swipedRef.current = true;
        triggerSwipe(deltaX < 0 ? "next" : "prev");
        setTimeout(() => {
          swipedRef.current = false;
        }, 150);
        return;
      }
    }

    setTimeout(() => {
      swipedRef.current = false;
    }, 150);
  };

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
      {/* Background layer */}
      <div className="fixed inset-0 bg-[#ffffff] -z-10" />

      {/* Top Spacer for Fixed Navbar */}
      <div className="h-24 sm:h-28 md:h-32" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-[100px] flex flex-col gap-6 sm:gap-8">
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
          <span className="text-stone-900 font-semibold">More Internship Works</span>
        </motion.div>

        {/* Page Header & Description */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col gap-4 w-full max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-stone-950">
            More Internship Works
          </h1>

          {/* Framed Brief Card - Clean White Frame */}
          <div className="relative overflow-hidden w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 bg-white border border-stone-200 shadow-sm flex flex-col gap-4 mt-2">
            {/* Main brief statement */}
            <p className="text-base sm:text-lg md:text-[19px] text-stone-700 leading-relaxed font-sans font-normal">
              These are some of the ideas and designs I developed during my internship at <span className="font-semibold text-stone-950">Ferro Linkers</span>. These were proposed designs to different clients.
            </p>

            {/* Highlighted Callout - Gentle Light Gold */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#fdf8ee] border border-[#e8d7bb] shadow-sm">
              <p className="text-sm sm:text-base md:text-[17px] font-sans font-medium text-[#755520] tracking-tight leading-snug">
                * None of these are final products or manufactured lines, but rather conceptual directions and proposals.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* COLLECTIONS SECTION - Sleek Black Background #000000 */}
      <section
        id="collections"
        className="dark w-full bg-[#000000] text-white pt-12 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 mt-10 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-20 flex flex-col gap-16 sm:gap-24 md:gap-32"
      >
        {internshipProjects.map((project, index) => {
          // Layout alternation:
          // Index 0 (1st, Table designs): Text Left, Image Collage Right
          // Index 1 (2nd, Lighting): Image Collage Left, Text Right
          // Index 2 (3rd, Wall art): Text Left, Image Collage Right
          // Index 3 (4th, Accessories): Image Collage Left, Text Right
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full scroll-mt-24 flex flex-col gap-8"
            >
              {/* Subtle Section Divider */}
              {index > 0 && <div className="w-full border-t border-white/15 mb-4 sm:mb-8" />}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
                
                {/* 1. TEXT / HEADING BLOCK */}
                <div
                  className={`flex flex-col gap-3 sm:gap-4 justify-start lg:col-span-5 pt-1 ${
                    isEven ? "order-1" : "order-1 lg:order-2"
                  }`}
                >
                  {/* Heading: Number + Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-semibold text-white tracking-tight">
                    <span className="text-[#E0B88A] mr-2 sm:mr-3">{project.number}</span>
                    {project.title}
                  </h2>

                  {/* Project Description */}
                  <p className="text-sm sm:text-base md:text-[17px] text-stone-300 leading-relaxed font-sans font-normal">
                    {project.description}
                  </p>
                </div>

                {/* 2. ADAPTIVE COLLAGE GRID BLOCK */}
                <div
                  className={`w-full lg:col-span-7 ${
                    isEven ? "order-2" : "order-2 lg:order-1"
                  }`}
                >
                  {/* PROJECT 1: Table Designs (tables.png landscape top, 2x2 grid below) */}
                  {project.id === "table-designs" && (
                    <div className="flex flex-col gap-3 sm:gap-4 w-full">
                      {/* Top Featured Landscape Image (tables.png) */}
                      <div
                        onClick={() => setActiveGallery({ images: project.images, index: 0 })}
                        className="group relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer bg-neutral-900/60 shadow-lg transition-all duration-300 hover:border-white/35 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
                        title="Click to view full image"
                      >
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].alt}
                          className="w-full h-full object-cover object-center select-none"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                          <span className="p-1.5 rounded-md bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* 2x2 Grid of detailed render images (t1, t2, t3, t4) */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                        {project.images.slice(1).map((img, idx) => {
                          const realIndex = idx + 1;
                          return (
                            <div
                              key={img.id}
                              onClick={() => setActiveGallery({ images: project.images, index: realIndex })}
                              className="group relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer bg-neutral-950/80 shadow-md transition-all duration-300 hover:border-white/35 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
                              title="Click to view full image"
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover object-center select-none"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                                <span className="p-1.5 rounded-md bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                                  <Maximize2 className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* PROJECT 2: Lighting (fl1.png wide landscape top banner, 2x2 grid of sconces below) */}
                  {project.id === "lighting" && (
                    <div className="flex flex-col gap-3 sm:gap-4 w-full">
                      {/* Top Wide Landscape Panoramic Lineup (fl1.png) */}
                      <div
                        onClick={() => setActiveGallery({ images: project.images, index: 0 })}
                        className="group relative w-full aspect-[2.36/1] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer bg-[#ffffff] shadow-lg transition-all duration-300 hover:border-white/35 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)] p-2 sm:p-3 flex items-center justify-center"
                        title="Click to view full image"
                      >
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].alt}
                          className="w-full h-full object-contain select-none"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                          <span className="p-1.5 rounded-md bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* 2x2 Grid of Wall Sconces & Flush Mounts (ws01, ws02, ws03, ws04) */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                        {project.images.slice(1).map((img, idx) => {
                          const realIndex = idx + 1;
                          return (
                            <div
                              key={img.id}
                              onClick={() => setActiveGallery({ images: project.images, index: realIndex })}
                              className="group relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer bg-[#ffffff] shadow-md transition-all duration-300 hover:border-white/35 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] p-2 sm:p-3 flex items-center justify-center"
                              title="Click to view full image"
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-contain select-none"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                                <span className="p-1.5 rounded-md bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                                  <Maximize2 className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* PROJECT 3: Wall Art (2-Column Diptych of 1:1 square modular panels) */}
                  {project.id === "wall-art" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full">
                      {project.images.map((img, idx) => (
                        <div
                          key={img.id}
                          onClick={() => setActiveGallery({ images: project.images, index: idx })}
                          className={`group relative aspect-square w-full rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:border-white/35 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)] ${
                            img.id === "wa1" ? "bg-black" : "bg-[#ffffff]"
                          }`}
                          title="Click to view full image"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-contain select-none"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                            <span className="p-1.5 rounded-md bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* PROJECT 4: Accessories (Candlestand & Tray) */}
                  {/* Adaptive Grid: Landscape tray given proper width, portrait candlestands arranged around it */}
                  {project.id === "accessories" && (
                    <div className="flex flex-col gap-3 sm:gap-4 w-full">
                      {/* Top: Wide Landscape Tray (ighf01) given proper full width */}
                      <div
                        onClick={() => setActiveGallery({ images: project.images, index: 0 })}
                        className="group relative w-full aspect-[16/7] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer bg-[#ffffff] shadow-lg transition-all duration-300 hover:border-white/35 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)] p-3 sm:p-4 flex items-center justify-center"
                        title="Click to view full image"
                      >
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].alt}
                          className="w-full h-full object-contain select-none"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                          <span className="p-1.5 rounded-md bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* Bottom Adaptive Trio: Pedestal Tray (Landscape/Square) + Two Portrait Candlestand Holders */}
                      <div className="grid grid-cols-12 gap-3 sm:gap-4 w-full h-[260px] sm:h-[320px] md:h-[360px]">
                        {/* 1. Pedestal Tray (Col span 6) */}
                        <div
                          onClick={() => setActiveGallery({ images: project.images, index: 1 })}
                          className="col-span-6 relative h-full min-h-0 rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer group bg-[#ffffff] p-2 sm:p-3 flex items-center justify-center transition-all duration-300 hover:border-white/35 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
                          title="Click to view full image"
                        >
                          <img
                            src={project.images[1].src}
                            alt={project.images[1].alt}
                            className="w-full h-full object-contain select-none"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2.5 sm:p-3 pointer-events-none">
                            <span className="p-1.5 rounded-md bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>

                        {/* 2. Portrait Candlestand 1 (Col span 3) */}
                        <div
                          onClick={() => setActiveGallery({ images: project.images, index: 2 })}
                          className="col-span-3 relative h-full min-h-0 rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer group bg-[#ffffff] p-2 flex items-center justify-center transition-all duration-300 hover:border-white/35 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
                          title="Click to view full image"
                        >
                          <img
                            src={project.images[2].src}
                            alt={project.images[2].alt}
                            className="w-full h-full object-contain select-none"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2 pointer-events-none">
                            <span className="p-1 rounded bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                              <Maximize2 className="w-3 h-3" />
                            </span>
                          </div>
                        </div>

                        {/* 3. Portrait Candlestand 2 (Col span 3) */}
                        <div
                          onClick={() => setActiveGallery({ images: project.images, index: 3 })}
                          className="col-span-3 relative h-full min-h-0 rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden cursor-pointer group bg-[#ffffff] p-2 flex items-center justify-center transition-all duration-300 hover:border-white/35 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
                          title="Click to view full image"
                        >
                          <img
                            src={project.images[3].src}
                            alt={project.images[3].alt}
                            className="w-full h-full object-contain select-none"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-end justify-end p-2 pointer-events-none">
                            <span className="p-1 rounded bg-black/75 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                              <Maximize2 className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          );
        })}

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
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeGallery !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => {
              if (swipedRef.current) return;
              closePreview();
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              pointerStartRef.current = null;
              setTimeout(() => { swipedRef.current = false; }, 150);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none touch-none"
          >
            {/* Close / Cross Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closePreview();
              }}
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

            {/* Central Main Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGallery.index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  drag={activeGallery.images.length > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.35}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 40;
                    if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
                      triggerSwipe("next");
                    } else if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
                      triggerSwipe("prev");
                    }
                  }}
                  className="relative max-h-[85vh] sm:max-h-[88vh] max-w-[85vw] sm:max-w-[88vw] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing touch-none select-none"
                >
                  <img
                    src={activeGallery.images[activeGallery.index].src}
                    alt={activeGallery.images[activeGallery.index].alt}
                    draggable={false}
                    className="max-h-[85vh] sm:max-h-[88vh] max-w-full object-contain rounded-[8px] drop-shadow-2xl select-none pointer-events-none"
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
