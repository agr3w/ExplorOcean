export const quizzesData = [
  {
    id: "placas-tectonicas-quiz",
    type: "quizzes",
    category: "Geologia Marinha",
    imageUrl: "https://img.freepik.com/vector-gratis/mapa-mundial-que-muestra-limites-placas-tectonicas_1308-68915.jpg?w=996&t=st=1693626198~exp=1693626798~hmac=e285a5d48ea94f605e1ee1fda7c57e21a532bbf55333eaba7065e6261f56f78e",
    label: "Quiz: Placas Tectônicas",
    shortDescription: "Teste seus conhecimentos sobre as placas que moldam o fundo do oceano.",
    longDescription: "Este quiz desafia você a mergulhar nas profundezas da geologia marinha. Responda perguntas sobre a formação de montanhas submarinas, zonas de subducção e a deriva continental, tudo relacionado ao assoalho oceânico. Prepare-se para testar o seu conhecimento sobre o nosso planeta em constante movimento.",
    link: "link-para-o-quiz",
    bgColor: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    difficulty: "Intermediário",
    numberOfQuestions: 8,
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
        question: "Qual é a principal força por trás do movimento das placas tectônicas?",
        options: ["Vento", "Correntes oceânicas", "Convecção no manto", "Erupções vulcânicas"],
        correctAnswer: "Convecção no manto",
      },
      {
        question: "Onde o magma sobe para criar nova crosta oceânica?",
        options: ["Fossas abissais", "Cordilheiras meso-oceânicas", "Ilhas vulcânicas", "Plataforma continental"],
        correctAnswer: "Cordilheiras meso-oceânicas",
      },
      {
        question: "O que acontece em uma zona de subducção?",
        options: ["Duas placas se afastam", "Uma placa desliza sob a outra", "Duas placas deslizam lateralmente", "Nenhuma das anteriores"],
        correctAnswer: "Uma placa desliza sob a outra",
      },
      {
        question: "Qual o nome do supercontinente que existiu há cerca de 300 milhões de anos?",
        options: ["Gondwana", "Laurásia", "Pangeia", "Rodínia"],
        correctAnswer: "Pangeia",
      },
      {
        question: "O 'Anel de Fogo do Pacífico' é conhecido por sua intensa atividade de:",
        options: ["Furacões", "Tornados", "Terremotos e vulcões", "Tsunamis"],
        correctAnswer: "Terremotos e vulcões",
      },
      {
        question: "A falha de San Andreas, na Califórnia, é um exemplo de qual tipo de limite de placa?",
        options: ["Convergente", "Divergente", "Transformante", "Subducção"],
        correctAnswer: "Transformante",
      },
      {
        question: "A cordilheira do Himalaia foi formada pela colisão de quais duas placas?",
        options: ["Placa do Pacífico e Placa Norte-Americana", "Placa de Nazca e Placa Sul-Americana", "Placa Indiana e Placa Eurasiática", "Placa Africana e Placa Antártica"],
        correctAnswer: "Placa Indiana e Placa Eurasiática",
      },
      {
        question: "Qual camada da Terra é composta pelas placas tectônicas?",
        options: ["Núcleo", "Manto", "Litosfera", "Astenosfera"],
        correctAnswer: "Litosfera",
      },
    ],
  },
  {
    id: "criaturas-profundezas-quiz",
    type: "quizzes",
    category: "Biologia Marinha",
    imageUrl: "https://i.pinimg.com/originals/9a/6d/a6/9a6da6f66a023d18a03e9c4991fb6d9e.jpg",
    label: "Quiz: Criaturas das Profundezas",
    shortDescription: "Você consegue identificar as criaturas mais estranhas e fascinantes do abismo?",
    longDescription: "Prepare-se para encontrar as criaturas mais bizarras e adaptadas do fundo do oceano. Este quiz testará sua capacidade de reconhecer peixes que brilham no escuro, lulas gigantes e outros seres que vivem em um ambiente de pressão extrema e ausência de luz. Descubra o quão bem você conhece o abismo marinho!",
    link: "link-para-o-quiz",
    bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    difficulty: "Difícil",
    numberOfQuestions: 8,
    duration: "15-20 min",
    relatedContent: {
      fauna: [
        { label: "Polvo-Comum", id: "polvo-comum" },
      ],
    },
    questions: [
      {
        question: "Qual animal marinho é conhecido por sua bioluminescência para atrair presas na escuridão?",
        options: ["Tartaruga-marinha", "Tubarão-baleia", "Peixe-lanterna", "Golfinho"],
        correctAnswer: "Peixe-lanterna",
      },
      {
        question: "Qual a função dos fotóforos em algumas criaturas do abismo?",
        options: ["Causar fotossíntese", "Gerar luz", "Armazenar oxigênio", "Proteger contra predadores"],
        correctAnswer: "Gerar luz",
      },
      // --- PERGUNTAS ADICIONAIS ---
      {
        question: "O que é 'gigantismo abissal'?",
        options: ["Uma doença de peixes", "A tendência de espécies de águas profundas serem maiores que seus parentes de águas rasas", "Um tipo de vulcão submarino", "A velocidade da luz na água"],
        correctAnswer: "A tendência de espécies de águas profundas serem maiores que seus parentes de águas rasas",
      },
      {
        question: "Qual criatura usa uma 'isca' bioluminescente na ponta de uma antena para atrair presas?",
        options: ["Peixe-palhaço", "Lula-vampiro", "Peixe-pescador (Anglerfish)", "Tubarão-duende"],
        correctAnswer: "Peixe-pescador (Anglerfish)",
      },
      {
        question: "Fontes hidrotermais no fundo do oceano sustentam ecossistemas baseados em:",
        options: ["Fotossíntese", "Quimiossíntese", "Energia solar", "Energia das marés"],
        correctAnswer: "Quimiossíntese",
      },
      {
        question: "A 'neve marinha' que alimenta muitas criaturas do fundo do mar é composta principalmente de:",
        options: ["Cristais de sal", "Microplásticos", "Detritos orgânicos da superfície", "Areia"],
        correctAnswer: "Detritos orgânicos da superfície",
      },
      {
        question: "A lula-vampiro (Vampyroteuthis infernalis) se defende de predadores ao:",
        options: ["Lançar tinta preta", "Ejetar uma nuvem de muco bioluminescente", "Nadar em alta velocidade", "Fingir-se de morta"],
        correctAnswer: "Ejetar uma nuvem de muco bioluminescente",
      },
      {
        question: "Qual a principal adaptação dos peixes abissais à imensa pressão da água?",
        options: ["Corpos com ossos muito densos", "Ausência de bexiga natatória", "Corpos gelatinosos e com pouca estrutura óssea", "Escamas muito grossas"],
        correctAnswer: "Corpos gelatinosos e com pouca estrutura óssea",
      },
    ],
  },
  {
    id: "mares-e-lua-quiz",
    type: "quizzes",
    category: "Astronomia",
    imageUrl: "https://th.bing.com/th/id/OIP.kqkWd01Yfnc8ymK9mqjk9gHaD4?w=323&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    label: "Quiz: Marés e Lua",
    shortDescription: "Entenda a relação entre a astronomia e as marés oceânicas.",
    longDescription: "Este quiz explora a incrível conexão entre o espaço e os oceanos. Você vai responder perguntas sobre como a atração gravitacional da Lua e do Sol influenciam as marés e por que elas variam de intensidade. Uma maneira divertida de entender a física por trás das ondas que chegam à praia.",
    link: "link-para-o-quiz",
    bgColor: "linear-gradient(135deg, #53E6BA 0%, #30A6F4 100%)",
    difficulty: "Fácil",
    numberOfQuestions: 6,
    duration: "5-10 min",
    relatedContent: {},
    questions: [
      {
        question: "Qual corpo celeste tem a maior influência sobre as marés da Terra?",
        options: ["O Sol", "A Lua", "Marte", "Vênus"],
        correctAnswer: "A Lua",
      },
      {
        question: "O que são marés de sizígia (marés vivas)?",
        options: ["Marés com a menor amplitude", "Marés com a maior amplitude", "Marés que ocorrem à noite", "Marés que ocorrem em dias de tempestade"],
        correctAnswer: "Marés com a maior amplitude",
      },
      // --- PERGUNTAS ADICIONAIS ---
      {
        question: "Quando ocorrem as marés de sizígia (marés vivas)?",
        options: ["Apenas durante o verão", "Quando o Sol, a Terra e a Lua estão alinhados (Lua Nova e Cheia)", "Quando o Sol e a Lua estão em ângulos retos em relação à Terra", "Apenas durante eclipses"],
        correctAnswer: "Quando o Sol, a Terra e a Lua estão alinhados (Lua Nova e Cheia)",
      },
      {
        question: "O que são marés de quadratura (marés mortas)?",
        options: ["Marés com a menor amplitude", "Marés com a maior amplitude", "Marés que ocorrem de dia", "Marés que ocorrem em rios"],
        correctAnswer: "Marés com a menor amplitude",
      },
      {
        question: "Quantas marés altas ocorrem, tipicamente, em um período de 24 horas em uma área costeira?",
        options: ["Uma", "Duas", "Três", "Quatro"],
        correctAnswer: "Duas",
      },
      {
        question: "A força que causa as marés é principalmente devido à:",
        options: ["Diferença na força gravitacional em lados opostos da Terra", "Pressão do vento solar", "Rotação da Terra apenas", "Atividade vulcânica submarina"],
        correctAnswer: "Diferença na força gravitacional em lados opostos da Terra",
      },
    ],
  },

  {
    id: "recifes-de-coral-quiz",
    type: "quizzes",
    category: "Ecossistemas",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.jMor3cIeOz-jrkXNobP0mgHaEP?rs=1&pid=ImgDetMain&o=7&rm=3",
    label: "Quiz: Recifes de Coral",
    shortDescription: "Você conhece a importância e a fragilidade das 'florestas tropicais do mar'?",
    longDescription: "Mergulhe no ecossistema mais biodiverso do planeta! Este quiz aborda a biologia dos corais, a incrível variedade de vida que eles abrigam e as ameaças que enfrentam, como o branqueamento. Teste seu conhecimento sobre essas cidades subaquáticas.",
    link: "link-para-o-quiz",
    bgColor: "linear-gradient(135deg, #f77062 0%, #fe5196 100%)",
    difficulty: "Intermediário",
    numberOfQuestions: 8,
    duration: "10-15 min",
    relatedContent: {
      flora: [{ label: "Recifes de Coral", id: "recifes-de-coral" }],
      fauna: [{ label: "Peixe-Palhaço", id: "peixe-palhaco" }],
      documentaries: [{ label: "Em Busca dos Corais", id: "em-busca-dos-corais" }],
    },
    questions: [
      {
        question: "Corais são classificados como:",
        options: ["Plantas", "Rochas", "Animais", "Fungos"],
        correctAnswer: "Animais",
      },
      {
        question: "Qual o nome da relação simbiótica entre corais e as microalgas que vivem neles?",
        options: ["Parasitismo", "Comensalismo", "Mutualismo", "Predatismo"],
        correctAnswer: "Mutualismo",
      },
      {
        question: "O que causa o fenômeno do 'branqueamento' dos corais?",
        options: ["Excesso de plâncton", "Falta de sal na água", "Aumento da temperatura da água", "Poluição sonora"],
        correctAnswer: "Aumento da temperatura da água",
      },
      {
        question: "Qual estrutura esquelética os corais duros secretam para formar os recifes?",
        options: ["Silicato", "Quitina", "Carbonato de cálcio", "Celulose"],
        correctAnswer: "Carbonato de cálcio",
      },
      {
        question: "A Grande Barreira de Corais, o maior sistema de recifes do mundo, está localizada na costa de qual país?",
        options: ["Brasil", "África do Sul", "Filipinas", "Austrália"],
        correctAnswer: "Austrália",
      },
      {
        question: "Peixes-palhaço vivem em simbiose com qual outro habitante dos recifes?",
        options: ["Estrelas-do-mar", "Anêmonas-do-mar", "Ouriços-do-mar", "Esponjas"],
        correctAnswer: "Anêmonas-do-mar",
      },
      {
        question: "Qual a principal fonte de alimento para os pólipos de coral?",
        options: ["Luz solar direta", "Pequenos organismos de plâncton e nutrientes das algas simbióticas", "Detritos de rochas", "Outros corais"],
        correctAnswer: "Pequenos organismos de plâncton e nutrientes das algas simbióticas",
      },
      {
        question: "A acidificação dos oceanos, causada pelo aumento de CO2, ameaça os corais por:",
        options: ["Torná-los mais coloridos", "Aumentar a temperatura", "Dificultar a formação de seus esqueletos", "Atrair mais predadores"],
        correctAnswer: "Dificultar a formação de seus esqueletos",
      },
    ],
  },
  {
    id: "cetaceos-quiz",
    type: "quizzes",
    category: "Biologia Marinha",
    imageUrl: "https://portalmorada.com.br/wp-content/uploads/2022/01/planeta-terra-inicia-serie-gigantes-do-oceano-4NGn-1920x1079.jpg",
    label: "Quiz: Gigantes do Oceano",
    shortDescription: "Teste seu conhecimento sobre os mamíferos mais inteligentes e majestosos do mar.",
    longDescription: "De golfinhos ágeis a baleias colossais, os cetáceos dominam os oceanos com sua inteligência e complexidade social. Este quiz vai desafiar o que você sabe sobre esses gigantes, abordando tópicos como comunicação, ecolocalização e suas incríveis migrações.",
    link: "link-para-o-quiz",
    bgColor: "linear-gradient(135deg, #17ead9 0%, #6078ea 100%)",
    difficulty: "Fácil",
    numberOfQuestions: 8,
    duration: "10-15 min",
    relatedContent: {
      fauna: [{ label: "Baleia Jubarte", id: "baleia-jubarte" }],
      documentaries: [{ label: "Planeta Azul II", id: "planeta-azul-2" }],
    },
    questions: [
      {
        question: "Baleias e golfinhos pertencem a qual ordem de mamíferos marinhos?",
        options: ["Pinípedes", "Sirênios", "Cetáceos", "Carnívoros"],
        correctAnswer: "Cetáceos",
      },
      {
        question: "O que é ecolocalização, usada por muitos golfinhos?",
        options: ["Um tipo de canto", "Comunicação por cores", "Um sonar biológico para navegar e caçar", "Respiração fora d'água"],
        correctAnswer: "Um sonar biológico para navegar e caçar",
      },
      {
        question: "Qual é o maior animal que já existiu na Terra?",
        options: ["Megalodon", "Baleia-azul", "Dinossauro Argentinossauro", "Baleia-jubarte"],
        correctAnswer: "Baleia-azul",
      },
      {
        question: "As orcas, também conhecidas como 'baleias assassinas', são na verdade:",
        options: ["Uma espécie de tubarão", "Focas gigantes", "A maior espécie de golfinho", "Parentes dos ursos polares"],
        correctAnswer: "A maior espécie de golfinho",
      },
      {
        question: "O 'canto' complexo e longo é uma característica famosa de qual baleia?",
        options: ["Baleia-azul", "Baleia-franca", "Baleia-jubarte", "Baleia-cachalote"],
        correctAnswer: "Baleia-jubarte",
      },
      {
        question: "Qual a principal diferença entre as baleias com dentes (Odontocetos) e as com barbatanas (Misticetos)?",
        options: ["Tamanho", "Cor", "Método de alimentação", "Habitat"],
        correctAnswer: "Método de alimentação",
      },
      {
        question: "Onde fica o espiráculo (orifício de respiração) de uma baleia?",
        options: ["Na cauda", "Na lateral do corpo", "No topo da cabeça", "Debaixo da boca"],
        correctAnswer: "No topo da cabeça",
      },
      {
        question: "Golfinhos são conhecidos por serem animais extremamente:",
        options: ["Solitários", "Agressivos", "Sociais", "Lentos"],
        correctAnswer: "Sociais",
      },
    ],
  },
];