"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-30">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl font-bold text-slate-800 dark:text-white leading-tight">
              Wadah Kolaborasi
              <span className="text-emerald-600 dark:text-emerald-400">
                {" "}
                Mahasiswa{" "}
              </span>
              Berkualitas
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Temukan komunitas, event kampus, dan kesempatan pengembangan diri
              bersama ribuan mahasiswa seluruh Indonesia
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 flex items-center gap-2">
                Mulai Sekarang <FiArrowRight />
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400">
                Pelajari Lebih
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-1 rounded-2xl shadow-xl">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4">
                <img
                  src="example-1.jpg"
                  alt="Komunitas Mahasiswa"
                  className="rounded-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
