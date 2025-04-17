"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Blog() {
  return (
    <section className="container dark:bg-slate-900 mx-auto px-6 py-20" id="activities">
      <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
        Kegiatan Terbaru
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={`/example-3.jpg`}
              alt="Event"
              height={400}
              width={600}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm">
                  Workshop
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  15 Oktober 2024
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-slate-800 dark:text-white">
                Masterclass Data Science
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Pelajari teknik analisis data terkini dengan Python dan Machine
                Learning
              </p>
              <button className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2 hover:underline">
                Lihat Detail <FiArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
