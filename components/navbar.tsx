// components/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek scroll untuk navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup mobile menu ketika resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' : 'bg-white dark:bg-slate-900'}`}>
      <div className="container mx-auto px-5 py-1">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <FaGraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <span className="ml-2 text-xl font-bold text-slate-800 dark:text-white">
              KAMMUI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 px-3 py-2 font-medium transition"
            >
              Beranda
            </a>
            <a 
              href="#about" 
              className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 px-3 py-2 font-medium transition"
            >
              Tentang Kami
            </a>
            <a 
              href="#activities" 
              className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 px-3 py-2 font-medium transition"
            >
              Aktivitas
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 px-3 py-2 font-medium transition"
            >
              Kontak
            </a>
            <button className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full flex items-center transition">
              Daftar <FiArrowRight className="ml-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-800 shadow-lg">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            onClick={() => setIsOpen(false)}
          >
            Tentang Kami
          </a>
          <a
            href="#activities"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            onClick={() => setIsOpen(false)}
          >
            Aktivitas
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            onClick={() => setIsOpen(false)}
          >
            Kontak
          </a>
          <button className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full flex items-center justify-center transition">
            Daftar <FiArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </nav>
  );
}