import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Message from "./components/Message";
import Counter from "./components/Counter";
import LandingPage from "./components/LandingPage";
import Ranking from "./components/Ranking";
import { useMemoryGame } from "./hooks/useMemoryGame";
import { GAME_VIEWS, STORAGE_KEY } from "./constants";

export default function App() {
  const [view, setView] = useState(GAME_VIEWS.LANDING);
  const [playerName, setPlayerName] = useState("");
  
  const {
    cards,
    backCard,
    matchedCards,
    count,
    points,
    result,
    isResetting,
    elapsedTime,
    timeout,
    gameStarted,
    handleReset,
    startGame,
    selectCard
  } = useMemoryGame();

  const handleStartGame = (name) => {
    setPlayerName(name);
    startGame();
    setView(GAME_VIEWS.GAME);
  };

  const handleShowRanking = () => {
    if (result && !timeout) {
      const currentRanking = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const newEntry = { name: playerName || 'Anonymous', moves: count, time: elapsedTime };
      const updatedRanking = [...currentRanking, newEntry]
        .sort((a, b) => a.moves - b.moves || a.time - b.time)
        .slice(0, 10);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRanking));
    }
    setView(GAME_VIEWS.RANKING);
  };

  const handleBackToLanding = () => {
    handleReset();
    setPlayerName("");
    setView(GAME_VIEWS.LANDING);
  };

  return (
    <main>
      <h1>Memory Game</h1>

      {view === GAME_VIEWS.LANDING && (
        <LandingPage onStartGame={handleStartGame} />
      )}

      {view === GAME_VIEWS.GAME && (
        <>
          <Counter count={count} points={points} time={elapsedTime} />
          <div className="table" role="grid" aria-label="Memory Game Board">
            {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                value={card.value}
                onCardClick={selectCard}
                isFlipped={backCard.some((c) => c.id === card.id)}
                isMatched={matchedCards.some((c) => c.id === card.id)}
                isResetting={isResetting}
              />
            ))}
          </div>
          
          <div className="navContainer">
            <Button onBtnClick={handleBackToLanding} text="GO BACK" btnName="backToLandingBtn" className="btn--nav" />
          </div>

          {timeout && (
            <div className="resultSection">
              <Message timeout={timeout} />
              <div className="resultButtons">
                <Button onBtnClick={handleReset} text="Reset game" btnName="resetBtn" />
              </div>
            </div>
          )}

          {result && (
            <div className="resultSection">
              <Message result={result} count={count} points={points} />
              <div className="resultButtons">
                <Button onBtnClick={handleReset} text="RESET" btnName="resetBtn" />
                <Button onBtnClick={handleShowRanking} text="LEADERBOARD" btnName="rankingBtn" />
              </div>
            </div>
          )}
        </>
      )}

      {view === GAME_VIEWS.RANKING && (
        <Ranking 
          onBackToGame={() => setView(GAME_VIEWS.GAME)} 
          currentPlayerName={playerName}
          currentMoves={count}
          currentTime={elapsedTime}
        />
      )}
    </main>
  );
}
