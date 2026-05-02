"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, PenTool, CheckCircle, Star, Layers, Scissors, Highlighter, Layout, Pencil, Play } from "lucide-react";
import { useState } from "react";

/**
 * Update: Tutorial Gambar Manual Teranimasi.
 * Gue pake Framer Motion biar gambarnya muncul satu-satu sesuai urutan.
 */

export default function StudyGuide() {
  const [animKey, setAnimKey] = useState(0);

  const drawSteps = [
    {
      step: "01",
      title: "Kerangka Utama (Outline)",
      desc: "Bikin 3 blok utama: S (kiri), P (kanan), dan D (tengah).",
      color: "border-blue-500",
      target: "main-outline"
    },
    {
      step: "02",
      title: "Baris Periode",
      desc: "Tarik 7 garis horizontal buat misahin tingkat energinya.",
      color: "border-green-500",
      target: "lines"
    },
    {
      step: "03",
      title: "Blok F (Bawah)",
      desc: "Tambahin 2 baris khusus di paling bawah (Lanthanide & Actinide).",
      color: "border-pink-500",
      target: "f-block"
    },
    {
      step: "04",
      title: "Finishing & Simbol",
      desc: "Isi nama unsur dan kasih warna biar gampang dibedain.",
      color: "border-yellow-500",
      target: "symbols"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-20 py-12 px-4">
      {/* Header */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <GraduationCap className="w-5 h-5" />
          Master Blueprint Catatan
        </div>
        <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-tight">
          PANDUAN <span className="text-blue-500">SALIN BUKU</span>
        </h2>
      </section>

      {/* ANIMASI TUTORIAL GAMBAR (INI YANG LO MINTA) */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <Pencil className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-black italic">Animasi Langkah Menggambar</h3>
          </div>
          <button 
            onClick={() => setAnimKey(prev => prev + 1)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors"
          >
            <Play className="w-3 h-3 fill-white" /> Replay Animasi
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {drawSteps.map((s, i) => (
              <motion.div 
                key={`${animKey}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 1.5 }}
                className={`p-4 glass rounded-2xl border-l-4 ${s.color} space-y-1`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black opacity-30">{s.step}</span>
                  <h4 className="font-bold text-xs text-white uppercase tracking-wider">{s.title}</h4>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CANVAS ANIMASI SKETSA */}
          <div className="relative aspect-square glass rounded-[3rem] border border-white/5 p-10 flex flex-col items-center justify-center overflow-hidden bg-zinc-950/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
            
            <div key={animKey} className="w-full h-full relative">
              {/* Step 1: Main Blocks */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="grid grid-cols-18 gap-1 w-full"
              >
                {/* S-Block */}
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: "100px" }} transition={{ delay: 0.8, duration: 0.8 }}
                  className="col-span-2 bg-blue-500/20 border-2 border-blue-500/40 rounded-sm" 
                />
                {/* D-Block Gap */}
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: "60px" }} transition={{ delay: 1.2, duration: 0.8 }}
                  className="col-span-10 mt-10 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-sm" 
                />
                {/* P-Block */}
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: "100px" }} transition={{ delay: 1.6, duration: 0.8 }}
                  className="col-span-6 bg-green-500/20 border-2 border-green-500/40 rounded-sm" 
                />
              </motion.div>

              {/* Step 2: Grid Lines */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2.5 + (i * 0.1), duration: 0.3 }}
                    className="h-px bg-white/10"
                  />
                ))}
              </motion.div>

              {/* Step 3: F-Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 1 }}
                className="mt-8 space-y-1"
              >
                <div className="h-4 w-full bg-pink-500/20 border-2 border-pink-500/40 rounded-sm flex items-center justify-center">
                   <span className="text-[6px] font-bold text-pink-400">LANTHANIDE</span>
                </div>
                <div className="h-4 w-full bg-pink-500/20 border-2 border-pink-500/40 rounded-sm flex items-center justify-center">
                   <span className="text-[6px] font-bold text-pink-400">ACTINIDE</span>
                </div>
              </motion.div>

              {/* Step 4: Symbols (Flash Effect) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="p-4 bg-blue-500 rounded-2xl shadow-2xl shadow-blue-500/50 animate-bounce">
                   <Star className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center">
               <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Ikutin urutan warnanya bray!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian 2: Penjelasan & Cara Misahin Per-Blok */}
      <section className="space-y-12">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <Layers className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-black italic">Detail Blok Kimia</h3>
        </div>

        <div className="grid gap-6">
          <div className="p-8 glass rounded-3xl border-l-8 border-red-500 space-y-4">
            <h4 className="text-2xl font-black text-red-500 italic">BLOK S</h4>
            <p className="text-sm text-zinc-400">Elektron terakhir di subkulit s. Golongan 1, 2, & Helium.</p>
          </div>
          <div className="p-8 glass rounded-3xl border-l-8 border-blue-500 space-y-4">
            <h4 className="text-2xl font-black text-blue-500 italic">BLOK P</h4>
            <p className="text-sm text-zinc-400">Subkulit p yang keisi. Golongan 13 sampe 18.</p>
          </div>
        </div>
      </section>

      <div className="text-center opacity-10 pb-20">
        <BookOpen className="w-12 h-12 mx-auto" />
      </div>
    </div>
  );
}
