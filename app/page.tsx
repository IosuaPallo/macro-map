'use client';

import { Container, Typography, Button, Box, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AppSelector } from '@/components/AppSelector';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);

export default function Home() {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Hero Section */}
        <MotionBox
          variants={itemVariants}
          sx={{
            textAlign: 'center',
            marginBottom: 10,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 2,
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            }}
          >
            Macro Map
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: 'text.secondary',
              marginBottom: 3,
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Visual keyboard shortcut explorer for your favorite tools
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              marginBottom: 4,
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: 1.8,
              fontSize: '1.0625rem',
            }}
          >
            Master keyboard shortcuts with an interactive visual keyboard. Explore shortcuts for
            Photoshop, VS Code, Figma and more with intuitive filtering and searching.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ marginBottom: 2, width: '100%' }}
          >
            <Link href="#apps" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '0.5rem',
                  }}
                >
                  Explore Shortcuts
                </Button>
              </motion.div>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '0.5rem',
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </Stack>
        </MotionBox>

        {/* Features Preview */}
        <MotionBox
          variants={itemVariants}
          sx={{
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
            borderRadius: '1rem',
            padding: 4,
            marginBottom: 8,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              marginBottom: 3,
              textAlign: 'center',
            }}
          >
            Features
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="space-around"
          >
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  marginBottom: 1,
                }}
              >
                ⌨️
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
                Visual Keyboard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Interactive keyboard layout showing all available shortcuts at a glance
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  marginBottom: 1,
                }}
              >
                🔍
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
                Smart Search
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Search by shortcut name, keys, or description in real-time
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  marginBottom: 1,
                }}
              >
                🏷️
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
                Filter by Category
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Organize shortcuts into categories like Editing, Navigation, and more
              </Typography>
            </Box>
          </Stack>
        </MotionBox>

        {/* Apps Section */}
        <MotionBox
          variants={itemVariants}
          id="apps"
          sx={{
            marginTop: 8,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              marginBottom: 4,
              textAlign: 'center',
            }}
          >
            Supported Applications
          </Typography>

          <AppSelector />
        </MotionBox>
      </motion.div>
    </Container>
  );
}
