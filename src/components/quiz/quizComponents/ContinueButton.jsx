import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function ContinueButton({ onClick }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
      <Button variant="contained" size="large" onClick={onClick} sx={{ width: '100%', mt: 2 }}>
        Continuar
      </Button>
    </motion.div>
  );
}