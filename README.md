# 🃏 Memory Game - Encontrar Parejas de Cartas

Este es mi primer proyecto utilizando **React**, desarrollado con **Vite** y estilos en **SASS**.  
Se trata de un juego clásico de encontrar parejas de cartas en un tablero de 4x4.
Si quieres acceder al proyecto: https://idontwanttobeanurseanymore.github.io/react-memory-game/
El proyecto ha sido realizado siguiendo unas instrucciones y una maquetación inicial proporcionadas por **Adalab**, como parte del contenido del Módulo 3 del bootcamp en Desarrollo Web Full Stack.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- SASS (SCSS)
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 🎮 ¿En qué consiste el juego?

El objetivo del juego es encontrar todas las parejas de cartas en el menor número de intentos posible.

### Reglas del juego:

- El tablero es de **4x4 cartas**
- Todas las cartas comienzan boca abajo
- En cada turno se pueden voltear **2 cartas**
- Si coinciden, permanecen visibles
- Si no coinciden, se vuelven a ocultar
- El juego termina cuando todas las parejas han sido encontradas

---

## 📦 Estructura del proyecto

El proyecto está organizado de la siguiente manera:

- `/src` → Contiene toda la estructura principal de la aplicación
- `App.jsx` → Componente principal donde se gestiona la lógica del juego y se renderizan los componentes
- `App.scss` → Estilos globales de la aplicación

### 🧩 Components

Dentro de `/components` se encuentran los componentes reutilizables del proyecto:

- **Button** → Botones de interacción (por ejemplo, reiniciar partida)
- **Card** → Representa cada carta del tablero
- **Counter** → Controla el número de intentos o parejas encontradas
- **Message** → Muestra mensajes de estado (victoria, feedback del juego, etc.)

---

## ⚡ Instalación

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Arranca el proyecto en desarrollo: `npm run dev`
   * Para generar una versión para producción: `npm run build`
   * Para previsualizar la versión final: `npm run preview`
---

## 💡 Posibles mejoras

Este proyecto es una primera versión y aún tiene margen de mejora:

- 🧹 Refactorización y depuración del código
- 🎚️ Implementar diferentes niveles de dificultad
  - Tableros más grandes
  - Más parejas
- ✨ Animaciones:
  - Animación al encontrar una pareja
  - Animación al ganar la partida
- ⏱️ Añadir límite de tiempo para aumentar la dificultad
- 📋 Incluir instrucciones dentro del propio juego

---

## 📚 Sobre este proyecto

Este ha sido mi **primer proyecto con React**, por lo que me ha servido para aprender conceptos clave como:

- Componentes reutilizables
- Props y estado
- Manejo de eventos
- Estructura de proyectos con Vite

La base del diseño y la estructura inicial han sido proporcionadas por **Adalab**, y a partir de ahí he desarrollado toda la lógica del juego.

---

## 🎯 Objetivo personal

Este proyecto forma parte de mi formación como **Desarrolladora Web Full Stack** con **Adalab**, para comprender mejor cómo se generan y estructuran los datos desde su origen y ayudarme a adquirir bases sólidas en desarrollo web.

---
