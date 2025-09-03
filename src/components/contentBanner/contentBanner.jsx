import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function ContentBanner({ title, description, icon, scrolled }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{
        opacity: 1,
        y: 0,
        minHeight: scrolled ? 90 : 160,
        paddingTop: scrolled ? 16 : 32,
        paddingBottom: scrolled ? 16 : 32,
        iconSize: scrolled ? 48 : 72,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ width: '100%' }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: scrolled ? 90 : 160,
          background: 'linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, md: 6 },
          py: scrolled ? 2 : 4,
          borderRadius: 0,
          mb: 6,
          boxShadow: '0 2px 12px rgba(30,60,120,0.10)',
          gap: 3,
        }}
      >
        {icon && (
          <Box
            sx={{
              fontSize: scrolled ? 48 : 72,
              color: '#fff',
              mr: 3,
              transition: 'font-size 0.4s cubic-bezier(.77,0,.18,1)',
            }}
          >
            {icon}
          </Box>
        )}
        <Box>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#e3f2fd', mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}