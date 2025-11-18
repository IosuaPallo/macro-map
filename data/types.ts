export type Platform = 'mac' | 'windows';
export type AppSlug = 'photoshop' | 'vscode' | 'figma';

export interface Shortcut {
  id: string;
  name: string;
  keys: {
    mac: string[];
    windows: string[];
  };
  category: string;
  description: string;
  app: AppSlug;
}

export interface App {
  id: string;
  slug: AppSlug;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface KeyboardLayoutKey {
  row: number;
  key: string;
  label?: string;
  width?: number;
  shift?: boolean;
}
