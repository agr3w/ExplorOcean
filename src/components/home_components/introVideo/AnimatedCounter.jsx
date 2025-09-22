import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function AnimatedCounter({ end, label }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
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
    }, [end]);

    return (
        <Box sx={{ textAlign: 'center', mx: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#36d1e0' }}>
                {count}
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8 }}>
                {label}
            </Typography>
        </Box>
    );
}