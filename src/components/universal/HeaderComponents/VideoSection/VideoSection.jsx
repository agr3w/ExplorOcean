import { Box } from '@mui/material';

export default function VideoSection({ videoUrl, title }) {
  if (!videoUrl) return null;
  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.1)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0, 10, 20, 0.7)',
        '&:hover': {
          boxShadow: '0 6px 25px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.2)',
        },
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <iframe
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
}