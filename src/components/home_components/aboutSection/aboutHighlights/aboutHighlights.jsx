import { Box, Typography } from '@mui/material';
import { aboutData } from '../../../../content/homeContent/aboutContent';


export default function AboutHighlights() {
    return (
        <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                {aboutData.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                {aboutData.body}
            </Typography>
            {/* Highlight icons */}
            <Box sx={{ display: 'flex', gap: 3 }}>
                {aboutData.highlights.map((highlight, index) => (
                    <Box key={index} sx={{ textAlign: 'center' }}>
                        <span role="img" aria-label={highlight.label} style={{ fontSize: 40 }}>
                            {highlight.icon}
                        </span>
                        <Typography variant="subtitle2">{highlight.label}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}