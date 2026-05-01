"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, BookOpen, PenTool, CheckCircle, Flame } from "lucide-react";

export default function StudyGuide() {
  const steps = [
    {
      title: "Kenalan Santai",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      desc: "Jangan langsung hafal semua, bray! Liat simbol sama nomor atomnya aja dulu. Klik satu-satu, rasain getarannya.",
      tip: "Tips: Hafalin 10 unsur pertama dulu (H sampe Ne)."
    },
    {
      title: "Cek Orbitnya!",
      icon: <Flame className="w-5 h-5 text-red-500" />,
      desc: "Liat Bohr Model-nya. Kalo elektron di kulit luarnya sama, berarti mereka itu 'se-geng' (satu golongan). Sifatnya pasti mirip-mirip!",
      tip: "Kunci: Elektron valensi itu penentu takdir kimia!"
    },
    {
      title: "Warna adalah Kunci",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      desc: "Aplikasi ini udah dipisahin pake warna. Hafalin per-kategori aja. Misalnya, geng 'Noble Gases' itu geng kalem yang nggak mau bereaksi.",
      tip: "Hafalin Gas Mulia (kanan) & Logam Alkali (kiri) dulu."
    },
    {
      title: "Spam Mode Kuis",
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      desc: "Bosen baca? Gaskeun maen kuis 10 menit tiap hari. Dijamin hafal luar kepala tanpa kerasa belajar.",
      tip: "Target: Lewatin High Score lo tiap hari!"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 px-4">
      {/* Hero Learning */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
          <GraduationCap className="w-4 h-4" />
          Metode Belajar GG
        </div>
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">
          KIMIA ITU GAMPANG, BRAY! 🚀
        </h2>
        <p className="text-white/50 text-lg">
          Nggak usah pusing liat tabel seribet itu. Pake cara ini biar lo jadi sepuh kimia di kelas!
        </p>
      </section>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 glass rounded-2xl border-l-4 border-blue-500 space-y-4 hover:bg-white/5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg">{step.icon}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10 text-xs text-blue-300 font-medium italic">
              {step.tip}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Notebook Section */}
      <section className="glass p-8 rounded-3xl border border-white/10 space-y-6">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <div className="p-3 bg-purple-500/20 rounded-2xl">
            <PenTool className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-2xl font-black">Wajib Tulis di Buku Lo!</h3>
            <p className="text-white/40 text-xs uppercase tracking-widest">Cheatsheet biar nggak remedial</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-purple-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Tiap Unsur Catat Ini:
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex gap-2"><span>✅</span> <strong>Simbol & No. Atom:</strong> Identitas utama.</li>
              <li className="flex gap-2"><span>✅</span> <strong>Konfigurasi:</strong> Kunci buat tau sifatnya.</li>
              <li className="flex gap-2"><span>✅</span> <strong>Wujud (25°C):</strong> Padat, cair, atau gas.</li>
              <li className="flex gap-2"><span>✅</span> <strong>Satu Kegunaan:</strong> Biar lo tau ini barang buat apa.</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3">
            <p className="text-xs font-bold text-white/30 uppercase tracking-tighter">Contoh Format GG:</p>
            <div className="font-mono text-[11px] space-y-1 text-green-400">
              <div>[Nama: Lithium]</div>
              <div>[Simbol: Li | No: 3]</div>
              <div>[Config: [He] 2s1]</div>
              <div>[Wujud: Padat]</div>
              <div>[Fungsi: Batre HP lo!]</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 opacity-30 text-xs italic">
        "Kimia itu asik kalo lo tau caranya. Semangat belajarnya, bray!"
      </footer>
    </div>
  );
}
