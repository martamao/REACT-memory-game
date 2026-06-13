# Lista de Tareas - Memory Game

Este documento detalla los pasos necesarios para implementar las funcionalidades solicitadas en `geminiWhatDoIWant.md` y las mejoras técnicas identificadas.

## Fase 1: Arquitectura y Navegación del Frontend

- [ ] **Título Permanente**: Asegurar que el título "Memory Game" esté fuera de la lógica condicional de navegación para que sea visible en todas las pantallas.
- [ ] **Gestión de Vistas en `App.jsx`**: Implementar un estado (ej. `view`) para alternar entre `'landing'`, `'game'` y `'ranking'`.
- [ ] **Creación del componente `LandingPage.jsx`**:
    - [ ] Diseñar el input "Retro": Mostrar "Player:" seguido de tres guiones bajos `_ _ _`.
    - [ ] Lógica de Input: Permitir solo 3 letras mayúsculas. Los guiones deben sustituirse por las letras a medida que se escriben.
    - [ ] Validación de Inicio: El botón de "Let's find out!" debe estar deshabilitado hasta que se completen exactamente las 3 letras.
    - [ ] Comunicación: Pasar el nombre del jugador al estado global en `App.jsx` al hacer clic en el botón.
- [ ] **Creación del componente `Ranking.jsx`**:
    - [ ] Estructura de Tabla: Mostrar columnas para "Player" y "Moves".
    - [ ] Lógica de Ordenación: Los jugadores con menos movimientos deben aparecer primero.
    - [ ] Integración Temporal: Usar datos estáticos (mock data) hasta que el backend esté disponible.
- [ ] **Actualización del Flujo Final del Juego**:
    - [ ] Al finalizar la partida (todas las parejas encontradas), mostrar dos nuevos botones: "Show Ranking" y "Reset Game".
    - [ ] Botón "Reset Game": Debe permitir volver a jugar inmediatamente con el mismo nombre de usuario.

## Fase 2: Diseño y Responsividad

- [ ] **Centrado en Pantallas Grandes**: Ajustar el contenedor principal en `App.scss` para que el tablero de juego esté perfectamente centrado en los ejes X e Y en monitores grandes.
- [ ] **Adaptación Móvil/Tablet**:
    - [ ] Modificar las Media Queries para que las tarjetas ocupen la mayor parte del ancho de la pantalla en dispositivos pequeños.
    - [ ] Asegurar márgenes laterales adecuados para evitar que los elementos toquen los bordes del dispositivo.
- [ ] **Consistencia Visual**: Aplicar la estética "Retro/Crafty" de forma coherente en la Landing Page y el Ranking.

## Fase 3: Preparación del Backend (Próximamente)

- [ ] **Servidor Express**: Configurar la estructura básica del servidor Node.js.
- [ ] **Conexión MySQL**: Crear el esquema de la base de datos y la tabla de clasificación.
- [ ] **API Endpoints**: 
    - [ ] `POST /ranking`: Para guardar el nombre y movimientos del jugador al terminar.
    - [ ] `GET /ranking`: Para recuperar la lista de los mejores jugadores.

---

## Mejoras Sugeridas para el Código Actual

Tras revisar el código existente, se recomiendan las siguientes mejoras técnicas para aumentar la escalabilidad y mantenibilidad del proyecto:

1. **Modularización de Estilos**:
   - Actualmente, `App.scss` contiene todos los estilos del proyecto. Es recomendable dividirlo en archivos parciales (ej. `_cards.scss`, `_layout.scss`, `_variables.scss`) o utilizar **CSS Modules** para evitar colisiones de clases.

2. **Refactorización de la Lógica del Juego (Custom Hook)**:
   - La lógica de emparejamiento, barajado y estado de las cartas en `App.jsx` es densa. Se podría extraer a un hook personalizado llamado `useMemoryGame.js` para limpiar el componente principal.

3. **Mejora del Componente `Card.jsx`**:
   - El componente `Card` maneja su propia lógica de clic pero también depende de estados pasados por props. Se podría simplificar la comunicación para que sea más declarativa.

4. **Validación de Propiedades (PropTypes)**:
   - Dado que no se usa TypeScript, añadir `prop-types` ayudaría a detectar errores de paso de datos entre componentes durante el desarrollo.

5. **Optimización del Barajado**:
   - El método `suffleCards` usa `Math.random() - 0.5`, que no es un barajado perfectamente uniforme. Se recomienda implementar el algoritmo de **Fisher-Yates** para un barajado más justo.

6. **Accesibilidad (a11y)**:
   - Las cartas (`li`) deben tener roles de botón o atributos `aria-label` para que el juego sea mínimamente navegable mediante teclado o lectores de pantalla.

7. **Centralización de Constantes**:
   - El array de emojis (`cardArray`) debería estar en un archivo de configuración separado, lo que facilitaría cambiar el tema del juego en el futuro (ej. cambiar emojis por imágenes de una temática específica).
