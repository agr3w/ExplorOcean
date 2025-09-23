import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DetailPageHeader from './DetailPageHeader';
import DetailPageBody from './DetailPageBody';
import RelatedContentSection from './RelatedContentSection';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(5px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  color: 'white',
}));

export default function DetailPage({ item, show3D, setShow3D }) {
  if (!item) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="white">
          Item não encontrado.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, marginTop: 6 }}>
      <StyledPaper>
        <DetailPageHeader item={{ ...item, threeModel: show3D ? item.threeModel : undefined }} show3D={show3D} setShow3D={setShow3D} />
        <DetailPageBody item={item} />
        <RelatedContentSection relatedContent={item.relatedContent} />
      </StyledPaper>
    </Box>
  );
}