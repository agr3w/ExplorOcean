// src/pages/TimelinePage.jsx

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import Timeline from '../components/timeline/Timeline';
import MapDisplay from '../components/timeline/MapDisplay';
import TimelineContent from '../components/timeline/TimelineContent';
import { timelineData } from '../content/timeLine/timelineContent';

export default function TimelinePage() {
    const [selectedEra, setSelectedEra] = useState(timelineData[0]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#000000', // Fundo preto para o contraste
                color: '#ffffff'
            }}
        >
            <Navigator />

            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                    gap: 4
                }}
            >
                <MapDisplay era={selectedEra} />
                <TimelineContent era={selectedEra} />
            </Box>

            <Timeline
                data={timelineData}
                selectedEra={selectedEra}
                onSelectEra={setSelectedEra}
            />

            {/* <Footer depth={0} /> */}
        </Box>
    );
}