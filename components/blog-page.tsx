'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { getAllArticles, PaginatedArticles } from '@/lib/api-blog';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function BlogPost() {
  const [articlesData, setArticlesData] = useState<PaginatedArticles>({
    articles: [],
    total: 0,
    currentPage: 1,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await getAllArticles(
          itemsPerPage,
          (currentPage - 1) * itemsPerPage
        );
        setArticlesData(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 bg-blend-darken">
        <div className="animate-pulse text-white">Loading articles...</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-12 md:p-24 bg-blend-darken">
      <section className="w-full pt-6 sm:pt-12">
        <div className="mx-auto container space-y-8 sm:space-y-12 px-2 sm:px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex py-20 flex-col items-center justify-center space-y-2 sm:space-y-4 text-center"
          >
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-3xl font-bold tracking-tighter text-white">
                Blog & Artikel
              </h1>
              <p className="text-sm sm:text-base max-w-[900px] leading-normal text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dapatkan Berbagai Artikel Tentang Pendidikan dan Kegiatan Mahasiswa
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-12"
          >
            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articlesData.articles.map((article) => (
                <motion.article
                  key={article.sys.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden border border-slate-900 hover:border-green-300 transition-colors"
                >
                  {article.articleImage?.url && (
                    <div className="aspect-[3/2] w-full relative">
                      <Image
                        alt={article.title}
                        className="object-cover"
                        fill
                        src={article.articleImage.url}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        priority={false}
                      />
                    </div>
                  )}
                  <div className="flex-1 p-4 sm:p-6 bg-slate-900">
                    <Link href={`/blog/${article.slug}`}>
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white py-2 sm:py-4 hover:text-green-700 transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <div className="flex pt-1 justify-start">
                      <Link
                        className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 flex items-center gap-1 sm:gap-2 hover:underline"
                        href={`/blog/${article.slug}`}
                      >
                        Baca selengkapnya
                        <motion.span whileHover={{ x: 5 }}>
                          <FiArrowRight className="ml-1 sm:ml-2" />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination Controls */}
            {articlesData.totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:bg-slate-800'}`}
                >
                  <FiChevronLeft size={20} />
                </button>

                {Array.from({ length: articlesData.totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-md ${currentPage === page ? 'bg-emerald-600 text-white' : 'text-white hover:bg-slate-800'}`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === articlesData.totalPages}
                  className={`p-2 rounded-md ${currentPage === articlesData.totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:bg-slate-800'}`}
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}