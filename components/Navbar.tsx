"use client";


import { useEffect, useState } from "react";

export default function Navbar() {

const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    setDarkMode(false);
    document.documentElement.classList.remove("dark");
  } else {
    setDarkMode(true);
    document.documentElement.classList.add("dark");
  }
}, []);

const toggleTheme = () => {
  const newDarkMode = !darkMode;

  setDarkMode(newDarkMode);

  if (newDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <div>
          <h1 className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent">
            ✨ Nova AI Studio
          </h1>

          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Craft prompts. Compare AI models.
          </p>
        </div>

        {/* <button
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 transition hover:border-purple-500 hover:bg-slate-700"
        >
          🌙
        </button> */}
        <button
  onClick={toggleTheme}
  className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 transition hover:border-purple-500 hover:bg-slate-100 dark:hover:bg-slate-700"
>
  {darkMode ? "🌙" : "☀️"}
</button>

      </div>

    </nav>
  );
}