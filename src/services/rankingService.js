import { STORAGE_KEY } from "../constants";

export const rankingService = {
  getRanking: (difficultyName) => {
    const storageKey = `${STORAGE_KEY}_${difficultyName.toUpperCase()}`;
    return JSON.parse(localStorage.getItem(storageKey) || '[]');
  },

  saveRanking: (difficultyName, playerName, moves, time, startTime) => {
    const storageKey = `${STORAGE_KEY}_${difficultyName.toUpperCase()}`;
    const currentRanking = rankingService.getRanking(difficultyName);
    const newEntry = { name: playerName || 'Anonymous', moves, time, startTime };
    
    const updatedRanking = [...currentRanking, newEntry]
      .sort((a, b) => a.moves - b.moves || a.time - b.time)
      .slice(0, 10);
      
    localStorage.setItem(storageKey, JSON.stringify(updatedRanking));
  }
};
