import express from "express";
import mysql from "mysql2/promise"

// Configurar el servidor

// Variable que representa el servidor

const server = express();

// Arrancamos el server

const port = 4000;
server.listen(port, () => {
  console.log(`El servidor se ha iniciado en <http://localhost:${port}/>`);
});

// Configurar endpoints = rutas?

server.get("/", (req, res) => {
  res.send("Contenido cambiado otra vez");
});

//MySQL__________________

async function getConexion() {
  const datosConexion = {
    host: localhost,
    port: 3306,
    user: "root",
    password: "",
    database: "",
  };

  const conexion = await mysql.createConnection(datosConexion);
  return conexion;
}

async function getRanking() {
  const playerName = "MRT";
  const playerMoves = "17";;
  const playerTime = "time"

  try {
    const conexion = await getConexion();

    const [resultados] = await conexion.query(
      `
      SELECT id_game, player_name, game_moves, game_time, game_date, game_pairs
        FROM game_ranking
      `,
      [playerName, playerMoves, playerTime],
    );


    conexion.end();

    console.log(resultados);
  } catch (error) {
    console.error("Oh no!");
    console.error(error);
  }
}

getRanking();

/*
mysql
  .createConnection(datosConexion)
  .then((conexion) => {
    console.info("Sa conectao!");

    conexion
      .query(
        "SELECT id,nombre FROM 
         LIMIT 2;",
      )
      .then(([resultados]) => {
        console.log(resultados);
      });

  })
  .catch((error) => {
    console.error("Oh no!");
    console.error(error);
  });
*/