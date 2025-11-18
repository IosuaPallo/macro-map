import { Shortcut } from './types';

export const photoshopShortcuts: Shortcut[] = [
  // Selection
  {
    id: 'ps-1',
    name: 'Rectangular Selection Tool',
    keys: {
      mac: ['R'],
      windows: ['R'],
    },
    category: 'Selection',
    description: 'Select rectangular areas',
    app: 'photoshop',
  },
  {
    id: 'ps-2',
    name: 'Elliptical Selection Tool',
    keys: {
      mac: ['E'],
      windows: ['E'],
    },
    category: 'Selection',
    description: 'Select elliptical areas',
    app: 'photoshop',
  },
  {
    id: 'ps-3',
    name: 'Free Transform',
    keys: {
      mac: ['Cmd', 'T'],
      windows: ['Ctrl', 'T'],
    },
    category: 'Editing',
    description: 'Scale, rotate, or skew selection',
    app: 'photoshop',
  },
  // Editing
  {
    id: 'ps-4',
    name: 'Undo',
    keys: {
      mac: ['Cmd', 'Z'],
      windows: ['Ctrl', 'Z'],
    },
    category: 'Editing',
    description: 'Undo last action',
    app: 'photoshop',
  },
  {
    id: 'ps-5',
    name: 'Step Forward',
    keys: {
      mac: ['Cmd', 'Shift', 'Z'],
      windows: ['Ctrl', 'Shift', 'Z'],
    },
    category: 'Editing',
    description: 'Redo last undone action',
    app: 'photoshop',
  },
  {
    id: 'ps-6',
    name: 'Copy',
    keys: {
      mac: ['Cmd', 'C'],
      windows: ['Ctrl', 'C'],
    },
    category: 'Editing',
    description: 'Copy selection',
    app: 'photoshop',
  },
  {
    id: 'ps-7',
    name: 'Paste',
    keys: {
      mac: ['Cmd', 'V'],
      windows: ['Ctrl', 'V'],
    },
    category: 'Editing',
    description: 'Paste copied content',
    app: 'photoshop',
  },
  {
    id: 'ps-8',
    name: 'Delete',
    keys: {
      mac: ['Delete'],
      windows: ['Delete'],
    },
    category: 'Editing',
    description: 'Delete selection or layer',
    app: 'photoshop',
  },
  // Navigation
  {
    id: 'ps-9',
    name: 'Zoom In',
    keys: {
      mac: ['Cmd', '+'],
      windows: ['Ctrl', '+'],
    },
    category: 'Navigation',
    description: 'Increase zoom level',
    app: 'photoshop',
  },
  {
    id: 'ps-10',
    name: 'Zoom Out',
    keys: {
      mac: ['Cmd', '-'],
      windows: ['Ctrl', '-'],
    },
    category: 'Navigation',
    description: 'Decrease zoom level',
    app: 'photoshop',
  },
  {
    id: 'ps-11',
    name: 'Fit in Window',
    keys: {
      mac: ['Cmd', '0'],
      windows: ['Ctrl', '0'],
    },
    category: 'Navigation',
    description: 'Fit entire image in window',
    app: 'photoshop',
  },
  {
    id: 'ps-12',
    name: 'Actual Pixels',
    keys: {
      mac: ['Cmd', 'Option', '0'],
      windows: ['Ctrl', 'Alt', '0'],
    },
    category: 'Navigation',
    description: 'View at 100% zoom',
    app: 'photoshop',
  },
  // Layers
  {
    id: 'ps-13',
    name: 'New Layer',
    keys: {
      mac: ['Cmd', 'Shift', 'N'],
      windows: ['Ctrl', 'Shift', 'N'],
    },
    category: 'Layers',
    description: 'Create new layer',
    app: 'photoshop',
  },
  {
    id: 'ps-14',
    name: 'Duplicate Layer',
    keys: {
      mac: ['Cmd', 'J'],
      windows: ['Ctrl', 'J'],
    },
    category: 'Layers',
    description: 'Duplicate current layer',
    app: 'photoshop',
  },
  {
    id: 'ps-15',
    name: 'Merge Down',
    keys: {
      mac: ['Cmd', 'E'],
      windows: ['Ctrl', 'E'],
    },
    category: 'Layers',
    description: 'Merge layer with below',
    app: 'photoshop',
  },
  // View
  {
    id: 'ps-16',
    name: 'Show/Hide Layers',
    keys: {
      mac: ['F7'],
      windows: ['F7'],
    },
    category: 'View',
    description: 'Toggle layers panel visibility',
    app: 'photoshop',
  },
  {
    id: 'ps-17',
    name: 'Full Screen Mode',
    keys: {
      mac: ['F'],
      windows: ['F'],
    },
    category: 'View',
    description: 'Toggle full screen view',
    app: 'photoshop',
  },
];
