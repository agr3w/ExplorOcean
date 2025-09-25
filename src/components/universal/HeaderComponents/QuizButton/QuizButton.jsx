import { Box, Button } from '@mui/material';

export default function QuizButton({ isQuiz }) {
  if (!isQuiz) return null;
  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Button variant="contained" color="primary" size="large">
        Iniciar Quiz
      </Button>
    </Box>
  );
}