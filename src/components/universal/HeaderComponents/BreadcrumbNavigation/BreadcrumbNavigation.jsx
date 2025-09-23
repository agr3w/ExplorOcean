import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BreadcrumbNavigation({ category, label }) {
  const navigate = useNavigate();

  // Ajuste os caminhos conforme suas rotas
  const categoryPath = category?.toLowerCase() === 'fauna' ? '/fauna-flora?tab=fauna' : '/fauna-flora?tab=flora';

  return (
    <Box sx={{ mb: 2 }}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ color: '#e3f2fd' }}>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer', fontWeight: 500 }}
        >
          Início
        </Link>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate(categoryPath)}
          sx={{ cursor: 'pointer', fontWeight: 500 }}
        >
          {category === 'Fauna' ? 'Fauna' : 'Flora'}
        </Link>
        <Typography color="#36d1e0" fontWeight={700}>
          {label}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}