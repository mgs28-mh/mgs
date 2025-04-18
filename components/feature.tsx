"use client";
import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

export default function Features() {
  return (
    <section className="bg-emerald-50 dark:bg-slate-800 py-20" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-white font-bold mb-6 leading-normal text-center">
          Komunitas Mahasiswa
          <br />
          Muslim Unggul
          <span className="text-emerald-600 dark:text-emerald-400">
            {" "}
            Indonesia{" "}
          </span>
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto text-center">
          Nilai-Nilai Penting KAMMUI
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUsers className="w-full h-full" />,
              title: "Beriman",
              desc: "Menjadi Mahasiswa yang memiliki Iman dan Takwa Kepada Allah SWT",
            },
            {
              icon: <FaCalendarAlt className="w-full h-full" />,
              title: "Berilmu",
              desc: "Menjadi Mahasiswa yang memiliki pengetahuan yang luas",
            },
            {
              icon: <FaBookOpen className="w-full h-full" />,
              title: "Berdaya Guna",
              desc: "Menjadi Mahasiswa yang bermanfaat bagi lingkungan sekitar",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-xl p-4 mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                <div className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}