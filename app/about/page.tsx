'use client';

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Button,
  AppBar,
  Toolbar,
} from '@mui/material';
import { motion, easeOut } from 'framer-motion';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useStore } from '@/store/useStore';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

export default function AboutPage() {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const setIsDarkMode = useStore((state) => state.setIsDarkMode);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/">
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{ textTransform: 'none', fontSize: '0.875rem' }}
            >
              Back to Home
            </Button>
          </Link>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: '1.125rem',
            }}
          >
            About Macro Map
          </Typography>
          <Button
            onClick={() => setIsDarkMode(!isDarkMode)}
            size="small"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container maxWidth="md" sx={{ py: 8, flex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Title Section */}
          <MotionBox variants={itemVariants} sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 2,
                fontWeight: 700,
              }}
            >
              Macro Map
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
              }}
            >
              A visual keyboard shortcut explorer designed to help you master the tools you use
              every day.
            </Typography>
          </MotionBox>

          {/* What is Macro Map */}
          <MotionCard
            variants={itemVariants}
            sx={{
              mb: 4,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.5)',
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(148, 163, 184, 0.2)'
                    : 'rgba(226, 232, 240, 0.8)'
                }`,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                What is Macro Map?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                Macro Map is an interactive visual keyboard shortcut explorer. Instead of scrolling
                through long lists or memorizing key combinations, you can hover over your keyboard
                to discover which shortcuts are available for each key. It currently supports shortcuts
                for three major applications:
              </Typography>
              <Stack
                sx={{
                  mt: 2,
                  ml: 2,
                }}
                spacing={1}
              >
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <strong>📸 Photoshop</strong> – Master image editing with powerful tools and shortcuts
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <strong>💻 VS Code</strong> – Write code faster with essential development shortcuts
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <strong>✨ Figma</strong> – Design collaboratively with intuitive keyboard shortcuts
                </Typography>
              </Stack>
            </CardContent>
          </MotionCard>

          {/* How to Use */}
          <MotionCard
            variants={itemVariants}
            sx={{
              mb: 4,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.5)',
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(148, 163, 184, 0.2)'
                    : 'rgba(226, 232, 240, 0.8)'
                }`,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                How to Use Macro Map
              </Typography>

              <Stack spacing={2}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 0.5,
                      fontSize: '0.9375rem',
                    }}
                  >
                    1. Choose an Application
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    Start by selecting one of the supported applications (Photoshop, VS Code, or
                    Figma) from the home page. Each app has its own set of shortcuts.
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 0.5,
                      fontSize: '0.9375rem',
                    }}
                  >
                    2. Explore the Keyboard
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    Hover over keys to see what shortcuts are available. Keys with shortcuts are
                    highlighted. Click on a key to see detailed information about all shortcuts
                    bound to that key.
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 0.5,
                      fontSize: '0.9375rem',
                    }}
                  >
                    3. Filter and Search
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    Use the search bar to find shortcuts by name or description. Filter by category
                    (e.g., Editing, Navigation) or toggle between Mac and Windows key bindings.
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 0.5,
                      fontSize: '0.9375rem',
                    }}
                  >
                    4. Copy and Learn
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    Click "Copy Shortcut" in the details panel to copy the key combination to
                    your clipboard. Practice these shortcuts to increase your productivity!
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </MotionCard>

          {/* Understanding the Visualization */}
          <MotionCard
            variants={itemVariants}
            sx={{
              mb: 4,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.5)',
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(148, 163, 184, 0.2)'
                    : 'rgba(226, 232, 240, 0.8)'
                }`,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Understanding the Keyboard Visualization
              </Typography>

              <Stack spacing={2}>
                <Box
                  sx={{
                    p: 1.5,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(99, 102, 241, 0.1)'
                        : 'rgba(99, 102, 241, 0.05)',
                    borderRadius: '0.375rem',
                    border: '1px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Highlighted Keys (Blue)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    These keys have one or more shortcuts available. The number badge shows how
                    many shortcuts are bound to that key.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 1.5,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(148, 163, 184, 0.1)'
                        : 'rgba(226, 232, 240, 0.5)',
                    borderRadius: '0.375rem',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Gray Keys
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    These keys have no shortcuts in the selected filters. They may have shortcuts
                    if you change your category filter or search term.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 1.5,
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: '0.375rem',
                    border: '2px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Selected Key (Glowing)
                  </Typography>
                  <Typography variant="body2">
                    The key you last clicked on shows a glow effect. Its shortcuts appear in the
                    details panel on the right.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </MotionCard>

          {/* Keyboard Notation */}
          <MotionCard
            variants={itemVariants}
            sx={{
              mb: 4,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.5)',
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(148, 163, 184, 0.2)'
                    : 'rgba(226, 232, 240, 0.8)'
                }`,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Key Notation Reference
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  '& > *': {
                    flex: '1 1 calc(50% - 8px)',
                    minWidth: '0',
                  },
                  '@media (max-width: 599.95px)': {
                    '& > *': {
                      flex: '1 1 100%',
                    },
                  },
                }}
              >
                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    <strong>Mac:</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Cmd</strong> – Command key
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Option</strong> – Alt/Option key
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Ctrl</strong> – Control key
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Shift</strong> – Shift key
                  </Typography>
                </Stack>

                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    <strong>Windows:</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Ctrl</strong> – Control key
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Alt</strong> – Alt key
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Shift</strong> – Shift key
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Win</strong> – Windows key
                  </Typography>
                </Stack>
              </Box>
            </CardContent>
          </MotionCard>

          {/* Future Features */}
          <MotionCard
            variants={itemVariants}
            sx={{
              mb: 4,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.5)',
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(148, 163, 184, 0.2)'
                    : 'rgba(226, 232, 240, 0.8)'
                }`,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Future Features
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                Macro Map is constantly evolving. Planned features include:
              </Typography>

              <Stack spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  ✨ Support for more applications (Adobe Creative Suite, JetBrains IDEs, etc.)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  📊 Personal shortcut tracking and learning progress
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  🎮 Interactive games and quizzes to practice shortcuts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  🌐 Community-contributed shortcuts and tips
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  📱 Native mobile apps for on-the-go learning
                </Typography>
              </Stack>
            </CardContent>
          </MotionCard>

          {/* CTA */}
          <MotionBox variants={itemVariants} sx={{ textAlign: 'center' }}>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  Explore Shortcuts Now
                </Button>
              </motion.div>
            </Link>
          </MotionBox>
        </motion.div>
      </Container>
    </Box>
  );
}
