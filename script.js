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
      question: "¿Quién fue el capitán de Argentina en el Mundial de 1986? ",
      options: ["Daniel Passarella", "Mario Kempes ", "Jorge Valdano", "Diego Maradona"],
      correctAnswer: 3
    },
    {
      question: "¿Contra qué país ganó Argentina la final de 2022?",
      options: ["Francia", "Brasil", "Alemania", "España"],
      correctAnswer: 0
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

  ],
  brasil: [
    {
      question: "¿Cuántas Copas del Mundo ha ganado Brasil?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1
    },

  ],
  canada: [
    {
      question: "¿En qué año debutó Canadá en un Mundial?",
      options: ["1986", "2002", "2010", "2022"],
      correctAnswer: 0
    },

  ]
};

// Estadísticas por país
const countryStats = {
  argentina: {
    participaciones: "18",
    mejorPosicion: "Campeón",
    maximoGoleador: "Lionel Messi",
    ultimoResultado: "Campeón 2022",
    rankingFIFA: "Top 2"
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
   espana: {
    participaciones: "16",
    mejorPosicion: "Campeon 2010",
    maximoGoleador: "David Villa",
    ultimoResultado: "Octavos de final 2022",
    rankingFIFA: "Top 1"
  },
   japon: {
    participaciones: "7",
    mejorPosicion: "Octavos de final 2022",
    maximoGoleador: "Kunishige Kamamoto",
    ultimoResultado: "Octavos de final 2022",
    rankingFIFA: "Top 19"
  },
   mexico: {
    participaciones: "17",
    mejorPosicion: "Cuartos de final 1986",
    maximoGoleador: "Javier Hernández",
    ultimoResultado: "Fases de grupos 2022",
    rankingFIFA: "Top 16"
  },
    tunez:{
    participaciones: "6",
    mejorPosicion: "Fases de grupos 2022",
    maximoGoleador: "Issam Jemâa",
    ultimoResultado: "Fases de grupos 2022",
    rankingFIFA: "Top 41"
  },
   uruguay:{
    participaciones: "14",
    mejorPosicion: "Campeón 1950",
    maximoGoleador: "Luis Suárez",
    ultimoResultado: "Fases de grupos 2022",
    rankingFIFA: "Top 17"
  },
  uzbekistan:{
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
  argentina: "https://youtu.be/FA1sR2SZAlY",
  australia: "https://youtu.be/KvSiRNO1BTY",
  brasil: "https://youtu.be/AZAX5P_Q4Jg",

};


document.addEventListener('DOMContentLoaded', function () {
  const scene = document.querySelector('a-scene');
scene.addEventListener('loaded', function() {
    document.querySelectorAll('.info-button').forEach(btn => {
      btn.addEventListener('click', function() {
        const country = this.getAttribute('data-country');
        showCountryInfo(country);
      });
    });

    // 🔥 Aquí agregas lo nuevo
    document.querySelectorAll('[mindar-image-target]').forEach((target, index) => {
      target.addEventListener('targetFound', () => {
        showCountryMenu(index); // activa menú y trivia
      });

      target.addEventListener('targetLost', () => {
        const flagModel = document.getElementById(`${currentCountry}-flag-model`);
        if (flagModel) {
          flagModel.object3D.visible = false;
        }
        currentCountry = null; // resetea país
      });
    });
  });

  // También verificar periódicamente qué modelo está visible (fallback)
  setInterval(detectVisibleCountry, 500);
});



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
  const scene = document.querySelector('a-scene');
  
  // Configurar botones AR
  scene.addEventListener('loaded', function() {
    document.querySelectorAll('.info-button').forEach(btn => {
      btn.addEventListener('click', function() {
        const country = this.getAttribute('data-country');
        showCountryInfo(country);
      });
    });

    //  Detectar banderas con eventos nativos de MindAR
    document.querySelectorAll('[mindar-image-target]').forEach((target, index) => {
      target.addEventListener('targetFound', () => {
        showCountryMenu(index); // activa menú y trivia
      });

      target.addEventListener('targetLost', () => {
        const flagModel = document.getElementById(`${currentCountry}-flag-model`);
        if (flagModel) {
          flagModel.object3D.visible = false;
        }
        currentCountry = null; // resetea país
      });
    });
  });

  // También verificar periódicamente qué modelo está visible (fallback)
  setInterval(detectVisibleCountry, 500);
  });
;

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
      document.getElementById('bannerTitle').textContent = ' No hay país detectado';
      document.getElementById('bannerSubtitle').textContent = 'Escanea una bandera primero';
      banner.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a6f)';
      banner.style.display = 'block';
      setTimeout(() => {
        banner.style.display = 'none';
      }, 2000);
    }
    return;
  }

  const modelId = `${currentCountry}-3d`;
  const model = document.getElementById(modelId);

  if (!model) {
    console.warn(`Modelo no encontrado: ${modelId}`);
    return;
  }

  animationsPaused = !animationsPaused;

  const animationComponent = model.components.animation;
  const animationBounceComponent = model.components['animation__bounce'];

  if (animationsPaused) {
    if (animationComponent) {
      const currentAnim = model.getAttribute('animation');
      if (currentAnim && animationComponent.tween) {
        animationComponent.tween.pause();
      } else if (currentAnim) {
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

    const icon = document.getElementById('animationIcon');
    if (icon) {
      icon.textContent = '▶️';
    }

    const banner = document.getElementById('detectionBanner');
    if (banner) {
      document.getElementById('bannerTitle').textContent = '⏸ Animación Pausada';
      document.getElementById('bannerSubtitle').textContent = 'La animación del modelo está en pausa';
      banner.style.background = 'linear-gradient(135deg, #fdbb2d, #b21f1f)';
      banner.style.display = 'block';

      setTimeout(() => {
        banner.style.display = 'none';
      }, 2000);
    }
  } else {
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

    const icon = document.getElementById('animationIcon');
    if (icon) {
      icon.textContent = '⏸️';
    }

    const banner = document.getElementById('detectionBanner');
    if (banner) {
      document.getElementById('bannerTitle').textContent = '▶ Animación Reanudada';
      document.getElementById('bannerSubtitle').textContent = 'La animación del modelo está activa';
      banner.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
      banner.style.display = 'block';

      setTimeout(() => {
        banner.style.display = 'none';
      }, 2000);
    }
  }
}

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function (e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });
});