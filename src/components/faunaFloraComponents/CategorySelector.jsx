// src/components/faunaFloraComponents/CategorySelector.jsx

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FaFish, FaLeaf } from 'react-icons/fa';

export default function CategorySelector({ selectedCategory, onSelectCategory }) {
    const buttonSx = (category) => {
        const isSelected = selectedCategory === category;
        return {
            px: 3, py: 1,
            color: isSelected ? '#fff' : '#e3f2fd',
            fontWeight: 600,
            borderRadius: '24px',
            // Estilo Glassmorphism
            backgroundColor: isSelected ? 'rgba(54, 209, 224, 0.3)' : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            border: `1.5px solid ${isSelected ? 'rgba(54, 209, 224, 0.8)' : 'rgba(255, 255, 255, 0.2)'}`,
            boxShadow: isSelected ? '0 0 15px rgba(54, 209, 224, 0.5)' : 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: 'rgba(54, 209, 224, 0.2)',
                borderColor: 'rgba(54, 209, 224, 0.7)',
            },
        };
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 2, mb: 4 }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                Explore por Categoria
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button onClick={() => onSelectCategory('fauna')} startIcon={<FaFish />} sx={buttonSx('fauna')}>
                    Fauna
                </Button>
                <Button onClick={() => onSelectCategory('flora')} startIcon={<FaLeaf />} sx={buttonSx('flora')}>
                    Flora
                </Button>
            </Box>
        </Box>
    );
}