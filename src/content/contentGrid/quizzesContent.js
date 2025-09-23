// src/content/quizzesContent.js

export const quizzesData = [
  {
    id: "placas-tectonicas-quiz",
    type: "quizzes",
    category: "Geologia Marinha",
     imageUrl: "/src/assets/earthmap1k.jpg",
    label: "Quiz: Placas Tectônicas",
    shortDescription:
      "Teste seus conhecimentos sobre as placas que moldam o fundo do oceano.",
    longDescription:
      "Este quiz desafia você a mergulhar nas profundezas da geologia marinha. Responda perguntas sobre a formação de montanhas submarinas, zonas de subducção e a deriva continental, tudo relacionado ao assoalho oceânico. Prepare-se para testar o seu conhecimento sobre o nosso planeta em constante movimento.",
    link: "link-para-o-quiz",
    bgColor: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    difficulty: "Intermediário",
    numberOfQuestions: 10,
    duration: "10-15 min",
    relatedContent: {
      documentaries: [{ label: "Ponto NEMO", id: "ponto-nemo" }],
      geologicalPeriod: {
        label: "Arqueano",
        id: "arqueano",
      },
    },
    questions: [
      {
        question:
          "Qual é a principal força por trás do movimento das placas tectônicas?",
        options: [
          "Vento",
          "Correntes oceânicas",
          "Convecção no manto",
          "Erupções vulcânicas",
        ],
        correctAnswer: "Convecção no manto",
      },
      {
        question: "Onde o magma sobe para criar nova crosta oceânica?",
        options: [
          "Fossas abissais",
          "Cordilheiras meso-oceânicas",
          "Ilhas vulcânicas",
          "Plataforma continental",
        ],
        correctAnswer: "Cordilheiras meso-oceânicas",
      },
      // Adicione mais perguntas aqui
    ],
  },
  {
    id: "criaturas-profundezas-quiz",
    type: "quizzes",
    category: "Biologia Marinha",
    label: "Quiz: Criaturas das Profundezas",
    shortDescription:
      "Você consegue identificar as criaturas mais estranhas e fascinantes do abismo?",
    longDescription:
      "Prepare-se para encontrar as criaturas mais bizarras e adaptadas do fundo do oceano. Este quiz testará sua capacidade de reconhecer peixes que brilham no escuro, lulas gigantes e outros seres que vivem em um ambiente de pressão extrema e ausência de luz. Descubra o quão bem você conhece o abismo marinho!",
    link: "link-para-o-quiz",
    bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    difficulty: "Difícil",
    numberOfQuestions: 15,
    duration: "15-20 min",
    relatedContent: {
      fauna: [
        { label: "Lula Gigante", id: "lula-gigante" },
        { label: "Peixe-Dragão", id: "peixe-dragao" },
      ],
    },
    questions: [
      {
        question:
          "Qual animal marinho é conhecido por sua bioluminescência para atrair presas?",
        options: ["Tartaruga-marinha", "Tubarão", "Peixe-lanterna", "Golfinho"],
        correctAnswer: "Peixe-lanterna",
      },
      {
        question: "Qual a função dos fotóforos em algumas criaturas do abismo?",
        options: [
          "Causar fotossíntese",
          "Gerar luz",
          "Armazenar oxigênio",
          "Proteger contra predadores",
        ],
        correctAnswer: "Gerar luz",
      },
      // Adicione mais perguntas aqui
    ],
  },
  {
    id: "mares-e-lua-quiz",
    type: "quizzes",
    category: "Astronomia",
    label: "Quiz: Marés e Lua",
    shortDescription:
      "Entenda a relação entre a astronomia e as marés oceânicas.",
    longDescription:
      "Este quiz explora a incrível conexão entre o espaço e os oceanos. Você vai responder perguntas sobre como a atração gravitacional da Lua e do Sol influenciam as marés e por que elas variam de intensidade. Uma maneira divertida de entender a física por trás das ondas que chegam à praia.",
    link: "link-para-o-quiz",
    bgColor: "linear-gradient(135deg, #53E6BA 0%, #30A6F4 100%)",
    difficulty: "Fácil",
    numberOfQuestions: 5,
    duration: "5-10 min",
    relatedContent: {},
    questions: [
      {
        question:
          "Qual corpo celeste tem a maior influência sobre as marés da Terra?",
        options: ["O Sol", "A Lua", "Marte", "Vênus"],
        correctAnswer: "A Lua",
      },
      {
        question: "O que são marés de sizígia?",
        options: [
          "Marés com a menor amplitude",
          "Marés com a maior amplitude",
          "Marés que ocorrem à noite",
          "Marés que ocorrem em dias de tempestade",
        ],
        correctAnswer: "Marés com a maior amplitude",
      },
      // Adicione mais perguntas aqui
    ],
  },
];
