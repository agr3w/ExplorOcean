import { Box, Typography, Stack } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import PetsIcon from '@mui/icons-material/Pets'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import BookIcon from '@mui/icons-material/Book'

export default function HighlightIcons() {
  return (
    <Box sx={{ mt: 8 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 4, sm: 8 }}
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ textAlign: 'center' }}>
          <PublicIcon sx={{ fontSize: 40 }} />
          <Typography sx={{ mt: 1 }}>Navegação Interativa</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <PetsIcon sx={{ fontSize: 40 }} />
          <Typography sx={{ mt: 1 }}>Vida Marinha</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <EmojiEventsIcon sx={{ fontSize: 40 }} />
          <Typography sx={{ mt: 1 }}>Desafios</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <BookIcon sx={{ fontSize: 40 }} />
          <Typography sx={{ mt: 1 }}>Conteúdo Profundo</Typography>
        </Box>
      </Stack>
    </Box>
  )
}