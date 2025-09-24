export const faunaData = [
  {
    id: 'baleia-jubarte',
    category: 'Fauna',
    label: 'Baleia Jubarte',
    shortDescription: 'Mamífero marinho gigante conhecido por suas acrobacias e canto complexo.',
    longDescription: 'A baleia-jubarte (Megaptera novaeangliae) é um cetáceo misticeto, uma das espécies de baleias mais carismáticas e estudadas. Famosa por seus saltos espetaculares fora d\'água e por um complexo sistema de vocalização, conhecido como "canto das baleias", que pode durar horas e se espalhar por vastas áreas oceânicas. Realiza uma das maiores migrações do reino animal, viajando de áreas de alimentação em águas polares para zonas de reprodução em águas tropicais. Alimenta-se principalmente de krill e pequenos peixes, utilizando uma técnica sofisticada chamada "rede de bolhas", onde um grupo de baleias expele ar para criar uma cortina de bolhas, aprisionando as presas.',
    details: [
      { title: "Vocalização", text: "Seu canto, entoado pelos machos, é complexo e estruturado, com temas que evoluem ao longo do tempo e são compartilhados culturalmente entre diferentes populações. Pode ser ouvido a até 30 km de distância debaixo d’água." },
      { title: "Anatomia", text: "Possui nadadeiras peitorais excepcionalmente longas, que podem atingir quase um terço do comprimento do corpo, e tubérculos na cabeça, cada um contendo um único pelo sensorial." },
      { title: "Conservação", text: "Esteve à beira da extinção devido à caça comercial, mas hoje é um símbolo de sucesso na conservação marinha, com populações se recuperando globalmente." },
      { title: "Migração", text: "Percorre anualmente até 25.000 km, alternando entre áreas de alimentação e reprodução." }
    ],
    imageUrl: 'https://wallpapercave.com/wp/YocUFbD.jpg',
    threeModel: '/models/ChimeraVan.glb',
    backgroundPreset: "sunset",
    secondaryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    ],
    relatedContent: {
      fauna: [
        { label: "Tubarão-Branco", id: "tubarao-branco" },
        { label: "Tartaruga-Marinha", id: "tartaruga-marinha" }
      ],
      documentaries: [
        { label: "Ponto NEMO", id: "ponto-nemo" }
      ],
      geologicalPeriod: {
        label: "Cenozoico",
        id: "cenozoico"
      },
      flora: [
        { label: "Alga Kelp", id: "alga-kelp" }
      ]
    },
    location: {
      name: "Oceano Atlântico Sul",
      description: "Águas costeiras do Brasil, especialmente no litoral da Bahia e Espírito Santo, são áreas de reprodução."
    },
    duration: "60 anos (expectativa de vida)",
    releaseYear: 2023,
    director: "Natureza",
    castAndCrew: [
      { role: "Pesquisador", name: "Dra. Ana Oceano" },
      { role: "Fotógrafo", name: "Carlos Marinho" }
    ],
    quiz: {
      id: "quiz-baleia-jubarte",
      numberOfQuestions: 5,
      difficulty: "Médio"
    }
  },
  {
    id: 'tubarao-branco',
    category: 'Fauna',
    label: 'Tubarão-Branco',
    shortDescription: 'Predador de topo com um olfato apurado, crucial para o equilíbrio dos ecossistemas marinhos.',
    longDescription: 'O grande tubarão-branco (Carcharodon carcharias) é o maior peixe predador do mundo, uma máquina de caça evolutivamente aprimorada. É um predador de topo, vital para a saúde dos ecossistemas marinhos, regulando as populações de espécies como leões-marinhos e focas. Seus dentes serrilhados e em fileiras são substituídos continuamente ao longo da vida. Possui órgãos sensoriais, as ampolas de Lorenzini, que detectam os campos elétricos gerados por presas, permitindo-lhe caçar com extrema precisão, mesmo sem visão direta.',
    details: [
      { title: "Técnica de Caça", text: "Famoso por sua técnica de emboscada, onde ataca a presa por baixo em alta velocidade, muitas vezes saltando completamente para fora da água." },
      { title: "Termorregulação", text: "É um dos poucos peixes capazes de manter a temperatura corporal mais alta que a da água ao seu redor (endotermia), o que lhe confere maior força e resistência muscular." },
      { title: "Sentidos Apurados", text: "Possui um olfato extremamente apurado, capaz de detectar uma gota de sangue a quilômetros de distância." },
      { title: "Habitat Cosmopolita", text: "É um animal cosmopolita, encontrado em águas temperadas e tropicais de todos os principais oceanos." }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
    threeModel: '/models/ChimeraVan.glb',
    backgroundPreset: "night",
    secondaryImages: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368'
    ],
    relatedContent: {
      fauna: [
        { label: "Baleia Jubarte", id: "baleia-jubarte" }
      ],
      documentaries: [
        { label: "Nórdicos à Navegações", id: "nordicos-navegacoes" }
      ]
    },
    location: {
      name: "Oceano Pacífico",
      description: "Comum na costa da África do Sul, Austrália e Califórnia."
    },
    duration: "70 anos (expectativa de vida)",
    releaseYear: 2022,
    director: "Natureza",
    castAndCrew: [
      { role: "Biólogo", name: "Dr. Shark" }
    ]
  },
  {
    id: 'tartaruga-marinha',
    category: 'Fauna',
    label: 'Tartaruga-Marinha',
    shortDescription: 'Réptil antigo que viaja milhares de quilômetros para desovar.',
    longDescription: 'As tartarugas-marinhas são répteis pré-históricos que habitam os oceanos há mais de 100 milhões de anos, tendo coexistido com os dinossauros. Existem sete espécies, cada uma adaptada a diferentes dietas e habitats. Elas desempenham papéis ecológicos cruciais, como controlar populações de águas-vivas e manter a saúde de recifes de coral e prados de grama marinha. Seu casco hidrodinâmico e nadadeiras fortes permitem que realizem longas migrações transoceânicas entre áreas de alimentação e as praias onde nasceram para desovar, um fenômeno de navegação ainda não totalmente compreendido pela ciência.',
    details: [
      { title: "Navegação Magnética", text: "Utilizam o campo magnético da Terra como um GPS natural para navegar em suas longas migrações e retornar aos locais de nidificação." },
      { title: "Respiração", text: "Podem prender a respiração por horas, dependendo do nível de atividade. Durante o sono, podem permanecer submersas por até sete horas." },
      { title: "Ciclo de Vida e Sexo", text: "A temperatura da areia onde os ovos são incubados determina o sexo dos filhotes: temperaturas mais quentes geram mais fêmeas, e temperaturas mais frias, mais machos." },
      { title: "Principais Ameaças", text: "As principais ameaças à sua sobrevivência são a poluição por plásticos (que confundem com alimento), a pesca acidental e a degradação de seus habitats de desova." }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548450171-807212c45217',
    threeModel: '/models/ChimeraVan.glb',
    backgroundPreset: "forest",
    secondaryImages: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    ],
    relatedContent: {
      documentaries: [
        { label: "Ponto NEMO", id: "ponto-nemo" }
      ],
      flora: [
        { label: "Grama Marinha", id: "grama-marinha" }
      ]
    },
    location: {
      name: "Praias do Atlântico",
      description: "Desova em praias do litoral brasileiro, especialmente em áreas protegidas."
    },
    duration: "80 anos (expectativa de vida)",
    releaseYear: 2021,
    director: "Natureza",
    castAndCrew: [
      { role: "Pesquisador", name: "Dra. Marina Costa" }
    ]
  },
];

export const floraData = [
  {
    id: 'alga-kelp',
    category: 'Flora',
    label: 'Alga Kelp',
    shortDescription: 'Forma vastas florestas subaquáticas que servem de habitat para diversas espécies marinhas.',
    longDescription: 'As algas kelp (ordem Laminariales) são um tipo de alga marrom que forma ecossistemas subaquáticos altamente produtivos, conhecidos como florestas de kelp. Não são plantas verdadeiras; em vez de raízes, possuem estruturas chamadas grampos (holdfasts) que as ancoram ao fundo do oceano. Suas "folhas" são chamadas de lâminas e flutuam em direção à superfície graças a vesículas cheias de gás chamadas pneumatocistos. Essas florestas verticais criam um habitat tridimensional complexo que serve de abrigo e alimento para centenas de espécies, desde invertebrados a mamíferos marinhos, sendo consideradas as "engenheiras do ecossistema".',
    details: [
      { title: "Estrutura (Não é uma Planta)", text: "Composta por três partes principais: o grampo (ancoragem), a estipe (caule) e as lâminas (folhas). Diferente das plantas, não possui sistema vascular." },
      { title: "Produtividade", text: "São um dos ecossistemas de crescimento mais rápido na Terra, podendo crescer até 60 cm por dia em condições ideais de luz e nutrientes." },
      { title: "Importância Econômica", text: "O kelp é colhido para extração de alginatos, usados como espessantes e estabilizantes em alimentos como sorvetes, molhos e cosméticos." },
      { title: "Ecologia", text: "A saúde das florestas de kelp está diretamente ligada a predadores como as lontras-marinhas, que controlam as populações de ouriços-do-mar, os quais se alimentam vorazmente de kelp." }
    ],
    imageUrl: 'https://cdn.britannica.com/26/170926-050-C820CF3E/Giant-kelp-forests-Catalina-Island-California-habitat.jpg',
    threeModel: '/models/ChimeraVan.glb',
    backgroundPreset: "city",
    secondaryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca'
    ],
    relatedContent: {
      fauna: [
        { label: "Peixe-leão", id: "peixe-leao" },
        { label: "Tartaruga-Marinha", id: "tartaruga-marinha" }
      ]
    },
    location: {
      name: "Costas da Califórnia",
      description: "Florestas de kelp são comuns ao longo da costa do Pacífico, especialmente na Califórnia."
    },
    duration: "Anual (ciclo de vida)",
    releaseYear: 2020,
    director: "Natureza",
    castAndCrew: [
      { role: "Botânico", name: "Dr. Verde Marinho" }
    ]
  },
  {
    id: 'fitoplancton',
    category: 'Flora',
    label: 'Fitoplâncton',
    shortDescription: 'Micro-organismos vegetais que são a base da cadeia alimentar e produzem grande parte do oxigênio do planeta.',
    longDescription: 'O fitoplâncton é um conjunto diversificado de organismos microscópicos fotossintetizantes que vivem na zona eufótica (iluminada) dos oceanos e corpos de água doce. Embora invisíveis a olho nu, eles formam a base de quase toda a teia alimentar aquática. Através da fotossíntese, eles consomem dióxido de carbono e liberam oxigênio, sendo responsáveis por produzir entre 50% e 80% do oxigênio da atmosfera terrestre. Eventos de proliferação massiva, conhecidos como "blooms", podem ser tão grandes que são visíveis do espaço e têm um impacto profundo no ciclo de carbono global.',
    details: [
      { title: "Composição Diversificada", text: "Inclui uma vasta gama de organismos, como diatomáceas (com carapaças de sílica), cianobactérias e dinoflagelados (alguns dos quais podem causar marés vermelhas)." },
      { title: "Bomba de Carbono", text: "Atua como uma 'bomba biológica de carbono', transportando carbono da superfície para o fundo do oceano quando morrem e afundam, um processo crucial para a regulação do clima." },
      { title: "Produção de Oxigênio", text: "Estima-se que o fitoplâncton produza mais oxigênio do que todas as florestas tropicais do mundo combinadas." },
      { title: "Habitat", text: "Presente em todos os oceanos, desde os polos até o equador, flutuando livremente nas águas superficiais onde há luz solar." }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534066068694-0f2c4164b38d',
    threeModel: '/models/ChimeraVan.glb',
    backgroundPreset: "sunset",
    secondaryImages: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b',
      'https://images.unsplash.com/photo-1522069792408-9ec1d87e074d'
    ],
    relatedContent: {
      geologicalPeriod: {
        label: "Proterozoico",
        id: "proterozoico"
      },
      fauna: [
        { label: "Baleia Jubarte", id: "baleia-jubarte" }
      ]
    },
    location: {
      name: "Superfície dos oceanos",
      description: "Encontrados em todos os mares, especialmente em regiões ricas em nutrientes."
    },
    duration: "Dias a semanas (ciclo de vida)",
    releaseYear: 2019,
    director: "Natureza",
    castAndCrew: [
      { role: "Microbiologista", name: "Dra. Plâncton" }
    ]
  },
  {
    id: 'grama-marinha',
    category: 'Flora',
    label: 'Grama Marinha',
    shortDescription: 'Plantas que formam prados submersos, essenciais para a saúde costeira e como berçário para peixes.',
    longDescription: 'A grama marinha é um grupo de plantas com flores (angiospermas) que se adaptaram a viver totalmente submersas em ambientes marinhos costeiros. Ao contrário das algas, elas possuem raízes, rizomas, folhas, flores e sementes, completando todo o seu ciclo de vida debaixo d\'água. Formam extensos prados subaquáticos em águas rasas e protegidas, que são habitats cruciais para a biodiversidade. Esses prados servem como berçários para muitas espécies de peixes e invertebrados, protegem a costa da erosão ao estabilizar o sedimento com suas raízes e melhoram a qualidade da água ao filtrar poluentes.',
    details: [
      { title: "Sequestro de Carbono", text: "Os prados de grama marinha são um dos ecossistemas mais eficientes do mundo no sequestro de carbono, armazenando-o no sedimento por milhares de anos, muitas vezes mais eficientemente que as florestas tropicais." },
      { title: "Reprodução", text: "Podem se reproduzir tanto assexuadamente, através da expansão de seus rizomas subterrâneos, quanto sexuadamente, através da polinização subaquática, onde o pólen é transportado pela água." },
      { title: "Fonte de Alimento Vital", text: "É a principal fonte de alimento para espécies ameaçadas e icônicas, como o peixe-boi e a tartaruga-verde." },
      { title: "Habitat", text: "Encontrada em águas rasas de lagoas, estuários e baías protegidas em todos os continentes, exceto na Antártida." }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523996502758-29a3a9364654',
    threeModel: '/models/ChimeraVan.glb',
    backgroundPreset: "forest",
    secondaryImages: [
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368',
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d'
    ],
    relatedContent: {
      fauna: [
        { label: "Tartaruga-Marinha", id: "tartaruga-marinha" }
      ]
    },
    location: {
      name: "Lagoas costeiras",
      description: "Comuns em regiões costeiras protegidas do Atlântico e Pacífico."
    },
    duration: "Perene",
    releaseYear: 2018,
    director: "Natureza",
    castAndCrew: [
      { role: "Ecólogo", name: "Dr. Verde Costa" }
    ]
  },
];