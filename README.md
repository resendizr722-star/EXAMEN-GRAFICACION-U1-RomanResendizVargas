# 🦎 Teatro del Camaleón: Selva Geométrica

Una experiencia visual interactiva que fusiona el arte **Pop Art** con la precisión de la **geometría computacional**. Este proyecto utiliza la **API Canvas 2D** de JavaScript para renderizar un camaleón dinámico basado en mosaicos (low-poly) dentro de un entorno de selva tropical profunda.



## 🎨 Características Principales

* **Renderizado Geométrico:** El camaleón está construido íntegramente mediante coordenadas matemáticas, utilizando polígonos y arcos definidos en un modelo de datos personalizado.
* **Estética Pop Art:** Uso de contornos negros gruesos, colores vibrantes y degradados lineales que aportan volumen y estilo de "cómic" a cada pieza del mosaico.
* **Ambiente Dinámico:** Fondo generado procedimentalmente con curvas Bézier para las ramas y curvas cuadráticas para la vegetación, simulando una selva con profundidad de campo.
* **Interfaz Inmersiva:** * Pantalla de inicio (*Splash Screen*) con efectos de transición.
    * Diseño responsivo con **Bootstrap 5**.
    * Efectos de desenfoque cruzado y "Glow" mediante CSS avanzado.

## 🛠️ Tecnologías Utilizadas

* **HTML5 & CSS3:** Estructura y diseño Dark Mode con Glassmorphism.
* **JavaScript (Vanilla):** Lógica de renderizado en tiempo real y manipulación del DOM.
* **Canvas 2D API:** Motor gráfico para el dibujo de figuras complejas y degradados.
* **Bootstrap 5:** Sistema de rejilla para adaptabilidad móvil.
* **Google Fonts:** Tipografías 'Cinzel' (teatral) y 'Playfair Display' (elegante).

## 📂 Estructura del Proyecto

```text
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos interactivos y Dark Mode
│   ├── js/
│   │   └── main.js        # Motor de renderizado y modelo del camaleón
│   └── img/
│       ├── fav_icon.png   # Icono de pestaña
│       └── camaleon.png   # Imagen de referencia conceptual
├── index.html             # Estructura principal de la aplicación
└── README.md              # Documentación del proyecto