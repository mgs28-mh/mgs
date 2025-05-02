'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Image Column */}
          <motion.div variants={itemVariants} className="flex-1 group relative">
            <div className="relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-emerald-200 dark:group-hover:shadow-emerald-800">
              <div className="absolute -bottom-6 -right-5 w-full h-full border-4 border-emerald-400 rounded-2xl z-0 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-3"></div>
              <Image
                src="/example-5.jpg"
                alt="Tentang Komunitas"
                placeholder="empty"
                width={400}
                height={600}
                className="relative z-10 rounded-2xl w-full h-auto object-cover shadow-lg transition-transform duration-500 ease-in-out"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div variants={itemVariants} className="flex-1 space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-emerald-600 dark:text-emerald-400"
            >
              Tentang Kami
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="text-4xl font-bold text-slate-800 dark:text-white"
            >
              Membangun Jaringan Mahasiswa Berkualitas
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300"
            >
              KAMMUI menjadi wadah bagi mahasiswa untuk kolaboratif, progresif,
              produktivitas tinggi, serta bermanfaat bagi masyarakat.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: "200+ Anggota",
                  desc: "Mahasiswa aktif dari berbagai kampus di Indonesia",
                },
                {
                  title: "10+ Kegiatan",
                  desc: "Event tahunan yang mendukung pengembangan skill",
                },
                {
                  title: "8 divisi",
                  desc: "Berdasarkan minat dan bidang studi",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className="mt-6 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full inline-flex items-center gap-2 transition"
              >
                Selengkapnya <FiArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}