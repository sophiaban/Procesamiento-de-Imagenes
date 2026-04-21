// Datos de los países

const countries = {
  argentina: {
    name: "Argentina",
    emoji: "🇦🇷",
    color: "#74ACDF",
    stats: {
      "Copas del Mundo": "3 (1978, 1986, 2022)",
      "Mejor Resultado": "Campeón",
      "Participaciones": "18",
      "Grupo 2026": "Por definir"
    },
    description: "La selección argentina, actual campeona del mundo, buscará defender su título en el Mundial 2026 con Lionel Messi como figura principal."
  },
  australia: {
    name: "Australia",
    emoji: "🇦🇺",
    color: "#012169",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Octavos de Final (2006)",
      "Participaciones": "6",
      "Grupo 2026": "Por definir"
    },
    description: "Los Socceroos buscan superar su mejor actuación histórica en el Mundial 2026 con un equipo en crecimiento."
  },
  brasil: {
    name: "Brasil",
    emoji: "🇧🇷",
    color: "#009739",
    stats: {
      "Copas del Mundo": "5 (1958, 1962, 1970, 1994, 2002)",
      "Mejor Resultado": "Campeón",
      "Participaciones": "22",
      "Grupo 2026": "Por definir"
    },
    description: "La canarinha, la selección más exitosa de la historia, busca su sexta Copa del Mundo en 2026 con una nueva generación de talentos."
  },
  canada: {
    name: "Canadá",
    emoji: "🇨🇦",
    color: "#FF0000",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Fase de Grupos",
      "Participaciones": "2",
      "Grupo 2026": "Por definir"
    },
    description: "Como anfitrión del Mundial 2026, Canadá espera hacer historia en casa con un equipo en constante mejora."
  },
colombia: {
    name: "Colombia",
    emoji: "🇨🇴",
    color: "#FCD116",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Cuartos de Final (2014)",
      "Participaciones": "6",
      "Grupo 2026": "Por definir"
    },
    description: "La selección colombiana busca repetir su exitosa campaña de 2014 con un equipo lleno de talento y garra."
  },
  "corea-del-sur": {
    name: "Corea del Sur",
    emoji: "🇰🇷",
    color: "#CD2E3A",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Semifinales (2002)",
      "Participaciones": "11",
      "Grupo 2026": "Por definir"
    },
    description: "Los Taegeuk Warriors buscan repetir la hazaña del 2002 con un equipo disciplinado y técnico."
  },
  ecuador: {
    name: "Ecuador",
    emoji: "🇪🇨",
    color: "#FFD100",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Octavos de Final (2006)",
      "Participaciones": "4",
      "Grupo 2026": "Por definir"
    },
    description: "La tricolor ecuatoriana busca superar su mejor actuación en un Mundial con un equipo joven y prometedor."
  },
  espana: {
    name: "España",
    emoji: "🇪🇸",
    color: "#AA151B",
    stats: {
      "Copas del Mundo": "1 (2010)",
      "Mejor Resultado": "Campeón (2010)",
      "Participaciones": "16",
      "Grupo 2026": "Por definir"
    },
    description: "La furia roja busca repetir el éxito del 2010 con una nueva generación de talentosos jugadores."
  },
  iran: {
    name: "Irán",
    emoji: "🇮🇷",
    color: "#DA0000",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Fase de Grupos",
      "Participaciones": "6",
      "Grupo 2026": "Por definir"
    },
    description: "El equipo persa busca hacer historia y pasar por primera vez a octavos de final en el Mundial 2026."
  },
  japon: {
    name: "Japón",
    emoji: "🇯🇵",
    color: "#BC002D",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Octavos de Final (2002, 2010, 2018, 2022)",
      "Participaciones": "7",
      "Grupo 2026": "Por definir"
    },
    description: "Los Samuráis Azules buscan superar por primera vez los octavos de final con su estilo técnico y disciplinado."
  },
  jordania: {
    name: "Jordania",
    emoji: "🇯🇴",
    color: "#007A3D",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Nunca clasificó",
      "Participaciones": "0",
      "Grupo 2026": "Por definir"
    },
    description: "Jordania busca hacer historia y clasificar por primera vez a una Copa del Mundo en 2026."
  },
  marruecos: {
    name: "Marruecos",
    emoji: "🇲🇦",
    color: "#C1272D",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Semifinales (2022)",
      "Participaciones": "6",
      "Grupo 2026": "Por definir"
    },
    description: "Tras su histórica semifinal en 2022, los Leones del Atlas buscan repetir el éxito en 2026."
  },
  mexico: {
    name: "México",
    emoji: "🇲🇽",
    color: "#006847",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Cuartos de Final",
      "Participaciones": "17",
      "Grupo 2026": "Por definir"
    },
    description: "La selección mexicana busca hacer historia en el Mundial 2026 como anfitrión conjuntamente con USA y Canadá."
  },
  "nueva-zelanda": {
    name: "Nueva Zelanda",
    emoji: "🇳🇿",
    color: "#00247D",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Fase de Grupos",
      "Participaciones": "2",
      "Grupo 2026": "Por definir"
    },
    description: "Los All Whites buscan ganar su primer partido en una Copa del Mundo en la edición de 2026."
  },
  paraguay: {
    name: "Paraguay",
    emoji: "🇵🇾",
    color: "#D52B1E",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Cuartos de Final (2010)",
      "Participaciones": "8",
      "Grupo 2026": "Por definir"
    },
    description: "La albirroja paraguaya busca repetir su exitosa campaña de 2010 con un equipo sólido defensivamente."
  },
  tunez: {
    name: "Túnez",
    emoji: "🇹🇳",
    color: "#E70013",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Fase de Grupos",
      "Participaciones": "6",
      "Grupo 2026": "Por definir"
    },
    description: "Las Águilas de Cartago buscan por primera vez pasar a octavos de final en un Mundial."
  },
  uruguay: {
    name: "Uruguay",
    emoji: "🇺🇾",
    color: "#0038A8",
    stats: {
      "Copas del Mundo": "2 (1930, 1950)",
      "Mejor Resultado": "Campeón",
      "Participaciones": "14",
      "Grupo 2026": "Por definir"
    },
    description: "La celeste, primera campeona del mundo, busca su tercer título con su característica garra charrúa."
  },
  usa: {
    name: "Estados Unidos",
    emoji: "🇺🇸",
    color: "#B22234",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Semifinales (1930)",
      "Participaciones": "11",
      "Grupo 2026": "Por definir"
    },
    description: "Como anfitrión del Mundial 2026, USA espera aprovechar su ventaja local para lograr un resultado histórico."
  },
  uzbekistan: {
    name: "Uzbekistán",
    emoji: "🇺🇿",
    color: "#1EB53A",
    stats: {
      "Copas del Mundo": "0",
      "Mejor Resultado": "Nunca clasificó",
      "Participaciones": "0",
      "Grupo 2026": "Por definir"
    },
    description: "Uzbekistán busca hacer historia y clasificar por primera vez a una Copa del Mundo en 2026."
  }
};

let currentCountry = null;
let animationsPaused = false;

// Datos de trivia (5 preguntas por país)
const triviaData = {
  argentina: [
    {
      question: "¿En qué año ganó Argentina su primera Copa del Mundo?",
      options: ["1978", "1986", "1930", "2022"],
      correctAnswer: 0
    },
    {
      question: "¿Contra qué país ganó Argentina la final de 2022?",
      options: ["Francia", "Brasil", "Alemania", "España"],
      correctAnswer: 0
    },
    {
      question: "¿Quién fue el capitán de Argentina en el Mundial de 1986?",
      options: ["Daniel Passarella", "Mario Kempes", "Jorge Valdano", "Diego Maradona"],
      correctAnswer: 3
    },
    {
      question: "¿Qué jugador argentino es conocido como 'El Fideo'?",
      options: ["Lionel Messi", "Sergio Agüero", "Ángel Di María", "Gonzalo Higuaín"],
      correctAnswer: 2
    },
    {
      question: "¿Cuántos goles anotó Diego Maradona en el Mundial de México 1986?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2
    }
  ],
  australia: [
    {
      question: "¿En qué año Australia clasificó por primera vez a un Mundial?",
      options: ["1974", "1986", "2006", "2010"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es el apodo oficial de la selección de Australia?",
      options: ["Los Canguros", "Socceroos", "Aussies", "Wallabies"],
      correctAnswer: 1
    },
    {
      question: "¿En qué confederación juega actualmente Australia para clasificar al Mundial?",
      options: ["OFC (Oceanía)", "CONMEBOL (Sudamérica)", "AFC (Asia)", "CONCACAF (Norteamérica)"],
      correctAnswer: 2
    },
    {
      question: "¿Quién es el máximo goleador histórico de Australia en Mundiales?",
      options: ["Tim Cahill", "Harry Kewell", "Mark Viduka", "Mile Jedinak"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál ha sido su mejor posición histórica en un Mundial?",
      options: ["Fase de Grupos", "Octavos de final", "Cuartos de final", "Semifinales"],
      correctAnswer: 1
    }
  ],
  brasil: [
    {
      question: "¿Quién es el máximo goleador brasileño en la historia de los Mundiales?",
      options: ["Ronaldo Nazário", "Pelé", "Neymar Jr", "Romário"],
      correctAnswer: 0
    },
    {
      question: "¿Cuántas Copas del Mundo ha ganado Brasil?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1
    },
    {
      question: "¿Contra quién perdió Brasil el famoso 'Maracanazo' en 1950?",
      options: ["Argentina", "Alemania", "Uruguay", "Italia"],
      correctAnswer: 2
    },
    {
      question: "¿En qué año ganó Brasil su último Mundial?",
      options: ["1994", "1998", "2006", "2002"],
      correctAnswer: 3
    },
    {
      question: "¿Qué jugador brasileño es conocido como 'O Rei'?",
      options: ["Zico", "Pelé", "Garrincha", "Ronaldinho"],
      correctAnswer: 1
    }
  ],
  canada: [
    {
      question: "¿En qué año debutó Canadá en un Mundial?",
      options: ["1986", "2002", "2010", "2022"],
      correctAnswer: 0
    },
    {
      question: "¿Quién anotó el primer gol de Canadá en la historia de los Mundiales (en 2022)?",
      options: ["Jonathan David", "Alphonso Davies", "Tajon Buchanan", "Cyle Larin"],
      correctAnswer: 1
    },
    {
      question: "¿Qué país será coanfitrión con Canadá en el Mundial 2026?",
      options: ["Solo Estados Unidos", "Solo México", "México y Estados Unidos", "Costa Rica y EE.UU."],
      correctAnswer: 2
    },
    {
      question: "¿Cuántos goles anotó Canadá en su primer Mundial en 1986?",
      options: ["0", "1", "2", "3"],
      correctAnswer: 0
    },
    {
      question: "¿A qué confederación de fútbol pertenece Canadá?",
      options: ["UEFA", "CONMEBOL", "AFC", "CONCACAF"],
      correctAnswer: 3
    }
  ],
  colombia: [
    {
      question: "¿Quién fue el goleador del Mundial 2014 jugando para Colombia?",
      options: ["James Rodríguez", "Radamel Falcao", "Juan Cuadrado", "Carlos Bacca"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es el apodo de la selección colombiana?",
      options: ["La Tricolor", "Los Cafeteros", "Los Cóndores", "Los Paisas"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál ha sido el mejor resultado de Colombia en un Mundial?",
      options: ["Octavos de final", "Semifinales", "Cuartos de final", "Fase de grupos"],
      correctAnswer: 2
    },
    {
      question: "¿Contra qué selección anotó Freddy Rincón un famoso gol en el Mundial 1990?",
      options: ["Argentina", "Camerún", "Yugoslavia", "Alemania"],
      correctAnswer: 3
    },
    {
      question: "¿En qué país se celebró el Mundial donde Colombia llegó a Cuartos de final?",
      options: ["Rusia", "Brasil", "Sudáfrica", "Alemania"],
      correctAnswer: 1
    }
  ],
  "corea-del-sur": [
    {
      question: "¿Cuál ha sido la mejor participación de Corea del Sur en un Mundial?",
      options: ["Semifinales", "Cuartos de final", "Octavos de final", "Subcampeón"],
      correctAnswer: 0
    },
    {
      question: "¿Con qué país coorganizó Corea del Sur el Mundial de 2002?",
      options: ["China", "Japón", "Australia", "Tailandia"],
      correctAnswer: 1
    },
    {
      question: "¿Qué jugador surcoreano ha sido una gran estrella en el Tottenham Hotspur?",
      options: ["Park Ji-sung", "Hwang Hee-chan", "Son Heung-min", "Kim Min-jae"],
      correctAnswer: 2
    },
    {
      question: "¿Cómo se le conoce a la selección de Corea del Sur?",
      options: ["Los Dragones", "La Furia Asiática", "Los Tigres", "Los Guerreros Taeguk"],
      correctAnswer: 3
    },
    {
      question: "¿A qué selección histórica eliminó Corea del Sur en Octavos del Mundial 2002?",
      options: ["Italia", "España", "Alemania", "Brasil"],
      correctAnswer: 0
    }
  ],
  ecuador: [
    {
      question: "¿Quién es el máximo goleador histórico de Ecuador en Mundiales?",
      options: ["Enner Valencia", "Agustín Delgado", "Carlos Tenorio", "Christian Benítez"],
      correctAnswer: 0
    },
    {
      question: "¿En qué año debutó Ecuador en una Copa del Mundo?",
      options: ["1998", "2002", "2006", "2010"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el mejor resultado de Ecuador en Mundiales?",
      options: ["Fase de Grupos", "Cuartos de final", "Octavos de final", "Semifinales"],
      correctAnswer: 2
    },
    {
      question: "¿Contra qué país jugó Ecuador el partido inaugural del Mundial 2022?",
      options: ["Países Bajos", "Senegal", "Arabia Saudita", "Catar"],
      correctAnswer: 3
    },
    {
      question: "¿En qué país se jugó el Mundial donde Ecuador llegó a Octavos (2006)?",
      options: ["Japón", "Alemania", "Sudáfrica", "Brasil"],
      correctAnswer: 1
    }
  ],
  espana: [
    {
      question: "¿Qué jugador anotó el gol de la victoria en la final del Mundial 2010?",
      options: ["Andrés Iniesta", "David Villa", "Fernando Torres", "Xavi Hernández"],
      correctAnswer: 0
    },
    {
      question: "¿Contra qué selección jugó España la final en 2010?",
      options: ["Alemania", "Países Bajos", "Brasil", "Argentina"],
      correctAnswer: 1
    },
    {
      question: "¿En qué año organizó España la Copa del Mundo?",
      options: ["1978", "1990", "1982", "1994"],
      correctAnswer: 2
    },
    {
      question: "¿Quién era el entrenador de España cuando ganaron el Mundial?",
      options: ["Luis Aragonés", "Luis Enrique", "Julen Lopetegui", "Vicente del Bosque"],
      correctAnswer: 3
    },
    {
      question: "¿Cuántas Copas del Mundo ha ganado España?",
      options: ["Una", "Dos", "Tres", "Ninguna"],
      correctAnswer: 0
    }
  ],
  iran: [
    {
      question: "¿Cuántas veces ha superado Irán la fase de grupos en un Mundial?",
      options: ["Ninguna", "Una vez", "Dos veces", "Tres veces"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es el apodo de la selección iraní?",
      options: ["Los Príncipes", "Team Melli", "Los Persas", "Los Leones de Asia"],
      correctAnswer: 1
    },
    {
      question: "¿Qué histórico partido ganó Irán en el Mundial de 1998?",
      options: ["Contra Alemania", "Contra Brasil", "Contra Estados Unidos", "Contra Francia"],
      correctAnswer: 2
    },
    {
      question: "¿A qué confederación pertenece la selección de Irán?",
      options: ["UEFA", "CAF", "CONCACAF", "AFC"],
      correctAnswer: 3
    },
    {
      question: "¿En qué año debutó Irán en los Mundiales?",
      options: ["1978", "1998", "2006", "2014"],
      correctAnswer: 0
    }
  ],
  japon: [
    {
      question: "¿Cuál es el apodo de la selección japonesa?",
      options: ["Samuráis Azules", "Soles Nacientes", "Ninjas", "Dragones Rojos"],
      correctAnswer: 0
    },
    {
      question: "¿Cuántas veces ha llegado Japón a Octavos de Final hasta 2022?",
      options: ["2 veces", "4 veces", "1 vez", "Nunca"],
      correctAnswer: 1
    },
    {
      question: "¿En qué año debutó Japón en una Copa del Mundo?",
      options: ["1990", "1994", "1998", "2002"],
      correctAnswer: 2
    },
    {
      question: "¿Con qué país compartió la sede del Mundial 2002?",
      options: ["China", "Taiwán", "Australia", "Corea del Sur"],
      correctAnswer: 3
    },
    {
      question: "¿Qué selección eliminó a Japón en penales en el Mundial 2022?",
      options: ["Croacia", "España", "Alemania", "Marruecos"],
      correctAnswer: 0
    }
  ],
  jordania: [
    {
      question: "¿Cuántas veces ha clasificado Jordania a un Mundial de la FIFA?",
      options: ["Ninguna", "Una vez", "Dos veces", "Tres veces"],
      correctAnswer: 0
    },
    {
      question: "¿De qué color es usualmente su uniforme de local?",
      options: ["Rojo", "Blanco", "Verde", "Negro"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el apodo de la selección de Jordania?",
      options: ["Los Faraones", "Los Halcones", "Los Bravos (Al-Nashama)", "Los Reyes"],
      correctAnswer: 2
    },
    {
      question: "¿En qué torneo continental Jordania llegó a la final en 2024?",
      options: ["Copa Oro", "Copa Africana", "Copa América", "Copa Asiática"],
      correctAnswer: 3
    },
    {
      question: "¿A qué confederación de fútbol pertenece Jordania?",
      options: ["AFC (Asia)", "CAF (África)", "UEFA (Europa)", "OFC (Oceanía)"],
      correctAnswer: 0
    }
  ],
  marruecos: [
    {
      question: "¿Qué histórico logro alcanzó Marruecos en el Mundial 2022?",
      options: ["Llegar a Semifinales", "Ganar el torneo", "Llegar a la Final", "Ser el equipo más goleador"],
      correctAnswer: 0
    },
    {
      question: "Marruecos fue el primer país de qué continente en llegar a semifinales del Mundial?",
      options: ["Asia", "África", "Oceanía", "Norteamérica"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el apodo de la selección marroquí?",
      options: ["Faraones", "Águilas del Desierto", "Leones del Atlas", "Zorros del Sahara"],
      correctAnswer: 2
    },
    {
      question: "¿En qué año se convirtió Marruecos en el primer país africano en pasar la fase de grupos?",
      options: ["1970", "1978", "1994", "1986"],
      correctAnswer: 3
    },
    {
      question: "¿Qué portero fue figura clave de Marruecos en 2022?",
      options: ["Yassine Bounou (Bono)", "Munir Mohamedi", "Keylor Navas", "Edouard Mendy"],
      correctAnswer: 0
    }
  ],
  mexico: [
    {
      question: "¿Qué jugador mexicano ha participado en 5 Copas del Mundo?",
      options: ["Rafael Márquez", "Hugo Sánchez", "Jared Borgetti", "Cuauhtémoc Blanco"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es la mejor fase alcanzada por México en los Mundiales de 1970 y 1986?",
      options: ["Octavos de final", "Cuartos de final", "Semifinales", "Final"],
      correctAnswer: 1
    },
    {
      question: "¿Quién es el máximo goleador histórico de la selección mexicana?",
      options: ["Raúl Jiménez", "Hugo Sánchez", "Javier 'Chicharito' Hernández", "Luis Hernández"],
      correctAnswer: 2
    },
    {
      question: "¿Contra qué país logró México una histórica victoria en su primer partido del Mundial 2018?",
      options: ["Brasil", "Suecia", "Corea del Sur", "Alemania"],
      correctAnswer: 3
    },
    {
      question: "¿Cuántas veces ha organizado México la Copa del Mundo (incluyendo 2026)?",
      options: ["3 veces", "2 veces", "1 vez", "4 veces"],
      correctAnswer: 0
    }
  ],
  "nueva-zelanda": [
    {
      question: "¿A qué confederación pertenece Nueva Zelanda tras la salida de Australia en 2006?",
      options: ["OFC (Oceanía)", "AFC (Asia)", "CONMEBOL", "CONCACAF"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es el apodo de la selección de Nueva Zelanda?",
      options: ["Kiwis", "All Whites", "Silver Ferns", "Ocean Boys"],
      correctAnswer: 1
    },
    {
      question: "¿En qué Mundial Nueva Zelanda se fue invicta en fase de grupos pero no avanzó?",
      options: ["1982", "2006", "2010", "2014"],
      correctAnswer: 2
    },
    {
      question: "¿En qué año debutó Nueva Zelanda en un Mundial?",
      options: ["1974", "1990", "1998", "1982"],
      correctAnswer: 3
    },
    {
      question: "¿De qué color es usualmente su uniforme de local?",
      options: ["Blanco", "Negro", "Verde", "Azul"],
      correctAnswer: 0
    }
  ],
  paraguay: [
    {
      question: "¿Cuál es el apodo de la selección paraguaya?",
      options: ["La Albirroja", "La Celeste", "La Tricolor", "La Vinotinto"],
      correctAnswer: 0
    },
    {
      question: "¿Qué famoso portero goleador paraguayo jugó los mundiales de 1998 y 2002?",
      options: ["Justo Villar", "José Luis Chilavert", "Roberto Fernández", "Antony Silva"],
      correctAnswer: 1
    },
    {
      question: "¿En qué Mundial Paraguay alcanzó por primera vez los Cuartos de Final?",
      options: ["1998", "2006", "2010", "2014"],
      correctAnswer: 2
    },
    {
      question: "¿Qué selección eliminó a Paraguay en los cuartos de final del Mundial 2010?",
      options: ["Alemania", "Argentina", "Uruguay", "España"],
      correctAnswer: 3
    },
    {
      question: "¿Cuántas veces ha participado Paraguay en un Mundial (hasta 2022)?",
      options: ["8 veces", "6 veces", "10 veces", "4 veces"],
      correctAnswer: 0
    }
  ],
  tunez: [
    {
      question: "¿Cuántas veces ha pasado Túnez de la fase de grupos en un Mundial?",
      options: ["Ninguna", "Una vez", "Dos veces", "Tres veces"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es el apodo de la selección de Túnez?",
      options: ["Faraones", "Las Águilas de Cartago", "Leones Indomables", "Zorros del Desierto"],
      correctAnswer: 1
    },
    {
      question: "Túnez logró la primera victoria de un equipo africano en un Mundial, ¿en qué año?",
      options: ["1970", "1982", "1978", "1986"],
      correctAnswer: 2
    },
    {
      question: "¿Contra qué selección campeona del mundo logró ganar Túnez en 2022?",
      options: ["Argentina", "Brasil", "Alemania", "Francia"],
      correctAnswer: 3
    },
    {
      question: "¿A qué confederación pertenece Túnez?",
      options: ["CAF (África)", "AFC (Asia)", "UEFA (Europa)", "CONMEBOL"],
      correctAnswer: 0
    }
  ],
  uruguay: [
    {
      question: "¿Quién es el máximo goleador histórico de la selección uruguaya?",
      options: ["Luis Suárez", "Edinson Cavani", "Diego Forlán", "Enzo Francescoli"],
      correctAnswer: 0
    },
    {
      question: "¿Quién fue elegido el Mejor Jugador del Mundial 2010, llevando a Uruguay a semifinales?",
      options: ["Luis Suárez", "Diego Forlán", "Fernando Muslera", "Diego Godín"],
      correctAnswer: 1
    },
    {
      question: "¿A qué selección venció Uruguay en el famoso 'Maracanazo' de 1950?",
      options: ["Argentina", "Italia", "Brasil", "Alemania"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál es el apodo de la selección uruguaya?",
      options: ["La Albiceleste", "La Tricolor", "La Roja", "La Celeste"],
      correctAnswer: 3
    },
    {
      question: "¿En qué año ganó Uruguay el primer Mundial de la historia?",
      options: ["1930", "1934", "1938", "1950"],
      correctAnswer: 0
    }
  ],
  usa: [
    {
      question: "¿Con qué países coorganizará USA el Mundial 2026?",
      options: ["México y Canadá", "Solo Canadá", "Solo México", "Brasil y Argentina"],
      correctAnswer: 0
    },
    {
      question: "¿Quién es uno de los jugadores estadounidenses más reconocidos actualmente?",
      options: ["Landon Donovan", "Christian Pulisic", "Clint Dempsey", "Tim Howard"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el mejor resultado histórico de Estados Unidos en un Mundial?",
      options: ["Cuartos de Final (2002)", "Octavos de Final (2014)", "Semifinales (1930)", "Subcampeón (1950)"],
      correctAnswer: 2
    },
    {
      question: "¿Contra qué equipo logró Estados Unidos su histórica victoria de 1-0 en 1950?",
      options: ["Brasil", "Alemania", "Italia", "Inglaterra"],
      correctAnswer: 3
    },
    {
      question: "¿En qué año organizó Estados Unidos su primer Mundial?",
      options: ["1994", "1998", "2002", "1990"],
      correctAnswer: 0
    }
  ],
  uzbekistan: [
    {
      question: "¿Cuántas veces ha participado Uzbekistán en la fase final de una Copa del Mundo?",
      options: ["Ninguna", "Una vez", "Dos veces", "Tres veces"],
      correctAnswer: 0
    },
    {
      question: "¿A qué confederación de fútbol pertenece Uzbekistán?",
      options: ["UEFA (Europa)", "AFC (Asia)", "CAF (África)", "OFC (Oceanía)"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el apodo de la selección de Uzbekistán?",
      options: ["Los Dragones", "Los Halcones", "Los Lobos Blancos", "Los Tigres"],
      correctAnswer: 2
    },
    {
      question: "¿De qué antigua nación formaba parte Uzbekistán antes de competir independientemente?",
      options: ["Yugoslavia", "Checoslovaquia", "Imperio Otomano", "Unión Soviética"],
      correctAnswer: 3
    },
    {
      question: "¿De qué colores es tradicionalmente el uniforme principal de Uzbekistán?",
      options: ["Azul y Blanco", "Rojo y Negro", "Verde y Amarillo", "Naranja y Blanco"],
      correctAnswer: 0
    }
  ]
};

// Estadísticas por país
const countryStats = {
  "argentina": {
    participaciones: "18",
    mejorPosicion: "Campeón",
    maximoGoleador: "Lionel Messi",
    ultimoResultado: "Campeón 2022",
    rankingFIFA: "Top 2"
  },
  "australia": {
    participaciones: "6",
    mejorPosicion: "Octavos (2006, 2022)",
    maximoGoleador: "Tim Cahill",
    ultimoResultado: "Octavos 2022",
    rankingFIFA: "Top 30"
  },
  "brasil": {
    participaciones: "22 (único en todos)",
    mejorPosicion: "Campeón",
    maximoGoleador: "Ronaldo Nazário",
    ultimoResultado: "Cuartos 2022",
    rankingFIFA: "Top 5"
  },
  "canada": {
    participaciones: "2",
    mejorPosicion: "Fase de grupos",
    maximoGoleador: "Alphonso Davies",
    ultimoResultado: "Fase de grupos 2022",
    rankingFIFA: "Top 50"
  },
  "colombia": {
    participaciones: "6",
    mejorPosicion: "Cuartos de final (2014)",
    maximoGoleador: "Radamel Falcao",
    ultimoResultado: "Octavos de final 2018",
    rankingFIFA: "Top 12"
  },
  "corea-del-sur":{
    participaciones: "11",
    mejorPosicion: "Semifinal  (2002)",
    maximoGoleador: "Cha Bum-kun",
    ultimoResultado: "Octavos de final 2022",
    rankingFIFA: "Top 22"
  },
   "espana": {
    participaciones: "16",
    mejorPosicion: "Campeon 2010",
    maximoGoleador: "David Villa",
    ultimoResultado: "Octavos de final 2022",
    rankingFIFA: "Top 1"
  },
   "japon": {
    participaciones: "7",
    mejorPosicion: "Octavos de final 2022",
    maximoGoleador: "Kunishige Kamamoto",
    ultimoResultado: "Octavos de final 2022",
    rankingFIFA: "Top 19"
  },
   "mexico": {
    participaciones: "17",
    mejorPosicion: "Cuartos de final 1986",
    maximoGoleador: "Javier Hernández",
    ultimoResultado: "Fases de grupos 2022",
    rankingFIFA: "Top 16"
  },
    "tunez":{
    participaciones: "6",
    mejorPosicion: "Fases de grupos 2022",
    maximoGoleador: "Issam Jemâa",
    ultimoResultado: "Fases de grupos 2022",
    rankingFIFA: "Top 41"
  },
   "uruguay":{
    participaciones: "14",
    mejorPosicion: "Campeón 1950",
    maximoGoleador: "Luis Suárez",
    ultimoResultado: "Fases de grupos 2022",
    rankingFIFA: "Top 17"
  },
  "uzbekistan":{
    participaciones: "0",
    mejorPosicion: "No a clasificado",
    maximoGoleador: "Eldor Shomurodov",
    ultimoResultado: "N/A",
    rankingFIFA: "Top 64"
  },

  /*
  Sudafrica:{
    participaciones: "3",
    mejorPosicion: "Fase de Grupos",
    maximoGoleador: "Benni McCarthy",
    ultimoResultado: "Fase de Grupos (2010)",
    rankingFIFA: "Top 59"
  },
  Cabo-Verde:{
    participaciones: "0",
    mejorPosicion: "No a clasificado",
    maximoGoleador: "Héldon Ramos",
    ultimoResultado: "N/A",
    rankingFIFA: "Top 65"
  },
  Rep-Checa:{
    participaciones: "1",
    mejorPosicion: "Fase de Grupos (2006)",
    maximoGoleador: "Jan Koller",
    ultimoResultado: "Fase de Grupos (2006)",
    rankingFIFA: "Top 40"
  },
   Arabia:{
    participaciones: "6",
    mejorPosicion: "Octavos de final 1994",
    maximoGoleador: "Majed Abdullah",
    ultimoResultado: "Fase de Grupos 2022",
    rankingFIFA: "Top 56"
  },
  */
};

const videoUrls = {
  "argentina": "https://youtu.be/FA1sR2SZAlY",
  "australia": "https://youtu.be/KvSiRNO1BTY",
  "brasil": "https://youtu.be/AZAX5P_Q4Jg",
  "canada": "https://youtu.be/GWrOR1FxBhs", // Highlights Canadá vs Croacia 2022
  "colombia": "https://youtu.be/GXW4upfqoMg?si=g-Aq2PE-vmI8TCw1",
  "corea-del-sur": "https://youtu.be/5Zwjyi8bdE4?si=vIsnA4e3fMCYRlYN",
  "ecuador": "https://youtu.be/b7X1YkrkUHA", // Highlights Ecuador vs Qatar 2022
  "espana": "https://youtu.be/UHf4AkgQxhY?si=wJkt_3jfkCuDvGVc", 
  "iran": "https://youtu.be/-C80_VKBMZc", // Final de locura Irán vs Gales 2022
  "japon": "https://youtu.be/nMd4-BdJPDs?si=BdL5g5UoHpUp7WWc", 
  "jordania": "https://youtu.be/3kO6I9xztd8", // Jordania llegando a la final de la Copa Asiática 2023
  "marruecos": "https://youtu.be/M766FGsv5do", // Histórica victoria de Marruecos vs Portugal 2022
  "mexico": "https://youtu.be/5-S3oTo2iwQ?si=PZXKsTRH7FY_ZVLe",
  "nueva-zelanda": "https://youtu.be/GVtf4GICxdU", // Highlights Nueva Zelanda vs Paraguay Mundial 2010
  "paraguay": "https://youtu.be/Mger-g-Swbo", // Tanda de penales de Paraguay vs Japón 2010
  "tunez": "https://youtu.be/w6wpXzMUIlM?si=ZqRsp89RIh2B3YAB",
  "uruguay": "https://youtu.be/jIHZ2N3II8s?si=3QXReUSlm8NLiKy8",
  "usa": "https://youtu.be/6mi1VfbjGB4", // Todos los goles de Estados Unidos en Mundiales 2010-2022
  "uzbekistan": "https://youtu.be/VTfJV-sEy4k?si=xYnUaUJBpFbL6NUp",
};




  const countryMap = {
    0: { name: 'Argentina', emoji: '🇦🇷', color: '#74ACDF', key: 'argentina' },
    1: { name: 'Australia', emoji: '🇦🇺', color: '#012169', key: 'australia' },
    2: { name: 'Brasil', emoji: '🇧🇷', color: '#009739', key: 'brasil' },
    3: { name: 'Canadá', emoji: '🇨🇦', color: '#FF0000', key: 'canada' },
    4: { name: 'Colombia', emoji: '🇨🇴', color: '#FCD116', key: 'colombia' },
    5: { name: 'Corea del Sur', emoji: '🇰🇷', color: '#CD2E3A', key: 'corea-del-sur' },
    6: { name: 'Ecuador', emoji: '🇪🇨', color: '#FFD100', key: 'ecuador' },
    7: { name: 'España', emoji: '🇪🇸', color: '#AA151B', key: 'espana' },
    8: { name: 'Irán', emoji: '🇮🇷', color: '#DA0000', key: 'iran' },
    9: { name: 'Japón', emoji: '🇯🇵', color: '#BC002D', key: 'japon' },
    10: { name: 'Jordania', emoji: '🇯🇴', color: '#007A3D', key: 'jordania' },
    11: { name: 'Marruecos', emoji: '🇲🇦', color: '#C1272D', key: 'marruecos' },
    12: { name: 'México', emoji: '🇲🇽', color: '#006847', key: 'mexico' },
    13: { name: 'Nueva Zelanda', emoji: '🇳🇿', color: '#00247D', key: 'nueva-zelanda' },
    14: { name: 'Paraguay', emoji: '🇵🇾', color: '#D52B1E', key: 'paraguay' },
    15: { name: 'Túnez', emoji: '🇹🇳', color: '#E70013', key: 'tunez' },
    16: { name: 'Uruguay', emoji: '🇺🇾', color: '#0038A8', key: 'uruguay' },
    17: { name: 'Estados Unidos', emoji: '🇺🇸', color: '#B22234', key: 'usa' },
    18: { name: 'Uzbekistán', emoji: '🇺🇿', color: '#1EB53A', key: 'uzbekistan' }
  };

  // Función para mostrar el menú cuando se detecta un país
  function showCountryMenu(targetIndex) {
    const detectedCountry = countryMap[targetIndex];

    if (detectedCountry) {
      currentCountry = detectedCountry.key;

      // Mostrar banner de detección
      const banner = document.getElementById('detectionBanner');
      if (banner) {
        document.getElementById('bannerTitle').textContent = `${detectedCountry.emoji} ${detectedCountry.name} Detectado`;
        document.getElementById('bannerSubtitle').textContent = 'Contenido interactivo cargado';
        banner.style.background = `linear-gradient(135deg, ${detectedCountry.color}, ${detectedCountry.color}CC)`;
        banner.style.display = 'block';

        setTimeout(() => {
          banner.style.display = 'none';
        }, 3000);
      }

      const floatingMenu = document.getElementById('floatingMenu');
      const menuHeader = document.getElementById('menuHeader');
      if (floatingMenu) {
        floatingMenu.classList.add('active', 'has-country');
        // Actualizar header del menú
        if (menuHeader) {
          menuHeader.querySelector('.menu-header-text').textContent = `${detectedCountry.emoji} ${detectedCountry.name}`;
        }
      }
    }
  }

  // Función para detectar país basándose en qué modelo está visible (fallback)
  let lastDetectedCountry = null;
  function detectVisibleCountry() {
    const targets = document.querySelectorAll('[mindar-image-target]');

    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      const targetAttr = target.getAttribute('mindar-image-target');
      let targetIndex = i;

      // Verificar que targetAttr sea una cadena antes de hacer match
      if (targetAttr && typeof targetAttr === 'string') {
        const targetIndexMatch = targetAttr.match(/targetIndex:\s*(\d+)/);
        if (targetIndexMatch) {
          targetIndex = parseInt(targetIndexMatch[1]);
        }
      }

      // Verificar si el modelo dentro del target está visible
      const model = target.querySelector('a-gltf-model') || target.querySelector('a-plane');
      if (model) {
        const modelObject = model.object3D;
        if (modelObject && modelObject.visible) {
          // El modelo está visible, significa que el target está detectado
          const detectedCountry = countryMap[targetIndex];
          if (detectedCountry && detectedCountry.key !== lastDetectedCountry) {
            lastDetectedCountry = detectedCountry.key;
            showCountryMenu(targetIndex);
          }
          return;
        }
      }
    }


    if (lastDetectedCountry) {
      lastDetectedCountry = null;
    }
  }

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Configurar botones de información (la 'i' debajo del modelo)
  document.querySelectorAll('.info-button').forEach(btn => {
    btn.addEventListener('click', function() {
      const country = this.getAttribute('data-country');
      showCountryInfo(country);
    });
  });

  // 2. Detectar banderas y encender avisos INMEDIATAMENTE con eventos nativos de MindAR
  document.querySelectorAll('[mindar-image-target]').forEach((target, index) => {
    target.addEventListener('targetFound', () => {
      showCountryMenu(index); // activa menú, banners y actualiza currentCountry
    });

    target.addEventListener('targetLost', () => {
      // Ocultar modelo de la bandera si existe (opcional)
      if (currentCountry) {
        const flagModel = document.getElementById(`${currentCountry}-flag-model`);
        if (flagModel) {
          flagModel.object3D.visible = false;
        }
      }
      currentCountry = null; // resetea país para que los botones sepan que ya no hay bandera
    });
  });

  // 3. Sistema de seguridad (fallback) por si falla la detección nativa
  setInterval(detectVisibleCountry, 500);
});

// Funciones de la interfaz (permanecen igual)
function showCountryInfo(countryKey) {
  const country = countries[countryKey];
  const infoDiv = document.getElementById('countryInfo');

  document.getElementById('infoTitle').textContent = `${country.emoji} ${country.name}`;
  document.getElementById('infoTitle').style.color = country.color;

  // Llenar estadísticas
  const statsDiv = document.getElementById('infoStats');
  statsDiv.innerHTML = '';

  Object.entries(country.stats).forEach(([key, value]) => {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';
    statItem.innerHTML = `
      <span class="stat-value">${value}</span>
      <span class="stat-label">${key}</span>
    `;
    statsDiv.appendChild(statItem);
  });

  document.getElementById('infoDescription').textContent = country.description;
  infoDiv.classList.add('active');
}

function closeCountryInfo() {
  document.getElementById('countryInfo').classList.remove('active');
}

function showAllInfo() {
  let allInfo = "🌍 INFORMACIÓN DEL MUNDIAL 2026\n\n";
  Object.values(countries).forEach(country => {
    allInfo += `${country.emoji} ${country.name}\n`;
    allInfo += `Copas del Mundo: ${country.stats['Copas del Mundo']}\n`;
    allInfo += `Participaciones: ${country.stats['Participaciones']}\n\n`;
  });
  allInfo += "🏆 Primer Mundial con 48 equipos\n⚽ 3 países anfitriones\n🎯 80 partidos en total";

  alert(allInfo);
}

function resetAR() {
  // Reiniciar todas las animaciones
  document.querySelectorAll('a-gltf-model').forEach(model => {
    model.emit('animationrestart');
  });

  // Mostrar mensaje
  const banner = document.getElementById('detectionBanner');
  document.getElementById('bannerTitle').textContent = '🔄 Experiencia Reiniciada';
  document.getElementById('bannerSubtitle').textContent = 'Todas las animaciones reiniciadas';
  banner.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
  banner.style.display = 'block';

  setTimeout(() => {
    banner.style.display = 'none';
  }, 2000);
}

function toggleAnimations() {
  const models = document.querySelectorAll('a-gltf-model');
  const isPaused = models[0].getAttribute('animation-mixer');

  models.forEach(model => {
    if (isPaused) {
      model.removeAttribute('animation-mixer');
    } else {
      model.setAttribute('animation-mixer', 'clip: *; loop: repeat');
    }
  });

  // Mostrar estado
  const banner = document.getElementById('detectionBanner');
  document.getElementById('bannerTitle').textContent = isPaused ? '▶️ Animaciones Reanudadas' : '⏸️ Animaciones Pausadas';
  document.getElementById('bannerSubtitle').textContent = isPaused ? 'Todas las animaciones activadas' : 'Animaciones en pausa';
  banner.style.background = 'linear-gradient(135deg, #fdbb2d, #b21f1f)';
  banner.style.display = 'block';

  setTimeout(() => {
    banner.style.display = 'none';
  }, 2000);
}

// Cerrar modal al hacer clic fuera
document.getElementById('countryInfo').addEventListener('click', function (e) {
  if (e.target === this) {
    closeCountryInfo();
  }
});

// Funciones del menú flotante
function openMenu(type) {
  if (!currentCountry) {
    // Mostrar mensaje si no hay país detectado
    const banner = document.getElementById('detectionBanner');
    if (banner) {
      document.getElementById('bannerTitle').textContent = '⚠️ No hay país detectado';
      document.getElementById('bannerSubtitle').textContent = 'Escanea una bandera primero';
      banner.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a6f)';
      banner.style.display = 'block';

      setTimeout(() => {
        banner.style.display = 'none';
      }, 3000);
    }
    return;
  }

  const country = countries[currentCountry];

  switch (type) {
    case 'trivia':
      openTriviaModal();
      break;
    case 'video':
      openVideoModal();
      break;
    case 'stats':
      openStatsModal();
      break;
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Función para abrir el manual de usuario
function openManual() {
  const manualModal = document.getElementById('manualModal');
  if (manualModal) {
    manualModal.classList.add('active');
  }
}

// Función para reiniciar la trivia de un país
function restartTrivia() {
  if (!currentCountry) return;

  // Limpiar las preguntas contestadas del país actual
  if (answeredQuestions[currentCountry]) {
    answeredQuestions[currentCountry] = [];
  }

  // Abrir el modal de trivia de nuevo con una nueva pregunta
  openTriviaModal();
}

// Variable global para la pregunta actual de trivia
let currentTriviaQuestion = null;
let currentTriviaQuestionIndex = null;
let triviaAnswered = false;
// Objeto para rastrear preguntas ya contestadas por país
let answeredQuestions = {};

// Función para obtener una pregunta aleatoria que no haya sido contestada
function getRandomUnansweredQuestion(countryKey) {
  const trivia = triviaData[countryKey];
  if (!trivia) return null;

  // Inicializar array de preguntas contestadas si no existe
  if (!answeredQuestions[countryKey]) {
    answeredQuestions[countryKey] = [];
  }

  // Obtener índices de preguntas no contestadas
  const unansweredIndices = trivia
    .map((question, index) => ({ question, index }))
    .filter(item => !answeredQuestions[countryKey].includes(item.index))
    .map(item => item.index);

  // Si todas las preguntas fueron contestadas, retornar null para mostrar mensaje
  if (unansweredIndices.length === 0) {
    return null;
  }

  // Seleccionar un índice aleatorio de los no contestados
  const randomIndex = unansweredIndices[Math.floor(Math.random() * unansweredIndices.length)];

  return { question: trivia[randomIndex], index: randomIndex };
}

// Función para abrir modal de Trivia
function openTriviaModal() {
  if (!currentCountry || !triviaData[currentCountry]) return;

  const country = countries[currentCountry];
  const trivia = triviaData[currentCountry];

  // Obtener pregunta no contestada
  const questionData = getRandomUnansweredQuestion(currentCountry);

  document.getElementById('triviaTitle').textContent = `Trivia - ${country.emoji} ${country.name}`;

  const container = document.getElementById('triviaContainer');

  // Si no hay más preguntas, mostrar mensaje de trivia terminada
  if (!questionData) {
    const totalQuestions = trivia.length;
    const answeredCount = answeredQuestions[currentCountry] ? answeredQuestions[currentCountry].length : 0;

    container.innerHTML = `
      <div class="trivia-completed">
        <div class="trivia-completed-icon">🎉</div>
        <div class="trivia-completed-title">¡Trivia Terminada!</div>
        <div class="trivia-completed-message">
          Has completado todas las ${totalQuestions} preguntas de este país.
        </div>
        <div class="trivia-completed-stats">
          Preguntas contestadas: ${answeredCount} / ${totalQuestions}
        </div>
        <button class="trivia-restart-btn" onclick="restartTrivia()">
          Reiniciar Trivia
        </button>
      </div>
    `;
    document.getElementById('triviaModal').classList.add('active');
    return;
  }

  currentTriviaQuestion = questionData.question;
  currentTriviaQuestionIndex = questionData.index;
  triviaAnswered = false;

  container.innerHTML = `
    <div class="trivia-question">${currentTriviaQuestion.question}</div>
    <div class="trivia-options">
      ${currentTriviaQuestion.options.map((option, index) => `
        <div class="trivia-option" data-index="${index}" onclick="selectTriviaOption(this, ${index})">
          ${option}
        </div>
      `).join('')}
    </div>
    <div class="trivia-feedback" id="triviaFeedback" style="display: none;"></div>
    <button class="trivia-next-btn" id="triviaNextBtn" onclick="nextTriviaQuestion()" style="display: none;">
      Siguiente Pregunta
    </button>
  `;

  document.getElementById('triviaModal').classList.add('active');
}

function selectTriviaOption(element, selectedIndex) {
  if (triviaAnswered) return; // No permitir cambiar respuesta después de responder

  // Remover selección anterior
  document.querySelectorAll('.trivia-option').forEach(opt => {
    opt.classList.remove('selected');
  });

  // Seleccionar nueva opción
  element.classList.add('selected');

  // Verificar respuesta
  const correctIndex = currentTriviaQuestion.correctAnswer;
  const isCorrect = selectedIndex === correctIndex;
  triviaAnswered = true;

  // Marcar esta pregunta como contestada
  if (currentCountry && currentTriviaQuestionIndex !== null && currentTriviaQuestionIndex !== undefined) {
    // Inicializar array si no existe
    if (!answeredQuestions[currentCountry]) {
      answeredQuestions[currentCountry] = [];
    }

    // Agregar el índice de la pregunta a las contestadas (si no está ya)
    if (!answeredQuestions[currentCountry].includes(currentTriviaQuestionIndex)) {
      answeredQuestions[currentCountry].push(currentTriviaQuestionIndex);
    }
  }

  // Mostrar todas las opciones con su estado
  document.querySelectorAll('.trivia-option').forEach((opt, index) => {
    opt.style.pointerEvents = 'none'; // Deshabilitar clics
    if (index === correctIndex) {
      opt.classList.add('correct');
    } else if (index === selectedIndex && !isCorrect) {
      opt.classList.add('incorrect');
    }
  });

  // Mostrar feedback
  const feedbackDiv = document.getElementById('triviaFeedback');
  const nextBtn = document.getElementById('triviaNextBtn');

  if (isCorrect) {
    feedbackDiv.innerHTML = '<div class="feedback-correct">✅ ¡Correcto!</div>';
    feedbackDiv.style.display = 'block';
  } else {
    feedbackDiv.innerHTML = `<div class="feedback-incorrect">❌ Incorrecto. La respuesta correcta es: <strong>${currentTriviaQuestion.options[correctIndex]}</strong></div>`;
    feedbackDiv.style.display = 'block';
  }

  nextBtn.style.display = 'block';
}

function nextTriviaQuestion() {
  if (!currentCountry || !triviaData[currentCountry]) return;

  // Obtener pregunta no contestada
  const questionData = getRandomUnansweredQuestion(currentCountry);

  const container = document.getElementById('triviaContainer');

  // Si no hay más preguntas, mostrar mensaje de trivia terminada
  if (!questionData) {
    const trivia = triviaData[currentCountry];
    const totalQuestions = trivia.length;
    const answeredCount = answeredQuestions[currentCountry] ? answeredQuestions[currentCountry].length : 0;

    container.innerHTML = `
      <div class="trivia-completed">
        <div class="trivia-completed-icon">🎉</div>
        <div class="trivia-completed-title">¡Trivia Terminada!</div>
        <div class="trivia-completed-message">
          Has completado todas las ${totalQuestions} preguntas de este país.
        </div>
        <div class="trivia-completed-stats">
          Preguntas contestadas: ${answeredCount} / ${totalQuestions}
        </div>
        <button class="trivia-restart-btn" onclick="restartTrivia()">
          Reiniciar Trivia
        </button>
      </div>
    `;
    return;
  }

  currentTriviaQuestion = questionData.question;
  currentTriviaQuestionIndex = questionData.index;
  triviaAnswered = false;

  container.innerHTML = `
    <div class="trivia-question">${currentTriviaQuestion.question}</div>
    <div class="trivia-options">
      ${currentTriviaQuestion.options.map((option, index) => `
        <div class="trivia-option" data-index="${index}" onclick="selectTriviaOption(this, ${index})">
          ${option}
        </div>
      `).join('')}
    </div>
    <div class="trivia-feedback" id="triviaFeedback" style="display: none;"></div>
    <button class="trivia-next-btn" id="triviaNextBtn" onclick="nextTriviaQuestion()" style="display: none;">
      Siguiente Pregunta
    </button>
  `;
}


function convertYouTubeUrl(url) {
  if (!url) return null;


  if (url.includes('youtube.com/embed/')) {
    return url;
  }

  let videoId = null;

  const shortMatch = url.match(/(?:youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    videoId = shortMatch[1];
  }

  if (!videoId) {
    const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/v\/)([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
      videoId = watchMatch[1];
    }
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return url;
}

function openVideoModal() {
  if (!currentCountry) return;

  const country = countries[currentCountry];
  let videoUrl = videoUrls[currentCountry];

  document.getElementById('videoTitle').textContent = `Video - ${country.emoji} ${country.name}`;

  const container = document.getElementById('videoContainer');
  const videoElement = document.getElementById('countryVideo');

  if (videoUrl) {
    videoUrl = convertYouTubeUrl(videoUrl);

    videoElement.src = videoUrl;
    videoElement.style.display = 'block';
  } else {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #888;">
        <p>No hay video disponible para este país.</p>
        <p style="font-size: 12px; margin-top: 10px;">Puedes agregar una URL en el objeto videoUrls del archivo script.js</p>
      </div>
    `;
  }

  const firstBtn = document.querySelectorAll('.filter-btn')[0];
  if (firstBtn && videoUrl) {
    applyVideoFilter('none', firstBtn);
  }

  document.getElementById('videoModal').classList.add('active');
}

function applyVideoFilter(filterType, buttonElement) {
  const video = document.getElementById('countryVideo');

  if (!video) return;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  if (buttonElement) {
    buttonElement.classList.add('active');
  }

  switch (filterType) {
    case 'grayscale': // ahora será Desenfoque
      video.style.filter = 'blur(25px)';
      break;

    case 'sepia': // ahora será Cámara térmica
      video.style.filter = 'contrast(200%) saturate(300%) hue-rotate(90deg)';
      break;

    case 'saturate': // Saturación alta
      video.style.filter = 'saturate(250%)';
      break;

    case 'none':
    default:
      video.style.filter = 'none';
      break;
  }
}

function openStatsModal() {
  if (!currentCountry) return;

  const country = countries[currentCountry];
  const stats = countryStats[currentCountry] || {};

  document.getElementById('statsTitle').textContent = `Estadísticas - ${country.emoji} ${country.name}`;

  const container = document.getElementById('statsContainer');
  container.innerHTML = `
    <div class="stats-field">
      <div class="stats-field-label">Participaciones en Mundiales</div>
      <div class="stats-field-value">${stats.participaciones || "Dato a insertar"}</div>
    </div>
    <div class="stats-field">
      <div class="stats-field-label">Mejor Posición</div>
      <div class="stats-field-value">${stats.mejorPosicion || "Dato a insertar"}</div>
    </div>
    <div class="stats-field">
      <div class="stats-field-label">Máximo Goleador</div>
      <div class="stats-field-value">${stats.maximoGoleador || "Dato a insertar"}</div>
    </div>
    <div class="stats-field">
      <div class="stats-field-label">Último Resultado</div>
      <div class="stats-field-value">${stats.ultimoResultado || "Dato a insertar"}</div>
    </div>
    <div class="stats-field">
      <div class="stats-field-label">Ranking FIFA</div>
      <div class="stats-field-value">${stats.rankingFIFA || "Dato a insertar"}</div>
    </div>
  `;

  document.getElementById('statsModal').classList.add('active');
}
function animateModel() {
  if (!currentCountry) {
    const banner = document.getElementById('detectionBanner');
    if (banner) {
      document.getElementById('bannerTitle').textContent = '⚠️ No hay país detectado';
      document.getElementById('bannerSubtitle').textContent = 'Escanea una bandera primero';
      banner.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a6f)';
      banner.style.display = 'block';
      setTimeout(() => { banner.style.display = 'none'; }, 2000);
    }
    return;
  }

  const modelId = `${currentCountry}-3d`;
  const model = document.getElementById(modelId);
  
  const targetEntity = model.closest('a-entity[mindar-image-target]');
  const particles = targetEntity.querySelector('[particle-system]');

  animationsPaused = !animationsPaused;

  if (animationsPaused) {
    model.setAttribute('animation', {enabled: false});
    model.setAttribute('animation__bounce', {enabled: false});
    
    if (particles) {
      particles.setAttribute('visible', 'false');
      particles.setAttribute('particle-system', 'enabled', false);
    }
    document.getElementById('animationIcon').textContent = '▶️';
    
  } else {
    model.setAttribute('animation', {enabled: true});
    model.setAttribute('animation__bounce', {enabled: true});
    
    if (particles) {
      particles.setAttribute('visible', 'true');
      particles.setAttribute('particle-system', 'enabled', true);
    }
    document.getElementById('animationIcon').textContent = '⏸️';
  }
}
function triggerCelebration() {
  if (!currentCountry) return;

  const countryData = countries[currentCountry];
  const modelId = `${currentCountry}-3d`;
  const model = document.getElementById(modelId);
  const targetEntity = model.closest('a-entity[mindar-image-target]');
  const particles = targetEntity.querySelector('[particle-system]');

  if (particles) {
    // TRUCO: Pasamos toda la configuración como un texto para forzar el renderizado
    // Redujimos a 300 partículas y usamos 'default' que es más estable que 'snow'
    const configString = `preset: default; color: ${countryData.color}, #FFFFFF; particleCount: 300; size: 2; velocityValue: 0 5 0; accelerationValue: 0 -5 0; enabled: true`;
    
    particles.setAttribute('particle-system', configString);
    particles.setAttribute('visible', 'true');

    // Retroalimentación visual
    const banner = document.getElementById('detectionBanner');
    document.getElementById('bannerTitle').textContent = `🎊 ¡CELEBRACIÓN ${countryData.name.toUpperCase()}! 🎊`;
    banner.style.display = 'block';

    // Apagado automático
    setTimeout(() => {
      particles.setAttribute('particle-system', 'enabled', 'false');
      particles.setAttribute('visible', 'false');
      banner.style.display = 'none';
    }, 5000);
  }
}