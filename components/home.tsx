"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiUsers, FiCalendar, FiAward } from "react-icons/fi";

export default function HomePage() {
  return (
    <main className="relative min-h-screen py-5 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background pola */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-900 dark:bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
      </div>

      {/* Efek blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-xl bg-emerald-300 blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-xl bg-blue-300 blur-3xl"
      />

      {/* Konten Utama */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16 sm:py-24">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Kolom kiri - Teks */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 text-sm font-medium mb-4"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Komunitas Mahasiswa Muslim Unggul Indonesia
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white"
              >
                Kolaborasi Tanpa Batas untuk{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-300 dark:from-emerald-400 dark:to-teal-200">
                  Mahasiswa Muslim
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0"
              >
                Platform inklusif untuk pengembangan diri, jaringan profesional, dan pertumbuhan spiritual bagi mahasiswa muslim di seluruh Indonesia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center justify-center sm:justify-start"
              >
                <button className="relative group bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-6 py-3.5 rounded-lg hover:shadow-lg transition-all duration-300 shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
                  <span>Bergabung Sekarang</span>
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
                <button className="relative px-6 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  Lihat Kegiatan
                </button>
              </motion.div>
            </div>

            {/* Kolom kanan - Kartu fitur */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 sm:mt-0"
            >
              <Card
                icon={<FiUsers className="text-emerald-500 dark:text-emerald-400 text-xl" />}
                title="Komunitas"
                desc="Temukan jaringan mahasiswa muslim dari berbagai kampus di Indonesia."
                bg="emerald"
              />
              <Card
                icon={<FiCalendar className="text-blue-500 dark:text-blue-400 text-xl" />}
                title="Event"
                desc="Kegiatan berkualitas untuk pengembangan diri dan spiritual."
                bg="blue"
              />
              <Card
                icon={<FiAward className="text-purple-500 dark:text-purple-400 text-xl" />}
                title="Pelatihan"
                desc="Program khusus untuk meningkatkan kompetensi dan keterampilan."
                bg="purple"
              />
              <div className="bg-gradient-to-br from-emerald-500 to-teal-400 p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg text-white mb-2">Gabung Sekarang</h3>
                <p className="text-white/90 text-sm">Daftarkan diri Anda dan mulai kembangkan potensi bersama kami.</p>
                <button className="mt-4 w-full bg-white text-emerald-600 hover:bg-slate-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Daftar Gratis
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Card({ icon, title, desc, bg }: { icon: React.ReactNode, title: string, desc: string, bg: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-lg bg-${bg}-50 dark:bg-${bg}-900/30 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm">{desc}</p>
    </div>
  );
}
