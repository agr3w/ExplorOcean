import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { MdQuiz, MdMovie, MdPets } from 'react-icons/md';

export default function ProfileHistory() {
    const history = [
        { type: "Quiz", name: "Quiz: Gigantes do Oceano", score: "100%", icon: <MdQuiz color="#8d14ffff" /> },
        { type: "Documentário", name: "Professor Polvo", icon: <MdMovie color="#00e676" /> },
        { type: "Fauna Favorita", name: "Baleia Jubarte", icon: <MdPets color="#2979ff" /> },
    ];

    return (
        <Box sx={{
            mb: 4, p: 3, borderRadius: 3,
            background: 'rgba(2,16,26,0.5)',
            boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
            backdropFilter: 'blur(8px)',
        }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Histórico de Atividades</Typography>
            <List dense>
                {history.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 40, fontSize: 24 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="body1" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>}
                                secondary={item.score ? `Pontuação: ${item.score}` : item.type}
                                secondaryTypographyProps={{ color: 'rgba(227, 242, 253, 0.7)' }}
                            />
                        </ListItem>
                        {idx < history.length - 1 && <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
}