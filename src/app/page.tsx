"use client";

import { useState } from "react";
import PeriodicTable from "@/components/PeriodicTable";
import ElementDetails from "@/components/ElementDetails";
import QuizMode from "@/components/QuizMode";
import StudyGuide from "@/components/StudyGuide";
import { ElementData } from "@/data/elements";
import { motion } from "framer-motion";
import { Atom, BookOpen, BrainCircuit, GraduationCap } from "lucide-react";

export default function Home() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [activeView, setActiveView] = useState<"table" | "quiz" | "study">("table");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 glass sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Atom className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight leading-none">ELEMENTAL</h1>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Interactive Periodic Table</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveView("table")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeView === "table" ? "bg-white text-black" : "hover:bg-white/5 opacity-60"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Explorer</span>
            </button>
            <button
              onClick={() => setActiveView("quiz")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeView === "quiz" ? "bg-white text-black" : "hover:bg-white/5 opacity-60"
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              <span>Quiz Mode</span>
            </button>
            <button
              onClick={() => setActiveView("study")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeView === "study" ? "bg-white text-black" : "hover:bg-white/5 opacity-60"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Cara Belajar</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeView === "table" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Hero Section */}
            <header className="text-center space-y-4 mb-16">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                Discover the Elements
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
                Explore the building blocks of the universe in a high-fidelity interactive experience.
                Select any element to dive into its properties and structure.
              </p>
            </header>

            <PeriodicTable 
              onSelectElement={setSelectedElement} 
              isQuizMode={false}
            />
          </motion.div>
        ) : activeView === "quiz" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <QuizMode />
            
            <div className="opacity-40">
              <PeriodicTable 
                onSelectElement={() => {}} 
                isQuizMode={true}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <StudyGuide />
          </motion.div>
        )}
      </div>

      <ElementDetails 
        element={selectedElement} 
        onClose={() => setSelectedElement(null)} 
      />

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-20 opacity-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-mono tracking-tighter">
            PROTOTYPE V1.0 // SCIENTIFIC DATA VISUALIZATION
          </div>
          <div className="text-[10px] uppercase tracking-widest text-center">
            Built with Next.js, Framer Motion & Lucide React
          </div>
        </div>
      </footer>
    </main>
  );
}
