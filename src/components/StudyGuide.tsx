"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, PenTool, CheckCircle, Layers, Scissors, Highlighter, Layout, Pencil, Play } from "lucide-react";
import { useState } from "react";

/**
 * Update: Sketsa Minimalist (Cuma Garis).
 * Sesuai request, gue ilangin fill warna dan fokus ke "Garis Rangka" biar gampang ditiru di buku.
 */

export default function StudyGuide() {
  const [animKey, setAnimKey] = useState(0);

  const drawSteps = [
    {
      step: "01",
      title: "Tarik Garis Utama",
      desc: "Mulai dari kotak luar S, P, dan D. Cuma garis pinggirnya aja bray.",
      color: "border-blue-500"
    },
    {
      step: "02",
      title: "Sekat Periode",
      desc: "Bagi barisnya jadi 7. Pastiin presisi biar jumlah kotaknya pas.",
      color: "border-emerald-500"
    },
    {
      step: "03",
      title: "Rangka Blok F",
      desc: "Dua baris panjang di bawah buat Lanthanide & Actinide.",
      color: "border-pink-500"
    },
    {
      step: "04",
      title: "Grid Lengkap",
      desc: "Sekarang lo punya 'rumah' buat semua unsur. Tinggal isi simbolnya!",
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

      {/* ANIMASI SKETSA GARIS (WIREFRAME) */}
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
            {drawSteps.map((s, i) => (
              <motion.div 
                key={`${animKey}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 1.5, duration: 0.8 }}
                className={`p-5 bg-white/[0.01] rounded-2xl border-l-2 ${s.color} space-y-1`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-[10px] text-white uppercase tracking-widest">{s.title}</h4>
                  <span className="text-[9px] font-mono text-zinc-700">#{s.step}</span>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CANVAS SKETSA GARIS */}
          <div className="relative aspect-square glass rounded-[3rem] border border-white/5 p-12 flex flex-col items-center justify-center overflow-hidden bg-black/60">
            {/* Grid Background Paper Style */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
            
            <div key={animKey} className="w-full h-full relative flex flex-col justify-center">
              {/* Step 1: Wireframe Blocks */}
              <div className="grid grid-cols-18 gap-1 w-full h-40 items-end">
                {/* S-Block Line */}
                <motion.div 
                  initial={{ pathLength: 0, opacity: 0 }} 
                  animate={{ pathLength: 1, opacity: 1 }} 
                  transition={{ delay: 0.5, duration: 1.5 }}
                  className="col-span-2 border-2 border-blue-500/60 rounded-sm h-full"
                />

                {/* D-Block Line */}
                <motion.div 
                  initial={{ pathLength: 0, opacity: 0 }} 
                  animate={{ pathLength: 1, opacity: 1 }} 
                  transition={{ delay: 1.5, duration: 1.5 }}
                  className="col-span-10 border-2 border-yellow-500/40 rounded-sm h-[60%]"
                />

                {/* P-Block Line */}
                <motion.div 
                  initial={{ pathLength: 0, opacity: 0 }} 
                  animate={{ pathLength: 1, opacity: 1 }} 
                  transition={{ delay: 2.5, duration: 1.5 }}
                  className="col-span-6 border-2 border-emerald-500/60 rounded-sm h-full"
                />
              </div>

              {/* Step 2: Grid Internal Lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-20 px-8 pointer-events-none">
                {[...Array(7)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 3.5 + (i * 0.15), duration: 0.8 }}
                    className="h-[1px] bg-white/20 origin-left"
                  />
                ))}
              </div>

              {/* Step 3: F-Block Wireframe */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 1 }}
                className="mt-6 space-y-1 w-full px-4"
              >
                <motion.div 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 5.2, duration: 1 }}
                  className="h-4 w-full border-2 border-pink-500/40 rounded-sm origin-left" 
                />
                <motion.div 
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 5.5, duration: 1 }}
                  className="h-4 w-full border-2 border-pink-500/40 rounded-sm origin-left" 
                />
              </motion.div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center">
               <p className="text-[9px] font-black text-zinc-800 uppercase tracking-[0.5em]">Mode Garis Rangka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Tambahan */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-8 glass rounded-[2rem] border border-white/5 space-y-3">
          <h4 className="text-lg font-black italic">Pake Penggaris Ngab!</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Biar hasilnya se-keren di layar, pastiin lo pake penggaris pas narik garis rangka utamanya. Mulai dari sisi paling kiri dulu ya.
          </p>
        </div>
        <div className="p-8 glass rounded-[2rem] border border-white/5 space-y-3">
          <h4 className="text-lg font-black italic">Proporsi Itu Kunci</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Inget, Blok D itu lebih pendek (turun ke bawah) dibanding Blok S sama P. Jangan dibikin sejajar semua ya bray!
          </p>
        </div>
      </section>

      <div className="text-center opacity-10 pb-20">
        <CheckCircle className="w-12 h-12 mx-auto" />
      </div>
    </div>
  );
}
