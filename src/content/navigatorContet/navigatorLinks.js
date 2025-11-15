import { MdPublic, MdEco, MdHistoryEdu, MdMovie, MdQuiz, MdHome, MdPerson } from 'react-icons/md';

export const navigationLinks = [
  {
    subheader: 'Exploração',
    items: [
      { label: 'Globo 3D', to: '/globe', icon: MdPublic },
      { label: 'Fauna e Flora', to: '/fauna-flora', icon: MdEco },
      { label: 'História com o Oceano', to: '/timeline', icon: MdHistoryEdu },
    ],
  },
  {
    subheader: 'Conteúdos',
    items: [
      { label: 'Documentários', to: '/documentaries', icon: MdMovie },
      { label: 'Quizzes', to: '/quizzes', icon: MdQuiz },
    ],
  },
  {
    subheader: 'Acesso rápido',
    items: [
      { label: 'Home', to: '/', icon: MdHome },
      { label: 'Perfil', to: '/profile', icon: MdPerson },
    ],
  },
];