"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <footer className="w-full bg-transparent py-12 px-6 font-sans">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-4">
        
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-slate-600 dark:text-slate-200 uppercase mb-2 transition-colors">
              MANVI GUPTA · PRODUCT DESIGNER
            </p>
            <Link 
              href="mailto:manvigupta170@gmail.com" 
              className="text-lg md:text-xl font-bold text-slate-900 dark:text-white hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
            >
              manvigupta170@gmail.com
            </Link>
          </div>
          
          <p className="text-[10px] font-mono font-bold tracking-[0.1em] text-slate-600 dark:text-slate-300 uppercase mt-4 md:mt-12 transition-colors">
            © {new Date().getFullYear()} · BUILT WITH CARE, SHIPPED WITH DOUBT
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start md:items-end gap-6">
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <Link 
              href="https://www.behance.net/manvigupta10" 
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 dark:border-white/30 bg-white/30 dark:bg-slate-800/90 backdrop-blur-md shadow-sm text-sm font-bold text-slate-700 dark:text-white hover:bg-[#1769ff]/80 hover:text-white hover:border-transparent transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-slate-600 dark:text-white group-hover:text-white transition-colors">
                <path d="M9.1 11.23c1.43-.1 2.37-.87 2.37-2.3 0-1.63-1.1-2.4-3.13-2.4H3v11h5.63c2.4 0 3.63-1.07 3.63-3.1 0-1.67-1-2.6-3.16-3.2zm-2.8-2.1h1.77c.8 0 1.23.3 1.23.97 0 .67-.47 1-1.2 1H6.3V9.13zm1.9 6.83H6.3v-2.27h2.07c.9 0 1.33.37 1.33 1.07 0 .8-.5 1.2-1.5 1.2zm9.1-1.6h4.53v-.93c0-2.43-1.6-3.63-3.47-3.63-2.1 0-3.6 1.4-3.6 3.67 0 2.2 1.4 3.73 3.6 3.73 1.63 0 2.77-.73 3.33-1.83h-1.6c-.3.43-.87.7-1.63.7-1.13 0-1.7-.73-1.77-1.7zm1.6-1.03h-2.97c.1-.8.7-1.33 1.43-1.33.77 0 1.37.5 1.54 1.33zM15.4 7.6h4.5v1.4h-4.5z"/>
              </svg>
              Behance
            </Link>
            <Link 
              href="https://www.linkedin.com/in/manvi0017" 
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 dark:border-white/30 bg-white/30 dark:bg-slate-800/90 backdrop-blur-md shadow-sm text-sm font-bold text-slate-700 dark:text-white hover:bg-[#0a66c2]/80 hover:text-white hover:border-transparent transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-white group-hover:text-white transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
