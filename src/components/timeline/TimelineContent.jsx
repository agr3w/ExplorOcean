import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

// 1. Importe os ícones
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import PublicIcon from '@mui/icons-material/Public';

import LifeInPeriod from './LifeInPeriod';

// Variantes da animação
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};
const MotionTypography = motion(Typography);

// 2. Componente para o Card de Status
const StatusCard = ({ stats }) => (
  <Paper
    elevation={4}
    sx={{
      p: 2,
      mt: 3,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(5px)',
      borderRadius: 2,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'white'
    }}
  >
    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Status do Planeta</Typography>
    <Box>
      <StatItem icon={<AirIcon />} label="Nível de O₂:" value={stats.oxygenLevel} />
      <StatItem icon={<ThermostatIcon />} label="Temp. Média:" value={stats.avgTemp} />
      <StatItem icon={<PublicIcon />} label="Vida Dominante:" value={stats.dominantLife} />
    </Box>
  </Paper>
);

// Componente para cada linha do card
const StatItem = ({ icon, label, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    {React.cloneElement(icon, { sx: { mr: 1.5, color: 'primary.light' } })}
    <Typography variant="body2" component="span" sx={{ fontWeight: 'bold', mr: 1 }}>
      {label}
    </Typography>
    <Typography variant="body2" component="span" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
      {value}
    </Typography>
  </Box>
);

const TimelineContent = ({ era, sx }) => {
  return (
    <motion.div
      id="timeline-content"
      key={era.id}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        flexGrow: 1,
        padding: '16px',
        maxWidth: '40%',
        minWidth: '350px',
        ...sx,
      }}
    >
      <MotionTypography variants={itemVariants} variant="h4" component="h2" gutterBottom>
        {era.label}
      </MotionTypography>

      <MotionTypography variants={itemVariants} variant="h6" color="text.secondary" gutterBottom>
        {era.period}
      </MotionTypography>

      <MotionTypography variants={itemVariants} variant="body1">
        {era.description}
      </MotionTypography>

      {/* 3. Renderize o Card de forma condicional e animada */}
      {era.planetStats && (
        <motion.div variants={itemVariants}>
          <StatusCard stats={era.planetStats} />
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <LifeInPeriod periodId={era.id} />
      </motion.div>
    </motion.div>
  );
};

export default TimelineContent;