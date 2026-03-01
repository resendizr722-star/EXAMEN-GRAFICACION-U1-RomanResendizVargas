/**
 * PROYECTO: SELVA GEOMÉTRICA CON API CANVAS 2D
 * Total de figuras: ~150 figuras API Canvas
 */

// --- 1. MODELO DE DATOS DEL CAMALEÓN (Data-Driven Drawing) ---
const chameleonModel = [
    // --- RAMA (3 figuras poligonales) ---
    { type: 'poly', pts: [[50, 520], [850, 480], [860, 540], [60, 580]], color: '#4E342E' }, // Base
    { type: 'poly', pts: [[650, 495], [720, 380], [750, 395], [680, 493]], color: '#5D4037' }, // Rama secundaria
    { type: 'poly', pts: [[200, 555], [120, 650], [160, 660], [230, 552]], color: '#3E2723' }, // Rama baja

    // --- CUERPO (12 figuras de mosaico Low-Poly) ---
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
    // Crestas Superiores (Efecto abanico geométrica)
    { type: 'poly', pts: [[320, 280], [340, 150], [230, 250]], color: '#FF9800' },
    { type: 'poly', pts: [[230, 250], [260, 130], [160, 200]], color: '#FB8C00' },
    { type: 'poly', pts: [[160, 200], [180, 100], [100, 170]], color: '#F57C00' },
    // Ojo y pupila (Uso de arc/círculo)
    { type: 'circle', x: 190, y: 350, r: 55, color: '#FDD835' }, // Globo ocular
    { type: 'circle', x: 190, y: 350, r: 30, color: '#4CAF50' }, // Párpado
    { type: 'circle', x: 190, y: 350, r: 12, color: '#212121' }, // Pupila
    { type: 'poly', pts: [[170, 310], [210, 310], [190, 280]], color: '#FFF176' }, // Brillo ojo

    // --- PATAS (6 figuras) ---
    { type: 'poly', pts: [[380, 510], [440, 490], [410, 560], [360, 550]], color: '#2E7D32' }, // Muslo Delantero
    { type: 'poly', pts: [[410, 560], [360, 550], [330, 565], [350, 595]], color: '#1B5E20' }, // Garra Delantera
    { type: 'poly', pts: [[720, 450], [770, 440], [750, 540], [700, 530]], color: '#1B5E20' }, // Muslo Trasero
    { type: 'poly', pts: [[750, 540], [700, 530], [670, 545], [690, 575]], color: '#004D40' }, // Garra Trasera
    { type: 'poly', pts: [[330, 565], [350, 595], [310, 590]], color: '#FFF59D' },            // Uña 1
    { type: 'poly', pts: [[670, 545], [690, 575], [650, 570]], color: '#FFF59D' },            // Uña 2

    // --- COLA ENROLLADA (11 figuras para simular el espiral poligonal) ---
    { type: 'poly', pts: [[750, 290], [780, 420], [860, 380], [840, 260]], color: '#43A047' },
    { type: 'poly', pts: [[860, 380], [930, 310], [930, 430]], color: '#66BB6A' },
    { type: 'poly', pts: [[930, 430], [880, 490], [810, 510], [830, 560]], color: '#1B5E20' },
    { type: 'poly', pts: [[830, 560], [760, 520], [730, 530], [740, 560]], color: '#81C784' },
    { type: 'poly', pts: [[740, 560], [730, 530], [715, 540], [720, 555]], color: '#A5D6A7' },
    { type: 'poly', pts: [[720, 555], [715, 540], [705, 545], [708, 552]], color: '#C8E6C9' },
    { type: 'poly', pts: [[708, 552], [705, 545], [695, 548]], color: '#E8F5E9' }, // Final
    { type: 'circle', x: 830, y: 400, r: 15, color: '#FFEB3B' }, // Mancha cola 1
    { type: 'circle', x: 900, y: 350, r: 10, color: '#FFEB3B' }  // Mancha cola 2
];

// --- 2. FUNCIONES DE AMBIENTE SELVÁTICO (Fondo Dinámico con API 2D) ---

function drawJungleScene(ctx, w, h) {
    // 1. Fondo base: Degradado de cielo selvático
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#81D4FA"); // Celeste
    sky.addColorStop(0.5, "#E8F5E9"); // Verde muy claro filtrado por sol
    sky.addColorStop(1, "#C8E6C9"); // Verde suelo selvático
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    // 2. Árboles de fondo (Múltiples capas de profundidad)
    drawTree(ctx, 150, 550, 0.7, "#2E7D32"); // Pequeño y lejano
    drawTree(ctx, 800, 500, 1.1, "#1B5E20"); // Grande y cercano
    drawTree(ctx, 450, 480, 0.5, "#388E3C"); // Medio lejano

    // 3. Hojas flotantes aleatorias (Pequeños polígonos/partículas)
    for(let i=0; i<30; i++) {
        drawSmallLeaf(ctx, Math.random()*w, Math.random()*h, Math.random()*20 + 10, "rgba(76, 175, 80, 0.4)");
    }
}

function drawTree(ctx, x, y, scale, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    // Tronco poligonal
    ctx.fillStyle = "#3E2723";
    ctx.beginPath();
    ctx.moveTo(-25, 0); ctx.lineTo(25, 0); ctx.lineTo(15, -400); ctx.lineTo(-15, -400);
    ctx.fill();

    // Copas de follaje (Círculos concéntricos geométricos)
    ctx.fillStyle = color;
    const foliagePositions = [[0, -400, 100], [-60, -320, 80], [60, -320, 80], [0, -450, 70]];
    foliagePositions.forEach(f => {
        ctx.beginPath();
        ctx.arc(f[0], f[1], f[2], 0, Math.PI * 2);
        ctx.fill();
        // Brillo geométrico en la copa
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.beginPath();
        ctx.arc(f[0]-15, f[1]-15, f[2]/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = color; // Reset color
    });
    ctx.restore();
}

function drawSmallLeaf(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    // Forma de diamante/hoja geométrica
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size/2, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size/2, y);
    ctx.closePath();
    ctx.fill();
}

function drawForegroundLeaves(ctx, w, h) {
    // Hojas grandes en las esquinas para efecto de profundidad de campo (Vignette)
    drawSmallLeaf(ctx, 50, 50, 150, "rgba(27, 94, 32, 0.7)");
    drawSmallLeaf(ctx, 920, 600, 200, "rgba(27, 94, 32, 0.5)");
}

// --- 3. FUNCIÓN DE RENDERIZADO PRINCIPAL ( drawApp ) ---

function drawApp() {
    const canvas = document.getElementById('chaosCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    // Asegurarnos de que el dibujo se limpie antes de re-dibujar
    ctx.clearRect(0, 0, W, H);

    // A. Dibujar la Selva (Fondo)
    drawJungleScene(ctx, W, H);

    // B. Dibujar el Camaleón (Mosaico Low-Poly)
    chameleonModel.forEach(part => {
        ctx.fillStyle = part.color;
        ctx.beginPath();

        if (part.type === 'poly') {
            ctx.moveTo(part.pts[0][0], part.pts[0][1]);
            // slice(1) para empezar desde el segundo punto
            part.pts.slice(1).forEach(p => ctx.lineTo(p[0], p[1]));
            ctx.closePath();
        } else if (part.type === 'circle') {
            // Usar arc para dibujar círculos
            ctx.arc(part.x, part.y, part.r, 0, Math.PI * 2);
        }

        ctx.fill();

        // Estilo Low-Poly: Añadir bordes definidos a cada pieza del mosaico
        ctx.strokeStyle = "rgba(0,0,0,0.15)"; // Borde negro semitransparente
        ctx.lineWidth = 1.5;
        ctx.stroke();
    });

    // C. Dibujar Hojas de Primer Plano (Encima de todo)
    drawForegroundLeaves(ctx, W, H);
}

// --- 4. INTERACCIÓN UI Y LÓGICA DE CARGA ---

// Pantalla Intro
const enterBtn = document.getElementById("enterBtn");
const introScreen = document.getElementById("introScreen");
if(enterBtn) {
    enterBtn.addEventListener("click", () => {
        if(introScreen) introScreen.style.opacity = "0"; // Efecto fade-out sutil
        setTimeout(() => {
            if(introScreen) introScreen.style.display = "none";
        }, 500);
    });
}

// FRASES ALEATORIAS
const phrases = [
    "La forma es solo una máscara.",
    "Geometría en constante cambio.",
    "Adaptarse es el arte de sobrevivir.",
    "Colores que nacen del pensamiento."
];
const phraseEl = document.getElementById("floatingPhrase");
if(phraseEl) {
    phraseEl.innerText = phrases[Math.floor(Math.random() * phrases.length)];
}

// SCROLL ANIMATION (Añadir clase visible cuando está en pantalla)
window.addEventListener("scroll", () => {
    const section = document.querySelector(".philosophy-section");
    if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
        section.classList.add("visible");
    }
});

// Escuchar cambios de tamaño para redibujar si es necesario (Responsivo)
window.addEventListener('resize', drawApp);

// Iniciar la aplicación al cargar la ventana
window.onload = drawApp;