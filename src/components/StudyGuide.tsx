"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, PenTool, CheckCircle, Layers, Pencil, Play, Flame, Zap, Droplets, Wind, Globe } from "lucide-react";
import { useState } from "react";

/**
 * Update: Nambahin Kamus Unsur Iconic biar user tau "H itu apa", dsb.
 */

export default function StudyGuide() {
  const [animKey, setAnimKey] = useState(0);

  const iconicElements = [
    {
      symbol: "H",
      name: "Hydrogen",
      icon: <Wind className="w-5 h-5 text-blue-400" />,
      desc: "Unsur paling pertama dan paling enteng. Dia itu bahan bakar bintang-bintang di langit dan juga air yang lo minum (H2O). OG-nya tabel periodik bray!"
    },
    {
      symbol: "C",
      name: "Carbon",
      icon: <Globe className="w-5 h-5 text-zinc-500" />,
      desc: "Si paling fleksibel. Tubuh lo, makanan, sampe berlian itu isinya Carbon. Tanpa dia, nggak bakal ada kehidupan di bumi. Bener-bener main character!"
    },
    {
      symbol: "O",
      name: "Oxygen",
      icon: <Droplets className="w-5 h-5 text-cyan-400" />,
      desc: "Si penyambung nyawa. Wajib ada buat lo nafas. Dia juga reaktif banget, makanya besi bisa karatan kalo kelamaan main sama dia."
    },
    {
      symbol: "Au",
      name: "Gold",
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      desc: "Sultan-nya logam. Nggak bisa karatan, berkilau, dan mahal abis. Emas itu simbol kekayaan dari zaman purba sampe sekarang bray."
    },
    {
      symbol: "Fe",
      name: "Iron",
      icon: <Layers className="w-5 h-5 text-zinc-400" />,
      desc: "Si tulang punggung peradaban. Jembatan, gedung, sampe sel darah merah lo butuh Besi. Kuat, tangguh, dan bisa diandelin."
    },
    {
      symbol: "He",
      name: "Helium",
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      desc: "Si gas mulia yang bikin suara lo jadi lucu kalo dihirup dari balon. Dia nggak mau temenan (reaksi) sama siapa-siapa, tipikal introvert tapi kece."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-24 py-12 px-4">
      {/* Header */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <GraduationCap className="w-5 h-5" />
          Akademi Kimia
        </div>
        <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-tight">
          PANDUAN <span className="text-blue-500">SALIN BUKU</span>
        </h2>
      </section>

      {/* KAMUS UNSUR ICONIC (NEW!) */}
      <section className="space-y-10">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-black italic">Bedah Kilat: Siapa Aja Mereka?</h3>
        </div>
        <p className="text-sm text-zinc-500 font-medium">
          Lo mungkin bingung liat simbol-simbol aneh di tabel. Nih, gue kasih tau peran beberapa "pemeran utama" yang wajib lo kenal:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iconicElements.map((el, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 glass rounded-[2rem] border border-white/5 space-y-4 hover:bg-white/[0.03] transition-all"
            >
              <div className="flex justify-between items-center">
                <div className="p-3 bg-white/5 rounded-2xl">{el.icon}</div>
                <span className="text-4xl font-black italic text-zinc-800 opacity-50">{el.symbol}</span>
              </div>
              <div>
                <h4 className="text-lg font-black text-white">{el.name}</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed mt-2">{el.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="p-6 bg-blue-500/5 rounded-[2rem] border border-blue-500/10 text-center">
           <p className="text-xs text-blue-400 font-bold italic">
             "Mau tau 112 unsur lainnya? Tinggal klik aja kotaknya di tabel utama bray! Gue udah tulis deskripsi gaul buat semuanya."
           </p>
        </div>
      </section>

      {/* ANIMASI SKETSA GARIS */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <Pencil className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-black italic">Sketsa Garis Rangka</h3>
          </div>
          <button 
            onClick={() => setAnimKey(prev => prev + 1)}
            className="group flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Play className="w-3 h-3 fill-current group-hover:fill-black" /> Ulang Sketsa
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {[
              { t: "Fondasi Utama", d: "Bikin kotak S, P, dan D dulu bray. Rangkanya harus kokoh!" },
              { t: "Sekat Baris", d: "Bagi jadi 7 baris horizontal. Inget, baris 1 cuma ada di ujung." },
              { t: "Slot Bonus", d: "Baris F di paling bawah buku lo. Unsur spesial nih." },
              { t: "Final Check", d: "Udah jadi! Tinggal lo isi simbolnya satu per satu." }
            ].map((s, i) => (
              <div key={i} className="p-4 bg-white/[0.01] rounded-2xl border-l-2 border-zinc-800 space-y-1">
                <h4 className="font-bold text-[10px] text-white uppercase tracking-widest">{s.t}</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-square glass rounded-[3rem] border border-white/5 p-12 flex flex-col items-center justify-center overflow-hidden bg-black/60">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
            <div key={animKey} className="w-full h-full relative flex flex-col justify-center">
              <div className="grid grid-cols-18 gap-1 w-full h-40 items-end">
                <motion.div initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 1.5 }} className="col-span-2 border-2 border-blue-500/60 rounded-sm h-full" />
                <motion.div initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 1.5, duration: 1.5 }} className="col-span-10 border-2 border-yellow-500/40 rounded-sm h-[60%]" />
                <motion.div initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 2.5, duration: 1.5 }} className="col-span-6 border-2 border-emerald-500/60 rounded-sm h-full" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between py-20 px-8 pointer-events-none">
                {[...Array(7)].map((_, i) => (
                  <motion.div key={i} initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 3.5 + (i * 0.15), duration: 0.8 }} className="h-[1px] bg-white/20 origin-left" />
                ))}
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 1 }} className="mt-6 space-y-1 w-full px-4">
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 5.2, duration: 1 }} className="h-4 w-full border-2 border-pink-500/40 rounded-sm origin-left" />
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 5.5, duration: 1 }} className="h-4 w-full border-2 border-pink-500/40 rounded-sm origin-left" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center opacity-10 pb-20">
        <CheckCircle className="w-12 h-12 mx-auto" />
      </div>
    </div>
  );
}
