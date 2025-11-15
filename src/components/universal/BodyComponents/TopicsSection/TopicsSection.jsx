import { Box, Typography } from '@mui/material';

export default function TopicsSection({ details }) {
  if (!details || details.length === 0) return null;
  return (
    <Box sx={{ mt: 4 }}>
      {details.map((topic, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ color: "#36d1e0" }}>{topic.title}</Typography>
          <Typography variant="body1">{topic.text}</Typography>
        </Box>
      ))}
    </Box>
  );
}