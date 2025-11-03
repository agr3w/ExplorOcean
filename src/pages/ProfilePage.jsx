import React, { useEffect } from 'react';
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
import { iconMap, normalizeType } from '../utils/contentIcons';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ProfilePage() {
    const { user, logout, refetchUser } = useAuth();

    useEffect(() => {
        refetchUser();
    }, [refetchUser]);

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
                    <Grid container columns={12} spacing={4} sx={{ mt: 2 }}>
                        <Grid size={7} sx={{ width: { xs: '100%', md: '41.666%' } }}>
                            <motion.div variants={itemVariants}>
                                <ProfileSettings user={user} setUser={() => { }} />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProfilePreferences user={user} setUser={() => { }} />
                            </motion.div>
                        </Grid>
                        <Grid size={5} sx={{ width: { xs: '100%', md: '41.666%' } }}>
                            <motion.div variants={itemVariants}>
                                <ProfileHistory history={user.history} iconMap={iconMap} normalizeType={normalizeType} />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProfileFavorites favorites={enrichedFavorites} iconMap={iconMap} normalizeType={normalizeType} />                            </motion.div>
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