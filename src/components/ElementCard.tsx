"use client";

import { motion } from "framer-motion";
import { ElementData } from "@/data/elements";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility dikit buat gabungin class Tailwind biar nggak pusing liatnya.
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ElementCardProps {
  element: ElementData;
  onClick: (element: ElementData) => void;
  isHighlighted?: boolean;
  isDimmed?: boolean;
}

// Warna kategori buat border bawah, biar user tau ini masuk geng mana
export const categoryColors: Record<string, string> = {
  "alkali metal": "bg-red-500",
  "alkaline earth metal": "bg-orange-500",
  "transition metal": "bg-amber-500",
  "post-transition metal": "bg-emerald-500",
  "metalloid": "bg-cyan-500",
  "diatomic nonmetal": "bg-blue-500",
  "polyatomic nonmetal": "bg-indigo-500",
  "noble gas": "bg-purple-500",
  "lanthanide": "bg-pink-500",
  "actinide": "bg-rose-500",
};

export default function ElementCard({ element, onClick, isHighlighted, isDimmed }: ElementCardProps) {
  const lineBg = categoryColors[element.category] || "bg-zinc-700";

  return (
    <motion.div
      layoutId={`el-${element.number}`}
      onClick={() => onClick(element)}
      // Animasi pas muncul & pas filter aktif
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isDimmed ? 0.2 : 1, 
        scale: isHighlighted ? 1.05 : 1,
        zIndex: isHighlighted ? 20 : 1
      }}
      whileHover={{ 
        scale: 1.08, 
        zIndex: 30,
        backgroundColor: "rgba(255, 255, 255, 0.08)" 
      }}
      className={cn(
        "relative cursor-pointer aspect-square p-1 md:p-1.5 rounded-lg flex flex-col justify-between overflow-hidden",
        "glass-card border-white/5",
        isHighlighted && "ring-1 ring-white/50 border-white/20 shadow-xl shadow-white/5",
      )}
    >
      {/* Header: No Atom & Massa */}
      <div className="flex justify-between items-start pointer-events-none">
        <span className="text-[8px] md:text-[10px] font-black opacity-30 italic">{element.number}</span>
        <span className="hidden md:block text-[7px] opacity-20 font-mono">
          {element.atomic_mass.toFixed(2)}
        </span>
      </div>
      
      {/* Body: Simbol & Nama (Si paling penting) */}
      <div className="flex flex-col items-center justify-center py-0.5 pointer-events-none">
        <span className="text-sm md:text-xl font-black tracking-tighter leading-none">
          {element.symbol}
        </span>
        <span className="text-[5px] md:text-[7px] uppercase font-bold tracking-widest opacity-40 truncate w-full text-center mt-0.5">
          {element.name}
        </span>
      </div>

      {/* Indicator warna kategori di bawah biar estetik */}
      <div className={cn("absolute bottom-0 left-0 right-0 h-0.5 md:h-1 opacity-80", lineBg)} />
    </motion.div>
  );
}
