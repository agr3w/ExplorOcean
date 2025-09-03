import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const WAVE_HEIGHT = 200;

const waveSvg = (
  <svg
    viewBox={`0 0 1440 ${WAVE_HEIGHT}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio='none'
    align="bottom"

    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: `${WAVE_HEIGHT}px`,
      pointerEvents: 'none',
      zIndex: 1,
    }}
  >
    <path
      d={`M0,${WAVE_HEIGHT / 2} C360,${WAVE_HEIGHT} 1080,0 1440,${WAVE_HEIGHT / 2} L1440,${WAVE_HEIGHT} L0,${WAVE_HEIGHT} Z`}
      fill="rgba(255,255,255,0.13)"
    />
  </svg>
);

export default function ContentBanner({ title, description, icon, scrolled }) {
  const minHeight = scrolled ? 90 : 160;
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{
        opacity: 1,
        y: 0,
        minHeight,
        paddingTop: scrolled ? 16 : 32,
        paddingBottom: scrolled ? 16 : 32,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ width: '100%', position: 'relative', overflow: 'hidden', minHeight: minHeight }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: minHeight,
          background: 'linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, md: 6 },
          py: scrolled ? 2 : 4,
          borderRadius: 0,
          mb: 6,
          boxShadow: '0 2px 12px rgba(30,60,120,0.10)',
          gap: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {icon && (
          <Box
            sx={{
              fontSize: scrolled ? 48 : 72,
              color: '#fff',
              mr: 3,
              transition: 'font-size 0.4s cubic-bezier(.77,0,.18,1)',
              zIndex: 2,
            }}
          >
            {icon}
          </Box>
        )}
        <Box sx={{ zIndex: 2 }}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#e3f2fd', mt: 2 }}>
            {description}
          </Typography>
        </Box>
        {/* Elemento visual oceânico */}

        {waveSvg}
      </Box>
    </motion.div>
  );
}