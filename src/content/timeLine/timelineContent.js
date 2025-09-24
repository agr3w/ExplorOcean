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
      { x: '55%', y: '60%', text: 'Explosão de Vida: Nos oceanos primitivos, uma incrível diversidade de vida multicelular complexa surge em um período geologicamente curto.' },
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
    description: 'Início da vida com organismos procariontes primitivos. O vapor de água se condensou, formando os oceanos e a primeira crosta terrestre estável.'
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
    description: 'A "Grande Oxigenação" ocorreu, com o acúmulo de oxigênio na atmosfera. Surgiram as primeiras células eucarióticas e organismos multicelulares.'
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
    description: 'A "Explosão Cambriana" marca a rápida diversificação de vida complexa nos oceanos. Surgem os primeiros grupos de artrópodes e cordados.'
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
    description: 'Domínio de invertebrados marinhos. Ocorreu a primeira grande extinção em massa, provavelmente causada por glaciações.'
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
    description: 'As primeiras plantas com vasos colonizaram a terra, permitindo o surgimento de ecossistemas terrestres. Os peixes evoluíram significativamente.'
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
    description: 'A "Idade dos Peixes". Os primeiros anfíbios e florestas surgiram em terra firme. Formação de grandes recifes de corais.'
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
    description: 'Marcado por florestas exuberantes de samambaias e pântanos que deram origem às grandes reservas de carvão. Surgiram os primeiros répteis.'
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
    description: 'Formação do supercontinente Pangeia. A era terminou com a "Grande Morte", a maior extinção em massa da história da Terra.'
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
    description: 'O início da era dos dinossauros. Os primeiros mamíferos e répteis marinhos surgiram. Clima quente e seco.'
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
    description: 'Apogeu dos dinossauros gigantes. A Pangeia começou a se fragmentar, formando o oceano Atlântico primitivo. Surgiram as primeiras aves.'
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
    description: 'Surgimento das plantas com flores. Ocorreu a extinção dos dinossauros e de grande parte da vida na Terra, marcando o fim da era.'
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
    description: 'Recuperação da vida após a extinção. Os mamíferos se diversificaram rapidamente, ocupando os nichos deixados pelos dinossauros.'
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
    description: 'Os continentes se aproximaram das suas posições atuais. A evolução dos hominídeos começou na África. Surgimento de grandes mamíferos.'
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
    description: 'A era atual, caracterizada por ciclos de glaciação (eras do gelo) e pelo surgimento e desenvolvimento da espécie humana.'
  }
];