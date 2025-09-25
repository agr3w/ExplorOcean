import { Box, Typography } from '@mui/material';

export default function DescriptionSection({ longDescription }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Detalhes
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
        {longDescription}
      </Typography>
    </Box>
  );
}