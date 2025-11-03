import React from "react";
// Se estiver usando react-joyride, lembre-se de instalar e importar corretamente
import Joyride, { STATUS } from "react-joyride";

export default function TimelineTour({ run, onTourEnd }) {
  const steps = [
    {
      target: "#timeline-navigator", // Adicione esse id no componente Timeline
      content: "Aqui você navega pelas eras e períodos históricos do oceano.",
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: "#timeline-map", // Adicione esse id no componente MapDisplay
      content: "Veja a localização e detalhes do oceano em cada período.",
      placement: "right",
      disableBeacon: true,
    },
    {
      target: "#timeline-content", // Adicione esse id no componente TimelineContent
      content: "Explore os eventos, curiosidades e informações de cada era.",
      placement: "left",
      disableBeacon: true,
    },
  ];

  const handleCallback = (data) => {
    const { status } = data;
    if (
      status === STATUS.FINISHED ||
      status === STATUS.SKIPPED ||
      status === STATUS.CLOSED
    ) {
      onTourEnd();
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      disableScrolling
      styles={{
        options: {
          zIndex: 9999,
          primaryColor: "#36d1e0",
          textColor: "#02101a",
          backgroundColor: "#fff",
        },
      }}
      callback={handleCallback}
      locale={{
        back: "Voltar",
        close: "Fechar",
        last: "Finalizar",
        next: "Próximo",
        skip: "Pular",
      }}
    />
  );
}