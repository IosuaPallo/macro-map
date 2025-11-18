import { Shortcut } from './types';

export const vscodeShortcuts: Shortcut[] = [
  // Navigation
  {
    id: 'vsc-1',
    name: 'Go to File',
    keys: {
      mac: ['Cmd', 'P'],
      windows: ['Ctrl', 'P'],
    },
    category: 'Navigation',
    description: 'Quick open file',
    app: 'vscode',
  },
  {
    id: 'vsc-2',
    name: 'Go to Line',
    keys: {
      mac: ['Cmd', 'G'],
      windows: ['Ctrl', 'G'],
    },
    category: 'Navigation',
    description: 'Jump to specific line',
    app: 'vscode',
  },
  {
    id: 'vsc-3',
    name: 'Go to Symbol',
    keys: {
      mac: ['Cmd', 'Shift', 'O'],
      windows: ['Ctrl', 'Shift', 'O'],
    },
    category: 'Navigation',
    description: 'Jump to symbol in file',
    app: 'vscode',
  },
  {
    id: 'vsc-4',
    name: 'Command Palette',
    keys: {
      mac: ['Cmd', 'Shift', 'P'],
      windows: ['Ctrl', 'Shift', 'P'],
    },
    category: 'Navigation',
    description: 'Access all commands',
    app: 'vscode',
  },
  // Editing
  {
    id: 'vsc-5',
    name: 'Undo',
    keys: {
      mac: ['Cmd', 'Z'],
      windows: ['Ctrl', 'Z'],
    },
    category: 'Editing',
    description: 'Undo last action',
    app: 'vscode',
  },
  {
    id: 'vsc-6',
    name: 'Redo',
    keys: {
      mac: ['Cmd', 'Shift', 'Z'],
      windows: ['Ctrl', 'Shift', 'Z'],
    },
    category: 'Editing',
    description: 'Redo last undone action',
    app: 'vscode',
  },
  {
    id: 'vsc-7',
    name: 'Cut Line',
    keys: {
      mac: ['Cmd', 'X'],
      windows: ['Ctrl', 'X'],
    },
    category: 'Editing',
    description: 'Cut entire line',
    app: 'vscode',
  },
  {
    id: 'vsc-8',
    name: 'Copy Line',
    keys: {
      mac: ['Cmd', 'C'],
      windows: ['Ctrl', 'C'],
    },
    category: 'Editing',
    description: 'Copy entire line',
    app: 'vscode',
  },
  {
    id: 'vsc-9',
    name: 'Delete Line',
    keys: {
      mac: ['Cmd', 'Shift', 'K'],
      windows: ['Ctrl', 'Shift', 'K'],
    },
    category: 'Editing',
    description: 'Delete entire line',
    app: 'vscode',
  },
  {
    id: 'vsc-10',
    name: 'Insert Line Below',
    keys: {
      mac: ['Cmd', 'Enter'],
      windows: ['Ctrl', 'Enter'],
    },
    category: 'Editing',
    description: 'Insert new line below',
    app: 'vscode',
  },
  {
    id: 'vsc-11',
    name: 'Find',
    keys: {
      mac: ['Cmd', 'F'],
      windows: ['Ctrl', 'F'],
    },
    category: 'Editing',
    description: 'Open find dialog',
    app: 'vscode',
  },
  {
    id: 'vsc-12',
    name: 'Replace',
    keys: {
      mac: ['Cmd', 'H'],
      windows: ['Ctrl', 'H'],
    },
    category: 'Editing',
    description: 'Open find and replace',
    app: 'vscode',
  },
  // Selection
  {
    id: 'vsc-13',
    name: 'Select All',
    keys: {
      mac: ['Cmd', 'A'],
      windows: ['Ctrl', 'A'],
    },
    category: 'Selection',
    description: 'Select entire file',
    app: 'vscode',
  },
  {
    id: 'vsc-14',
    name: 'Add Cursor Below',
    keys: {
      mac: ['Option', 'Cmd', 'Down'],
      windows: ['Alt', 'Ctrl', 'Down'],
    },
    category: 'Selection',
    description: 'Add cursor to line below',
    app: 'vscode',
  },
  {
    id: 'vsc-15',
    name: 'Select Word',
    keys: {
      mac: ['Cmd', 'D'],
      windows: ['Ctrl', 'D'],
    },
    category: 'Selection',
    description: 'Select current word',
    app: 'vscode',
  },
  // View
  {
    id: 'vsc-16',
    name: 'Toggle Sidebar',
    keys: {
      mac: ['Cmd', 'B'],
      windows: ['Ctrl', 'B'],
    },
    category: 'View',
    description: 'Show/hide sidebar',
    app: 'vscode',
  },
  {
    id: 'vsc-17',
    name: 'Toggle Terminal',
    keys: {
      mac: ['Cmd', '`'],
      windows: ['Ctrl', '`'],
    },
    category: 'View',
    description: 'Show/hide integrated terminal',
    app: 'vscode',
  },
  {
    id: 'vsc-18',
    name: 'Zen Mode',
    keys: {
      mac: ['Cmd', 'K', 'Z'],
      windows: ['Ctrl', 'K', 'Z'],
    },
    category: 'View',
    description: 'Enter distraction-free mode',
    app: 'vscode',
  },
  // Debugging
  {
    id: 'vsc-19',
    name: 'Start Debugging',
    keys: {
      mac: ['F5'],
      windows: ['F5'],
    },
    category: 'Debugging',
    description: 'Start debug session',
    app: 'vscode',
  },
  {
    id: 'vsc-20',
    name: 'Pause/Continue',
    keys: {
      mac: ['F6'],
      windows: ['F6'],
    },
    category: 'Debugging',
    description: 'Pause or continue execution',
    app: 'vscode',
  },
];
