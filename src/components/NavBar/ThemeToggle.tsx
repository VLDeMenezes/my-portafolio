import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid"; // Puedes usar iconos de Heroicons

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Detectar la preferencia del usuario en su navegador
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center p-2 rounded-full transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-gray-300"
      }`}
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-white" />
      ) : (
        <MoonIcon className="h-6 w-6 text-black" />
      )}
    </button>
  );
}
