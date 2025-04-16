"use client";
import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

export default function Features() {
  return (
    <section className="bg-emerald-50 dark:bg-slate-800 py-20" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
          Kenapa Bergabung?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUsers className="w-full h-full" />,
              title: "Komunitas Solid",
              desc: "Temukan teman sejurusan dan minat dari berbagai universitas",
            },
            {
              icon: <FaCalendarAlt className="w-full h-full" />,
              title: "Event Rutin",
              desc: "Webinar, kompetisi, dan workshop pengembangan skill",
            },
            {
              icon: <FaBookOpen className="w-full h-full" />,
              title: "Resource Belajar",
              desc: "Akses materi kuliah, modul, dan penelitian terkini",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-xl p-4 mb-6">
                <div className="text-emerald-600 dark:text-emerald-400">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
