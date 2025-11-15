import React from 'react';
import { Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './contentCard/ContentCard';

export default function ContentGrid({ items, show3D }) {
  return (
    <motion.div layout style={{ width: '100%' }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        <AnimatePresence>
          {items.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}
            >
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 180, damping: 25 }}
                style={{
                  width: 400,      // largura padrão
                  minHeight: 370,  // altura mínima padrão
                  maxWidth: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Card item={item} threeModel={show3D ? item.threeModel : undefined} />
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </motion.div>
  );
}