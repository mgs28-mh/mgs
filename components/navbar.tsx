// components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-slate-900 shadow-sm"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      <div className="container mx-auto px-5 py-1">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.webp"
              alt="KAMMUI"
              width={30}
              height={30}
              priority
            />
            <span className="ml-2 text-xl font-bold text-slate-800 dark:text-white">
              KAMMUI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {["/", "/about", "/blog", "/contact"].map((path, index) => (
              <Link
                key={index}
                href={path}
                className="text-white hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 px-3 py-2 font-medium transition"
              >
                {["Beranda", "Tentang Kami", "Blog", "Kontak"][index]}
              </Link>
            ))}
            <Link href="/register">
              <button className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full flex items-center transition">
                Daftar <FiArrowRight className="ml-1" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-emerald-600 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FiX className="h-6 w-6 text-emerald-500" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Now with solid background */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content with solid background */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-slate-900 z-50" // Removed transparency
            >
              {/* Header with close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <FiX className="h-6 w-6 text-emerald-500" />
                </button>
              </div>

              {/* Main Menu Items */}
              <div className="px-6 pb-6 space-y-4">
                {["/", "/about", "/blog", "/contact"].map((path, index) => (
                  <Link
                    key={index}
                    href={path}
                    className="block text-lg font-medium text-white hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 py-3 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {["Beranda", "Tentang Kami", "Blog", "Kontak"][index]}
                  </Link>
                ))}
                <Link href="/register" className="block mt-6">
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full flex items-center justify-center transition">
                    Daftar <FiArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}