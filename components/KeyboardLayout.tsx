'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { KeyCap } from './KeyCap';
import { Shortcut } from '@/data/types';

const MotionBox = motion.create(Box);

interface KeyboardLayoutProps {
  shortcuts: Shortcut[];
  selectedKey?: string;
  onKeyClick?: (key: string) => void;
}

const KEYBOARD_LAYOUT = [
  [
    { label: 'Esc', key: 'Escape', width: 40 },
    { label: 'F1', key: 'F1', width: 40 },
    { label: 'F2', key: 'F2', width: 40 },
    { label: 'F3', key: 'F3', width: 40 },
    { label: 'F4', key: 'F4', width: 40 },
    { label: 'F5', key: 'F5', width: 40 },
    { label: 'F6', key: 'F6', width: 40 },
    { label: 'F7', key: 'F7', width: 40 },
    { label: 'F8', key: 'F8', width: 40 },
    { label: 'F9', key: 'F9', width: 40 },
    { label: 'F10', key: 'F10', width: 40 },
    { label: 'F11', key: 'F11', width: 40 },
    { label: 'F12', key: 'F12', width: 40 },
  ],
  [
    { label: '`', key: '`', width: 40 },
    { label: '1', key: '1', width: 40 },
    { label: '2', key: '2', width: 40 },
    { label: '3', key: '3', width: 40 },
    { label: '4', key: '4', width: 40 },
    { label: '5', key: '5', width: 40 },
    { label: '6', key: '6', width: 40 },
    { label: '7', key: '7', width: 40 },
    { label: '8', key: '8', width: 40 },
    { label: '9', key: '9', width: 40 },
    { label: '0', key: '0', width: 40 },
    { label: '-', key: '-', width: 40 },
    { label: '=', key: '=', width: 40 },
    { label: 'Backspace', key: 'Backspace', width: 80 },
  ],
  [
    { label: 'Tab', key: 'Tab', width: 60 },
    { label: 'Q', key: 'Q', width: 40 },
    { label: 'W', key: 'W', width: 40 },
    { label: 'E', key: 'E', width: 40 },
    { label: 'R', key: 'R', width: 40 },
    { label: 'T', key: 'T', width: 40 },
    { label: 'Y', key: 'Y', width: 40 },
    { label: 'U', key: 'U', width: 40 },
    { label: 'I', key: 'I', width: 40 },
    { label: 'O', key: 'O', width: 40 },
    { label: 'P', key: 'P', width: 40 },
    { label: '[', key: '[', width: 40 },
    { label: ']', key: ']', width: 40 },
    { label: '\\', key: '\\', width: 40 },
  ],
  [
    { label: 'Caps', key: 'CapsLock', width: 70 },
    { label: 'A', key: 'A', width: 40 },
    { label: 'S', key: 'S', width: 40 },
    { label: 'D', key: 'D', width: 40 },
    { label: 'F', key: 'F', width: 40 },
    { label: 'G', key: 'G', width: 40 },
    { label: 'H', key: 'H', width: 40 },
    { label: 'J', key: 'J', width: 40 },
    { label: 'K', key: 'K', width: 40 },
    { label: 'L', key: 'L', width: 40 },
    { label: ';', key: ';', width: 40 },
    { label: "'", key: "'", width: 40 },
    { label: 'Enter', key: 'Enter', width: 80 },
  ],
  [
    { label: 'Shift', key: 'Shift', width: 90 },
    { label: 'Z', key: 'Z', width: 40 },
    { label: 'X', key: 'X', width: 40 },
    { label: 'C', key: 'C', width: 40 },
    { label: 'V', key: 'V', width: 40 },
    { label: 'B', key: 'B', width: 40 },
    { label: 'N', key: 'N', width: 40 },
    { label: 'M', key: 'M', width: 40 },
    { label: ',', key: ',', width: 40 },
    { label: '.', key: '.', width: 40 },
    { label: '/', key: '/', width: 40 },
    { label: 'Shift', key: 'Shift', width: 100 },
  ],
  [
    { label: 'Ctrl', key: 'Ctrl', width: 60 },
    { label: 'Option', key: 'Option', width: 55 },
    { label: 'Cmd', key: 'Cmd', width: 55 },
    { label: 'Space', key: 'Space', width: 280 },
    { label: 'Cmd', key: 'Cmd', width: 55 },
    { label: 'Option', key: 'Option', width: 55 },
    { label: 'Ctrl', key: 'Ctrl', width: 60 },
  ],
];

function getShortcutsForKey(shortcuts: Shortcut[], keyLabel: string): Shortcut[] {
  return shortcuts.filter(
    (shortcut) =>
      shortcut.keys.mac.some((k) => k === keyLabel) ||
      shortcut.keys.windows.some((k) => k === keyLabel)
  );
}

export function KeyboardLayout({
  shortcuts,
  selectedKey,
  onKeyClick,
}: KeyboardLayoutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(30, 41, 59, 0.5)'
            : 'rgba(248, 250, 252, 0.5)',
        borderRadius: '0.75rem',
        border: (theme) =>
          `1px solid ${
            theme.palette.mode === 'dark'
              ? 'rgba(148, 163, 184, 0.2)'
              : 'rgba(226, 232, 240, 0.8)'
          }`,
        backdropFilter: 'blur(10px)',
      }}
    >
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: rowIndex === KEYBOARD_LAYOUT.length - 1 ? 'center' : 'flex-start',
          }}
        >
          {row.map((keyData, keyIndex) => (
            <KeyCap
              key={`${rowIndex}-${keyIndex}`}
              label={keyData.label}
              keyValue={keyData.key}
              width={keyData.width}
              shortcuts={getShortcutsForKey(shortcuts, keyData.key)}
              isSelected={selectedKey === keyData.key}
              onClick={() => onKeyClick?.(keyData.key)}
            />
          ))}
        </motion.div>
      ))}
    </MotionBox>
  );
}
