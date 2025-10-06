import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 bg-white/5 backdrop-blur-md dark:bg-black/30 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-black dark:text-white"
        >
          <div className="text-2xl">🚗</div>
          <div className="font-extrabold text-xl">Car Club</div>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-teal-500 transition"
          >
            Home
          </Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-white dark:bg-white/20 hover:bg-gray-100 dark:hover:bg-white/30 shadow transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
