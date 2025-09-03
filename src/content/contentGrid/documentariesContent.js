// src/content/contentGrid/documentariesContent.js

export const documentariesData = [
  {
    id: "nordicos-navegacoes",
    category: "Oceanografia",
    label: "Nórdicos à Navegações",
    shortDescription: "Uma jornada visual e histórica que explora a navegação nórdica.",
    longDescription: "Este documentário aprofunda a história dos povos nórdicos e sua relação intrínseca com o mar...",
    videoUrl: "https://www.youtube.com/embed/bmFLWmcovfI?autoplay=1&mute=1",
    imageUrl: "/src/assets/images/doc1.jpg",
    rating: "4.5",
    director: "Erik, o Destemido",
    releaseYear: 2022,
    secondaryImages: [
      "/src/assets/images/naves-vikings.jpg",
      "/src/assets/images/estrela-do-norte.jpg"
    ],
    castAndCrew: [ // Novo campo adicionado
      { name: "Bjorn Ironside", role: "Historiador", photo: "/src/assets/images/bjorn.jpg" },
      { name: "Freya Stormborn", role: "Oceanógrafa", photo: "/src/assets/images/freya.jpg" },
    ],
    tags: ["História", "Navegação"],
    icon: "🎥",
    duration: "1h 30min",
    location: {
      name: "Oceanos Atlântico e Ártico",
      description: "A história se passa nas águas frias e turbulentas do Atlântico Norte e do Ártico...",
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
    longDescription: "O Ponto Nemo é o local do oceano mais distante de qualquer massa de terra...",
    videoUrl: "https://www.youtube.com/embed/bmFLWmcovfI?autoplay=1&mute=1",
    imageUrl: "/src/assets/earthmap1k.jpg",
    rating: "5.0",
    director: "James Cameron",
    releaseYear: 2020,
    secondaryImages: [
      "/src/assets/images/creature-deep.jpg",
      "/src/assets/images/abyssal-plain.jpg"
    ],
    castAndCrew: [ // Novo campo adicionado
      { name: "Dr. Evelyn Reed", role: "Bióloga Marinha", photo: "/src/assets/images/evelyn-reed.jpg" },
      { name: "Mike Evans", role: "Cinegrafista Submarino", photo: "/src/assets/images/mike-evans.jpg" },
    ],
    tags: ["Oceanografia", "Biologia"],
    icon: "🎥",
    duration: "45min",
    location: {
      name: "Ponto Nemo, Oceano Pacífico",
      description: "Localizado no sul do Oceano Pacífico...",
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