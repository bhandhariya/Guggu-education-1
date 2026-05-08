import React from 'react';
import { useAppStore } from '@/store';
import { ArrowLeft, Clock, BarChart3, Star, Coins, User } from 'lucide-react';

export const ParentDashboard = () => {
  const { childName, coins, stars, setScreen } = useAppStore();

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <div className="bg-slate-800 text-white p-6 rounded-b-3xl shadow-md">
        <div className="flex items-center mb-6">
          <button onClick={() => setScreen('home')} className="p-2 bg-slate-700 rounded-full mr-4">
             <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-black">Parent Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="bg-slate-700 p-4 rounded-full">
             <User className="w-8 h-8 text-app-blue" />
           </div>
           <div>
             <p className="text-slate-400 font-bold text-sm">Child Profile</p>
             <p className="text-2xl font-bold">{childName}</p>
           </div>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto pb-20">
         <h2 className="text-lg font-bold text-slate-700 mb-4">Learning Progress</h2>
         
         <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 pb-8 relative">
               <Coins className="w-8 h-8 text-app-yellow mb-2" />
               <p className="text-3xl font-black text-slate-800">{coins}</p>
               <p className="text-slate-500 font-bold text-sm">Total Coins</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 pb-8 relative">
               <Star className="w-8 h-8 text-app-purple mb-2" />
               <p className="text-3xl font-black text-slate-800">{stars}</p>
               <p className="text-slate-500 font-bold text-sm">Skills Mastered</p>
            </div>
         </div>

         <h2 className="text-lg font-bold text-slate-700 mb-4">Recent Activity</h2>
         <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="bg-app-blue/20 p-2 rounded-lg">
                    <span className="text-xl">🔤</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">English Alphabets</p>
                    <p className="text-slate-500 text-xs">Completed A to E</p>
                  </div>
               </div>
               <span className="text-app-green font-bold text-sm">+5 Coins</span>
            </div>
            <div className="p-4 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="bg-app-pink/20 p-2 rounded-lg">
                    <span className="text-xl">🍎</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Count the Objects</p>
                    <p className="text-slate-500 text-xs">Perfect Score</p>
                  </div>
               </div>
               <span className="text-app-purple font-bold text-sm">+1 Star</span>
            </div>
         </div>
      </div>
    </div>
  );
}
