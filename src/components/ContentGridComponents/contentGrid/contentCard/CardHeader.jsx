import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardMediaWrapper = styled(Box)(({ imageUrl }) => ({
  height: 200,
  width: '100%',
  background: `url(${imageUrl}) center/cover`,
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '8px',
  color: 'white',
}));

const CardHeader = ({ imageUrl, rating, tags }) => {
  return (
    <CardMediaWrapper imageUrl={imageUrl}>
      {rating && (
        <Box sx={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.5)', borderRadius: '4px', p: '4px 8px' }}>
          <Typography variant="caption" sx={{ color: 'white' }}>
            {rating}⭐
          </Typography>
        </Box>
      )}
      {tags && (
        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: '4px' }}>
          {tags.map((tag, tagIndex) => (
            <Box key={tagIndex} sx={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px', p: '4px 8px' }}>
              <Typography variant="caption" sx={{ color: 'white' }}>
                {tag}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </CardMediaWrapper>
  );
};

export default CardHeader;