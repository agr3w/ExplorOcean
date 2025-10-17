// src/components/profile/ProfileHeader.jsx

import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

export default function ProfileHeader({ user }) {
    return (
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center', gap: 3,
            background: 'linear-gradient(135deg, rgba(2,16,26,0.7) 60%, rgba(54,209,224,0.2) 100%)',
            borderRadius: 4, p: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(12px)',
            border: '1.5px solid rgba(54, 209, 224, 0.3)',
        }}>
            <Avatar src={user?.avatar || "/default-avatar.png"} sx={{ width: 100, height: 100, border: '3px solid #36d1e0' }} />
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>{user?.username || "Nome do Usuário"}</Typography>
                <Typography variant="body1" sx={{ color: '#e3f2fd', mt: 0.5 }}>{user?.email || "email@exemplo.com"}</Typography>
                <Typography variant="caption" sx={{ color: '#b2ebf2', display: 'block', mt: 1 }}>
                    {user?.createdAt ? `Membro desde ${new Date(user.createdAt).toLocaleDateString()}` : ""}
                </Typography>
            </Box>
        </Box>
    );
}