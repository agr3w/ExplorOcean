import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const RelatedCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  textAlign: 'center',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default function RelatedContentSection({ relatedContent }) {
  if (!relatedContent || Object.keys(relatedContent).length === 0) {
    return null;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Conteúdo Relacionado
      </Typography>
      <Grid container spacing={2}>
        {relatedContent.geologicalPeriod && (
          <Grid item xs={12} sm={6} md={4}>
            <RelatedCard>
              <CardContent>
                <Typography variant="h6">Período</Typography>
                <Link to={"/timeline "} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button variant="text" sx={{ color: 'white' }}>
                    {relatedContent.geologicalPeriod.label}
                  </Button>
                </Link>
              </CardContent>
            </RelatedCard>
          </Grid>
        )}
        {relatedContent.fauna && relatedContent.fauna.map((animal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RelatedCard>
              <CardContent>
                <Typography variant="h6">Fauna Local</Typography>
                <Link to={`/Fauna/${animal.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button variant="text" sx={{ color: 'white' }}>
                    {animal.label}
                  </Button>
                </Link>
              </CardContent>
            </RelatedCard>
          </Grid>
        ))}
        {relatedContent.flora && relatedContent.flora.map((plant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RelatedCard>
              <CardContent>
                <Typography variant="h6">Flora Local</Typography>
                <Link to={`/Flora/${plant.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button variant="text" sx={{ color: 'white' }}>
                    {plant.label}
                  </Button>
                </Link>
              </CardContent>
            </RelatedCard>
          </Grid>
        ))}
        {relatedContent.documentaries && relatedContent.documentaries.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RelatedCard>
              <CardContent>
                <Typography variant="h6">Documentário</Typography>
                <Link to={`/documentaries/${doc.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button variant="text" sx={{ color: 'white' }}>
                    {doc.label}
                  </Button>
                </Link>
              </CardContent>
            </RelatedCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}