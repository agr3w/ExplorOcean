import React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ScrollContainer, TimelineTrack, PeriodContainer, TimelineNode, EventMarker } from '../TimelineStyled';

export default function PeriodsTimeline({
  periods,
  selectedItemId,
  setSelectedItemId,
  currentPeriodIndex,
  handlePrev,
  handleNext,
  scrollContainerRef,
  nodeRefs,
  periodSpacings,
  keyEventsMap
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'center' }}>
      <IconButton onClick={handlePrev} disabled={currentPeriodIndex === 0}>
        <ArrowBackIosIcon sx={{ color: 'white' }} />
      </IconButton>
      <ScrollContainer ref={scrollContainerRef}>
        <TimelineTrack />
        {periods.map(item => {
          const keyEvent = keyEventsMap[item.id];
          return (
            <PeriodContainer
              key={item.id}
              ref={el => nodeRefs.current[item.id] = el}
              sx={{ minWidth: `${periodSpacings[item.id]}%` }}
            >
              {keyEvent && (
                <Tooltip title={keyEvent.description} arrow placement="top" sx={{ fontSize: '1.0rem' }}>
                  <EventMarker>
                    {keyEvent.icon}
                  </EventMarker>
                </Tooltip>
              )}
              <TimelineNode
                isSelected={item.id === selectedItemId}
                onClick={() => setSelectedItemId(item.id)}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: item.id === selectedItemId ? 'primary.main' : 'rgba(255,255,255,0.7)',
                    fontWeight: item.id === selectedItemId ? 'bold' : 'normal',
                    position: 'absolute',
                    top: '25px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </Typography>
              </TimelineNode>
            </PeriodContainer>
          );
        })}
      </ScrollContainer>
      <IconButton onClick={handleNext} disabled={currentPeriodIndex === periods.length - 1}>
        <ArrowForwardIosIcon sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
}