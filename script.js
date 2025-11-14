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
      options: ["1978", "1986", "1930", "2022"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de Argentina en Mundiales?",
      options: ["Lionel Messi", "Gabriel Batistuta", "Diego Maradona", "Hernán Crespo"]
    },
    {
      question: "¿Cuántas Copas del Mundo ha ganado Argentina?",
      options: ["2", "3", "4", "5"]
    },
    {
      question: "¿En qué Mundial Argentina llegó a la final pero perdió?",
      options: ["2014", "1990", "1930", "Todas las anteriores"]
    },
    {
      question: "¿Quién fue el entrenador de Argentina en el Mundial 2022?",
      options: ["Lionel Scaloni", "Jorge Sampaoli", "Gerardo Martino", "Alejandro Sabella"]
    }
  ],
  australia: [
    {
      question: "¿Cuál es el mejor resultado de Australia en un Mundial?",
      options: ["Octavos de Final", "Fase de Grupos", "Cuartos de Final", "Nunca clasificó"]
    },
    {
      question: "¿En qué año Australia logró llegar a octavos de final?",
      options: ["2006", "2010", "2014", "2018"]
    },
    {
      question: "¿Cuántas veces ha participado Australia en Mundiales?",
      options: ["4", "5", "6", "7"]
    },
    {
      question: "¿Qué confederación representa Australia?",
      options: ["AFC", "OFC", "UEFA", "CONMEBOL"]
    },
    {
      question: "¿Cuál es el apodo de la selección australiana?",
      options: ["Socceroos", "Kangaroos", "Aussies", "Wallabies"]
    }
  ],
  brasil: [
    {
      question: "¿Cuántas Copas del Mundo ha ganado Brasil?",
      options: ["4", "5", "6", "7"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de Brasil en Mundiales?",
      options: ["Pelé", "Ronaldo", "Neymar", "Rivaldo"]
    },
    {
      question: "¿En qué año Brasil ganó su última Copa del Mundo?",
      options: ["2002", "1994", "1970", "1962"]
    },
    {
      question: "¿Brasil es el único país que ha participado en todos los Mundiales?",
      options: ["Sí", "No", "Comparte el récord", "No se sabe"]
    },
    {
      question: "¿Cuál es el apodo de la selección brasileña?",
      options: ["Canarinha", "Verdeamarela", "Seleção", "Todas las anteriores"]
    }
  ],
  canada: [
    {
      question: "¿Cuántas veces ha participado Canadá en Mundiales?",
      options: ["1", "2", "3", "4"]
    },
    {
      question: "¿Canadá será anfitrión del Mundial 2026?",
      options: ["Sí", "No", "Solo co-anfitrión", "No se sabe"]
    },
    {
      question: "¿Cuál es el mejor resultado de Canadá en un Mundial?",
      options: ["Fase de Grupos", "Octavos de Final", "Nunca clasificó", "Cuartos de Final"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de Canadá?",
      options: ["Alphonso Davies", "Cyle Larin", "Jonathan David", "Dwayne De Rosario"]
    },
    {
      question: "¿En qué confederación juega Canadá?",
      options: ["CONCACAF", "CONMEBOL", "UEFA", "AFC"]
    }
  ],
  colombia: [
    {
      question: "¿Cuál es el mejor resultado de Colombia en un Mundial?",
      options: ["Cuartos de Final", "Octavos de Final", "Fase de Grupos", "Semifinales"]
    },
    {
      question: "¿En qué Mundial Colombia llegó a cuartos de final?",
      options: ["2014", "1990", "1998", "2018"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de Colombia en Mundiales?",
      options: ["James Rodríguez", "Radamel Falcao", "Carlos Valderrama", "Juan Pablo Ángel"]
    },
    {
      question: "¿Cuántas veces ha participado Colombia en Mundiales?",
      options: ["5", "6", "7", "8"]
    },
    {
      question: "¿Cuál es el apodo de la selección colombiana?",
      options: ["Los Cafeteros", "La Tricolor", "Los Dorados", "Todas las anteriores"]
    }
  ],
  "corea-del-sur": [
    {
      question: "¿Cuál es el mejor resultado de Corea del Sur en un Mundial?",
      options: ["Semifinales", "Cuartos de Final", "Octavos de Final", "Fase de Grupos"]
    },
    {
      question: "¿En qué año Corea del Sur llegó a semifinales?",
      options: ["2002", "2010", "2018", "2022"]
    },
    {
      question: "¿Cuántas veces ha participado Corea del Sur en Mundiales?",
      options: ["10", "11", "12", "13"]
    },
    {
      question: "¿Corea del Sur fue anfitrión del Mundial 2002 junto con?",
      options: ["Japón", "China", "Tailandia", "Solo"]
    },
    {
      question: "¿Cuál es el apodo de la selección surcoreana?",
      options: ["Taegeuk Warriors", "Dragones Rojos", "Tigres Asiáticos", "Guerreros Azules"]
    }
  ],
  ecuador: [
    {
      question: "¿Cuál es el mejor resultado de Ecuador en un Mundial?",
      options: ["Octavos de Final", "Fase de Grupos", "Cuartos de Final", "Nunca clasificó"]
    },
    {
      question: "¿En qué año Ecuador llegó a octavos de final?",
      options: ["2006", "2014", "2002", "2018"]
    },
    {
      question: "¿Cuántas veces ha participado Ecuador en Mundiales?",
      options: ["3", "4", "5", "6"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de Ecuador en Mundiales?",
      options: ["Enner Valencia", "Agustín Delgado", "Eduardo Hurtado", "Felipe Caicedo"]
    },
    {
      question: "¿Cuál es el apodo de la selección ecuatoriana?",
      options: ["La Tricolor", "Los Amarillos", "Los Incas", "La Sele"]
    }
  ],
  espana: [
    {
      question: "¿En qué año España ganó su única Copa del Mundo?",
      options: ["2010", "2006", "2014", "2018"]
    },
    {
      question: "¿Quién fue el entrenador de España en el Mundial 2010?",
      options: ["Vicente del Bosque", "Luis Aragonés", "Julen Lopetegui", "Fernando Hierro"]
    },
    {
      question: "¿Cuántas veces ha participado España en Mundiales?",
      options: ["15", "16", "17", "18"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de España en Mundiales?",
      options: ["David Villa", "Fernando Torres", "Raúl", "Fernando Morientes"]
    },
    {
      question: "¿Cuál es el apodo de la selección española?",
      options: ["La Furia Roja", "La Roja", "Los Toros", "Todas las anteriores"]
    }
  ],
  iran: [
    {
      question: "¿Cuántas veces ha participado Irán en Mundiales?",
      options: ["5", "6", "7", "8"]
    },
    {
      question: "¿Cuál es el mejor resultado de Irán en un Mundial?",
      options: ["Fase de Grupos", "Octavos de Final", "Nunca clasificó", "Cuartos de Final"]
    },
    {
      question: "¿Irán ha logrado ganar algún partido en Mundiales?",
      options: ["Sí", "No", "Solo empates", "No se sabe"]
    },
    {
      question: "¿En qué confederación juega Irán?",
      options: ["AFC", "UEFA", "CAF", "OFC"]
    },
    {
      question: "¿Cuál es el apodo de la selección iraní?",
      options: ["Team Melli", "Leones Persas", "Águilas", "Guerreros"]
    }
  ],
  japon: [
    {
      question: "¿Cuál es el mejor resultado de Japón en un Mundial?",
      options: ["Octavos de Final", "Cuartos de Final", "Fase de Grupos", "Semifinales"]
    },
    {
      question: "¿Cuántas veces ha llegado Japón a octavos de final?",
      options: ["4", "3", "2", "1"]
    },
    {
      question: "¿Cuántas veces ha participado Japón en Mundiales?",
      options: ["6", "7", "8", "9"]
    },
    {
      question: "¿Japón fue anfitrión del Mundial 2002 junto con?",
      options: ["Corea del Sur", "China", "Australia", "Solo"]
    },
    {
      question: "¿Cuál es el apodo de la selección japonesa?",
      options: ["Samuráis Azules", "Dragones Azules", "Guerreros del Sol", "Tigres"]
    }
  ],
  jordania: [
    {
      question: "¿Cuántas veces ha participado Jordania en Mundiales?",
      options: ["0", "1", "2", "3"]
    },
    {
      question: "¿Jordania ha clasificado alguna vez a un Mundial?",
      options: ["No", "Sí, una vez", "Sí, dos veces", "No se sabe"]
    },
    {
      question: "¿En qué confederación juega Jordania?",
      options: ["AFC", "UEFA", "CAF", "OFC"]
    },
    {
      question: "¿Cuál es el mejor resultado de Jordania en competiciones internacionales?",
      options: ["Subcampeón Copa Asiática", "Campeón Copa Asiática", "Tercer lugar", "Nunca participó"]
    },
    {
      question: "¿Cuál es el apodo de la selección jordana?",
      options: ["Los Chivalry", "Las Águilas", "Los Guerreros", "Los Leones"]
    }
  ],
  marruecos: [
    {
      question: "¿Cuál es el mejor resultado de Marruecos en un Mundial?",
      options: ["Semifinales", "Cuartos de Final", "Octavos de Final", "Fase de Grupos"]
    },
    {
      question: "¿En qué año Marruecos llegó a semifinales?",
      options: ["2022", "2018", "2014", "1998"]
    },
    {
      question: "¿Cuántas veces ha participado Marruecos en Mundiales?",
      options: ["5", "6", "7", "8"]
    },
    {
      question: "¿Marruecos fue el primer equipo africano en llegar a semifinales?",
      options: ["Sí", "No", "Comparte el récord", "No se sabe"]
    },
    {
      question: "¿Cuál es el apodo de la selección marroquí?",
      options: ["Leones del Atlas", "Leones Rojos", "Águilas", "Guerreros"]
    }
  ],
  mexico: [
    {
      question: "¿Cuántas veces ha participado México en Mundiales?",
      options: ["16", "17", "18", "19"]
    },
    {
      question: "¿Cuál es el mejor resultado de México en un Mundial?",
      options: ["Cuartos de Final", "Octavos de Final", "Semifinales", "Fase de Grupos"]
    },
    {
      question: "¿México será anfitrión del Mundial 2026?",
      options: ["Sí, co-anfitrión", "No", "Solo anfitrión", "No se sabe"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de México en Mundiales?",
      options: ["Javier Hernández", "Cuauhtémoc Blanco", "Luis Hernández", "Hugo Sánchez"]
    },
    {
      question: "¿Cuál es el apodo de la selección mexicana?",
      options: ["El Tri", "Los Aztecas", "La Verde", "Todas las anteriores"]
    }
  ],
  "nueva-zelanda": [
    {
      question: "¿Cuántas veces ha participado Nueva Zelanda en Mundiales?",
      options: ["2", "3", "4", "5"]
    },
    {
      question: "¿Nueva Zelanda ha ganado algún partido en Mundiales?",
      options: ["No", "Sí, uno", "Sí, dos", "Sí, tres"]
    },
    {
      question: "¿En qué confederación juega Nueva Zelanda?",
      options: ["OFC", "AFC", "UEFA", "CONCACAF"]
    },
    {
      question: "¿Cuál es el apodo de la selección neozelandesa?",
      options: ["All Whites", "Kiwis", "Silver Ferns", "Black Caps"]
    },
    {
      question: "¿Cuál es el mejor resultado de Nueva Zelanda en un Mundial?",
      options: ["Fase de Grupos", "Octavos de Final", "Nunca clasificó", "Cuartos de Final"]
    }
  ],
  paraguay: [
    {
      question: "¿Cuál es el mejor resultado de Paraguay en un Mundial?",
      options: ["Cuartos de Final", "Octavos de Final", "Fase de Grupos", "Semifinales"]
    },
    {
      question: "¿En qué año Paraguay llegó a cuartos de final?",
      options: ["2010", "2006", "1998", "2014"]
    },
    {
      question: "¿Cuántas veces ha participado Paraguay en Mundiales?",
      options: ["7", "8", "9", "10"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de Paraguay en Mundiales?",
      options: ["Roque Santa Cruz", "José Cardozo", "Nelson Valdez", "Lucas Barrios"]
    },
    {
      question: "¿Cuál es el apodo de la selección paraguaya?",
      options: ["La Albirroja", "Los Guaraníes", "La Sele", "Los Pynandi"]
    }
  ],
  tunez: [
    {
      question: "¿Cuántas veces ha participado Túnez en Mundiales?",
      options: ["5", "6", "7", "8"]
    },
    {
      question: "¿Cuál es el mejor resultado de Túnez en un Mundial?",
      options: ["Fase de Grupos", "Octavos de Final", "Cuartos de Final", "Nunca clasificó"]
    },
    {
      question: "¿Túnez ha ganado algún partido en Mundiales?",
      options: ["Sí", "No", "Solo empates", "No se sabe"]
    },
    {
      question: "¿En qué confederación juega Túnez?",
      options: ["CAF", "UEFA", "AFC", "CONCACAF"]
    },
    {
      question: "¿Cuál es el apodo de la selección tunecina?",
      options: ["Águilas de Cartago", "Leones del Desierto", "Guerreros", "Halcones"]
    }
  ],
  uruguay: [
    {
      question: "¿Cuántas Copas del Mundo ha ganado Uruguay?",
      options: ["2", "3", "4", "5"]
    },
    {
      question: "¿En qué años ganó Uruguay sus Copas del Mundo?",
      options: ["1930 y 1950", "1950 y 1970", "1930 y 1970", "1950 y 1986"]
    },
    {
      question: "¿Uruguay fue el primer campeón del mundo?",
      options: ["Sí", "No", "Comparte el título", "No se sabe"]
    },
    {
      question: "¿Quién es el máximo goleador histórico de Uruguay en Mundiales?",
      options: ["Óscar Míguez", "Luis Suárez", "Edinson Cavani", "Diego Forlán"]
    },
    {
      question: "¿Cuál es el apodo de la selección uruguaya?",
      options: ["La Celeste", "Los Charrúas", "La Garra Charrúa", "Todas las anteriores"]
    }
  ],
  usa: [
    {
      question: "¿Cuántas veces ha participado Estados Unidos en Mundiales?",
      options: ["10", "11", "12", "13"]
    },
    {
      question: "¿Cuál es el mejor resultado de USA en un Mundial?",
      options: ["Semifinales", "Cuartos de Final", "Octavos de Final", "Fase de Grupos"]
    },
    {
      question: "¿USA será anfitrión del Mundial 2026?",
      options: ["Sí, co-anfitrión", "No", "Solo anfitrión", "No se sabe"]
    },
    {
      question: "¿En qué año USA llegó a semifinales?",
      options: ["1930", "1950", "1994", "2002"]
    },
    {
      question: "¿Cuál es el apodo de la selección estadounidense?",
      options: ["The Stars and Stripes", "Team USA", "USMNT", "Todas las anteriores"]
    }
  ],
  uzbekistan: [
    {
      question: "¿Cuántas veces ha participado Uzbekistán en Mundiales?",
      options: ["0", "1", "2", "3"]
    },
    {
      question: "¿Uzbekistán ha clasificado alguna vez a un Mundial?",
      options: ["No", "Sí, una vez", "Sí, dos veces", "No se sabe"]
    },
    {
      question: "¿En qué confederación juega Uzbekistán?",
      options: ["AFC", "UEFA", "CAF", "OFC"]
    },
    {
      question: "¿Cuál es el mejor resultado de Uzbekistán en competiciones internacionales?",
      options: ["Medalla de Oro Juegos Asiáticos", "Campeón Copa Asiática", "Tercer lugar", "Nunca participó"]
    },
    {
      question: "¿Cuál es el apodo de la selección uzbeka?",
      options: ["Los Leones Blancos", "Los Lobos", "Los Tigres", "Los Guerreros"]
    }
  ]
};

// URLs de videos (el usuario las insertará)
const videoUrls = {
  argentina: "",
  australia: "",
  brasil: "",
  canada: "",
  colombia: "",
  "corea-del-sur": "",
  ecuador: "",
  espana: "",
  iran: "",
  japon: "",
  jordania: "",
  marruecos: "",
  mexico: "",
  "nueva-zelanda": "",
  paraguay: "",
  tunez: "",
  uruguay: "",
  usa: "",
  uzbekistan: ""
};

// Inicialización cuando la escena cargue
document.addEventListener('DOMContentLoaded', function() {
  const scene = document.querySelector('a-scene');
  
  // Configurar botones AR
  scene.addEventListener('loaded', function() {
    document.querySelectorAll('.info-button').forEach(btn => {
      btn.addEventListener('click', function() {
        const country = this.getAttribute('data-country');
        showCountryInfo(country);
      });
    });
  });

  // Eventos de detección - CORREGIDO
  scene.addEventListener('targetFound', (event) => {
    const targetIndex = event.detail.targetIndex;
    console.log("Target encontrado:", targetIndex); // Para debug
    
    // Mapeo directo de índices a países
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

    const detectedCountry = countryMap[targetIndex];
    
    if (detectedCountry) {
      currentCountry = detectedCountry.key;
      
      // Mostrar banner de detección
      const banner = document.getElementById('detectionBanner');
      document.getElementById('bannerTitle').textContent = `${detectedCountry.emoji} ${detectedCountry.name} Detectado`;
      document.getElementById('bannerSubtitle').textContent = 'Contenido interactivo cargado';
      banner.style.background = `linear-gradient(135deg, ${detectedCountry.color}, ${detectedCountry.color}CC)`;
      banner.style.display = 'block';
      
      // Mostrar menú flotante
      document.getElementById('floatingMenu').classList.add('active');
      
      // Ocultar banner después de 3 segundos
      setTimeout(() => {
        banner.style.display = 'none';
      }, 3000);
    }
  });

  scene.addEventListener('targetLost', () => {
    // Ocultar menú cuando se pierde el target
    document.getElementById('floatingMenu').classList.remove('active');
  });
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
document.getElementById('countryInfo').addEventListener('click', function(e) {
  if (e.target === this) {
    closeCountryInfo();
  }
});

// Funciones del menú flotante
function openMenu(type) {
  if (!currentCountry) return;
  
  const country = countries[currentCountry];
  
  switch(type) {
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

// Función para abrir modal de Trivia
function openTriviaModal() {
  if (!currentCountry || !triviaData[currentCountry]) return;
  
  const country = countries[currentCountry];
  const trivia = triviaData[currentCountry];
  
  // Seleccionar pregunta aleatoria
  const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)];
  
  document.getElementById('triviaTitle').textContent = `Trivia - ${country.emoji} ${country.name}`;
  
  const container = document.getElementById('triviaContainer');
  container.innerHTML = `
    <div class="trivia-question">${randomTrivia.question}</div>
    <div class="trivia-options">
      ${randomTrivia.options.map((option, index) => `
        <div class="trivia-option" onclick="selectTriviaOption(this)">
          ${option}
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('triviaModal').classList.add('active');
}

function selectTriviaOption(element) {
  // Remover selección anterior
  document.querySelectorAll('.trivia-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Seleccionar nueva opción
  element.classList.add('selected');
}

// Función para abrir modal de Video
function openVideoModal() {
  if (!currentCountry) return;
  
  const country = countries[currentCountry];
  const videoUrl = videoUrls[currentCountry];
  
  document.getElementById('videoTitle').textContent = `Video - ${country.emoji} ${country.name}`;
  
  const container = document.getElementById('videoContainer');
  
  // Restaurar el contenedor original si fue modificado
  if (!container.querySelector('video')) {
    container.innerHTML = `
      <video id="countryVideo" controls>
        <source src="" type="video/mp4">
        Tu navegador no soporta el elemento de video.
      </video>
    `;
  }
  
  const videoElement = document.getElementById('countryVideo');
  
  if (videoUrl) {
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
  
  // Resetear filtros
  const firstBtn = document.querySelectorAll('.filter-btn')[0];
  if (firstBtn && videoUrl) {
    applyVideoFilter('none', firstBtn);
  }
  
  document.getElementById('videoModal').classList.add('active');
}

function applyVideoFilter(filterType, buttonElement) {
  const video = document.getElementById('countryVideo');
  
  if (!video) return;
  
  // Remover clase active de todos los botones
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Agregar clase active al botón clickeado
  if (buttonElement) {
    buttonElement.classList.add('active');
  }
  
  switch(filterType) {
    case 'grayscale':
      video.style.filter = 'grayscale(100%)';
      break;
    case 'sepia':
      video.style.filter = 'sepia(100%)';
      break;
    case 'saturate':
      video.style.filter = 'saturate(200%)';
      break;
    case 'none':
    default:
      video.style.filter = 'none';
      break;
  }
}

// Función para abrir modal de Estadísticas
function openStatsModal() {
  if (!currentCountry) return;
  
  const country = countries[currentCountry];
  
  document.getElementById('statsTitle').textContent = `Estadísticas - ${country.emoji} ${country.name}`;
  
  const container = document.getElementById('statsContainer');
  container.innerHTML = `
    <div class="stats-field">
      <div class="stats-field-label">Participaciones en Mundiales</div>
      <div class="stats-field-placeholder">Dato a insertar</div>
    </div>
    <div class="stats-field">
      <div class="stats-field-label">Mejor Posición</div>
      <div class="stats-field-placeholder">Dato a insertar</div>
    </div>
    <div class="stats-field">
      <div class="stats-field-label">Máximo Goleador</div>
      <div class="stats-field-placeholder">Dato a insertar</div>
    </div>
    <div class="stats-field">
      <div class="stats-field-label">Último Resultado</div>
      <div class="stats-field-placeholder">Dato a insertar</div>
    </div>
    <div class="stats-field">
      <div class="stats-field-label">Ranking FIFA</div>
      <div class="stats-field-placeholder">Dato a insertar</div>
    </div>
  `;
  
  document.getElementById('statsModal').classList.add('active');
}

// Función para pausar/reanudar animaciones
function animateModel() {
  if (!currentCountry) return;
  
  animationsPaused = !animationsPaused;
  
  // Obtener el modelo del país actual
  const modelId = `${currentCountry}-3d`;
  const model = document.getElementById(modelId);
  
  if (model) {
    const animations = model.getAttribute('animation');
    const animationBounce = model.getAttribute('animation__bounce');
    
    if (animationsPaused) {
      // Pausar animaciones
      if (animations) {
        model.setAttribute('animation', animations + '; paused: true');
      }
      if (animationBounce) {
        model.setAttribute('animation__bounce', animationBounce + '; paused: true');
      }
      
      // Actualizar icono
      document.getElementById('animationIcon').textContent = '▶️';
      
      // Mostrar mensaje
      const banner = document.getElementById('detectionBanner');
      document.getElementById('bannerTitle').textContent = '⏸️ Animación Pausada';
      document.getElementById('bannerSubtitle').textContent = 'La animación del modelo está en pausa';
      banner.style.background = 'linear-gradient(135deg, #fdbb2d, #b21f1f)';
      banner.style.display = 'block';
      
      setTimeout(() => {
        banner.style.display = 'none';
      }, 2000);
    } else {
      // Reanudar animaciones
      if (animations) {
        model.setAttribute('animation', animations.replace('; paused: true', ''));
      }
      if (animationBounce) {
        model.setAttribute('animation__bounce', animationBounce.replace('; paused: true', ''));
      }
      
      // Actualizar icono
      document.getElementById('animationIcon').textContent = '⏸️';
      
      // Mostrar mensaje
      const banner = document.getElementById('detectionBanner');
      document.getElementById('bannerTitle').textContent = '▶️ Animación Reanudada';
      document.getElementById('bannerSubtitle').textContent = 'La animación del modelo está activa';
      banner.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
      banner.style.display = 'block';
      
      setTimeout(() => {
        banner.style.display = 'none';
      }, 2000);
    }
  }
}

// Cerrar modales al hacer clic fuera
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });
});