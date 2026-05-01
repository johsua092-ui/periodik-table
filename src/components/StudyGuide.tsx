"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, BookOpen, PenTool, CheckCircle, Flame, Star, LayoutGrid, Info, Layers } from "lucide-react";

/**
 * Update: Hapus semua tanda ** dan nambahin panduan pemisahan data per-blok.
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
          Nggak perlu hafal mati, yang penting lo tau logika di balik tabelnya bray. Simak nih!
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
              Unsur yang satu kolom ke bawah itu satu golongan. Mereka itu se-geng, punya jumlah elektron di kulit luar yang sama. Makanya sifat kimianya mirip banget!
            </p>
          </div>
          <div className="p-6 glass rounded-2xl border border-white/5 space-y-3">
            <h4 className="font-bold text-green-400 uppercase tracking-widest text-xs">Baris (Periode) = Jumlah Kulit</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Unsur yang sebaris ke samping itu satu periode. Artinya, mereka punya jumlah kulit atom yang sama. Semakin ke bawah, makin gede atomnya!
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
                Bayangin atom itu kayak Tata Surya mini. Inti atom (Nucleus) itu Mataharinya, dan elektron-elektron itu Planetnya.
              </p>
              <p>
                Bohr Model itu gambaran orbit planet-planet (elektron) tersebut. Uniknya, tiap orbit punya kapasitas maksimal. Ada yang isinya 2, 8, 18, dst. 
              </p>
              <p className="bg-white/5 p-4 rounded-xl border border-white/5 italic text-blue-300">
                Kalo lo tau konfigurasi elektron di tiap orbitnya, lo udah megang kartu as buat nebak kelakuan si unsur!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Notebook Mastery: Pemisahan Per-Blok */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <Layers className="w-6 h-6 text-purple-500" />
          <h3 className="text-2xl font-black italic">Cara Misahin Data Per-Blok</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Penjelasan Blok */}
          <div className="space-y-6">
            <p className="text-sm text-zinc-400 leading-relaxed">
              Biar buku lo nggak berantakan, bagi catatan lo jadi 4 blok utama sesuai lokasi elektron terakhirnya. Ini standar internasional bray!
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-red-500/5 border-l-4 border-red-500 rounded-r-xl space-y-1">
                <h5 className="text-red-400 font-bold text-xs uppercase">Blok S (Kiri)</h5>
                <p className="text-[11px] text-zinc-500">Isinya Logam Alkali & Alkali Tanah. Kelakuannya reaktif abis!</p>
              </div>
              <div className="p-4 bg-yellow-500/5 border-l-4 border-yellow-500 rounded-r-xl space-y-1">
                <h5 className="text-yellow-400 font-bold text-xs uppercase">Blok D (Tengah)</h5>
                <p className="text-[11px] text-zinc-500">Logam Transisi. Ini geng logam-logam kuat kayak Besi & Emas.</p>
              </div>
              <div className="p-4 bg-blue-500/5 border-l-4 border-blue-500 rounded-r-xl space-y-1">
                <h5 className="text-blue-400 font-bold text-xs uppercase">Blok P (Kanan)</h5>
                <p className="text-[11px] text-zinc-500">Campuran Logam, Metalloid, sampe Gas Mulia. Blok paling rame!</p>
              </div>
              <div className="p-4 bg-pink-500/5 border-l-4 border-pink-500 rounded-r-xl space-y-1">
                <h5 className="text-pink-400 font-bold text-xs uppercase">Blok F (Bawah)</h5>
                <p className="text-[11px] text-zinc-500">Lanthanide & Actinide. Geng unsur langka & radioaktif.</p>
              </div>
            </div>
          </div>

          {/* Contoh Layout Buku */}
          <div className="space-y-4">
            <p className="text-[10px] font-black text-zinc-700 uppercase tracking-widest text-center">Contoh Layout di Buku Lo</p>
            <div className="bg-zinc-950 p-6 rounded-3xl border border-white/5 space-y-6">
              {/* Header Blok */}
              <div className="px-4 py-2 bg-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest rounded-lg w-fit">
                # SECTION: BLOK S
              </div>
              
              {/* List Unsur dalam Blok */}
              <div className="space-y-4">
                <div className="border-l-2 border-white/10 pl-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-white">Hydrogen (H)</span>
                    <span className="text-zinc-600 font-mono text-[10px]">No: 1</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 italic">Catatan: Paling ringan, s-block, 1 elektron terluar.</p>
                </div>
                
                <div className="border-l-2 border-white/10 pl-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-white">Lithium (Li)</span>
                    <span className="text-zinc-600 font-mono text-[10px]">No: 3</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 italic">Catatan: Logam alkali, reaktif, buat batre HP.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[9px] text-zinc-600 font-medium">
                  Tips: Pake pembatas warna tiap ganti blok biar nyarinya cepet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Notebook Essentials */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <PenTool className="w-6 h-6 text-purple-500" />
          <h3 className="text-2xl font-black italic">Data Wajib Catat</h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            "Simbol Unsur", "Nomor Atom", "Konfigurasi", 
            "Massa Atom", "Wujud Zat", "Golongan"
          ].map((item, i) => (
            <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
              <CheckCircle className="w-4 h-4 text-green-500 mx-auto mb-2" />
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center opacity-10 pb-10">
        <Star className="w-10 h-10 mx-auto" />
      </div>
    </div>
  );
}
