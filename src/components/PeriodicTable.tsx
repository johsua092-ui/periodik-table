"use client";

import { useState, useMemo } from "react";
import { elements, ElementData } from "@/data/elements";
import ElementCard from "./ElementCard";
import { Search, X, MousePointer2 } from "lucide-react";

/**
 * Bro, ini komponen utama buat nampilin tabelnya.
 * Gue bikin grid-nya statis 18 kolom biar bentuk aslinya nggak ilang,
 * tapi di HP gue kasih container yang bisa di-scroll biar nggak hancur layout-nya.
 */

interface PeriodicTableProps {
  onSelectElement: (element: ElementData) => void;
  isQuizMode: boolean;
}

const CATEGORIES = [
  "alkali metal", "alkaline earth metal", "transition metal", 
  "post-transition metal", "metalloid", "diatomic nonmetal", 
  "polyatomic nonmetal", "noble gas", "lanthanide", "actinide"
];

export default function PeriodicTable({ onSelectElement, isQuizMode }: PeriodicTableProps) {
  const [query, setQuery] = useState("");
  const [pickedCat, setPickedCat] = useState<string | null>(null);

  // Filter datanya biar nggak berat
  const displayList = useMemo(() => {
    return elements.filter((el) => {
      const matchText = el.name.toLowerCase().includes(query.toLowerCase()) || 
                        el.symbol.toLowerCase().includes(query.toLowerCase());
      const matchCat = pickedCat ? el.category === pickedCat : true;
      return matchText && matchCat;
    });
  }, [query, pickedCat]);

  const checkDimmed = (el: ElementData) => {
    if (!query && !pickedCat) return false;
    return !displayList.some(item => item.number === el.number);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-2 md:px-4">
      
      {/* Control Bar - Bikin agak glassmorphism biar cakep */}
      <div className="flex flex-col gap-4 p-4 glass rounded-2xl border border-white/5">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Cari nama atau simbol..."
              className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-zinc-500 hover:text-white" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setPickedCat(pickedCat === c ? null : c)}
                className={`px-3 py-1.5 text-[9px] uppercase font-black tracking-tighter rounded-lg border transition-all ${
                  pickedCat === c 
                    ? "bg-white text-black border-white shadow-lg shadow-white/10" 
                    : "bg-white/5 text-zinc-400 border-white/5 hover:border-white/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Area - Ini bagian yang kita bikin support HP */}
      <div className="relative group">
        {/* Hint buat user HP kalo ini bisa digeser */}
        <div className="md:hidden flex items-center justify-center gap-2 mb-2 text-zinc-500 animate-pulse">
          <MousePointer2 className="w-3 h-3 rotate-90" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Geser buat liat semua bray</span>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-hide md:scrollbar-default touch-pan-x">
          <div 
            className="grid gap-1 md:gap-1.5 min-w-[1000px] md:min-w-0" 
            style={{ 
              gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
              gridTemplateRows: "repeat(10, minmax(0, 1fr))" 
            }}
          >
            {elements.map((el) => (
              <div
                key={el.number}
                style={{
                  gridColumn: el.xpos,
                  gridRow: el.ypos
                }}
                className="transition-transform duration-300"
              >
                <ElementCard 
                  element={el} 
                  onClick={(element) => {
                    if (isQuizMode) {
                      window.dispatchEvent(new CustomEvent('element-quiz-click', { detail: element }));
                    } else {
                      onSelectElement(element);
                    }
                  }}
                  isHighlighted={query !== "" && (el.name.toLowerCase().includes(query.toLowerCase()) || el.symbol.toLowerCase().includes(query.toLowerCase()))}
                  isDimmed={checkDimmed(el)}
                />
              </div>
            ))}

            {/* Label Angka Kelompok di atas */}
            {Array.from({ length: 18 }).map((_, i) => (
              <div 
                key={`grp-${i}`} 
                className="text-[9px] font-black text-zinc-800 text-center select-none"
                style={{ gridColumn: i + 1, gridRow: 1, alignSelf: 'end' }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        
        {/* Efek gradasi biar keliatan kalo masih ada lanjutannya (pas di scroll) */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none md:hidden" />
      </div>
    </div>
  );
}
