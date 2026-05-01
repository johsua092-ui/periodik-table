"use client";

import { motion } from "framer-motion";
import { ElementData } from "@/data/elements";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ElementCardProps {
  element: ElementData;
  onClick: (element: ElementData) => void;
  isHighlighted?: boolean;
  isDimmed?: boolean;
}

export const categoryColors: Record<string, string> = {
  "alkali metal": "bg-alkali-metal",
  "alkaline earth metal": "bg-alkaline-earth-metal",
  "transition metal": "bg-transition-metal",
  "post-transition metal": "bg-post-transition-metal",
  "metalloid": "bg-metalloid",
  "diatomic nonmetal": "bg-diatomic-nonmetal",
  "polyatomic nonmetal": "bg-polyatomic-nonmetal",
  "noble gas": "bg-noble-gas",
  "lanthanide": "bg-lanthanide",
  "actinide": "bg-actinide",
};

export default function ElementCard({ element, onClick, isHighlighted, isDimmed }: ElementCardProps) {
  const categoryClass = categoryColors[element.category] || "bg-gray-500";

  return (
    <motion.div
      layoutId={`element-${element.number}`}
      onClick={() => onClick(element)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isDimmed ? 0.3 : 1, 
        scale: isHighlighted ? 1.05 : 1,
        zIndex: isHighlighted ? 10 : 1
      }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className={cn(
        "relative cursor-pointer aspect-square p-1.5 rounded-md flex flex-col justify-between glass-card",
        isHighlighted && "ring-2 ring-white shadow-lg shadow-white/20",
        !isHighlighted && "border-opacity-10"
      )}
    >
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-bold opacity-60">{element.number}</span>
        <span className="text-[8px] opacity-40 truncate max-w-[40px] text-right">
          {element.atomic_mass.toFixed(2)}
        </span>
      </div>
      
      <div className="flex flex-col items-center justify-center py-0.5">
        <span className="text-lg font-black tracking-tighter">{element.symbol}</span>
        <span className="text-[7px] uppercase tracking-widest opacity-70 truncate w-full text-center">
          {element.name}
        </span>
      </div>

      <div className={cn("absolute bottom-0 left-0 right-0 h-1 rounded-b-md", categoryClass)} />
    </motion.div>
  );
}
