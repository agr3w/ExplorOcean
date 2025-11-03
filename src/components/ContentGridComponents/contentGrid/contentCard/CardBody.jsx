import React from 'react';
import { Box, Typography, CardContent, Chip } from '@mui/material';

const CardBody = ({ label, icon, category, shortDescription, longDescription, tags }) => {
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
      {/* Tags/Categorias realocadas para o body */}
      {tags && (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
          {tags.map((tag, tagIndex) => (
            <Chip
              key={tagIndex}
              label={tag}
              size="small"
              sx={{
                bgcolor: 'rgba(54,209,224,0.12)',
                color: '#36d1e0',
                fontWeight: 'bold',
                borderRadius: 1,
                fontSize: '0.75rem',
              }}
            />
          ))}
        </Box>
      )}
      <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
        {shortDescription}
      </Typography>
    </CardContent>
  );
};

export default CardBody;