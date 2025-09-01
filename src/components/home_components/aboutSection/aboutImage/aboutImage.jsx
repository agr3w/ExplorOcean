import react from 'react';
import { Box } from '@mui/material';

export default function AboutImage() {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 220,
            }}
        >
            <Box
                sx={{
                    width: 260,
                    height: 180,
                    background: '#36d1e0',
                    borderRadius: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: 32,
                    fontWeight: 500,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
            >
                IMG suave
            </Box>
        </Box>
    );
}