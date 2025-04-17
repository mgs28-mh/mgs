export default function CTA() {
  return (
    <section className="py-30 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl text-white font-bold mb-6">Siap Bergabung?</h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Daftar sekarang dan mulai kembangkan potensimu bersama ribuan
          mahasiswa lainnya!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
            Daftar Sekarang
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
            Tanya Admin
          </button>
        </div>
      </div>
    </section>
  );
}
