import { Box, Typography } from '@mui/material';

export default function ContentBanner({ title, description, icon }) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 160,
        background: 'linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 4 },
        borderRadius: 4,
        mb: 6,
        boxShadow: '0 2px 12px rgba(30,60,120,0.10)',
        gap: 3,
      }}
    >
      {icon && (
        <Box sx={{ fontSize: { xs: 48, md: 72 }, color: '#fff', mr: 3 }}>
          {icon}
        </Box>
      )}
      <Box>
        <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: '#e3f2fd', mt: 2 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}