import { Box } from '@mui/material';

export default function VideoSection({ videoUrl, title, maxWidth = 900 }) {
  if (!videoUrl) return null;
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { xs: '96vw', md: maxWidth }, // limita no desktop e ocupa quase toda a tela no mobile
        margin: '0 auto',
        aspectRatio: '16/9', // mantém proporção 16:9 de forma responsiva
        height: 'auto',
        overflow: 'hidden',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.1)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(5px)',
        transition: 'transform 0.18s ease',
        '&:hover': { transform: 'translateY(-4px)' },
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