/**
 * TEATRO DEL CAMALEÓN - RENDERIZADO GEOMÉTRICO
 * Total de figuras: 42
 */

// 1. DEFINICIÓN DEL MODELO (Objetos geométricos)
const chameleonModel = [
    // --- RAMA (3 figuras) ---
    { type: 'poly', pts: [[50, 520], [850, 480], [860, 540], [60, 580]], color: '#4E342E' }, // Base
    { type: 'poly', pts: [[650, 495], [720, 380], [750, 395], [680, 493]], color: '#5D4037' }, // Rama secundaria
    { type: 'poly', pts: [[200, 555], [120, 650], [160, 660], [230, 552]], color: '#3E2723' }, // Rama baja

    // --- CUERPO (12 figuras de mosaico) ---
    { type: 'poly', pts: [[350, 300], [650, 270], [720, 450], [380, 510]], color: '#43A047' }, // Tronco Central
    { type: 'poly', pts: [[350, 300], [380, 510], [250, 430]], color: '#66BB6A' },            // Hombro izquierdo
    { type: 'poly', pts: [[350, 300], [520, 220], [650, 270]], color: '#81C784' },            // Lomo superior
    { type: 'poly', pts: [[650, 270], [750, 290], [780, 420], [720, 450]], color: '#2E7D32' }, // Cadera
    { type: 'poly', pts: [[380, 510], [720, 450], [600, 540]], color: '#A5D6A7' },            // Vientre bajo
    // Manchas decorativas
    { type: 'poly', pts: [[450, 330], [500, 325], [490, 410], [440, 400]], color: '#1B5E20' },
    { type: 'poly', pts: [[570, 310], [620, 305], [630, 380], [580, 390]], color: '#C8E6C9' },
    { type: 'poly', pts: [[400, 450], [460, 440], [455, 495], [410, 490]], color: '#FFF59D' },
    { type: 'poly', pts: [[530, 440], [580, 430], [575, 480], [535, 475]], color: '#FFB74D' },
    // Espinas del lomo
    { type: 'poly', pts: [[380, 280], [410, 270], [400, 230]], color: '#1B5E20' },
    { type: 'poly', pts: [[480, 240], [510, 230], [500, 190]], color: '#1B5E20' },
    { type: 'poly', pts: [[580, 250], [610, 240], [600, 205]], color: '#1B5E20' },

    // --- CABEZA (10 figuras) ---
    { type: 'poly', pts: [[250, 430], [320, 280], [120, 300], [100, 420]], color: '#388E3C' }, // Cráneo
    { type: 'poly', pts: [[100, 420], [120, 300], [40, 380]], color: '#81C784' },            // Hocico
    { type: 'poly', pts: [[100, 420], [250, 430], [230, 480], [110, 470]], color: '#1B5E20' }, // Mandíbula
    // Crestas Superiores (Efecto abanico)
    { type: 'poly', pts: [[320, 280], [340, 150], [230, 250]], color: '#FF9800' },
    { type: 'poly', pts: [[230, 250], [260, 130], [160, 200]], color: '#FB8C00' },
    { type: 'poly', pts: [[160, 200], [180, 100], [100, 170]], color: '#F57C00' },
    // Ojo y pupila
    { type: 'circle', x: 190, y: 350, r: 55, color: '#FDD835' }, // Globo ocular
    { type: 'circle', x: 190, y: 350, r: 30, color: '#4CAF50' }, // Párpado
    { type: 'circle', x: 190, y: 350, r: 12, color: '#212121' }, // Pupila
    { type: 'poly', pts: [[170, 310], [210, 310], [190, 280]], color: '#FFF176' }, // Brillo ojo

    // --- PATAS (6 figuras) ---
    { type: 'poly', pts: [[380, 510], [440, 490], [410, 560], [360, 550]], color: '#2E7D32' }, // Pata Delantera
    { type: 'poly', pts: [[410, 560], [360, 550], [330, 565], [350, 595]], color: '#1B5E20' }, // Garra Delantera
    { type: 'poly', pts: [[720, 450], [770, 440], [750, 540], [700, 530]], color: '#1B5E20' }, // Pata Trasera
    { type: 'poly', pts: [[750, 540], [700, 530], [670, 545], [690, 575]], color: '#004D40' }, // Garra Trasera
    { type: 'poly', pts: [[330, 565], [350, 595], [310, 590]], color: '#FFF59D' },            // Uña 1
    { type: 'poly', pts: [[670, 545], [690, 575], [650, 570]], color: '#FFF59D' },            // Uña 2

    // --- COLA ENROLLADA (11 figuras para el espiral) ---
    { type: 'poly', pts: [[750, 290], [780, 420], [860, 380], [840, 260]], color: '#43A047' },
    { type: 'poly', pts: [[860, 380], [840, 260], [930, 310], [930, 430]], color: '#66BB6A' },
    { type: 'poly', pts: [[930, 430], [930, 310], [980, 360], [960, 470]], color: '#388E3C' },
    { type: 'poly', pts: [[960, 470], [930, 430], [880, 490], [910, 540]], color: '#1B5E20' },
    { type: 'poly', pts: [[910, 540], [880, 490], [810, 510], [830, 560]], color: '#2E7D32' },
    { type: 'poly', pts: [[830, 560], [810, 510], [760, 520], [780, 560]], color: '#4CAF50' },
    { type: 'poly', pts: [[780, 560], [760, 520], [730, 530], [740, 560]], color: '#81C784' },
    { type: 'poly', pts: [[740, 560], [730, 530], [715, 540], [720, 555]], color: '#A5D6A7' },
    { type: 'poly', pts: [[720, 555], [715, 540], [705, 545], [708, 552]], color: '#C8E6C9' },
    { type: 'circle', x: 830, y: 400, r: 15, color: '#FFEB3B' }, // Mancha cola 1
    { type: 'circle', x: 900, y: 350, r: 10, color: '#FFEB3B' }  // Mancha cola 2
];

// 2. LÓGICA DE ANIMACIÓN E INTERACCIÓN
document.getElementById("enterBtn").addEventListener("click", function() {
    document.getElementById("introScreen").classList.add("hidden");
});

function drawApp() {
    const canvas = document.getElementById('chaosCanvas');
    const ctx = canvas.getContext('2d');
    
    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fondo: Escenario nocturno sutil
    const grad = ctx.createRadialGradient(500, 350, 100, 500, 350, 600);
    grad.addColorStop(0, "#1a2a3a");
    grad.addColorStop(1, "#050505");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Renderizado del modelo
    chameleonModel.forEach(part => {
        ctx.fillStyle = part.color;
        ctx.beginPath();

        if (part.type === 'poly') {
            ctx.moveTo(part.pts[0][0], part.pts[0][1]);
            for (let i = 1; i < part.pts.length; i++) {
                ctx.lineTo(part.pts[i][0], part.pts[i][1]);
            }
            ctx.closePath();
        } else if (part.type === 'circle') {
            ctx.arc(part.x, part.y, part.r, 0, Math.PI * 2);
        }

        ctx.fill();

        // Estilo "Low Poly": Bordes definidos
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
    });
}

// FRASES ALEATORIAS
const phrases = [
    "La forma es solo una máscara.",
    "Geometría en constante cambio.",
    "Adaptarse es el arte de sobrevivir.",
    "Colores que nacen del pensamiento."
];
document.getElementById("floatingPhrase").innerText = phrases[Math.floor(Math.random() * phrases.length)];

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
    const section = document.querySelector(".philosophy-section");
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
        section.classList.add("visible");
    }
});

window.onload = drawApp;