// src/pages/ProfilePage.jsx

import React from 'react';
import { Box, Container, Grid, Divider } from '@mui/material';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileSettings from '../components/profile/ProfileSettings';
import ProfilePreferences from '../components/profile/ProfilePreferences';
import ProfileHistory from '../components/profile/ProfileHistory';
import ProfileDangerZone from '../components/profile/ProfileDangerZone';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { motion } from 'framer-motion';

// Variantes para a animação da página
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ProfilePage() {
    // Dados do usuário (virão do backend no futuro)
    const user = { username: "Explorador", email: "explorador@ocean.com", createdAt: new Date() };

    return (
        <Box sx={{ backgroundColor: '#02101a', color: 'white', minHeight: '100vh' }}>
            <Navigator />
            <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    {/* Header ocupa a largura total */}
                    <motion.div variants={itemVariants}>
                        <ProfileHeader user={user} />
                    </motion.div>

                    {/* Layout de duas colunas */}
                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        {/* Coluna Esquerda: Ações principais */}
                        <Grid item xs={12} md={7}>
                            <motion.div variants={itemVariants}>
                                <ProfileSettings />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProfilePreferences />
                            </motion.div>
                        </Grid>

                        {/* Coluna Direita: Informações secundárias */}
                        <Grid item xs={12} md={5}>
                            <motion.div variants={itemVariants}>
                                <ProfileHistory />
                            </motion.div>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 4, borderColor: 'rgba(54, 209, 224, 0.2)' }} />

                    {/* Zona de Risco ocupa a largura total no final */}
                    <motion.div variants={itemVariants}>
                        <ProfileDangerZone />
                    </motion.div>
                </motion.div>
            </Container>
            <Footer depth={0} />
        </Box>
    );
}