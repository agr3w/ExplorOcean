import { Typography } from '@mui/material';

export default function HeaderTitle({ label, category, duration, isQuiz, difficulty, numberOfQuestions }) {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {label}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {category}
        {duration && ` | Duração: ${duration}`}
        {isQuiz && difficulty && ` | Dificuldade: ${difficulty}`}
        {isQuiz && numberOfQuestions && ` | Perguntas: ${numberOfQuestions}`}
      </Typography>
    </>
  );
}