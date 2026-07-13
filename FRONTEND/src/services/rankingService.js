import { STORAGE_KEY } from "../constants";
const API_URL = import.meta.env.PROD
  ? "https://martamao-memory-game.onrender.com"
  : "http://localhost:4000";

export const rankingService = {
  getRanking: async (difficultyName) => {
    const storageKey = `${STORAGE_KEY}_${difficultyName.toUpperCase()}`;

    try {
      const res = await fetch(`${API_URL}/api/memoryboard`);

      if (!res.ok) {
        throw new Error("Error en servidor");
      }

      const data = await res.json();

      if (!data.success) return [];

      const filtered = data.data
        .filter(
          (item) =>
            item.difficulty.toLowerCase() === difficultyName.toLowerCase(),
        )
        .map((item) => ({
          name: item.player_name,
          moves: item.game_moves,
          time: item.game_time,
          startTime: item.game_date,
        }))
        .sort((a, b) => a.moves - b.moves || a.time - b.time)
        .slice(0, 10);

      // Guardar en LocalStorage (cache)
      localStorage.setItem(storageKey, JSON.stringify(filtered));

      return filtered;
    } catch (error) {
      console.error("Error trayendo ranking:", error);

      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    }
  },
  saveRanking: async (difficultyName, playerName, moves, time, startTime) => {
    const storageKey = `${STORAGE_KEY}_${difficultyName.toUpperCase()}`;

    const currentRanking = await rankingService.getRanking(difficultyName);

    const newEntry = {
      name: playerName,
      moves,
      time,
      startTime,
    };

    const updatedRanking = [...currentRanking, newEntry]
      .sort((a, b) => a.moves - b.moves || a.time - b.time)
      .slice(0, 10);

    localStorage.setItem(storageKey, JSON.stringify(updatedRanking));

    // Enviar a backend
    try {
      await fetch(`${API_URL}/api/memoryboard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_name: playerName,
          game_moves: moves,
          game_time: time,
          game_date: new Date(startTime).toISOString(),
          game_pairs: 0,
          difficulty: difficultyName,
        }),
      });
    } catch (err) {
      console.error("Error guardando en backend:", err);
    }
  },
};
