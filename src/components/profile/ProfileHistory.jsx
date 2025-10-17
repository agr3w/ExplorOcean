import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { MdQuiz, MdMovie, MdPets } from 'react-icons/md';

const iconMap = {
    Quiz: <MdQuiz color="#8d14ffff" />,
    Documentário: <MdMovie color="#00e676" />,
    Fauna: <MdPets color="#2979ff" />,
    FaunaFavorita: <MdPets color="#2979ff" />,
};

export default function ProfileHistory({ history }) { // Recebe o histórico via props
    if (!history || history.length === 0) {
        return (
            <Box sx={{
                mb: 4, p: 3, borderRadius: 3,
                background: 'rgba(2,16,26,0.5)',
                boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
                backdropFilter: 'blur(8px)',
            }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Histórico de Atividades</Typography>
                <Typography sx={{ color: 'rgba(227, 242, 253, 0.7)', mt: 2 }}>
                    Nenhuma atividade registrada ainda.
                </Typography>
            </Box>
        );
    }
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
                    <React.Fragment key={item.id || idx}>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 40, fontSize: 24 }}>
                                {iconMap[item.type] || <MdPets />}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {item.name}
                                    </Typography>
                                }
                                secondary={
                                    item.score
                                        ? `Pontuação: ${item.score}`
                                        : item.type === 'Documentário' && item.watched
                                            ? 'Assistido'
                                            : item.type
                                }
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