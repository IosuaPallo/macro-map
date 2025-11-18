'use client';

import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Shortcut, Platform } from '@/data/types';
import { useState } from 'react';

const MotionCard = motion(Card);

interface ShortcutDetailsProps {
  shortcut: Shortcut | null;
  platform: Platform;
}

export function ShortcutDetails({ shortcut, platform }: ShortcutDetailsProps) {
  const [copied, setCopied] = useState(false);

  if (!shortcut) {
    return (
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(30, 41, 59, 0.5)'
              : 'rgba(248, 250, 252, 0.5)',
        }}
      >
        <Typography color="text.secondary" textAlign="center">
          Select a shortcut to view details
        </Typography>
      </Card>
    );
  }

  const keys = platform === 'mac' ? shortcut.keys.mac : shortcut.keys.windows;
  const keyCombo = keys.join(' + ');

  const handleCopy = () => {
    navigator.clipboard.writeText(keyCombo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <MotionCard
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        height: '100%',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          height: '100%',
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            {shortcut.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
            }}
          >
            {shortcut.description}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              marginBottom: 1,
              fontWeight: 600,
              color: 'text.secondary',
              textTransform: 'uppercase',
              fontSize: '0.7rem',
              letterSpacing: '0.5px',
            }}
          >
            Keyboard Shortcut
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {keys.map((key, idx) => (
              <Chip
                key={idx}
                label={key}
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  padding: 2,
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                }}
              />
            ))}
          </Stack>
        </Box>

        <Button
          variant="contained"
          startIcon={<ContentCopyIcon />}
          onClick={handleCopy}
          sx={{
            marginTop: 'auto',
            fontWeight: 600,
            backgroundColor: copied ? 'success.main' : 'primary.main',
            transition: 'background-color 0.3s ease',
          }}
        >
          {copied ? 'Copied!' : 'Copy Shortcut'}
        </Button>

        <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
          <Box>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                marginBottom: 0.5,
                fontWeight: 600,
                color: 'text.secondary',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Category
            </Typography>
            <Chip label={shortcut.category} size="small" variant="outlined" />
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                marginBottom: 0.5,
                fontWeight: 600,
                color: 'text.secondary',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Platform
            </Typography>
            <Chip label={platform.toUpperCase()} size="small" variant="outlined" />
          </Box>
        </Stack>
      </CardContent>
    </MotionCard>
  );
}
