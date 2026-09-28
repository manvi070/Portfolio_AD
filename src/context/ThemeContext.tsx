"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "day" | "night";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio_theme") as Theme | null;
      if (savedTheme === "night" || savedTheme === "day") {
        return savedTheme;
      }
      return document.documentElement.classList.contains("dark") ? "night" : "day";
    }
    return "day";
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio_theme") as Theme | null;
    if (savedTheme === "night") {
      setThemeState("night");
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      setThemeState("day");
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      if (!savedTheme) {
        localStorage.setItem("portfolio_theme", "day");
      }
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio_theme", newTheme);
    if (newTheme === "night") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "day" ? "night" : "day";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
