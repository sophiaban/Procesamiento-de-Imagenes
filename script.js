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
      
      // Ocultar banner después de 3 segundos
      setTimeout(() => {
        banner.style.display = 'none';
      }, 3000);
    }
  });

  scene.addEventListener('targetLost', () => {
    // Mantener el país actual hasta que se detecte uno nuevo
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