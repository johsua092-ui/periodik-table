"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, PenTool, CheckCircle, Layers, Scissors, Highlighter, Layout, Pencil, Play, Sparkles } from "lucide-react";
import { useState } from "react";

/**
 * Update: Animasi Sketsa Premium.
 * Gue apus logo bintang yang ganggu dan gue bikin transisinya lebih "blueprint" style.
 */

export default function StudyGuide() {
  const [animKey, setAnimKey] = useState(0);

  const drawSteps = [
    {
      step: "01",
      title: "Blueprint Kerangka",
      desc: "Mulai dari blok utama: S (kiri), P (kanan), dan D (tengah). Ini pondasi dasarnya bray.",
      color: "border-blue-500"
    },
    {
      step: "02",
      title: "Garis Grid (Baris)",
      desc: "Tarik garis horizontal buat misahin 7 periode. Pastiin lurus ya!",
      color: "border-emerald-500"
    },
    {
      step: "03",
      title: "Sub-Blok F",
      desc: "Tambahin 2 baris khusus Lanthanide & Actinide di paling bawah.",
      color: "border-pink-500"
    },
    {
      step: "04",
      title: "Final Touch",
      desc: "Kasih warna transparan sesuai bloknya biar gampang lo hafalin.",
      color: "border-yellow-500"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-20 py-12 px-4">
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

      {/* ANIMASI TUTORIAL GAMBAR PREMIUM */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <Pencil className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-black italic">Animasi Sketsa Tabel</h3>
          </div>
          <button 
            onClick={() => setAnimKey(prev => prev + 1)}
            className="group flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Play className="w-3 h-3 fill-current group-hover:fill-black" /> Replay Sketsa
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* List Steps - More Professional Look */}
          <div className="space-y-4">
            {drawSteps.map((s, i) => (
              <motion.div 
                key={`${animKey}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 1.5, duration: 0.8 }}
                className={`p-5 bg-white/[0.02] rounded-2xl border-l-2 ${s.color} space-y-1 hover:bg-white/[0.05] transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-[11px] text-white uppercase tracking-widest">{s.title}</h4>
                  <span className="text-[10px] font-mono text-zinc-600">STEP {s.step}</span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CANVAS ANIMASI SKETSA PREMIUM */}
          <div className="relative aspect-square glass rounded-[3rem] border border-white/5 p-12 flex flex-col items-center justify-center overflow-hidden bg-black/40">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            <div key={animKey} className="w-full h-full relative flex flex-col justify-center">
              {/* Step 1: Blocks Outline Animation */}
              <div className="grid grid-cols-18 gap-1 w-full h-40 items-end">
                {/* S-Block */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "100%", opacity: 1 }} 
                  transition={{ delay: 0.5, duration: 1.2, ease: "circOut" }}
                  className="col-span-2 bg-blue-500/10 border border-blue-500/50 rounded-sm relative"
                >
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }} className="absolute inset-0 bg-blue-500/10" />
                </motion.div>

                {/* D-Block */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "60%", opacity: 1 }} 
                  transition={{ delay: 1.5, duration: 1.2, ease: "circOut" }}
                  className="col-span-10 bg-yellow-500/5 border border-yellow-500/30 rounded-sm relative"
                >
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }} className="absolute inset-0 bg-yellow-500/5" />
                </motion.div>

                {/* P-Block */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "100%", opacity: 1 }} 
                  transition={{ delay: 2.5, duration: 1.2, ease: "circOut" }}
                  className="col-span-6 bg-emerald-500/10 border border-emerald-500/50 rounded-sm relative"
                >
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }} className="absolute inset-0 bg-emerald-500/10" />
                </motion.div>
              </div>

              {/* Step 2: Grid Lines Animation */}
              <div className="absolute inset-0 flex flex-col justify-between py-20 px-8 pointer-events-none">
                {[...Array(7)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 3.5 + (i * 0.1), duration: 0.5 }}
                    className="h-[1px] bg-white/5 origin-left"
                  />
                ))}
              </div>

              {/* Step 3: F-Block Animation */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.5, duration: 1 }}
                className="mt-6 space-y-1 w-full px-4"
              >
                <div className="h-4 w-full bg-pink-500/5 border border-pink-500/30 rounded-sm relative overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 4.8, duration: 0.8 }} className="absolute inset-0 bg-pink-500/10" />
                </div>
                <div className="h-4 w-full bg-pink-500/5 border border-pink-500/30 rounded-sm relative overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 5.1, duration: 0.8 }} className="absolute inset-0 bg-pink-500/10" />
                </div>
              </motion.div>

              {/* Final Subtle Shine (No Star!) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 6, duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-white/[0.02] pointer-events-none flex items-center justify-center"
              >
                 <Sparkles className="w-12 h-12 text-white/10" />
              </motion.div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center">
               <p className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.4em]">Sketsa Selesai bray!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Blok Kimia */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-8 glass rounded-[2.5rem] border border-white/5 space-y-4">
          <div className="p-3 bg-red-500/10 w-fit rounded-2xl">
             <Layers className="w-6 h-6 text-red-400" />
          </div>
          <h4 className="text-xl font-black italic">Konsep Dasar Blok</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Blok itu ditentukan dari subkulit mana yang diisi terakhir kali sama elektron. Ini yang nentuin "kepribadian" si unsur bray.
          </p>
        </div>
        <div className="p-8 glass rounded-[2.5rem] border border-white/5 space-y-4">
          <div className="p-3 bg-blue-500/10 w-fit rounded-2xl">
             <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <h4 className="text-xl font-black italic">Tips Hafalan</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Hafalin per-blok jauh lebih gampang daripada ngafalin satu-satu. Otak kita lebih suka ngelompokin data kayak gini.
          </p>
        </div>
      </section>

      <div className="text-center opacity-10 pb-20">
        <CheckCircle className="w-12 h-12 mx-auto" />
      </div>
    </div>
  );
}
