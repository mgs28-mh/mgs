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
  const [activeLink, setActiveLink] = useState("/");

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

  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang Kami" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Kontak" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm"
          : "bg-white dark:bg-slate-900"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center group"
            onClick={() => setActiveLink("/")}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-8 w-8 md:h-10 md:w-10"
            >
              <Image
                src="/logo.webp"
                alt="KAMMUI"
                fill
                sizes="(max-width: 768px) 32px, 40px"
                priority
                className="object-contain"
              />
            </motion.div>
            <span className="ml-2 text-xl md:text-2xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 transition-colors">
              KAMMUI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 font-medium transition-colors relative group ${
                  activeLink === link.path
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-700 dark:text-slate-300"
                }`}
                onClick={() => setActiveLink(link.path)}
              >
                {link.label}
                <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8 ${
                  activeLink === link.path ? "w-3/4 left-1/8" : ""
                }`}></span>
              </Link>
            ))}
            <Link href="/register" className="ml-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all shadow-lg hover:shadow-emerald-500/20"
              >
                <span>Daftar</span>
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FiX className="h-6 w-6 text-emerald-500" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-white dark:bg-slate-900 shadow-2xl z-50"
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => {
                      setActiveLink("/");
                      setIsOpen(false);
                    }}
                  >
                    <Image
                      src="/logo.webp"
                      alt="KAMMUI"
                      width={28}
                      height={28}
                    />
                    <span className="ml-2 text-xl font-bold text-slate-800 dark:text-white">
                      KAMMUI
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                    aria-label="Close menu"
                  >
                    <FiX className="h-6 w-6 text-emerald-500" />
                  </button>
                </div>

                {/* Main Menu Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`block px-4 py-3 rounded-lg font-medium text-lg relative group ${
                        activeLink === link.path
                          ? "bg-emerald-50 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                      onClick={() => {
                        setActiveLink(link.path);
                        setIsOpen(false);
                      }}
                    >
                      {link.label}
                      <span className={`absolute left-4 bottom-2 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-[calc(100%-2rem)] ${
                        activeLink === link.path ? "w-[calc(100%-2rem)]" : ""
                      }`}></span>
                    </Link>
                  ))}
                  
                  {/* Register Button inside menu */}
                  <Link href="/register" className="block mt-4">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>Daftar</span>
                      <FiArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}