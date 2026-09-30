import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const intelOneMono = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/intel-one-mono/files/intel-one-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/intel-one-mono/files/intel-one-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/intel-one-mono/files/intel-one-mono-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/intel-one-mono/files/intel-one-mono-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/intel-one-mono/files/intel-one-mono-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../node_modules/@fontsource/intel-one-mono/files/intel-one-mono-latin-700-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-intel-one-mono",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Manvi Gupta_Portfolio",
    template: "%s | Manvi Gupta_Portfolio",
  },
  description: "Portfolio of Manvi Gupta, a Furniture & Product Designer crafting intuitive digital and physical experiences.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${intelOneMono.variable} ${manrope.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden w-full max-w-full bg-[#F5EFEB] transition-colors duration-500">
        <ThemeProvider>
          {/* Background grain & warm cream beige base */}
          <div className="fixed inset-0 -z-20 bg-[#F5EFEB]" />
          
          {/* Noise Texture */}
          <div 
            className="fixed inset-0 -z-10 opacity-[0.25] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
