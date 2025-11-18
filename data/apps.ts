import { App } from './types';

export const apps: App[] = [
  {
    id: 'photoshop',
    slug: 'photoshop',
    name: 'Photoshop',
    description: 'Master image editing with powerful tools and shortcuts',
    icon: '🎨',
    color: '#0078FF',
  },
  {
    id: 'vscode',
    slug: 'vscode',
    name: 'VS Code',
    description: 'Write code faster with essential development shortcuts',
    icon: '💻',
    color: '#007ACC',
  },
  {
    id: 'figma',
    slug: 'figma',
    name: 'Figma',
    description: 'Design collaboratively with intuitive keyboard shortcuts',
    icon: '✨',
    color: '#F24E1E',
  },
];

export const getApp = (slug: string): App | undefined => {
  return apps.find((app) => app.slug === slug);
};
