import React from 'react';
import { Box, Container, Grid, Divider, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { contentMap } from '../content/contentData';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileSettings from '../components/profile/ProfileSettings';
import ProfilePreferences from '../components/profile/ProfilePreferences';
import ProfileHistory from '../components/profile/ProfileHistory';
import ProfileDangerZone from '../components/profile/ProfileDangerZone';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import ProfileFavorites from '../components/profile/ProfileFavorites';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ProfilePage() {
    // 2. PEGUE OS DADOS DIRETAMENTE DO CONTEXTO
    const { user, logout } = useAuth();

    // 3. Mostra um loading enquanto o usuário ainda não foi carregado pelo contexto
    if (!user) {
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

    // Lógica para "hidratar" os favoritos
    const enrichedFavorites = React.useMemo(() => {
        if (!user?.favorites) return [];
        return user.favorites.map(fav => {
            const fullContent = contentMap.get(fav.contentId);
            if (fullContent) {
                return { ...fullContent, ...fav };
            }
            return null;
        }).filter(Boolean);
    }, [user]);

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
                                <ProfileSettings user={user} setUser={() => {}} />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProfilePreferences user={user} setUser={() => {}} />
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <motion.div variants={itemVariants}>
                                <ProfileHistory history={user.history} />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProfileFavorites favorites={enrichedFavorites} />
                            </motion.div>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 4, borderColor: 'rgba(54, 209, 224, 0.2)' }} />
                    <motion.div variants={itemVariants}>
                        <ProfileDangerZone logout={logout} />
                    </motion.div>
                </motion.div>
            </Container>
            <Footer depth={0} />
        </Box>
    );
}