'use client';

import { useEffect, useState } from 'react';
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { KeyboardLayout } from '@/components/KeyboardLayout';
import { ShortcutDetails } from '@/components/ShortcutDetails';
import { ShortcutList } from '@/components/ShortcutList';
import { CategoryFilter } from '@/components/CategoryFilter';
import { PlatformToggle } from '@/components/PlatformToggle';
import { SearchBar } from '@/components/SearchBar';

import { getShortcutsByApp, getCategories, filterShortcuts } from '@/data/index';
import { getApp } from '@/data/apps';
import { useStore } from '@/store/useStore';
import { Shortcut, AppSlug } from '@/data/types';

const MotionBox = motion.create(Box);

export default function AppDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const [allShortcuts, setAllShortcuts] = useState<Shortcut[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const platform = useStore((state) => state.platform);
  const searchTerm = useStore((state) => state.searchTerm);
  const selectedCategory = useStore((state) => state.selectedCategory);
  const selectedKey = useStore((state) => state.selectedKey);
  const isDarkMode = useStore((state) => state.isDarkMode);

  const setPlatform = useStore((state) => state.setPlatform);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);
  const setSelectedKey = useStore((state) => state.setSelectedKey);
  const setIsDarkMode = useStore((state) => state.setIsDarkMode);

  const app = getApp(slug);

  useEffect(() => {
    if (!app) {
      router.push('/');
      return;
    }

    const shortcuts = getShortcutsByApp(slug);
    const cats = getCategories(slug);

    setAllShortcuts(shortcuts);
    setCategories(cats);

    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [slug, app, isMobile, router]);

  const filteredShortcuts = filterShortcuts(allShortcuts, {
    category: selectedCategory || undefined,
    searchTerm: searchTerm || undefined,
  });

  const selectedShortcutsByKey = selectedKey
    ? filteredShortcuts.filter(
        (s) => s.keys.mac.includes(selectedKey) || s.keys.windows.includes(selectedKey)
      )
    : [];

  const selectedShortcut = selectedShortcutsByKey[0] || null;

  if (!app) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            {isMobile && (
              <Button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                sx={{ minWidth: 'auto' }}
              >
                {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
              </Button>
            )}
            <Link href="/">
              <Button
                startIcon={<HomeIcon />}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.875rem',
                }}
              >
                Home
              </Button>
            </Link>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.125rem',
                }}
              >
                {app.name}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              onClick={() => setIsDarkMode(!isDarkMode)}
              size="small"
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </Button>
            <Link href="/about">
              <Button
                startIcon={<SettingsIcon />}
                size="small"
              >
                About
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          anchor="left"
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          sx={{
            width: isMobile ? 280 : 320,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: isMobile ? 280 : 320,
              boxSizing: 'border-box',
              borderRight: '1px solid',
              borderColor: 'divider',
            },
          }}
        >
          <Box
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              height: '100%',
              overflow: 'auto',
            }}
          >
            <SearchBar
              onSearch={setSearchTerm}
              placeholder="Search shortcuts..."
              debounceMs={200}
            />

            <Divider />

            <PlatformToggle
              platform={platform}
              onPlatformChange={setPlatform}
            />

            <Divider />

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <Divider />

            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                textTransform: 'uppercase',
                color: 'text.secondary',
                fontSize: '0.7rem',
                letterSpacing: '0.5px',
              }}
            >
              Results: {filteredShortcuts.length}
            </Typography>
          </Box>
        </Drawer>

        {/* Main Content Area */}
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Container maxWidth="xl" disableGutters>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 4,
                  '@media (max-width: 1279.95px)': {
                    flexDirection: 'column',
                  },
                }}
              >
                {/* Keyboard Section */}
                <Box
                  sx={{
                    flex: isTablet ? '1 1 100%' : '1 1 calc(66.666% - 16px)',
                    minWidth: '0',
                  }}
                >
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        marginBottom: 2,
                      }}
                    >
                      Keyboard Shortcuts
                    </Typography>

                    <KeyboardLayout
                      shortcuts={filteredShortcuts}
                      selectedKey={selectedKey ?? "undefined"}
                      onKeyClick={setSelectedKey}
                    />
                  </MotionBox>

                  {/* Shortcuts List - Mobile/Tablet */}
                  {(isMobile || isTablet) && (
                    <MotionBox
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      sx={{ mt: 4 }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          marginBottom: 2,
                        }}
                      >
                        All Shortcuts
                      </Typography>
                      <ShortcutList
                        shortcuts={filteredShortcuts}
                        platform={platform}
                        onSelectShortcut={(shortcut) =>
                          setSelectedKey(shortcut.keys[platform][0])
                        }
                      />
                    </MotionBox>
                  )}
                </Box>

                {/* Details Panel - Desktop */}
                {!isTablet && (
                  <Box
                    sx={{
                      flex: '1 1 calc(33.333% - 16px)',
                      minWidth: '0',
                    }}
                  >
                    <MotionBox
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      sx={{
                        position: 'sticky',
                        top: 20,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          marginBottom: 2,
                        }}
                      >
                        Details
                      </Typography>
                      <ShortcutDetails
                        shortcut={selectedShortcut}
                        platform={platform}
                      />
                    </MotionBox>
                  </Box>
                )}

                {/* Details Panel - Tablet/Mobile */}
                {(isMobile || isTablet) && selectedShortcut && (
                  <Box
                    sx={{
                      flex: '1 1 100%',
                      minWidth: '0',
                    }}
                  >
                    <MotionBox
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          marginBottom: 2,
                        }}
                      >
                        Details
                      </Typography>
                      <ShortcutDetails
                        shortcut={selectedShortcut}
                        platform={platform}
                      />
                    </MotionBox>
                  </Box>
                )}
              </Box>
            </Container>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}
