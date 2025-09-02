// src/content/faunaFlora/faunaFloraData.js

export const faunaData = [
  {
    id: 'baleia-jubarte',
    category: 'Fauna',
    label: 'Baleia Jubarte',
    shortDescription: 'Mamífero marinho gigante conhecido por suas acrobacias e canto complexo.',
    longDescription: 'A baleia-jubarte (Megaptera novaeangliae) é uma das espécies mais carismáticas dos oceanos. Conhecida por suas canções complexas e rituais de acasalamento acrobáticos, ela migra milhares de quilômetros todos os anos. É um símbolo da conservação marinha e um predador importante para o equilíbrio dos ecossistemas. Elas se alimentam de pequenos peixes e krill, utilizando uma técnica de "rede de bolhas" para encurralar suas presas.',
    imageUrl: 'https://images.unsplash.com/photo-1549487779-11f8e2444381',
    secondaryImages: [
      'https://images.unsplash.com/photo-1577960682136-2d573f08b33a',
      'https://images.unsplash.com/photo-1522069792408-9ec1d87e074d'
    ],
    relatedContent: {
      documentaries: [
        { label: "Ponto NEMO", id: "ponto-nemo" }
      ],
      geologicalPeriod: {
        label: "Cenozoico",
        id: "cenozoico"
      }
    }
  },
  {
    id: 'tubarao-branco',
    category: 'Fauna',
    label: 'Tubarão-Branco',
    shortDescription: 'Predador de topo com um olfato apurado, crucial para o equilíbrio dos ecossistemas marinhos.',
    longDescription: 'O tubarão-branco (Carcharodon carcharias) é o maior peixe predador do mundo. Apesar da sua reputação, ataques a humanos são raros, e sua dieta consiste principalmente de leões-marinhos e focas. Sua presença é vital para manter o equilíbrio populacional de outras espécies marinhas.',
    imageUrl: 'https://images.unsplash.com/photo-1522069792408-9ec1d87e074d',
    secondaryImages: [],
    relatedContent: {
      fauna: [
        { label: "Baleia Jubarte", id: "baleia-jubarte" }
      ],
      documentaries: [
        { label: "Nórdicos à Navegações", id: "nordicos-navegacoes" }
      ]
    }
  },
  {
    id: 'tartaruga-marinha',
    category: 'Fauna',
    label: 'Tartaruga-Marinha',
    shortDescription: 'Réptil antigo que viaja milhares de quilômetros para desovar.',
    longDescription: 'As tartarugas-marinhas são répteis fascinantes que existem há mais de 100 milhões de anos. Elas viajam por longas distâncias para se alimentar e se reproduzir, e sempre retornam à praia onde nasceram para desovar. A poluição plástica e a perda de habitat são as principais ameaças à sua sobrevivência.',
    imageUrl: 'https://images.unsplash.com/photo-1548450171-807212c45217',
    secondaryImages: [],
    relatedContent: {
      documentaries: [
        { label: "Ponto NEMO", id: "ponto-nemo" }
      ],
      flora: [
        { label: "Grama Marinha", id: "grama-marinha" }
      ]
    }
  },
];

export const floraData = [
  {
    id: 'alga-kelp',
    category: 'Flora',
    label: 'Alga Kelp',
    shortDescription: 'Forma vastas florestas subaquáticas que servem de habitat para diversas espécies marinhas.',
    longDescription: 'As algas kelp são gigantes que crescem em vastas florestas subaquáticas em águas frias e ricas em nutrientes. Elas fornecem abrigo e alimento para uma infinidade de espécies, desde peixes pequenos a lontras-do-mar. Essas florestas são ecossistemas complexos e essenciais para a saúde dos oceanos.',
    imageUrl: 'https://images.unsplash.com/photo-1596707328154-8e102f646039',
    secondaryImages: [],
    relatedContent: {
      fauna: [
        { label: "Peixe-leão", id: "peixe-leao" }
      ]
    }
  },
  {
    id: 'fitoplancton',
    category: 'Flora',
    label: 'Fitoplâncton',
    shortDescription: 'Micro-organismos vegetais que são a base da cadeia alimentar e produzem grande parte do oxigênio do planeta.',
    longDescription: 'O fitoplâncton é um dos pilares da vida na Terra. Esses minúsculos organismos marinhos realizam fotossíntese e são responsáveis por produzir cerca de metade do oxigênio que respiramos. Eles formam a base da cadeia alimentar oceânica, servindo de alimento para o zooplâncton e, indiretamente, para toda a vida marinha.',
    imageUrl: 'https://images.unsplash.com/photo-1534066068694-0f2c4164b38d',
    secondaryImages: [],
    relatedContent: {
      geologicalPeriod: {
        label: "Proterozoico",
        id: "proterozoico"
      }
    }
  },
  {
    id: 'grama-marinha',
    category: 'Flora',
    label: 'Grama Marinha',
    shortDescription: 'Plantas que formam prados submersos, essenciais para a saúde costeira e como berçário para peixes.',
    longDescription: 'A grama marinha não é uma alga, mas sim uma planta com flores que vive totalmente submersa. Os prados de grama marinha são habitats incrivelmente importantes, funcionando como berçários para peixes, camarões e outras espécies. Eles também filtram a água e ajudam a estabilizar o sedimento, protegendo as costas da erosão.',
    imageUrl: 'https://images.unsplash.com/photo-1523996502758-29a3a9364654',
    secondaryImages: [],
    relatedContent: {
      fauna: [
        { label: "Tartaruga-Marinha", id: "tartaruga-marinha" }
      ]
    }
  },
];