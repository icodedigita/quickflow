"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-900/10 dark:border-white/10 text-ink-700 dark:text-ink-200 hover:border-teal-600/40 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
    >
      {isDark ? (
        <Sun size={16} weight="bold" />
      ) : (
        <Moon size={16} weight="bold" />
      )}
    </button>
  );
}
