"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, BookOpen, PenTool, CheckCircle, Flame, Star, LayoutGrid, Info } from "lucide-react";

/**
 * Update Besar: Nambahin penjelasan struktur tabel, cara misahin catatan, 
 * dan penjelasan Bohr Model yang super simpel.
 */

export default function StudyGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8 px-4">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
          <GraduationCap className="w-4 h-4" />
          Akademi Kimia
        </div>
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight">
          PANDUAN <span className="text-blue-500">SEPUH KIMIA</span>
        </h2>
        <p className="text-zinc-500 text-sm max-w-xl mx-auto font-medium leading-relaxed">
          Nggak perlu hafal mati, yang penting lo tau "logika" di balik tabelnya bray. Simak nih!
        </p>
      </section>

      {/* 1. Bedah Struktur Tabel */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <LayoutGrid className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-black italic">Gimana Cara Baca Tabelnya?</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 glass rounded-2xl border border-white/5 space-y-3">
            <h4 className="font-bold text-blue-400 uppercase tracking-widest text-xs">Kolom (Golongan) = Geng Sifat</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Unsur yang satu kolom ke bawah itu satu golongan. Mereka itu **"se-geng"**, punya jumlah elektron di kulit luar yang sama. Makanya sifat kimianya mirip banget!
            </p>
          </div>
          <div className="p-6 glass rounded-2xl border border-white/5 space-y-3">
            <h4 className="font-bold text-green-400 uppercase tracking-widest text-xs">Baris (Periode) = Jumlah Kulit</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Unsur yang sebaris ke samping itu satu periode. Artinya, mereka punya jumlah **kulit atom** yang sama. Semakin ke bawah, makin gede atomnya!
            </p>
          </div>
        </div>
      </section>

      {/* 2. Apa itu Bohr Model? */}
      <section className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[100px]" />
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/20 rounded-2xl">
                <Flame className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-black italic">Apa sih Bohr Model itu?</h3>
            </div>
            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <p>
                Bayangin atom itu kayak **Tata Surya mini**. Inti atom (Nucleus) itu Mataharinya, dan elektron-elektron itu Planetnya.
              </p>
              <p>
                Bohr Model itu gambaran orbit planet-planet (elektron) tersebut. Uniknya, tiap orbit punya kapasitas maksimal. Ada yang isinya 2, 8, 18, dst. 
              </p>
              <p className="bg-white/5 p-4 rounded-xl border border-white/5 italic text-blue-300">
                "Kalo lo tau konfigurasi elektron di tiap orbitnya, lo udah megang kartu as buat nebak kelakuan si unsur!"
              </p>
            </div>
          </div>
          <div className="w-full md:w-64 aspect-square glass rounded-full flex items-center justify-center border-dashed border-2 border-white/10 animate-pulse">
            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest text-center px-6">
              Liat di sidebar pas lo klik unsur buat liat animasinya!
            </span>
          </div>
        </div>
      </section>

      {/* 3. Notebook Mastery: Cara Misahin Catatan */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <PenTool className="w-6 h-6 text-purple-500" />
          <h3 className="text-2xl font-black italic">Seni Misahin Catatan di Buku</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Data Wajib Tulis:
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                <li className="bg-white/5 p-2 rounded-lg border border-white/5">Simbol Unsur</li>
                <li className="bg-white/5 p-2 rounded-lg border border-white/5">Nomor Atom</li>
                <li className="bg-white/5 p-2 rounded-lg border border-white/5">Konfigurasi</li>
                <li className="bg-white/5 p-2 rounded-lg border border-white/5">Massa Atom</li>
                <li className="bg-white/5 p-2 rounded-lg border border-white/5">Wujud Zat</li>
                <li className="bg-white/5 p-2 rounded-lg border border-white/5">Geng/Golongan</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-purple-500" />
                Tips Misahin Data:
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-white">Pisahin Per-Blok:</strong> Gunain header yang jelas buat tiap Golongan. Contoh: <span className="text-blue-400 font-mono">GOLONGAN 1: Logam Alkali</span>. Kasih garis bawah biar nggak kecampur sama golongan lain.
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-white">Kolom Khusus Fungsi:</strong> Buat kolom kecil di paling kanan buat tulis satu fungsi nyata. Misal: <span className="italic text-purple-400">"Buat kabel listrik"</span> atau <span className="italic text-purple-400">"Isi balon"</span>. Ini bantu otak lo bikin koneksi data.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.3em] text-center">Visual Checklist</p>
            <div className="bg-zinc-950 p-8 rounded-[2rem] border border-white/5 shadow-2xl space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="text-4xl font-black italic text-blue-500">Au</div>
                <div className="text-right">
                  <div className="text-xs font-bold text-zinc-500 uppercase">Emas</div>
                  <div className="text-[10px] font-mono text-zinc-700">Atom: 79</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[9px] uppercase text-zinc-600 font-bold">Massa</div>
                  <div className="text-xs font-mono">196.97 u</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] uppercase text-zinc-600 font-bold">Wujud</div>
                  <div className="text-xs font-mono">Padat</div>
                </div>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <p className="text-[10px] text-blue-300 italic font-medium leading-relaxed">
                  "Catet: Ini logam transisi. Paling stabil, anti-karat, sultan abis!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center opacity-10 pb-10">
        <Star className="w-10 h-10 mx-auto" />
      </div>
    </div>
  );
}
