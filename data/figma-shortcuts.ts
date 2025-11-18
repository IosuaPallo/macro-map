import { Shortcut } from './types';

export const figmaShortcuts: Shortcut[] = [
  // Selection & Navigation
  {
    id: 'figma-1',
    name: 'Selection Tool',
    keys: {
      mac: ['V'],
      windows: ['V'],
    },
    category: 'Selection',
    description: 'Activate selection tool',
    app: 'figma',
  },
  {
    id: 'figma-2',
    name: 'Frame Tool',
    keys: {
      mac: ['F'],
      windows: ['F'],
    },
    category: 'Tools',
    description: 'Create frame',
    app: 'figma',
  },
  {
    id: 'figma-3',
    name: 'Rectangle Tool',
    keys: {
      mac: ['R'],
      windows: ['R'],
    },
    category: 'Tools',
    description: 'Draw rectangle',
    app: 'figma',
  },
  {
    id: 'figma-4',
    name: 'Ellipse Tool',
    keys: {
      mac: ['O'],
      windows: ['O'],
    },
    category: 'Tools',
    description: 'Draw ellipse',
    app: 'figma',
  },
  {
    id: 'figma-5',
    name: 'Text Tool',
    keys: {
      mac: ['T'],
      windows: ['T'],
    },
    category: 'Tools',
    description: 'Add text',
    app: 'figma',
  },
  // Editing
  {
    id: 'figma-6',
    name: 'Undo',
    keys: {
      mac: ['Cmd', 'Z'],
      windows: ['Ctrl', 'Z'],
    },
    category: 'Editing',
    description: 'Undo last action',
    app: 'figma',
  },
  {
    id: 'figma-7',
    name: 'Redo',
    keys: {
      mac: ['Cmd', 'Shift', 'Z'],
      windows: ['Ctrl', 'Shift', 'Z'],
    },
    category: 'Editing',
    description: 'Redo last undone action',
    app: 'figma',
  },
  {
    id: 'figma-8',
    name: 'Duplicate',
    keys: {
      mac: ['Cmd', 'D'],
      windows: ['Ctrl', 'D'],
    },
    category: 'Editing',
    description: 'Duplicate selection',
    app: 'figma',
  },
  {
    id: 'figma-9',
    name: 'Copy',
    keys: {
      mac: ['Cmd', 'C'],
      windows: ['Ctrl', 'C'],
    },
    category: 'Editing',
    description: 'Copy selection',
    app: 'figma',
  },
  {
    id: 'figma-10',
    name: 'Paste',
    keys: {
      mac: ['Cmd', 'V'],
      windows: ['Ctrl', 'V'],
    },
    category: 'Editing',
    description: 'Paste copied element',
    app: 'figma',
  },
  {
    id: 'figma-11',
    name: 'Cut',
    keys: {
      mac: ['Cmd', 'X'],
      windows: ['Ctrl', 'X'],
    },
    category: 'Editing',
    description: 'Cut selection',
    app: 'figma',
  },
  {
    id: 'figma-12',
    name: 'Delete',
    keys: {
      mac: ['Delete', 'Backspace'],
      windows: ['Delete', 'Backspace'],
    },
    category: 'Editing',
    description: 'Delete selection',
    app: 'figma',
  },
  // Selection
  {
    id: 'figma-13',
    name: 'Select All',
    keys: {
      mac: ['Cmd', 'A'],
      windows: ['Ctrl', 'A'],
    },
    category: 'Selection',
    description: 'Select all on canvas',
    app: 'figma',
  },
  {
    id: 'figma-14',
    name: 'Deselect All',
    keys: {
      mac: ['Escape'],
      windows: ['Escape'],
    },
    category: 'Selection',
    description: 'Deselect everything',
    app: 'figma',
  },
  // View
  {
    id: 'figma-15',
    name: 'Zoom In',
    keys: {
      mac: ['Cmd', '+'],
      windows: ['Ctrl', '+'],
    },
    category: 'View',
    description: 'Increase zoom',
    app: 'figma',
  },
  {
    id: 'figma-16',
    name: 'Zoom Out',
    keys: {
      mac: ['Cmd', '-'],
      windows: ['Ctrl', '-'],
    },
    category: 'View',
    description: 'Decrease zoom',
    app: 'figma',
  },
  {
    id: 'figma-17',
    name: 'Zoom to 100%',
    keys: {
      mac: ['Cmd', '1'],
      windows: ['Ctrl', '1'],
    },
    category: 'View',
    description: 'Reset zoom to 100%',
    app: 'figma',
  },
  {
    id: 'figma-18',
    name: 'Zoom to Fit All',
    keys: {
      mac: ['Cmd', '0'],
      windows: ['Ctrl', '0'],
    },
    category: 'View',
    description: 'Fit all on screen',
    app: 'figma',
  },
  {
    id: 'figma-19',
    name: 'Toggle UI',
    keys: {
      mac: ['Cmd', '.'],
      windows: ['Ctrl', '.'],
    },
    category: 'View',
    description: 'Show/hide interface',
    app: 'figma',
  },
  // Components
  {
    id: 'figma-20',
    name: 'Create Component',
    keys: {
      mac: ['Cmd', 'Option', 'K'],
      windows: ['Ctrl', 'Alt', 'K'],
    },
    category: 'Components',
    description: 'Convert selection to component',
    app: 'figma',
  },
];
