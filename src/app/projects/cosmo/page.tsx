"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowDown, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const explorationTabs = [
  {
    id: "patterns",
    label: "Pattern exploration",
    src: "/images/projects/COSMO/patterns.png",
    alt: "Cosmo Pattern Exploration",
  },
  {
    id: "sketches",
    label: "Sketches",
    src: "/images/projects/COSMO/sketches.png",
    alt: "Cosmo Concept Sketches",
  },
  {
    id: "renders",
    label: "3d renders",
    src: "/images/projects/COSMO/renders.png",
    alt: "Cosmo 3D Renders",
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

const finalCollectionProducts: ProductItem[] = [
  {
    id: "cosmic-mirror",
    number: "1.",
    name: "Cosmic mirror",
    description:
      "This mirror’s infinity-derived form represents the eternal, continuous nature of self-reflection and personal growth. Its balanced, interlocking circles depict a sense of harmony and duality. emotionally and spiritually, it serves as a daily reminder of your limitless potential and inner balance.",
    images: [
      {
        id: "m1",
        src: "/images/projects/COSMO/m1.jpg",
        alt: "Cosmic Mirror - Full Front View",
        title: "Front Silhouette",
      },
      {
        id: "m2",
        src: "/images/projects/COSMO/m2.jpg",
        alt: "Cosmic Mirror - Perspective Wall Mount",
        title: "Perspective View",
      },
      {
        id: "m3",
        src: "/images/projects/COSMO/m3.jpg",
        alt: "Cosmic Mirror - Upper Crescent Detail",
        title: "Upper Brass Crescent",
      },
      {
        id: "m4",
        src: "/images/projects/COSMO/m4.jpg",
        alt: "Cosmic Mirror - Waist Crescent Detail",
        title: "Waist Joint Accent",
      },
    ],
  },
  {
    id: "wall-sconce",
    number: "2.",
    name: "Wall sconce",
    description:
      "Inspired by the Yin Yang, this design represents the balance of opposing yet complementary forces. It depicts harmony and dual nature. Spiritually, it symbolizes oneness and a holistic worldview.",
    images: [
      {
        id: "s1",
        src: "/images/projects/COSMO/s1.jpg",
        alt: "Wall Sconce - Studio Silhouette",
        title: "Studio Silhouette",
      },
      {
        id: "s3",
        src: "/images/projects/COSMO/s3.jpg",
        alt: "Wall Sconce - Ambient Warm Glow",
        title: "Ambient Warm Glow",
      },
    ],
  },
  {
    id: "pendant-light",
    number: "3.",
    name: "Pendant light",
    description:
      "Inspired by the Quatrefoil / four-petaled motif of the Flower of Life, this design symbolizes universal harmony, creation, and balance across the four cardinal directions. As it radiates light outward, it emotionally creates a grounded, calming atmosphere while spiritually representing clarity, divine alignment, and inner peace.",
    images: [
      {
        id: "l1",
        src: "/images/projects/COSMO/l1.jpg",
        alt: "Pendant Light - Silhouette & Shade Perspective",
        title: "Side Silhouette",
      },
      {
        id: "l2",
        src: "/images/projects/COSMO/l2.jpg",
        alt: "Pendant Light - Quatrefoil Bottom Geometry",
        title: "Quatrefoil Geometry",
      },
    ],
  },
  {
    id: "candle-stand",
    number: "4.",
    name: "Candle Stand",
    description:
      "Inspired by the Trefoil / Triquetra woven with the sacred Triangle, this piece symbolises interconnectedness, truth, and higher consciousness. Emotionally, it inspires feelings of guidance, clarity, and protected presence, and spiritually, it serves as a powerful focus for meditation.",
    images: [
      {
        id: "c1",
        src: "/images/projects/COSMO/c1.jpg",
        alt: "Candle Stand - Studio Silhouette",
        title: "Studio Silhouette",
      },
      {
        id: "c2",
        src: "/images/projects/COSMO/c2.jpg",
        alt: "Candle Stand - Perspective Detail",
        title: "Perspective Detail",
      },
    ],
  },
  {
    id: "ripple-mirror",
    number: "5.",
    name: "Ripple mirror (renders)",
    description: (
      <>
        Framed in a sacred <span className="text-stone-100 font-semibold">quatrefoil</span> silhouette, this mirror symbolizes balance, creation, and universal harmony. The central star and expanding ripple motif depict cosmic energy flowing from the core outward. Spiritually, it acts as a calming focal point to bring inner alignment, peace, and clarity.
      </>
    ),
    images: [
      {
        id: "mr1",
        src: "/images/projects/COSMO/mr1.jpg",
        alt: "Ripple Mirror - Sacred Quatrefoil Silhouette Render",
        title: "Quatrefoil Silhouette",
      },
      {
        id: "mr2",
        src: "/images/projects/COSMO/mr2.jpg",
        alt: "Ripple Mirror - Expanding Core Ripple Detail",
        title: "Core Ripple Detail",
      },
    ],
  },
];

const ihgfDisplayImages = [
  {
    id: "d1",
    src: "/images/projects/COSMO/d1.jpeg",
    alt: "IHGF Delhi Spring Fair 2025 - Exhibition Stall Display",
    title: "Exhibition Stall Display",
  },
  {
    id: "d2",
    src: "/images/projects/COSMO/d2.jpeg",
    alt: "IHGF Delhi Spring Fair 2025 - Exhibition Showcase Wall",
    title: "Showcase Wall View",
  },
] as const;

export default function CosmoProjectPage() {
  const [activeTab, setActiveTab] = useState<TabId>("renders");
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
        
        {/* Top Navigation & Breadcrumbs Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-between gap-4 w-full"
        >
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-stone-700 hover:text-black border border-black/10 shadow-sm text-xs sm:text-sm font-mono font-medium transition-all duration-300 hover:-translate-x-0.5"
          >
            <ArrowLeft className="w-4 h-4 text-stone-600 group-hover:text-black transition-transform group-hover:-translate-x-1" />
            <span>Back to Work</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-stone-400">
            <span>Work</span>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Cosmo</span>
          </div>
        </motion.div>

        {/* Project Header Info */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col gap-3 w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-stone-950">
            Cosmo
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 w-full">
            <span className="text-lg sm:text-xl md:text-2xl font-mono text-stone-700 font-medium tracking-tight">
              Wall Decor Collection
            </span>

            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <span className="text-xs sm:text-sm md:text-base font-mono text-stone-500 whitespace-nowrap">
                Also displayed at :
              </span>
              <img
                src="/images/projects/COSMO/logo.jpg"
                alt="Also displayed at"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain rounded-md shadow-sm border border-black/10"
              />
            </div>
          </div>
        </motion.section>

        {/* HERO IMAGE SECTION (Direct full-width cover.png without external frame) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border border-black/5"
        >
          <img
            src="/images/projects/COSMO/cover.png"
            alt="Cosmo Project Hero Cover"
            className="w-full h-auto block rounded-2xl sm:rounded-3xl"
            loading="eager"
          />
        </motion.section>

        {/* BRIEF & BRAINSTORMING SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full pt-4 sm:pt-8 md:pt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left: Brief Content */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <a
                href="#final-collection"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("final-collection")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2.5 self-start px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#fcedc7]/90 via-[#f8e0a8]/85 to-[#eed290]/90 hover:from-[#fef1d2] hover:via-[#fae7b9] hover:to-[#f2dca3] text-[#52390f] hover:text-[#382607] border border-[#d4af37]/50 hover:border-[#c59b38]/80 backdrop-blur-md shadow-[0_4px_18px_rgba(197,155,56,0.28)] hover:shadow-[0_6px_24px_rgba(197,155,56,0.42)] text-xs sm:text-sm font-mono font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="tracking-tight">See Final Collection</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8f641b] group-hover:text-[#422c07] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-stone-950 tracking-tight">
                Brief
              </h2>

              <p className="text-sm sm:text-base md:text-[17px] text-stone-600 leading-relaxed font-sans font-normal">
                Develop a distinctive furniture and accessories collection for the <span className="text-stone-950 font-medium">&apos;IHGF Delhi Spring Fair 2025&apos;</span> that explores fresh, forward-thinking directions. Drawing central inspiration from the cosmos, the designs translate celestial textures, forms, and symbolism into an evocative physical language capturing wonder and infinity.
              </p>
            </div>

            {/* Right: Brainstorming Image */}
            <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-black/8 shadow-md bg-stone-50">
              <img
                src="/images/projects/COSMO/brainstorming.jpg"
                alt="Brainstorming and Ideation Process"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                loading="lazy"
              />
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
          <div className="grid grid-cols-1 lg:grid-cols-[70%_1fr] gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left: Moodboard Image (70% width on lg) */}
            <div className="order-2 lg:order-1 w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-black/8 shadow-md bg-stone-50">
              <img
                src="/images/projects/COSMO/board.png"
                alt="Cosmo Concept Moodboard - Sacred Geometry and Cosmic Energy"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                loading="lazy"
              />
            </div>

            {/* Right: Concept Content */}
            <div className="order-1 lg:order-2 flex flex-col gap-4 sm:gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-stone-950 tracking-tight">
                Concept Developed
              </h2>

              <p className="text-sm sm:text-base md:text-[17px] text-stone-600 leading-relaxed font-sans font-normal">
                The Cosmo Collection is a crafted range of wall d&eacute;cor accessories inspired by sacred geometry. Grounded in the belief that geometric patterns carry vibrational energy, this collection seamlessly merges aesthetics with mindfulness, creating products that foster balance, healing, and inner harmony.
              </p>
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
                        layoutId="cosmoActiveTab"
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

          {/* Standard Screen-Adapted Frame (fits viewport height, pure white bg for width mismatch) */}
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

      {/* FINAL COLLECTION SECTION - Pure Black Background #000000 */}
      <motion.section
        id="final-collection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full bg-[#000000] text-white pt-10 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 mt-8 sm:mt-16 md:mt-24 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-20 flex flex-col gap-8 sm:gap-12"
      >
        {/* Section Divider & Header */}
        <div className="border-b border-white/20 pb-4 sm:pb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white tracking-tight">
            Final Collection
          </h2>
        </div>

        {/* Products in Final Collection */}
        <div className="flex flex-col">
          {finalCollectionProducts.map((product, index) => (
            <React.Fragment key={product.id}>
              {index > 0 && (
                <div className="w-full border-t border-white/15 my-12 sm:my-16 md:my-20" />
              )}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
                {/* Left Column: Product Info & Description - Aligned to top */}
                <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 pt-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-[#E0B88A] tracking-tight">
                    {product.number} {product.name}
                  </h3>

                  <p className="text-sm sm:text-base md:text-[17px] text-stone-300 leading-relaxed font-sans font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Right Column: Dynamic Collage Layout */}
                <div className="lg:col-span-7 w-full">
                  {product.images.length === 2 ? (
                    /* 2-Image Diptych Collage (s1 & s3) - Native 2:3 aspect ratio, complete silhouette & warm glow without cutoff */
                    <div className="w-full grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                      {product.images.map((img, imgIdx) => (
                        <div
                          key={img.id}
                          onClick={() => setActiveGallery({ images: product.images, index: imgIdx })}
                          className="group relative aspect-[2/3] w-full rounded-[8px] border border-white/10 overflow-hidden cursor-pointer bg-neutral-950/60 shadow-lg transition-all duration-300 hover:border-white/35 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
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
                    /* 4-Image Collage (Cosmic Mirror) */
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
                          {/* Image 3: Upper Crescent Detail */}
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

                          {/* Image 4: Waist Joint Detail */}
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
            </React.Fragment>
          ))}
        </div>
      </motion.section>

      {/* IHGF DISPLAY SECTION - Pure Black Background #000000 */}
      <motion.section
        id="ihgf-display"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full bg-[#000000] text-white pt-4 sm:pt-6 md:pt-8 pb-20 sm:pb-28 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-20 flex flex-col gap-8 sm:gap-12"
      >
        {/* Section Divider & Header */}
        <div className="border-b border-white/20 pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white tracking-tight">
            IHGF Display
          </h2>
          <span className="text-xs sm:text-sm md:text-base font-mono text-stone-400">
            Delhi Spring Fair 2025
          </span>
        </div>

        {/* 2-Image Grid for IHGF Exhibition Displays */}
        <div className="w-full grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {ihgfDisplayImages.map((img, imgIdx) => (
            <div
              key={img.id}
              onClick={() => setActiveGallery({ images: ihgfDisplayImages, index: imgIdx })}
              className="group relative aspect-[3/4] w-full rounded-[8px] border border-white/10 overflow-hidden cursor-pointer bg-neutral-950/60 shadow-lg transition-all duration-300 hover:border-white/35 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
              title="Click to open full preview"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center select-none transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Corner Maximize Icon on Hover (minimalist, no text label) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-end justify-end p-2 pointer-events-none">
                <span className="p-1 rounded-[4px] bg-black/70 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Full Preview Lightbox Modal - Clean minimalist view: only arrows, cross button, and image */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

