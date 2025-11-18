'use client';

import { Card, Box, Tooltip, Badge } from '@mui/material';
import { motion } from 'framer-motion';
import { Shortcut } from '@/data/types';

const MotionCard = motion(Card);

interface KeyCapProps {
  label: string;
  keyValue: string;
  shortcuts?: Shortcut[];
  isSelected?: boolean;
  onClick?: () => void;
  width?: number;
}

export function KeyCap({
  label,
  keyValue,
  shortcuts = [],
  isSelected = false,
  onClick,
  width = 40,
}: KeyCapProps) {
  const hasShortcuts = shortcuts.length > 0;
  const shortcutLabels = shortcuts.map((s) => s.name).join(', ');

  return (
    <Tooltip
      title={shortcutLabels || 'No shortcuts'}
      arrow
      placement="top"
      enterDelay={200}
    >
      <MotionCard
        onClick={onClick}
        whileHover={hasShortcuts ? { y: -4 } : {}}
        whileTap={hasShortcuts ? { scale: 0.95 } : {}}
        sx={{
          width: `${width}px`,
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: hasShortcuts ? 'pointer' : 'default',
          userSelect: 'none',
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          borderRadius: '0.375rem',
          border: isSelected ? '2px solid' : '1px solid',
          borderColor: isSelected ? 'primary.main' : 'divider',
          backgroundColor: hasShortcuts
            ? (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(99, 102, 241, 0.2)'
                  : 'rgba(99, 102, 241, 0.1)'
            : (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(148, 163, 184, 0.1)'
                  : 'rgba(226, 232, 240, 1)',
          boxShadow: isSelected
            ? '0 4px 12px rgba(99, 102, 241, 0.3)'
            : (theme) =>
                theme.palette.mode === 'dark'
                  ? '0 1px 3px rgba(0, 0, 0, 0.3)'
                  : '0 1px 3px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease-out',
          position: 'relative',
          '&:hover': {
            boxShadow: hasShortcuts
              ? '0 8px 16px rgba(99, 102, 241, 0.4)'
              : 'none',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.25,
          }}
        >
          {hasShortcuts && (
            <Badge
              badgeContent={shortcuts.length}
              color="primary"
              sx={{
                '& .MuiBadge-badge': {
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  fontSize: '0.625rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              }}
            >
              <span>{label}</span>
            </Badge>
          )}
          {!hasShortcuts && <span>{label}</span>}
        </Box>
      </MotionCard>
    </Tooltip>
  );
}
