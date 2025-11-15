export const faunaData = [
  { 
    
    id: "baleia-jubarte",
    category: "Fauna",
    label: "Baleia Jubarte",
    geologicalPeriodId: "neogeno",
    shortDescription:
      "Mamífero marinho gigante conhecido por suas acrobacias e canto complexo.",
    longDescription:
      'A baleia-jubarte (Megaptera novaeangliae) é um cetáceo misticeto, uma das espécies de baleias mais carismáticas e estudadas. Famosa por seus saltos espetaculares fora d\'água e por um complexo sistema de vocalização, conhecido como "canto das baleias", que pode durar horas e se espalhar por vastas áreas oceânicas. Realiza uma das maiores migrações do reino animal, viajando de áreas de alimentação em águas polares para zonas de reprodução em águas tropicais. Alimenta-se principalmente de krill e pequenos peixes, utilizando uma técnica sofisticada chamada "rede de bolhas", onde um grupo de baleias expele ar para criar uma cortina de bolhas, aprisionando as presas.',
    details: [
      {
        title: "Vocalização",
        text: "Seu canto, entoado pelos machos, é complexo e estruturado, com temas que evoluem ao longo do tempo e são compartilhados culturalmente entre diferentes populações. Pode ser ouvido a até 30 km de distância debaixo d’água.",
      },
      {
        title: "Anatomia",
        text: "Possui nadadeiras peitorais excepcionalmente longas, que podem atingir quase um terço do comprimento do corpo, e tubérculos na cabeça, cada um contendo um único pelo sensorial.",
      },
      {
        title: "Conservação",
        text: "Esteve à beira da extinção devido à caça comercial, mas hoje é um símbolo de sucesso na conservação marinha, com populações se recuperando globalmente.",
      },
      {
        title: "Migração",
        text: "Percorre anualmente até 25.000 km, alternando entre áreas de alimentação e reprodução.",
      },
    ],
    imageUrl:
      "https://www.infoescola.com/wp-content/uploads/2017/07/jubarte-514076104.jpg",
    threeModel: "/models/baleia-jubarte.glb",
    backgroundPreset: "sunset",
    modelScale: 1.4, // Escala na pagina
    modelPosition: [0, 0, 0], // Posição na pagina
    modelPositionCard: [0, 0, 0], // Posição específica para o card
    modelScaleCard: 0.8, // Escala específica para o card
    secondaryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    ],
    relatedContent: {
      fauna: [
        { label: "Tubarão-Branco", id: "tubarao-branco" },
        { label: "Tartaruga-Marinha", id: "tartaruga-marinha" },
      ],
      documentaries: [{ label: "Ponto NEMO", id: "ponto-nemo" }],
      flora: [{ label: "Fitoplâncton", id: "fitoplancton" }],
    },
    location: {
      name: "Todos os Oceanos",
      description:
        "Águas costeiras do Brasil, especialmente no litoral da Bahia e Espírito Santo, são áreas de reprodução.",
    },
    duration: "60 anos (expectativa de vida)",
  },
  {
    id: "tubarao-branco",
    category: "Fauna",
    label: "Tubarão-Branco",
    featured: true,
    geologicalPeriodId: "neogeno",
    shortDescription:
      "Predador de topo com um olfato apurado, crucial para o equilíbrio dos ecossistemas marinhos.",
    longDescription:
      "O grande tubarão-branco (Carcharodon carcharias) é o maior peixe predador do mundo, uma máquina de caça evolutivamente aprimorada. É um predador de topo, vital para a saúde dos ecossistemas marinhos, regulando as populações de espécies como leões-marinhos e focas. Seus dentes serrilhados e em fileiras são substituídos continuamente ao longo da vida. Possui órgãos sensoriais, as ampolas de Lorenzini, que detectam os campos elétricos gerados por presas, permitindo-lhe caçar com extrema precisão, mesmo sem visão direta.",
    details: [
      {
        title: "Técnica de Caça",
        text: "Famoso por sua técnica de emboscada, onde ataca a presa por baixo em alta velocidade, muitas vezes saltando completamente para fora da água.",
      },
      {
        title: "Termorregulação",
        text: "É um dos poucos peixes capazes de manter a temperatura corporal mais alta que a da água ao seu redor (endotermia), o que lhe confere maior força e resistência muscular.",
      },
      {
        title: "Sentidos Apurados",
        text: "Possui um olfato extremamente apurado, capaz de detectar uma gota de sangue a quilômetros de distância.",
      },
    ],
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_750,h_422/https://blogdopescador.com/wp-content/uploads/2022/08/tubarao-branco-2.jpg",
    threeModel: "/models/white_shark.glb",
    backgroundPreset: "sunset",
    modelScale: 2.5,
    modelPosition: [0, -0.9, 0],
    modelPositionCard: [0, -0.6, 0], // Posição específica para o card
    modelScaleCard: 1.3,
    secondaryImages: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    ],
    relatedContent: {
      fauna: [{ label: "Baleia Jubarte", id: "baleia-jubarte" }],
      documentaries: [
        { label: "Nórdicos à Navegações", id: "nordicos-navegacoes" },
      ],
    },
    location: {
      name: "Águas Temperadas e Tropicais",
      description:
        "Comum na costa da África do Sul, Austrália, Califórnia e Mediterrâneo.",
    },
    duration: "70 anos (expectativa de vida)",
  },
  {
    id: "tartaruga-marinha",
    category: "Fauna",
    label: "Tartaruga-Marinha",
    geologicalPeriodId: "cretaceo",
    shortDescription:
      "Réptil antigo que viaja milhares de quilômetros para desovar.",
    longDescription:
      "As tartarugas-marinhas são répteis fascinantes que existem há mais de 100 milhões de anos. Elas viajam por longas distâncias para se alimentar e se reproduzir, e sempre retornam à praia onde nasceram para desovar. A poluição plástica e a perda de habitat são as principais ameaças à sua sobrevivência.",
    details: [
      {
        title: "Navegação Magnética",
        text: "Utilizam o campo magnético da Terra como um GPS natural para navegar em suas longas migrações e retornar aos locais de nidificação.",
      },
      {
        title: "Respiração",
        text: "Podem prender a respiração por horas, dependendo do nível de atividade. Durante o sono, podem permanecer submersas por até sete horas.",
      },
      {
        title: "Ciclo de Vida e Sexo",
        text: "A temperatura da areia onde os ovos são incubados determina o sexo dos filhotes: temperaturas mais quentes geram mais fêmeas, e temperaturas mais frias, mais machos.",
      },
    ],
    imageUrl:
      "https://tse1.mm.bing.net/th/id/OIP.kqn2xmICFBlGIi6mtFzpSwHaFb?rs=1&pid=ImgDetMain&o=7&rm=3",
    threeModel: "/models/sea_turtle.glb",
    backgroundPreset: "forest",
    modelScale: 2,
    modelPosition: [0, 0, 0],
    modelPositionCard: [0, -0.2, 0], // Posição específica para o card
    modelScaleCard: 1.1,
    secondaryImages: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    ],
    relatedContent: {
      documentaries: [{ label: "Ponto NEMO", id: "ponto-nemo" }],
      flora: [
        { label: "Grama Marinha", id: "grama-marinha" },
        { label: "Manguezais", id: "manguezais" },
      ],
    },
    location: {
      name: "Oceanos Tropicais e Subtropicais",
      description:
        "Desova em praias do litoral brasileiro, especialmente em áreas protegidas como o Projeto Tamar.",
    },
    duration: "80 anos (expectativa de vida)",
  },

  // --- NOVOS ITENS DE FAUNA ---
  {
    id: "polvo-comum",
    category: "Fauna",
    label: "Polvo-Comum",
    geologicalPeriodId: "carbonifero",
    shortDescription: "Mestre da camuflagem e da inteligência invertebrada.",
    longDescription:
      "O polvo-comum (Octopus vulgaris) é um molusco marinho célebre por sua notável inteligência e capacidade de adaptação. Considerado um dos invertebrados mais inteligentes, ele pode resolver problemas complexos, usar ferramentas e aprender por observação. Sua pele contém células especializadas chamadas cromatóforos, que lhe permitem mudar de cor e textura instantaneamente para uma camuflagem perfeita ou para comunicação. Possui três corações e seu sangue é azul devido à hemocianina, uma proteína à base de cobre para transportar oxigênio.",
    details: [
      {
        title: "Inteligência Notável",
        text: "Polvos são capazes de navegar por labirintos, abrir potes e até mesmo demonstrar personalidades distintas. Sua inteligência é um campo de estudo fascinante.",
      },
      {
        title: "Mecanismos de Defesa",
        text: "Além da camuflagem, polvos podem expelir uma nuvem de tinta para confundir predadores e usar sua flexibilidade para se esconder em fendas minúsculas.",
      },
    ],
    imageUrl:
      "https://truespiritanimal.org/wp-content/uploads/2023/11/image-197-1024x614.png",
    threeModel: "/models/octopus.glb",
    backgroundPreset: "dawn",
    modelScale: 2,
    modelPosition: [0, 0.5, 0],
    modelPositionCard: [0, 0.3, 0], // Posição específica para o card
    modelScaleCard: 0.8,
    secondaryImages: [],
    relatedContent: {
      flora: [{ label: "Recifes de Coral", id: "recifes-de-coral" }],
    },
    location: {
      name: "Oceanos Temperados e Tropicais",
      description:
        "Encontrado em recifes de coral, fundos rochosos e prados de ervas marinhas em todo o mundo.",
    },
    duration: "1-2 anos (expectativa de vida)",
  },
  {
    id: "peixe-palhaco",
    category: "Fauna",
    label: "Peixe-Palhaço",
    geologicalPeriodId: "paleogeno",
    shortDescription: "Ícone dos recifes que vive em simbiose com anêmonas.",
    longDescription:
      "O peixe-palhaço (gênero Amphiprion) é famoso por sua relação de mutualismo com as anêmonas-do-mar. Ele é coberto por uma camada de muco que o torna imune aos tentáculos venenosos da anêmona, que o protege de predadores. Em troca, o peixe-palhaço limpa a anêmona, afasta seus predadores e a ajuda a se alimentar. São hermafroditas sequenciais: todos nascem machos, e o macho dominante do grupo se torna fêmea quando a fêmea alfa morre.",
    details: [
      {
        title: "Simbiose com Anêmonas",
        text: "Essa parceria é um dos exemplos mais clássicos de mutualismo nos oceanos, onde ambas as espécies se beneficiam.",
      },
      {
        title: "Hierarquia Social",
        text: "Vivem em pequenos grupos com uma hierarquia rígida, liderados por uma fêmea dominante, que é a maior do grupo.",
      },
    ],
    imageUrl:
      "https://myaquarium.com.br/wp-content/uploads/2019/03/peixe-palhaco-amphiprion-ocellaris-2.jpg",
    threeModel: "/models/peixe-palhaco.glb",
    backgroundPreset: "sunset",
    modelScale: 2.3,
    modelPosition: [0, 0, 0],
    modelPositionCard: [0, 0, 0], // Posição específica para o card
    modelScaleCard: 1.6,
    secondaryImages: [],
    relatedContent: {
      flora: [{ label: "Anêmona-do-mar", id: "anemona-do-mar" }],
    },
    location: {
      name: "Recifes de Coral",
      description:
        "Habita águas quentes dos oceanos Pacífico e Índico, incluindo o Mar Vermelho.",
    },
    duration: "6-10 anos (expectativa de vida)",
  },
  {
    id: "lontra-marinha",
    category: "Fauna",
    label: "Lontra-Marinha",
    geologicalPeriodId: "quaternario",
    shortDescription:
      "A guardiã das florestas de kelp e o mamífero com a pelagem mais densa.",
    longDescription:
      "A lontra-marinha (Enhydra lutris) é uma espécie-chave, vital para a saúde das florestas de kelp. Ela se alimenta vorazmente de ouriços-do-mar, que, se não controlados, podem devastar as florestas de algas. Possui a pelagem mais densa do reino animal (até 150.000 pelos por cm²) para se isolar nas águas frias, pois não possui uma camada de gordura como outros mamíferos marinhos. É um dos poucos mamíferos, além dos primatas, a usar ferramentas, como pedras para quebrar conchas.",
    details: [
      {
        title: "Espécie-Chave",
        text: "Ao controlar a população de ouriços, as lontras permitem que as florestas de kelp prosperem, sustentando centenas de outras espécies.",
      },
      {
        title: "Uso de Ferramentas",
        text: "Elas frequentemente flutuam de costas, usando uma pedra apoiada na barriga como bigorna para quebrar mariscos e caranguejos.",
      },
    ],
    imageUrl:
      "https://www.infoescola.com/wp-content/uploads/2008/05/lontra-518995978.jpg",
    threeModel: "/models/otter.glb",
    backgroundPreset: "forest",
    modelScale: 1.5,
    modelPosition: [0, -1, 0],
    modelPositionCard: [0, -0.8, 0], // Posição específica para o card
    modelScaleCard: 0.8,
    secondaryImages: [],
    relatedContent: {
      flora: [{ label: "Alga Kelp", id: "alga-kelp" }],
    },
    location: {
      name: "Costas do Pacífico Norte",
      description:
        "Encontrada desde o norte do Japão, passando pela costa da Rússia, Alasca, até a Califórnia.",
    },
    duration: "15-20 anos (expectativa de vida)",
  },
  {
    id: "tubarao-baleia",
    category: "Fauna",
    label: "Tubarão-Baleia",
    geologicalPeriodId: "paleogeno",
    shortDescription:
      "O maior peixe do mundo, um gigante gentil que se alimenta por filtração.",
    longDescription:
      "O tubarão-baleia (Rhincodon typus) é o maior peixe conhecido, podendo atingir até 18 metros de comprimento. Apesar de seu tamanho colossal, é completamente inofensivo para os humanos. É um animal que se alimenta por filtração, nadando de boca aberta para capturar plâncton, pequenos peixes e lulas. Cada tubarão-baleia possui um padrão de manchas brancas único, que funciona como uma impressão digital, permitindo que os pesquisadores os identifiquem individualmente.",
    details: [
      {
        title: "Gigante Gentil",
        text: "Sua natureza dócil permite que mergulhadores e nadadores se aproximem pacificamente, tornando-o um ícone do ecoturismo marinho.",
      },
      {
        title: "Alimentação por Filtração",
        text: "Ele pode processar mais de 6.000 litros de água por hora através de suas brânquias para capturar alimento.",
      },
    ],
    imageUrl:
      "https://www.infoescola.com/wp-content/uploads/2010/02/tubarao-baleia-71323384.jpg",
    threeModel: "/models/whale_shark.glb",
    backgroundPreset: "sunset",
    modelScale: 1.6,
    modelPosition: [0, 0.5, 0],
    modelPositionCard: [0, 0, 0], // Posição específica para o card
    modelScaleCard: 0.8,
    secondaryImages: [],
    relatedContent: {
      flora: [{ label: "Fitoplâncton", id: "fitoplancton" }],
    },
    location: {
      name: "Mares Tropicais e Temperados-Quentes",
      description:
        "Encontrado em oceanos abertos, com grandes agregações sazonais em locais como México, Filipinas e Austrália.",
    },
    duration: "70-100 anos (expectativa de vida)",
  },
];

export const floraData = [
  {
    id: "alga-kelp",
    category: "Flora",
    label: "Alga Kelp",
    geologicalPeriodId: "neogeno",
    shortDescription:
      "Forma vastas florestas subaquáticas que servem de habitat para diversas espécies marinhas.",
    longDescription:
      "As algas kelp (ordem Laminariales) são um tipo de alga marrom que forma ecossistemas subaquáticos altamente produtivos, conhecidos como florestas de kelp. Elas fornecem abrigo e alimento para uma infinidade de espécies. Essas florestas são ecossistemas complexos e essenciais para a saúde dos oceanos, absorvendo grandes quantidades de CO2.",
    details: [
      {
        title: "Estrutura (Não é uma Planta)",
        text: "Composta por três partes principais: o grampo (ancoragem), a estipe (caule) e as lâminas (folhas). Diferente das plantas, não possui sistema vascular.",
      },
      {
        title: "Produtividade",
        text: "São um dos ecossistemas de crescimento mais rápido na Terra, podendo crescer até 60 cm por dia em condições ideais de luz e nutrientes.",
      },
      {
        title: "Ecologia",
        text: "A saúde das florestas de kelp está diretamente ligada a predadores como as lontras-marinhas, que controlam as populações de ouriços-do-mar.",
      },
    ],
    imageUrl:
      "https://cdn.britannica.com/26/170926-050-C820CF3E/Giant-kelp-forests-Catalina-Island-California-habitat.jpg",
    threeModel: "/models/kelp.glb",
    backgroundPreset: "sunset",
    modelScaleCard: 3.3,
    modelPositionCard: [0, -0.6, 0],
    secondaryImages: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    ],
    relatedContent: {
      fauna: [
        { label: "Lontra-Marinha", id: "lontra-marinha" },
        { label: "Tartaruga-Marinha", id: "tartaruga-marinha" },
      ],
    },
    location: {
      name: "Costas de Águas Frias",
      description:
        "Florestas de kelp são comuns ao longo da costa do Pacífico, especialmente na Califórnia, e em outras regiões de águas frias.",
    },
    duration: "Anual (ciclo de vida)",
  },
  {
    id: "fitoplancton",
    category: "Flora",
    label: "Fitoplâncton",
    geologicalPeriodId: "proterozoico",
    shortDescription:
      "Micro-organismos vegetais que são a base da cadeia alimentar e produzem grande parte do oxigênio do planeta.",
    longDescription:
      'O fitoplâncton é um conjunto diversificado de organismos microscópicos fotossintetizantes. Eles formam a base da cadeia alimentar oceânica e são responsáveis por produzir cerca de metade do oxigênio que respiramos através da fotossíntese. Eventos de proliferação massiva, conhecidos como "blooms", podem ser tão grandes que são visíveis do espaço.',
    details: [
      {
        title: "Bomba de Carbono",
        text: "Atua como uma 'bomba biológica de carbono', transportando carbono da superfície para o fundo do oceano quando morrem e afundam, um processo crucial para a regulação do clima.",
      },
      {
        title: "Produção de Oxigênio",
        text: "Estima-se que o fitoplâncton produza mais oxigênio do que todas as florestas tropicais do mundo combinadas.",
      },
    ],
    imageUrl:
      "https://tse3.mm.bing.net/th/id/OIP.yU6w0apn2jlPIho6KSlbYwHaEL?w=756&h=426&rs=1&pid=ImgDetMain&o=7&rm=3",
    threeModel: "/models/ChimeraVan.glb",
    backgroundPreset: "sunset",
    secondaryImages: [
      "https://images.unsplash.com/photo-1522069792408-9ec1d87e074d",
    ],
    relatedContent: {
      fauna: [
        { label: "Baleia Jubarte", id: "baleia-jubarte" },
        { label: "Tubarão-Baleia", id: "tubarao-baleia" },
      ],
    },
    location: {
      name: "Superfície dos Oceanos (Zona Fótica)",
      description:
        "Encontrados em todos os mares e oceanos onde há luz solar para a fotossíntese.",
    },
    duration: "Dias a semanas (ciclo de vida)",
  },
  {
    id: "grama-marinha",
    category: "Flora",
    label: "Grama Marinha",
    geologicalPeriodId: "cretaceo",
    shortDescription:
      "Plantas que formam prados submersos, essenciais para a saúde costeira.",
    longDescription:
      "A grama marinha não é uma alga, mas sim uma planta com flores que vive totalmente submersa. Os prados de grama marinha são habitats incrivelmente importantes, funcionando como berçários para peixes, estabilizando o sedimento para proteger as costas da erosão e sequestrando grandes quantidades de carbono.",
    details: [
      {
        title: "Sequestro de Carbono",
        text: "Os prados de grama marinha são um dos ecossistemas mais eficientes do mundo no sequestro de carbono, armazenando-o no sedimento por milhares de anos.",
      },
      {
        title: "Fonte de Alimento Vital",
        text: "É a principal fonte de alimento para espécies ameaçadas e icônicas, como o peixe-boi e a tartaruga-verde.",
      },
    ],
    imageUrl:
      "https://i.pinimg.com/736x/e4/54/8c/e4548ce608b1ac5067d575cb85c79d14.jpg",
    threeModel: "/models/ChimeraVan.glb",
    backgroundPreset: "forest",
    secondaryImages: [
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    ],
    relatedContent: {
      fauna: [{ label: "Tartaruga-Marinha", id: "tartaruga-marinha" }],
    },
    location: {
      name: "Lagoas e Baías Costeiras",
      description:
        "Comuns em regiões costeiras protegidas de águas rasas em todos os continentes, exceto na Antártida.",
    },
    duration: "Perene",
  },

  // --- NOVOS ITENS DE FLORA ---
  {
    id: "recifes-de-coral",
    category: "Flora",
    label: "Recifes de Coral",
    geologicalPeriodId: "ordoviciano",
    shortDescription:
      'As "cidades" subaquáticas, ecossistemas vibrantes construídos por pequenos animais.',
    longDescription:
      'Os recifes de coral são um dos ecossistemas mais diversos do planeta. São formados por pólipos, pequenos animais que secretam um esqueleto de carbonato de cálcio. A cor vibrante dos corais vem de uma alga simbiótica (zooxanthellae). O aumento da temperatura dos oceanos causa o "branqueamento", ameaçando todo o ecossistema.',
    details: [
      {
        title: "Biodiversidade",
        text: "Apesar de cobrirem menos de 1% do fundo do oceano, os recifes de coral abrigam cerca de 25% de toda a vida marinha.",
      },
      {
        title: "Ameaça do Branqueamento",
        text: "Quando a água esquenta, os corais expelem as algas que vivem em seus tecidos, perdendo sua principal fonte de alimento e cor, o que pode levar à sua morte.",
      },
    ],
    imageUrl:
      "https://img.freepik.com/fotos-premium/este-recife-de-coral-vibrante-e-diversificado-apresenta-uma-impressionante-variedade-de-corais-diferentes-uma-vista-aerea-de-um-recife-de-coral-vibrante-gerado-por-ia_538213-15139.jpg",
    threeModel: "/models/ChimeraVan.glb",
    backgroundPreset: "sunset",
    secondaryImages: [],
    relatedContent: {
      fauna: [
        { label: "Peixe-Palhaço", id: "peixe-palhaco" },
        { label: "Tartaruga-Marinha", id: "tartaruga-marinha" },
        { label: "Polvo-Comum", id: "polvo-comum" },
      ],
    },
    location: {
      name: "Águas Tropicais Rasas",
      description:
        "Encontrados em águas quentes, claras e rasas ao redor do equador, como na Grande Barreira de Corais da Austrália.",
    },
    duration: "Colônias podem viver por séculos",
  },
  {
    id: "anemona-do-mar",
    category: "Flora",
    label: "Anêmona-do-mar",
    geologicalPeriodId: "cambriano",
    shortDescription:
      "Predador séssil com tentáculos venenosos que serve de lar para certas espécies.",
    longDescription:
      "Relacionadas com as águas-vivas e os corais, as anêmonas são animais predadores sésseis. Elas se fixam em rochas ou no fundo do mar e usam seus tentáculos venenosos para capturar presas como peixes e crustáceos. Sua relação simbiótica com o peixe-palhaço é um dos exemplos mais famosos de cooperação no oceano.",
    details: [
      {
        title: "Caçadora Paciente",
        text: "A anêmona espera que uma presa desavisada toque em seus tentáculos, que disparam nematocistos venenosos para paralisá-la.",
      },
      {
        title: "Casa Segura",
        text: "A anêmona oferece proteção ao peixe-palhaço, que em troca a mantém limpa e afasta predadores.",
      },
    ],
    imageUrl:
      "https://img.freepik.com/premium-photo/sea-anemone-closeup-with-blurred-background-created-with-generative-ai_419341-21053.jpg",
    threeModel: "/models/ChimeraVan.glb",
    backgroundPreset: "night",
    secondaryImages: [],
    relatedContent: {
      fauna: [{ label: "Peixe-Palhaço", id: "peixe-palhaco" }],
    },
    location: {
      name: "Todos os Oceanos",
      description:
        "Habitam desde poças de maré costeiras até as profundezas abissais.",
    },
    duration: "Podem viver por décadas",
  },
  {
    id: "manguezais",
    category: "Flora",
    label: "Manguezais",
    geologicalPeriodId: "cretaceo",
    shortDescription:
      "Florestas costeiras tolerantes ao sal que são vitais como berçários marinhos.",
    longDescription:
      "Os manguezais são florestas de árvores tolerantes ao sal que crescem em zonas costeiras tropicais. Suas raízes complexas e entrelaçadas servem de refúgio e berçário para inúmeras espécies de peixes, caranguejos e moluscos. Além disso, os manguezais são uma barreira natural eficaz contra a erosão costeira e tempestades, e armazenam grandes quantidades de carbono.",
    details: [
      {
        title: "Berçário da Vida Marinha",
        text: "Muitas espécies de peixes comercialmente importantes passam seus estágios iniciais de vida protegidos entre as raízes dos manguezais.",
      },
      {
        title: "Defesa Costeira Natural",
        text: "A densa rede de raízes dos mangues ajuda a dissipar a energia das ondas, protegendo as comunidades costeiras de tempestades e tsunamis.",
      },
    ],
    imageUrl:
      "https://th.bing.com/th/id/R.0d8f3b63c9cb5ff29588dc7aebdf1107?rik=Kn%2bjcFpHKSiYUg&pid=ImgRaw&r=0.png",
    threeModel: "/models/ChimeraVan.glb",
    backgroundPreset: "forest",
    secondaryImages: [],
    relatedContent: {
      fauna: [{ label: "Tartaruga-Marinha", id: "tartaruga-marinha" }],
    },
    location: {
      name: "Costas Tropicais e Subtropicais",
      description:
        "Encontrados em zonas de transição entre o rio e o mar em países como Brasil, Indonésia e Nigéria.",
    },
    duration: "Árvores podem viver por séculos",
  },
  {
    id: "sargaco",
    category: "Flora",
    label: "Sargaço",
    geologicalPeriodId: "neogeno",
    shortDescription:
      'Alga marrom flutuante que forma vastos "mares" dourados no oceano aberto.',
    longDescription:
      "O sargaço (gênero Sargassum) é um tipo de macroalga que forma enormes massas flutuantes no oceano. O mais famoso é o Mar dos Sargaços, no Atlântico Norte, um ecossistema único que serve de habitat e criadouro para muitas espécies, incluindo enguias, caranguejos e o peixe-de-sargaço, que é perfeitamente camuflado. Recentemente, grandes proliferações têm causado acúmulos massivos em praias do Caribe e outras regiões.",
    details: [
      {
        title: "Um Mar Sem Costa",
        text: "O Mar dos Sargaços é o único mar do mundo que não é definido por costas terrestres, mas sim por correntes oceânicas que contêm as massas de algas.",
      },
      {
        title: "Habitat Flutuante",
        text: "As esteiras de sargaço oferecem um refúgio vital em mar aberto para os filhotes de tartarugas marinhas, protegendo-os de predadores.",
      },
    ],
    imageUrl:
      "https://acientistaagricola.pt/wp-content/uploads/2023/10/sargaco-1-1536x864.png",
    threeModel: "/models/ChimeraVan.glb",
    backgroundPreset: "sunset",
    secondaryImages: [],
    relatedContent: {
      fauna: [{ label: "Tartaruga-Marinha", id: "tartaruga-marinha" }],
    },
    location: {
      name: "Oceano Atlântico",
      description:
        "Principalmente no Mar dos Sargaços, mas grandes massas flutuantes podem ser encontradas em todo o Atlântico tropical.",
    },
    duration: "Variável",
  },
];
