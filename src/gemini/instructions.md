# Especificaciones del Proyecto: Memory Game

Este documento centraliza los requisitos y el flujo de trabajo para el desarrollo del juego de memoria.

## Core
- **Frontend**: React JS.
- **Backend**: Node.js, Express.js y MySQL.
- **Idioma**: Comunicación en español. Código y aplicación íntegramente en inglés. No mezclar idiomas.

## Frontend
- **Arquitectura**: Título "Memory Game" siempre visible. Gestión de vistas entre Landing, Game y Ranking.
- **LandingPage**: 
    - Input tipo "Retro" para el nombre del jugador (máximo 3 letras mayúsculas). 
    - Diseño: "Player:" seguido de tres espacios destacados (`_ _ _`) que se completan al escribir.
    - El inicio del juego requiere obligatoriamente las 3 letras.
- **Game Flow**: 
    - Al finalizar la partida (todas las parejas encontradas), ofrecer botones para "Show Ranking" y "Reset". 
    - El Reset debe permitir jugar de nuevo con el mismo usuario.
- **Ranking**: 
    - Pantalla final que muestra la clasificación por número de movimientos (menor número arriba).
    - Datos sincronizados con la base de datos MySQL.
- **Diseño**:
    - Estética "Retro/Crafty Girls".
    - Responsive: Tablero centrado en pantallas grandes; aprovechamiento total del ancho con márgenes adecuados en dispositivos móviles.

## Refactorización y Calidad
- **Estructura**: Estilos modulares en carpeta propia. Lógica de juego extraída en custom hooks.
- **Rendimiento**: Uso de algoritmos de barajado eficientes (Fisher-Yates).
- **Mantenibilidad**: Centralización de constantes (emojis, tiempos, rutas).
- **Restricción de comandos**: No ejecutar comandos de build ni comandos git salvo que la usuaria lo pida explícitamente.

## Backend (Próximamente)
- Configuración de servidor Express.
- Esquema de base de datos en MySQL Workbench para persistencia del Ranking (Player name y Moves).
