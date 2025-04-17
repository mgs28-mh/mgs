"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Blog() {
  const posts = [
    {
      id: 1,
      category: "Aktivitas",
      date: "10 Oktober 2024",
      title: "Kajian Mahasiswa Muslim",
      excerpt: "Kegiatan kajian untuk menguatkan iman dan takwa mahasiswa",
      image: "/example-1.jpg"
    },
    {
      id: 2,
      category: "Tips",
      date: "5 November 2024",
      title: "Menjadi Mahasiswa Muslim Produktif",
      excerpt: "Berbagai tips untuk mejadi mahasiswa muslim yang produktif",
      image: "/example-3.jpg"
    },
    {
      id: 3,
      category: "Update",
      date: "20 Desember 2024",
      title: "Kegiatan Ramadhan KAMMUI",
      excerpt: "Berbagai kegiatan yang dilaksanakan pada bulan Ramadhan 1446 H",
      image: "/example-4.jpg"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Blog & Artikel
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Temukan artikel terbaru seputar pengembangan web dan teknologi terkini
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-emerald-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <a href="#" className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2 hover:underline">
                Baca selengkapnya
                <FiArrowRight className="ml-2" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
