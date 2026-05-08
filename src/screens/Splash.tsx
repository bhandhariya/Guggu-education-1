import { motion } from 'motion/react';
import { useAppStore } from '@/store';
import { Sparkles, Star } from 'lucide-react';
import { playAudio } from '@/utils/audio';

export const Splash = () => {
  const setScreen = useAppStore(state => state.setScreen);

  const handleStart = () => {
    playAudio('Welcome to Magic Learning!');
    setScreen('profile');
  };

  return (
    <div 
      className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-app-purple via-app-pink to-app-orange cursor-pointer"
      onClick={handleStart}
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="relative"
      >
        <Star className="absolute -top-6 -left-6 text-app-yellow w-12 h-12 fill-current" />
        <Sparkles className="absolute -bottom-4 -right-8 text-white w-10 h-10" />
        
        <div className="bg-white p-8 rounded-full shadow-[0_10px_0_0_rgba(0,0,0,0.2)] mb-8 border-8 border-app-yellow">
          <img 
            src="https://api.dicebear.com/7.x/bottts/svg?seed=Magic" 
            alt="Magic Mascot" 
            className="w-32 h-32"
          />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="text-4xl font-black text-white text-center tracking-wide drop-shadow-lg"
      >
        MAGIC<br/>LEARNING
      </motion.h1>

      <motion.p
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-white/90 font-bold text-xl mt-12 bg-black/20 px-6 py-3 rounded-full"
      >
        Tap anywhere to play!
      </motion.p>
    </div>
  );
};
