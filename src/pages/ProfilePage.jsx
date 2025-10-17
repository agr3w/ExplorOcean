import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Divider, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { getUserProfile } from '../services/userService'; // Importe nosso serviço
import { useAuth } from '../context/AuthContext'; // Para o logout em caso de erro
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileSettings from '../components/profile/ProfileSettings';
import ProfilePreferences from '../components/profile/ProfilePreferences';
import ProfileHistory from '../components/profile/ProfileHistory';
import ProfileDangerZone from '../components/profile/ProfileDangerZone';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';

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
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { logout } = useAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await getUserProfile();
                setUser(data);
            } catch (err) {
                setError('Não foi possível carregar os dados do perfil. Tente fazer login novamente.');
                setTimeout(() => logout(), 3000);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [logout]);

    if (loading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#02101a'
            }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#02101a'
            }}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: '#02101a', color: 'white', minHeight: '100vh' }}>
            <Navigator />
            <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    <motion.div variants={itemVariants}>
                        <ProfileHeader user={user} />
                    </motion.div>
                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={7}>
                            <motion.div variants={itemVariants}>
                                <ProfileSettings user={user} setUser={setUser} />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProfilePreferences user={user} setUser={setUser} />
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <motion.div variants={itemVariants}>
                                <ProfileHistory history={user.history} />
                            </motion.div>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 4, borderColor: 'rgba(54, 209, 224, 0.2)' }} />
                    <motion.div variants={itemVariants}>
                        <ProfileDangerZone onAccountDelete={logout} />
                    </motion.div>
                </motion.div>
            </Container>
            <Footer depth={0} />
        </Box>
    );
}