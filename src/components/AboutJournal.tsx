'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutJournal() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState({ closed: 1, open: 1 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      // Provide 32px padding margin (16px on each side)
      const availableWidth = Math.max(280, containerWidth - 32);

      // Closed width is 400px
      const closedScale = Math.min(1, availableWidth / 400);

      // Open width is 800px (400px left page + 400px right page)
      const openScale = Math.min(1, availableWidth / 800);

      setScale({ closed: closedScale, open: openScale });
    };

    updateScale();

    window.addEventListener('resize', updateScale);
    const resizeObserver = new ResizeObserver(updateScale);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateScale);
      resizeObserver.disconnect();
    };
  }, []);

  const currentScale = isOpen ? scale.open : scale.closed;
  const translateX = isOpen ? 200 * scale.open : 0;

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[70vh] md:min-h-[80vh] bg-transparent flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden select-none"
    >
      <div 
        className="relative flex items-center justify-center"
        style={{ 
          perspective: "2000px",
          transition: "transform 1s ease-in-out, height 1s ease-in-out",
          transform: `translateX(${translateX}px) scale(${currentScale})`,
          transformOrigin: "center center",
          height: `${560 * currentScale}px`,
          width: `${400 * currentScale}px`,
        }}
      >
        {/* Book Container — always one-page wide */}
        <div 
          className="relative cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          style={{
            width: "400px",
            height: "560px",
            transformStyle: "preserve-3d",
            flexShrink: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Right Page (page2) — sits behind the cover, revealed when cover flips */}
          <div 
            className="absolute inset-0 bg-white rounded-r-2xl shadow-2xl overflow-hidden border-y border-r border-gray-200"
            style={{ 
              backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          >
            {/* Page 2 content */}
            <div 
              className="absolute inset-0 flex items-center justify-center p-3"
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transition: "opacity 0.4s ease-in-out 0.5s" 
              }}
            >
              <img 
                src="/images/landing/page2.png" 
                alt="About page 2" 
                className="w-full h-full object-contain pointer-events-none"
                draggable={false}
              />
            </div>

            {/* Book spine shadow on left edge */}
            <div className="absolute top-0 left-0 w-6 h-full pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 30%, transparent 100%)' }}></div>
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gray-300"></div>
            
            {/* Bookmark at bottom center */}
            <div 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-5 h-14 bg-[#649C80] z-[2] shadow-md" 
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
            ></div>
          </div>

          {/* Cover + Left Page (flips from left edge) */}
          <div 
            className="absolute inset-0"
            style={{ 
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              transform: isOpen ? "rotateY(-180deg)" : "rotateY(0deg)",
              transition: "transform 1s ease-in-out",
              zIndex: isOpen ? 0 : 10,
            }}
          >
            {/* Front: Green Cover */}
            <div 
              className="absolute inset-0 bg-[#0A573F] rounded-r-2xl shadow-2xl flex flex-col items-center justify-between py-10 px-6 overflow-hidden"
              style={{ backfaceVisibility: "hidden", transform: "translateZ(1px)" }}
            >
              {/* Bookmark Ribbon */}
              <div 
                className="absolute -bottom-8 left-8 w-6 h-16 bg-[#649C80] z-[1] shadow-md" 
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)", backfaceVisibility: "hidden" }}
              ></div>
              
              <h2 
                className="text-4xl font-mono italic text-[#D4AF37] tracking-widest mt-2"
                style={{ backfaceVisibility: "hidden" }}
              >
                Journal
              </h2>
              
              {/* Elements overlay */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ top: '15%', backfaceVisibility: "hidden" }}>
                <img 
                  src="/images/landing/elements.png" 
                  alt="Journal decorations" 
                  className="w-[90%] h-auto object-contain pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Back: Left Page (page1) — visible after cover flips */}
            <div 
              className="absolute inset-0 bg-white rounded-l-2xl shadow-inner overflow-hidden border-y border-l border-gray-200"
              style={{ 
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg) translateZ(1px)",
                backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            >
              {/* Page 1 content */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <img 
                  src="/images/landing/page1.png" 
                  alt="About page 1" 
                  className="w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
              </div>
              
              {/* Book spine shadow on right edge (spine) */}
              <div className="absolute top-0 right-0 w-6 h-full pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 30%, transparent 100%)' }}></div>
              <div className="absolute top-0 right-0 w-[1px] h-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
