"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll to top on mount/refresh
    window.scrollTo(0, 0);
    // Clear hash so that clicking the same hash link works immediately after refresh
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 md:top-7 left-0 right-0 z-50 flex justify-center px-0 md:px-7 w-full max-w-full"
    >
      <div className="flex items-center justify-between md:justify-center gap-2.5 sm:gap-3 w-full md:max-w-4xl">
        
        {/* Main Nav Bar Container */}
        <div
          className={`flex-1 flex items-center justify-between transition-all duration-300 px-4 py-2.5 md:rounded-full md:px-6 md:py-2 border-0 md:border md:border-white/40 dark:md:border-white/25 shadow-none md:shadow-sm backdrop-blur-xl md:backdrop-blur-2xl ${
            isScrolled
              ? "bg-white/70 dark:bg-slate-950/85"
              : "bg-white/50 dark:bg-slate-900/75"
          }`}
        >
          
          {/* Left Side: Logo and Name */}
          <Link href="/#hero" onClick={handleLogoClick} className="shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group">
              {/* MG Round Button */}
              <div className={`flex h-10 w-10 sm:h-11 sm:w-11 md:h-10 md:w-10 items-center justify-center rounded-full font-bold text-xs sm:text-sm transition-all duration-300 group-hover:scale-105 border ${
                isScrolled
                  ? "bg-white/80 dark:bg-slate-800/90 text-[#689DFF] dark:text-white shadow-md border-white/50 dark:border-white/30 md:bg-white/40 md:dark:bg-slate-800/70 md:text-black md:dark:text-white md:shadow-none"
                  : "bg-white/70 dark:bg-slate-800/90 text-[#689DFF] dark:text-white shadow-md border-white/50 dark:border-white/30 md:bg-white/40 md:dark:bg-slate-800/70 md:text-black md:dark:text-white md:shadow-none"
              }`}>
                MG
              </div>
              <span className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base hidden sm:inline-block">
                Manvi Gupta
              </span>
            </div>
          </Link>

          {/* Center / Right: Desktop Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1 text-sm font-bold text-slate-800 dark:text-white">
              <li>
                <Link href="/#work" onClick={(e) => handleNavClick(e, "work")} className="rounded-full px-4 py-2 text-slate-800 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/15 dark:hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#about" onClick={(e) => handleNavClick(e, "about")} className="rounded-full px-4 py-2 text-slate-800 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/15 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" onClick={(e) => handleNavClick(e, "contact")} className="rounded-full px-4 py-2 text-slate-800 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/15 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Right: Resume Button */}
          <div className="flex md:hidden items-center shrink-0">
            <Link
              href="https://drive.google.com/file/d/131em8AZVZeX5ryOlcu1SiolzIdXGC7-Y/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/50 dark:border-white/30 transition-transform hover:scale-105 ${
                isScrolled
                  ? "bg-white/80 dark:bg-slate-800/90 text-[#689DFF] dark:text-white shadow-md"
                  : "bg-white/70 dark:bg-slate-800/90 text-[#689DFF] dark:text-white shadow-md"
              }`}
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#689DFF] dark:text-white" />
            </Link>
          </div>
        </div>

        {/* Desktop Resume Button (Only visible on web) */}
        <Link
          href="https://drive.google.com/file/d/131em8AZVZeX5ryOlcu1SiolzIdXGC7-Y/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:flex group h-[54px] sm:h-[58px] items-center rounded-full border border-white/50 dark:border-white/30 px-6 text-sm font-bold text-slate-800 dark:text-white hover:bg-white/60 dark:hover:bg-slate-800/90 hover:text-black dark:hover:text-white transition-all duration-300 gap-2 shrink-0 ${
            isScrolled
              ? "bg-white/60 dark:bg-slate-900/90 backdrop-blur-2xl shadow-md"
              : "bg-white/40 dark:bg-slate-900/80 backdrop-blur-xl shadow-md"
          }`}
        >
          <FileText className="w-4 h-4 text-slate-700 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors" /> Resume
        </Link>
        
      </div>
    </motion.header>
  );
}
