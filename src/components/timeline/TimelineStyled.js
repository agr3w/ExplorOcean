import { styled } from '@mui/material/styles';
import { Box, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';

export const MotionTimelineContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px 16px 16px 16px',
  gap: theme.spacing(2),
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  backgroundColor: 'rgba(25, 35, 45, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px 24px 0 0',
  width: 'calc(100% - 64px)',
  margin: '0 auto',
}));

export const TimelineToggleHandle = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '-20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(54, 209, 224, 0.2)',
  backdropFilter: 'blur(5px)',
  color: theme.palette.primary.light,
  border: '1px solid rgba(54, 209, 224, 0.5)',
  boxShadow: '0px -5px 25px rgba(54, 209, 224, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(54, 209, 224, 0.4)',
    transform: 'translateX(-50%) scale(1.1)',
    boxShadow: '0px -5px 30px rgba(54, 209, 224, 0.5)',
  },
}));

export const NavButton = styled(Button)(({ theme, isSelected }) => ({
  whiteSpace: 'nowrap',
  backgroundColor: isSelected ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

export const ScrollContainer = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  padding: '24px 0',
  position: 'relative',
  width: '100%',
  '&::-webkit-scrollbar': { display: 'none' },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
});

export const TimelineTrack = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  height: '2px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  transform: 'translateY(-50%)',
});

export const PeriodContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  flexShrink: 0,
  transition: 'min-width 0.4s ease-in-out',
});

export const TimelineNode = styled(Box)(({ theme, isSelected }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0 16px',
  '&::before': {
    content: '""',
    display: 'block',
    width: isSelected ? '20px' : '12px',
    height: isSelected ? '20px' : '12px',
    borderRadius: '50%',
    backgroundColor: isSelected ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.5)',
    border: `2px solid ${isSelected ? theme.palette.primary.dark : 'rgba(255, 255, 255, 0.7)'}`,
    transition: 'all 0.3s ease',
    boxShadow: isSelected ? `0 0 15px ${theme.palette.primary.main}` : 'none',
    zIndex: 1,
  },
  '&:hover::before': {
    transform: 'scale(1.2)',
  }
}));

export const EventMarker = styled(Box)({
  position: 'absolute',
  bottom: '25px',
  fontSize: '24px',
  zIndex: 2,
  cursor: 'help',
  transition: 'transform 0.2s ease-out',
  '&:hover': {
    transform: 'scale(1.4)',
  }
});