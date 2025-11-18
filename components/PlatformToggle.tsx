'use client';

import { ToggleButton, ToggleButtonGroup, Box, Typography } from '@mui/material';
import { Platform } from '@/data/types';

interface PlatformToggleProps {
  platform: Platform;
  onPlatformChange: (platform: Platform) => void;
}

export function PlatformToggle({ platform, onPlatformChange }: PlatformToggleProps) {
  const handleChange = (event: React.MouseEvent<HTMLElement>, newPlatform: Platform) => {
    if (newPlatform !== null) {
      onPlatformChange(newPlatform);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
        Platform
      </Typography>
      <ToggleButtonGroup
        value={platform}
        exclusive
        onChange={handleChange}
        fullWidth
        size="small"
      >
        <ToggleButton value="mac">Mac</ToggleButton>
        <ToggleButton value="windows">Windows</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
