import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(5px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  color: 'white',
}));

const RelatedCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  textAlign: 'center',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default function DetailPage({ item }) {
  if (!item) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="white">
          Item não encontrado.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <StyledPaper>
        {/* Título Principal */}
        <Typography variant="h3" component="h1" gutterBottom>
          {item.label}
        </Typography>

        {/* Categoria e Duração */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {item.category}
          {item.duration && ` | Duração: ${item.duration}`}
        </Typography>

        {/* Vídeo do YouTube */}
        {item.videoUrl && (
          <Box sx={{ mb: 4, position: 'relative', paddingTop: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src={item.videoUrl}
              title={item.label}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </Box>
        )}

        {/* Descrição Detalhada */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          Detalhes
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {item.longDescription}
        </Typography>

        {/* Imagens Secundárias */}
        {item.secondaryImages && item.secondaryImages.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Galeria de Imagens
            </Typography>
            <Grid container spacing={2}>
              {item.secondaryImages.map((img, index) => (
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
        )}

        {/* Localização */}
        {item.location && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Onde se Passa
            </Typography>
            <Typography variant="h6">{item.location.name}</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>{item.location.description}</Typography>
          </Box>
        )}

        {/* Interligação de Conteúdo */}
        {item.relatedContent && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Conteúdo Relacionado
            </Typography>
            <Grid container spacing={2}>
              {item.relatedContent.geologicalPeriod && (
                <Grid item xs={12} sm={6} md={4}>
                  <RelatedCard>
                    <CardContent>
                      <Typography variant="h6">Período</Typography>
                      <Link to={`/timeline/${item.relatedContent.geologicalPeriod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="text" sx={{ color: 'white' }}>
                          {item.relatedContent.geologicalPeriod.label}
                        </Button>
                      </Link>
                    </CardContent>
                  </RelatedCard>
                </Grid>
              )}
              {item.relatedContent.fauna && item.relatedContent.fauna.map((animal, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <RelatedCard>
                    <CardContent>
                      <Typography variant="h6">Fauna Local</Typography>
                      <Link to={`/fauna/${animal.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="text" sx={{ color: 'white' }}>
                          {animal.label}
                        </Button>
                      </Link>
                    </CardContent>
                  </RelatedCard>
                </Grid>
              ))}
              {item.relatedContent.flora && item.relatedContent.flora.map((plant, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <RelatedCard>
                    <CardContent>
                      <Typography variant="h6">Flora Local</Typography>
                      <Link to={`/flora/${plant.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="text" sx={{ color: 'white' }}>
                          {plant.label}
                        </Button>
                      </Link>
                    </CardContent>
                  </RelatedCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </StyledPaper>
    </Box>
  );
}