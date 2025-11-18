import { Shortcut } from './types';
import { photoshopShortcuts } from './photoshop-shortcuts';
import { vscodeShortcuts } from './vscode-shortcuts';
import { figmaShortcuts } from './figma-shortcuts';

export const allShortcuts: Shortcut[] = [
  ...photoshopShortcuts,
  ...vscodeShortcuts,
  ...figmaShortcuts,
];

export const getShortcutsByApp = (appSlug: string): Shortcut[] => {
  return allShortcuts.filter((shortcut) => shortcut.app === appSlug);
};

export const getCategories = (appSlug: string): string[] => {
  const shortcuts = getShortcutsByApp(appSlug);
  return Array.from(new Set(shortcuts.map((s) => s.category))).sort();
};

export const filterShortcuts = (
  shortcuts: Shortcut[],
  {
    category,
    searchTerm,
  }: {
    category?: string;
    searchTerm?: string;
  }
): Shortcut[] => {
  let filtered = shortcuts;

  if (category) {
    filtered = filtered.filter((s) => s.category === category);
  }

  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term) ||
        s.keys.mac.some((k) => k.toLowerCase().includes(term)) ||
        s.keys.windows.some((k) => k.toLowerCase().includes(term))
    );
  }

  return filtered;
};

export * from './types';
export * from './photoshop-shortcuts';
export * from './vscode-shortcuts';
export * from './figma-shortcuts';
export * from './apps';
