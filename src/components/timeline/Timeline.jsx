import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { keyEventsData } from '../../content/timeLine/keyEventsContent';
import { MotionTimelineContainer } from './TimelineStyled';
import ToggleHandle from './TimelineParts/ToggleHandle';
import EonsSelector from './TimelineParts/EonsSelector';
import ErasSelector from './TimelineParts/ErasSelector';
import PeriodsTimeline from './TimelineParts/PeriodsTimeline';

// --- Timeline Principal ---
const panelVariants = {
  hidden: { y: 'calc(100% - 40px)', opacity: 1 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const Timeline = ({ data, onSelectEra, isVisible, toggleVisibility }) => {
  const [selectedItemId, setSelectedItemId] = useState(data[0].id);
  const scrollContainerRef = useRef(null);
  const nodeRefs = useRef({});

  const { groupedData, dataById } = useMemo(() => {
    const grouped = data.reduce((acc, item) => {
      if (!acc[item.eon]) acc[item.eon] = {};
      if (!acc[item.eon][item.era]) acc[item.eon][item.era] = [];
      acc[item.eon][item.era].push(item);
      return acc;
    }, {});
    const byId = data.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    return { groupedData: grouped, dataById: byId };
  }, [data]);

  const selectedItem = dataById[selectedItemId];
  const { eon: selectedEon, era: selectedEra } = selectedItem;
  const periodsInSelectedEra = groupedData[selectedEon][selectedEra];
  const currentPeriodIndex = periodsInSelectedEra.findIndex(p => p.id === selectedItemId);

  const periodSpacings = useMemo(() => {
    const durations = periodsInSelectedEra.map(p => ({
      id: p.id,
      logDuration: Math.log10((p.start - p.end) + 1)
    }));
    const totalLogDuration = durations.reduce((sum, p) => sum + p.logDuration, 0);
    if (totalLogDuration === 0) {
      return { [durations[0].id]: 100 };
    }
    const spacings = {};
    durations.forEach(p => {
      const percentage = (p.logDuration / totalLogDuration) * 100;
      spacings[p.id] = Math.max(percentage, 8);
    });
    return spacings;
  }, [periodsInSelectedEra]);

  useEffect(() => {
    if (selectedItem) onSelectEra(selectedItem);
    const activeNode = nodeRefs.current[selectedItemId];
    if (activeNode) {
      activeNode.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [selectedItemId, onSelectEra, selectedItem]);

  const handleSelectEon = (eonKey) => {
    const firstEraKey = Object.keys(groupedData[eonKey])[0];
    const firstItem = groupedData[eonKey][firstEraKey][0];
    setSelectedItemId(firstItem.id);
  };

  const handleSelectEra = (eraKey) => {
    const firstItem = groupedData[selectedEon][eraKey][0];
    setSelectedItemId(firstItem.id);
  };

  const handlePrev = () => {
    if (currentPeriodIndex > 0) setSelectedItemId(periodsInSelectedEra[currentPeriodIndex - 1].id);
  };

  const handleNext = () => {
    if (currentPeriodIndex < periodsInSelectedEra.length - 1) setSelectedItemId(periodsInSelectedEra[currentPeriodIndex + 1].id);
  };

  const keyEventsMap = useMemo(() => {
    return keyEventsData.reduce((acc, event) => {
      acc[event.periodId] = event;
      return acc;
    }, {});
  }, []);

  return (
    <MotionTimelineContainer
      variants={panelVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      exit="hidden"
    >
      <ToggleHandle isVisible={isVisible} toggleVisibility={toggleVisibility} />
      <Box sx={{ mt: 2, width: '100%' }}>
        <EonsSelector
          groupedData={groupedData}
          selectedEon={selectedItem.eon}
          handleSelectEon={handleSelectEon}
        />
        <ErasSelector
          groupedData={groupedData}
          selectedEon={selectedItem.eon}
          selectedEra={selectedItem.era}
          handleSelectEra={handleSelectEra}
        />
        <PeriodsTimeline
          periods={periodsInSelectedEra}
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          currentPeriodIndex={currentPeriodIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
          scrollContainerRef={scrollContainerRef}
          nodeRefs={nodeRefs}
          periodSpacings={periodSpacings}
          keyEventsMap={keyEventsMap}
        />
      </Box>
    </MotionTimelineContainer>
  );
};

export default Timeline;