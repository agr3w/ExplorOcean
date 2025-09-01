import React from 'react';
import { Box, Typography, CardContent } from '@mui/material';

const CardBody = ({ label, icon, category, shortDescription }) => {
  return (
    <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="h5" component="div">
          {label}
        </Typography>
        {icon && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {icon}
          </Typography>
        )}
      </Box>
      {category && (
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          {category}
        </Typography>
      )}
      <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
        {shortDescription}
      </Typography>
    </CardContent>
  );
};

export default CardBody;