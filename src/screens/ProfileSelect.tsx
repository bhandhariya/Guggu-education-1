import { motion } from 'motion/react';
import { useAppStore } from '@/store';
import { Button } from '@/components/ui/Button';
import { playAudio } from '@/utils/audio';

const AVATARS = [
  { id: 1, seed: 'Daisy', color: 'bg-app-pink' },
  { id: 2, seed: 'Felix', color: 'bg-app-blue' },
  { id: 3, seed: 'Buddy', color: 'bg-app-yellow' },
  { id: 4, seed: 'Leo', color: 'bg-app-green' },
];

export const ProfileSelect = () => {
  const { setProfile, childName } = useAppStore();

  const handleSelect = (avatar: typeof AVATARS[0]) => {
    playAudio(`Let's go, ${childName}!`);
    setProfile(childName, avatar.id);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 p-6">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mt-10 mb-8"
      >
        <h2 className="text-3xl font-black text-slate-800 drop-shadow-sm">Choose Your Avatar!</h2>
        <p className="text-slate-500 font-bold mt-2 text-lg">Who is playing today?</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 mt-8 flex-1 content-start">
        {AVATARS.map((avatar, idx) => (
          <motion.button
            key={avatar.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(avatar)}
            className={`flex flex-col items-center p-6 rounded-3xl ${avatar.color} shadow-[0_8px_0_0_rgba(0,0,0,0.15)] border-4 border-white`}
          >
            <div className="bg-white/30 rounded-full p-4 mb-4">
              <img 
                src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${avatar.seed}`} 
                alt="Avatar" 
                className="w-20 h-20"
              />
            </div>
            <span className="text-white font-black text-xl">{avatar.seed}</span>
          </motion.button>
        ))}
      </div>
      
      <div className="pb-8 text-center pt-4">
         <p className="text-slate-400 font-bold text-sm mb-4">Parents: Swipe up with 3 fingers for settings (coming soon)</p>
      </div>
    </div>
  );
};
