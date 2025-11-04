import React from 'react';
import { motion } from 'framer-motion';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TimelineToggleHandle } from '../TimelineStyled';

export default function ToggleHandle({ isVisible, toggleVisibility }) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 0, left: '50%', zIndex: 1 }}
    >
      <TimelineToggleHandle onClick={toggleVisibility}>
        {isVisible ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </TimelineToggleHandle>
    </motion.div>
  );
}