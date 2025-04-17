// app/about/page.tsx
'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const cardHover = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function AboutPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={container}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900"
    >
      {/* Hero About Section */}
      <section className="py-50 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={item}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Tentang{" "}
              <motion.span 
                className="text-emerald-600 dark:text-emerald-400"
                whileHover={{ scale: 1.05 }}
              >
                Kami
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              Komunitas Mahasiswa Muslim Unggul Indonesia
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={container}
          >
            <motion.div 
              variants={item}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/example-4.jpg"
                alt="Tim Kami"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            <motion.div 
              variants={item}
              className="space-y-6"
            >
              <motion.h2 
                className="text-3xl font-bold text-emerald-600 dark:text-emerald-400"
                whileHover={{ x: 5 }}
              >
                KAMMUI
              </motion.h2>
              
              <motion.h3 
                className="text-3xl font-bold text-gray-800 dark:text-white"
                whileHover={{ x: 5 }}
              >
                Membangun Komunitas Muslim
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300"
                whileHover={{ scale: 1.01 }}
              >
                KAMMUI didirikan pada tahun 2023 dengan misi menyatukan
                mahasiswa dari berbagai universitas untuk berkolaborasi,
                belajar, dan berkembang bersama.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={container}
              >
                <motion.div 
                  variants={item}
                  className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg"
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <h3 className="font-bold text-emerald-600 dark:text-emerald-400">
                    10.000+
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Anggota</p>
                </motion.div>
                
                <motion.div 
                  variants={item}
                  className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg"
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <h3 className="font-bold text-blue-600 dark:text-blue-400">
                    50+
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Universitas
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={item}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Nilai{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Kami
              </span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
          >
            {[
              {
                icon: (
                  <FaUsers className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                ),
                title: "Kolaborasi",
                desc: "Kami percaya kekuatan kolaborasi antar disiplin ilmu",
              },
              {
                icon: (
                  <FaLightbulb className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                ),
                title: "Inovasi",
                desc: "Mendorong solusi kreatif untuk masalah nyata",
              },
              {
                icon: (
                  <FaHandshake className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                ),
                title: "Integritas",
                desc: "Menjunjung tinggi kejujuran dalam setiap tindakan",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                variants={cardHover}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div 
                  className="mb-6"
                  whileHover={{ rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}