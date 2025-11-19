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
      question: "¿Qué jugador argentino es el máximo goleador histórico de los Mundiales?",
      options: ["Lionel Messi", "Gabriel Batistuta", "Diego Maradona", "Hernán Crespo"],
      correctAnswer: 0
    },
    {
      question: "¿Cuántas finales ha jugado Argentina?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 2
    },
    {
      question: "¿Qué entrenador ganó el Mundial 1986?",
      options: ["Carlos Bilardo", "César Luis Menotti", "Marcelo Bielsa", "Alejandro Sabella"],
      correctAnswer: 0
    },
    {
      question: "¿Contra qué país ganó Argentina la final de 2022?",
      options: ["Francia", "Brasil", "Alemania", "España"],
      correctAnswer: 0
    }
  ],
  australia: [
    {
      question: "¿En qué año Australia clasificó por primera vez a un Mundial?",
      options: ["1974", "1986", "2006", "2010"],
      correctAnswer: 0
    },
    {
      question: "¿Qué confederación representa desde 2006?",
      options: ["AFC", "OFC", "UEFA", "CONMEBOL"],
      correctAnswer: 0
    },
    {
      question: "¿En qué Mundial llegó por primera vez a octavos?",
      options: ["2006", "2010", "2014", "2022"],
      correctAnswer: 0
    },
    {
      question: "¿Qué selección eliminó a Australia en 2022?",
      options: ["Argentina", "Francia", "Brasil", "España"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo futbolístico?",
      options: ["Socceroos", "Kangaroos", "Aussies", "Wallabies"],
      correctAnswer: 0
    }
  ],
  brasil: [
    {
      question: "¿Cuántas Copas del Mundo ha ganado Brasil?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1
    },
    {
      question: "¿Quién es su máximo goleador en Mundiales?",
      options: ["Pelé", "Ronaldo Nazário", "Neymar", "Rivaldo"],
      correctAnswer: 1
    },
    {
      question: "¿Qué país le ganó 7-1 en 2014?",
      options: ["Alemania", "Argentina", "Francia", "España"],
      correctAnswer: 0
    },
    {
      question: "¿Qué selección enfrentó Brasil en la final de 2002?",
      options: ["Alemania", "Francia", "Italia", "España"],
      correctAnswer: 0
    },
    {
      question: "¿Qué jugador brasileño ganó el Mundial a los 17 años?",
      options: ["Pelé", "Ronaldo", "Neymar", "Ronaldinho"],
      correctAnswer: 0
    }
  ],
  canada: [
    {
      question: "¿En qué año debutó Canadá en un Mundial?",
      options: ["1986", "2002", "2010", "2022"],
      correctAnswer: 0
    },
    {
      question: "¿En qué Mundial anotó su primer gol?",
      options: ["2022", "1986", "2010", "Nunca anotó"],
      correctAnswer: 0
    },
    {
      question: "¿Qué confederación representa?",
      options: ["CONCACAF", "CONMEBOL", "UEFA", "AFC"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es el apodo del equipo?",
      options: ["Canucks", "Maple Leafs", "Canadiens", "No tiene apodo oficial"],
      correctAnswer: 3
    },
    {
      question: "¿Qué jugador es su mayor figura reciente?",
      options: ["Alphonso Davies", "Cyle Larin", "Jonathan David", "Atiba Hutchinson"],
      correctAnswer: 0
    }
  ],
  colombia: [
    {
      question: "¿En qué año debutó Colombia en un Mundial?",
      options: ["1962", "1990", "1994", "1998"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál ha sido su mejor participación?",
      options: ["Cuartos 2014", "Octavos 1990", "Fase de grupos 1998", "Octavos 2018"],
      correctAnswer: 0
    },
    {
      question: "¿Qué jugador marcó el famoso gol olímpico en 2014?",
      options: ["James Rodríguez", "Juan Cuadrado", "Carlos Bacca", "Radamel Falcao"],
      correctAnswer: 0
    },
    {
      question: "¿Qué país eliminó a Colombia en octavos 2014?",
      options: ["Brasil", "Argentina", "Alemania", "Francia"],
      correctAnswer: 0
    },
    {
      question: "¿Quién es su goleador mundialista?",
      options: ["James Rodríguez", "Radamel Falcao", "Carlos Valderrama", "Juan Pablo Ángel"],
      correctAnswer: 0
    }
  ],
  "corea-del-sur": [
    {
      question: "¿En qué año fue semifinalista?",
      options: ["2002", "2010", "2018", "2022"],
      correctAnswer: 0
    },
    {
      question: "¿Qué selección coorganizó el Mundial 2002 con Corea?",
      options: ["Japón", "China", "Australia", "Tailandia"],
      correctAnswer: 0
    },
    {
      question: "¿A qué potencia eliminó Corea del Sur en 2018?",
      options: ["Alemania", "Brasil", "Argentina", "España"],
      correctAnswer: 0
    },
    {
      question: "¿Cuántas participaciones tiene?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 1
    },
    {
      question: "¿Qué jugador ha ido a cuatro Mundiales recientes (2010–2022)?",
      options: ["Son Heung-min", "Park Ji-sung", "Lee Young-pyo", "Ki Sung-yueng"],
      correctAnswer: 0
    }
  ],
  ecuador: [
    {
      question: "¿En qué año debutó Ecuador en un Mundial?",
      options: ["2002", "2006", "2014", "2018"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál fue su mejor participación?",
      options: ["Octavos 2006", "Fase de grupos 2002", "Fase de grupos 2014", "Fase de grupos 2022"],
      correctAnswer: 0
    },
    {
      question: "¿Quién anotó el primer gol en Qatar 2022?",
      options: ["Enner Valencia", "Michael Estrada", "Gonzalo Plata", "Moises Caicedo"],
      correctAnswer: 0
    },
    {
      question: "¿Qué país eliminó a Ecuador en 2006?",
      options: ["Inglaterra", "Alemania", "Argentina", "Brasil"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["La Tricolor", "Los Amarillos", "Los Incas", "La Sele"],
      correctAnswer: 0
    }
  ],
  espana: [
    {
      question: "¿En qué año ganó su único Mundial?",
      options: ["2010", "2006", "2014", "2018"],
      correctAnswer: 0
    },
    {
      question: "¿A quién venció en la final?",
      options: ["Holanda", "Alemania", "Brasil", "Argentina"],
      correctAnswer: 0
    },
    {
      question: "¿Qué estilo de juego la caracterizó en 2010?",
      options: ["Tiki-taka", "Contraataque", "Juego directo", "Defensivo"],
      correctAnswer: 0
    },
    {
      question: "¿Qué jugador marcó el gol del título?",
      options: ["Andrés Iniesta", "David Villa", "Fernando Torres", "Xavi Hernández"],
      correctAnswer: 0
    },
    {
      question: "¿Cuántas participaciones tiene España?",
      options: ["15", "16", "17", "18"],
      correctAnswer: 1
    }
  ],
  iran: [
    {
      question: "¿Cuántas veces ha clasificado Irán?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1
    },
    {
      question: "¿En qué Mundial consiguió su primera victoria?",
      options: ["1998", "2006", "2014", "2018"],
      correctAnswer: 0
    },
    {
      question: "¿Qué rival venció Irán en 1998?",
      options: ["Estados Unidos", "Alemania", "Yugoslavia", "Marruecos"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["Team Melli", "Leones Persas", "Águilas", "Guerreros"],
      correctAnswer: 0
    },
    {
      question: "¿Qué jugador moderno ha sido su estrella reciente?",
      options: ["Sardar Azmoun", "Ali Daei", "Mehdi Taremi", "Javad Nekounam"],
      correctAnswer: 0
    }
  ],
  japon: [
    {
      question: "¿Cuántas veces ha llegado a octavos?",
      options: ["4", "3", "2", "1"],
      correctAnswer: 0
    },
    {
      question: "¿Qué selección remontó Japón en 2022?",
      options: ["España", "Alemania", "Costa Rica", "Croacia"],
      correctAnswer: 2
    },
    {
      question: "¿Cuál es su confederación?",
      options: ["AFC", "UEFA", "CAF", "OFC"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["Samuráis Azules", "Dragones Azules", "Guerreros del Sol", "Tigres"],
      correctAnswer: 0
    },
    {
      question: "¿En qué año coorganizó el Mundial?",
      options: ["2002", "2010", "2018", "2022"],
      correctAnswer: 0
    }
  ],
  jordania: [
    {
      question: "¿En qué año estuvo más cerca de clasificar?",
      options: ["2014", "2010", "2018", "2022"],
      correctAnswer: 0
    },
    {
      question: "¿Qué confederación representa?",
      options: ["AFC", "UEFA", "CAF", "OFC"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["Los Chivalry", "Las Águilas", "Los Guerreros", "Los Leones"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su mejor jugador histórico?",
      options: ["Hassan Abdel-Fattah", "Amer Deeb", "Baha' Abdel-Rahman", "Ahmad Hayel"],
      correctAnswer: 0
    },
    {
      question: "¿Qué selección eliminó a Jordania en repechaje 2014?",
      options: ["Uruguay", "México", "Australia", "Nueva Zelanda"],
      correctAnswer: 0
    }
  ],
  marruecos: [
    {
      question: "¿En qué año debutó Marruecos en un Mundial?",
      options: ["1970", "1986", "1994", "1998"],
      correctAnswer: 0
    },
    {
      question: "¿Qué selección eliminó para llegar a semis 2022?",
      options: ["España y Portugal", "Brasil y Argentina", "Francia y Alemania", "Inglaterra e Italia"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["Leones del Atlas", "Leones Rojos", "Águilas", "Guerreros"],
      correctAnswer: 0
    },
    {
      question: "¿Cuántas participaciones tiene?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1
    },
    {
      question: "¿Quién es su portero icónico de 2022?",
      options: ["Bono", "Munir", "Tagnaouti", "Benoun"],
      correctAnswer: 0
    }
  ],
  mexico: [
    {
      question: "¿Cuántas veces ha sido local?",
      options: ["2", "1", "3", "0"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["El Tri", "Los Aztecas", "La Verde", "Todas las anteriores"],
      correctAnswer: 3
    },
    {
      question: "¿A cuántos mundiales consecutivos ha asistido?",
      options: ["7", "8", "9", "10"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su mayor logro (últimas décadas)?",
      options: ["Cuartos 1986", "Octavos 1994", "Octavos 2010", "Octavos 2018"],
      correctAnswer: 0
    },
    {
      question: "¿Qué jugador marcó el gol \"de la tijera\" en 2018?",
      options: ["Javier Hernández", "Carlos Vela", "Hirving Lozano", "Andrés Guardado"],
      correctAnswer: 1
    }
  ],
  "nueva-zelanda": [
    {
      question: "¿Cuántos Mundiales ha jugado?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 0
    },
    {
      question: "¿Qué año se fue invicto del Mundial?",
      options: ["2010", "1982", "2006", "2022"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su confederación?",
      options: ["OFC", "AFC", "UEFA", "CONCACAF"],
      correctAnswer: 0
    },
    {
      question: "¿Contra qué gigante empató en 2010?",
      options: ["Italia", "Brasil", "Argentina", "España"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["All Whites", "Kiwis", "Silver Ferns", "Black Caps"],
      correctAnswer: 0
    }
  ],
  paraguay: [
    {
      question: "¿En qué año llegó Paraguay a cuartos?",
      options: ["2010", "2006", "1998", "2014"],
      correctAnswer: 0
    },
    {
      question: "¿Qué selección lo eliminó en 2010?",
      options: ["España", "Alemania", "Holanda", "Brasil"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su confederación?",
      options: ["CONMEBOL", "CONCACAF", "UEFA", "AFC"],
      correctAnswer: 0
    },
    {
      question: "¿Qué portero paraguayo fue figura en 2010?",
      options: ["Justo Villar", "Roberto Fernández", "Diego Barreto", "Antony Silva"],
      correctAnswer: 0
    },
    {
      question: "¿Qué jugador es su goleador mundialista?",
      options: ["Roque Santa Cruz", "José Cardozo", "Nelson Valdez", "Lucas Barrios"],
      correctAnswer: 1
    }
  ],
  tunez: [
    {
      question: "¿En qué año debutó Túnez?",
      options: ["1978", "1986", "1998", "2002"],
      correctAnswer: 0
    },
    {
      question: "¿Qué selección venció Túnez en 1978?",
      options: ["México", "Alemania", "Polonia", "Argentina"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su confederación?",
      options: ["CAF", "UEFA", "AFC", "CONCACAF"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["Águilas de Cartago", "Leones del Desierto", "Guerreros", "Halcones"],
      correctAnswer: 0
    },
    {
      question: "¿Cuántas participaciones tiene?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1
    }
  ],
  uruguay: [
    {
      question: "¿Cuántas Copas del Mundo ganó Uruguay?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 0
    },
    {
      question: "¿En qué estadio fue el primer Mundial?",
      options: ["Estadio Centenario", "Maracaná", "Wembley", "San Siro"],
      correctAnswer: 0
    },
    {
      question: "¿Qué jugador marcó el \"gol del siglo\" en 2010?",
      options: ["Diego Forlán", "Luis Suárez", "Edinson Cavani", "Álvaro Recoba"],
      correctAnswer: 0
    },
    {
      question: "¿Cuántas participaciones tiene Uruguay?",
      options: ["13", "14", "15", "16"],
      correctAnswer: 1
    },
    {
      question: "¿Contra quién fue su final de 1950?",
      options: ["Brasil", "Argentina", "España", "Suecia"],
      correctAnswer: 0
    }
  ],
  usa: [
    {
      question: "¿En qué Mundial llegó a semifinales?",
      options: ["1930", "1950", "1994", "2002"]
    },
    {
      question: "¿Cuál es su confederación?",
      options: ["CONCACAF", "CONMEBOL", "UEFA", "AFC"]
    },
    {
      question: "¿Qué selección eliminó a EE.UU. en 2014?",
      options: ["Bélgica", "Alemania", "Argentina", "Holanda"]
    },
    {
      question: "¿Cómo se llama su liga profesional?",
      options: ["MLS", "USL", "NASL", "USSF"]
    },
    {
      question: "¿Quién es su mayor figura actual?",
      options: ["Christian Pulisic", "Clint Dempsey", "Landon Donovan", "Tim Howard"]
    }
  ],
  uzbekistan: [
    {
      question: "¿Qué confederación representa?",
      options: ["AFC", "UEFA", "CAF", "OFC"]
    },
    {
      question: "¿Cuál es su mejor ranking en Asia?",
      options: ["Top 5", "Top 10", "Top 15", "Top 20"]
    },
    {
      question: "¿Qué generaciones fueron más fuertes?",
      options: ["2000s y 2010s", "1990s y 2000s", "2010s y 2020s", "1980s y 1990s"]
    },
    {
      question: "¿Qué selección lo eliminó en repechaje 2014?",
      options: ["Jordania", "Australia", "Irán", "Corea del Sur"]
    },
    {
      question: "¿Cuál es su apodo?",
      options: ["Los Leones Blancos", "Los Lobos", "Los Tigres", "Los Guerreros"]
    }
  ]
};

// Estadísticas por país
const countryStats = {
  argentina: {
    participaciones: "18",
    mejorPosicion: "Campeón",
    maximoGoleador: "Lionel Messi",
    ultimoResultado: "Campeón 2022",
    rankingFIFA: "Top 3"
  },
  australia: {
    participaciones: "6",
    mejorPosicion: "Octavos (2006, 2022)",
    maximoGoleador: "Tim Cahill",
    ultimoResultado: "Octavos 2022",
    rankingFIFA: "Top 30"
  },
  brasil: {
    participaciones: "22 (único en todos)",
    mejorPosicion: "Campeón",
    maximoGoleador: "Ronaldo Nazário",
    ultimoResultado: "Cuartos 2022",
    rankingFIFA: "Top 5"
  },
  canada: {
    participaciones: "2",
    mejorPosicion: "Fase de grupos",
    maximoGoleador: "Alphonso Davies",
    ultimoResultado: "Fase de grupos 2022",
    rankingFIFA: "Top 50"
  },
  colombia: {
    participaciones: "6",
    mejorPosicion: "Cuartos (2014)",
    maximoGoleador: "James Rodríguez",
    ultimoResultado: "Octavos 2018",
    rankingFIFA: "Top 20"
  },
  "corea-del-sur": {
    participaciones: "11",
    mejorPosicion: "Cuarto lugar (2002)",
    maximoGoleador: "Son Heung-min",
    ultimoResultado: "Octavos 2022",
    rankingFIFA: "Top 30"
  },
  ecuador: {
    participaciones: "4",
    mejorPosicion: "Octavos (2006)",
    maximoGoleador: "Enner Valencia",
    ultimoResultado: "Fase de grupos 2022",
    rankingFIFA: "Top 50"
  },
  espana: {
    participaciones: "16",
    mejorPosicion: "Campeón (2010)",
    maximoGoleador: "David Villa",
    ultimoResultado: "Octavos 2022",
    rankingFIFA: "Top 10"
  },
  iran: {
    participaciones: "6",
    mejorPosicion: "Fase de grupos",
    maximoGoleador: "Sardar Azmoun",
    ultimoResultado: "Fase de grupos 2022",
    rankingFIFA: "Top 25"
  },
  japon: {
    participaciones: "7",
    mejorPosicion: "Octavos (varios)",
    maximoGoleador: "Keisuke Honda / Minamino",
    ultimoResultado: "Octavos 2022",
    rankingFIFA: "Top 25"
  },
  jordania: {
    participaciones: "0",
    mejorPosicion: "Nunca clasificó",
    maximoGoleador: "N/A",
    ultimoResultado: "Repechaje 2014",
    rankingFIFA: "Top 100"
  },
  marruecos: {
    participaciones: "6",
    mejorPosicion: "Semifinales (2022)",
    maximoGoleador: "Hakim Ziyech / Bono",
    ultimoResultado: "Semifinales 2022",
    rankingFIFA: "Top 15"
  },
  mexico: {
    participaciones: "17",
    mejorPosicion: "Cuartos (1970, 1986)",
    maximoGoleador: "Luis Hernández",
    ultimoResultado: "Fase de grupos 2022",
    rankingFIFA: "Top 20"
  },
  "nueva-zelanda": {
    participaciones: "2",
    mejorPosicion: "Fase de grupos",
    maximoGoleador: "N/A",
    ultimoResultado: "Fase de grupos 2010",
    rankingFIFA: "Top 120"
  },
  paraguay: {
    participaciones: "8",
    mejorPosicion: "Cuartos (2010)",
    maximoGoleador: "Roque Santa Cruz",
    ultimoResultado: "No clasificó 2022",
    rankingFIFA: "Top 50"
  },
  tunez: {
    participaciones: "6",
    mejorPosicion: "Fase de grupos",
    maximoGoleador: "N/A",
    ultimoResultado: "Fase de grupos 2022",
    rankingFIFA: "Top 40"
  },
  uruguay: {
    participaciones: "14",
    mejorPosicion: "Campeón (1930, 1950)",
    maximoGoleador: "Óscar Míguez",
    ultimoResultado: "Fase de grupos 2022",
    rankingFIFA: "Top 20"
  },
  usa: {
    participaciones: "11",
    mejorPosicion: "Semifinales (1930)",
    maximoGoleador: "Landon Donovan",
    ultimoResultado: "Octavos 2022",
    rankingFIFA: "Top 15"
  },
  uzbekistan: {
    participaciones: "0",
    mejorPosicion: "Nunca clasificó",
    maximoGoleador: "N/A",
    ultimoResultado: "Repechaje mundialista",
    rankingFIFA: "Top 80"
  }
};

// URLs de videos
const videoUrls = {
  argentina: "https://youtu.be/FA1sR2SZAlY", // "Argentina Campeón del Mundo 2022 – Resumen oficial FIFA"
  australia: "https://youtu.be/KvSiRNO1BTY", // "Australia vs Argentina – Octavos Qatar 2022 Highlights"
  brasil: "https://youtu.be/AZAX5P_Q4Jg", // "Brasil mejores goles en Copas del Mundo – FIFA Archive"
  canada: "https://youtu.be/-6fQh_KzD70", // "Canadá vs Croacia – Mundial Qatar 2022 Resumen"
  colombia: "https://youtu.be/NsbsexDY6nI", // "Colombia mejores goles en Copas del Mundo"
  "corea-del-sur": "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Corea del Sur vs Alemania 2018 – Partido histórico"
  ecuador: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Ecuador vs Qatar – Apertura Mundial 2022 Resumen"
  espana: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "España Campeón del Mundo 2010 – Highlights Oficiales"
  iran: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Irán vs Marruecos – Mundial 2018 Resumen"
  japon: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Japón vs Alemania – Mundial 2022"
  jordania: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Jordania – mejores momentos eliminatorias AFC"
  marruecos: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Marruecos histórico semifinalista – Qatar 2022"
  mexico: "https://youtu.be/6BSeFs40QOI", // "México vs Alemania 2018 – Partido Histórico"
  "nueva-zelanda": "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Nueva Zelanda en Sudáfrica 2010 – Resumen"
  paraguay: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Paraguay en Sudáfrica 2010 – Mejores momentos"
  tunez: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Túnez vs Francia – Mundial 2022 Resumen"
  uruguay: "https://www.youtube.com/embed/dQw4w9WgXcQ", // "Uruguay – Historia en los Mundiales FIFA"
  usa: "https://youtu.be/zAnCLeoHI1s", // "USA vs Portugal 2014 – Partido épico"
  uzbekistan: "https://www.youtube.com/embed/dQw4w9WgXcQ" // "Uzbekistán mejores momentos – Eliminatorias AFC"
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
      
      // Activar menú flotante (siempre visible, pero se resalta cuando hay país)
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
      const model = target.querySelector('a-gltf-model');
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
    
    // Si ningún modelo está visible, resetear
    if (lastDetectedCountry) {
      lastDetectedCountry = null;
    }
  }

  // Escuchar eventos en cada target individual - ESTO ES LO QUE FUNCIONA EN MINDAR
  scene.addEventListener('loaded', function() {
    // Esperar a que la escena esté completamente cargada
    setTimeout(() => {
      const targets = document.querySelectorAll('[mindar-image-target]');
      
      targets.forEach((target, index) => {
        // Obtener el targetIndex del atributo
        const targetAttr = target.getAttribute('mindar-image-target');
        let targetIndex = index;
        
        // Verificar que targetAttr sea una cadena antes de hacer match
        if (targetAttr && typeof targetAttr === 'string') {
          const targetIndexMatch = targetAttr.match(/targetIndex:\s*(\d+)/);
          if (targetIndexMatch) {
            targetIndex = parseInt(targetIndexMatch[1]);
          }
        }
        
        // Escuchar evento targetFound
        target.addEventListener('targetFound', function() {
          showCountryMenu(targetIndex);
        });
        
        // Escuchar evento targetLost
        target.addEventListener('targetLost', function() {
          const floatingMenu = document.getElementById('floatingMenu');
          const menuHeader = document.getElementById('menuHeader');
          if (floatingMenu) {
            floatingMenu.classList.remove('has-country');
            // Actualizar header pero mantener el país actual para que el menú siga funcionando
            if (menuHeader && currentCountry) {
              const country = countries[currentCountry];
              if (country) {
                menuHeader.querySelector('.menu-header-text').textContent = `${country.emoji} ${country.name} (sin señal)`;
              }
            }
          }
        });
      });
      
      // También verificar periódicamente qué modelo está visible (fallback)
      setInterval(detectVisibleCountry, 500);
    }, 1000); // Esperar 1 segundo para que todo esté cargado
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

// Función para abrir el manual de usuario
function openManual() {
  const manualModal = document.getElementById('manualModal');
  if (manualModal) {
    manualModal.classList.add('active');
  }
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
  
  // Si todas las preguntas fueron contestadas, reiniciar el ciclo
  if (unansweredIndices.length === 0) {
    answeredQuestions[countryKey] = [];
    const randomIndex = Math.floor(Math.random() * trivia.length);
    return { question: trivia[randomIndex], index: randomIndex };
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
  if (!questionData) return;
  
  currentTriviaQuestion = questionData.question;
  currentTriviaQuestionIndex = questionData.index;
  triviaAnswered = false;
  
  document.getElementById('triviaTitle').textContent = `Trivia - ${country.emoji} ${country.name}`;
  
  const container = document.getElementById('triviaContainer');
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
  if (currentCountry && currentTriviaQuestionIndex !== null) {
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
  
  if (!questionData) {
    // No debería pasar, pero por si acaso
    return;
  }
  
  currentTriviaQuestion = questionData.question;
  currentTriviaQuestionIndex = questionData.index;
  triviaAnswered = false;
  
  const container = document.getElementById('triviaContainer');
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

// Función para abrir modal de Video
// Función para convertir cualquier formato de URL de YouTube al formato de embed
function convertYouTubeUrl(url) {
  if (!url) return null;
  
  // Si ya está en formato embed, retornarlo tal cual
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  let videoId = null;
  
  // Formato corto: https://youtu.be/VIDEO_ID o https://youtu.be/VIDEO_ID?t=123
  const shortMatch = url.match(/(?:youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    videoId = shortMatch[1];
  }
  
  // Formato estándar: https://www.youtube.com/watch?v=VIDEO_ID
  if (!videoId) {
    const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/v\/)([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
      videoId = watchMatch[1];
    }
  }
  
  // Si encontramos un video ID, convertir a formato embed
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // Si no se pudo convertir, retornar la URL original (podría ser otro formato válido)
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
    // Convertir la URL al formato de embed si es necesario
    videoUrl = convertYouTubeUrl(videoUrl);
    
    // Usar iframe para YouTube
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
  
  // Aplicar filtros CSS al iframe (funciona con YouTube embeds)
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

// Función para pausar/reanudar animaciones
function animateModel() {
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
      }, 2000);
    }
    return;
  }
  
  // Obtener el modelo del país actual
  const modelId = `${currentCountry}-3d`;
  const model = document.getElementById(modelId);
  
  if (!model) {
    console.warn(`Modelo no encontrado: ${modelId}`);
    return;
  }
  
  // Cambiar el estado de pausa
  animationsPaused = !animationsPaused;
  
  // Obtener los componentes de animación
  const animationComponent = model.components.animation;
  const animationBounceComponent = model.components['animation__bounce'];
  
  if (animationsPaused) {
    // Pausar animaciones usando la API de A-Frame
    // A-Frame usa TWEEN.js internamente, accedemos directamente a los tweens
    if (animationComponent) {
      const currentAnim = model.getAttribute('animation');
      if (currentAnim && animationComponent.tween) {
        animationComponent.tween.pause();
      } else if (currentAnim) {
        // Si no hay tween directo, usar setAttribute
        const animObj = typeof currentAnim === 'string' ? {} : currentAnim;
        model.setAttribute('animation', Object.assign({}, animObj, { paused: true }));
      }
    }
    if (animationBounceComponent) {
      const currentBounce = model.getAttribute('animation__bounce');
      if (currentBounce && animationBounceComponent.tween) {
        animationBounceComponent.tween.pause();
      } else if (currentBounce) {
        const bounceObj = typeof currentBounce === 'string' ? {} : currentBounce;
        model.setAttribute('animation__bounce', Object.assign({}, bounceObj, { paused: true }));
      }
    }
    
    // Actualizar icono
    const icon = document.getElementById('animationIcon');
    if (icon) {
      icon.textContent = '▶️';
    }
    
    // Mostrar mensaje
    const banner = document.getElementById('detectionBanner');
    if (banner) {
      document.getElementById('bannerTitle').textContent = '⏸️ Animación Pausada';
      document.getElementById('bannerSubtitle').textContent = 'La animación del modelo está en pausa';
      banner.style.background = 'linear-gradient(135deg, #fdbb2d, #b21f1f)';
      banner.style.display = 'block';
      
      setTimeout(() => {
        banner.style.display = 'none';
      }, 2000);
    }
  } else {
    // Reanudar animaciones usando la API de A-Frame
    if (animationComponent) {
      const currentAnim = model.getAttribute('animation');
      if (currentAnim && animationComponent.tween) {
        animationComponent.tween.resume();
      } else if (currentAnim) {
        const animObj = typeof currentAnim === 'string' ? {} : currentAnim;
        const { paused, ...rest } = animObj;
        model.setAttribute('animation', rest);
      }
    }
    if (animationBounceComponent) {
      const currentBounce = model.getAttribute('animation__bounce');
      if (currentBounce && animationBounceComponent.tween) {
        animationBounceComponent.tween.resume();
      } else if (currentBounce) {
        const bounceObj = typeof currentBounce === 'string' ? {} : currentBounce;
        const { paused, ...rest } = bounceObj;
        model.setAttribute('animation__bounce', rest);
      }
    }
    
    // Actualizar icono
    const icon = document.getElementById('animationIcon');
    if (icon) {
      icon.textContent = '⏸️';
    }
    
    // Mostrar mensaje
    const banner = document.getElementById('detectionBanner');
    if (banner) {
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