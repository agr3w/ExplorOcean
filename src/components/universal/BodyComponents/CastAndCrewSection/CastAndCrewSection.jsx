import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const MemberCard = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
}));

export default function CastAndCrewSection({ castAndCrew }) {
  if (!castAndCrew || castAndCrew.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Participantes
      </Typography>
      <Grid component={motion.div} container spacing={2} variants={containerVariants} initial="hidden" animate="visible">
        {castAndCrew.map((member, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <MemberCard variants={itemVariants}>
              <Avatar src={member.photo} alt={member.name} sx={{ width: 80, height: 80, mb: 1 }} />
              <Typography variant="body1" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {member.role}
              </Typography>
            </MemberCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}