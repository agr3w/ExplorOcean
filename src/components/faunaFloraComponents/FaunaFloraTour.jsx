// src/components/faunaFloraComponents/FaunaFloraTour.jsx

import React from 'react';
import Joyride, { STATUS } from 'react-joyride';

export default function FaunaFloraTour({ run, onTourEnd }) {
  
  // 1. Defina os passos (os "balões") do seu tour
  const steps = [
    {
      target: '#tour-step-1', // O seletor de CSS que "etiquetamos"
      content: 'Bem-vindo! Use estes botões para alternar entre a exploração da Fauna (animais) e da Flora (plantas).',
      placement: 'bottom',
    },
    {
      target: '#tour-step-2',
      content: 'Aqui você pode alternar a visualização dos cards entre imagens 2D e modelos 3D interativos.',
      placement: 'bottom',
    },
    {
      target: '#tour-step-3',
      content: 'E aqui está todo o nosso conteúdo! Clique em qualquer card para "mergulhar" e aprender mais.',
      placement: 'auto',
    }
  ];

  // 2. Função de callback para quando o tour terminar
  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      onTourEnd(); // Avisa o componente pai que o tour acabou
    }
  };

  return (
    <Joyride
      run={run}
      steps={steps}
      callback={handleJoyrideCallback}
      continuous={true} // Botão "Próximo" em todos os passos
      showProgress={true}
      showSkipButton={true}
      // Estilização para combinar com o nosso tema
      styles={{
        options: {
          arrowColor: '#0A1929',
          backgroundColor: '#e3f2fd',
          primaryColor: '#36d1e0', // Cor do botão principal
          textColor: '#0A1929',
          zIndex: 10000,
        },
        tooltip: {
          borderRadius: 16,
        },
        buttonNext: {
          borderRadius: 20,
        },
      }}
    />
  );
}