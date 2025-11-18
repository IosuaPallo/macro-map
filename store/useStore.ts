import { create } from 'zustand';
import type { AppSlug, Platform } from '@/data/types';

interface StoreState {
  selectedApp: AppSlug | null;
  selectedKey: string | null;
  platform: Platform;
  searchTerm: string;
  selectedCategory: string | null;
  isDarkMode: boolean;
  setSelectedApp: (app: AppSlug | null) => void;
  setSelectedKey: (key: string | null) => void;
  setPlatform: (platform: Platform) => void;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string | null) => void;
  setIsDarkMode: (isDark: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedApp: null,
  selectedKey: null,
  platform: 'mac',
  searchTerm: '',
  selectedCategory: null,
  isDarkMode: false,
  setSelectedApp: (app) => set({ selectedApp: app }),
  setSelectedKey: (key) => set({ selectedKey: key }),
  setPlatform: (platform) => set({ platform }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setIsDarkMode: (isDark) => set({ isDarkMode: isDark }),
}));
