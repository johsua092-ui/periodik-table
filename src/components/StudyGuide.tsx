"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, PenTool, CheckCircle, Star, Layers, Scissors, Highlighter } from "lucide-react";

/**
 * Edisi Khusus: Master Blueprint buat dicatet di buku tulis.
 * Didesain biar user gampang banget buat mindahin info ke kertas.
 */

export default function StudyGuide() {
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
        <p className="text-zinc-500 text-sm max-w-2xl mx-auto font-medium leading-relaxed">
          Gue udah susun langkah-langkahnya biar lo nggak pusing pas mindahin data dari sini ke buku tulis. Tinggal ikutin aja bray!
        </p>
      </section>

      {/* Bagian 1: Persiapan Layout */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <Scissors className="w-6 h-6 text-pink-500" />
          <h3 className="text-2xl font-black italic">Step 1: Siapin Layout Buku</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-zinc-400 leading-relaxed">
              Sebelum nulis, bagi buku lo jadi 4 bagian besar (Blok). Ini rahasia biar otak lo nggak overload pas nyari data.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-xs text-zinc-500">
                <div className="flex-none w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-[10px]">1</div>
                Gunakan 1 lembar penuh buat tiap Blok (Blok S, P, D, F).
              </li>
              <li className="flex gap-3 text-xs text-zinc-500">
                <div className="flex-none w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-[10px]">2</div>
                Tulis Nama Blok pake Huruf Gede dan Warna yang mencolok di pojok atas.
              </li>
              <li className="flex gap-3 text-xs text-zinc-500">
                <div className="flex-none w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-[10px]">3</div>
                Bikin tabel 3 kolom: Identitas, Konfigurasi, dan Fungsi Unik.
              </li>
            </ul>
          </div>
          <div className="p-6 glass rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center space-y-3">
            <Highlighter className="w-10 h-10 text-yellow-500 opacity-20" />
            <p className="text-[11px] font-bold text-zinc-500 italic">"Pake stabilo yang beda warna buat tiap blok biar lo punya memori visual yang kuat!"</p>
          </div>
        </div>
      </section>

      {/* Bagian 2: Penjelasan & Cara Misahin Per-Blok */}
      <section className="space-y-12">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <Layers className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-black italic">Step 2: Bedah & Pisah Per-Blok</h3>
        </div>

        <div className="grid gap-6">
          {/* Blok S */}
          <div className="p-8 glass rounded-3xl border-l-8 border-red-500 space-y-4">
            <div className="flex justify-between items-start">
              <h4 className="text-2xl font-black text-red-500 italic">BLOK S (Si Reaktif)</h4>
              <span className="px-3 py-1 bg-red-500/10 text-red-400 text-[10px] font-black rounded-lg">KIRI TABEL</span>
            </div>
            <p className="text-sm text-zinc-400 italic">Logika: Unsur yang elektron terakhirnya ada di subkulit s (maksimal 2 elektron).</p>
            <div className="p-4 bg-white/5 rounded-2xl text-xs text-zinc-500 space-y-2">
              <p><strong>Isi Catatan:</strong> Golongan 1 (Alkali) & Golongan 2 (Alkali Tanah) + Helium.</p>
              <p><strong>Ciri Khas:</strong> Logamnya lunak, gampang bereaksi sama air. Gaskeun tulis ini bray!</p>
            </div>
          </div>

          {/* Blok P */}
          <div className="p-8 glass rounded-3xl border-l-8 border-blue-500 space-y-4">
            <div className="flex justify-between items-start">
              <h4 className="text-2xl font-black text-blue-500 italic">BLOK P (Si Serba Bisa)</h4>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black rounded-lg">KANAN TABEL</span>
            </div>
            <p className="text-sm text-zinc-400 italic">Logika: Unsur yang subkulit p-nya lagi keisi (maksimal 6 elektron).</p>
            <div className="p-4 bg-white/5 rounded-2xl text-xs text-zinc-500 space-y-2">
              <p><strong>Isi Catatan:</strong> Dari Golongan 13 sampe 18 (Gas Mulia).</p>
              <p><strong>Ciri Khas:</strong> Isinya campur aduk (logam, non-logam, gas). Ini blok paling variasi!</p>
            </div>
          </div>

          {/* Blok D */}
          <div className="p-8 glass rounded-3xl border-l-8 border-yellow-500 space-y-4">
            <div className="flex justify-between items-start">
              <h4 className="text-2xl font-black text-yellow-500 italic">BLOK D (Si Logam Tangguh)</h4>
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-[10px] font-black rounded-lg">TENGAH TABEL</span>
            </div>
            <p className="text-sm text-zinc-400 italic">Logika: Elektron terakhirnya mampir di subkulit d (maksimal 10 elektron).</p>
            <div className="p-4 bg-white/5 rounded-2xl text-xs text-zinc-500 space-y-2">
              <p><strong>Isi Catatan:</strong> Golongan 3 sampe 12 (Logam Transisi).</p>
              <p><strong>Ciri Khas:</strong> Logamnya kuat-kuat banget, punya titik leleh tinggi. Contoh: Besi & Emas.</p>
            </div>
          </div>

          {/* Blok F */}
          <div className="p-8 glass rounded-3xl border-l-8 border-pink-500 space-y-4">
            <div className="flex justify-between items-start">
              <h4 className="text-2xl font-black text-pink-500 italic">BLOK F (Si Langka & Misterius)</h4>
              <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-[10px] font-black rounded-lg">BAWAH TABEL</span>
            </div>
            <p className="text-sm text-zinc-400 italic">Logika: Subkulit f yang keisi (maksimal 14 elektron).</p>
            <div className="p-4 bg-white/5 rounded-2xl text-xs text-zinc-500 space-y-2">
              <p><strong>Isi Catatan:</strong> Deret Lanthanide (baris atas) & Actinide (baris bawah).</p>
              <p><strong>Ciri Khas:</strong> Banyak yang radioaktif dan buatan manusia. Unsur langka bray!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian 3: Template Data Wajib */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <h3 className="text-2xl font-black italic">Step 3: Cheatsheet Data Wajib</h3>
        </div>
        
        <div className="bg-zinc-950 p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-10">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-center italic">CONTOH FORMAT CATATAN DI BUKU TULIS</h4>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Template Unsur */}
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4 font-mono text-sm leading-relaxed">
                <p className="text-blue-400"># IDENTITAS</p>
                <p className="text-zinc-300">Nama: <span className="text-white">Hydrogen</span></p>
                <p className="text-zinc-300">Simbol: <span className="text-white">H</span> | No. Atom: <span className="text-white">1</span></p>
                <div className="h-px bg-white/10 w-full" />
                <p className="text-blue-400"># STRUKTUR</p>
                <p className="text-zinc-300">Blok: <span className="text-white">S</span> | Golongan: <span className="text-white">1</span></p>
                <p className="text-zinc-300">Config: <span className="text-white">1s1</span></p>
                <div className="h-px bg-white/10 w-full" />
                <p className="text-blue-400"># INFO GG</p>
                <p className="text-zinc-300">Fungsi: <span className="text-white italic">Bahan bakar roket bray!</span></p>
              </div>
            </div>

            {/* Checklist Penutup */}
            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Poin Wajib Ada:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Gunakan pensil buat gambar Bohr Model simpelnya.
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Tandai unsur yang Radioaktif pake tanda bahaya ☢️.
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Fokus hafal minimal 20 unsur pertama (H - Ca).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center opacity-10 pb-20">
        <BookOpen className="w-12 h-12 mx-auto" />
      </div>
    </div>
  );
}
