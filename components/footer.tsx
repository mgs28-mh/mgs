// components/Footer.tsx
import { FaGraduationCap, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-2xl text-emerald-400" />
              <span className="text-xl font-bold">KAMMUI</span>
            </div>
            <p className="text-slate-400">
              Platform kolaborasi mahasiswa terbesar di Indonesia
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
                <FaYoutube className="text-xl" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition">Beranda</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition">Tentang Kami</a></li>
              <li><a href="#activities" className="hover:text-emerald-400 transition">Kegiatan</a></li>
              <li><a href="#team" className="hover:text-emerald-400 transition">Tim</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kontak</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>info@campushub.id</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🏢</span>
                <span>Gedung Student Center, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} CampusHub. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}