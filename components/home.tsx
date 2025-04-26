"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900">
      <section className="relative z-15 mx-auto px-10 py-40 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl space-y-8 text-white"
        >
          <h1 className="text-5xl font-bold leading-tight">
            Wadah Kolaborasi
            <span className="text-emerald-300">
              {" "}
              Mahasiswa{" "}
            </span>
            Berkualitas
          </h1>
          <p className="text-lg text-white">
            Tumbuh bersama dengan komunitas, event, dan kesempatan pengembangan diri
            bersama berbagai mahasiswa dari Indonesia
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 flex items-center gap-2">
              Mulai Sekarang <FiArrowRight />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10">
              Pelajari Lebih
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}