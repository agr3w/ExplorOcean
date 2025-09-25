export const timelineData = [
  // Éon Pré-cambriano
  {
    eon: 'Pré-cambriano',
    era: 'Pré-cambriano',
    id: 'hadeano',
    label: 'Hadeano',
    period: '4.6 a 4 bilhões de anos atrás',
    start: 4600, end: 4000,
    mapImage: '/src/assets/hadeano-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1542366329-a35216321262?auto=format&fit=crop&w=1920&q=80',
    description: 'A Terra primitiva, em estágio de formação. A superfície era um oceano de magma, com bombardeio constante de asteroides. A vida ainda não existia.',
    pointsOfInterest: [
      { x: '50%', y: '50%', text: 'Formação da Lua: Um protoplaneta do tamanho de Marte colide com a Terra, criando a Lua a partir dos detritos do impacto.' }
    ],
    planetStats: {
      oxygenLevel: '~0%',
      avgTemp: '> 200°C',
      dominantLife: 'Inexistente'
    }
  },
  {
    eon: 'Pré-cambriano',
    era: 'Pré-cambriano',
    id: 'arqueano',
    label: 'Arqueano',
    period: '4 a 2.5 bilhões de anos atrás',
    start: 4000, end: 2500,
    mapImage: '/src/assets/arqueano-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1920&q=80',
    description: 'Início da vida com organismos procariontes primitivos. O vapor de água se condensou, formando os oceanos e a primeira crosta terrestre estável.',
    pointsOfInterest: [
      { x: '60%', y: '65%', text: 'Surgimento da Vida: As primeiras formas de vida, procariontes unicelulares, aparecem nos oceanos primitivos.' }
    ],
    planetStats: {
      oxygenLevel: '< 1%',
      avgTemp: '~90°C',
      dominantLife: 'Procariontes (Bactérias)'
    }
  },
  {
    eon: 'Pré-cambriano',
    era: 'Pré-cambriano',
    id: 'proterozoico',
    label: 'Proterozoico',
    period: '2.5 bilhões a 541 milhões de anos atrás',
    start: 2500, end: 541,
    mapImage: '/src/assets/proterozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1517264188248-6abc5923f169?auto=format&fit=crop&w=1920&q=80',
    description: 'A "Grande Oxigenação" ocorreu, com o acúmulo de oxigênio na atmosfera. Surgiram as primeiras células eucarióticas e organismos multicelulares.',
    pointsOfInterest: [
      { x: '50%', y: '40%', text: 'Grande Oxigenação: Cianobactérias produzem oxigênio em massa, transformando a atmosfera e permitindo a vida complexa.' }
    ],
    planetStats: {
      oxygenLevel: '~10%',
      avgTemp: '~15°C',
      dominantLife: 'Eucariontes / Algas'
    }
  },

  // Éon Fanerozoico - Era Paleozoica
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'cambriano',
    label: 'Cambriano',
    period: '541 a 485 milhões de anos atrás',
    start: 541, end: 485,
    mapImage: '/src/assets/paleozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1524704793663-82a124a68218?auto=format&fit=crop&w=1920&q=80',
    description: 'A "Explosão Cambriana" marca a rápida diversificação de vida complexa nos oceanos. Surgem os primeiros grupos de artrópodes e cordados.',
    pointsOfInterest: [
      { x: '55%', y: '60%', text: 'Explosão Cambriana: Uma rápida diversificação da vida marinha complexa dá origem à maioria dos filos animais modernos.' }
    ],
    planetStats: {
      oxygenLevel: '~13%',
      avgTemp: '~22°C',
      dominantLife: 'Invertebrados Marinhos'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'ordoviciano',
    label: 'Ordoviciano',
    period: '485 a 443 milhões de anos atrás',
    start: 485, end: 443,
    mapImage: '/src/assets/paleozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1920&q=80',
    description: 'Domínio de invertebrados marinhos. Ocorreu a primeira grande extinção em massa, provavelmente causada por glaciações.',
    pointsOfInterest: [
      { x: '45%', y: '55%', text: 'Primeiros Recifes de Coral: Corais e outros organismos constroem os primeiros grandes recifes, criando novos habitats.' }
    ],
    planetStats: {
      oxygenLevel: '~15%',
      avgTemp: '~18°C',
      dominantLife: 'Peixes Primitivos / Cefalópodes'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'siluriano',
    label: 'Siluriano',
    period: '443 a 419 milhões de anos atrás',
    start: 443, end: 419,
    mapImage: '/src/assets/paleozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    description: 'As primeiras plantas com vasos colonizaram a terra, permitindo o surgimento de ecossistemas terrestres. Os peixes evoluíram significativamente.',
    pointsOfInterest: [
      { x: '60%', y: '40%', text: 'Conquista da Terra: As primeiras plantas vasculares e animais como escorpiões começam a colonizar o ambiente terrestre.' }
    ],
    planetStats: {
      oxygenLevel: '~18%',
      avgTemp: '~17°C',
      dominantLife: 'Primeiras Plantas Terrestres'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'devoniano',
    label: 'Devoniano',
    period: '419 a 359 milhões de anos atrás',
    start: 419, end: 359,
    mapImage: '/src/assets/paleozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80',
    description: 'A "Idade dos Peixes". Os primeiros anfíbios e florestas surgiram em terra firme. Formação de grandes recifes de corais.',
    pointsOfInterest: [
      { x: '50%', y: '45%', text: 'A Idade dos Peixes: Grande diversificação de peixes nos oceanos e o surgimento dos primeiros vertebrados terrestres (anfíbios).' }
    ],
    planetStats: {
      oxygenLevel: '~20%',
      avgTemp: '~20°C',
      dominantLife: 'Peixes / Primeiros Anfíbios'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'carbonifero',
    label: 'Carbonífero',
    period: '359 a 299 milhões de anos atrás',
    start: 359, end: 299,
    mapImage: '/src/assets/paleozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1445964047600-cd3d7845a3f7?auto=format&fit=crop&w=1920&q=80',
    description: 'Marcado por florestas exuberantes de samambaias e pântanos que deram origem às grandes reservas de carvão. Surgiram os primeiros répteis.',
    pointsOfInterest: [
      { x: '55%', y: '35%', text: 'Florestas de Carvão: Extensas florestas de samambaias gigantes e pântanos cobrem a terra, formando os depósitos de carvão que usamos hoje.' }
    ],
    planetStats: {
      oxygenLevel: '~35%',
      avgTemp: '~22°C',
      dominantLife: 'Insetos Gigantes / Anfíbios'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'permiano',
    label: 'Permiano',
    period: '299 a 252 milhões de anos atrás',
    start: 299, end: 252,
    mapImage: '/src/assets/paleozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80',
    description: 'Formação do supercontinente Pangeia. A era terminou com a "Grande Morte", a maior extinção em massa da história da Terra.',
    pointsOfInterest: [
      { x: '50%', y: '50%', text: 'A Grande Extinção: O maior evento de extinção em massa da história da Terra dizima mais de 90% da vida marinha.' }
    ],
    planetStats: {
      oxygenLevel: '~23%',
      avgTemp: '~20°C',
      dominantLife: 'Répteis Primitivos (Sinapsídeos)'
    }
  },

  // Éon Fanerozoico - Era Mesozoica
  {
    eon: 'Fanerozoico',
    era: 'Mesozoica',
    id: 'triassico',
    label: 'Triássico',
    period: '252 a 201 milhões de anos atrás',
    start: 252, end: 201,
    mapImage: 'https://tse1.mm.bing.net/th/id/OIP.1hlINxlIO6KuP-GNVNAWrgHaCe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    backgroundUrl: 'https://images.unsplash.com/photo-1599453181223-382c1613212a?auto=format&fit=crop&w=1920&q=80',
    description: 'O início da era dos dinossauros. Os primeiros mamíferos e répteis marinhos surgiram. Clima quente e seco.',
    pointsOfInterest: [
      { x: '58%', y: '48%', text: 'Ascensão dos Dinossauros: Após a extinção do Permiano, os primeiros dinossauros e mamíferos evoluem e começam a se espalhar.' }
    ],
    planetStats: {
      oxygenLevel: '~16%',
      avgTemp: '~25°C',
      dominantLife: 'Primeiros Dinossauros / Répteis'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Mesozoica',
    id: 'jurassico',
    label: 'Jurássico',
    period: '201 a 145 milhões de anos atrás',
    start: 201, end: 145,
    mapImage: 'https://tse1.mm.bing.net/th/id/OIP.1hlINxlIO6KuP-GNVNAWrgHaCe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    backgroundUrl: 'https://images.unsplash.com/photo-1599453181223-382c1613212a?auto=format&fit=crop&w=1920&q=80',
    description: 'Apogeu dos dinossauros gigantes. A Pangeia começou a se fragmentar, formando o oceano Atlântico primitivo. Surgiram as primeiras aves.',
    pointsOfInterest: [
      { x: '40%', y: '45%', text: 'Reinado dos Gigantes: Dinossauros saurópodes dominam a terra, enquanto os primeiros pássaros evoluem.' }
    ],
    planetStats: {
      oxygenLevel: '~26%',
      avgTemp: '~20°C',
      dominantLife: 'Dinossauros Gigantes'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Mesozoica',
    id: 'cretaceo',
    label: 'Cretáceo',
    period: '145 a 66 milhões de anos atrás',
    start: 145, end: 66,
    mapImage: 'https://tse1.mm.bing.net/th/id/OIP.1hlINxlIO6KuP-GNVNAWrgHaCe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    backgroundUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1920&q=80',
    description: 'Surgimento das plantas com flores. Ocorreu a extinção dos dinossauros e de grande parte da vida na Terra, marcando o fim da era.',
    pointsOfInterest: [
      { x: '25%', y: '60%', text: 'Impacto Extintor: Um asteroide atinge a Terra, causando a extinção dos dinossauros e 75% da vida no planeta.' }
    ],
    planetStats: {
      oxygenLevel: '~30%',
      avgTemp: '~25°C',
      dominantLife: 'Dinossauros / Plantas com Flores'
    }
  },

  // Éon Fanerozoico - Era Cenozoica
  {
    eon: 'Fanerozoico',
    era: 'Cenozoica',
    id: 'paleogeno',
    label: 'Paleogeno',
    period: '66 a 23 milhões de anos atrás',
    start: 66, end: 23,
    mapImage: '/src/assets/cenozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1517264188248-6abc5923f169?auto=format&fit=crop&w=1920&q=80',
    description: 'Recuperação da vida após a extinção. Os mamíferos se diversificaram rapidamente, ocupando os nichos deixados pelos dinossauros.',
    pointsOfInterest: [
      { x: '50%', y: '50%', text: 'A Era dos Mamíferos Começa: Com a extinção dos dinossauros, os mamíferos se diversificam rapidamente.' }
    ],
    planetStats: {
      oxygenLevel: '~28%',
      avgTemp: '~18°C',
      dominantLife: 'Mamíferos Primitivos'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Cenozoica',
    id: 'neogeno',
    label: 'Neogeno',
    period: '23 a 2.6 milhões de anos atrás',
    start: 23, end: 2.6,
    mapImage: '/src/assets/cenozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80',
    description: 'Os continentes se aproximaram das suas posições atuais. A evolução dos hominídeos começou na África. Surgimento de grandes mamíferos.',
    pointsOfInterest: [
      { x: '52%', y: '55%', text: 'Evolução Humana Primitiva: Surgem os primeiros hominídeos, nossos ancestrais distantes, na África.' }
    ],
    planetStats: {
      oxygenLevel: '~22%',
      avgTemp: '~16°C',
      dominantLife: 'Grandes Mamíferos / Hominídeos'
    }
  },
  {
    eon: 'Fanerozoico',
    era: 'Cenozoica',
    id: 'quaternario',
    label: 'Quaternário',
    period: '2.6 milhões de anos atrás até o presente',
    start: 2.6, end: 0,
    mapImage: '/src/assets/cenozoico-map.jpg',
    backgroundUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80',
    description: 'A era atual, caracterizada por ciclos de glaciação (eras do gelo) e pelo surgimento e desenvolvimento da espécie humana.',
    pointsOfInterest: [
      { x: '52%', y: '45%', text: 'A Era do Gelo e o Homo sapiens: Caracterizada por eras glaciais e o surgimento da nossa espécie, que se espalhou pelo globo.' }
    ],
    planetStats: {
      oxygenLevel: '21%',
      avgTemp: '~14°C',
      dominantLife: 'Mamíferos / Humanos'
    }
  }
];