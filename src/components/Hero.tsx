"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax and scroll fade effects for Hero content
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // All 12 illustration stickers (user uploaded + custom generated)
  const stickers = [
    { id: "desk", title: "Study Desk", image: "/images/stickers/desk.png" },
    { id: "dresser", title: "Chest of Drawers", image: "/images/stickers/dresser.png" },
    { id: "chair_white", title: "Molded Shell Chair", image: "/images/stickers/chair_white.png" },
    { id: "armchair_green", title: "Tufted Club Chair", image: "/images/stickers/armchair_green.png" },
    { id: "lamp_table", title: "Bedside Lamp", image: "/images/stickers/lamp_table.png" },
    { id: "mirror_vanity", title: "Vanity Mirror", image: "/images/stickers/mirror_vanity.png" },
    { id: "table_plant", title: "Planter Side Table", image: "/images/stickers/table_plant.png" },
    { id: "wall_sconce", title: "Globe Sconce Light", image: "/images/stickers/wall_sconce.png" },
    { id: "wall_pendant", title: "Pleated Pendant", image: "/images/stickers/wall_pendant.png" },
    { id: "side_table", title: "Wooden Nightstand", image: "/images/stickers/side_table.png" },
    { id: "floor_lamp", title: "Arched Floor Lamp", image: "/images/stickers/floor_lamp.png" },
    { id: "floor_mirror", title: "Standing Floor Mirror", image: "/images/stickers/floor_mirror.png" },
  ];

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 md:pb-12 bg-transparent">
      
      {/* Main Content Wrapper with Scroll Fade */}
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="w-full flex-1 flex flex-col items-center justify-between z-10 px-3 sm:px-6 md:px-8"
      >
        {/* Main Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl relative w-full flex-1 flex flex-col items-center justify-center text-center mx-auto my-auto"
        >
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black dark:text-white cursor-default font-mono transition-colors">
            Crafting objects, spaces<br />and stories.
          </h1>
          
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-black/80 dark:text-white/90 font-medium cursor-default leading-relaxed font-manrope transition-colors">
            Hi, I&apos;m Manvi, a designer keen on broadening my creative horizons and enhancing my skills. With a profound appreciation for both tradition and modernism, I aspire to explore and blend the best of both worlds in my design journey.
          </p>
        </motion.div>

        {/* Full Width Infinite Sticker Marquee Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-6xl xl:max-w-7xl mt-auto mb-2 sm:mb-4 md:mb-6"
        >
          <div className="relative w-full rounded-3xl sm:rounded-[36px] py-3 sm:py-4 px-0 overflow-hidden bg-transparent border-none shadow-none transition-all duration-300 [mask-image:linear-gradient(to_right,transparent_0%,black_36px,black_calc(100%-36px),transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_36px,black_calc(100%-36px),transparent_100%)]">
            {/* Seamless Infinite Horizontal Moving Row */}
            <div className="flex overflow-hidden select-none">
              <div className="animate-marquee flex items-center">
                {/* Render two duplicated sets for an uninterrupted, continuous loop */}
                {[...stickers, ...stickers].map((sticker, idx) => (
                  <div
                    key={`${sticker.id}-${idx}`}
                    className="flex items-center justify-center shrink-0 px-4 sm:px-6 md:px-8"
                  >
                    {/* Sticker Image */}
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center">
                      <img 
                        src={sticker.image} 
                        alt={sticker.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.1)] pointer-events-none select-none"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


