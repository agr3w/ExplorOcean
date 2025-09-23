import { Box, Typography, Grid } from '@mui/material';

export default function GallerySection({ secondaryImages }) {
    if (!secondaryImages || secondaryImages.length === 0) return null;
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Galeria de Imagens
            </Typography>
            <Grid container spacing={2}>
                {secondaryImages.map((img, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                width: '100%',
                                aspectRatio: '4/3',
                                maxHeight: 260,
                                overflow: 'hidden',
                                borderRadius: 2,
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#02101a'
                            }}
                        >
                            <Box
                                component="img"
                                src={img}
                                alt={`Galeria ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)'
                                    }
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}