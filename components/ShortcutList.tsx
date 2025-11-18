'use client';

import { Box, Typography, List, ListItem, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Shortcut, Platform } from '@/data/types';

const MotionListItem = motion.create(ListItem);

interface ShortcutListProps {
  shortcuts: Shortcut[];
  platform: Platform;
  onSelectShortcut?: (shortcut: Shortcut) => void;
}

export function ShortcutList({
  shortcuts,
  platform,
  onSelectShortcut,
}: ShortcutListProps) {
  if (shortcuts.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 200,
          color: 'text.secondary',
        }}
      >
        <Typography>No shortcuts found</Typography>
      </Box>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ width: '100%' }}
    >
      <List sx={{ width: '100%' }}>
        {shortcuts.map((shortcut) => (
          <MotionListItem
            key={shortcut.id}
            variants={itemVariants}
            onClick={() => onSelectShortcut?.(shortcut)}
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 1,
              padding: 2,
              marginBottom: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(30, 41, 59, 0.6)'
                  : 'rgba(248, 250, 252, 0.8)',
              borderRadius: '0.5rem',
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(148, 163, 184, 0.2)'
                    : 'rgba(226, 232, 240, 0.8)'
                }`,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(30, 41, 59, 0.9)'
                    : 'rgba(226, 232, 240, 1)',
                transform: 'translateX(4px)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {shortcut.name}
              </Typography>
              <Chip
                label={shortcut.category}
                size="small"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
              }}
            >
              {shortcut.description}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ width: '100%', mt: 1 }}>
              {(platform === 'mac' ? shortcut.keys.mac : shortcut.keys.windows).map(
                (key, idx) => (
                  <Chip
                    key={`${shortcut.id}-${idx}`}
                    label={key}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                    }}
                  />
                )
              )}
            </Stack>
          </MotionListItem>
        ))}
      </List>
    </motion.div>
  );
}
