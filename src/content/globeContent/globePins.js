export const globePinsData = [
  {
    id: 'mariana-trench',
    type: 'geologia',
    label: 'Fossa das Marianas',
    lat: 11.35,
    lon: 142.2,
    content: {
      title: 'Fossa das Marianas',
      text: 'O ponto mais profundo conhecido na Terra, chegando a quase 11.000 metros abaixo do nível do mar. A pressão aqui é mais de 1.000 vezes maior que na superfície.',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/044/426/910/large_2x/mariana-trench-sea-illustration-infographics-or-analysis-depth-of-ocean-free-vector.jpg',
      details: 'A fossa é o resultado de uma zona de subducção, onde a Placa do Pacífico mergulha sob a Placa das Marianas.',
      quiz: [
        { q: 'Qual a profundidade aproximada da Fossa das Marianas?', a: '11km' }
      ]
    }
  },
  {
    id: 'great-barrier-reef',
    type: 'biologia',
    label: 'Grande Barreira de Coral',
    lat: -18.28,
    lon: 147.7,
    content: {
      title: 'Grande Barreira de Coral',
      text: 'O maior sistema de recifes de coral do mundo, visível do espaço. Abriga uma biodiversidade marinha incomparável, mas está severamente ameaçada pelo branqueamento de corais.',
      imageUrl: 'https://www.eomap.com/wp-content/uploads/2019/02/EOMAP_Great-Barrier-Reef.jpg',
      relatedLinks: [
        { label: 'Saiba mais sobre os Corais', to: '/Flora/recifes-de-coral' },
        { label: 'Conheça o Peixe-Palhaço', to: '/Fauna/peixe-palhaco' }
      ]
    }
  },
  {
    id: 'titanic-wreck',
    type: 'historia',
    label: 'Destroços do Titanic',
    lat: 41.72,
    lon: -49.94,
    content: {
      title: 'Destroços do Titanic',
      text: 'Localizado a 3.800 metros de profundidade no Atlântico Norte, o RMS Titanic é talvez o naufrágio mais famoso da história, descoberto em 1985.',
      imageUrl: 'https://media.cntraveler.com/photos/58c95ac4386764097941c765/master/pass/titantic-wreckage-site-GettyImages-520112444.jpg',
      details: 'A exploração dos destroços é extremamente difícil devido à profundidade e à "neve marinha" constante que cobre o local.'
    }
  },
];