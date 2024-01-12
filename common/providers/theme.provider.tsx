"use client";

import { createSafeContext } from "common/utils";
import React, { useEffect, useState } from "react";

export type Theme = "light" | "dark" | null;

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const [useTheme, ThemeProvider] = createSafeContext<ThemeContextType>();

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(null);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeProvider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
