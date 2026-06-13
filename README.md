# 🃏 Memory Game - Encontrar Parejas de Cartas

Este es mi primer proyecto utilizando **React**, como parte del contenido del Módulo 3 del Bootcamp en Desarrollo Web Full Stack.

La base del diseño y la estructura inicial del proyecto han sido proporcionadas por **Adalab**, y a partir de ahí he desarrollado toda la lógica del juego.

Se trata de un juego clásico de encontrar parejas de cartas en un tablero de 4x4.

Si quieres acceder al proyecto: https://idontwanttobeanurseanymore.github.io/react-memory-game/

¿Serás capaz de encontar todas las parejas en menos de 16 movimientos?

---

## ✨ Características Principales 

- **🃏 Tablero 4x4**: El reto clásico de encontrar 8 parejas en el menor número de movimientos. 

- **📱 Diseño Responsive**: Adaptado para que puedas jugar tanto en PC como en dispositivos móviles. 

- **🎮 Estética Retro**: Diseño inspirado en las consolas de 8-bit y 16-bit, con fuentes pixeladas y una paleta de colores vibrante. 

- **🚀 Pantalla de Inicio**: Landing page con el estilo retro y entrada de 3 letras para identificar al jugador. 

- **🏆 Sistema de Ranking**: Top 5 local (guardado en localStorage) con opción futura para sincronizar con un backend. 

---

## 🚀 Tecnologías utilizadas

- **React 19**: Construcción de la interfaz basada en componentes funcionales. 

- **Vite**: Herramienta de desarrollo y construcción ultra-rápida. 

- **SASS (SCSS)**: Estilos modulares y avanzados. 

- **JavaScript (ES6+)**: Lógica del juego y gestión del estado. 

- **HTML5 & CSS3**: Estructura y diseño base. 

---

## 🎮 Reglas del juego: 

1. Al entrar, verás la Pantalla de Inicio. Escribe tu nombre de usuario y pulsa el botón para comenzar. 

2. El tablero aparecerá con todas las cartas boca abajo. 

3. En cada turno, puedes voltear 2 cartas. Si las cartas coinciden, se quedan visibles. Si no coinciden, se vuelven a ocultar tras un breve instante. 

4. El objetivo es encontrar todas las parejas en el menor número de movimientos posible. 

5. Al ganar, podrás ver tu puntuación y, en un futuro muy cercano, comprobar si has entrado en el Top 5 del ranking. 

---

## 📦 Estructura del proyecto

El proyecto está organizado de la siguiente manera:

En `/src` encontraremos toda la estructura principal de la aplicación dividido en:

🧩 Carpetas:

    - `/components`→ Contiene los componentes reutilizables del proyecto
    - `/styles` → Contiene los estilos separados por componentes
    - `/hooks` → Contiene el componente principal que gestiona la lógica del juego

🧩 Ficheros 

    - `App.jsx` → Componente principal que renderiza los componentes
    - `App.scss` → Estilos globales de la aplicación
    - `constants.js` → Contiene los valores de las distintas cartas

🧩 `/components`

    - **Button** → Botones de interacción (por ejemplo, reiniciar partida)
    - **Card** → Representa cada carta del tablero
    - **Counter** → Controla el número de intentos o parejas encontradas
    - **Message** → Muestra mensajes de estado (victoria, feedback del juego, etc.)
    - **LandingPage** → 
    - **Ranking** → 

---

## ⚡ Instalación

1. Clona el repositorio

2. Instala las dependencias: `npm install`

3. Arranca el proyecto en desarrollo: `npm run dev`
   * Para generar una versión para producción: `npm run build`
   * Para previsualizar la versión final: `npm run preview`

---

## 🔮 Futuras funcionalidades

- Backend básico (Express + MySQL) para: 
  - POST /ranking — guardar puntuaciones. 
  - GET /ranking — obtener Top 5 o paginado. 
  - Autenticación simple opcional para persistencia por usuario. 

- Niveles de dificultad configurables (más parejas, tiempo máximo, límites de movimientos). 

- Panel de instrucciones dentro de la aplicación.

---

## 🤖 Desarrollo Asistido por IA 

Este proyecto ha sido desarrollado utilizando **Gemini CLI** y **Copilot**, actuando como compañeros de programación (pair programmer). La IA ha asistido en: 

- **Refactorización de código**: Mejora de la estructura y legibilidad. 

- **Implementación de nuevas funcionalidades**: Como el sistema de ranking y la landing page. 

- **Gestión de cambios**: Utilizando la metodología **OpenSpec** para planificar y ejecutar cada fase del desarrollo de forma estructurada. 

---
---
      Desarrollado con ❤️ y un toque retro 
