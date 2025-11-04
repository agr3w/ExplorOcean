import React from 'react';
import { Box, Typography, CardContent } from '@mui/material';

const CardFooter = ({ duration }) => {
  return (
    <CardContent sx={{ pt: 0, pb: 2 }}>
      {duration && (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography variant="caption" color="text.secondary">
            {duration}
          </Typography>
        </Box>
      )}
    </CardContent>
  );
};

export default CardFooter;