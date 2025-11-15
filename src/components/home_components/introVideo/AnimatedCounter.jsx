import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ end, label, icon, color = '#36d1e0' }) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 900;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end, inView]);

    return (
        <Box
            ref={ref}
            sx={{
                textAlign: 'center',
                mx: 0,
                px: 1,
                py: 1.5,
                borderRadius: 1,
                height: 90,
                minWidth: 80,
                minHeight: 80,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: `rgba(255,255,255,0.10)`,
                boxShadow: '0 2px 8px 0 rgba(30,60,120,0.08)',
                border: `1px solid ${color}22`,
                backdropFilter: 'blur(4px) saturate(110%)',
                transition: 'transform 0.3s, background 0.3s',
                ...(inView && { transform: 'scale(1.06)', background: `rgba(255,255,255,0.16)` }),
            }}
        >
            {icon && <Box sx={{ mb: 0.5 }}>{icon}</Box>}
            <Typography variant="h5" sx={{ fontWeight: 700, color, textShadow: '0 1px 4px #02101a22', fontSize: '1.2rem' }}>
                {count}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: '#fff',
                    opacity: 0.85,
                    fontWeight: 500,
                    mt: 0.2,
                    px: 0.5,
                    wordBreak: 'break-word',
                    fontSize: '0.85rem',
                }}
            >
                {label}
            </Typography>
        </Box>
    );

}