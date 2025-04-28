// app/about/page.tsx
'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaHandsHelping } from "react-icons/fa";

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
                src="/example-5.jpg"
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

      <section className="bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800 py-24" id="values">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Modern header with decorative elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 tracking-wider">
              NILAI-NILAI KAMI
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-normal text-white">
            Komunitas Mahasiswa Muslim Unggul
            <br />
            <span className="text-emerald-400">Indonesia</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Feature cards with consistent emerald styling */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: <FaUsers className="w-6 h-6" />,
              title: "Beriman & Bertakwa",
              desc: "Menjadi Mahasiswa yang memiliki Iman dan Takwa Kepada Allah SWT sebagai pondasi utama",
            },
            {
              icon: <FaLightbulb className="w-6 h-6" />,
              title: "Berilmu & Kritis",
              desc: "Mengembangkan pengetahuan yang luas dengan pemikiran kritis dan analitis",
            },
            {
              icon: <FaHandsHelping className="w-6 h-6" />,
              title: "Berdaya Guna",
              desc: "Memberikan manfaat nyata bagi masyarakat dan lingkungan sekitar",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 max-w-sm w-full mx-auto"
            >
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 transition-opacity duration-500" />
              
              {/* Icon container */}
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 group-hover:bg-emerald-200 group-hover:text-emerald-700 dark:group-hover:bg-emerald-800 dark:group-hover:text-emerald-200 mx-auto transition-colors duration-300"
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">
                {item.desc}
              </p>
              
              {/* Decorative dot */}
              <div className="w-3 h-3 rounded-full bg-emerald-400 absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Modern decorative element */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full opacity-60" />
        </motion.div>
      </div>
    </section>
    </motion.main>
  );
}