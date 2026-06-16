import "./App.scss";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Ranking from "./components/Ranking";
import MemoryBoard from "./components/MemoryBoard";
import { GAME_VIEWS, DIFFICULTIES } from "./constants";
import { rankingService } from "./services/rankingService";

export default function App() {
  const [view, setView] = useState(GAME_VIEWS.LANDING);
  const [playerName, setPlayerName] = useState("");
  const [difficulty, setDifficulty] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [gameStats, setGameStats] = useState({ count: 0, time: 0 });
  
  const handleStartGame = (name, selectedDifficulty) => {
    setPlayerName(name);
    setDifficulty(selectedDifficulty);
    setStartTime(new Date().toISOString());
    setView(GAME_VIEWS.GAME);
  };

  const handleShowRanking = (count, time, finishedDifficulty) => {
    let difficultyToUse = finishedDifficulty || difficulty;
    
    // Si recibimos un string (ej: 'EASY'), buscamos el objeto en DIFFICULTIES
    if (typeof difficultyToUse === 'string') {
        difficultyToUse = Object.values(DIFFICULTIES).find(d => d.name.toUpperCase() === difficultyToUse.toUpperCase());
    }

    if (difficultyToUse && difficultyToUse.name) {
      rankingService.saveRanking(difficultyToUse.name, playerName || 'Anonymous', count, time, startTime);
      setGameStats({ count, time });
    }
    setView(GAME_VIEWS.RANKING);
  };

  const handleBackToLanding = () => {
    setPlayerName("");
    setDifficulty(null);
    setStartTime(null);
    setView(GAME_VIEWS.LANDING);
  };

  return (
    <main>
      <h1>Memory Game</h1>

      {view === GAME_VIEWS.LANDING && (
        <LandingPage onStartGame={handleStartGame} onShowRanking={() => setView(GAME_VIEWS.RANKING)} />
      )}

      {view === GAME_VIEWS.GAME && difficulty && (
        <MemoryBoard 
          key={difficulty.name}
          difficulty={difficulty}
          onBackToLanding={handleBackToLanding}
          onShowRanking={handleShowRanking}
          playerName={playerName}
          startTime={startTime}
        />
      )}

      {view === GAME_VIEWS.RANKING && (
        <Ranking 
          onBackToGame={difficulty ? () => setView(GAME_VIEWS.GAME) : null} 
          onBackToLanding={handleBackToLanding}
          currentPlayerName={playerName}
          currentMoves={gameStats.count}
          currentTime={gameStats.time}
          difficulty={difficulty}
        />
      )}
    </main>
  );
}
