'use client';
import ContactForm from '@/components/contact-form';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-30 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hubungi Kami
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Kami senang mendengar dari Anda. Silakan isi formulir atau gunakan informasi kontak di bawah ini.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulir Kontak */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Kirim Pesan
          </h2>
          <ContactForm />
        </section>

        {/* Informasi Kontak */}
        <section>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full">
                <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Lokasi
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Jl. Kartika 3 No.36, Jebres, Kec. Jebres, Kota Surakarta, Jawa Tengah 57126
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Telepon
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +62 123 4567 890
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  (021) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full">
                <FaEnvelope className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  info@kammui.id
                </p>
              </div>
            </div>
          </div>

          {/* Peta */}
          <div className="mt-12 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Jl.+Kartika+3+No.36,+Jebres,+Kec.+Jebres,+Kota+Surakarta,+Jawa+Tengah+57126&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}