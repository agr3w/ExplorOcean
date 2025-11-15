import { Box, Button } from '@mui/material';

export default function QuizButton({ isQuiz, onClick }) {
  if (!isQuiz) return null;
  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Button variant="contained" color="primary" size="large" onClick={onClick}>
        Iniciar Quiz
      </Button>
    </Box>
  );
}