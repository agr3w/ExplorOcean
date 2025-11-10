import React, { useState, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import Globe3D from '../components/globo3D/Globe3D';
import DetailDrawer from '../components/globo3D/DetailDrawer';
import InterestFilter from '../components/globo3D/InterestFilter';
import { globePinsData } from '../content/globeContent/globePins';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';

export default function GlobePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [detailContent, setDetailContent] = useState(null);
  const [filters, setFilters] = useState({ geologia: true, biologia: true, historia: true });
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const handleOpenDetails = (pin) => {
    setDetailContent(pin.content);
    setIsDrawerOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDrawerOpen(false);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const filteredPins = globePinsData.filter(pin => filters[pin.type]);

  return (
    <Box sx={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      {/* <audio ref={audioRef} src="/audio/deep-ocean-ambient.mp3" autoPlay loop muted />
      <IconButton
        onClick={toggleMute}
        sx={{ position: 'absolute', top: 100, left: 24, zIndex: 20, color: 'white', background: 'rgba(0,0,0,0.3)' }}
      >
        {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
      </IconButton> */}
      <Navigator sx={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }} />
      <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
        <Globe3D
          pins={filteredPins}
          onPinClick={handleOpenDetails}
        />
        {/* <InterestFilter filters={filters} setFilters={setFilters} /> */}
      </Box>
      <DetailDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDetails}
        content={detailContent}
      />
    </Box>
  );
}