// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaYoutube, } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="KAMMUI"
              width={30}
              height={30}
              priority
            />
              <span className="text-xl font-bold">KAMMUI</span>
            </div>
            <p className="text-slate-200">
              Komunitas Mahasiswa Muslim Unggul Indonesia
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-emerald-400 transition">
                <FaInstagram className="text-xl" />
              </Link>
              <Link href="#" className="text-white hover:text-emerald-400 transition">
                <FaLinkedin className="text-xl" />
              </Link>
              <Link href="#" className="text-white hover:text-emerald-400 transition">
                <FaYoutube className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Tautan Cepat</h3>
            <ul className="space-y-2 text-slate-200">
              <li><Link href="/" className="hover:text-emerald-400 transition">Beranda</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition">Tentang Kami</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Kontak</h3>
            <ul className="space-y-2 text-slate-200">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>info@kammui.id</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🏢</span>
                <span>Surakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} KAMMUI. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-emerald-400 text-sm">Terms of Service</a>
            <a href="#" className="text-white hover:text-emerald-400 text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}