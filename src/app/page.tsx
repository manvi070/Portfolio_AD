"use client";

import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import AboutJournal from "@/components/AboutJournal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main
      className="relative flex flex-col min-h-screen pb-12 bg-repeat bg-top bg-fixed transition-all duration-700 bg-[url('/images/landing/beige_gingham_bg.png')] [background-size:280px_auto] sm:[background-size:360px_auto] md:[background-size:420px_auto]"
    >
      {/* 1. Hero Section: Stationary sticky top */}
      <div className="sticky top-0 z-10 w-full min-h-screen">
        <Hero />
      </div>

      {/* 2. Work Section Frame */}
      <section 
        id="work" 
        className="relative z-20 mx-3 sm:mx-6 md:mx-10 lg:mx-14 mt-12 sm:mt-14 md:mt-16 lg:mt-20 scroll-mt-[130px]"
      >
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#EEF4FF]/45 dark:bg-[#0c1427]/60 backdrop-blur-3xl backdrop-saturate-150 border border-white/70 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.8)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.1)] transition-all duration-500">
          <ProjectGrid />
        </div>
      </section>

      {/* 3. About Section Frame */}
      <section 
        id="about" 
        className="relative z-30 mx-3 sm:mx-6 md:mx-10 lg:mx-14 mt-16 sm:mt-24 scroll-mt-[130px]"
      >
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#EEF4FF]/45 dark:bg-[#0c1427]/60 backdrop-blur-3xl backdrop-saturate-150 border border-white/70 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.8)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.1)] transition-all duration-500">
          <AboutJournal />
        </div>
      </section>

      {/* 4. Contact Section Frame */}
      <section 
        id="contact" 
        className="relative z-40 mx-3 sm:mx-6 md:mx-10 lg:mx-14 mt-16 sm:mt-24 scroll-mt-[130px]"
      >
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#EEF4FF]/45 dark:bg-[#0c1427]/60 backdrop-blur-3xl backdrop-saturate-150 border border-white/70 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.8)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.1)] transition-all duration-500">
          <Contact />
        </div>
      </section>
    </main>
  );
}
