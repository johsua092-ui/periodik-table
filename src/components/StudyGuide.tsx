"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, PenTool, CheckCircle, Star, Layers, Scissors, Highlighter, Layout, Pencil } from "lucide-react";

/**
 * Update: Tutorial Gambar Manual dari Nol.
 * Gue kasih urutan apa yang harus digambar pertama kali di kertas.
 */

export default function StudyGuide() {
  const drawSteps = [
    {
      step: "01",
      title: "Bikin Kerangka Utama (Outline)",
      desc: "Jangan langsung bikin kotak kecil! Bikin dulu 3 blok utama di baris atas. S-Block (2 kolom kiri), P-Block (6 kolom kanan), dan D-Block (10 kolom tengah) yang agak turun ke bawah.",
      color: "border-blue-500"
    },
    {
      step: "02",
      title: "Tarik Garis Periode (Baris)",
      desc: "Bikin 7 baris horizontal. Inget, baris pertama cuma ada di ujung kiri (H) sama ujung kanan (He). Baris 2 & 3 mulai lengkap tapi tengahnya kosong.",
      color: "border-green-500"
    },
    {
      step: "03",
      title: "Sketsa Blok F di Bawah",
      desc: "Bikin 2 baris terpisah di paling bawah buku lo. Ini buat geng Lanthanide & Actinide. Kasih jarak biar nggak nempel sama tabel utama.",
      color: "border-pink-500"
    },
    {
      step: "04",
      title: "Isi Simbol & Warna",
      desc: "Baru deh lo isi simbolnya satu-satu mulai dari nomor atom 1 (H). Terakhir, kasih warna pake stabilo sesuai bloknya biar makin cakep.",
      color: "border-yellow-500"
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

      {/* TUTORIAL GAMBAR MANUAL (INI YANG LO MINTA NGAB) */}
      <section className="space-y-12">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <Pencil className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-black italic">Tutorial Gambar Manual (Step-by-Step)</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* List Steps */}
          <div className="space-y-6">
            {drawSteps.map((s, i) => (
              <div key={i} className={`p-5 glass rounded-2xl border-l-4 ${s.color} space-y-2`}>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black opacity-20">{s.step}</span>
                  <h4 className="font-bold text-sm text-white">{s.title}</h4>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual Sketch Simulator */}
          <div className="space-y-4">
            <p className="text-[10px] font-black text-zinc-700 uppercase tracking-widest text-center">Visual Sketch (Urutan Gambar)</p>
            <div className="aspect-square glass rounded-[2.5rem] border border-white/10 p-8 flex flex-col justify-center gap-4 relative overflow-hidden">
               {/* Simplified Skeleton Illustration */}
               <div className="grid grid-cols-18 gap-1 opacity-20">
                  {/* S-Block */}
                  <div className="col-span-2 row-span-7 bg-blue-500/20 border border-blue-500/50 rounded-sm h-32" />
                  {/* D-Block */}
                  <div className="col-span-10 row-start-4 row-span-4 bg-yellow-500/20 border border-yellow-500/50 rounded-sm h-20" />
                  {/* P-Block */}
                  <div className="col-span-6 row-span-7 bg-green-500/20 border border-green-500/50 rounded-sm h-32" />
               </div>
               <div className="w-full h-8 bg-pink-500/10 border border-pink-500/30 rounded-sm mt-4 flex items-center justify-center">
                  <span className="text-[8px] text-pink-400 font-bold uppercase tracking-tighter">F-Block (Gambar Terakhir)</span>
               </div>
               
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl text-center">
                    <Layout className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-[10px] text-white font-bold uppercase tracking-widest leading-tight">
                      Gunakan Penggaris!<br/><span className="text-zinc-500">Biar nggak miring bray.</span>
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penjelasan & Cara Misahin Per-Blok */}
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
              <p><strong>Ciri Khas:</strong> Logamnya lunak, gampang bereaksi sama air.</p>
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
              <p><strong>Ciri Khas:</strong> Isinya campur aduk (logam, non-logam, gas).</p>
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
              <p><strong>Ciri Khas:</strong> Logamnya kuat-kuat banget, punya titik leleh tinggi.</p>
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
              <p><strong>Isi Catatan:</strong> Deret Lanthanide & Actinide.</p>
              <p><strong>Ciri Khas:</strong> Banyak yang radioaktif dan buatan manusia.</p>
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
                  Tandai unsur yang Radioaktif pake tanda bahaya.
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
