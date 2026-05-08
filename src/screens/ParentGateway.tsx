import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAppStore } from '@/store';
import { ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ParentGateway = () => {
  const setScreen = useAppStore(state => state.setScreen);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);

  // Simple math challenge: 12 + 15 = 27
  const handleVerify = () => {
    if (answer === '27') {
      setScreen('parent_dashboard');
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
      setAnswer('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-800 p-6 text-white text-center pt-20">
      <button 
        onClick={() => setScreen('home')}
        className="absolute top-6 left-6 p-3 bg-slate-700 rounded-full"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      <div className="bg-slate-700 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-8">
        <Lock className="w-10 h-10 text-app-blue" />
      </div>

      <h2 className="text-3xl font-black mb-4">Parents Only</h2>
      <p className="text-slate-300 font-bold mb-8">Please solve this to continue:</p>

      <div className="bg-slate-900 rounded-3xl p-8 max-w-sm mx-auto w-full">
        <div className="text-4xl font-black mb-8">12 + 15 = ?</div>
        <div className="flex justify-center gap-4 mb-8">
           <input 
             type="number" 
             value={answer}
             readOnly
             className="w-full bg-slate-800 text-center text-4xl font-bold py-4 rounded-xl border-2 border-slate-600 focus:outline-none"
           />
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
           {[1,2,3,4,5,6,7,8,9].map(num => (
             <button 
               key={num}
               onClick={() => setAnswer(prev => (prev.length < 2 ? prev + num : prev))}
               className="bg-slate-700 py-4 rounded-xl text-2xl font-bold active:bg-slate-600"
             >
               {num}
             </button>
           ))}
           <button 
              onClick={() => setAnswer('')}
              className="bg-app-pink py-4 rounded-xl text-xl font-bold"
           >
              Clear
           </button>
           <button 
             onClick={() => setAnswer(prev => (prev.length < 2 ? prev + 0 : prev))}
             className="bg-slate-700 py-4 rounded-xl text-2xl font-bold active:bg-slate-600"
           >
             0
           </button>
           <button 
              onClick={handleVerify}
              className="bg-app-green py-4 rounded-xl text-xl font-bold flex items-center justify-center"
           >
              Enter
           </button>
        </div>

        {error && (
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-app-pink font-bold"
           >
             Incorrect answer. Try again.
           </motion.p>
        )}
      </div>
    </div>
  );
};
