// resume-site/src/App.jsx
import { useEffect, useState } from "react";
import ResumePage from "./ResumePage";
import translations from "./translations.json";
import "./styles.css";

export default function App() {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const getInitialLang = () => {
    return localStorage.getItem("lang") || "ua";
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [lang, setLang] = useState(getInitialLang);
  const [content, setContent] = useState(translations[getInitialLang()]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    setContent(translations[lang]);
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-end space-x-4 mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
          <button
            onClick={() => setLang(lang === "ua" ? "en" : "ua")}
            className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded"
          >
            {lang.toUpperCase()}
          </button>
        </div>
        <ResumePage content={content} />
      </div>
    </div>
  );
}