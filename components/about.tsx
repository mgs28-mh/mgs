"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -bottom-6 -right-5 w-full h-full border-4 border-emerald-400 rounded-2xl z-0"></div>
              <Image
                src="/example-2.jpg"
                alt="Tentang Komunitas"
                width={400}
                height={600}
                className="relative z-10 rounded-2xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </motion.div>
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              Tentang Kami
            </h2>
            <h3 className="text-4xl font-bold text-slate-800 dark:text-white">
              Membangun Jaringan Mahasiswa Berkualitas
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-300">
            KAMMUI menjadi wadah bagi mahasiswa untuk kolaboratif, 
            progresif, produktivitas tinggi, serta bermanfaat bagi masyarakat.
            </p>

            <div className="space-y-4">
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
                <div key={index} className="flex gap-4">
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
                </div>
              ))}
            </div>

            <Link
            href="/about"
              className="mt-6 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center gap-2 transition"
            >
              Selengkapnya <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
