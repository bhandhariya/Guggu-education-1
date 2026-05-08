import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAppStore } from '@/store';
import { ArrowLeft } from 'lucide-react';
import { playAudio, playCorrectSound, playIncorrectSound } from '@/utils/audio';
import confetti from 'canvas-confetti';

const QUESTIONS = [
  { object: '🍎', count: 3, options: [1, 2, 3] },
  { object: '🎈', count: 1, options: [1, 4, 5] },
  { object: '🐶', count: 4, options: [2, 3, 4] },
];

export const MathGame = () => {
  const { setScreen, addStars } = useAppStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shookIdx, setShookIdx] = useState<number | null>(null);

  const current = QUESTIONS[currentIndex];

  React.useEffect(() => {
    playAudio('How many do you see?');
  }, [currentIndex]);

  const handleAnswer = (answer: number, idx: number) => {
    if (answer === current.count) {
      playCorrectSound();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      setTimeout(() => {
        if (currentIndex < QUESTIONS.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
           playAudio('You are a math genius!');
           addStars(1);
           setTimeout(() => setScreen('home'), 2000);
        }
      }, 1500);
    } else {
      playIncorrectSound();
      setShookIdx(idx);
      setTimeout(() => setShookIdx(null), 500);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <div className="flex items-center p-4">
         <button 
          onClick={() => setScreen('home')}
          className="p-3 bg-white rounded-full shadow-sm active:scale-95 transition-transform"
        >
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </button>
        <h2 className="text-xl font-bold ml-4 text-slate-700">Count the Objects!</h2>
      </div>

      <div className="flex-1 flex flex-col items-center p-6 mt-10">
        <div className="bg-sky-100 p-8 rounded-[3rem] shadow-inner mb-12 min-h-[200px] w-full flex flex-wrap justify-center items-center gap-4 border-4 border-sky-200">
           {Array.from({ length: current.count }).map((_, i) => (
             <motion.span 
               key={i}
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: i * 0.1, type: 'spring' }}
               className="text-6xl drop-shadow-md"
             >
               {current.object}
             </motion.span>
           ))}
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-sm">
          {current.options.map((opt, idx) => (
             <motion.button
               key={opt}
               whileHover={{ scale: 1.05 }}
               animate={shookIdx === idx ? { x: [-10, 10, -10, 10, 0] } : {}}
               transition={{ duration: 0.4 }}
               onClick={() => handleAnswer(opt, idx)}
               className="bg-white text-5xl font-black text-app-pink p-8 rounded-3xl shadow-[0_8px_0_0_#cbd5e1] border-4 border-slate-100 active:translate-y-2 active:shadow-none transition-all"
             >
               {opt}
             </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
