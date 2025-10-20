import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { MdQuiz, MdMovie, MdPets, MdEco } from 'react-icons/md'; // Adicionei o MdEco

const iconMap = {
    Quiz: <MdQuiz color="#8d14ffff" />,
    Documentário: <MdMovie color="#00e676" />,
    Fauna: <MdPets color="#2979ff" />,
    Flora: <MdEco color="#ffd600" />, // Adicionado
};

const MAX_ITEMS_TO_SHOW = 3;

export default function ProfileHistory({ history }) {
    const containerSx = {
        mb: 4, p: 3, borderRadius: 2,
        background: 'rgba(2,16,26,0.5)',
        boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
        backdropFilter: 'blur(8px)',
        minHeight: '200px', // Altura mínima para consistência
    };
    
    if (!history || history.length === 0) {
        return (
            <Box sx={{ ...containerSx, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Histórico Recente</Typography>
                <Typography sx={{ color: 'rgba(227, 242, 253, 0.7)', mt: 2 }}>
                    Nenhuma atividade registrada ainda. Explore o site para começar!
                </Typography>
            </Box>
        );
    }

    const recentHistory = history.slice(0, MAX_ITEMS_TO_SHOW);

    return (
        <Box sx={containerSx}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Histórico Recente</Typography>
            <List dense>
                {recentHistory.map((item, idx) => (
                    <React.Fragment key={item.id}>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 40, fontSize: 24 }}>
                                {iconMap[item.type] || <MdPets />}
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="body1" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>}
                                secondary={item.score ? `Pontuação: ${item.score}` : new Date(item.completedAt).toLocaleDateString()}
                                secondaryTypographyProps={{ color: 'rgba(227, 242, 253, 0.7)' }}
                            />
                        </ListItem>
                        {idx < recentHistory.length - 1 && <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />}
                    </React.Fragment>
                ))}
            </List>
            {history.length > MAX_ITEMS_TO_SHOW && (
                <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'rgba(255,255,255,0.5)' }}>
                    Exibindo as {MAX_ITEMS_TO_SHOW} atividades mais recentes.
                </Typography>
            )}
        </Box>
    );
}