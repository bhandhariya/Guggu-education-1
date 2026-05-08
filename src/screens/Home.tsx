import { motion } from 'motion/react';
import { useAppStore } from '@/store';
import { playAudio } from '@/utils/audio';

export const Home = () => {
  const { childName, avatarId, coins, stars, setScreen } = useAppStore();

  const categories = [
    { id: 'english', title: 'English', subtitle: 'A to Z World', color: 'bg-app-pink', shadow: '#D64D81', emoji: '🔠', text: 'text-[#FF70A6]'},
    { id: 'hindi', title: 'हिंदी जगत', subtitle: 'अ से ज्ञ तक', color: 'bg-app-blue', shadow: '#49A6C9', emoji: '🕉️', text: 'text-[#70D6FF]'},
    { id: 'math', title: 'Maths', subtitle: '123 Numbers', color: 'bg-app-yellow', shadow: '#C9A449', emoji: '🔢', text: 'text-[#E6AF2E]'},
    { id: 'games', title: 'Creative', subtitle: 'Draw & Play', color: 'bg-app-green', shadow: '#75C9A4', emoji: '🎨', text: 'text-[#2EC4B6]'},
  ];

  const handleCategory = (id: string) => {
    if (id === 'english') {
      playAudio('Let\'s learn English!');
      setScreen('english');
    } else if (id === 'math') {
      playAudio('Let\'s play with numbers!');
      setScreen('math');
    } else {
      playAudio('Coming soon!');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#70D6FF] via-[#91E5F6] to-[#A5FFD6] text-app-dark relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-white opacity-40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-[150px] h-[150px] bg-[#FFD670] opacity-30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-[5%] left-[15%] w-full h-[150px] bg-white opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="flex justify-between items-center p-4 pt-6 z-10 w-full relative">
        <div className="flex items-center gap-2 bg-white/90 p-2 pr-4 rounded-full shadow-lg border-[3px] border-[#FF70A6]">
          <div className="w-12 h-12 bg-[#FFD670] rounded-full border-[3px] border-white overflow-hidden shadow-inner flex items-center justify-center">
            <span className="text-2xl mt-1">
              {avatarId === 1 ? '🌼' : avatarId === 2 ? '🦊' : avatarId === 3 ? '🐶' : '🦁'}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF70A6] leading-none">Ready to Learn?</span>
            <span className="text-lg font-black text-[#4A4E69] leading-none mt-1" style={{ whiteSpace: 'nowrap' }}>नमस्ते, {childName}!</span>
          </div>
        </div>

        <div className="flex gap-2">
           <div className="flex items-center bg-[#FF9770] px-3 py-2 rounded-full border-[3px] border-white shadow-lg text-white font-black text-xs text-center justify-center transition-transform hover:scale-105 active:scale-95">
            <span className="mr-1">⭐</span> {stars}
          </div>
          <div className="flex items-center bg-[#70D6FF] px-3 py-2 rounded-full border-[3px] border-white shadow-lg text-white font-black text-xs text-center justify-center transition-transform hover:scale-105 active:scale-95">
            <span className="mr-1">🪙</span> {coins}
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 flex flex-col items-center justify-start gap-4 z-10 mt-2 overflow-y-auto pb-[90px] no-scrollbar">
        {/* Welcome Area */}
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/40 backdrop-blur-md p-4 w-full rounded-[30px] border-4 border-white/60 shadow-xl">
          <div className="relative mx-auto sm:mx-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#FFD670] rounded-full flex items-center justify-center text-5xl sm:text-[70px] shadow-2xl animate-bounce">
              🐘
            </div>
            <div className="absolute -top-2 -right-2 bg-white px-3 py-1 rounded-2xl shadow-md border-2 border-[#70D6FF] transform rotate-12">
              <span className="text-xs font-bold whitespace-nowrap">I am Chintu!</span>
            </div>
          </div>
          
          <div className="flex flex-col w-full">
            <div className="bg-white p-4 rounded-3xl shadow-lg relative">
              <div className="hidden sm:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-white border-b-[10px] border-b-transparent"></div>
              <div className="block sm:hidden absolute top-[-12px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-white border-r-[10px] border-r-transparent"></div>
              <p className="text-md sm:text-2xl font-black text-[#2D3436] leading-tight text-center sm:text-left">
                Which world shall we<br />explore today?<br />
                <span className="text-[#FF70A6] text-lg">आज हम क्या सीखेंगे?</span>
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 w-full pt-2">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.5 }}
              onClick={() => handleCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, y: 5 }}
              className={`group ${cat.color} p-1 pb-3 rounded-[24px] cursor-pointer transition-transform`}
              style={{ boxShadow: `0 8px 0 0 ${cat.shadow}` }}
            >
              <div className="bg-white h-full rounded-[20px] p-4 flex flex-col items-center gap-2 text-center pointer-events-none">
                <div className={`w-14 h-14 ${cat.color}/10 rounded-2xl flex items-center justify-center text-4xl`}>
                  {cat.emoji}
                </div>
                <h3 className={`text-base font-black ${cat.text}`}>{cat.title}</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase leading-tight">{cat.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer Navigation (as per design) */}
      <footer className="absolute bottom-0 w-full h-20 bg-white/60 backdrop-blur-xl border-t-4 border-white flex justify-center items-center gap-8 z-20">
        <button className="flex flex-col items-center gap-1 group">
          <div className="w-10 h-10 bg-[#FF70A6] rounded-xl flex items-center justify-center text-white text-xl shadow-lg border-2 border-white">
            🏠
          </div>
          <span className="text-[9px] font-black text-[#FF70A6] uppercase tracking-widest">Home</span>
        </button>
        
        <button className="relative -top-6 transform transition-transform hover:scale-110 active:scale-95" onClick={() => playAudio('I am listening!')}>
          <div className="w-20 h-20 bg-[#70D6FF] rounded-full border-[4px] border-white shadow-2xl flex items-center justify-center text-3xl text-white">
            🎤
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full border-2 border-[#70D6FF] shadow-md">
             <span className="text-[8px] font-black whitespace-nowrap text-[#2D3436]">TALK</span>
          </div>
        </button>
        
        <button 
          onClick={() => setScreen('parent_gateway')}
          className="flex flex-col items-center gap-1 hover:scale-105 active:scale-95 transition-transform"
        >
          <div className="w-10 h-10 bg-[#A088FF] rounded-xl flex items-center justify-center text-white text-xl shadow-lg border-2 border-white">
            🔒
          </div>
          <span className="text-[9px] font-black text-[#A088FF] uppercase tracking-widest">Parents</span>
        </button>
      </footer>
    </div>
  );
};
