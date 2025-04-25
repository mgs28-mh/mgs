'use client';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function CTA() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-30 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl text-white font-bold mb-6 leading-normal"
        >
          Mari Bergabung Bersama Kami
          <br />
          Untuk Menjadi
          <span className="text-emerald-600 dark:text-emerald-400">
            {" "}
            Agen Perubahan{" "}
          </span>
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-white mb-8 max-w-2xl mx-auto"
        >
          Daftar sekarang dan mulai kembangkan potensimu bersama mahasiswa
          lainnya!
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Daftar Sekarang
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition"
          >
            Tanya Admin
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}