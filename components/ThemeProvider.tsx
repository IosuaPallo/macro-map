'use client';

import { useEffect, useState } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { useStore } from '@/store/useStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const isDarkMode = useStore((state) => state.isDarkMode);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDarkMode = process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true';

    if (enableDarkMode && prefersDark) {
      useStore.setState({ isDarkMode: true });
    }
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#6366F1',
      },
      secondary: {
        main: '#EC4899',
      },
      background: {
        default: isDarkMode ? '#0F172A' : '#FFFFFF',
        paper: isDarkMode ? '#1E293B' : '#F8FAFC',
      },
    },
    typography: {
      fontFamily: '"Geist", "Arial", "sans-serif"',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2.25rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '0.5rem',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '0.75rem',
            boxShadow:
              isDarkMode
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '0.75rem',
          },
        },
      },
    },
  });

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
