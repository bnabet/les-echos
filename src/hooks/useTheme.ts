import { useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  function toggleTheme() {
    setIsDark((prev) => {
      const newValue = !prev;
      document.documentElement.classList.toggle("dark", newValue);
      return newValue;
    });
  }

  return { isDark, toggleTheme };
}
