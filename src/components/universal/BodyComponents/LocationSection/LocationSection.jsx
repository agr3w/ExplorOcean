import { Box, Typography } from '@mui/material';

export default function LocationSection({ location }) {
    if (!location) return null;
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Onde se Passa
            </Typography>
            <Typography variant="h6">{location.name}</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>{location.description}</Typography>
        </Box>
    );
}