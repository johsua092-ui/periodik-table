"use client";

import { useState, useEffect, useCallback } from "react";
import { elements, ElementData } from "@/data/elements";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, RefreshCw, XCircle, CheckCircle2 } from "lucide-react";

export default function QuizMode() {
  const [active, setActive] = useState(false);
  const [target, setTarget] = useState<ElementData | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("periodic-high-score");
    if (saved) setHighScore(parseInt(saved));
  }, []);

  const nextQuestion = useCallback(() => {
    const random = elements[Math.floor(Math.random() * elements.length)];
    setTarget(random);
    setFeedback(null);
  }, []);

  const startQuiz = () => {
    setActive(true);
    setScore(0);
    setTotal(0);
    nextQuestion();
  };

  const handleElementClick = (el: ElementData) => {
    if (!active || !target || feedback) return;

    setTotal(prev => prev + 1);
    if (el.number === target.number) {
      const newScore = score + 1;
      setScore(newScore);
      setFeedback({ type: 'success', message: `Correct! That is ${el.name}` });
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem("periodic-high-score", newScore.toString());
      }
      setTimeout(nextQuestion, 1500);
    } else {
      setFeedback({ type: 'error', message: `Incorrect. That was ${el.name}, you were looking for ${target.name}` });
      setTimeout(nextQuestion, 2500);
    }
  };

  if (!active) {
    return (
      <div className="flex flex-col items-center justify-center p-8 glass rounded-2xl text-center max-w-md mx-auto">
        <Trophy className="w-12 h-12 text-yellow-500 mb-4 animate-pulse" />
        <h3 className="text-xl font-bold mb-2">Element Quiz Mode</h3>
        <p className="text-white/60 text-sm mb-6">
          Test your knowledge! Find the randomly selected element on the periodic table.
        </p>
        <div className="text-sm font-mono opacity-40 mb-6">High Score: {highScore}</div>
        <button 
          onClick={startQuiz}
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 glass p-6 rounded-2xl max-w-4xl mx-auto w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="opacity-50">Score:</span> 
            <span className="ml-2 font-mono font-bold text-lg">{score}/{total}</span>
          </div>
          <div className="text-sm opacity-30">|</div>
          <div className="text-sm">
            <span className="opacity-50">Best:</span> 
            <span className="ml-2 font-mono font-bold">{highScore}</span>
          </div>
        </div>
        <button 
          onClick={() => setActive(false)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <XCircle className="w-6 h-6 opacity-50" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-1">Find the element:</p>
        <h2 className="text-4xl font-black tracking-tight">{target?.name}</h2>
        <div className="mt-4 flex gap-4">
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">
            <span className="opacity-40 mr-2">Category:</span> {target?.category}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium ${
              feedback.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/20' : 'bg-red-500/20 text-red-400 border border-red-500/20'
            }`}
          >
            {feedback.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            {feedback.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-blue-500"
          initial={{ width: "100%" }}
          animate={{ width: feedback ? "0%" : "100%" }}
          transition={{ duration: feedback ? (feedback.type === 'success' ? 1.5 : 2.5) : 0, ease: "linear" }}
        />
      </div>

      {/* Global Event Listener Helper */}
      <QuizInteractionProxy onElementClick={handleElementClick} />
    </div>
  );
}

// This is a helper component that allows QuizMode to receive element clicks from the main table
// In a real app, you might use context or global state, but for this single-page app
// we'll use a simple custom event or pass the handler up.
// Here we'll just explain that the parent needs to handle the click and pass it to quiz.
function QuizInteractionProxy({ onElementClick }: { onElementClick: (el: ElementData) => void }) {
  useEffect(() => {
    const handler = (e: any) => onElementClick(e.detail);
    window.addEventListener('element-quiz-click', handler);
    return () => window.removeEventListener('element-quiz-click', handler);
  }, [onElementClick]);
  return null;
}
