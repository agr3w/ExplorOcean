// src/content/contentGrid/documentariesContent.js

export const documentariesData = [
  {
    id: "nordicos-navegacoes",
    category: "Oceanografia",
    label: "Nórdicos à Navegações",
    shortDescription: "Uma jornada visual e histórica que explora a navegação nórdica.",
    longDescription: "Este documentário aprofunda a história dos povos nórdicos e sua relação intrínseca com o mar. Você irá descobrir como eles construíram suas lendárias embarcações, como usavam as estrelas para navegar e como suas viagens moldaram a história da Europa. Uma imersão na cultura viking e na ciência da navegação antiga.",
    videoUrl: "https://www.youtube.com/embed/a-W2-xHhH1U?si=1WzXl-51fX2jE-8u",
    imageUrl: "/src/assets/images/doc1.jpg",
    secondaryImages: [
      "/src/assets/images/naves-vikings.jpg",
      "/src/assets/images/estrela-do-norte.jpg"
    ],
    rating: "4.5",
    tags: ["História", "Navegação"],
    icon: "🎥",
    duration: "1h 30min",
    location: {
      name: "Oceanos Atlântico e Ártico",
      description: "A história se passa nas águas frias e turbulentas do Atlântico Norte e do Ártico, rota principal das explorações vikings."
    },
    relatedContent: {
      fauna: [
        { label: "Baleia Jubarte", id: "baleia-jubarte" },
        { label: "Baleia Orca", id: "baleia-orca" }
      ],
      flora: [
        { label: "Alga Kelp", id: "alga-kelp" }
      ],
      geologicalPeriod: {
        label: "Holoceno",
        id: "holoceno"
      }
    }
  },
  {
    id: "ponto-nemo",
    category: "Biologia Marinha",
    label: "Ponto NEMO",
    shortDescription: "Conheça o local mais inacessível da Terra e os mistérios de sua biologia marinha.",
    longDescription: "O Ponto Nemo é o local do oceano mais distante de qualquer massa de terra. Este documentário explora a vida que consegue prosperar neste ambiente extremo, apresentando criaturas bioluminescentes e ecossistemas isolados. Uma viagem fascinante ao abismo do planeta.",
    videoUrl: "https://www.youtube.com/embed/A8g3X3B2YDw?si=yqY073fW9X_a-dOq",
    imageUrl: "/src/assets/earthmap1k.jpg",
    secondaryImages: [
      "/src/assets/images/creature-deep.jpg",
      "/src/assets/images/abyssal-plain.jpg"
    ],
    rating: "5.0",
    tags: ["Oceanografia", "Biologia"],
    icon: "🎥",
    duration: "45min",
    location: {
      name: "Ponto Nemo, Oceano Pacífico",
      description: "Localizado no sul do Oceano Pacífico, é o ponto mais inacessível do planeta, a 2.688 km da terra mais próxima."
    },
    relatedContent: {
      fauna: [
        { label: "Lula Gigante", id: "lula-gigante" },
        { label: "Peixe-Dragão", id: "peixe-dragao" }
      ],
      flora: [],
      geologicalPeriod: {
        label: "Holoceno",
        id: "holoceno"
      }
    }
  },
];