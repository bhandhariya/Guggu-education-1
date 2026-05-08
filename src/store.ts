import { create } from 'zustand';

type Screen = 'splash' | 'profile' | 'home' | 'english' | 'hindi' | 'math' | 'parent_gateway' | 'parent_dashboard';

interface AppState {
  currentScreen: Screen;
  coins: number;
  stars: number;
  childName: string;
  avatarId: number;
  setScreen: (screen: Screen) => void;
  addCoins: (amount: number) => void;
  addStars: (amount: number) => void;
  setProfile: (name: string, avatarId: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentScreen: 'splash',
  coins: 10,
  stars: 0,
  childName: 'Kiddo',
  avatarId: 1,
  setScreen: (screen) => set({ currentScreen: screen }),
  addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
  addStars: (amount) => set((state) => ({ stars: state.stars + amount })),
  setProfile: (name, avatarId) => set({ childName: name, avatarId, currentScreen: 'home' }),
}));
