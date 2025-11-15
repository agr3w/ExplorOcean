import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getSectionFromItem } from '../../../../utils/getSectionFromItem';

const sectionMap = {
  fauna: {
    path: '/fauna-flora?tab=fauna',
    label: 'Fauna'
  },
  flora: {
    path: '/fauna-flora?tab=flora',
    label: 'Flora'
  },
  documentaries: {
    path: '/documentaries',
    label: 'Documentários'
  },
  quizzes: {
    path: '/quizzes',
    label: 'Quizzes'
  }
};

export default function BreadcrumbNavigation({ section, label, item }) {
  const navigate = useNavigate();
  // Prioridade: item > section
  const sectionKey = getSectionFromItem(item || section);
  const sectionInfo = sectionMap[sectionKey];

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
        {sectionInfo && (
          <Link
            underline="hover"
            color="inherit"
            onClick={() => navigate(sectionInfo.path)}
            sx={{ cursor: 'pointer', fontWeight: 500 }}
          >
            {sectionInfo.label}
          </Link>
        )}
        <Typography color="#36d1e0" fontWeight={700}>
          {label}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}