## ¡Hola Gemini!
    Este archivo es para poner en situación exactamente lo que quiero hacer con este proyecto.
    Lo más fundamental es: quiero un frontend desarrollado con React JS y quiero un Backend desarrollado con Node.js, Express.js y MySQL.
    Tú y yo hablaremos siempre en español, pero la aplicación y su código está en inglés. ¡No mezcles idiomas!

## FRONTEND
### Componentes
    - Como ves, existen 4 componentes: Button.jsx, Card.jsx, Counter.jsx y Message.jsx, controlados por App.jsx.
    - Quiero crear: LandingPage.jsx y Ranking.jsx
    - En toda la aplicación, quiero siempre visible el título: Memory Game.

    - LandingPage: es la primera página que ve el usuario cuando entra a la aplicación. Aquí quiero que se muestre un input tipo "Retro" para el nombre del jugador, es decir, que solo se pueda introducir 3 letras en mayúsculas para la identificación del jugador. El diseño del input quiero que sea: "Player:" seguido de 3 "barras bajas" que cambien según el usuario introduce las letras. Este nombre servirá más adelante para la base de datos de MySQL Workbench que desarrollaremos más adelante. Tras introducir las 3 letras (quiero que sea obligatorio que sean 3 y que el usuario no pueda iniciar el juego con 2 o 1 letra de nombre de usuario), quiero que se active un botón que, al hacer click, muestre el juego.

    - Quiero que, al finalizar la partida (cuando el jugador encuentra todas las parejas), aparezca un botón de "mostrar ranking" para que el usuario tenga la opción de ver la clasificación y un botón de reset, para poder volver a jugar con el mismo nombre de usuario, pero sin tener que ver primero la clasificación.

    - Ranking: es la última pantalla que verá el jugador. Tras terminar el juego (se dará por finalizada la partida cuando se encuentren todas las parejas), aparecerá un mensaje con el resultado de la partida. Actualmente hay un contador de movimientos y de puntos. La clasificación irá en función de los movimientos. Está pantalla tendrá que mostrar los nombres de los jugadores y el número de movimientos. El jugador que encabeza la lista tiene que ser el que menos movimientos haya realizado. Estos datos vendrán dados de la base de datos de MySQL Workbench que desarrollaremos más adelante.

### Diseño
    Lo principal es que sea responsive. Quiero que en ordenador/pantallas grandes, estén las tarjetas centradas, tanto en el eje Y como en el X. En móvil/tablet, quiero que las tarjetas ocupen la pantalla entera, dejando un margen adecuado.

## BACKEND
### Servidor
### Base de Datos