"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image with Green Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/example-1.jpg"
          alt="Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-15 mx-auto px-10 py-45 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-6 text-white"
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