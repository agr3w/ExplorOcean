import { MdMovie, MdQuiz, MdEco, MdHistoryEdu, MdPublic } from 'react-icons/md';

export const hubData = [
  {
    title: "Documentários",
    description: "Assista a documentários incríveis e aprenda sobre a vida marinha e a história dos oceanos.",
    imageUrl: "/src/assets/images/doc-hub.jpg",
    link: "/documentaries",
    icon: MdMovie,
  },
  {
    title: "Quizzes",
    description: "Teste seus conhecimentos sobre a vida marinha e a história dos oceanos.",
    imageUrl: "/src/assets/images/quiz-hub.jpg",
    link: "/quizzes",
    icon: MdQuiz,
  },
  {
    title: "Fauna e Flora",
    description: "Aprofunde seus conhecimentos em tópicos específicos sobre a fauna e flora marinha.",
    imageUrl: "/src/assets/images/fauna-flora-hub.jpg",
    link: "/fauna-flora",
    icon: MdEco,
  },
  {
    title: "História com o Oceano",
    description: "Explore a história geológica do nosso planeta e seus oceanos.",
    imageUrl: "/src/assets/images/timeline-hub.jpg", 
    link: "/timeline",
    icon: MdHistoryEdu,
  },
  {
    title: "Globo 3D",
    description: "Explore o mundo dos oceanos em 3D.",
    imageUrl: "/src/assets/images/about-hub.jpg", 
    link: "/globe",
    icon: MdPublic,
  },
];