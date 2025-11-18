'use client';

import Link from 'next/link';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { apps } from '@/data/apps';
import { useStore } from '@/store/useStore';

const MotionCard = motion.create(Card);

export function AppSelector() {
  const setSelectedApp = useStore((state) => state.setSelectedApp);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          '& > *': {
            flex: '1 1 calc(33.333% - 20px)',
            minWidth: '0',
          },
          '@media (max-width: 899.95px)': {
            '& > *': {
              flex: '1 1 calc(50% - 12px)',
            },
          },
          '@media (max-width: 599.95px)': {
            '& > *': {
              flex: '1 1 100%',
            },
          },
        }}
      >
        {apps.map((app) => (
          <Box key={app.id}>
            <Link
              href={`/app/${app.slug}`}
              onClick={() => setSelectedApp(app.slug as any)}
              className="no-underline"
            >
              <MotionCard
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(99, 102, 241, 0.1)'
                        : 'rgba(99, 102, 241, 0.05)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 2,
                    pt: 4,
                    pb: 4,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: '3rem',
                      mb: 1,
                    }}
                  >
                    {app.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                    }}
                  >
                    {app.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.5,
                    }}
                  >
                    {app.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Link>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
}
