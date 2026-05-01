"use client";

import { useState, useMemo } from "react";
import { elements, ElementData } from "@/data/elements";
import ElementCard from "./ElementCard";
import { Search, Filter, X } from "lucide-react";

interface PeriodicTableProps {
  onSelectElement: (element: ElementData) => void;
  isQuizMode: boolean;
}

const categories = [
  "alkali metal", "alkaline earth metal", "transition metal", 
  "post-transition metal", "metalloid", "diatomic nonmetal", 
  "polyatomic nonmetal", "noble gas", "lanthanide", "actinide"
];

export default function PeriodicTable({ onSelectElement, isQuizMode }: PeriodicTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredElements = useMemo(() => {
    return elements.filter((el) => {
      const matchesSearch = el.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           el.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory ? el.category === activeCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const isDimmed = (el: ElementData) => {
    if (!searchTerm && !activeCategory) return false;
    return !filteredElements.some(f => f.number === el.number);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto p-4">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between glass p-4 rounded-xl">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search by name or symbol..."
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider rounded-full border transition-all ${
                activeCategory === cat 
                  ? "bg-white text-black border-white" 
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
          {activeCategory && (
            <button 
              onClick={() => setActiveCategory(null)}
              className="px-2 py-1 text-[10px] text-red-400 hover:text-red-300 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid Container */}
      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <div 
          className="grid gap-1.5 min-w-[900px]"
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
                isHighlighted={searchTerm !== "" && (el.name.toLowerCase().includes(searchTerm.toLowerCase()) || el.symbol.toLowerCase().includes(searchTerm.toLowerCase()))}
                isDimmed={isDimmed(el)}
              />
            </div>
          ))}

          {/* Group Numbers */}
          {Array.from({ length: 18 }).map((_, i) => (
            <div 
              key={`group-${i}`} 
              className="text-[10px] font-bold text-white/20 text-center mb-1"
              style={{ gridColumn: i + 1, gridRow: 1, alignSelf: 'end' }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
