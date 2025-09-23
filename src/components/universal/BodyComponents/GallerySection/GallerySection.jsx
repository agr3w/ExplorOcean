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
                            component="img"
                            src={img}
                            sx={{ width: '100%', borderRadius: 2, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}