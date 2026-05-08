/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useAppStore } from './store';
import { Splash } from './screens/Splash';
import { ProfileSelect } from './screens/ProfileSelect';
import { Home } from './screens/Home';
import { AlphabetLearning } from './screens/AlphabetLearning';
import { MathGame } from './screens/MathGame';
import { ParentGateway } from './screens/ParentGateway';
import { ParentDashboard } from './screens/ParentDashboard';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const currentScreen = useAppStore(state => state.currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash': return <Splash key="splash" />;
      case 'profile': return <ProfileSelect key="profile" />;
      case 'home': return <Home key="home" />;
      case 'english': return <AlphabetLearning key="english" />;
      case 'math': return <MathGame key="math" />;
      case 'parent_gateway': return <ParentGateway key="parent_gateway" />;
      case 'parent_dashboard': return <ParentDashboard key="parent_dashboard" />;
      default: return <Home key="home" />;
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#0f172a]">
      {/* Mobile Device Mockup Container */}
      <div className="relative h-full w-full bg-slate-900 shadow-2xl overflow-hidden shadow-black/50 overflow-y-auto sm:h-[85vh] sm:w-[400px] sm:rounded-[3rem] sm:border-[12px] sm:border-slate-800 flex flex-col">
          {/* iOS style notch/header indicator for realism in desktop view */}
          <div className="hidden sm:block absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-40 mx-auto z-50"></div>
          
          {/* Screens rendered with smooth fading transitions */}
          <div className="flex-1 w-full relative overflow-hidden bg-white">
            <AnimatePresence mode="wait">
               <motion.div
                 key={currentScreen}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.2 }}
                 className="h-full w-full absolute inset-0"
               >
                 {renderScreen()}
               </motion.div>
            </AnimatePresence>
          </div>
      </div>
    </div>
  );
}

