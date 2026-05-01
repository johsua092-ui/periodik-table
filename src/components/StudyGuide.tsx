"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, BookOpen, PenTool, CheckCircle, Flame, Star } from "lucide-react";

/**
 * Pusat Belajar - Gue bikin isinya makin padet biar user tau apa yang harus dilakuin.
 * Udah gue hapus tulisan penutup yang lo suruh ilangin bray.
 */

export default function StudyGuide() {
  const steps = [
    {
      title: "Pahami 'Geng' Unsur",
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      desc: "Liat warnanya! Unsur se-warna itu biasanya satu geng (golongan). Mereka punya sifat yang mirip banget. Hafalin per-geng jauh lebih gampang daripada satu-satu.",
      tip: "Fokus: Hafalin Golongan 1 (Alkali) & 18 (Gas Mulia) dulu."
    },
    {
      title: "Bohr Model itu Cheat Code",
      icon: <Flame className="w-5 h-5 text-red-500" />,
      desc: "Cek jumlah elektron di kulit paling luar. Kalo jumlahnya sama, kelakuan kimianya pasti sama. Ini rahasia biar lo nggak perlu hafal ribuan reaksi.",
      tip: "Kunci: Kulit terluar = Karakter aslinya si unsur."
    },
    {
      title: "Visualisasi 10 Menit",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      desc: "Maen kuis tiap hari. Nggak usah lama-lama, 10 menit aja sambil nunggu bus atau rebahan. Kecepatan otak lo bakal naik drastis!",
      tip: "Target: Cobain Mode Kuis sampe dapet skor sempurna."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 px-4">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
          <GraduationCap className="w-4 h-4" />
          Metode Belajar Sepuh
        </div>
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight">
          STRATEGI BELAJAR <br/> <span className="text-blue-500">KIMIA ANTI-REMEDIAL</span>
        </h2>
      </section>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 glass rounded-2xl border-t-2 border-blue-500/50 space-y-4 hover:translate-y-[-5px] transition-all"
          >
            <div className="p-2.5 bg-white/5 w-fit rounded-xl">{step.icon}</div>
            <h3 className="text-lg font-bold">{step.title}</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
            <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10 text-[10px] text-blue-400 font-bold italic uppercase tracking-wider">
              {step.tip}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Notebook Mastery Section - Dibikin makin detail buat dicatet */}
      <section className="glass p-6 md:p-10 rounded-[2rem] border border-white/5 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[80px] -z-10" />
        
        <div className="flex items-center gap-5 border-b border-white/10 pb-6">
          <div className="p-4 bg-purple-500/20 rounded-2xl shadow-xl shadow-purple-500/10">
            <PenTool className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">Cheat Sheet Buku Catatan</h3>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Bikin buku lo jadi senjata mematikan</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-500" />
              Langkah Nyatet yang Efisien:
            </h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-none w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">1</div>
                <p className="text-sm text-zinc-400"><strong className="text-white">Satu Halaman, Satu Golongan:</strong> Fokus catat unsur dalam satu kolom tabel periodik. Jangan dicampur, biar otak lo nggak bingung.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-none w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">2</div>
                <p className="text-sm text-zinc-400"><strong className="text-white">Gambar Bohr Model-nya:</strong> Nggak perlu bagus, yang penting lo tau berapa elektron di kulit terluarnya.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-none w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">3</div>
                <p className="text-sm text-zinc-400"><strong className="text-white">Pake Warna:</strong> Samain warna di buku sama warna di aplikasi ini. Visualisasi warna itu ngebantu ingatan jangka panjang.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-none w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">4</div>
                <p className="text-sm text-zinc-400"><strong className="text-white">Catat Fungsi Uniknya:</strong> Misalnya, Neon buat lampu, Lithium buat batre. Kalo ada hubungannya sama kehidupan, lo bakal lebih gampang inget.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest text-center">Contoh Template di Buku:</p>
            <div className="bg-zinc-950 p-6 rounded-3xl border border-white/5 shadow-inner space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-purple-500 font-black text-xl">Li</span>
                <span className="text-zinc-700 font-mono text-sm">#3</span>
              </div>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex justify-between"><span className="text-zinc-600">Nama:</span> <span className="text-zinc-300">Lithium</span></div>
                <div className="flex justify-between"><span className="text-zinc-600">Massa:</span> <span className="text-zinc-300">6.94 u</span></div>
                <div className="flex justify-between"><span className="text-zinc-600">Config:</span> <span className="text-zinc-300">[He] 2s1</span></div>
                <div className="flex justify-between"><span className="text-zinc-600">Wujud:</span> <span className="text-zinc-300">Padat</span></div>
                <div className="flex justify-between"><span className="text-zinc-600">Geng:</span> <span className="text-zinc-300">Alkali Metal</span></div>
              </div>
              <div className="pt-2 border-t border-white/5 italic text-[10px] text-zinc-500">
                "Batre HP lo & Tesla pake ini bray!"
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center opacity-10 py-4">
        <CheckCircle className="w-8 h-8 mx-auto" />
      </div>
    </div>
  );
}
