import express from "express";
import mysql from "mysql2/promise";
import path from "node:path";
import cors from "cors"
import 'dotenv/config';

//Configuración BD

const getConexion= async () => {
  const datosConexion = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
  };

  const conexion = await mysql.createConnection(datosConexion);
  await conexion.connect();
  return conexion
}
// Configurar el servidor

const server = express();

// Configuración para que funcione como API RESTful (json)
server.use(cors()); // API pública
server.use(express.json({ limit: "25Mb" }));

// Arrancamos express

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`El servidor se ha iniciado en <http://localhost:${port}/>`);
});

// Configurar endpoints

// API
server.get("/", (req, res) => {
  res.send("Ok");
});

server.get("/api/memoryboard", async (req, res) => {
    console.log(req.query);

  const player = req.query.playerName || "";
  // 1. Nos conectamos con la bbdd
  const conexion = await getConexion();

  // 2. Preparamos una query = SELECT
  const queryMemoryBoardAllData = `
   SELECT * 
    FROM memory_game.game_ranking r
    ORDER BY game_moves
    LIMIT 5;`;

  // 3. Lanzamos la query y nos quedamos con los resultados
  const [resultados] = await conexion.query(queryMemoryBoard);

  // 4. Cerramos la conexión.
  await conexion.end();

  // 5. Responder con los datos
  res.json(resultados);
});


server.post("/api/memoryboard", async (req, res) => {
  let conexion;

 
  try {
    //1. Conectamos a BD
    conexion = await getConexion();

    //2. Preparamos INSERT
    const insertNewGame = `
    INSERT INTO memory_game.game_ranking r (id_game, player_name, game_moves, game_time, game_date, game_pairs, difficulty) 
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    // 3. Lanzamos insert y guardamos resultados
    const [resultsInsert] = await conexion.execute(insertNewGame, [
      req.body.id_game,
      req.body.player_game,
      req.body.game_moves,
      req.body.game_time,
      req.body.game_date,
      req.body.game_pairs,
      req.body.difficulty,
    ])

    // 5. Responder con los datos
    if (resultsInsert.affectedRows === 1) {
      res.json({
        success: true,
        data: {
          id: resultsInsert.insertId,
          ...req.body,
        },
      });
    }  else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  } finally {
    
    // 4. Cerramos la conexión.
    if (conexion) {
      await conexion.end();
    }

  }
});


server.get(/.*/, (req, res) => {

  res.status(404).send("Página no encontrada.");
});

server.use(express.static("./FRONTEND"));








/*
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