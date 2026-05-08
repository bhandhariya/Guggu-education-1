import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppStore } from '@/store';
import { ArrowLeft, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import { playAudio } from '@/utils/audio';
import confetti from 'canvas-confetti';

const ALPHABETS = [
  { letter: 'A', word: 'Apple', emoji: '🍎', color: 'bg-red-400' },
  { letter: 'B', word: 'Ball', emoji: '⚽', color: 'bg-app-blue' },
  { letter: 'C', word: 'Cat', emoji: '🐱', color: 'bg-app-yellow' },
  { letter: 'D', word: 'Dog', emoji: '🐶', color: 'bg-app-purple' },
  { letter: 'E', word: 'Elephant', emoji: '🐘', color: 'bg-slate-400' },
];

export const AlphabetLearning = () => {
  const { setScreen, addCoins } = useAppStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = ALPHABETS[currentIndex];

  const handleNext = () => {
    if (currentIndex < ALPHABETS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Reward at end
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      playAudio('Amazing job! You finished.');
      addCoins(5);
      setTimeout(() => setScreen('home'), 2000);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const playLetter = () => playAudio(current.letter);
  const playWord = () => playAudio(`${current.letter} for ${current.word}`);

  // Play letter on mount or when index changes
  React.useEffect(() => {
    playWord();
  }, [currentIndex]);

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <div className="flex items-center p-4">
        <button 
          onClick={() => setScreen('home')}
          className="p-3 bg-white rounded-full shadow-sm active:scale-95 transition-transform"
        >
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </button>
        <div className="w-full bg-slate-200 h-3 rounded-full mx-4 overflow-hidden">
           <div 
             className="bg-app-green h-full rounded-full transition-all duration-300"
             style={{ width: `${((currentIndex + 1) / ALPHABETS.length) * 100}%` }}
           />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 pb-20 relative">
         <AnimatePresence mode="popLayout">
           <motion.div
             key={current.letter}
             initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
             animate={{ scale: 1, opacity: 1, rotate: 0 }}
             exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
             transition={{ type: 'spring', bounce: 0.5 }}
             onClick={playWord}
             className={`${current.color} w-full max-w-sm rounded-[3rem] p-10 flex flex-col items-center justify-center shadow-[0_16px_0_0_rgba(0,0,0,0.1)] border-8 border-white cursor-pointer`}
           >
              <h1 className="text-[120px] leading-none font-black text-white drop-shadow-md">
                {current.letter}
              </h1>
              <div className="flex items-center gap-3 mt-4 bg-white/20 px-6 py-3 rounded-full">
                <span className="text-4xl">{current.emoji}</span>
                <span className="text-4xl font-extrabold text-white capitalize">{current.word}</span>
                <Volume2 className="w-8 h-8 text-white ml-2 opacity-80" />
              </div>
           </motion.div>
         </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-between">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-5 rounded-2xl ${currentIndex === 0 ? 'bg-slate-200 opacity-50' : 'bg-white shadow-[0_6px_0_0_#cbd5e1]'} active:translate-y-1 active:shadow-none transition-all`}
        >
          <ChevronLeft className="w-8 h-8 text-slate-700" />
        </button>
        <button 
          onClick={handleNext}
          className="p-5 rounded-2xl bg-app-blue shadow-[0_6px_0_0_#2E9DE0] active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 text-white font-bold text-xl"
        >
          {currentIndex === ALPHABETS.length - 1 ? 'Finish!' : <ChevronRight className="w-8 h-8" />}
        </button>
      </div>
    </div>
  );
};
