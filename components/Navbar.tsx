"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Basculer le mode sombre
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-blue-600 dark:text-white">
          Jules D&apos;ALMEIDA
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Accueil", href: "/" },
            { name: "À propos", href: "/about" },
            { name: "Projets", href: "/projects" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-lg font-medium px-4 py-2 rounded-md transition duration-300 ${
                  pathname === link.href
                    ? "text-blue-600 dark:text-white bg-blue-100 dark:bg-blue-800"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {link.name}
                {/* Animation au clic */}
                <span
                  className={`absolute inset-0 bg-blue-500 opacity-0 rounded-md transition-all duration-300 ${
                    pathname === link.href ? "opacity-20 scale-100" : "hover:opacity-10 hover:scale-105"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mode Sombre & Contact */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? <FaMoon className="text-gray-700" /> : <FaSun className="text-yellow-400" />}
          </button>
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition">
              📩 Contact
            </button>
          </Link>
        </div>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-800"
        >
          {isOpen ? <FaTimes className="text-gray-700 dark:text-white" /> : <FaBars className="text-gray-700 dark:text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute top-16 left-0 w-full py-4 shadow-md">
          <ul className="flex flex-col items-center space-y-4">
            {[
              { name: "Accueil", href: "/" },
              { name: "À propos", href: "/about" },
              { name: "Projets", href: "/projects" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="flex space-x-4">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
              >
                {theme === "light" ? <FaMoon className="text-gray-700" /> : <FaSun className="text-yellow-400" />}
              </button>
              <Link href="/contact">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition">
                  📩 Contact
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
