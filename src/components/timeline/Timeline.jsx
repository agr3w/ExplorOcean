import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Estilos (sem alterações)
const TimelineContainer = styled(Box)(({ theme, isVisible }) => ({
  display: isVisible ? 'flex' : 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(5px)',
  borderRadius: theme.spacing(2),
  margin: theme.spacing(0, 4, 4, 4),
}));

const NavButton = styled(Button)(({ theme, isSelected }) => ({
  whiteSpace: 'nowrap',
  backgroundColor: isSelected ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));


const Timeline = ({ data, onSelectEra, isVisible }) => {
  // 1. ESTADO SIMPLIFICADO: Apenas o ID do item selecionado.
  const [selectedItemId, setSelectedItemId] = useState(data[0].id);

  // 2. DADOS MEMOIZADOS: Evita recalcular a estrutura de dados em cada renderização.
  const { groupedData, dataById } = useMemo(() => {
    const grouped = data.reduce((acc, item) => {
      if (!acc[item.eon]) {
        acc[item.eon] = {};
      }
      if (!acc[item.eon][item.era]) {
        acc[item.eon][item.era] = [];
      }
      acc[item.eon][item.era].push(item);
      return acc;
    }, {});
    
    const byId = data.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    return { groupedData: grouped, dataById: byId };
  }, [data]);

  // 3. ESTADO DERIVADO: Todas as informações são derivadas do ID selecionado.
  const selectedItem = dataById[selectedItemId];
  const selectedEon = selectedItem.eon;
  const selectedEra = selectedItem.era;

  // 4. LÓGICA DE NAVEGAÇÃO CLARA
  const eons = Object.keys(groupedData);
  const erasInSelectedEon = Object.keys(groupedData[selectedEon]);
  const periodsInSelectedEra = groupedData[selectedEon][selectedEra];
  const currentPeriodIndex = periodsInSelectedEra.findIndex(p => p.id === selectedItemId);

  // Efeito para notificar a página pai sobre a mudança
  useEffect(() => {
    if (selectedItem) {
      onSelectEra(selectedItem);
    }
  }, [selectedItem, onSelectEra]);
  
  // Funções de clique agora são mais simples
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
    if (currentPeriodIndex > 0) {
      setSelectedItemId(periodsInSelectedEra[currentPeriodIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentPeriodIndex < periodsInSelectedEra.length - 1) {
      setSelectedItemId(periodsInSelectedEra[currentPeriodIndex + 1].id);
    }
  };

  return (
    <TimelineContainer isVisible={isVisible}>
      {/* Seção de Éons */}
      <Typography variant="h6" gutterBottom>Éons</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        {eons.map(eonKey => (
          <NavButton
            key={eonKey}
            onClick={() => handleSelectEon(eonKey)}
            isSelected={selectedEon === eonKey}
          >
            {eonKey}
          </NavButton>
        ))}
      </Box>

      {/* Seção de Eras (só aparece se houver mais de uma no Éon) */}
      {erasInSelectedEon.length > 1 && (
        <>
          <Typography variant="h6" gutterBottom>Eras</Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            {erasInSelectedEon.map(eraKey => (
              <NavButton
                key={eraKey}
                onClick={() => handleSelectEra(eraKey)}
                isSelected={selectedEra === eraKey}
              >
                {eraKey}
              </NavButton>
            ))}
          </Box>
        </>
      )}

      {/* Seção de Períodos com Navegação */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'center' }}>
        <IconButton onClick={handlePrev} disabled={currentPeriodIndex === 0}>
          <ArrowBackIosIcon sx={{ color: 'white' }} />
        </IconButton>
        
        {/* Usamos um Box com overflow para os botões de período */}
        <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, p: 1, '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
          {periodsInSelectedEra.map(item => (
            <Button
              key={item.id}
              onClick={() => setSelectedItemId(item.id)}
              variant={item.id === selectedItemId ? 'contained' : 'text'}
              sx={{
                whiteSpace: 'nowrap',
                color: 'white',
                backgroundColor: item.id === selectedItemId ? 'primary.main' : 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        
        <IconButton onClick={handleNext} disabled={currentPeriodIndex === periodsInSelectedEra.length - 1}>
          <ArrowForwardIosIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </TimelineContainer>
  );
};

export default Timeline;