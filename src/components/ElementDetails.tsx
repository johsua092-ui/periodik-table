"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ElementData } from "@/data/elements";
import { X, ExternalLink, Thermometer, Box, Zap } from "lucide-react";
import { categoryColors } from "./ElementCard";

interface ElementDetailsProps {
  element: ElementData | null;
  onClose: () => void;
}

export default function ElementDetails({ element, onClose }: ElementDetailsProps) {
  if (!element) return null;

  const categoryClass = categoryColors[element.category] || "bg-gray-500";

  return (
    <AnimatePresence>
      {element && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[450px] bg-zinc-900 border-l border-white/10 z-50 overflow-y-auto custom-scrollbar shadow-2xl"
          >
            {/* Header */}
            <div className={`p-8 relative overflow-hidden ${categoryClass} bg-opacity-20`}>
              <div className={`absolute top-0 left-0 w-full h-1 ${categoryClass}`} />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-6xl font-black">{element.symbol}</span>
                <span className="text-2xl font-bold opacity-60">#{element.number}</span>
              </div>
              <h2 className="text-3xl font-bold mb-1">{element.name}</h2>
              <p className="text-sm uppercase tracking-widest opacity-70 font-semibold">{element.category}</p>
            </div>

            <div className="p-8 space-y-8">
              {/* Bohr Model Visualization */}
              <div className="flex flex-col items-center justify-center py-6 glass rounded-2xl">
                <BohrModel shells={element.shells} />
                <div className="mt-4 text-center">
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Electron Shells</p>
                  <div className="flex gap-2">
                    {element.shells.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/10 rounded text-xs font-mono">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <StatCard 
                  icon={<Thermometer className="w-4 h-4 text-orange-400" />} 
                  label="Melting Point" 
                  value={element.melt ? `${element.melt} K` : "N/A"} 
                />
                <StatCard 
                  icon={<Box className="w-4 h-4 text-blue-400" />} 
                  label="Atomic Mass" 
                  value={`${element.atomic_mass.toFixed(4)} u`} 
                />
                <StatCard 
                  icon={<Zap className="w-4 h-4 text-yellow-400" />} 
                  label="Configuration" 
                  value={element.electron_configuration} 
                />
                <StatCard 
                  icon={<Thermometer className="w-4 h-4 text-red-400" />} 
                  label="Boiling Point" 
                  value={element.boil ? `${element.boil} K` : "N/A"} 
                />
              </div>

              {/* Summary */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2">Overview</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {element.summary}
                </p>
              </div>

              <a 
                href={`https://en.wikipedia.org/wiki/${element.name}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
              >
                <span className="text-sm font-medium">Read more on Wikipedia</span>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-[10px] uppercase tracking-wider opacity-50">{label}</span>
      </div>
      <div className="text-sm font-mono font-bold truncate">{value}</div>
    </div>
  );
}

function BohrModel({ shells }: { shells: number[] }) {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Nucleus */}
      <div className="w-6 h-6 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] z-10" />
      
      {/* Shells */}
      {shells.map((count, i) => {
        const radius = 30 + i * 20;
        return (
          <div key={i} className="absolute">
            {/* Orbit path */}
            <div 
              className="border border-white/20 rounded-full"
              style={{ width: radius * 2, height: radius * 2 }}
            />
            {/* Electrons */}
            {Array.from({ length: count }).map((_, j) => {
              const angle = (j / count) * 2 * Math.PI;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={j}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="absolute"
                  style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%)` }}
                >
                  <div 
                    className="w-2 h-2 bg-blue-400 rounded-full absolute shadow-[0_0_5px_rgba(96,165,250,0.8)]"
                    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                  />
                </motion.div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
