// src/components/profile/DetailsModal.jsx

import React from 'react';
import { Modal, Box, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { MdClose, MdQuiz, MdMovie, MdPets, MdEco, MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Mapeamento de ícones para ser usado no modal
const iconMap = {
    Quiz: <MdQuiz color="#8d14ffff" />,
    Documentaries: <MdMovie color="#00e676" />,
    Fauna: <MdPets color="#2979ff" />,
    Flora: <MdEco color="#ffd600" />,
    // Adicionamos um ícone para favoritos também
    Favorite: <MdFavorite color="#f5576c" />,
};

export default function DetailsModal({ open, onClose, title, items }) {
    return (
        <Modal open={open} onClose={onClose} sx={{ backdropFilter: 'blur(5px)' }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90vw', sm: '70vw', md: 600 },
                    maxHeight: '80vh',
                    bgcolor: 'rgba(2, 16, 26, 0.8)',
                    backdropFilter: 'blur(15px)',
                    border: '1.5px solid rgba(54, 209, 224, 0.3)',
                    borderRadius: 4, boxShadow: 24, p: 3,
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>{title}</Typography>
                    <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}>
                        <MdClose />
                    </IconButton>
                    <Box sx={{ overflowY: 'auto', maxHeight: 'calc(80vh - 100px)' }}>
                        <List>
                            {items.map((item, idx) => {
                                // Determina o link correto para cada item
                                const linkTo = `/${item.contentType || item.type}/${item.contentId}`;
                                return (
                                    <React.Fragment key={item.id}>
                                        <ListItem
                                            button
                                            component={Link}
                                            to={linkTo}
                                            onClick={onClose} // Fecha o modal ao clicar
                                        >
                                            <ListItemIcon sx={{ minWidth: 40, fontSize: 24 }}>
                                                {iconMap[item.contentType || item.type]}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography sx={{ color: 'white', fontWeight: 'bold' }}>{item.name || item.label}</Typography>}
                                                secondary={item.score ? `Pontuação: ${item.score}` : new Date(item.completedAt || item.createdAt).toLocaleString()}
                                                secondaryTypographyProps={{ color: 'rgba(227, 242, 253, 0.7)' }}
                                            />
                                        </ListItem>
                                        {idx < items.length - 1 && <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />}
                                    </React.Fragment>
                                );
                            })}
                        </List>
                    </Box>
                </Box>
            </motion.div>
        </Modal>
    );
}