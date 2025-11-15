import { Box, Typography, Grid } from '@mui/material';
import FactCard from './FactCard';

export default function FastFactsSection({ item }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Fatos Rápidos
      </Typography>
      <Grid container spacing={2}>
        {item.duration && (
          <Grid item xs={6} sm={4} md={2}>
            <FactCard icon="⏳" label="Duração" value={item.duration} />
          </Grid>
        )}
        {item.rating && (
          <Grid item xs={6} sm={4} md={2}>
            <FactCard icon="⭐" label="Avaliação" value={item.rating} />
          </Grid>
        )}
        {item.releaseYear && (
          <Grid item xs={6} sm={4} md={2}>
            <FactCard icon="📅" label="Ano de Lançamento" value={item.releaseYear} />
          </Grid>
        )}
        {item.director && (
          <Grid item xs={6} sm={4} md={2}>
            <FactCard icon="🎬" label="Diretor" value={item.director} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}