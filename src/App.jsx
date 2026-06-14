import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Message from "./components/Message";
import Counter from "./components/Counter";
import LandingPage from "./components/LandingPage";
import Ranking from "./components/Ranking";
import { useMemoryGame } from "./hooks/useMemoryGame";
import { GAME_VIEWS } from "./constants";

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
    // TODO: Implement actual ranking saving logic here
    // Example: if (!timeout) { saveResultToLocalStorage(playerName, count, elapsedTime); }
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
          
          <Button onBtnClick={handleBackToLanding} text="Return to Landing" btnName="backToLandingBtn" />

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
                <Button onBtnClick={handleReset} text="Reset game" btnName="resetBtn" />
                <Button onBtnClick={handleShowRanking} text="Show Ranking" btnName="rankingBtn" />
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
