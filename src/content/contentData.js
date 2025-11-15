import { faunaData, floraData } from './faunaFlora/faunaFloraData';
import { documentariesData } from './contentGrid/documentariesContent';
import { quizzesData } from './contentGrid/quizzesContent';

// Junta todos os arrays de conteúdo em um só
const allContent = [
  ...faunaData,
  ...floraData,
  ...documentariesData,
  ...quizzesData,
];

// Cria um "mapa" para busca rápida por ID. Isso é muito mais performático que usar .find() repetidamente.
export const contentMap = new Map(allContent.map(item => [item.id, item]));